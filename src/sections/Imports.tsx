import { Link } from "react-router-dom";
import { BrandTile, type Brand } from "../components/BrandTile";
import { Reveal } from "../components/Reveal";
import { guidePath } from "../guides";

type Source = {
  brand: Brand;
  title: string;
  body: string;
  note?: string;
  /** Guide slug, once that service has one. */
  guide?: string;
};

const sources: Source[] = [
  {
    brand: "trakt",
    title: "Trakt sync",
    body: "Connect your Trakt account and your watch history, ratings and lists come straight over. Nothing to re-enter.",
    guide: "trakt-sync",
  },
  {
    brand: "imdb",
    title: "IMDb import",
    body: "Already rating on IMDb? Bring your ratings and watchlist with you and pick up right where you left off.",
    guide: "imdb-import",
  },
  {
    brand: "simkl",
    title: "Simkl import",
    body: "Moving from Simkl? Bring your watch history, ratings and watchlist over and keep going where you left off.",
    guide: "simkl-import",
  },
  {
    brand: "tvtime",
    title: "TV Time import",
    body: "Saved your data before TV Time shut down? Bring your official data request, or an export from TV Time Out, Liberator or Data Extractor.",
    guide: "tv-time-import",
  },
  {
    brand: "stremio",
    title: "Stremio sync",
    body: "Link Stremio and anything you finish there, from movies and shows to anime, is marked as watched in ShowSeek.",
    note: "Requires Stremio 5",
    guide: "stremio-sync",
  },
];

// 5 cards: a row of 3 then a row of 2 on desktop; on tablet the odd last card fills its row.
const spans = ["lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-3", "md:max-lg:col-span-2 lg:col-span-3"];

export function Imports() {
  return (
    <section aria-labelledby="imports-title" className="border-y border-line">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <Reveal className="flex flex-col items-center text-center">
          <h2 id="imports-title" className="font-display text-4xl font-bold tracking-tighter text-balance md:text-5xl">
            Works with the apps you already use.
          </h2>
          <p className="mt-4 max-w-[46ch] text-lg leading-relaxed text-muted">
            Bring your history over in minutes, then let what you watch elsewhere keep ShowSeek up to date.
          </p>
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-6">
          {sources.map((s, i) => (
            <Reveal key={s.brand} index={i + 1} className={`flex flex-col items-start rounded-3xl border border-line bg-surface p-8 ${spans[i]}`}>
              <BrandTile brand={s.brand} />
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
              {(s.guide || s.note) && (
                <div className="mt-auto flex items-end justify-between gap-4 self-stretch pt-6">
                  {s.guide && (
                    <Link to={guidePath(s.guide)} className="text-sm font-semibold text-accent hover:underline">
                      {s.title} guide →
                    </Link>
                  )}
                  {s.note && <p className="ml-auto text-right text-xs text-muted italic">{s.note}*</p>}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
