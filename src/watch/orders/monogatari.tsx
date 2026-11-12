import { Link } from "react-router-dom";
import { guidePath } from "../../guides/types";
import type { WatchOrder } from "../types";

export const monogatari: WatchOrder = {
  slug: "monogatari-watch-order",
  name: "Monogatari",
  category: "anime",
  title: "Monogatari Watch Order: Every Season and Film in Order",
  description:
    "The Monogatari series watch order, from Bakemonogatari to Off & Monster Season, including Kizumonogatari and the specials, and why broadcast order works best.",
  h1: "Monogatari watch order.",
  intro:
    "Monogatari is famous for being hard to watch in order. Its seasons, specials and films have names that all end in ‑monogatari, the story jumps backwards and forwards in time, and several entries are split across TV, film and online releases. The good news: there's a simple answer that most fans agree on.",
  updated: "2026-11-11",
  heroRef: "tv/46195",
  startHere:
    "Start with Bakemonogatari (2009) and watch everything in broadcast order, the order it was released in Japan. The story is told out of sequence on purpose, and each season is written to be seen after the ones before it, even when it's set earlier.",
  lists: [
    {
      id: "broadcast-order",
      heading: "Monogatari watch order (broadcast order)",
      intro: "The recommended order for a first watch.",
      entries: [
        { ref: "tv/46195/season/1", title: "Bakemonogatari", tag: "start", note: "Where to start. Meet Koyomi Araragi." },
        { ref: "tv/46195/season/2", title: "Nisemonogatari", tag: "essential" },
        {
          title: "Nekomonogatari: Black",
          year: 2012,
          episodes: 4,
          kind: "TV special",
          tag: "essential",
          note: "A prequel about Tsubasa Hanekawa, set before Bakemonogatari.",
        },
        {
          ref: "tv/46195/season/3",
          title: "Monogatari Series Second Season",
          tag: "essential",
          note: "Covers Nekomonogatari: White, Kabukimonogatari, Otorimonogatari, Onimonogatari and Koimonogatari.",
        },
        { title: "Hanamonogatari", year: 2014, episodes: 5, kind: "TV special", tag: "essential" },
        { title: "Tsukimonogatari", year: 2014, episodes: 4, kind: "TV special", tag: "essential" },
        { ref: "tv/46195/season/4", title: "Owarimonogatari", tag: "essential" },
        {
          ref: "movie/357786",
          tag: "essential",
          note: "The Kizumonogatari films tell the story of how it all began, set before Bakemonogatari.",
        },
        {
          title: "Koyomimonogatari",
          year: 2016,
          episodes: 12,
          kind: "Web series",
          tag: "optional",
          note: "Twelve short side stories, one for each month of Araragi's year.",
        },
        { ref: "movie/362584", tag: "essential" },
        { ref: "movie/362585", tag: "essential" },
        { title: "Owarimonogatari Second Season", year: 2017, episodes: 7, kind: "TV special", tag: "essential" },
        { title: "Zoku Owarimonogatari", year: 2018, episodes: 6, kind: "Film and TV", tag: "essential" },
        {
          ref: "tv/46195/season/5",
          title: "Monogatari Series: Off & Monster Season",
          tag: "essential",
          note: "The newest season, picking up after Zoku Owarimonogatari.",
        },
      ],
    },
  ],
  sections: [
    {
      id: "chronological",
      heading: "Should you watch Monogatari in chronological order?",
      body: (
        <>
          <p>
            Not on a first watch. Monogatari tells its story out of order deliberately: Kizumonogatari and
            Nekomonogatari: Black are prequels, but they were made after Bakemonogatari and rely on you already knowing
            the characters and what happens to them. Watching them first spoils some of Bakemonogatari's best reveals
            and removes the context that makes the prequels land.
          </p>
          <p>
            Broadcast order also keeps the animation and style consistent as the series develops. Save chronological
            order for a rewatch, when you know where everything fits.
          </p>
        </>
      ),
    },
    {
      id: "kizumonogatari",
      heading: "Kizumonogatari: three films or Koyomi Vamp?",
      body: (
        <p>
          Kizumonogatari was originally released as three films between 2016 and 2017: Tekketsu, Nekketsu and
          Reiketsu. In 2024 they were re-edited into a single film, Kizumonogatari: Koyomi Vamp. Either version works in
          the same slot. The three original films are the complete version; Koyomi Vamp is the quicker way through.
        </p>
      ),
    },
    {
      id: "skippable",
      heading: "Can you skip any of Monogatari?",
      body: (
        <>
          <p>
            Koyomimonogatari is the only entry most fans call optional. It's a set of short, self-contained stories
            spread across Araragi's year, and nothing later depends on it. Everything else builds on what came before,
            so skipping it will leave gaps.
          </p>
          <p>
            Watching on Stremio? The <Link to={guidePath("stremio-sync")}>ShowSeek Stremio add-on</Link> marks each
            episode you finish as watched, so you never lose your place in a series this long.
          </p>
        </>
      ),
    },
  ],
  cta: "Add Monogatari to ShowSeek and mark episodes as you go. It keeps your place across every season and special, and shows you exactly which arc is next.",
  faqs: [
    {
      q: "What order should I watch Monogatari in?",
      a: "Broadcast order: Bakemonogatari, Nisemonogatari, Nekomonogatari: Black, Monogatari Series Second Season, Hanamonogatari, Tsukimonogatari, Owarimonogatari, the Kizumonogatari films, Koyomimonogatari, Owarimonogatari Second Season, Zoku Owarimonogatari and Off & Monster Season.",
    },
    {
      q: "Where do I start Monogatari?",
      a: "Start with Bakemonogatari (2009), the first season. Even though Kizumonogatari is set earlier, it's meant to be watched later.",
    },
    {
      q: "Should I watch Kizumonogatari first?",
      a: "No. Kizumonogatari is a prequel, but it's written for viewers who have already seen Bakemonogatari and the early seasons. Watch it after Owarimonogatari, in broadcast order.",
    },
    {
      q: "What is Kizumonogatari: Koyomi Vamp?",
      a: "A 2024 re-edit of the three Kizumonogatari films into a single movie. You can watch it in place of the three films.",
    },
  ],
  related: ["fate-watch-order", "attack-on-titan-watch-order"],
};
