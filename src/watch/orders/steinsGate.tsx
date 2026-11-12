import type { WatchOrder } from "../types";

export const steinsGate: WatchOrder = {
  slug: "steins-gate-watch-order",
  name: "Steins;Gate",
  category: "anime",
  title: "Steins;Gate Watch Order: 23β, Steins;Gate 0 and the Movie",
  description:
    "The Steins;Gate watch order: where Episode 23β fits, when to watch Steins;Gate 0 and the movie, and the alternative branch order fans recommend.",
  h1: "Steins;Gate watch order.",
  intro:
    "Steins;Gate is a time-travel story, so it's fitting that its watch order involves a branch in time. The original series, a special episode called 23β, a sequel series and a film all connect, and Steins;Gate 0 follows a different timeline from the original ending. Here's the order to watch them in.",
  updated: "2026-11-11",
  heroRef: "tv/42509",
  startHere:
    "Watch all of Steins;Gate (episodes 1–24), then Episode 23β, then Steins;Gate 0, then the movie. Episode 23β is the bridge into Steins;Gate 0, so don't skip it.",
  lists: [
    {
      id: "recommended-order",
      heading: "Steins;Gate watch order",
      intro: "The simplest order, and the one we recommend for a first watch.",
      entries: [
        { ref: "tv/42509", title: "Steins;Gate", tag: "start", note: "The complete original series, episodes 1–24." },
        {
          title: "Steins;Gate: Episode 23β",
          year: 2015,
          episodes: 1,
          kind: "Special episode",
          tag: "essential",
          note: "An alternate version of episode 23 that branches into a different timeline. It leads directly into Steins;Gate 0.",
        },
        { ref: "tv/78102", tag: "essential", note: "The sequel series, set in the timeline from Episode 23β." },
        {
          ref: "movie/225745",
          title: "Steins;Gate: The Movie – Load Region of Déjà Vu",
          tag: "essential",
          note: "Set a year after the original series' ending.",
        },
      ],
    },
    {
      id: "optional",
      heading: "Optional extras",
      entries: [
        {
          title: "Steins;Gate: Egoistic Poriomania",
          year: 2012,
          episodes: 1,
          kind: "OVA",
          tag: "optional",
          note: "A lighthearted episode set after the original series' ending. Watch it before the movie.",
        },
      ],
    },
  ],
  sections: [
    {
      id: "branch-order",
      heading: "The alternative: branch order",
      body: (
        <>
          <p>
            Many fans recommend a different order once you know the story: watch Steins;Gate episodes 1–22, then
            Episode 23β, then Steins;Gate 0, and only then go back to episodes 23–24 of the original and the movie.
          </p>
          <p>
            This follows the timeline more closely, since Episode 23β and Steins;Gate 0 branch off before the original
            ending. It's a great way to rewatch. For a first watch, though, the simpler order above keeps the original
            series' ending intact, and it's how most people experienced Steins;Gate.
          </p>
        </>
      ),
    },
    {
      id: "23-beta",
      heading: "Where do you find Episode 23β?",
      body: (
        <p>
          Episode 23β was made in 2015, years after the original series, to lead into Steins;Gate 0. Some streaming
          services list it with the original series and some with Steins;Gate 0, so check both if you can't find
          it. Don't skip it: Steins;Gate 0 picks up straight after it.
        </p>
      ),
    },
  ],
  cta: "Add Steins;Gate and Steins;Gate 0 to ShowSeek and mark episodes as you go, so you always know where you are, whichever timeline you're in.",
  faqs: [
    {
      q: "What order should I watch Steins;Gate in?",
      a: "Steins;Gate (episodes 1–24), then Episode 23β, then Steins;Gate 0, then Steins;Gate: The Movie – Load Region of Déjà Vu.",
    },
    {
      q: "When should I watch Steins;Gate 0?",
      a: "After the original Steins;Gate and Episode 23β. Steins;Gate 0 continues from Episode 23β's alternate timeline.",
    },
    {
      q: "Do I need to watch Episode 23β?",
      a: "Yes, before Steins;Gate 0. It's the bridge into Steins;Gate 0's timeline.",
    },
    {
      q: "When should I watch the Steins;Gate movie?",
      a: "After the original series. Load Region of Déjà Vu is set a year after the original series' ending.",
    },
  ],
  related: ["monogatari-watch-order", "fate-watch-order"],
};
