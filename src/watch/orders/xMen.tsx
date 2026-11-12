import type { WatchOrder } from "../types";

export const xMen: WatchOrder = {
  slug: "x-men-movies-in-order",
  name: "X-Men",
  category: "movies",
  title: "X-Men Movies in Order: Release and Chronological Timeline",
  description:
    "All 14 X-Men movies in order, including Wolverine and Deadpool, in release and chronological order, with how Days of Future Past changes the timeline.",
  h1: "X-Men movies in order.",
  intro:
    "Fourteen films over 24 years, counting the Wolverine and Deadpool movies. The X-Men series has two casts, a prequel era, and a film that rewrites history halfway through, so the order you pick changes the experience. Here are both orders, and the one we recommend.",
  updated: "2026-11-11",
  heroRef: "movie/36657",
  startHere:
    "Watch in release order, starting with X-Men (2000). Days of Future Past only works if you've seen both the original trilogy and First Class, and release order gets you there naturally. Watch Deadpool & Wolverine last.",
  lists: [
    {
      id: "release-order",
      heading: "X-Men movies in release order",
      intro: "Our recommendation, especially for a first watch.",
      entries: [
        { ref: "movie/36657", tag: "essential", note: "The original cast: Patrick Stewart, Ian McKellen and Hugh Jackman." },
        { ref: "movie/36658", tag: "essential" },
        { ref: "movie/36668", tag: "essential", note: "Ends the original trilogy." },
        { ref: "movie/2080", tag: "skippable", note: "Wolverine's backstory. Later films largely ignore it." },
        { ref: "movie/49538", tag: "essential", note: "A prequel with a younger cast, set in 1962." },
        { ref: "movie/76170", tag: "optional", note: "Logan in Japan, after The Last Stand." },
        {
          ref: "movie/127585",
          tag: "essential",
          note: "Brings both casts together and resets the timeline. The series' turning point.",
        },
        { ref: "movie/293660", tag: "optional", note: "Mostly standalone and very much its own thing." },
        { ref: "movie/246655", tag: "optional", note: "The younger cast in 1983." },
        { ref: "movie/263115", tag: "essential", note: "Hugh Jackman's last solo Wolverine film, set in 2029." },
        { ref: "movie/383498", tag: "optional" },
        { ref: "movie/320288", tag: "optional", note: "The last film with the prequel cast." },
        { ref: "movie/340102", tag: "skippable", note: "A horror-flavored side story with almost no ties to the rest." },
        { ref: "movie/533535", tag: "optional", note: "Part of the Marvel Cinematic Universe. Best saved for last." },
      ],
    },
    {
      id: "chronological-order",
      heading: "X-Men movies in chronological order",
      intro:
        "Sorted by when each film is set. Days of Future Past changes history in 1973, so the films after it in this list don't all share one timeline.",
      entries: [
        { ref: "movie/49538", setIn: "1962" },
        { ref: "movie/127585", setIn: "1973 (and the future)" },
        { ref: "movie/2080", setIn: "1979, with flashbacks" },
        { ref: "movie/246655", setIn: "1983" },
        { ref: "movie/320288", setIn: "1992" },
        { ref: "movie/36657", setIn: "Early 2000s" },
        { ref: "movie/36658", setIn: "Early 2000s" },
        { ref: "movie/36668", setIn: "Mid 2000s" },
        { ref: "movie/76170", setIn: "After The Last Stand" },
        { ref: "movie/293660", setIn: "2016" },
        { ref: "movie/383498", setIn: "2018" },
        { ref: "movie/340102", setIn: "Present day" },
        { ref: "movie/263115", setIn: "2029" },
        { ref: "movie/533535", setIn: "The multiverse" },
      ],
    },
  ],
  sections: [
    {
      id: "timeline",
      heading: "Why the X-Men timeline is confusing",
      body: (
        <>
          <p>
            The series started with the original trilogy (2000–2006), then went back in time with First Class (2011)
            and a younger cast. In Days of Future Past, Wolverine travels back to 1973 and changes history, which
            undoes much of what happened in the original films.
          </p>
          <p>
            That's why chronological order is a puzzle rather than a straight line: Apocalypse and Dark Phoenix happen
            in the new, changed timeline, while X-Men Origins: Wolverine and the original trilogy belong to the old
            one. Release order avoids the problem, because you see the timeline change the way audiences did.
          </p>
        </>
      ),
    },
    {
      id: "essential",
      heading: "The essential X-Men movies",
      body: (
        <p>
          If you only want the core story, watch X-Men, X2, The Last Stand, First Class, Days of Future Past and Logan.
          The Deadpool films are fun but mostly standalone, and X-Men Origins: Wolverine and The New Mutants are the
          easiest to skip.
        </p>
      ),
    },
    {
      id: "deadpool-wolverine",
      heading: "Where Deadpool & Wolverine fits",
      body: (
        <p>
          Deadpool & Wolverine is a Marvel Cinematic Universe film that brings Deadpool and Wolverine into the
          multiverse. It's packed with references to the whole X-Men series, so it lands best as the final film,
          after Logan.
        </p>
      ),
    },
  ],
  cta: "Add the X-Men films to ShowSeek to work through all fourteen at your own pace. It keeps track of what you've watched and what's next.",
  faqs: [
    {
      q: "What order should I watch the X-Men movies in?",
      a: "Release order works best: X-Men, X2, The Last Stand, X-Men Origins: Wolverine, First Class, The Wolverine, Days of Future Past, Deadpool, Apocalypse, Logan, Deadpool 2, Dark Phoenix, The New Mutants and Deadpool & Wolverine.",
    },
    {
      q: "What is the X-Men chronological order?",
      a: "First Class (1962), Days of Future Past (1973), X-Men Origins: Wolverine (1979), Apocalypse (1983), Dark Phoenix (1992), X-Men, X2, The Last Stand, The Wolverine, Deadpool, Deadpool 2, The New Mutants, Logan (2029) and Deadpool & Wolverine.",
    },
    {
      q: "Which X-Men movies can I skip?",
      a: "X-Men Origins: Wolverine and The New Mutants are the easiest to skip. The Deadpool films are optional but mostly standalone.",
    },
    {
      q: "When should I watch Deadpool & Wolverine?",
      a: "Last. It's part of the Marvel Cinematic Universe and references the whole X-Men series, including Logan.",
    },
  ],
  related: ["mission-impossible-movies-in-order", "conjuring-universe-in-order"],
};
