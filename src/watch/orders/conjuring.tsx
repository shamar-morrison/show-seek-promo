import type { WatchOrder } from "../types";

export const conjuring: WatchOrder = {
  slug: "conjuring-universe-in-order",
  name: "The Conjuring Universe",
  category: "movies",
  title: "The Conjuring Universe in Order: Release and Chronological",
  description:
    "All 10 Conjuring Universe movies in release and chronological order, from The Nun in 1952 to Last Rites, plus which Annabelle and Nun films you can skip.",
  h1: "The Conjuring Universe in order.",
  intro:
    "Ten films across three series: The Conjuring, Annabelle and The Nun. They were released out of story order, with prequels arriving years after the films they lead into, so the Conjuring Universe is one of the few horror franchises where the order really matters. Here it is both ways, with the year each film is set in.",
  updated: "2026-11-11",
  heroRef: "movie/138843",
  startHere:
    "On a first watch, go in release order starting with The Conjuring (2013). The prequels work best once you know who Ed and Lorraine Warren are and why Annabelle and Valak matter. For a rewatch, chronological order starting with The Nun (set in 1952) is the way to go.",
  lists: [
    {
      id: "release-order",
      heading: "Conjuring movies in release order",
      intro: "Recommended for a first watch: this is the order the scares were designed to land in.",
      entries: [
        { ref: "movie/138843", tag: "essential", note: "Ed and Lorraine Warren take on the Perron family haunting." },
        { ref: "movie/250546", tag: "optional", note: "The first Annabelle spin-off, a prequel to the doll's story." },
        { ref: "movie/259693", tag: "essential", note: "The Enfield case in London, and the first appearance of Valak." },
        { ref: "movie/396422", tag: "optional", note: "The origin of the Annabelle doll." },
        { ref: "movie/439079", tag: "optional", note: "Valak's origin story, set in a Romanian abbey." },
        {
          ref: "movie/480414",
          tag: "skippable",
          note: "Only loosely connected, through a priest from Annabelle.",
        },
        { ref: "movie/521029", tag: "optional", note: "The Warrens' daughter Judy and the artifact room." },
        { ref: "movie/423108", tag: "essential", note: "The Warrens investigate a murder blamed on demonic possession." },
        { ref: "movie/968051", tag: "optional", note: "Sister Irene faces Valak again." },
        { ref: "movie/1038392", tag: "essential", note: "The Warrens' final case." },
      ],
    },
    {
      id: "chronological-order",
      heading: "Conjuring movies in chronological order",
      intro: "Sorted by the year each film takes place.",
      entries: [
        { ref: "movie/439079", setIn: "1952", tag: "optional" },
        { ref: "movie/396422", setIn: "1955", tag: "optional" },
        { ref: "movie/968051", setIn: "1956", tag: "optional" },
        { ref: "movie/250546", setIn: "1967", tag: "optional" },
        { ref: "movie/138843", setIn: "1971", tag: "essential" },
        { ref: "movie/521029", setIn: "1972", tag: "optional" },
        { ref: "movie/480414", setIn: "1973", tag: "skippable" },
        { ref: "movie/259693", setIn: "1977", tag: "essential" },
        { ref: "movie/423108", setIn: "1981", tag: "essential" },
        { ref: "movie/1038392", setIn: "1986", tag: "essential" },
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
            For a first watch, release order. The Conjuring and The Conjuring 2 introduce the Warrens, the Annabelle
            doll and Valak, and the spin-offs were written for an audience that already knows them. Starting with The
            Nun means meeting a villain before you know why it matters.
          </p>
          <p>
            Chronological order is great for a rewatch or a Halloween marathon. It starts in 1952 with The Nun, works
            through the Annabelle origin, and lands on the Warrens' cases from 1971 onwards.
          </p>
        </>
      ),
    },
    {
      id: "main-films",
      heading: "Just the main Conjuring films",
      body: (
        <p>
          Short on time? The four Conjuring films are the core of the universe and follow Ed and Lorraine Warren
          directly: The Conjuring, The Conjuring 2, The Devil Made Me Do It and Last Rites. Everything else is a
          spin-off. Of those, The Curse of La Llorona is the easiest to skip, since its only link is a priest who
          appeared in Annabelle.
        </p>
      ),
    },
  ],
  cta: "Add the Conjuring films to ShowSeek to tick them off as you go and see how many are left, whichever order you pick.",
  faqs: [
    {
      q: "What order should I watch the Conjuring movies in?",
      a: "For a first watch, release order: The Conjuring, Annabelle, The Conjuring 2, Annabelle: Creation, The Nun, The Curse of La Llorona, Annabelle Comes Home, The Devil Made Me Do It, The Nun II and The Conjuring: Last Rites.",
    },
    {
      q: "What is the chronological order of the Conjuring Universe?",
      a: "The Nun (1952), Annabelle: Creation (1955), The Nun II (1956), Annabelle (1967), The Conjuring (1971), Annabelle Comes Home (1972), The Curse of La Llorona (1973), The Conjuring 2 (1977), The Devil Made Me Do It (1981) and Last Rites (1986).",
    },
    {
      q: "Is The Curse of La Llorona part of the Conjuring Universe?",
      a: "Loosely. It's connected through Father Perez, a priest from Annabelle, but it doesn't feature the Warrens and nothing later depends on it.",
    },
    {
      q: "How many Conjuring movies are there?",
      a: "Ten in the Conjuring Universe: four Conjuring films, three Annabelle films, two Nun films and The Curse of La Llorona.",
    },
  ],
  related: ["john-wick-movies-in-order", "x-men-movies-in-order"],
};
