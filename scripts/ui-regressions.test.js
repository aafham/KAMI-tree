const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const source = fs.readFileSync(path.join(__dirname, "..", "app.js"), "utf8").replace(/\r\n/g, "\n");

// Exercise the actual page/navigation functions without installing a DOM library.
// Responsive geometry and computed contrast still require the browser QA noted
// in README; these state tests are deliberately not a substitute for that.
function element(view) {
  const classes = new Set();
  return {
    dataset: { webNav: view }, attributes: {}, handlers: {}, isConnected: true,
    focusCalls: 0,
    focus() { this.focusCalls += 1; },
    classList: {
      add: (name) => classes.add(name), remove: (name) => classes.delete(name),
      contains: (name) => classes.has(name),
      toggle(name, on) { if (on) classes.add(name); else classes.delete(name); },
    },
    setAttribute(name, value) { this.attributes[name] = value; },
    removeAttribute(name) { delete this.attributes[name]; },
    addEventListener(name, handler) { this.handlers[name] = handler; },
  };
}

function harness() {
  const buttons = ["home", "tree", "directory", "birthday", "timeline", "settings"].map(element);
  const close = element();
  const modal = element();
  modal.querySelector = () => close;
  const state = {
    settingsModal: modal, settingsReturnFocus: null, webNavButtons: buttons,
    viewMode: "timeline", navSurface: "timeline", scrollY: 900,
    viewTreeBtn: null, viewTimelineBtn: null, viewDirectoryBtn: null,
    directoryToggle: null, mobileDirectoryBtn: null, mobileTimelineBtn: null,
    document: { body: { dataset: {} }, activeElement: buttons[5] },
    applyViewMode() {}, applyLanguage() {}, savePrefs() {}, updateUrlState() {},
    renderScene() {}, applyZoom() {}, closeStoryPanel() {}, refreshIcons() {},
  };
  state.window = { scrollTo: ({ top }) => { state.scrollY = top; } };
  const context = vm.createContext(state);
  for (const name of ["updateViewSwitch", "openSettingsModal", "closeSettingsModal", "scrollToPageStart", "openDirectoryView", "openHomeSurface", "openTreeSurface"]) {
    const start = source.indexOf(`function ${name}(`);
    assert.ok(start >= 0, `${name} must exist`);
    vm.runInContext(source.slice(start, source.indexOf("\n}", start) + 2), context);
  }
  const start = source.indexOf('webNavButtons.forEach((button) => {\n  button.addEventListener("click",');
  assert.ok(start >= 0);
  vm.runInContext(source.slice(start, source.indexOf("// Swipe only", start)), context);
  return { state, buttons, modal, close, run: (code) => vm.runInContext(code, context) };
}

test("Settings highlight and aria-current agree without changing the underlying page", () => {
  const h = harness(); h.run("openSettingsModal(); updateViewSwitch()");
  assert.equal(h.state.document.body.dataset.navSurface, "timeline");
  assert.deepEqual(h.buttons.filter(b => b.attributes["aria-current"]).map(b => b.dataset.webNav), ["settings"]);
  assert.equal(h.close.focusCalls, 1);
});

test("Close restores the page highlight and opener focus without moving scroll", () => {
  const h = harness(); h.run("openSettingsModal(); closeSettingsModal()");
  assert.equal(h.modal.attributes["aria-hidden"], "true");
  assert.equal(h.buttons[4].attributes["aria-current"], "page");
  assert.equal(h.buttons[5].focusCalls, 1);
  assert.equal(h.state.scrollY, 900);
});

test("Closing while navigating or locking does not steal focus", () => {
  const h = harness(); h.run("openSettingsModal(); closeSettingsModal({ restoreFocus: false })");
  assert.equal(h.buttons[5].focusCalls, 0);
  assert.equal(h.state.settingsReturnFocus, null);
});

test("Repeated open/close keeps the original opener and is harmless", () => {
  const h = harness(); h.run("openSettingsModal(); openSettingsModal(); closeSettingsModal(); closeSettingsModal()");
  assert.equal(h.buttons[5].focusCalls, 1);
  assert.equal(h.close.focusCalls, 1);
});

for (const destination of ["home", "tree", "directory", "birthday", "timeline"]) {
  test(`Main navigation to ${destination} starts at the top and dismisses Settings`, () => {
    const h = harness(); h.run("openSettingsModal()");
    h.buttons.find(b => b.dataset.webNav === destination).handlers.click();
    assert.equal(h.state.scrollY, 0);
    assert.equal(h.state.navSurface, destination);
    assert.equal(h.modal.classList.contains("is-open"), false);
    assert.equal(h.buttons[5].focusCalls, 0);
    assert.deepEqual(h.buttons.filter(b => b.attributes["aria-current"]).map(b => b.dataset.webNav), [destination]);
  });
}

test("Selecting Directory again returns to its header", () => {
  const h = harness(); h.state.viewMode = "directory"; h.state.navSurface = "directory";
  h.run("openDirectoryView()");
  assert.equal(h.state.scrollY, 0);
});
