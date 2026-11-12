import type { WatchOrder } from "../types";

export const gundam: WatchOrder = {
  slug: "gundam-watch-order",
  name: "Gundam",
  category: "anime",
  title: "Gundam Watch Order: Where to Start with Gundam",
  description:
    "Where to start with Gundam: the best standalone series for newcomers, the Universal Century timeline in order from 0079 to Hathaway, and the side stories.",
  h1: "Gundam watch order: where to start.",
  intro:
    "Gundam has been running since 1979, with dozens of series across several separate timelines. The secret is that you don't need to watch it all, or even watch it in order. Most Gundam shows are self-contained, so you can start with whichever one appeals to you. The exception is the Universal Century, the original timeline, which is best watched in sequence.",
  updated: "2026-11-11",
  heroRef: "tv/196400",
  startHere:
    "New to Gundam? Start with The Witch from Mercury (2022) or Iron-Blooded Orphans (2015). Both are standalone, modern and need no background. If you'd rather start at the beginning, watch the original Mobile Suit Gundam (1979) and follow the Universal Century order below.",
  lists: [
    {
      id: "where-to-start",
      heading: "The best Gundam series to start with",
      intro: "Each of these stands on its own. Pick one; no other Gundam is required.",
      entries: [
        {
          ref: "tv/196400",
          tag: "start",
          note: "A recent standalone series, set at a school for mobile suit pilots. The easiest way in.",
        },
        {
          ref: "tv/64375",
          tag: "start",
          note: "A grounded war story about child soldiers fighting for independence.",
        },
        { ref: "tv/21732", tag: "start", note: "Set in the 24th century, following a private force that tries to end war by armed intervention." },
        { ref: "tv/20111", tag: "start", note: "Hugely popular, and continued in SEED Destiny." },
        { ref: "tv/21730", tag: "start", note: "The series that brought Gundam to the West in the early 2000s." },
      ],
    },
    {
      id: "universal-century",
      heading: "Universal Century watch order",
      intro: "The original Gundam timeline, in story order. UC is the in-universe calendar.",
      entries: [
        {
          ref: "tv/21731",
          setIn: "UC 0079",
          tag: "essential",
          note: "The One Year War. Also available as three compilation films (1981–1982).",
        },
        { ref: "tv/13674", setIn: "UC 0087", tag: "essential" },
        { ref: "tv/5660", setIn: "UC 0088", tag: "optional", note: "A direct sequel to Zeta, lighter in tone at first." },
        { ref: "movie/16157", setIn: "UC 0093", tag: "essential", note: "The final battle between Amuro and Char." },
        { ref: "tv/45500", setIn: "UC 0096", tag: "essential" },
        { ref: "movie/685274", setIn: "UC 0105", tag: "essential" },
        { ref: "movie/910850", title: "Mobile Suit Gundam Hathaway: The Sorcery of Nymph Circe", setIn: "UC 0105", tag: "essential", note: "Continues Hathaway's story." },
      ],
    },
    {
      id: "uc-side-stories",
      heading: "Universal Century side stories",
      intro: "Shorter series set around the One Year War. Watch them after the original Mobile Suit Gundam.",
      entries: [
        { ref: "tv/43887", setIn: "UC 0079", tag: "optional", note: "Ground combat from the Federation side." },
        { ref: "tv/46512", setIn: "UC 0079", tag: "optional", note: "A short, personal story many fans rank among Gundam's best." },
        { ref: "tv/72677", setIn: "UC 0083", tag: "optional", note: "Bridges the original series and Zeta Gundam." },
      ],
    },
  ],
  sections: [
    {
      id: "timelines",
      heading: "Why Gundam has so many timelines",
      body: (
        <>
          <p>
            For its first fifteen years, Gundam told one continuous story: the Universal Century, a future where
            humanity has moved into space colonies and goes to war with them. In the 1990s the franchise started making
            &ldquo;alternate universe&rdquo; series instead, each with its own world, characters and history. Wing, SEED,
            00, Iron-Blooded Orphans and The Witch from Mercury are all separate universes.
          </p>
          <p>
            That's why there's no single Gundam watch order. Each alternate series is its own complete story, and only
            the Universal Century needs to be watched in sequence.
          </p>
        </>
      ),
    },
    {
      id: "gquuuuuux",
      heading: "Where GQuuuuuuX fits",
      body: (
        <p>
          Mobile Suit Gundam GQuuuuuuX (2025) imagines a different outcome for the One Year War from the original 1979
          series. It works on its own, but it's packed with references to the original, so it's most rewarding after
          you've seen Mobile Suit Gundam.
        </p>
      ),
    },
  ],
  cta: "Add the Gundam series you're watching to ShowSeek. It keeps your place in every one, so you can jump between timelines without losing track.",
  faqs: [
    {
      q: "Where should I start with Gundam?",
      a: "The Witch from Mercury or Iron-Blooded Orphans are the easiest places to start. Both are standalone and need no background. To start at the beginning, watch Mobile Suit Gundam (1979).",
    },
    {
      q: "Do I need to watch Gundam in order?",
      a: "Only the Universal Century series. Alternate-universe series like Wing, SEED, 00, Iron-Blooded Orphans and The Witch from Mercury are self-contained.",
    },
    {
      q: "What is the Universal Century watch order?",
      a: "Mobile Suit Gundam, Zeta Gundam, Gundam ZZ, Char's Counterattack, Gundam Unicorn, then Hathaway. Side stories like The 08th MS Team, War in the Pocket and Stardust Memory fit after the original series.",
    },
    {
      q: "Is The Witch from Mercury connected to other Gundam shows?",
      a: "No. It's set in its own universe, so you can watch it without seeing any other Gundam.",
    },
  ],
  related: ["attack-on-titan-watch-order", "fate-watch-order"],
};
