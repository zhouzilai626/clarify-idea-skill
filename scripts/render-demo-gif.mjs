import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { deflateSync } from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const outPath = join(root, "assets", "demo.gif");

const width = 960;
const height = 540;
const scale = 2;
const w = Math.floor(width / scale);
const h = Math.floor(height / scale);

const palette = [
  [18, 24, 38],
  [31, 41, 55],
  [55, 65, 81],
  [75, 85, 99],
  [107, 114, 128],
  [156, 163, 175],
  [209, 213, 219],
  [243, 244, 246],
  [255, 255, 255],
  [59, 130, 246],
  [14, 165, 233],
  [16, 185, 129],
  [245, 158, 11],
  [239, 68, 68],
  [99, 102, 241],
  [236, 253, 245],
];

const C = {
  bg: 0,
  panel: 1,
  line: 3,
  text: 8,
  muted: 6,
  blue: 9,
  sky: 10,
  green: 11,
  amber: 12,
  red: 13,
  indigo: 14,
  pale: 15,
};

const font = {
  " ": ["000", "000", "000", "000", "000", "000", "000"],
  "!": ["010", "010", "010", "010", "010", "000", "010"],
  "\"": ["101", "101", "000", "000", "000", "000", "000"],
  "#": ["101", "111", "101", "101", "111", "101", "000"],
  "%": ["10001", "00010", "00100", "01000", "10001", "00000", "00000"],
  "&": ["010", "101", "010", "101", "101", "010", "001"],
  "'": ["010", "010", "000", "000", "000", "000", "000"],
  "(": ["001", "010", "100", "100", "100", "010", "001"],
  ")": ["100", "010", "001", "001", "001", "010", "100"],
  "*": ["000", "101", "010", "111", "010", "101", "000"],
  "+": ["000", "010", "010", "111", "010", "010", "000"],
  ",": ["000", "000", "000", "000", "010", "010", "100"],
  "-": ["000", "000", "000", "111", "000", "000", "000"],
  ".": ["000", "000", "000", "000", "000", "010", "010"],
  "/": ["001", "001", "010", "010", "100", "100", "000"],
  "0": ["111", "101", "101", "101", "101", "101", "111"],
  "1": ["010", "110", "010", "010", "010", "010", "111"],
  "2": ["111", "001", "001", "111", "100", "100", "111"],
  "3": ["111", "001", "001", "111", "001", "001", "111"],
  "4": ["101", "101", "101", "111", "001", "001", "001"],
  "5": ["111", "100", "100", "111", "001", "001", "111"],
  "6": ["111", "100", "100", "111", "101", "101", "111"],
  "7": ["111", "001", "001", "010", "010", "100", "100"],
  "8": ["111", "101", "101", "111", "101", "101", "111"],
  "9": ["111", "101", "101", "111", "001", "001", "111"],
  ":": ["000", "010", "010", "000", "010", "010", "000"],
  ";": ["000", "010", "010", "000", "010", "010", "100"],
  "<": ["001", "010", "100", "010", "001", "000", "000"],
  "=": ["000", "111", "000", "111", "000", "000", "000"],
  ">": ["100", "010", "001", "010", "100", "000", "000"],
  "?": ["111", "001", "001", "010", "010", "000", "010"],
  "@": ["11111", "10001", "10111", "10101", "10111", "10000", "11111"],
  A: ["010", "101", "101", "111", "101", "101", "101"],
  B: ["110", "101", "101", "110", "101", "101", "110"],
  C: ["011", "100", "100", "100", "100", "100", "011"],
  D: ["110", "101", "101", "101", "101", "101", "110"],
  E: ["111", "100", "100", "110", "100", "100", "111"],
  F: ["111", "100", "100", "110", "100", "100", "100"],
  G: ["011", "100", "100", "101", "101", "101", "011"],
  H: ["101", "101", "101", "111", "101", "101", "101"],
  I: ["111", "010", "010", "010", "010", "010", "111"],
  J: ["001", "001", "001", "001", "001", "101", "010"],
  K: ["101", "101", "110", "100", "110", "101", "101"],
  L: ["100", "100", "100", "100", "100", "100", "111"],
  M: ["10001", "11011", "10101", "10101", "10001", "10001", "10001"],
  N: ["101", "111", "111", "111", "111", "111", "101"],
  O: ["010", "101", "101", "101", "101", "101", "010"],
  P: ["110", "101", "101", "110", "100", "100", "100"],
  Q: ["010", "101", "101", "101", "101", "010", "001"],
  R: ["110", "101", "101", "110", "110", "101", "101"],
  S: ["011", "100", "100", "010", "001", "001", "110"],
  T: ["111", "010", "010", "010", "010", "010", "010"],
  U: ["101", "101", "101", "101", "101", "101", "111"],
  V: ["101", "101", "101", "101", "101", "101", "010"],
  W: ["10001", "10001", "10001", "10101", "10101", "11011", "10001"],
  X: ["101", "101", "101", "010", "101", "101", "101"],
  Y: ["101", "101", "101", "010", "010", "010", "010"],
  Z: ["111", "001", "001", "010", "100", "100", "111"],
  "[": ["111", "100", "100", "100", "100", "100", "111"],
  "]": ["111", "001", "001", "001", "001", "001", "111"],
  "_": ["000", "000", "000", "000", "000", "000", "111"],
  "|": ["010", "010", "010", "010", "010", "010", "010"],
};

