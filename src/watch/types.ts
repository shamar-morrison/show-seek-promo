import type { ReactNode } from "react";
import type { Faq } from "../seo";

/**
 * A TMDB title. Written as a string literal so scripts/fetch-watch-data.mjs can find every ref in the order files
 * and snapshot its poster, date and runtime into tmdb.json.
 */
export type TmdbRef = `movie/${number}` | `tv/${number}` | `tv/${number}/season/${number}`;

export type EntryTag = "start" | "essential" | "optional" | "skippable";

export type WatchEntry = {
  /** Omit for entries TMDB doesn't list separately (some anime specials); then give title, year and episodes. */
  ref?: TmdbRef;
  /** Overrides TMDB's title, e.g. a season name. */
  title?: string;
  year?: number;
  episodes?: number;
  /** Short format label: "Film", "TV series", "OVA", "TV special"... */
  kind?: string;
  /** When it happens in the story, for chronological lists. */
  setIn?: string;
  tag?: EntryTag;
  note?: string;
  /** Another version of the previous entry (a re-edit, a TV cut of a film). Left out of the list's totals. */
  alternative?: boolean;
};

export type WatchList = {
  id: string;
  heading: string;
  intro?: string;
  entries: WatchEntry[];
};

export type WatchOrder = {
  slug: string;
  /** Franchise name for breadcrumbs, cards and the footer. */
  name: string;
  category: "anime" | "movies";
  title: string;
  description: string;
  h1: string;
  intro: string;
  updated: string;
  /** Poster for the header and cards. */
  heroRef: TmdbRef;
  /** The one-paragraph answer most visitors came for. */
  startHere: string;
  /** The first list is the primary order (used for the header stats and ItemList JSON-LD). */
  lists: WatchList[];
  sections: { id: string; heading: string; body: ReactNode }[];
  /** Body of the "Track it in ShowSeek" call to action. */
  cta: string;
  faqs: Faq[];
  related: string[];
};

export const watchPath = (slug: string) => `/watch/${slug}`;
