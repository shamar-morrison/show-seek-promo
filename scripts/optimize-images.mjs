import sharp from 'sharp';
const [,, src, out] = process.argv;
const shots = ['hero','watch_lists_front','watch_progress_front','add_to_list_front','mood_picker_front','set_reminder_front','connect_trakt_front'];
for (const s of shots) {
  // trim transparent padding (threshold keeps soft shadow mostly out)
  const buf = await sharp(`${src}/${s}.png`).ensureAlpha().trim({ threshold: 40 }).toBuffer();
  const meta = await sharp(buf).metadata();
  await sharp(buf).resize({ width: 720, withoutEnlargement: true }).webp({ quality: 82 }).toFile(`${out}/src/assets/${s.replace('_front','')}.webp`);
  console.log(s, meta.width, meta.height);
}
await sharp(`${src}/logo.png`).resize(256).webp({ quality: 90 }).toFile(`${out}/src/assets/logo.webp`);
await sharp(`${src}/logo.png`).resize(32).png().toFile(`${out}/public/favicon-32.png`);
await sharp(`${src}/logo.png`).resize(180).png().toFile(`${out}/public/apple-touch-icon.png`);
await sharp(`${src}/og.png`).resize(1200).jpeg({ quality: 86 }).toFile(`${out}/public/og.jpg`);
// sample accent: ShowSeek wordmark in hero
const { data, info } = await sharp(`${src}/hero.png`).extract({ left: 300, top: 195, width: 300, height: 40 }).raw().toBuffer({ resolveWithObject: true });
let best=null; for (let i=0;i<data.length;i+=info.channels){const r=data[i],g=data[i+1],b=data[i+2]; if(r>150&&b>150&&g<110){best=[r,g,b];break;}}
console.log('accent', best && '#'+best.map(v=>v.toString(16).padStart(2,'0')).join(''));
