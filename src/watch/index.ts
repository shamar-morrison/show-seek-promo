import tmdbJson from "./tmdb.json";
import { alien } from "./orders/alien";
import { attackOnTitan } from "./orders/attackOnTitan";
import { demonSlayer } from "./orders/demonSlayer";
import { dragonBall } from "./orders/dragonBall";
import { fastFurious } from "./orders/fastFurious";
import { harryPotter } from "./orders/harryPotter";
import { jujutsuKaisen } from "./orders/jujutsuKaisen";
import { monsterverse } from "./orders/monsterverse";
import { naruto } from "./orders/naruto";
import { planetOfTheApes } from "./orders/planetOfTheApes";
import { steinsGate } from "./orders/steinsGate";
import { conjuring } from "./orders/conjuring";
import { fate } from "./orders/fate";
import { gundam } from "./orders/gundam";
import { johnWick } from "./orders/johnWick";
import { missionImpossible } from "./orders/missionImpossible";
import { monogatari } from "./orders/monogatari";
import { xMen } from "./orders/xMen";
import type { TmdbRef, WatchEntry, WatchList, WatchOrder } from "./types";

export { watchPath, type WatchOrder, type WatchList, type WatchEntry, type EntryTag } from "./types";

/** Every watch order, in the order they're listed on /watch. */
export const watchOrders: WatchOrder[] = [
  naruto,
  dragonBall,
  attackOnTitan,
  demonSlayer,
  jujutsuKaisen,
  monogatari,
  fate,
  steinsGate,
  gundam,
  harryPotter,
  fastFurious,
  missionImpossible,
  johnWick,
  xMen,
  alien,
  conjuring,
  planetOfTheApes,
  monsterverse,
];

export const watchOrderBySlug = (slug: string) => watchOrders.find((o) => o.slug === slug);

/** Snapshot written by scripts/fetch-watch-data.mjs. */
type TmdbItem = { title: string; date: string | null; runtime: number | null; episodes?: number; poster: string | null };
const tmdb = tmdbJson as Record<string, TmdbItem | undefined>;

export const posterUrl = (path: string, size: "w185" | "w342" = "w185") => `https://image.tmdb.org/t/p/${size}${path}`;

export type ResolvedEntry = Omit<WatchEntry, "year" | "episodes"> & {
  displayTitle: string;
  year: number | null;
  /** Total minutes, when known. */
  runtime: number | null;
  episodes: number | null;
  poster: string | null;
};

export function resolveEntry(entry: WatchEntry): ResolvedEntry {
  const data = entry.ref ? tmdb[entry.ref] : undefined;
  const year = entry.year ?? (data?.date ? Number(data.date.slice(0, 4)) : null);
  return {
    ...entry,
    displayTitle: entry.title ?? data?.title ?? entry.ref ?? "Untitled",
    year,
    runtime: data?.runtime ?? null,
    episodes: entry.episodes ?? data?.episodes ?? null,
    poster: data?.poster ? posterUrl(data.poster) : null,
  };
}

export const heroPoster = (order: WatchOrder, size: "w185" | "w342" = "w342") => {
  const path = tmdb[order.heroRef]?.poster;
  return path ? posterUrl(path, size) : null;
};

/**
 * Title count and total runtime of a list, leaving out alternative versions. Runtime is null unless every entry's
 * runtime is known and no TMDB title is split across several entries (its runtime would be counted twice).
 */
export function listTotals(list: WatchList) {
  const entries = list.entries.filter((e) => !e.alternative);
  const refs = entries.flatMap((e) => (e.ref ? [e.ref] : []));
  const runtimes = entries.map((e) => resolveEntry(e).runtime);
  const complete = runtimes.every((r): r is number => r !== null) && new Set(refs).size === refs.length;
  return { count: entries.length, runtime: complete ? runtimes.reduce((a, b) => a + b, 0) : null };
}

export const formatRuntime = (minutes: number) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h === 0 ? `${m}m` : m === 0 ? `${h}h` : `${h}h ${m}m`;
};

const RELEASE_LISTS = new Set(["release-order", "broadcast-order", "main-story"]);

/** Problems that should fail the build: missing TMDB data, or a release-order list that isn't in release order. */
export function watchOrderProblems(): string[] {
  const problems: string[] = [];
  for (const order of watchOrders) {
    const refs: TmdbRef[] = [order.heroRef, ...order.lists.flatMap((l) => l.entries.flatMap((e) => (e.ref ? [e.ref] : [])))];
    for (const ref of refs) {
      if (!tmdb[ref]) problems.push(`${order.slug}: no TMDB data for ${ref}. Run npm run fetch:watch.`);
    }
    for (const list of order.lists) {
      if (!RELEASE_LISTS.has(list.id)) continue;
      const years = list.entries.map((e) => resolveEntry(e).year ?? 0);
      years.forEach((y, i) => {
        if (i > 0 && y < years[i - 1]) {
          problems.push(`${order.slug} › ${list.id}: entry ${i + 1} (${y}) comes after one from ${years[i - 1]}`);
        }
      });
    }
    for (const slug of order.related) {
      if (!watchOrderBySlug(slug)) problems.push(`${order.slug}: related order "${slug}" doesn't exist`);
    }
  }
  return problems;
}
