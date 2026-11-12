import type { WatchOrder } from "../types";

export const dragonBall: WatchOrder = {
  slug: "dragon-ball-watch-order",
  name: "Dragon Ball",
  category: "anime",
  title: "Dragon Ball Watch Order: Z, Kai, Daima, Super and Movies",
  description:
    "The Dragon Ball watch order: Dragon Ball, Z (or Kai), Daima, Super and the Super movies, plus where Battle of Gods and GT fit in.",
  h1: "Dragon Ball watch order.",
  intro:
    "Dragon Ball has been running since 1986, across five TV series and a stack of films. The core story is a straight line from a young Goku's first adventure to the fights of Dragon Ball Super. The questions are around the edges: Z or Kai, where the 2024 series Daima goes, whether you need the movies, and what to do with GT.",
  updated: "2026-11-11",
  heroRef: "tv/12971",
  startHere:
    "Start with the original Dragon Ball (1986), then Dragon Ball Z, then Dragon Ball Daima, then Dragon Ball Super, then the two Super films, Broly and Super Hero. Short on time? Swap Z for the shorter Dragon Ball Z Kai.",
  lists: [
    {
      id: "recommended-order",
      heading: "Dragon Ball watch order",
      intro: "The main story, in story order.",
      entries: [
        { ref: "tv/12609", tag: "start", note: "Goku's childhood and his first search for the Dragon Balls." },
        { ref: "tv/12971", tag: "essential", note: "Goku as an adult, from the Saiyans to the Majin Buu saga." },
        {
          ref: "tv/61709",
          tag: "optional",
          alternative: true,
          note: "A faster re-edit of Z with most filler removed. Watch it instead of Z, not as well as it.",
        },
        {
          ref: "tv/236994",
          tag: "essential",
          note: "Set shortly after the Majin Buu saga. Released in 2024, but it slots in before Super.",
        },
        {
          ref: "tv/62715",
          tag: "essential",
          note: "Its first two arcs retell the films Battle of Gods and Resurrection 'F'.",
        },
        { ref: "movie/503314", tag: "essential", note: "Continues straight on from the end of Super." },
        { ref: "movie/610150", tag: "essential" },
      ],
    },
    {
      id: "optional",
      heading: "Optional Dragon Ball movies and series",
      entries: [
        {
          ref: "movie/126963",
          tag: "optional",
          note: "The film version of Super's first arc. Watch it or the episodes, not both.",
        },
        {
          ref: "movie/303857",
          tag: "optional",
          note: "The film version of Super's second arc, Frieza's return.",
        },
        {
          ref: "tv/12697",
          tag: "skippable",
          note: "An alternate continuation after Z that isn't part of the current story. Watch it for fun.",
        },
      ],
    },
  ],
  sections: [
    {
      id: "z-or-kai",
      heading: "Dragon Ball Z or Dragon Ball Z Kai?",
      body: (
        <p>
          Dragon Ball Z Kai is a remastered re-edit of Z that cuts most of the filler, so it tells the same story in
          far fewer episodes. If you want the classic experience, original music and all, watch Z. If you want to get
          to Super faster, Kai is the better choice. Either way, skip the other one.
        </p>
      ),
    },
    {
      id: "super-movies",
      heading: "Battle of Gods and Resurrection 'F' or Super episodes?",
      body: (
        <p>
          Dragon Ball Super's first two arcs tell the same stories as the films Battle of Gods and Resurrection 'F', at
          greater length. Watch the films for the quicker version, or the episodes for the extra detail. If you watch
          the films, you can start Super at the Universe 6 arc.
        </p>
      ),
    },
    {
      id: "gt",
      heading: "Is Dragon Ball GT canon?",
      body: (
        <p>
          GT is an anime-original sequel to Z from 1996. Dragon Ball Super later continued the story in a different
          direction, so GT now sits on its own branch. It's fine to watch after Z if you're curious, but nothing in
          Daima or Super depends on it.
        </p>
      ),
    },
  ],
  cta: "Add the Dragon Ball series to ShowSeek and it keeps your place through hundreds of episodes, across every series and film.",
  faqs: [
    {
      q: "What order should I watch Dragon Ball in?",
      a: "Dragon Ball, Dragon Ball Z (or Z Kai), Dragon Ball Daima, Dragon Ball Super, then the films Dragon Ball Super: Broly and Super Hero.",
    },
    {
      q: "Where does Dragon Ball Daima fit?",
      a: "After Dragon Ball Z and before Dragon Ball Super. Daima is set shortly after the Majin Buu saga, even though it was released in 2024.",
    },
    {
      q: "Should I watch Dragon Ball Z or Kai?",
      a: "Either. Kai is a re-edit of Z with most of the filler removed, so it's faster. Watch one, not both.",
    },
    {
      q: "Do I need to watch Dragon Ball GT?",
      a: "No. GT is an alternate continuation after Z, and Daima and Super don't depend on it.",
    },
  ],
  related: ["naruto-watch-order", "demon-slayer-watch-order"],
};
