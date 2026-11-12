import type { WatchOrder } from "../types";

export const harryPotter: WatchOrder = {
  slug: "harry-potter-movies-in-order",
  name: "Harry Potter",
  category: "movies",
  title: "Harry Potter Movies in Order, Including Fantastic Beasts",
  description:
    "All 11 Wizarding World movies in order: the 8 Harry Potter films and 3 Fantastic Beasts films, in release and chronological order.",
  h1: "Harry Potter movies in order.",
  intro:
    "Eight Harry Potter films and three Fantastic Beasts films make up the Wizarding World on screen. The Harry Potter films follow Harry's seven years at Hogwarts in order. The Fantastic Beasts films are prequels set about 65 years earlier, which raises the classic question: which should you watch first?",
  updated: "2026-11-11",
  heroRef: "movie/671",
  startHere:
    "Start with Harry Potter and the Philosopher's Stone (also called the Sorcerer's Stone) and watch the eight Harry Potter films in order. Then watch the three Fantastic Beasts prequels. They make much more sense once you know Dumbledore's story.",
  lists: [
    {
      id: "release-order",
      heading: "Harry Potter and Fantastic Beasts in release order",
      intro: "The recommended order, especially for a first watch.",
      entries: [
        { ref: "movie/671", tag: "start", note: "Released as the Sorcerer's Stone in the US." },
        { ref: "movie/672", tag: "essential" },
        { ref: "movie/673", tag: "essential" },
        { ref: "movie/674", tag: "essential" },
        { ref: "movie/675", tag: "essential" },
        { ref: "movie/767", tag: "essential" },
        { ref: "movie/12444", tag: "essential" },
        { ref: "movie/12445", tag: "essential", note: "The end of Harry's story." },
        { ref: "movie/259316", tag: "optional", note: "Newt Scamander in 1920s New York." },
        { ref: "movie/338952", tag: "optional" },
        { ref: "movie/338953", tag: "optional" },
      ],
    },
    {
      id: "chronological-order",
      heading: "Wizarding World in chronological order",
      intro: "Sorted by the year each film is set.",
      entries: [
        { ref: "movie/259316", setIn: "1926" },
        { ref: "movie/338952", setIn: "1927" },
        { ref: "movie/338953", setIn: "1930s" },
        { ref: "movie/671", setIn: "1991–1992" },
        { ref: "movie/672", setIn: "1992–1993" },
        { ref: "movie/673", setIn: "1993–1994" },
        { ref: "movie/674", setIn: "1994–1995" },
        { ref: "movie/675", setIn: "1995–1996" },
        { ref: "movie/767", setIn: "1996–1997" },
        { ref: "movie/12444", setIn: "1997–1998" },
        { ref: "movie/12445", setIn: "1998" },
      ],
    },
  ],
  sections: [
    {
      id: "fantastic-beasts-first",
      heading: "Should you watch Fantastic Beasts first?",
      body: (
        <>
          <p>
            Not on a first watch. The Fantastic Beasts films are set decades before Harry Potter, but they were
            written for an audience that already knows the Harry Potter story. Much of their weight comes from
            Dumbledore and Grindelwald, and the films assume you know who Dumbledore becomes.
          </p>
          <p>
            Chronological order is a fun way to rewatch the whole Wizarding World, starting in 1926 with Newt Scamander
            and ending with the Battle of Hogwarts.
          </p>
        </>
      ),
    },
    {
      id: "sorcerers-stone",
      heading: "Philosopher's Stone or Sorcerer's Stone?",
      body: (
        <p>
          They're the same film. The first Harry Potter book and film were called Harry Potter and the Philosopher's
          Stone in the UK and most of the world, and Harry Potter and the Sorcerer's Stone in the US.
        </p>
      ),
    },
  ],
  cta: "Add the Harry Potter and Fantastic Beasts films to ShowSeek to track all eleven and see how many you have left, whichever order you choose.",
  faqs: [
    {
      q: "What order should I watch the Harry Potter movies in?",
      a: "Philosopher's Stone (Sorcerer's Stone), Chamber of Secrets, Prisoner of Azkaban, Goblet of Fire, Order of the Phoenix, Half-Blood Prince, Deathly Hallows Part 1 and Deathly Hallows Part 2.",
    },
    {
      q: "Should I watch Fantastic Beasts before Harry Potter?",
      a: "No. Fantastic Beasts is set earlier, but it was written for people who have already seen Harry Potter. Watch it afterwards.",
    },
    {
      q: "How many Harry Potter movies are there?",
      a: "Eight Harry Potter films, plus three Fantastic Beasts prequels, for eleven Wizarding World films in total.",
    },
  ],
  related: ["x-men-movies-in-order", "planet-of-the-apes-movies-in-order"],
};
