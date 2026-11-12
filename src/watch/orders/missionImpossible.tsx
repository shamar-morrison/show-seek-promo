import type { WatchOrder } from "../types";

export const missionImpossible: WatchOrder = {
  slug: "mission-impossible-movies-in-order",
  name: "Mission: Impossible",
  category: "movies",
  title: "Mission: Impossible Movies in Order: All 8 Films",
  description:
    "Every Mission: Impossible movie in order, from the 1996 original to The Final Reckoning, with runtimes, which films connect and which you can skip.",
  h1: "Mission: Impossible movies in order.",
  intro:
    "Eight films and almost thirty years of Ethan Hunt. The Mission: Impossible movies happen in the same order they were released, so there's no timeline puzzle to solve. What's worth knowing is how they connect: the first five mostly stand alone, while the last four tell one continuous story that reaches all the way back to the 1996 original.",
  updated: "2026-11-11",
  heroRef: "movie/954",
  startHere:
    "Watch them in release order, starting with Mission: Impossible (1996). Short on time? Watch the first film, then jump to Mission: Impossible III and watch everything from there. The only one you can safely skip is Mission: Impossible 2.",
  lists: [
    {
      id: "release-order",
      heading: "Mission: Impossible movies in release order",
      intro: "Release order and story order are the same for Mission: Impossible, so this is the only list you need.",
      entries: [
        {
          ref: "movie/954",
          tag: "essential",
          note: "The NOC list heist and the Langley vault. The Final Reckoning brings back characters and a key moment from this film.",
        },
        {
          ref: "movie/955",
          tag: "skippable",
          note: "A standalone story. Nothing later depends on it.",
        },
        {
          ref: "movie/956",
          tag: "essential",
          note: "Introduces Ethan's wife Julia and the Rabbit's Foot, both of which matter later.",
        },
        {
          ref: "movie/56292",
          tag: "essential",
          note: "Brings in Brandt and starts the team that carries the rest of the series.",
        },
        {
          ref: "movie/177677",
          tag: "essential",
          note: "First appearances of Ilsa Faust and Solomon Lane. The start of the connected run.",
        },
        {
          ref: "movie/353081",
          tag: "essential",
          note: "A direct sequel to Rogue Nation, and the payoff for Julia's story.",
        },
        {
          ref: "movie/575264",
          tag: "essential",
          note: "Part one of the final story, against the AI known as the Entity.",
        },
        {
          ref: "movie/575265",
          tag: "essential",
          note: "Picks up straight after Dead Reckoning and ties the whole series together.",
        },
      ],
    },
  ],
  sections: [
    {
      id: "how-they-connect",
      heading: "How the Mission: Impossible movies connect",
      body: (
        <>
          <p>
            The series changed shape as it went. The first three films were made by three different directors, and
            each is close to self-contained. Ghost Protocol starts to build a regular team around Ethan, and from Rogue
            Nation onwards Christopher McQuarrie directs every film, turning the series into one long story.
          </p>
          <ul>
            <li>
              <strong>Rogue Nation and Fallout</strong> are a two-part story about the Syndicate and Solomon Lane.
            </li>
            <li>
              <strong>Dead Reckoning and The Final Reckoning</strong> are one story split across two films. Watch them
              back to back if you can.
            </li>
            <li>
              <strong>The Final Reckoning</strong> also reaches back to the 1996 original and to Mission: Impossible
              III, so it rewards having seen the whole series.
            </li>
          </ul>
        </>
      ),
    },
    {
      id: "skip",
      heading: "Which Mission: Impossible movie can you skip?",
      body: (
        <p>
          Mission: Impossible 2 is the one most fans skip. It's a standalone story, none of its characters return,
          and nothing in the later films depends on it. Everything else feeds into the final two films in some way, so
          if you're watching for the ending, keep the rest.
        </p>
      ),
    },
    {
      id: "tv-series",
      heading: "Do you need to watch the Mission: Impossible TV series?",
      body: (
        <p>
          No. The films are inspired by the 1960s TV series, but Ethan Hunt is a new character and the movies don't
          expect you to know the show. Watch it if you're curious where the theme tune and the self-destructing tapes
          came from.
        </p>
      ),
    },
  ],
  cta: "Add the Mission: Impossible films to ShowSeek and it tracks the whole collection for you: which films you've seen, how many are left, and where to pick up next.",
  faqs: [
    {
      q: "What order should I watch the Mission: Impossible movies in?",
      a: "Release order, starting with Mission: Impossible (1996) and ending with Mission: Impossible – The Final Reckoning (2025). The story happens in the same order the films came out.",
    },
    {
      q: "How many Mission: Impossible movies are there?",
      a: "Eight: Mission: Impossible, Mission: Impossible 2, Mission: Impossible III, Ghost Protocol, Rogue Nation, Fallout, Dead Reckoning Part One and The Final Reckoning.",
    },
    {
      q: "Do I need to watch Dead Reckoning before The Final Reckoning?",
      a: "Yes. The Final Reckoning continues directly from Dead Reckoning Part One. They're one story split into two films.",
    },
    {
      q: "Can I skip Mission: Impossible 2?",
      a: "Yes. It's a standalone story and nothing in the later films depends on it.",
    },
  ],
  related: ["john-wick-movies-in-order", "x-men-movies-in-order"],
};
