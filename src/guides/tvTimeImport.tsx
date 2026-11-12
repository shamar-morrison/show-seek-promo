import { Link } from "react-router-dom";
import { guidePath, type Guide } from "./types";

// Facts come from the app's TV Time importer (show-seek: TvTimeImportScreen, `tvtimeImport.*` strings).
// The copy is written for search, not lifted from the app: keep the facts in step when the importer changes.

const formats = [
  {
    name: "TV Time GDPR data request",
    files: "A ZIP file TV Time emailed you after you asked for a copy of your data.",
    detail:
      "The most complete export. It carries your rewatches and ratings as well as your history. Movies in it have no IDs, so ShowSeek matches them by title.",
  },
  {
    name: "TV Time Out (by Refract)",
    files: (
      <>
        CSV or JSON files named <code>tvtime-series</code>, <code>tvtime-movies</code> and so on, usually with a date
        in the name, or the ZIP they came in.
      </>
    ),
    detail: "Covers your shows, episodes, movies and lists.",
  },
  {
    name: "TV Time Liberator",
    files: (
      <>
        <code>tv-time-export.zip</code> from the Liberator browser extension or command-line tool, or the{" "}
        <code>shows.json</code> and <code>movies.json</code> files inside it.
      </>
    ),
    detail: "Covers your shows, movies, favorites and lists.",
  },
  {
    name: "TV Time Data Extractor",
    files: (
      <>
        One file, <code>tv-time-export.csv</code>.
      </>
    ),
    detail: "Its TV episode rows have no show IDs, so only the movies in this export can be imported.",
  },
];

