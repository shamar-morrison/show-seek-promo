// Snapshots TMDB data (title, date, runtime, episode count, poster) for every title referenced in src/watch/orders/
// into src/watch/tmdb.json, which is committed. Builds read the snapshot, so they never need a TMDB key.
//
// Run after adding or changing a watch order: npm run fetch:watch (reads TMDB_API_KEY from .env or the environment).
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const key = process.env.TMDB_API_KEY;
if (!key) {
  console.error("Set TMDB_API_KEY (a TMDB v3 API key) in .env or the environment to fetch watch-order data.");
  process.exit(1);
}

const ORDERS_DIR = "src/watch/orders";
const OUT = "src/watch/tmdb.json";

async function api(path) {
  const url = new URL(`https://api.themoviedb.org/3/${path}`);
  url.searchParams.set("api_key", key);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`TMDB ${res.status} for ${path}`);
  return res.json();
}

const sumRuntime = (episodes) => episodes.reduce((total, e) => total + (e.runtime ?? 0), 0);

async function fetchRef(ref) {
  const [type, id, , season] = ref.split("/");
  if (type === "movie") {
    const m = await api(`movie/${id}`);
    return { title: m.title, date: m.release_date, runtime: m.runtime || null, poster: m.poster_path };
  }
  if (season !== undefined) {
    const s = await api(`tv/${id}/season/${season}`);
    return {
      title: s.name,
      date: s.air_date,
      episodes: s.episodes.length,
      runtime: sumRuntime(s.episodes) || null,
      poster: s.poster_path,
    };
  }
  // A whole show: count regular seasons only (season 0 holds specials).
  const show = await api(`tv/${id}`);
  const seasons = await Promise.all(
    show.seasons.filter((s) => s.season_number > 0).map((s) => api(`tv/${id}/season/${s.season_number}`)),
  );
  const episodes = seasons.flatMap((s) => s.episodes);
  return {
    title: show.name,
    date: show.first_air_date,
    episodes: episodes.length,
    runtime: sumRuntime(episodes) || null,
    poster: show.poster_path,
  };
}

const files = (await readdir(ORDERS_DIR)).filter((f) => f.endsWith(".tsx") || f.endsWith(".ts"));
const refs = new Set();
for (const file of files) {
  const source = await readFile(join(ORDERS_DIR, file), "utf8");
  for (const m of source.matchAll(/"((?:movie|tv)\/\d+(?:\/season\/\d+)?)"/g)) refs.add(m[1]);
}

const data = {};
for (const ref of [...refs].sort()) {
  data[ref] = await fetchRef(ref);
  console.log(`${ref.padEnd(24)} ${data[ref].title} (${data[ref].date})`);
}
await writeFile(OUT, `${JSON.stringify(data, null, 2)}\n`);
console.log(`Wrote ${OUT} (${refs.size} titles)`);
