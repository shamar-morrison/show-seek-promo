// Smaller copies of the app screenshots for srcset, so phones and small screens don't download the 720px originals.
// Downscaled from the shipped 720px WebPs (same framing, trim and alpha) at the same quality.
// Re-run after replacing a screenshot:  node scripts/screenshot-variants.mjs
import { mkdirSync } from "node:fs";
import sharp from "sharp";

export const SCREENSHOTS = [
  "hero",
  "hero_2",
  "watch_progress",
  "watch_lists",
  "shuffle",
  "mood_picker",
  "set_reminder",
  "share_card",
];
const WIDTHS = [360, 540];
const OUT = "src/assets/responsive";

mkdirSync(OUT, { recursive: true });
for (const name of SCREENSHOTS) {
  for (const width of WIDTHS) {
    const file = `${OUT}/${name}-${width}.webp`;
    const info = await sharp(`src/assets/${name}.webp`).resize({ width }).webp({ quality: 82 }).toFile(file);
    console.log(`${file} ${info.width}x${info.height} ${(info.size / 1024).toFixed(0)} KB`);
  }
}
