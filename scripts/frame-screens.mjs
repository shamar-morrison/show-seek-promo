// Drops raw app screenshots into the phone frame used by the other feature mockups.
// Usage: node scripts/frame-screens.mjs  → images/<name>_front.png for each images/raw/screens/<name>.png
import sharp from 'sharp';
import { readdir } from 'node:fs/promises';

const TEMPLATE = 'images/watch_lists_front.png';
// Screen area inside the template's bezel, measured from the template's inner ring.
const SCREEN = { left: 246, top: 170, width: 729, height: 1633, radius: 72 };
// Punch-hole camera, copied back from the template so it sits over the new status bar.
const CAMERA = { cx: 700, cy: 211, r: 10 };

const roundedMask = Buffer.from(
  `<svg width="${SCREEN.width}" height="${SCREEN.height}"><rect width="100%" height="100%" rx="${SCREEN.radius}" ry="${SCREEN.radius}" fill="#fff"/></svg>`,
);
const cameraSize = CAMERA.r * 2;
const cameraMask = Buffer.from(
  `<svg width="${cameraSize}" height="${cameraSize}"><circle cx="${CAMERA.r}" cy="${CAMERA.r}" r="${CAMERA.r}" fill="#fff"/></svg>`,
);
const camera = await sharp(TEMPLATE)
  .extract({ left: CAMERA.cx - CAMERA.r, top: CAMERA.cy - CAMERA.r, width: cameraSize, height: cameraSize })
  .composite([{ input: cameraMask, blend: 'dest-in' }])
  .png()
  .toBuffer();

const names = (await readdir('images/raw/screens')).filter((f) => f.endsWith('.png'));
for (const file of names) {
  const screen = await sharp(`images/raw/screens/${file}`)
    .resize(SCREEN.width, SCREEN.height, { fit: 'cover', position: 'top' })
    .ensureAlpha()
    .composite([{ input: roundedMask, blend: 'dest-in' }])
    .png()
    .toBuffer();
  const out = `images/${file.replace('.png', '')}_front.png`;
  await sharp(TEMPLATE)
    .composite([
      { input: screen, left: SCREEN.left, top: SCREEN.top },
      { input: camera, left: CAMERA.cx - CAMERA.r, top: CAMERA.cy - CAMERA.r },
    ])
    .toFile(out);
  console.log(out);
}
