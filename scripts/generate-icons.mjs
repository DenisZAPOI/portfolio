// Génère un PNG par icône pixel art (scripts/pixel-art.mjs) dans public/icons/.
// Lancement : `npm run icons`. Les PNG sont à la taille du dessin (1 pixel = 1 pixel) : le site
// les agrandit sans flou avec `image-rendering: pixelated`.

import { mkdirSync, writeFileSync } from "node:fs";
import { deflateSync } from "node:zlib";
import { colors, icons } from "./pixel-art.mjs";

const OUTPUT_DIR = new URL("../public/icons/", import.meta.url);

/** "#e43b44" → [228, 59, 68] */
function hexToRgb(hex) {
  return [1, 3, 5].map((start) => parseInt(hex.slice(start, start + 2), 16));
}

// Table du CRC-32 utilisé par chaque bloc (« chunk ») d'un fichier PNG.
const crcTable = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  }
  return c >>> 0;
});

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc = crcTable[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

/** Un bloc PNG : longueur, type, données, CRC. */
function chunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  const typeAndData = Buffer.concat([Buffer.from(type, "ascii"), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(crc32(typeAndData));
  return Buffer.concat([length, typeAndData, crc]);
}

/** Dessin en texte → fichier PNG en couleurs RGBA (le "." devient transparent). */
function artToPng(art) {
  const width = art[0].length;
  const height = art.length;

  // Chaque rangée commence par un octet de filtre (0 = aucun), puis 4 octets par pixel.
  const rows = art.map((row) => {
    const pixels = [...row].flatMap((char) => (char === "." ? [0, 0, 0, 0] : [...hexToRgb(colors[char]), 255]));
    return Buffer.from([0, ...pixels]);
  });

  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8; // 8 bits par couleur
  header[9] = 6; // RGBA
  // octets 10 à 12 : compression, filtre, entrelacement par défaut (0)

  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), // signature PNG
    chunk("IHDR", header),
    chunk("IDAT", deflateSync(Buffer.concat(rows))),
    chunk("IEND", Buffer.alloc(0)),
  ]);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
for (const [name, art] of Object.entries(icons)) {
  const unknown = [...new Set(art.join(""))].filter((char) => char !== "." && !(char in colors));
  if (unknown.length > 0) {
    throw new Error(`${name} : couleur(s) inconnue(s) ${unknown.join(", ")}`);
  }
  writeFileSync(new URL(`${name}.png`, OUTPUT_DIR), artToPng(art));
  console.log(`public/icons/${name}.png  ${art[0].length}×${art.length}`);
}
