import { Link } from "react-router-dom";
import { ExternalLink } from "../components/ExternalLink";
import { guidePath, type Guide } from "./types";

// Facts come from the app's Trakt screens (show-seek: TraktSettingsScreen, TraktZipImportScreen, `trakt.*` strings,
// src/context/trakt/useTraktSync.ts). Sync is one way, Trakt -> ShowSeek. The copy is written for search.

export const traktSync: Guide = {
  slug: "trakt-sync",
  brand: "trakt",
  label: "Trakt sync",
  summary: "Connect Trakt on Android and bring in your history, ratings, watchlist and lists, or import a Trakt ZIP.",
  title: "Trakt on Android: Sync Your Trakt History with ShowSeek",
  description:
    "Use your Trakt account on Android with ShowSeek. Sync watch history, ratings, watchlist and lists, or import a Trakt export ZIP without connecting.",
  h1: "Use your Trakt history in ShowSeek on Android.",
  intro:
    "Trakt keeps a record of everything you've watched. ShowSeek turns that record into something you use every day on your Android phone: what's next in every series, reminders when new episodes air, and lists for what to watch tonight. Connect your Trakt account once and ShowSeek brings in your history, ratings, watchlist, favorites and lists, then keeps them up to date. Rather not connect your account? Import a Trakt export ZIP instead.",
  updated: "2026-11-11",
  stepsHeading: "How to connect Trakt to ShowSeek in 5 steps",
  steps: [
    {
      title: "Open the Trakt settings in ShowSeek",
      body: "Sign in to ShowSeek, go to the **Settings** tab, switch to **Integrations** and tap **Trakt Integration**.",
    },
    {
      title: "Connect your Trakt account",
      body: "Tap **Connect Trakt**, then sign in to Trakt and approve ShowSeek's access to your account.",
    },
    {
      title: "Run your first sync",
      body: "Tap **Mirror Trakt Data**. ShowSeek copies your Trakt library across, which usually takes under a minute.",
    },
    {
      title: "Enrich your history (optional)",
      body: "Tap **Enrich Now** to match your Trakt history with TMDB for richer details on every title. You can do this any time after syncing.",
    },
    {
      title: "Let it keep itself up to date",
      body: "From now on, ShowSeek syncs with Trakt automatically when you open the app. Tap **Mirror Now** whenever you want an update straight away.",
    },
  ],
  sections: [
    {
      id: "what-syncs",
      heading: "What syncs from Trakt to ShowSeek",
      body: (
        <>
          <ul>
            <li>
              <strong>Watched movies and shows,</strong> from your full Trakt history.
            </li>
            <li>
              <strong>Episode progress,</strong> so every show opens on the next episode you haven't seen.
            </li>
            <li>
              <strong>Ratings</strong> for your movies and shows.
            </li>
            <li>
              <strong>Watchlist and favorites.</strong>
            </li>
            <li>
              <strong>Your Trakt lists,</strong> including the ones you made yourself.
            </li>
          </ul>
          <p>
            Sync runs one way, from Trakt into ShowSeek. While you're connected, Trakt is the source of truth for your
            watched history, ratings and Trakt lists: if you change one of those in ShowSeek, the next sync may put it
            back the way Trakt has it. Make those changes on Trakt and they'll show up in ShowSeek on the next sync.
          </p>
        </>
      ),
    },
    {
      id: "zip-import",
      heading: "Import a Trakt export ZIP instead",
      body: (
        <>
          <p>
            Don't want to connect your account, or leaving Trakt altogether? Trakt lets you download your whole library
            as a ZIP file, and ShowSeek can import it directly.
          </p>
          <ul>
            <li>
              On a computer, sign in at <ExternalLink href="https://trakt.tv">trakt.tv</ExternalLink>, open{" "}
              <strong>Settings</strong>, then <strong>Advanced</strong>, and click <strong>Export My Data</strong>.
            </li>
            <li>Move the ZIP file to your phone, for example through Google Drive or email.</li>
            <li>
              In ShowSeek, open <strong>Trakt Integration</strong>, tap <strong>Import Trakt Export (.zip)</strong>,
              choose the file and tap <strong>Start Import</strong>.
            </li>
          </ul>
          <p>
            The export is the most detailed copy of your Trakt history. It brings in every individual play with its
            date, your ratings for movies, shows, seasons and episodes, your watchlist and favorites, and your custom
            lists. You can also use it on top of a connected account to fill in older history.
          </p>
        </>
      ),
    },
    {
      id: "android-app",
      heading: "A Trakt app for Android",
      body: (
        <>
          <p>
            If you're looking for an Android app that works with your Trakt account, ShowSeek is built for it. Once
            your history is in, you get a <strong>watch progress</strong> view with the next episode for every show you
            follow, <strong>release reminders</strong> on air day or the day before, and <strong>watch lists</strong>{" "}
            for what you're watching, what's next and what you've finished.
          </p>
          <p>
            Watch in Stremio too? The <Link to={guidePath("stremio-sync")}>ShowSeek Stremio add-on</Link> marks what
            you finish there as watched in ShowSeek automatically.
          </p>
        </>
      ),
    },
    {
      id: "troubleshooting",
      heading: "Fixing Trakt sync problems",
      body: (
        <ul>
          <li>
            <strong>"Trakt connection expired."</strong> Trakt sign-ins don't last forever. Tap{" "}
            <strong>Reconnect Trakt</strong> and approve ShowSeek again.
          </li>
          <li>
            <strong>"Sync temporarily limited."</strong> Trakt limits how often apps can sync. Wait until the time
            shown, then try again. If you see <strong>Retrying sync</strong> instead, ShowSeek is already retrying on
            its own.
          </li>
          <li>
            <strong>The first sync didn't finish.</strong> Tap <strong>Mirror Trakt Data</strong> again. You don't
            need to reconnect.
          </li>
          <li>
            <strong>"Trakt account locked."</strong> This comes from Trakt, not ShowSeek. Email Trakt support at
            support@trakt.tv with your Trakt username to unlock it.
          </li>
          <li>
            <strong>A change you made in ShowSeek was undone.</strong> While connected, watched history, ratings and
            Trakt lists follow Trakt. Make the change on Trakt instead.
          </li>
          <li>
            <strong>A ZIP import won't start.</strong> Wait for any running Trakt sync to finish first, and the other
            way round.
          </li>
        </ul>
      ),
    },
  ],
  faqs: [
    {
      q: "Is there a Trakt app for Android?",
      a: "ShowSeek works as a Trakt app for Android. Connect your Trakt account and it brings in your watch history, episode progress, ratings, watchlist, favorites and lists, then keeps them up to date.",
    },
    {
      q: "Does ShowSeek change anything on my Trakt account?",
      a: "No. ShowSeek only reads your Trakt data to mirror it into ShowSeek. Sync runs one way, from Trakt to ShowSeek, and you can disconnect at any time.",
    },
    {
      q: "How often does ShowSeek sync with Trakt?",
      a: "ShowSeek syncs automatically when you open the app, once enough time has passed since the last sync. You can also tap Mirror Now in Trakt Integration to sync straight away.",
    },
    {
      q: "Can I import my Trakt history without connecting my account?",
      a: "Yes. Download your data from trakt.tv under Settings, Advanced, Export My Data, then import the ZIP file in ShowSeek from Trakt Integration.",
    },
    {
      q: "What's included in a Trakt ZIP import?",
      a: "Every individual play with its date, ratings for movies, shows, seasons and episodes, your watchlist and favorites, and your custom lists.",
    },
  ],
  related: ["imdb-import", "stremio-sync"],
};
