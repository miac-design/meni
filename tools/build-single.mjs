/* Builds dist/meni.html — the whole app as ONE self-contained file
   (styles, scripts, font, and icons inlined). Run: node tools/build-single.mjs

   Useful for hosts that take a single HTML file (design importers,
   email-a-copy, USB sticks at office hours). The single file runs the
   full app; only the offline service worker and the installable
   manifest need real multi-file hosting. */

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const read = (p) => readFileSync(join(root, p), "utf8");
const b64 = (p) => readFileSync(join(root, p)).toString("base64");

let html = read("index.html");

/* Font -> data URI inside the CSS, CSS -> inline <style>. */
const css = read("css/styles.css").replace(
  'url("../fonts/nunito-latin.woff2")',
  `url("data:font/woff2;base64,${b64("fonts/nunito-latin.woff2")}")`
);
html = html
  .replace(/\s*<link rel="preload"[^>]*>/, "")
  .replace(/<link rel="stylesheet"[^>]*>/, `<style>\n${css}\n</style>`);

/* Icons -> data URIs; drop the manifest (needs real multi-file hosting). */
html = html
  .replace(/\s*<link rel="manifest"[^>]*>/, "")
  .replace('href="icons/icon-192.png"', `href="data:image/png;base64,${b64("icons/icon-192.png")}"`)
  .replace('href="icons/apple-touch-icon.png"', `href="data:image/png;base64,${b64("icons/apple-touch-icon.png")}"`);

/* Scripts -> inline, in the same order. */
const scripts = ["js/meni.js", "js/lessons.js", "js/lessons.es.js", "js/app.js"]
  .map((p) => `<script>\n${read(p)}\n</script>`)
  .join("\n");
html = html.replace(/<script src="js\/meni\.js"><\/script>[\s\S]*<script src="js\/app\.js"><\/script>/, scripts);

mkdirSync(join(root, "dist"), { recursive: true });
writeFileSync(join(root, "dist/meni.html"), html);
console.log(`dist/meni.html written (${(html.length / 1024).toFixed(0)} KB)`);
