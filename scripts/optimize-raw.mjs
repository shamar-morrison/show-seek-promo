// Processes fetched assets in images/raw (badges, avatars, posters) into src/assets.
import sharp from "sharp";
import { mkdirSync, readdirSync, copyFileSync } from "node:fs";

const raw = "images/raw";
const out = "src/assets";
for (const d of ["badges", "avatars", "posters"]) mkdirSync(`${out}/${d}`, { recursive: true });

await sharp(`${raw}/badges/google-play.png`).trim().webp({ quality: 92 }).toFile(`${out}/badges/google-play.webp`);
// Google Play mark, cropped from the official badge; its black backdrop is keyed out into alpha.
{
  const { data, info } = await sharp(`${raw}/badges/google-play.png`)
    .extract({ left: 80, top: 69, width: 102, height: 113 })
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const peak = Math.max(data[i], data[i + 1], data[i + 2]);
    const a = Math.min(255, peak * 1.6);
    if (a > 0) for (let c = 0; c < 3; c++) data[i + c] = Math.min(255, Math.round((data[i + c] * 255) / a));
    data[i + 3] = Math.round(a);
  }
  await sharp(data, { raw: info }).resize(48).webp({ quality: 92 }).toFile(`${out}/badges/google-play-mark.webp`);
}
copyFileSync(`${raw}/badges/app-store.svg`, `${out}/badges/app-store.svg`);

for (const f of readdirSync(`${raw}/avatars`)) {
  await sharp(`${raw}/avatars/${f}`).resize(96, 96).webp({ quality: 85 }).toFile(`${out}/avatars/${f.replace(/\.img$/, ".webp")}`);
}
for (const f of readdirSync(`${raw}/posters`)) {
  await sharp(`${raw}/posters/${f}`).resize(240).webp({ quality: 72 }).toFile(`${out}/posters/${f.replace(/\.jpg$/, ".webp")}`);
}
// hero_2.png has the transparency checkerboard baked in; it shares hero.png's device frame, so reuse that alpha mask.
const { data: alpha } = await sharp("images/hero.png").ensureAlpha().extractChannel(3).raw().toBuffer({ resolveWithObject: true });
const { data: rgb, info } = await sharp("images/hero_2.png").removeAlpha().raw().toBuffer({ resolveWithObject: true });
const rgba = Buffer.alloc(info.width * info.height * 4);
for (let i = 0; i < info.width * info.height; i++) {
  rgba[i * 4] = rgb[i * 3];
  rgba[i * 4 + 1] = rgb[i * 3 + 1];
  rgba[i * 4 + 2] = rgb[i * 3 + 2];
  rgba[i * 4 + 3] = alpha[i];
}
const hero2 = await sharp(rgba, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();
await sharp(hero2).trim({ threshold: 40 }).resize({ width: 720 }).webp({ quality: 82 }).toFile(`${out}/hero_2.webp`);

mkdirSync(`${out}/backdrops`, { recursive: true });
for (const name of ["avengers", "dune-part-two"]) {
  await sharp(`${raw}/backdrops/${name}.jpg`).resize(1280).webp({ quality: 70 }).toFile(`${out}/backdrops/${name}.webp`);
}

const gp = await sharp(`${out}/badges/google-play.webp`).metadata();
console.log("google-play badge", gp.width, gp.height);
