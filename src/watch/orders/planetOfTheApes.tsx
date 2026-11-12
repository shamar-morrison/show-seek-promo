import type { WatchOrder } from "../types";

export const planetOfTheApes: WatchOrder = {
  slug: "planet-of-the-apes-movies-in-order",
  name: "Planet of the Apes",
  category: "movies",
  title: "Planet of the Apes Movies in Order: All 10 Films",
  description:
    "Every Planet of the Apes movie in order: the modern saga from Rise to Kingdom, the five original films from 1968, and the 2001 remake.",
  h1: "Planet of the Apes movies in order.",
  intro:
    "Ten films across three separate continuities. The modern saga, from Rise of the Planet of the Apes to Kingdom, tells one story about Caesar and what comes after him. The five original films from 1968 to 1973 are their own series, and Tim Burton's 2001 film is a standalone remake. You can start with either main series.",
  updated: "2026-11-11",
  heroRef: "movie/61791",
  startHere:
    "Start with the modern saga: Rise, Dawn, War, then Kingdom. It's the easiest way in and needs no background. Watch the 1968 original series separately, in its own order, whenever you like.",
  lists: [
    {
      id: "release-order",
      heading: "The modern Planet of the Apes saga in order",
      intro: "Release order and story order are the same.",
      entries: [
        { ref: "movie/61791", tag: "start", note: "Caesar's origin." },
        { ref: "movie/119450", tag: "essential" },
        { ref: "movie/281338", tag: "essential", note: "The end of Caesar's story." },
        { ref: "movie/653346", tag: "essential", note: "Set many generations after War." },
      ],
    },
    {
      id: "original-series",
      heading: "The original Planet of the Apes films",
      intro: "A separate continuity. Watch these in release order.",
      entries: [
        { ref: "movie/871", tag: "essential", note: "The classic, with one of cinema's most famous endings." },
        { ref: "movie/1685", tag: "optional" },
        { ref: "movie/1687", tag: "optional" },
        { ref: "movie/1688", tag: "optional" },
        { ref: "movie/1705", tag: "optional" },
      ],
    },
    {
      id: "remake",
      heading: "The standalone remake",
      entries: [{ ref: "movie/869", tag: "skippable", note: "Tim Burton's remake. Not connected to either series." }],
    },
  ],
  sections: [
    {
      id: "which-series",
      heading: "Which Planet of the Apes should you start with?",
      body: (
        <p>
          The modern saga is the best starting point. Rise of the Planet of the Apes tells the story from the
          beginning, and the four films build into one continuous arc. The 1968 original is a classic and worth seeing
          on its own terms, but its sequels vary a lot in quality, and the series' famous twist works best if you go
          in without knowing it.
        </p>
      ),
    },
    {
      id: "connected",
      heading: "Are the new and old Planet of the Apes films connected?",
      body: (
        <p>
          Not directly. The modern films are a new take on the same idea, with a different story for how apes came to
          rule the Earth. They include a few nods to the original, but you don't need to have seen it.
        </p>
      ),
    },
  ],
  cta: "Add the Planet of the Apes films to ShowSeek to track both series and get a reminder when the next one is released.",
  faqs: [
    {
      q: "What order should I watch Planet of the Apes in?",
      a: "Start with the modern saga: Rise of the Planet of the Apes, Dawn, War, then Kingdom. Watch the five original films from 1968 to 1973 separately, in release order.",
    },
    {
      q: "Do I need to watch the original Planet of the Apes first?",
      a: "No. The modern films are a separate continuity and don't require the originals.",
    },
    {
      q: "Where does Kingdom of the Planet of the Apes fit?",
      a: "After War for the Planet of the Apes. Kingdom is set many generations later.",
    },
  ],
  related: ["alien-movies-in-order", "monsterverse-movies-in-order"],
};
