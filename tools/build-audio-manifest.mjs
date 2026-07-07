/* Regenerates js/audio-manifest.js from the recordings in audio/<lang>/.
   Run: node tools/build-audio-manifest.mjs
   File naming (from tools/record-audio.html): <lessonId>.<part>.<lang>.<ext>
   e.g. core-1.teach.en.m4a — placed in audio/en/ or audio/es/. */

import { readdirSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const files = {};

for (const lang of ["en", "es"]) {
  const dir = join(root, "audio", lang);
  if (!existsSync(dir)) continue;
  for (const f of readdirSync(dir).sort()) {
    const m = f.match(/^(.+)\.(teach|ask|done)(?:\.[a-z]{2})?\.(m4a|mp3|webm|ogg|wav)$/);
    if (!m) continue;
    files[`${lang}/${m[1]}.${m[2]}`] = `audio/${lang}/${f}`;
  }
}

const body = `/* Human recordings available to "Read it to me" — generated file.
   Run \`node tools/build-audio-manifest.mjs\` after adding recordings to
   audio/<lang>/ (see tools/record-audio.html for the recording booth).
   Keys are "<lang>/<lessonId>.<part>" where part is teach | ask | done.
   When a key exists, the recording plays; otherwise the phone's best
   installed voice reads the text. */

const AUDIO_FILES = ${JSON.stringify(files, null, 2)};
`;

writeFileSync(join(root, "js/audio-manifest.js"), body);
console.log(`js/audio-manifest.js written — ${Object.keys(files).length} recording(s) listed.`);
