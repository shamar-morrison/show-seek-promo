import type { WatchOrder } from "../types";

export const johnWick: WatchOrder = {
  slug: "john-wick-movies-in-order",
  name: "John Wick",
  category: "movies",
  title: "John Wick Movies in Order: Release and Chronological",
  description:
    "Watch the John Wick movies in order: all four films plus Ballerina and The Continental, in release and chronological order, and where the spin-offs fit.",
  h1: "John Wick movies in order.",
  intro:
    "Four John Wick films, a spin-off movie and a prequel series. The main films run in a straight line, with each chapter starting almost exactly where the last one ended. The spin-offs are where the order gets interesting: Ballerina slots in between Chapters 3 and 4, and The Continental goes back to the 1970s.",
  updated: "2026-11-11",
  heroRef: "movie/245891",
  startHere:
    "Watch the four main films in order: John Wick, Chapter 2, Chapter 3 – Parabellum and Chapter 4. Each one picks up right after the previous film. Add Ballerina after Chapter 3 if you want more of the world, and treat The Continental as an optional prequel.",
  lists: [
    {
      id: "release-order",
      heading: "John Wick movies in release order",
      intro: "The best way in for a first watch.",
      entries: [
        { ref: "movie/245891", tag: "essential", note: "Where it all starts." },
        {
          ref: "movie/324552",
          tag: "essential",
          note: "Starts days after the first film and opens up the High Table.",
        },
        {
          ref: "movie/458156",
          tag: "essential",
          note: "Begins minutes after Chapter 2 ends, with John declared excommunicado.",
        },
        { ref: "movie/603692", tag: "essential", note: "John takes on the High Table directly." },
        {
          ref: "tv/72710",
          kind: "Miniseries",
          tag: "optional",
          note: "A three-part prequel about a young Winston and how he took over the Continental hotel.",
        },
        {
          ref: "movie/541671",
          tag: "optional",
          note: "A spin-off following Eve, a dancer trained as an assassin by the Ruska Roma. John Wick appears.",
        },
      ],
    },
    {
      id: "chronological-order",
      heading: "John Wick in chronological order",
      intro: "For a rewatch, this follows the story's own timeline.",
      entries: [
        { ref: "tv/72710", kind: "Miniseries", setIn: "1975", tag: "optional" },
        { ref: "movie/245891", setIn: "Present day", tag: "essential" },
        { ref: "movie/324552", setIn: "Days later", tag: "essential" },
        { ref: "movie/458156", setIn: "Immediately after", tag: "essential" },
        { ref: "movie/541671", setIn: "During and after Chapter 3", tag: "optional" },
        { ref: "movie/603692", setIn: "After Chapter 3", tag: "essential" },
      ],
    },
  ],
  sections: [
    {
      id: "spin-offs",
      heading: "Where Ballerina and The Continental fit",
      body: (
        <>
          <p>
            <strong>Ballerina</strong> takes place around the events of Chapter 3 – Parabellum, so watch it after
            Chapter 3 and before Chapter 4. You can also save it for the end: it doesn't change anything in the main
            films.
          </p>
          <p>
            <strong>The Continental</strong> is a three-episode prequel set in 1970s New York. It tells the origin of
            Winston and the hotel, with none of the main films' characters beyond a younger Winston and Charon. It's
            the most skippable part of the series, and works best after you've seen the films.
          </p>
        </>
      ),
    },
    {
      id: "back-to-back",
      heading: "Watching John Wick back to back",
      body: (
        <p>
          The main films are made for binge-watching. Each chapter covers only a few days, and Chapters 2 and 3 in
          particular flow straight into each other. The four films add up to just under nine hours, so the whole saga
          fits into a weekend.
        </p>
      ),
    },
  ],
  cta: "Add the John Wick films to ShowSeek and it tracks the whole collection, so you always know which chapter is next. Turn on reminders to hear when the next one is coming.",
  faqs: [
    {
      q: "What order should I watch John Wick in?",
      a: "John Wick, John Wick: Chapter 2, John Wick: Chapter 3 – Parabellum, then John Wick: Chapter 4. Watch Ballerina after Chapter 3 if you want the spin-off.",
    },
    {
      q: "When should I watch Ballerina?",
      a: "After John Wick: Chapter 3 – Parabellum and before Chapter 4. Ballerina takes place around the events of Chapter 3.",
    },
    {
      q: "Do I need to watch The Continental?",
      a: "No. The Continental is an optional prequel miniseries set in the 1970s about Winston and the hotel. The films don't depend on it.",
    },
    {
      q: "How many John Wick movies are there?",
      a: "Four main films, plus the spin-off film Ballerina and the prequel series The Continental.",
    },
  ],
  related: ["mission-impossible-movies-in-order", "conjuring-universe-in-order"],
};
