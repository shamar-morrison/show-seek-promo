import { Link } from "react-router-dom";
import { guidePath } from "../guides/types";
import type { Faq } from "../seo";

// Competitor facts were checked on 2026-11-11 against each app's own website and Google Play listing
// (see the competitor research notes). Anything not confirmed there is marked "Not confirmed", never guessed.
// Rules: no prices or plans for any app (ShowSeek's included), and no claims about other apps' reliability.

export const COMPARE_PATH = "/compare/tv-time-alternatives";

/** "yes" / "no" / "unknown" drive the icon; the text says what exactly. */
export type Cell = { state: "yes" | "partial" | "no" | "unknown"; text: string };

export type AltApp = {
  name: string;
  platforms: string;
  tvTimeImport: Cell;
  trakt: Cell;
  stremio: Cell;
  bestFor: string;
  worthKnowing: string;
  url: string;
  isShowSeek?: boolean;
};

const unknown: Cell = { state: "unknown", text: "Not confirmed" };

export const apps: AltApp[] = [
  {
    name: "ShowSeek",
    isShowSeek: true,
    platforms: "Android",
    tvTimeImport: {
      state: "yes",
      text: "All four export types: GDPR data request, TV Time Out, Liberator and Data Extractor. Ratings and lists included.",
    },
    trakt: { state: "partial", text: "Brings in your Trakt history, or a Trakt export ZIP" },
    stremio: { state: "yes", text: "Built-in add-on, no Trakt account needed" },
    bestFor:
      "Bringing over whichever TV Time export you saved, ratings and lists included, and tracking what you watch in Stremio without Trakt.",
    worthKnowing: "Android only for now; an iOS version is on its way. Trakt sync brings your history in but doesn't write back to Trakt.",
    url: "/",
  },
  {
    name: "Hobi",
    platforms: "Android, iPhone",
    tvTimeImport: { state: "yes", text: "The official GDPR export ZIP, ratings included" },
    trakt: { state: "yes", text: "Two-way" },
    stremio: { state: "partial", text: "Through Trakt" },
    bestFor: "A long-running episode tracker on both iPhone and Android, with two-way Trakt sync.",
    worthKnowing: "Its TV Time importer takes the official GDPR export, not files from third-party export tools.",
    url: "https://hobiapp.com",
  },
  {
    name: "Moviebase",
    platforms: "Android, iPhone",
    tvTimeImport: { state: "yes", text: "A TV Time ZIP or CSV export" },
    trakt: { state: "yes", text: "Two-way" },
    stremio: { state: "partial", text: "Through Trakt" },
    bestFor: "Movies and TV in one library on both platforms, with imports from several other trackers too.",
    worthKnowing: "Its TV Time page doesn't say which export tools it supports, so check your file type.",
    url: "https://moviebase.app",
  },
  {
    name: "Movie Paradise",
    platforms: "Android, iPhone",
    tvTimeImport: {
      state: "yes",
      text: "GDPR data request, Liberator and TV Time Out files, including TV Time comments",
    },
    trakt: { state: "yes", text: "Two-way, plus Simkl and MDBList" },
    stremio: { state: "partial", text: "Through Trakt" },
    bestFor: "The widest range of import sources, including bringing over your TV Time comments.",
    worthKnowing: "It doesn't list Data Extractor files among its supported TV Time exports.",
    url: "https://movieparadise.app",
  },
  {
    name: "Trakt",
    platforms: "Web, Android, iPhone",
    tvTimeImport: { state: "yes", text: "On the Trakt website" },
    trakt: { state: "yes", text: "It's Trakt" },
    stremio: { state: "yes", text: "Built into Stremio" },
    bestFor: "Keeping your history in a service that many other apps, including ShowSeek, can read.",
    worthKnowing: "Trakt is a tracking service as much as an app. Many people use it alongside another app.",
    url: "https://trakt.tv",
  },
  {
    name: "Simkl",
    platforms: "Web, Android, iPhone",
    tvTimeImport: unknown,
    trakt: { state: "partial", text: "Imports from Trakt" },
    stremio: unknown,
    bestFor: "Tracking TV, anime and movies in one service, with a strong anime focus.",
    worthKnowing: "We couldn't confirm its current TV Time import on its own site, so check before you rely on it.",
    url: "https://simkl.com",
  },
  {
    name: "Serializd",
    platforms: "Web, Android, iPhone",
    tvTimeImport: unknown,
    trakt: { state: "no", text: "None found" },
    stremio: { state: "no", text: "None found" },
    bestFor: "Reviewing and discussing TV, often described as a Letterboxd for TV.",
    worthKnowing: "It's built around reviews and a social feed more than episode-by-episode tracking.",
    url: "https://www.serializd.com",
  },
  {
    name: "Bingers",
    platforms: "Android, iPhone",
    tvTimeImport: unknown,
    trakt: { state: "no", text: "None found" },
    stremio: { state: "no", text: "None found" },
    bestFor: "Community reactions to episodes, closest to TV Time's social side. Made by TV Time's founder.",
    worthKnowing: "A newer app, so check which of TV Time's features you rely on are there yet.",
    url: "https://bingers.app",
  },
  {
    name: "Cinopsys",
    platforms: "Android",
    tvTimeImport: { state: "no", text: "Not directly. Import into Trakt, Simkl or WeTrakr first, then sync" },
    trakt: { state: "yes", text: "Plus Simkl, MDBList and WeTrakr" },
    stremio: { state: "partial", text: "Through Trakt" },
    bestFor: "An Android client for Trakt, Simkl, MDBList or WeTrakr, or tracking without an account.",
    worthKnowing: "You'll need to move your TV Time export into one of those services before Cinopsys can see it.",
    url: "https://cinopsysapp.com",
  },
];