export const tvTimeImport: Guide = {
  slug: "tv-time-import",
  brand: "tvtime",
  label: "TV Time import",
  summary: "TV Time shut down? Move your saved export into ShowSeek, from any of the four export tools.",
  title: "Import TV Time Data into ShowSeek: A TV Time Alternative",
  description:
    "TV Time shut down, but your saved export still works. Import TV Time data from a GDPR request, TV Time Out, Liberator or Data Extractor into ShowSeek.",
  h1: "Import your TV Time data into ShowSeek.",
  intro:
    "TV Time shut down in July 2026. If you saved an export before it closed, your years of watched episodes, ratings and lists aren't lost. ShowSeek imports TV Time exports directly on Android, from all four of the tools people used to save their data, so you can pick up exactly where you left off without creating a Trakt account first.",
  updated: "2026-11-12",
  stepsHeading: "How to import TV Time data in 5 steps",
  steps: [
    {
      title: "Get your TV Time export onto your phone",
      body: "Find the ZIP, CSV or JSON files you saved before the shutdown. If they're in Google Drive, Dropbox or an email attachment, download them to your phone first.",
    },
    {
      title: "Open the TV Time importer",
      body: "Sign in to ShowSeek, go to the **Settings** tab, switch to **Integrations** and tap **Import from TV Time**.",
    },
    {
      title: "Pick your export file",
      body: "Tap **Choose file** and select the ZIP, or the CSV and JSON files from it. ShowSeek works out which export tool made the file.",
    },
    {
      title: "Check the preview and start",
      body: "ShowSeek shows how many shows, episodes, movies and list items it found. If the numbers look right, tap **Start import** and leave the app open while it runs.",
    },
    {
      title: "Add anything that didn't match",
      body: "The summary at the end lists what was imported, what was skipped and any titles that couldn't be matched. Search for those and add them by hand.",
    },
  ],
  sections: [
    {
      id: "supported-exports",
      heading: "Which TV Time exports can you import?",
      body: (
        <>
          <p>
            When TV Time announced it was closing, people saved their data in a few different ways. ShowSeek reads all
            four, so it doesn't matter which one you used. If you aren't sure what you have, just pick the file: ShowSeek
            names the format it detected before anything is imported.
          </p>
          <dl className="mt-6 grid gap-3">
            {formats.map((f) => (
              <div key={f.name} className="rounded-2xl border border-line bg-surface p-5">
                <dt className="font-semibold text-fg">{f.name}</dt>
                <dd className="mt-1.5 text-muted">
                  {f.files} {f.detail}
                </dd>
              </div>
            ))}
          </dl>
          <p>
            Saved more than one? Import each export separately rather than selecting files from both at once. Each
            import only adds what's missing, so a second export won't create duplicates.
          </p>
        </>
      ),
    },
    {
      id: "what-transfers",
      heading: "What transfers from TV Time to ShowSeek",
      body: (
        <>
          <ul>
            <li>
              <strong>Your full watch history.</strong> Every episode and movie you marked as watched, each with the
              date you watched it, so your episode progress picks up exactly where it was.
            </li>
            <li>
              <strong>Show status.</strong> The shows you were watching, planning to watch or had given up on.
            </li>
            <li>
              <strong>Favorites and custom lists.</strong> Your favorite shows and movies, plus any lists you built.
            </li>
            <li>
              <strong>Show and movie ratings,</strong> when your export includes them.
            </li>
          </ul>
          <p>
            Two things don't carry over: ratings on individual episodes, and repeat watches of the same episode (ShowSeek
            keeps the most recent one).
          </p>
          <p>
            Already using ShowSeek? The import won't touch what you've tracked so far. Episodes, movies and ratings that
            are already in your library stay exactly as they are.
          </p>
          <p>
            Your export is read on your phone, and only your viewing data is sent to ShowSeek. Your TV Time login and
            account details never leave the device.
          </p>
        </>
      ),
    },
    {
      id: "find-export",
      heading: "Where to find your TV Time export after the shutdown",
      body: (
        <>
          <p>TV Time is gone, so the export you saved back then is the one you'll need. Check:</p>
          <ul>
            <li>Your inbox, for TV Time's reply to your data request. It came with a ZIP attachment or download link.</li>
            <li>
              Your phone's Downloads folder, Google Drive and any other cloud storage, for files with{" "}
              <code>tvtime</code> or <code>tv-time-export</code> in the name.
            </li>
            <li>
              The Downloads folder of any computer you used to run the Liberator extension or Data Extractor. Copy the
              file to your phone from there.
            </li>
          </ul>
          <p>
            If your history also lives somewhere else, you can bring it in from there instead: see the guides for{" "}
            <Link to={guidePath("trakt-sync")}>Trakt</Link>, <Link to={guidePath("imdb-import")}>IMDb</Link>,{" "}
            <Link to={guidePath("simkl-import")}>Simkl</Link> and <Link to={guidePath("showly-import")}>Showly</Link>.
          </p>
        </>
      ),
    },
    {
      id: "errors",
      heading: "Fixing common TV Time import errors",
      body: (
        <ul>
          <li>
            <strong>The file won't open.</strong> It's most likely still in the cloud. Download it to your phone's
            storage, then choose it again.
          </li>
          <li>
            <strong>"Only contains account details."</strong> Some exports are split into several files. You picked
            the one with your profile, not your history. Choose the full data export.
          </li>
          <li>
            <strong>"This is the TV Time summary page."</strong> TV Time Out exports include an overview page. Pick
            the CSV or JSON files next to it instead.
          </li>
          <li>
            <strong>"Files come from different export tools."</strong> You selected files from two exports at once.
            Import each export on its own.
          </li>
          <li>
            <strong>Some titles are missing.</strong> A show or movie that TV Time named differently, or that has
            more than one possible match, is skipped rather than guessed. They're listed at the end so you can add
            them with search.
          </li>
          <li>
            <strong>The import stopped partway.</strong> Nothing is lost. Start it again and it carries on from where
            it stopped. If only a few batches failed, <strong>Retry failed items</strong> resends just those.
          </li>
          <li>
            <strong>The file is too big.</strong> ShowSeek imports exports of up to 150 MB.
          </li>
        </ul>
      ),
    },
    {
      id: "why-showseek",
      heading: "Why ShowSeek works as a TV Time alternative",
      body: (
        <>
          <p>
            ShowSeek covers the TV Time habits people miss most. Your <strong>watch progress</strong> shows the next
            episode for every series you follow. <strong>Release reminders</strong> tell you on air day, or the day
            before, when a new episode drops. Your <strong>watch lists</strong> sort everything into what you're
            watching, what's next and what you've finished.
          </p>
          <p>
            It also fits how people watch now. If you stream in Stremio, the{" "}
            <Link to={guidePath("stremio-sync")}>ShowSeek Stremio add-on</Link> marks what you finish as watched
            automatically, so your history stays up to date without logging every episode by hand.
          </p>
          <p>
            Still weighing up your options? See how nine apps compare in{" "}
            <Link to="/compare/tv-time-alternatives">the best TV Time alternatives</Link>.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "Is there a TV Time alternative that can import my history?",
      a: "Yes. ShowSeek imports TV Time exports directly on Android, including GDPR data requests and files from TV Time Out, TV Time Liberator and TV Time Data Extractor.",
    },
    {
      q: "Do I need Trakt to move from TV Time to ShowSeek?",
      a: "No. ShowSeek reads your TV Time export itself, so you don't need to load it into Trakt, Simkl or any other service first.",
    },
    {
      q: "Will a TV Time import overwrite what I already track in ShowSeek?",
      a: "No. Anything already in your ShowSeek library, including watched episodes, movies and ratings, is left as it is. The import only adds what's missing.",
    },
    {
      q: "Are TV Time episode ratings and rewatches imported?",
      a: "Show and movie ratings are imported when your export includes them. Episode ratings aren't, and for episodes you watched more than once, ShowSeek keeps the most recent watch.",
    },
    {
      q: "How long does it take to import TV Time data?",
      a: "Most libraries take a few minutes. Keep ShowSeek open while it runs. If the import is interrupted, starting it again continues from where it stopped.",
    },
  ],
  related: ["simkl-import", "trakt-sync"],
};
