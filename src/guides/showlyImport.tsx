import { Link } from "react-router-dom";
import { guidePath, type Guide } from "./types";

// Facts come from the app's Showly importer (show-seek: ShowlyImportScreen, `showlyImport.*` strings,
// docs/showly-import-plan.md). The copy is written for search, not lifted from the app.

const statuses = [
  ["My Shows, still airing or not finished", "Currently Watching"],
  ["My Shows, ended and fully watched", "Already Watched"],
  ["Watchlist", "Should Watch"],
  ["Hidden shows", "Dropped"],
];

export const showlyImport: Guide = {
  slug: "showly-import",
  brand: "showly",
  label: "Showly import",
  summary: "Export a Showly backup and bring your shows, episodes, movies, ratings and custom lists into ShowSeek.",
  title: "Showly Backup Import: Move Your Showly Library to ShowSeek",
  description:
    "Moving from Showly? Export your Showly backup and import your watched episodes, movies, ratings and custom lists into ShowSeek on Android, step by step.",
  h1: "Move your Showly library to ShowSeek.",
  intro:
    "Showly can save your whole library to a single backup file, and ShowSeek reads that file directly. Your followed shows, every episode and movie you've watched, your ratings, your watchlist and your custom lists come across in one go, so switching from Showly doesn't mean rebuilding your history by hand. You don't need a Trakt account for any of it.",
  updated: "2026-11-12",
  stepsHeading: "How to import Showly into ShowSeek in 5 steps",
  steps: [
    {
      title: "Export your Showly backup",
      body: "In Showly, open **Settings**, then **Backup & Restore**, and tap **Export data**. Save the file it creates, named showly_export_ followed by the date and time.",
    },
    {
      title: "Get the file onto the phone with ShowSeek",
      body: "If ShowSeek is on the same phone, you're done. If not, share the backup to Google Drive or email and save it to the other phone's storage.",
    },
    {
      title: "Open the Showly importer",
      body: "Sign in to ShowSeek, go to the **Settings** tab, switch to **Integrations** and tap **Import from Showly**.",
    },
    {
      title: "Choose the backup and start",
      body: "Tap **Choose file** and pick your showly_export .json file. ShowSeek shows how many episodes, movies, ratings and lists it found. Tap **Start import** and keep the app open while it runs.",
    },
    {
      title: "Check the summary",
      body: "When it finishes, ShowSeek lists what was imported and any titles it couldn't match, so you can add those with search.",
    },
  ],
  sections: [
    {
      id: "export-backup",
      heading: "How to export your data from Showly",
      body: (
        <>
          <p>
            Showly keeps its export in the app itself, so you don't need a computer. On the Android phone that has your
            library, open <strong>Settings</strong>, choose <strong>Backup &amp; Restore</strong> and tap{" "}
            <strong>Export data</strong>. Android asks where to save it, and Showly can also share the file straight
            to Google Drive, email or another app.
          </p>
          <p>
            The backup is a single <code>.json</code> file named <code>showly_export_</code> plus the date and time
            it was made. If you renamed it or Android added <code>(1)</code> to the name, that's fine: ShowSeek
            recognises a Showly backup by what's inside, not by its name. Backups from older versions of Showly work
            too.
          </p>
          <p>
            If you set up Showly's scheduled backups, your backup folder may hold several of these files. Pick the
            newest one so you bring over your latest watches.
          </p>
        </>
      ),
    },
    {
      id: "what-transfers",
      heading: "What transfers from Showly to ShowSeek",
      body: (
        <>
          <ul>
            <li>
              <strong>Your watch history.</strong> Every watched episode and movie, with the date Showly recorded.
              Episodes Showly saved without a date get the date you last updated that show, so no progress is lost.
            </li>
            <li>
              <strong>Your ratings</strong> for shows, seasons, episodes and movies, on the same 1 to 10 scale.
            </li>
            <li>
              <strong>Your custom lists,</strong> recreated in ShowSeek with their descriptions. If you already have a
              ShowSeek list with the same name, the titles are added to it instead.
            </li>
            <li>
              <strong>Your shows and watchlist,</strong> sorted into ShowSeek's lists:
            </li>
          </ul>
          <dl className="mt-5 grid gap-3 sm:grid-cols-2">
            {statuses.map(([from, to]) => (
              <div key={from} className="rounded-2xl border border-line bg-surface p-5">
                <dt className="text-sm text-muted">On Showly</dt>
                <dd className="font-semibold text-fg">{from}</dd>
                <dt className="mt-3 text-sm text-muted">In ShowSeek</dt>
                <dd className="font-semibold text-fg">{to}</dd>
              </div>
            ))}
          </dl>
          <p>
            Showly's My Shows mixes shows you're halfway through with ones you finished years ago, so ShowSeek checks
            each one. A show that has ended, and that you've watched every episode of, goes to Already Watched.
            Everything else, including shows you put on hold, goes to Currently Watching.
          </p>
          <p>
            Not imported: hidden movies, pinned titles, and repeat watches of the same episode (ShowSeek keeps the
            latest). Anything already in your ShowSeek library stays as it is, and the backup is read on your phone:
            only your shows, movies, history, ratings and lists are sent to ShowSeek.
          </p>
        </>
      ),
    },
    {
      id: "trakt",
      heading: "Showly backup or Trakt sync: which should you use?",
      body: (
        <>
          <p>
            Showly is a Trakt client, so if your Showly library has always synced with Trakt, you can{" "}
            <Link to={guidePath("trakt-sync")}>connect Trakt to ShowSeek</Link> instead and keep both in step.
          </p>
          <p>
            The backup is the better choice if you used Showly without Trakt, or if you only want to move once. It also
            carries things that never reach Trakt, such as the shows you hid and lists you only kept in Showly. You
            can do both: anything already in ShowSeek is left as it is, so nothing is doubled.
          </p>
        </>
      ),
    },
    {
      id: "errors",
      heading: "Fixing common Showly import errors",
      body: (
        <ul>
          <li>
            <strong>"This doesn't look like a Showly backup."</strong> Make sure you chose the file from{" "}
            <strong>Export data</strong> in Showly's Backup &amp; Restore settings. If you picked a TV Time, Trakt or
            Simkl export by mistake, ShowSeek tells you and points you to the right importer.
          </li>
          <li>
            <strong>"This is a ZIP file."</strong> If you zipped the backup to send it, unzip it and choose the{" "}
            <code>showly_export</code> .json file itself.
          </li>
          <li>
            <strong>The file won't open.</strong> It's probably still in Google Drive or another cloud app. Save it to
            your phone, then choose it again.
          </li>
          <li>
            <strong>The file is too large.</strong> Showly backups up to 50 MB can be imported, which covers even very
            large libraries.
          </li>
          <li>
            <strong>Some episodes weren't added.</strong> Showly numbers episodes the way Trakt does, and a few shows,
            often anime and specials, are numbered differently in ShowSeek. ShowSeek only marks episodes it can place
            exactly and lists the rest, show by show, so you can mark them yourself.
          </li>
          <li>
            <strong>The import stopped partway.</strong> Your progress is saved. Start it again and it continues from
            where it stopped. <strong>Retry failed items</strong> resends only the batches that didn't finish.
          </li>
        </ul>
      ),
    },
    {
      id: "why-showseek",
      heading: "ShowSeek as a Showly alternative on Android",
      body: (
        <p>
          ShowSeek is built for the same kind of tracking Showly does well, following shows episode by episode, and
          adds to it: <strong>release reminders</strong> on air day or the day before, and{" "}
          <strong>watch lists</strong> you can shuffle when you can't decide what to watch. If you also watch on
          Stremio, ShowSeek can <Link to={guidePath("stremio-sync")}>mark those watches automatically</Link> without
          going through Trakt.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "How do I export my data from Showly?",
      a: "In Showly, open Settings, then Backup & Restore, and tap Export data. Save the showly_export .json file it creates. That file is what ShowSeek imports.",
    },
    {
      q: "Do I need a Trakt account to import from Showly?",
      a: "No. ShowSeek reads the Showly backup file itself, so it works for libraries that were never synced with Trakt. Showly doesn't need to be signed in to Trakt either.",
    },
    {
      q: "Are my Showly custom lists and ratings imported?",
      a: "Yes. Custom lists are recreated with their descriptions, and show, season, episode and movie ratings come across on the same 1 to 10 scale.",
    },
    {
      q: "Will importing from Showly overwrite what I already track in ShowSeek?",
      a: "No. Episodes, movies, ratings and lists already in ShowSeek are left alone. The import only adds what's missing.",
    },
    {
      q: "Where do my Showly shows go in ShowSeek?",
      a: "Shows from My Shows go to Currently Watching, or to Already Watched if the show has ended and you've seen every episode. Your watchlist goes to Should Watch and hidden shows go to Dropped.",
    },
  ],
  related: ["trakt-sync", "simkl-import"],
};
