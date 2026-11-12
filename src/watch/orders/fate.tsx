import type { WatchOrder } from "../types";

export const fate: WatchOrder = {
  slug: "fate-watch-order",
  name: "Fate",
  category: "anime",
  title: "Fate Watch Order: Where to Start with the Fate Anime",
  description:
    "Where to start with Fate: the watch order for Unlimited Blade Works, Fate/Zero and Heaven's Feel, plus where Apocrypha, Grand Order and Strange Fake fit.",
  h1: "Fate watch order: where to start.",
  intro:
    "The Fate series is a whole franchise of anime built on one idea, the Holy Grail War, where mages summon legendary heroes and fight for a wish-granting Grail. There are more than a dozen Fate anime, many of them set in different worlds, which makes it hard to know where to begin. The core story is just three works, though, and that's where you should start.",
  updated: "2026-11-11",
  heroRef: "tv/61415",
  startHere:
    "Start with Fate/stay night: Unlimited Blade Works (2014), then watch Fate/Zero, then the three Heaven's Feel films. That covers the main story. Everything else, from Apocrypha to Grand Order, is a side story you can pick from afterwards.",
  lists: [
    {
      id: "recommended-order",
      heading: "Fate watch order for newcomers",
      intro: "The three works at the heart of Fate, in the order most fans recommend.",
      entries: [
        {
          ref: "tv/61415/season/1",
          title: "Fate/stay night: Unlimited Blade Works (Season 1)",
          tag: "start",
          note: "Where to start. Shirou Emiya is pulled into the Fifth Holy Grail War.",
        },
        { ref: "tv/61415/season/2", title: "Fate/stay night: Unlimited Blade Works (Season 2)", tag: "essential" },
        {
          ref: "tv/45845",
          tag: "essential",
          note: "The Fourth Holy Grail War, ten years earlier. A prequel that hits harder once you know stay night.",
        },
        {
          ref: "movie/283984",
          tag: "essential",
          note: "The Heaven's Feel route, told as a film trilogy. The darkest version of the story.",
        },
        { ref: "movie/390634", tag: "essential" },
        { ref: "movie/390635", tag: "essential" },
      ],
    },
    {
      id: "other-series",
      heading: "Other Fate anime, and where they fit",
      intro: "Watch any of these after the core three. Most are set in their own version of the Fate world.",
      entries: [
        {
          ref: "tv/37858",
          title: "Fate/stay night (2006)",
          tag: "optional",
          note: "The original adaptation, covering the Fate route. Older, and mostly for completists.",
        },
        {
          ref: "tv/85368",
          title: "Lord El-Melloi II's Case Files",
          tag: "optional",
          note: "Follows Waver Velvet from Fate/Zero, years later. Best right after the core three.",
        },
        { ref: "tv/72304", tag: "optional", note: "A Great Holy Grail War in an alternate world. Standalone." },
        {
          ref: "movie/428142",
          title: "Fate/Grand Order: First Order",
          tag: "optional",
          note: "Start of the Fate/Grand Order story. Watch the Grand Order entries in this order.",
        },
        { ref: "movie/637202", title: "Fate/Grand Order: Camelot 1 – Wandering; Agateram", tag: "optional" },
        { ref: "movie/637462", title: "Fate/Grand Order: Camelot 2 – Paladin; Agateram", tag: "optional" },
        { ref: "tv/90677", tag: "optional", note: "The most popular Grand Order series." },
        { ref: "movie/829920", title: "Fate/Grand Order: Final Singularity – Solomon", tag: "optional", note: "The conclusion of Grand Order's first story." },
        { ref: "tv/229858", tag: "optional", note: "A false Holy Grail War in America. Standalone." },
      ],
    },
  ],
  sections: [
    {
      id: "ubw-or-zero",
      heading: "Unlimited Blade Works or Fate/Zero first?",
      body: (
        <>
          <p>
            This is the big debate in Fate fandom. Fate/Zero is a prequel set ten years before stay night, and some
            people prefer watching it first because it's chronological and has a more mature tone.
          </p>
          <p>
            We recommend Unlimited Blade Works first. Fate/Zero was written for people who already know stay night: it
            spoils several of stay night's reveals and its biggest moments land harder when you know where the
            characters end up. Unlimited Blade Works also explains how the Holy Grail War works more gently, which
            makes it the easier way in.
          </p>
        </>
      ),
    },
    {
      id: "routes",
      heading: "Why there are three versions of stay night",
      body: (
        <p>
          Fate/stay night began as a visual novel with three routes: Fate, Unlimited Blade Works and Heaven's Feel.
          Each is a different version of the same Fifth Holy Grail War, focused on a different heroine. The 2006 series
          adapts the Fate route, the 2014 series adapts Unlimited Blade Works, and the film trilogy adapts Heaven's Feel.
          They aren't sequels to each other, which is why you can watch the 2014 series without the 2006 one.
        </p>
      ),
    },
    {
      id: "grand-order",
      heading: "Fate/Grand Order watch order",
      body: (
        <p>
          Grand Order has its own story, separate from stay night, so it doesn't need the core three. Watch it in story
          order: First Order, the two Camelot films, Absolute Demonic Front: Babylonia, then Final Singularity: Solomon.
          Babylonia came out before the Camelot films, but it's set after them.
        </p>
      ),
    },
  ],
  cta: "Add the Fate series to ShowSeek to keep track of every season and film. Mark what you've finished and it shows you what's next, wherever you are in the franchise.",
  faqs: [
    {
      q: "Where should I start with Fate?",
      a: "Start with Fate/stay night: Unlimited Blade Works (2014), then Fate/Zero, then the three Heaven's Feel films.",
    },
    {
      q: "Should I watch Fate/Zero or Unlimited Blade Works first?",
      a: "Unlimited Blade Works first. Fate/Zero is a prequel, but it was written for people who already know stay night and spoils some of its reveals.",
    },
    {
      q: "Do I need to watch the 2006 Fate/stay night?",
      a: "No. It adapts a different route of the same story. The 2014 Unlimited Blade Works series and the Heaven's Feel films cover the other two routes and don't depend on it.",
    },
    {
      q: "What order should I watch Fate/Grand Order in?",
      a: "First Order, Camelot 1: Wandering; Agateram, Camelot 2: Paladin; Agateram, Absolute Demonic Front: Babylonia, then Final Singularity: Solomon.",
    },
  ],
  related: ["monogatari-watch-order", "gundam-watch-order"],
};
