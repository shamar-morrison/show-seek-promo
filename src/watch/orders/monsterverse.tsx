import type { WatchOrder } from "../types";

export const monsterverse: WatchOrder = {
  slug: "monsterverse-movies-in-order",
  name: "MonsterVerse",
  category: "movies",
  title: "Godzilla and Kong MonsterVerse in Order: Movies and Series",
  description:
    "The MonsterVerse in order: every Godzilla and Kong movie plus Monarch: Legacy of Monsters, in release and chronological order.",
  h1: "Godzilla and Kong MonsterVerse in order.",
  intro:
    "The MonsterVerse is the shared universe behind the modern American Godzilla and King Kong films, tied together by the monster-hunting organization Monarch. Five films and a live-action series so far, and only one, Kong: Skull Island, really changes position between release and chronological order.",
  updated: "2026-11-11",
  heroRef: "movie/124905",
  startHere:
    "Start with Godzilla (2014) and watch in release order. For a rewatch, chronological order moves Kong: Skull Island, set in 1973, to the front. Monarch: Legacy of Monsters fits best after Godzilla.",
  lists: [
    {
      id: "release-order",
      heading: "MonsterVerse in release order",
      entries: [
        { ref: "movie/124905", tag: "start", note: "Godzilla's first appearance, and the introduction of Monarch." },
        { ref: "movie/293167", tag: "essential", note: "Kong's origin, set in 1973." },
        { ref: "movie/373571", tag: "essential" },
        { ref: "movie/399566", tag: "essential", note: "The two titans finally meet." },
        {
          ref: "tv/202411",
          tag: "optional",
          note: "A live-action series about Monarch, told across two timelines.",
        },
        { ref: "movie/823464", tag: "essential" },
      ],
    },
    {
      id: "chronological-order",
      heading: "MonsterVerse in chronological order",
      entries: [
        { ref: "movie/293167", setIn: "1973" },
        { ref: "movie/124905", setIn: "2014" },
        { ref: "tv/202411", setIn: "After Godzilla (with flashbacks to the 1950s)" },
        { ref: "movie/373571", setIn: "2019" },
        { ref: "movie/399566", setIn: "After King of the Monsters" },
        { ref: "movie/823464", setIn: "After Godzilla vs. Kong" },
      ],
    },
  ],
  sections: [
    {
      id: "monarch",
      heading: "Where Monarch: Legacy of Monsters fits",
      body: (
        <p>
          Monarch: Legacy of Monsters follows two timelines: the founding of Monarch in the 1950s, and a present-day
          story set in the aftermath of the Godzilla attack in the 2014 film. Watch it after Godzilla (2014) or at any
          point after that. It adds history and characters to the universe but isn't needed to follow the films.
        </p>
      ),
    },
    {
      id: "toho",
      heading: "Is the MonsterVerse connected to the Japanese Godzilla films?",
      body: (
        <p>
          No. The MonsterVerse is its own continuity, separate from Toho's Japanese Godzilla films such as Shin Godzilla
          and Godzilla Minus One. You can enjoy those on their own without any MonsterVerse background.
        </p>
      ),
    },
  ],
  cta: "Add the MonsterVerse films and Monarch to ShowSeek to keep track of every entry and get a reminder when the next one arrives.",
  faqs: [
    {
      q: "What order should I watch the MonsterVerse in?",
      a: "Release order: Godzilla (2014), Kong: Skull Island, Godzilla: King of the Monsters, Godzilla vs. Kong, Monarch: Legacy of Monsters, then Godzilla x Kong: The New Empire.",
    },
    {
      q: "What is the MonsterVerse chronological order?",
      a: "Kong: Skull Island (1973), Godzilla (2014), Monarch: Legacy of Monsters, Godzilla: King of the Monsters, Godzilla vs. Kong, then Godzilla x Kong: The New Empire.",
    },
    {
      q: "Do I need to watch Monarch: Legacy of Monsters?",
      a: "No. It expands the MonsterVerse's history, but the films don't depend on it.",
    },
  ],
  related: ["alien-movies-in-order", "planet-of-the-apes-movies-in-order"],
};
