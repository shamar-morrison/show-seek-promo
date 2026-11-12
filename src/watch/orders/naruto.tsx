import type { WatchOrder } from "../types";

export const naruto: WatchOrder = {
  slug: "naruto-watch-order",
  name: "Naruto",
  category: "anime",
  title: "Naruto Watch Order: Naruto, Shippuden, Boruto and Movies",
  description:
    "The Naruto watch order: Naruto, Naruto Shippuden, The Last and Boruto, where the canon movies fit, and how to handle the filler episodes.",
  h1: "Naruto watch order.",
  intro:
    "More than a thousand episodes across three series, plus a long list of movies. Naruto itself is simple to follow: the main story runs in a straight line from Naruto to Shippuden to Boruto. What trips people up is where the movies go, which ones matter, and what to do about the filler.",
  updated: "2026-11-11",
  heroRef: "tv/46260",
  startHere:
    "Start with Naruto (2002), then Naruto Shippuden. Watch The Last: Naruto the Movie before Shippuden's final arc, starting at episode 494, then move on to Boruto: Naruto Next Generations. Most of the other movies are optional side stories.",
  lists: [
    {
      id: "recommended-order",
      heading: "Naruto watch order",
      intro: "The full main story, with the one movie you shouldn't skip.",
      entries: [
        { ref: "tv/46260", tag: "start", note: "Naruto's childhood, from the Academy to the search for Sasuke." },
        {
          ref: "tv/31910",
          tag: "essential",
          note: "The story picks up a few years later and runs to the end of the Fourth Great Ninja War.",
        },
        {
          ref: "movie/317442",
          tag: "essential",
          note: "Canon. Set two years after the war. Watch it before Shippuden episode 494, the start of the wedding arc.",
        },
        {
          ref: "tv/70881",
          tag: "essential",
          note: "Follows Naruto's son Boruto and the next generation of ninja.",
        },
        {
          ref: "movie/347201",
          tag: "optional",
          note: "The Boruto anime retells this story in its Chunin Exam arc, so it's skippable.",
        },
      ],
    },
  ],
  sections: [
    {
      id: "filler",
      heading: "What about the Naruto filler?",
      body: (
        <>
          <p>
            Naruto has a lot of filler: episodes made for the anime that don't adapt the manga. The biggest block is at
            the end of the original Naruto, where most of the final 80 or so episodes are filler, and Shippuden has
            several long filler arcs too.
          </p>
          <p>
            Skipping filler is the most common way to get through Naruto faster, and you won't miss any of the main
            story. Some filler arcs are well liked, though, so if you're enjoying the characters, there's no harm in
            watching them.
          </p>
        </>
      ),
    },
    {
      id: "movies",
      heading: "Do you need to watch the Naruto movies?",
      body: (
        <p>
          Only The Last: Naruto the Movie is part of the main story, covering how Naruto and Hinata get together. The
          other Naruto and Shippuden movies are standalone adventures that don't affect the series, so watch them
          whenever you like. Boruto: Naruto the Movie is canon too, but the Boruto anime covers the same events.
        </p>
      ),
    },
  ],
  cta: "Add Naruto, Shippuden and Boruto to ShowSeek and it keeps your place across all of them. With this many episodes, you'll never lose track of where you stopped.",
  faqs: [
    {
      q: "What order should I watch Naruto in?",
      a: "Naruto, then Naruto Shippuden, with The Last: Naruto the Movie watched before Shippuden episode 494, then Boruto: Naruto Next Generations.",
    },
    {
      q: "When should I watch The Last: Naruto the Movie?",
      a: "Before Naruto Shippuden episode 494. The film is set two years after the war, and Shippuden's final episodes, the wedding arc, follow on from it.",
    },
    {
      q: "Can I skip the Naruto filler?",
      a: "Yes. Filler episodes don't adapt the manga, so skipping them won't affect the main story.",
    },
    {
      q: "Do I need to watch Naruto before Shippuden?",
      a: "Yes. Shippuden continues directly from the original Naruto, and its story relies on the first series.",
    },
  ],
  related: ["dragon-ball-watch-order", "jujutsu-kaisen-watch-order"],
};
