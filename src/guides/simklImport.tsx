import { ExternalLink } from "../components/ExternalLink";
import type { Guide } from "./types";

// Facts come from the app's Simkl importer (show-seek: SimklImportScreen, `simklImport.*` strings).
// The copy is written for search, not lifted from the app.

const statuses = [
  ["Plan to Watch", "Should Watch"],
  ["Watching and On Hold", "Currently Watching"],
  ["Dropped", "Dropped"],
  ["Completed", "Already Watched, or Currently Watching if new episodes are still coming"],
];

export const simklImport: Guide = {
  slug: "simkl-import",
  brand: "simkl",
  label: "Simkl import",
  summary: "Download your Simkl backup and bring your shows, anime, movies, ratings and watchlist into ShowSeek.",
  title: "Simkl Backup Import: Move Your Simkl History to ShowSeek",
  description:
    "Moving from Simkl? Download your Simkl backup and import your watch history, anime, ratings and watchlist into ShowSeek on Android, step by step.",
  h1: "Move your Simkl history to ShowSeek.",
  intro:
    "Switching from Simkl doesn't mean marking hundreds of episodes as watched all over again. Simkl lets you download a backup of your whole library, and ShowSeek imports it directly: TV shows, anime and movies, with the dates you watched them, your ratings and your watchlist. It takes a few minutes, and your Simkl statuses land in the matching ShowSeek lists.",
  updated: "2026-11-12",
  stepsHeading: "How to import Simkl into ShowSeek in 5 steps",
  steps: [
    {
      title: "Download your Simkl backup",
      body: "In a web browser, sign in at simkl.com, open **Apps** in the top menu, then the **Export** tab. Under the .zip archive with .json file option, choose **Download backup**.",
    },
    {
      title: "Move SimklBackup.zip to your phone",
      body: "Send it through Google Drive or email, then save it to your phone's storage.",
    },
    {
      title: "Open the Simkl importer",
      body: "Sign in to ShowSeek, go to the **Settings** tab, switch to **Integrations** and tap **Import from Simkl**.",
    },
    {
      title: "Choose the backup and start",
      body: "Tap **Choose file** and pick SimklBackup.zip. ShowSeek counts the shows, anime, episodes and movies it found. Tap **Start import** and keep the app open while it runs.",
    },
    {
      title: "Check the summary",
      body: "When it finishes, ShowSeek lists what was imported and anything it couldn't match, so you can add those few titles with search.",
    },
  ],
  sections: [
    {
      id: "download-backup",
      heading: "How to download your Simkl backup",
      body: (
        <>
          <p>
            Simkl only offers backups on its website, not in its mobile apps, so this part is easiest on a computer.
            Sign in at <ExternalLink href="https://simkl.com">simkl.com</ExternalLink>, choose <strong>Apps</strong>{" "}
            in the top menu and open the <strong>Export</strong> tab.
          </p>
          <p>
            You'll see more than one backup format. Pick the <strong>.zip archive with .json file</strong> and click{" "}
            <strong>Download backup</strong>. That gives you <code>SimklBackup.zip</code>, which is the file ShowSeek
            reads. You can also choose the <code>SimklBackup.json</code> from inside it. The .csv backup isn't
            supported.
          </p>
          <p>
            Simkl limits how often free accounts can make a backup (once every 30 days at the time of writing), so
            keep the file somewhere safe once you have it.
          </p>
        </>
      ),
    },
    {
      id: "what-transfers",
      heading: "What transfers from Simkl to ShowSeek",
      body: (
        <>
          <ul>
            <li>
              <strong>Your watch history.</strong> Every watched episode and movie with the date you watched it.
              Episodes you marked as "I don't remember" get the last date you watched that show.
            </li>
            <li>
              <strong>Your ratings</strong> for shows, anime and movies, on the same 1 to 10 scale.
            </li>
            <li>
              <strong>Your watchlist and statuses,</strong> sorted into ShowSeek's lists:
            </li>
          </ul>
          <dl className="mt-5 grid gap-3 sm:grid-cols-2">
            {statuses.map(([from, to]) => (
              <div key={from} className="rounded-2xl border border-line bg-surface p-5">
                <dt className="text-sm text-muted">On Simkl</dt>
                <dd className="font-semibold text-fg">{from}</dd>
                <dt className="mt-3 text-sm text-muted">In ShowSeek</dt>
                <dd className="font-semibold text-fg">{to}</dd>
              </div>
            ))}
          </dl>
          <p>
            Some finished shows in a Simkl backup have no episode-by-episode list. For those, ShowSeek marks every
            aired episode as watched on the date you finished the show, and tells you how many shows that applies to
            before you start.
          </p>
          <p>
            Not imported: episode ratings, dropped movies, and repeat watches of the same episode (ShowSeek keeps the
            latest). Anything already in your ShowSeek library stays as it is, and your Simkl login is never sent to
            ShowSeek: the backup is read on your phone.
          </p>
        </>
      ),
    },
    {
      id: "anime",
      heading: "Importing anime from Simkl",
      body: (
        <>
          <p>
            Simkl is popular with anime fans, and anime comes across with the rest of your library. One thing to know:
            Simkl often splits a long-running anime into separate seasons that number their episodes differently from
            ShowSeek. ShowSeek only marks those episodes when it can place them exactly, so nothing ends up on the wrong
            episode. Any it couldn't place are listed at the end, show by show, for you to mark yourself.
          </p>
          <p>Anime OVAs, ONAs and specials aren't imported.</p>
        </>
      ),
    },
    {
      id: "errors",
      heading: "Fixing common Simkl import errors",
      body: (
        <ul>
          <li>
            <strong>"This is Simkl's .csv backup."</strong> Go back to Simkl's Export tab and download the .zip
            archive with .json file instead.
          </li>
          <li>
            <strong>The file won't open.</strong> It's probably still in Google Drive or another cloud app. Save it to
            your phone, then choose it again.
          </li>
          <li>
            <strong>"This doesn't look like a Simkl backup."</strong> Make sure you picked SimklBackup.zip. If you
            picked a TV Time or Trakt export by mistake, ShowSeek tells you and points you to the right importer.
          </li>
          <li>
            <strong>The file is too large.</strong> Simkl backups up to 50 MB can be imported.
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
      heading: "ShowSeek as a Simkl alternative on Android",
      body: (
        <p>
          ShowSeek keeps the part of Simkl you rely on, a complete watch history, and builds your day-to-day around it:
          the next episode for every show you follow, <strong>release reminders</strong> on air day or the day before,
          and <strong>watch lists</strong> you can shuffle when you can't decide what to watch.
        </p>
      ),
    },
  ],
  faqs: [
    {
      q: "How do I export my data from Simkl?",
      a: "Sign in at simkl.com in a web browser, open Apps in the top menu, then the Export tab, and download the .zip archive with .json file. That file, SimklBackup.zip, is what ShowSeek imports.",
    },
    {
      q: "Does the Simkl import include anime?",
      a: "Yes. Anime, TV shows and movies all come across. Anime episodes that Simkl numbers differently are only added when ShowSeek can place them exactly, and the rest are listed so you can mark them yourself.",
    },
    {
      q: "Why won't ShowSeek accept my Simkl CSV file?",
      a: "ShowSeek reads Simkl's .zip archive with .json file, not the .csv backup. Download the .zip backup from Simkl's Export tab instead.",
    },
    {
      q: "Will importing from Simkl overwrite what I already track in ShowSeek?",
      a: "No. Episodes, movies and ratings already in ShowSeek are left alone. The import only adds what's missing.",
    },
    {
      q: "Where do my Simkl statuses go in ShowSeek?",
      a: "Plan to Watch goes to Should Watch, Watching and On Hold go to Currently Watching, and Dropped goes to Dropped. Completed shows go to Already Watched, or Currently Watching if new episodes are still coming.",
    },
  ],
  related: ["tv-time-import", "showly-import"],
};
