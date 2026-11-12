import { Link } from "react-router-dom";
import { guidePath } from "../guides/types";
import type { Faq } from "../seo";

// Competitor facts were checked on 2026-11-11 against each app's own website and Google Play listing
// (see the competitor research notes). Anything not confirmed there is marked "Not confirmed", never guessed.
// Rules: no prices or plans for any app (ShowSeek's included), and no claims about other apps' reliability.

export const COMPARE_PATH = "/compare/tv-time-alternatives";

/** The mark drives the icon; the text is a one- or two-word label shown next to it. */
export type Mark = "yes" | "partial" | "no" | "unknown" | "na";
export type Cell = { state: Mark; text: string };

export type AltApp = {
  name: string;
  /** Full platform list for the app card. */
  platforms: string;
  /** Every app compared runs on Android, so only iPhone support varies. */
  iphone: boolean;
  /** Matrix cells: keep the text to a word or two. */
  tvTime: Cell;
  ratingsLists: Cell;
  trakt: Cell;
  stremio: Cell;
  /** The detail behind the TV Time cell, shown on the app card. */
  tvTimeDetail: string;
  bestFor: string;
  worthKnowing: string;
  url: string;
  isShowSeek?: boolean;
};

const unconfirmed: Cell = { state: "unknown", text: "Unconfirmed" };
const notApplicable: Cell = { state: "na", text: "" };
const viaTrakt: Cell = { state: "partial", text: "Via Trakt" };
const twoWay: Cell = { state: "yes", text: "Two-way" };
const noneFound: Cell = { state: "no", text: "None found" };

