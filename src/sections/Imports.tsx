import type { ReactNode } from "react";
import { ImdbLogo, StremioLogo, TraktLogo } from "../components/BrandLogos";
import { Reveal } from "../components/Reveal";

type Source = {
  name: string;
  title: string;
  body: string;
  note?: string;
  logo: ReactNode;
};

const sources: Source[] = [
  {
    name: "Trakt",
    title: "Trakt sync",
    body: "Connect your Trakt account and your watch history, ratings and lists come straight over. Nothing to re-enter.",
    logo: (
      <span className="flex size-16 items-center justify-center rounded-2xl bg-[#ed1c24] text-white">
        <TraktLogo className="size-9" />
      </span>
    ),
  },
  {
    name: "IMDb",
    title: "IMDb import",
    body: "Already rating on IMDb? Bring your ratings and watchlist with you and pick up right where you left off.",
    logo: (
      <span className="flex size-16 items-center justify-center rounded-2xl bg-[#f5c518] text-black">
        <ImdbLogo className="size-10" />
      </span>
    ),
  },
  {
    name: "Stremio",
    title: "Stremio sync",
    body: "Link Stremio and anything you finish there, from movies and shows to anime, is marked as watched in ShowSeek.",
    note: "Requires Stremio 5",
    logo: (
      <span className="flex size-16 items-center justify-center rounded-2xl bg-[#685cee] text-white">
        <StremioLogo className="size-9" />
      </span>
    ),
  },
];

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
        <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sources.map((s, i) => (
            <Reveal key={s.name} index={i + 1} className="flex flex-col items-start rounded-3xl border border-line bg-surface p-8">
              <span role="img" aria-label={`${s.name} logo`}>
                {s.logo}
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.body}</p>
              {s.note && (
                <p className="mt-auto self-stretch pt-6 text-right text-xs text-muted italic">{s.note}*</p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
