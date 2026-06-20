const fs = require("fs");
const path = require("path");

const filePath = path.resolve(process.cwd(), process.argv[2] || "data.json");

function parseDateValue(value) {
  if (!value) return null;
  const raw = String(value).trim();
  let y;
  let m;
  let d;

  if (/^\d{4}$/.test(raw)) {
    y = Number(raw);
    m = 1;
    d = 1;
  } else if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) {
    [y, m, d] = raw.split("-").map(Number);
  } else {
    const dm = raw.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);
    if (!dm) return { invalid: true, raw };
    d = Number(dm[1]);
    m = Number(dm[2]);
    y = Number(dm[3]);
  }

  const date = new Date(y, m - 1, d);
  if (date.getFullYear() !== y || date.getMonth() !== m - 1 || date.getDate() !== d) {
    return { invalid: true, raw };
  }
  return date;
}

function validate(data) {
  const errors = [];
  const warnings = [];

  if (!data || typeof data !== "object") {
    return { errors: ["Root data must be an object."], warnings };
  }
  if (!Array.isArray(data.people)) errors.push("Missing or invalid `people` array.");
  if (!Array.isArray(data.unions)) errors.push("Missing or invalid `unions` array.");
  if (errors.length) return { errors, warnings };

  const peopleIds = new Set();
  const unionIds = new Set();
  const childToUnions = new Map();
  const today = new Date();

  data.people.forEach((person, index) => {
    const label = person?.id || `people[${index}]`;
    if (!person || typeof person !== "object") {
      errors.push(`people[${index}] must be an object.`);
      return;
    }
    if (!person.id) {
      errors.push(`people[${index}] has no id.`);
    } else if (peopleIds.has(person.id)) {
      errors.push(`Duplicate person id: ${person.id}`);
    } else {
      peopleIds.add(person.id);
    }

    if (!String(person.name || "").trim()) warnings.push(`${label} has no name.`);
    if (!person.birth) warnings.push(`${label} has no birth date.`);

    const birth = parseDateValue(person.birth);
    const death = parseDateValue(person.death);
    if (birth?.invalid) errors.push(`${label} has invalid birth date: ${birth.raw}`);
    if (death?.invalid) errors.push(`${label} has invalid death date: ${death.raw}`);
    if (birth instanceof Date && birth > today) warnings.push(`${label} birth date is in the future.`);
    if (birth instanceof Date && death instanceof Date && death < birth) {
      errors.push(`${label} death date is before birth date.`);
    }
  });

  data.unions.forEach((union, index) => {
    const label = union?.id || `unions[${index}]`;
    if (!union || typeof union !== "object") {
      errors.push(`unions[${index}] must be an object.`);
      return;
    }
    if (!union.id) {
      errors.push(`unions[${index}] has no id.`);
    } else if (unionIds.has(union.id)) {
      errors.push(`Duplicate union id: ${union.id}`);
    } else {
      unionIds.add(union.id);
    }

    if (!union.partner1 && !union.partner2) warnings.push(`${label} has no partners.`);
    if (union.partner1 && !peopleIds.has(union.partner1)) errors.push(`${label} partner1 missing person: ${union.partner1}`);
    if (union.partner2 && !peopleIds.has(union.partner2)) errors.push(`${label} partner2 missing person: ${union.partner2}`);
    if (union.partner1 && union.partner2 && union.partner1 === union.partner2) {
      errors.push(`${label} has same partner1 and partner2: ${union.partner1}`);
    }
    if (!Array.isArray(union.children)) {
      errors.push(`${label} children must be an array.`);
      return;
    }
    const childSet = new Set();
    union.children.forEach((childId) => {
      if (!peopleIds.has(childId)) errors.push(`${label} child missing person: ${childId}`);
      if (childSet.has(childId)) errors.push(`${label} has duplicate child id: ${childId}`);
      childSet.add(childId);
      if (!childToUnions.has(childId)) childToUnions.set(childId, []);
      childToUnions.get(childId).push(label);
    });
  });

  childToUnions.forEach((unions, childId) => {
    if (unions.length > 1) {
      errors.push(`Child ${childId} appears in multiple unions: ${unions.join(", ")}`);
    }
  });

  return { errors, warnings };
}

function main() {
  let data;
  try {
    data = JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    console.error(`Failed to read/parse ${filePath}`);
    console.error(error.message);
    process.exit(1);
  }

  const { errors, warnings } = validate(data);
  if (errors.length) {
    console.error(`Data validation failed: ${errors.length} error(s)`);
    errors.forEach((error) => console.error(`ERROR: ${error}`));
  }
  if (warnings.length) {
    console.warn(`Data validation warnings: ${warnings.length} warning(s)`);
    warnings.forEach((warning) => console.warn(`WARN: ${warning}`));
  }
  if (!errors.length && !warnings.length) {
    console.log(`Data validation OK: ${data.people.length} people, ${data.unions.length} unions.`);
  } else if (!errors.length) {
    console.log(`Data validation OK with warnings: ${data.people.length} people, ${data.unions.length} unions.`);
  }
  process.exit(errors.length ? 1 : 0);
}

main();