for (const ch of "abcdefghijklmnopqrstuvwxyz") font[ch] = font[ch.toUpperCase()];

function lzwEncode(indices, minCodeSize = 8) {
  const clear = 1 << minCodeSize;
  const end = clear + 1;
  const codeSize = minCodeSize + 1;
  const bits = [];
  const writeCode = (code) => {
    for (let i = 0; i < codeSize; i++) bits.push((code >> i) & 1);
  };

  // Use frequent clear codes instead of dictionary compression. The output is
  // larger, but the stream is simple and stable across GIF decoders.
  for (let i = 0; i < indices.length; i++) {
    writeCode(clear);
    writeCode(indices[i]);
  }
  writeCode(end);
  const bytes = [];
  for (let i = 0; i < bits.length; i += 8) {
    let byte = 0;
    for (let bit = 0; bit < 8; bit++) byte |= (bits[i + bit] || 0) << bit;
    bytes.push(byte);
  }
  return Buffer.from(bytes);
}

function subBlocks(buf) {
  const chunks = [];
  for (let i = 0; i < buf.length; i += 255) {
    const part = buf.subarray(i, i + 255);
    chunks.push(Buffer.from([part.length]), part);
  }
  chunks.push(Buffer.from([0]));
  return Buffer.concat(chunks);
}

function makeCanvas() {
  return new Uint8Array(w * h).fill(C.bg);
}

function rect(img, x, y, rw, rh, color) {
  x = Math.max(0, Math.floor(x / scale));
  y = Math.max(0, Math.floor(y / scale));
  rw = Math.floor(rw / scale);
  rh = Math.floor(rh / scale);
  for (let yy = y; yy < Math.min(h, y + rh); yy++) {
    for (let xx = x; xx < Math.min(w, x + rw); xx++) img[yy * w + xx] = color;
  }
}

function border(img, x, y, rw, rh, color) {
  rect(img, x, y, rw, 2, color);
  rect(img, x, y + rh - 2, rw, 2, color);
  rect(img, x, y, 2, rh, color);
  rect(img, x + rw - 2, y, 2, rh, color);
}

function text(img, str, x, y, color = C.text, size = 3) {
  let cursor = Math.floor(x / scale);
  const top = Math.floor(y / scale);
  const s = Math.max(1, Math.floor(size / scale));
  for (const raw of str) {
    const ch = font[raw] ? raw : raw.toUpperCase();
    const glyph = font[ch] || font["?"];
    const gw = glyph[0].length;
    for (let gy = 0; gy < glyph.length; gy++) {
      for (let gx = 0; gx < gw; gx++) {
        if (glyph[gy][gx] !== "1") continue;
        for (let sy = 0; sy < s; sy++) {
          for (let sx = 0; sx < s; sx++) {
            const px = cursor + gx * s + sx;
            const py = top + gy * s + sy;
            if (px >= 0 && px < w && py >= 0 && py < h) img[py * w + px] = color;
          }
        }
      }
    }
    cursor += (gw + 1) * s;
  }
}

function bullet(img, y, label, color = C.green) {
  rect(img, 72, y + 4, 10, 10, color);
  text(img, label, 94, y, C.text, 4);
}

