import { ExternalLink } from "../components/ExternalLink";
import type { Guide } from "./types";

// Facts come from the app's IMDb importer (show-seek: ImdbImportScreen, `imdbImport.*` strings) and IMDb's help
// center ("Your Ratings" page > Export creates a .csv). The copy is written for search.

const fileTypes = [
  { name: "Ratings", what: "Your movie and TV ratings, including the episodes ShowSeek can match." },
  { name: "Watchlist", what: "Everything on your IMDb watchlist, added to your ShowSeek watchlist." },
  { name: "Lists", what: "Any list of titles you made on IMDb, imported as a custom list named after the file." },
  { name: "Check-ins", what: "What you checked in to on IMDb, imported as watch history and episode progress." },
];

export const imdbImport: Guide = {
  slug: "imdb-import",
  brand: "imdb",
  label: "IMDb import",
  summary: "Export your IMDb ratings, watchlist and lists as CSV files and import them into ShowSeek.",
  title: "Import IMDb Ratings and Watchlist into ShowSeek",
  description:
    "Export your IMDb ratings, watchlist, lists and check-ins as CSV files and import them into ShowSeek on Android. Titles are matched by IMDb ID, not guessed.",
  h1: "Bring your IMDb ratings and watchlist to ShowSeek.",
  intro:
    "Years of IMDb ratings are worth keeping. IMDb lets you export your ratings, watchlist and lists as CSV files, and ShowSeek imports them directly, so your scores, your watchlist and the lists you've curated come with you. Every title is matched by its IMDb ID rather than by name, so remakes and shows with the same title end up in the right place.",
  updated: "2026-11-11",
  stepsHeading: "How to import IMDb data into ShowSeek in 5 steps",
  steps: [
    {
      title: "Export your ratings from IMDb",
      body: "On imdb.com, open **Your Ratings** from your profile menu and select **Export**. IMDb creates a CSV file of every title you've rated.",
    },
    {
      title: "Export your watchlist and lists too",
      body: "Open your **Watchlist**, each list you want to keep and your check-ins, and use **Export** on each one. Every export is its own CSV file.",
    },
    {
      title: "Get the CSV files onto your phone",
      body: "Download them, then move them to your phone through Google Drive or email and save them to its storage.",
    },
    {
      title: "Select the files in ShowSeek",
      body: "Sign in to ShowSeek, go to the **Settings** tab, switch to **Integrations** and tap **Import from IMDb**. Tap **Select CSV Files** and choose all of them at once.",
    },
    {
      title: "Check the summary and import",
      body: "ShowSeek shows which files it recognized and how many rows each has. Tap **Start Import**, then review what was imported and what was skipped.",
    },
  ],
  sections: [
    {
      id: "export",
      heading: "How to export your ratings and watchlist from IMDb",
      body: (
        <>
          <p>
            Exports are made on the IMDb website, so use a browser at{" "}
            <ExternalLink href="https://www.imdb.com">imdb.com</ExternalLink> while signed in. A computer is easiest.
          </p>
          <ul>
            <li>
              <strong>Ratings:</strong> open your profile menu, choose <strong>Your Ratings</strong>, then select the{" "}
              <strong>Export</strong> option at the top right.
            </li>
            <li>
              <strong>Watchlist and lists:</strong> open the watchlist or list and use the same <strong>Export</strong>{" "}
              option. Repeat for each list you want to bring over.
            </li>
          </ul>
          <p>
            IMDb prepares each export as a CSV file. If it doesn't download straight away, look for it on IMDb's
            exports page in your account, where finished exports are listed for download. Keep the file names IMDb
            gives them: ShowSeek uses the name to tell your watchlist and check-ins apart from your other lists, and to
            name each imported list.
          </p>
        </>
      ),
    },
    {
      id: "supported-files",
      heading: "Which IMDb files you can import",
      body: (
        <>
          <dl className="grid gap-3 sm:grid-cols-2">
            {fileTypes.map((f) => (
              <div key={f.name} className="rounded-2xl border border-line bg-surface p-5">
                <dt className="font-semibold text-fg">{f.name}</dt>
                <dd className="mt-1.5 text-muted">{f.what}</dd>
              </div>
            ))}
          </dl>
          <p>
            You can select any mix of these in one go. Files ShowSeek doesn't recognize are listed separately before
            you start, so you know exactly what will be imported.
          </p>
        </>
      ),
    },
    {
      id: "how-it-merges",
      heading: "How your IMDb data merges into ShowSeek",
      body: (
        <>
          <ul>
            <li>
              <strong>Matched by IMDb ID.</strong> Each row is looked up by its IMDb ID, not by its title, so there's no
              guessing between titles with the same name.
            </li>
            <li>
              <strong>Newer ratings win.</strong> An IMDb rating only replaces a rating you already have in ShowSeek if
              the IMDb one is newer.
            </li>
            <li>
              <strong>Lists are reused.</strong> If you already have a matching custom list, titles are added to it
              instead of creating a duplicate.
            </li>
            <li>
              <strong>Nothing is wiped.</strong> The import merges into your library. Your notes and anything else that
              only exists in ShowSeek stay untouched.
            </li>
          </ul>
          <p>
            Because newer ratings win, you can export from IMDb again later and run the import a second time to catch
            up on anything you've rated since.
          </p>
        </>
      ),
    },
    {
      id: "skipped",
      heading: "What isn't imported from IMDb",
      body: (
        <>
          <p>
            Some things in IMDb exports have no place in a watch tracker. ShowSeek skips them and counts them in the
            summary, so nothing disappears silently:
          </p>
          <ul>
            <li>People, images and videos saved in your lists.</li>
            <li>Notes you added to list items.</li>
            <li>Individual episodes saved in your watchlist or lists.</li>
            <li>Rows whose IMDb ID can't be matched to a movie or show.</li>
          </ul>
          <p>
            If ShowSeek reports there's nothing to import, check that you picked a ratings, watchlist, list or
            check-ins export and not a different IMDb file.
          </p>
        </>
      ),
    },
  ],
  faqs: [
    {
      q: "How do I export my IMDb ratings?",
      a: "On imdb.com, open Your Ratings from your profile menu and select Export at the top right. IMDb creates a CSV file of all your ratings that you can import into ShowSeek.",
    },
    {
      q: "Can I import my IMDb watchlist into ShowSeek?",
      a: "Yes. Export your watchlist from IMDb as a CSV file and import it in ShowSeek. Its titles are added to your ShowSeek watchlist.",
    },
    {
      q: "Does ShowSeek import IMDb ratings for TV episodes?",
      a: "Yes, for episodes ShowSeek can match. Movie and show ratings are imported too.",
    },
    {
      q: "Will importing replace the ratings I already have in ShowSeek?",
      a: "Only when the IMDb rating is newer. Otherwise your ShowSeek rating stays as it is.",
    },
    {
      q: "Does ShowSeek sync with IMDb automatically?",
      a: "No. It's an import from IMDb's CSV exports. To bring in newer ratings later, export from IMDb again and import the new files.",
    },
  ],
  related: ["trakt-sync", "simkl-import"],
};
