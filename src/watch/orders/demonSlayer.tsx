import type { WatchOrder } from "../types";

export const demonSlayer: WatchOrder = {
  slug: "demon-slayer-watch-order",
  name: "Demon Slayer",
  category: "anime",
  title: "Demon Slayer Watch Order: Every Arc and Movie in Order",
  description:
    "The Demon Slayer watch order: every arc from Unwavering Resolve to Hashira Training, Mugen Train as a movie or TV arc, and where Infinity Castle fits.",
  h1: "Demon Slayer watch order.",
  intro:
    "Demon Slayer is easy to follow once you know two things. The story runs in a straight line across its arcs, and the Mugen Train arc exists twice: as a hit film and as a TV version. After the TV seasons, the story moves to the big screen with the Infinity Castle films.",
  updated: "2026-11-11",
  heroRef: "tv/85937",
  startHere:
    "Watch the Unwavering Resolve Arc (season 1), then Mugen Train (the film or the TV arc), then the Entertainment District, Swordsmith Village and Hashira Training arcs, then the Infinity Castle film.",
  lists: [
    {
      id: "release-order",
      heading: "Demon Slayer watch order",
      intro: "Release order and story order are the same.",
      entries: [
        { ref: "tv/85937/season/1", title: "Unwavering Resolve Arc", tag: "start", note: "Tanjiro becomes a demon slayer." },
        {
          ref: "movie/635302",
          title: "Demon Slayer: Mugen Train",
          tag: "essential",
          note: "Tanjiro and Flame Hashira Rengoku aboard the Mugen Train.",
        },
        {
          ref: "tv/85937/season/2",
          title: "Mugen Train Arc (TV)",
          tag: "optional",
          alternative: true,
          note: "The same story as the film, plus a new opening episode. Watch this or the film.",
        },
        { ref: "tv/85937/season/3", title: "Entertainment District Arc", tag: "essential" },
        { ref: "tv/85937/season/4", title: "Swordsmith Village Arc", tag: "essential" },
        { ref: "tv/85937/season/5", title: "Hashira Training Arc", tag: "essential" },
        {
          ref: "movie/1311031",
          title: "Demon Slayer: Infinity Castle",
          tag: "essential",
          note: "The first of three films adapting the final battle.",
        },
      ],
    },
  ],
  sections: [
    {
      id: "mugen-train",
      heading: "Mugen Train: movie or TV arc?",
      body: (
        <p>
          The Mugen Train story was first released as a film in 2020, then re-released in 2021 as a seven-episode TV
          arc. The TV version adds a brand-new first episode following Rengoku before he boards the train; the rest
          covers the same events as the film. Pick one. The film is the original; the TV arc is handy if you'd rather
          keep watching episode by episode.
        </p>
      ),
    },
    {
      id: "compilations",
      heading: "Do you need the theatrical compilation releases?",
      body: (
        <p>
          Before some seasons premiered, Demon Slayer released special screenings in cinemas, such as To the
          Swordsmith Village and To the Hashira Training. They combine the end of one arc with the first episode of
          the next. If you're watching the TV series, you can skip them.
        </p>
      ),
    },
  ],
  cta: "Add Demon Slayer to ShowSeek to track every arc, then turn on reminders so you hear when the next Infinity Castle film arrives.",
  faqs: [
    {
      q: "What order should I watch Demon Slayer in?",
      a: "Unwavering Resolve Arc, Mugen Train (film or TV arc), Entertainment District Arc, Swordsmith Village Arc, Hashira Training Arc, then the Infinity Castle film.",
    },
    {
      q: "Do I need to watch the Mugen Train movie?",
      a: "You need the Mugen Train story, but you can watch it as either the film or the seven-episode TV arc. Don't skip it: the next arc follows on from it.",
    },
    {
      q: "Where does Infinity Castle fit?",
      a: "After the Hashira Training Arc. Infinity Castle is the first of three films adapting Demon Slayer's final battle.",
    },
  ],
  related: ["jujutsu-kaisen-watch-order", "attack-on-titan-watch-order"],
};
