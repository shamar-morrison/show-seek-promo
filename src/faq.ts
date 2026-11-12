import { guidePath } from "./guides/types";
import type { Faq } from "./seo";

/** Homepage FAQ. Rendered by sections/Faq.tsx and emitted as FAQPage JSON-LD, so both always match. */
export const homeFaqs: Faq[] = [
  {
    q: "Is ShowSeek available on iPhone?",
    a: "Not yet. ShowSeek is on Android through Google Play today, and an iOS version is on its way.",
  },
  {
    q: "What's the best TV Time alternative?",
    a: "If you saved a TV Time export and you're on Android, ShowSeek reads all four kinds of TV Time export, including TV Time Out, Liberator and Data Extractor files, and brings your ratings and lists across. If you're on iPhone, or you mostly miss TV Time's community, another app may suit you better. Our comparison covers nine options.",
    link: { href: "/compare/tv-time-alternatives", label: "Compare TV Time alternatives" },
  },
  {
    q: "Can I import my watch history from TV Time, Trakt, IMDb or Simkl?",
    a: "Yes. ShowSeek imports your history from TV Time, IMDb and Simkl, and syncs with Trakt. If you saved a TV Time export before the shutdown, ShowSeek reads it directly, so you don't need to load it into Trakt first.",
    link: { href: "/guides", label: "See the import guides" },
  },
  {
    q: "Can ShowSeek track what I watch on Stremio?",
    a: "Yes. Install the ShowSeek add-on in the Stremio desktop app or web.stremio.com, and every movie or episode you finish there is marked as watched in ShowSeek automatically.",
    link: { href: guidePath("stremio-sync"), label: "How to set up Stremio sync" },
  },
  {
    q: "Will ShowSeek remind me when new episodes come out?",
    a: "Yes. Set a reminder on any show and ShowSeek notifies you on air day or the day before a new episode.",
  },
  {
    q: "Can I track anime with ShowSeek?",
    a: "Yes. Anime series and movies are tracked like any other title, episode by episode. If you watch anime in Stremio, the ShowSeek add-on marks those episodes as watched too.",
  },
];