function base(title, step) {
  const img = makeCanvas();
  rect(img, 0, 0, width, height, C.bg);
  rect(img, 0, 0, width, 76, C.panel);
  text(img, "clarify-idea", 38, 26, C.sky, 5);
  text(img, step, 760, 30, C.muted, 3);
  text(img, title, 58, 116, C.text, 5);
  return img;
}

const frames = [];

{
  const img = base("FROM A VAGUE IDEA", "1/4");
  rect(img, 58, 178, 844, 120, C.panel);
  border(img, 58, 178, 844, 120, C.line);
  text(img, "INPUT", 82, 206, C.amber, 4);
  text(img, "camera in my recorder is annoying", 82, 250, C.text, 4);
  text(img, "i have to adjust it every time", 82, 286, C.muted, 3);
  rect(img, 58, 348, 844, 86, C.panel);
  text(img, "GOAL: turn it into something a user can confirm", 82, 382, C.green, 4);
  frames.push(img);
}

{
  const img = base("INTO A CLEAR BRIEF", "2/4");
  bullet(img, 184, "Need restatement", C.sky);
  bullet(img, 230, "Context and current pain", C.green);
  bullet(img, 276, "Ideal state and scope", C.amber);
  bullet(img, 322, "Risks and open questions", C.red);
  bullet(img, 368, "Acceptance checklist", C.indigo);
  frames.push(img);
}

{
  const img = base("WITH ACCEPTANCE STEPS", "3/4");
  rect(img, 62, 176, 390, 230, C.panel);
  border(img, 62, 176, 390, 230, C.line);
  text(img, "BEFORE", 86, 204, C.red, 4);
  text(img, "camera is bad", 86, 252, C.text, 4);
  text(img, "fix it", 86, 292, C.muted, 4);
  rect(img, 508, 176, 390, 230, C.panel);
  border(img, 508, 176, 390, 230, C.line);
  text(img, "AFTER", 532, 204, C.green, 4);
  text(img, "choose camera", 532, 250, C.text, 3);
  text(img, "record 10 seconds", 532, 286, C.text, 3);
  text(img, "export and reopen", 532, 322, C.text, 3);
  text(img, "settings remain", 532, 358, C.text, 3);
  frames.push(img);
}

{
  const img = base("VERIFIED AND REPLAYABLE", "4/4");
  rect(img, 70, 180, 820, 210, C.panel);
  border(img, 70, 180, 820, 210, C.line);
  text(img, "test-prompts.json", 102, 220, C.sky, 4);
  text(img, "3 prompts", 102, 270, C.text, 4);
  text(img, "3 recorded outputs", 102, 318, C.text, 4);
  text(img, "5/5 checks in README", 102, 366, C.green, 4);
  text(img, "Install: npx skills add zhouzilai626/clarify-idea-skill", 70, 448, C.muted, 3);
  frames.push(img);
}

function gif(frames) {
  const parts = [];
  parts.push(Buffer.from("GIF89a", "ascii"));
  const lsd = Buffer.alloc(7);
  lsd.writeUInt16LE(w, 0);
  lsd.writeUInt16LE(h, 2);
  lsd[4] = 0xf7;
  lsd[5] = 0;
  lsd[6] = 0;
  parts.push(lsd);
  const pal = Buffer.alloc(256 * 3);
  palette.forEach(([r, g, b], i) => {
    pal[i * 3] = r;
    pal[i * 3 + 1] = g;
    pal[i * 3 + 2] = b;
  });
  parts.push(pal);
  parts.push(Buffer.from([0x21, 0xff, 0x0b]), Buffer.from("NETSCAPE2.0", "ascii"), Buffer.from([0x03, 0x01, 0x00, 0x00, 0x00]));
  for (const frame of frames) {
    parts.push(Buffer.from([0x21, 0xf9, 0x04, 0x04, 0xe0, 0x00, 0x00, 0x00]));
    const id = Buffer.alloc(10);
    id[0] = 0x2c;
    id.writeUInt16LE(0, 1);
    id.writeUInt16LE(0, 3);
    id.writeUInt16LE(w, 5);
    id.writeUInt16LE(h, 7);
    id[9] = 0;
    parts.push(id, Buffer.from([0x08]), subBlocks(lzwEncode(frame, 8)));
  }
  parts.push(Buffer.from([0x3b]));
  return Buffer.concat(parts);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, gif(frames));
console.log(`wrote ${outPath}`);
