import { Link } from "react-router-dom";
import { guidePath } from "../../guides/types";
import type { WatchOrder } from "../types";

export const attackOnTitan: WatchOrder = {
  slug: "attack-on-titan-watch-order",
  name: "Attack on Titan",
  category: "anime",
  title: "Attack on Titan Watch Order: Seasons, OVAs and Movies",
  description:
    "The Attack on Titan watch order: all four seasons, The Final Chapters, the OVAs and where they fit, plus which recap movies and spin-offs you can skip.",
  h1: "Attack on Titan watch order.",
  intro:
    "Attack on Titan is easier to follow than most long anime: the main story runs in a straight line across four seasons and a two-part finale. The confusion comes from everything around it, with split seasons, OVAs, recap movies, a compilation film and a parody spin-off. Here's what to watch, in what order, and what you can leave out.",
  updated: "2026-11-11",
  heroRef: "tv/1429",
  startHere:
    "Watch the TV series in order: Season 1, Season 2, Season 3 (both parts), The Final Season (both parts), then The Final Chapters. The OVAs are optional extras you can add after Season 2. Skip the recap movies and the live-action films.",
  lists: [
    {
      id: "main-story",
      heading: "Attack on Titan watch order",
      intro: "The complete main story, in release order. Story order is the same.",
      entries: [
        { ref: "tv/1429/season/1", title: "Season 1", tag: "start" },
        { ref: "tv/1429/season/2", title: "Season 2", tag: "essential" },
        {
          ref: "tv/1429/season/3",
          title: "Season 3 (Parts 1 and 2)",
          tag: "essential",
          note: "Aired in two halves, in 2018 and 2019. Watch both.",
        },
        {
          ref: "tv/1429/season/4",
          title: "The Final Season (Parts 1 and 2)",
          tag: "essential",
          note: "Aired in two halves, from 2020 to 2022.",
        },
        {
          title: "The Final Chapters (Specials 1 and 2)",
          year: 2023,
          episodes: 2,
          kind: "TV specials",
          tag: "essential",
          note: "Two feature-length specials that end the story.",
        },
      ],
    },
    {
      id: "ovas",
      heading: "Attack on Titan OVAs",
      intro: "Optional side stories. Each is best watched after Season 2, when you know the characters involved.",
      entries: [
        { title: "Ilse's Notebook", year: 2013, episodes: 1, kind: "OVA", tag: "optional", note: "A Survey Corps scout's diary." },
        {
          title: "A Choice with No Regrets",
          year: 2014,
          episodes: 2,
          kind: "OVA",
          tag: "optional",
          note: "Levi's backstory and how he joined the Survey Corps. The most popular OVA.",
        },
        {
          title: "Lost Girls",
          year: 2017,
          episodes: 3,
          kind: "OVA",
          tag: "optional",
          note: "Side stories about Annie and Mikasa.",
        },
      ],
    },
  ],
  sections: [
    {
      id: "last-attack",
      heading: "The Final Chapters or The Last Attack?",
      body: (
        <p>
          <strong>Attack on Titan: The Last Attack</strong> is a theatrical film that combines the two Final Chapters
          specials into one movie. It covers the same ending, so watch one or the other, not both. The two TV specials
          are the original version; The Last Attack is a single sitting with a theatrical finish.
        </p>
      ),
    },
    {
      id: "skip",
      heading: "What you can skip",
      body: (
        <ul>
          <li>
            <strong>Recap movies.</strong> Crimson Bow and Arrow, Wings of Freedom and Roar of Awakening condense the
            TV seasons. If you've watched the series, you've seen them.
          </li>
          <li>
            <strong>The live-action films (2015).</strong> A loose adaptation with its own story.
          </li>
          <li>
            <strong>Attack on Titan: Junior High.</strong> A comedy parody series. Fun after you've finished, but not
            part of the story.
          </li>
        </ul>
      ),
    },
    {
      id: "tracking",
      heading: "Keeping track of Attack on Titan",
      body: (
        <p>
          With split seasons and specials, it's easy to lose your place, especially if you watch across different
          services. If you stream anime in Stremio, the{" "}
          <Link to={guidePath("stremio-sync")}>ShowSeek Stremio add-on</Link> marks every episode you finish as watched
          automatically.
        </p>
      ),
    },
  ],
  cta: "Add Attack on Titan to ShowSeek and it keeps your place across all four seasons, so you always know which episode is next, even across the split seasons.",
  faqs: [
    {
      q: "What order should I watch Attack on Titan in?",
      a: "Season 1, Season 2, Season 3 Parts 1 and 2, The Final Season Parts 1 and 2, then The Final Chapters Specials 1 and 2.",
    },
    {
      q: "When should I watch the Attack on Titan OVAs?",
      a: "After Season 2. Ilse's Notebook, A Choice with No Regrets and Lost Girls are optional side stories that work best once you know the characters.",
    },
    {
      q: "Do I need to watch the Attack on Titan movies?",
      a: "No. The recap movies retell the TV seasons and the live-action films are a separate adaptation. The Last Attack is a theatrical version of The Final Chapters, so watch it instead of the specials, not as well as them.",
    },
    {
      q: "How many seasons of Attack on Titan are there?",
      a: "Four seasons, with Season 3 and The Final Season each split into two parts, followed by The Final Chapters specials.",
    },
  ],
  related: ["monogatari-watch-order", "gundam-watch-order"],
};
