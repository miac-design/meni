/* Content checks for the lesson files. Run: node tools/check-lessons.mjs
   Guards the writing rules that matter for these learners:
   unique ids, exactly two answers, a skill line on every lesson,
   and full English/Spanish parity (same ids, same order, same shape). */

import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));

/* The lesson files are plain browser scripts (no exports); evaluate them. */
function loadGlobals(file, names) {
  const src = readFileSync(join(root, file), "utf8");
  const fn = new Function(`${src}; return { ${names.join(", ")} };`);
  return fn();
}

const en = loadGlobals("js/lessons.js", ["CORE_LESSONS", "PACKS"]);
const es = loadGlobals("js/lessons.es.js", ["CORE_LESSONS_ES", "PACKS_ES"]);

const problems = [];

function checkSet(label, lessons) {
  const seen = new Set();
  for (const l of lessons) {
    const where = `${label} ${l.id || "(missing id)"}`;
    if (!l.id) problems.push(`${where}: missing id`);
    if (seen.has(l.id)) problems.push(`${where}: duplicate id`);
    seen.add(l.id);
    for (const field of ["title", "teach", "question", "skill"]) {
      if (!l[field] || !String(l[field]).trim()) problems.push(`${where}: empty ${field}`);
    }
    if (!Array.isArray(l.answers) || l.answers.length !== 2) {
      problems.push(`${where}: needs exactly two answers`);
    } else {
      l.answers.forEach((a, i) => {
        if (!a.label || !a.label.trim()) problems.push(`${where}: answer ${i + 1} empty label`);
        if (!a.response || !a.response.trim()) problems.push(`${where}: answer ${i + 1} empty response`);
      });
    }
    if (l.alert !== undefined && l.alert !== true) problems.push(`${where}: alert must be true or absent`);
  }
}

function checkParity(label, a, b) {
  const idsA = a.map((l) => l.id).join(",");
  const idsB = b.map((l) => l.id).join(",");
  if (idsA !== idsB) {
    problems.push(`${label}: English and Spanish ids differ\n  en: ${idsA}\n  es: ${idsB}`);
    return;
  }
  a.forEach((la, i) => {
    const lb = b[i];
    for (const opt of ["alert", "share", "mission"]) {
      if (Boolean(la[opt]) !== Boolean(lb[opt])) {
        problems.push(`${label} ${la.id}: '${opt}' present in one language but not the other`);
      }
    }
  });
}

const sets = [
  ["core en", en.CORE_LESSONS],
  ["core es", es.CORE_LESSONS_ES],
  ["everyday en", en.PACKS.everyday],
  ["everyday es", es.PACKS_ES.everyday],
  ["work en", en.PACKS.work],
  ["work es", es.PACKS_ES.work],
];
for (const [label, lessons] of sets) checkSet(label, lessons);

checkParity("core", en.CORE_LESSONS, es.CORE_LESSONS_ES);
checkParity("everyday", en.PACKS.everyday, es.PACKS_ES.everyday);
checkParity("work", en.PACKS.work, es.PACKS_ES.work);

/* Every journey must be 22 days: 12 core + 10 pack. */
if (en.CORE_LESSONS.length !== 12) problems.push(`core en: expected 12 lessons, got ${en.CORE_LESSONS.length}`);
for (const p of ["everyday", "work"]) {
  if (en.PACKS[p].length !== 10) problems.push(`${p} en: expected 10 lessons, got ${en.PACKS[p].length}`);
}

if (problems.length) {
  console.error(`FAIL — ${problems.length} problem(s):\n` + problems.map((p) => `  - ${p}`).join("\n"));
  process.exit(1);
}
const total = sets.reduce((n, [, l]) => n + l.length, 0);
console.log(`OK — ${total} lessons checked (both languages), all rules hold.`);
