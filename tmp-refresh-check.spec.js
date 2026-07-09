const { test, expect } = require("@playwright/test");

test("site remains usable after refresh with persisted browser storage", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });

  await page.goto("http://127.0.0.1:8765/", { waitUntil: "networkidle" });
  await expect(page.locator(".person-card").first()).toBeVisible({ timeout: 10000 });
  const firstCount = await page.locator(".person-card").count();
  await page.reload({ waitUntil: "networkidle" });
  await expect(page.locator(".person-card").first()).toBeVisible({ timeout: 10000 });
  const secondCount = await page.locator(".person-card").count();

  await expect.poll(() => firstCount).toBeGreaterThan(0);
  expect(secondCount).toBeGreaterThan(0);
  expect(errors).toEqual([]);
});