export const compareMeta = {
  title: "Best TV Time Alternatives in 2026: 9 Apps Compared",
  description:
    "TV Time shut down in July 2026. Compare 9 TV Time alternatives on platforms, which TV Time exports they import, Trakt sync and Stremio support.",
  h1: "The best TV Time alternatives in 2026.",
  intro:
    "TV Time shut down on July 15, 2026, and its export portal went offline with it. If you're looking for a new home for your shows, the most important question is whether the app can read the export you saved, because that's the difference between picking up where you left off and starting from zero. We compared nine apps on exactly that, plus the platforms they run on, Trakt sync and Stremio support.",
  updated: "2026-11-11",
  checked: "2026-11-11",
};

export const shortAnswer = [
  {
    label: "Saved a TV Time export?",
    text: "ShowSeek reads all four kinds of export, including TV Time Out, Liberator and Data Extractor files, with your ratings and lists.",
  },
  { label: "On iPhone?", text: "Hobi, Moviebase and Movie Paradise all import TV Time exports on iPhone and Android." },
  { label: "Miss the community?", text: "Bingers, from TV Time's founder, or Serializd for reviews." },
];

export const lookFor = (
  <>
    <ul>
      <li>
        <strong>It reads the export you have.</strong> TV Time exports came from four places: TV Time's own data
        request (a GDPR ZIP), TV Time Out, the Liberator browser extension and Data Extractor. Many apps only accept
        one or two of them. Check yours before you commit.
      </li>
      <li>
        <strong>Your ratings and lists come with it.</strong> Some importers bring only your watch history. If your
        ratings and custom lists matter to you, look for an app that imports them too.
      </li>
      <li>
        <strong>It runs on your devices.</strong> Several alternatives are Android-only or iPhone-only.
      </li>
      <li>
        <strong>Your history can leave again.</strong> TV Time's shutdown showed how easily a library can be lost. Trakt
        sync, or a way to export, keeps your data portable.
      </li>
      <li>
        <strong>It fits how you watch now.</strong> If you stream in Stremio or similar apps, automatic tracking saves
        marking every episode by hand.
      </li>
    </ul>
    <p>
      Not sure which export you saved? Our <Link to={guidePath("tv-time-import")}>TV Time import guide</Link> explains
      how to tell them apart and where to find your file.
    </p>
  </>
);

export const compareFaqs: Faq[] = [
  {
    q: "What is the best TV Time alternative?",
    a: "It depends on your export and your phone. If you saved a TV Time export, ShowSeek on Android imports all four kinds, with ratings and lists. On iPhone, Hobi, Moviebase and Movie Paradise all import TV Time exports. For TV Time's community side, try Bingers or Serializd.",
  },
  {
    q: "Can I still export my data from TV Time?",
    a: "No. TV Time shut down on July 15, 2026, and its export portal went offline with it. Only an export you saved before the shutdown can be imported into another app.",
  },
  {
    q: "Which apps can import TV Time data?",
    a: "ShowSeek, Hobi, Moviebase, Movie Paradise and Trakt all import TV Time exports directly. ShowSeek reads all four export types; the others accept some of them, so check which file you have.",
  },
  {
    q: "Is there a TV Time alternative for iPhone?",
    a: "Yes. Hobi, Moviebase, Movie Paradise, Bingers, Serializd, Trakt and Simkl all have iPhone apps. ShowSeek is Android-only for now, with an iOS version on its way.",
  },
  {
    q: "Do I need Trakt to move from TV Time?",
    a: "No. ShowSeek, Hobi, Moviebase and Movie Paradise import TV Time exports directly. Apps like Cinopsys need your history in Trakt, Simkl or WeTrakr first.",
  },
];
