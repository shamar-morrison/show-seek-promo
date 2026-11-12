import type { WatchOrder } from "../types";

export const alien: WatchOrder = {
  slug: "alien-movies-in-order",
  name: "Alien",
  category: "movies",
  title: "Alien Movies in Order: Release and Chronological Timeline",
  description:
    "Every Alien movie in order, from Prometheus to Romulus, plus the Alien: Earth series, in release and chronological order with the year each is set.",
  h1: "Alien movies in order.",
  intro:
    "Seven films and a TV series, spread across almost three centuries of story. The Alien franchise went forward for four films, jumped back in time for two prequels, then filled the gaps in between with Alien: Romulus and Alien: Earth. That makes the timeline very different from the release order.",
  updated: "2026-11-11",
  heroRef: "movie/348",
  startHere:
    "Start with Alien (1979) and watch in release order. The prequels, Prometheus and Alien: Covenant, are built around mysteries the original films set up, so they work best afterwards. Save chronological order for a rewatch.",
  lists: [
    {
      id: "release-order",
      heading: "Alien movies in release order",
      entries: [
        { ref: "movie/348", tag: "start", note: "Ridley Scott's original. Ripley and the crew of the Nostromo." },
        { ref: "movie/679", tag: "essential", note: "James Cameron's action sequel." },
        { ref: "movie/8077", tag: "essential" },
        { ref: "movie/8078", tag: "optional", note: "Set two centuries later." },
        { ref: "movie/70981", tag: "essential", note: "A prequel about the origins of the creatures' creators." },
        { ref: "movie/126889", tag: "essential", note: "Continues Prometheus and leads towards the original." },
        { ref: "movie/945961", tag: "essential", note: "Set between Alien and Aliens." },
        { ref: "tv/157239", tag: "essential", note: "A TV series set shortly before the original film." },
      ],
    },
    {
      id: "chronological-order",
      heading: "Alien movies in chronological order",
      intro: "Sorted by the year each story is set.",
      entries: [
        { ref: "movie/70981", setIn: "2093" },
        { ref: "movie/126889", setIn: "2104" },
        { ref: "tv/157239", setIn: "2120" },
        { ref: "movie/348", setIn: "2122" },
        { ref: "movie/945961", setIn: "2142" },
        { ref: "movie/679", setIn: "2179" },
        { ref: "movie/8077", setIn: "2179" },
        { ref: "movie/8078", setIn: "2381" },
      ],
    },
  ],
  sections: [
    {
      id: "which-order",
      heading: "Release order or chronological order?",
      body: (
        <>
          <p>
            Release order for a first watch. Prometheus and Alien: Covenant are prequels, but they're built around
            questions the original films raised, like who the Space Jockey was. Starting with them would answer
            questions before you've asked them, and the original Alien loses much of its mystery.
          </p>
          <p>
            Chronological order is a great rewatch: it starts in 2093 with Prometheus, passes through Alien: Earth and
            the original film, and ends with Alien Resurrection.
          </p>
        </>
      ),
    },
    {
      id: "avp",
      heading: "What about Alien vs. Predator?",
      body: (
        <p>
          The two Alien vs. Predator films (2004 and 2007) are crossovers with the Predator franchise, set on
          present-day Earth. They're not part of the main Alien story, so skip them unless you're a fan of both
          series.
        </p>
      ),
    },
  ],
  cta: "Add the Alien films and Alien: Earth to ShowSeek to track every entry and get a reminder when new episodes or films arrive.",
  faqs: [
    {
      q: "What order should I watch the Alien movies in?",
      a: "Release order: Alien, Aliens, Alien 3, Alien Resurrection, Prometheus, Alien: Covenant, Alien: Romulus, then the Alien: Earth series.",
    },
    {
      q: "What is the Alien chronological order?",
      a: "Prometheus (2093), Alien: Covenant (2104), Alien: Earth (2120), Alien (2122), Alien: Romulus (2142), Aliens (2179), Alien 3 (2179) and Alien Resurrection (2381).",
    },
    {
      q: "Where does Alien: Romulus fit?",
      a: "Between Alien and Aliens. It's set in 2142, twenty years after the original film.",
    },
    {
      q: "Should I watch Prometheus before Alien?",
      a: "Not on a first watch. Prometheus is a prequel, but it's built around mysteries from the original films, so it works best after them.",
    },
  ],
  related: ["planet-of-the-apes-movies-in-order", "monsterverse-movies-in-order"],
};
