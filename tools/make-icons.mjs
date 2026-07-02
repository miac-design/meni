/* Generates the PWA icons (Meni mark on cream) as PNGs with no dependencies.
   Run: node tools/make-icons.mjs
   Outputs: icons/icon-192.png, icons/icon-512.png,
            icons/icon-512-maskable.png, icons/apple-touch-icon.png */

import { deflateSync } from "node:zlib";
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = join(dirname(fileURLToPath(import.meta.url)), "..", "icons");

/* ---------- Palette ---------- */
const hex = (s) => [1, 3, 5].map((i) => parseInt(s.slice(i, i + 2), 16));
const CREAM = hex("#FFF9F2");
const ORANGE = hex("#E8872B");
const PALE = hex("#F6C08A");
const BROWN = hex("#6B3E14");
const NAVY = hex("#1B2036");
const RED = hex("#D6452B");

/* ---------- Meni mark as filled ellipses in a 120x120 space ----------
   Outlines are drawn as a larger shape underneath its fill
   (outer radius = r + strokeWidth/2, inner = r - strokeWidth/2). */
function markShapes() {
  const s = [];
  const outlined = (cx, cy, rx, ry, sw, fill) => {
    s.push([cx, cy, rx + sw / 2, ry + sw / 2, BROWN]);
    s.push([cx, cy, rx - sw / 2, ry - sw / 2, fill]);
  };
  outlined(29, 30, 15, 15, 3, ORANGE); // left ear
  outlined(91, 30, 15, 15, 3, ORANGE); // right ear
  s.push([29, 30, 7, 7, PALE]); // inner ears
  s.push([91, 30, 7, 7, PALE]);
  outlined(60, 19, 5.5, 9, 2.5, RED); // red tuft
  outlined(60, 64, 42, 42, 3, ORANGE); // head
  outlined(60, 79, 19, 14, 2.5, PALE); // muzzle
  s.push([42, 57, 8, 8, NAVY]); // eyes: wide-set, oversized, navy
  s.push([78, 57, 8, 8, NAVY]);
  s.push([44.5, 54.5, 2.4, 2.4, CREAM]); // eye glints
  s.push([80.5, 54.5, 2.4, 2.4, CREAM]);
  s.push([60, 74, 6, 4.5, RED]); // nose
  return s;
}

/* ---------- Rasterizer with 3x3 supersampled edge coverage ---------- */
function render(size, scale, offX, offY) {
  const img = new Uint8Array(size * size * 3);
  for (let i = 0; i < img.length; i += 3) {
    img[i] = CREAM[0];
    img[i + 1] = CREAM[1];
    img[i + 2] = CREAM[2];
  }
  for (const [cx, cy, rx, ry, color] of markShapes()) {
    const pcx = offX + cx * scale;
    const pcy = offY + cy * scale;
    const prx = rx * scale;
    const pry = ry * scale;
    const x0 = Math.max(0, Math.floor(pcx - prx - 1));
    const x1 = Math.min(size - 1, Math.ceil(pcx + prx + 1));
    const y0 = Math.max(0, Math.floor(pcy - pry - 1));
    const y1 = Math.min(size - 1, Math.ceil(pcy + pry + 1));
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        let inside = 0;
        for (let sy = 0; sy < 3; sy++) {
          for (let sx = 0; sx < 3; sx++) {
            const dx = (x + (sx + 0.5) / 3 - pcx) / prx;
            const dy = (y + (sy + 0.5) / 3 - pcy) / pry;
            if (dx * dx + dy * dy <= 1) inside++;
          }
        }
        if (!inside) continue;
        const a = inside / 9;
        const i = (y * size + x) * 3;
        img[i] = Math.round(color[0] * a + img[i] * (1 - a));
        img[i + 1] = Math.round(color[1] * a + img[i + 1] * (1 - a));
        img[i + 2] = Math.round(color[2] * a + img[i + 2] * (1 - a));
      }
    }
  }
  return img;
}

/* ---------- Minimal PNG encoder (8-bit RGB, filter 0) ---------- */
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (const b of buf) c = CRC_TABLE[(c ^ b) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function pngChunk(type, data) {
  const out = Buffer.alloc(12 + data.length);
  out.writeUInt32BE(data.length, 0);
  out.write(type, 4, "ascii");
  data.copy(out, 8);
  out.writeUInt32BE(crc32(out.subarray(4, 8 + data.length)), 8 + data.length);
  return out;
}

function encodePNG(size, rgb) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(size, 0);
  ihdr.writeUInt32BE(size, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 2; // color type: truecolor RGB
  const raw = Buffer.alloc(size * (size * 3 + 1));
  for (let y = 0; y < size; y++) {
    raw[y * (size * 3 + 1)] = 0; // filter: none
    Buffer.from(rgb.buffer, y * size * 3, size * 3).copy(raw, y * (size * 3 + 1) + 1);
  }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    pngChunk("IHDR", ihdr),
    pngChunk("IDAT", deflateSync(raw, { level: 9 })),
    pngChunk("IEND", Buffer.alloc(0)),
  ]);
}

/* ---------- Emit the icon set ---------- */
mkdirSync(OUT, { recursive: true });

function emit(name, size, artScale) {
  // Art occupies artScale of the canvas, centered on the mark's visual center (60, 62).
  const scale = (size / 120) * artScale;
  const offX = size / 2 - 60 * scale;
  const offY = size / 2 - 62 * scale;
  writeFileSync(join(OUT, name), encodePNG(size, render(size, scale, offX, offY)));
  console.log("wrote icons/" + name);
}

emit("icon-192.png", 192, 0.94);
emit("icon-512.png", 512, 0.94);
emit("apple-touch-icon.png", 180, 0.94);
emit("icon-512-maskable.png", 512, 0.62); // safe zone for adaptive masks
