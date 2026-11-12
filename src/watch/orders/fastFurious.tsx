import type { WatchOrder } from "../types";

export const fastFurious: WatchOrder = {
  slug: "fast-and-furious-movies-in-order",
  name: "Fast & Furious",
  category: "movies",
  title: "Fast and Furious Movies in Order: Release and Chronological",
  description:
    "All 11 Fast & Furious movies in release and chronological order, including Hobbs & Shaw, and why Tokyo Drift is set after Fast & Furious 6.",
  h1: "Fast & Furious movies in order.",
  intro:
    "Eleven films, from street racing in Los Angeles to heists, spies and space. The Fast & Furious saga is mostly in order, with one famous exception: Tokyo Drift, the third film, actually takes place after the sixth. Here's the saga both ways.",
  updated: "2026-11-11",
  heroRef: "movie/9799",
  startHere:
    "For a first watch, go in release order. For a rewatch, use chronological order, which moves Tokyo Drift to after Fast & Furious 6. Either way, start with The Fast and the Furious (2001).",
  lists: [
    {
      id: "release-order",
      heading: "Fast & Furious movies in release order",
      entries: [
        { ref: "movie/9799", tag: "start", note: "Undercover cop Brian O'Conner meets Dom Toretto." },
        { ref: "movie/584", tag: "optional", note: "A Brian-led side story without Dom. Introduces Roman and Tej." },
        {
          ref: "movie/9615",
          tag: "essential",
          note: "A new cast in Tokyo. Introduces Han, and it's set later in the timeline than it looks.",
        },
        { ref: "movie/13804", tag: "essential", note: "Dom and Brian reunite. The saga's real second chapter." },
        { ref: "movie/51497", tag: "essential", note: "The heist film that reinvented the series." },
        { ref: "movie/82992", tag: "essential" },
        { ref: "movie/168259", tag: "essential", note: "Paul Walker's final film as Brian." },
        { ref: "movie/337339", tag: "essential" },
        { ref: "movie/384018", tag: "optional", note: "A spin-off for Hobbs and Shaw. Nothing later depends on it." },
        { ref: "movie/385128", tag: "essential" },
        { ref: "movie/385687", tag: "essential", note: "Part one of the saga's finale." },
      ],
    },
    {
      id: "chronological-order",
      heading: "Fast & Furious movies in chronological order",
      intro: "The story's own order. The only big move is Tokyo Drift.",
      entries: [
        { ref: "movie/9799", setIn: "The beginning" },
        { ref: "movie/584", setIn: "After the first film" },
        { ref: "movie/13804", setIn: "Years later" },
        { ref: "movie/51497", setIn: "Straight after Fast & Furious" },
        { ref: "movie/82992", setIn: "After Fast Five" },
        { ref: "movie/9615", setIn: "After Fast & Furious 6" },
        { ref: "movie/168259", setIn: "After Tokyo Drift" },
        { ref: "movie/337339", setIn: "After Furious 7" },
        { ref: "movie/384018", setIn: "After The Fate of the Furious" },
        { ref: "movie/385128", setIn: "After Hobbs & Shaw" },
        { ref: "movie/385687", setIn: "After F9" },
      ],
    },
  ],
  sections: [
    {
      id: "tokyo-drift",
      heading: "Why Tokyo Drift is out of order",
      body: (
        <p>
          Tokyo Drift was made as a standalone story with a new cast, but its breakout character, Han, was so popular
          that the following films brought him back. To make that work, Fast & Furious, Fast Five and Fast & Furious 6
          are set before Tokyo Drift, and the end of Fast & Furious 6 leads directly into its events. That's why
          chronological order moves it to sixth.
        </p>
      ),
    },
    {
      id: "skip",
      heading: "Which Fast & Furious movies can you skip?",
      body: (
        <p>
          2 Fast 2 Furious and Hobbs & Shaw are the most skippable. Neither features Dom, and the main saga doesn't
          depend on either, though 2 Fast 2 Furious introduces Roman and Tej, who become regulars later. Tokyo Drift is
          worth keeping: Han's story runs through the later films.
        </p>
      ),
    },
    {
      id: "finale",
      heading: "Is Fast X the last Fast & Furious movie?",
      body: (
        <p>
          Fast X is the first part of the saga's two-part finale and ends on a cliffhanger. The concluding film hasn't
          been released yet, so if you're catching up now, you'll be ready for it.
        </p>
      ),
    },
  ],
  cta: "Add the Fast & Furious films to ShowSeek to tick them off in either order and get a reminder when the final film is released.",
  faqs: [
    {
      q: "What order should I watch Fast and Furious in?",
      a: "Release order for a first watch: The Fast and the Furious, 2 Fast 2 Furious, Tokyo Drift, Fast & Furious, Fast Five, Fast & Furious 6, Furious 7, The Fate of the Furious, Hobbs & Shaw, F9 and Fast X.",
    },
    {
      q: "What is the Fast and Furious chronological order?",
      a: "The Fast and the Furious, 2 Fast 2 Furious, Fast & Furious, Fast Five, Fast & Furious 6, Tokyo Drift, Furious 7, The Fate of the Furious, Hobbs & Shaw, F9 and Fast X.",
    },
    {
      q: "When does Tokyo Drift take place?",
      a: "After Fast & Furious 6, even though it was the third film released. The end of Fast & Furious 6 leads into it.",
    },
    {
      q: "Do I need to watch Hobbs & Shaw?",
      a: "No. It's a spin-off, and nothing in F9 or Fast X depends on it.",
    },
  ],
  related: ["mission-impossible-movies-in-order", "john-wick-movies-in-order"],
};
