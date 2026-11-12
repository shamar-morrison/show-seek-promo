import type { WatchOrder } from "../types";

export const jujutsuKaisen: WatchOrder = {
  slug: "jujutsu-kaisen-watch-order",
  name: "Jujutsu Kaisen",
  category: "anime",
  title: "Jujutsu Kaisen Watch Order: Seasons and JJK 0 in Order",
  description:
    "The Jujutsu Kaisen watch order: Season 1, where to watch the JJK 0 movie, Season 2's Hidden Inventory and Shibuya Incident arcs, and Season 3.",
  h1: "Jujutsu Kaisen watch order.",
  intro:
    "Jujutsu Kaisen has three TV seasons and one film, which makes it one of the easier anime to get into. The only real question is when to watch Jujutsu Kaisen 0, a prequel film that came out between the first and second seasons.",
  updated: "2026-11-11",
  heroRef: "tv/95479",
  startHere:
    "Watch Season 1, then the Jujutsu Kaisen 0 film, then Season 2, then Season 3. That's release order, and it's the best way to watch.",
  lists: [
    {
      id: "release-order",
      heading: "Jujutsu Kaisen watch order",
      intro: "Release order, which is also the recommended order.",
      entries: [
        {
          ref: "tv/95479",
          title: "Season 1",
          year: 2020,
          episodes: 24,
          tag: "start",
          note: "Yuji Itadori swallows a cursed finger and joins Jujutsu High.",
        },
        {
          ref: "movie/810693",
          tag: "essential",
          note: "A prequel about Yuta Okkotsu, set a year before Season 1. Yuta plays a big part later on.",
        },
        {
          ref: "tv/95479",
          title: "Season 2",
          year: 2023,
          episodes: 23,
          tag: "essential",
          note: "The Hidden Inventory arc, a flashback to Gojo's student days, then the Shibuya Incident.",
        },
        {
          ref: "tv/95479",
          title: "Season 3: The Culling Game",
          year: 2026,
          episodes: 12,
          tag: "essential",
          note: "Picks up straight after the Shibuya Incident.",
        },
      ],
    },
  ],
  sections: [
    {
      id: "jjk-0",
      heading: "When to watch Jujutsu Kaisen 0",
      body: (
        <>
          <p>
            Jujutsu Kaisen 0 is set a year before Season 1, so chronologically it comes first. We still recommend
            watching it after Season 1, the way it was released. Season 1 introduces the world and characters with more
            room to breathe, and the film's ending lands harder when you already know Gojo and the students of Jujutsu
            High.
          </p>
          <p>
            Don't skip it, though. Yuta Okkotsu, the film's lead, becomes important in the later seasons.
          </p>
        </>
      ),
    },
    {
      id: "season-2",
      heading: "Jujutsu Kaisen Season 2 arcs",
      body: (
        <p>
          Season 2 is two arcs. Hidden Inventory goes back in time to Gojo and Geto's school days and explains how they
          became who they are. The Shibuya Incident then returns to the present for the series' biggest arc so far.
          Watch them in order: the flashback sets up the Shibuya Incident.
        </p>
      ),
    },
  ],
  cta: "Add Jujutsu Kaisen to ShowSeek to keep your place across every season and get a reminder when new episodes air.",
  faqs: [
    {
      q: "What order should I watch Jujutsu Kaisen in?",
      a: "Season 1, then the Jujutsu Kaisen 0 film, then Season 2, then Season 3: The Culling Game.",
    },
    {
      q: "Should I watch Jujutsu Kaisen 0 first?",
      a: "We recommend watching it after Season 1. It's a prequel, but it lands better once you know the characters. Don't skip it: its lead, Yuta, matters later.",
    },
    {
      q: "Is Jujutsu Kaisen 0 canon?",
      a: "Yes. It adapts the prequel manga and introduces Yuta Okkotsu, who plays a major role in later seasons.",
    },
  ],
  related: ["demon-slayer-watch-order", "naruto-watch-order"],
};