export const apps: AltApp[] = [
  {
    name: "ShowSeek",
    isShowSeek: true,
    platforms: "Android",
    iphone: false,
    tvTime: { state: "yes", text: "All 4 types" },
    ratingsLists: { state: "yes", text: "Both" },
    trakt: { state: "partial", text: "Import" },
    stremio: { state: "yes", text: "Direct" },
    tvTimeDetail:
      "All four export types: the GDPR data request, TV Time Out, Liberator and Data Extractor. Show and movie ratings and custom lists come across.",
    bestFor:
      "Bringing over whichever TV Time export you saved, ratings and lists included, and tracking what you watch in Stremio without Trakt.",
    worthKnowing:
      "Android only for now; an iOS version is on its way. Trakt sync brings your Trakt history in but doesn't write back to Trakt.",
    url: "/",
  },
  {
    name: "Hobi",
    platforms: "Android, iPhone",
    iphone: true,
    tvTime: { state: "yes", text: "GDPR only" },
    ratingsLists: { state: "partial", text: "Ratings" },
    trakt: twoWay,
    stremio: viaTrakt,
    tvTimeDetail: "The official GDPR export ZIP, with your watch history, watchlist, movies and ratings.",
    bestFor: "A long-running episode tracker on both iPhone and Android, with two-way Trakt sync.",
    worthKnowing: "Its TV Time importer takes the official GDPR export, not files from third-party export tools.",
    url: "https://hobiapp.com",
  },
  {
    name: "Moviebase",
    platforms: "Android, iPhone",
    iphone: true,
    tvTime: { state: "yes", text: "ZIP or CSV" },
    ratingsLists: { state: "partial", text: "Ratings" },
    trakt: twoWay,
    stremio: viaTrakt,
    tvTimeDetail: "A TV Time ZIP or CSV export, with watched episodes, movies, watchlist and ratings.",
    bestFor: "Movies and TV in one library on both platforms, with imports from several other trackers too.",
    worthKnowing: "Its TV Time page doesn't say which export tools it supports, so check your file type.",
    url: "https://moviebase.app",
  },
  {
    name: "Movie Paradise",
    platforms: "Android, iPhone",
    iphone: true,
    tvTime: { state: "yes", text: "3 of 4 types" },
    ratingsLists: { state: "yes", text: "Both" },
    trakt: twoWay,
    stremio: viaTrakt,
    tvTimeDetail:
      "The GDPR data request, Liberator and TV Time Out files, with ratings, lists and even your TV Time comments.",
    bestFor: "The widest range of import sources, including bringing over your TV Time comments.",
    worthKnowing: "It doesn't list Data Extractor files among its supported TV Time exports.",
    url: "https://movieparadise.app",
  },
  {
    name: "Trakt",
    platforms: "Web, Android, iPhone",
    iphone: true,
    tvTime: { state: "yes", text: "On the website" },
    ratingsLists: { state: "partial", text: "Lists" },
    trakt: notApplicable,
    stremio: { state: "yes", text: "Built in" },
    tvTimeDetail: "TV Time exports are imported on the Trakt website, including your custom lists.",
    bestFor: "Keeping your history in a service that many other apps, including ShowSeek, can read.",
    worthKnowing: "Trakt is a tracking service as much as an app. Many people use it alongside another app.",
    url: "https://trakt.tv",
  },
  {
    name: "Simkl",
    platforms: "Web, Android, iPhone",
    iphone: true,
    tvTime: unconfirmed,
    ratingsLists: unconfirmed,
    trakt: { state: "partial", text: "Import" },
    stremio: unconfirmed,
    tvTimeDetail: "We couldn't confirm Simkl's current TV Time import on its own site.",
    bestFor: "Tracking TV, anime and movies in one service, with a strong anime focus.",
    worthKnowing: "Check its TV Time import before you rely on it.",
    url: "https://simkl.com",
  },
  {
    name: "Serializd",
    platforms: "Web, Android, iPhone",
    iphone: true,
    tvTime: unconfirmed,
    ratingsLists: unconfirmed,
    trakt: noneFound,
    stremio: noneFound,
    tvTimeDetail: "We couldn't confirm a TV Time import on Serializd's own site.",
    bestFor: "Reviewing and discussing TV, often described as a Letterboxd for TV.",
    worthKnowing: "It's built around reviews and a social feed more than episode-by-episode tracking.",
    url: "https://www.serializd.com",
  },
  {
    name: "Bingers",
    platforms: "Android, iPhone",
    iphone: true,
    tvTime: { state: "yes", text: "Formats not listed" },
    ratingsLists: unconfirmed,
    trakt: noneFound,
    stremio: noneFound,
    tvTimeDetail:
      "Bingers offers a TV Time history upload on its website, but it doesn't say publicly which export types it accepts or what comes across.",
    bestFor: "Community reactions to episodes, closest to TV Time's social side. Made by TV Time's founder.",
    worthKnowing: "You sign in on the Bingers website to upload your TV Time history, so check it accepts the export you saved.",
    url: "https://bingers.app",
  },
  {
    name: "Cinopsys",
    platforms: "Android",
    iphone: false,
    tvTime: { state: "no", text: "Not directly" },
    ratingsLists: notApplicable,
    trakt: { state: "yes", text: "Sync" },
    stremio: viaTrakt,
    tvTimeDetail: "No direct import. Move your export into Trakt, Simkl or WeTrakr first, then sync Cinopsys with it.",
    bestFor: "An Android client for Trakt, Simkl, MDBList or WeTrakr, or tracking without an account.",
    worthKnowing: "You'll need your TV Time history in one of those services before Cinopsys can see it.",
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
    a: "ShowSeek, Hobi, Moviebase, Movie Paradise, Bingers and Trakt all import TV Time exports directly. ShowSeek reads all four export types; the others accept some of them or don't say which, so check which file you have.",
  },
  {
    q: "Is there a TV Time alternative for iPhone?",
    a: "Yes. Hobi, Moviebase, Movie Paradise, Bingers, Serializd, Trakt and Simkl all have iPhone apps. ShowSeek is Android-only for now, with an iOS version on its way.",
  },
  {
    q: "Do I need Trakt to move from TV Time?",
    a: "No. ShowSeek, Hobi, Moviebase, Movie Paradise and Bingers import TV Time exports directly. Apps like Cinopsys need your history in Trakt, Simkl or WeTrakr first.",
  },
];
