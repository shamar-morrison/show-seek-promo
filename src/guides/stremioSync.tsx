import { Link } from "react-router-dom";
import { ExternalLink } from "../components/ExternalLink";
import { guidePath, type Guide } from "./types";

// Facts come from the app's Stremio screens (show-seek: StremioSettingsScreen, StremioHowItWorksScreen, `stremio.*`
// strings) and functions/src/stremio. The copy is written for search, not lifted from the app.

const stremioWeb = <ExternalLink href="https://web.stremio.com">web.stremio.com</ExternalLink>;

export const stremioSync: Guide = {
  slug: "stremio-sync",
  brand: "stremio",
  label: "Stremio sync",
  summary: "Track Stremio automatically: movies, shows and anime you finish are marked as watched in ShowSeek.",
  title: "Sync Stremio Watch History with the ShowSeek Add-on",
  description:
    "Track what you watch in Stremio automatically. The ShowSeek add-on marks movies, episodes and anime as watched, no Trakt account needed. Set up in 2 minutes.",
  h1: "Sync your Stremio watch history to ShowSeek.",
  intro:
    "Stremio is where you watch. ShowSeek is where you keep track. The ShowSeek add-on connects the two, so every movie and episode you finish in Stremio is marked as watched in ShowSeek on its own, anime included. No logging episodes twice, and no Trakt account in the middle.",
  updated: "2026-11-11",
  stepsHeading: "How to connect Stremio to ShowSeek in 5 steps",
  steps: [
    {
      title: "Create your add-on link in ShowSeek",
      body: "On your phone, go to the **Settings** tab, switch to **Integrations** and tap **Stremio Add-on**, then tap **Create link**. The link is private to your account.",
    },
    {
      title: "Send the link to your computer",
      body: "Use **Share** to email or message it to yourself, or **Copy** it. You'll only see the link once, so send it before leaving the screen.",
    },
    {
      title: "Open the add-ons page in Stremio",
      body: "On your computer, open the Stremio desktop app or web.stremio.com and click the puzzle-piece **Addons** icon.",
    },
    {
      title: "Install the ShowSeek add-on",
      body: "Click **Add addon**, paste the link and click **Install**.",
    },
    {
      title: "Watch something",
      body: "Finish a movie or episode in Stremio and it appears as watched in ShowSeek. There's nothing else to set up.",
    },
  ],
  sections: [
    {
      id: "requirements",
      heading: "What you need",
      body: (
        <ul>
          <li>ShowSeek on an Android phone, signed in to your account.</li>
          <li>
            Stremio on a computer: the desktop app or {stremioWeb} in your browser. The Stremio phone apps can't send
            your watches yet (more on that below).
          </li>
        </ul>
      ),
    },
    {
      id: "how-it-works",
      heading: "How Stremio sync works",
      body: (
        <>
          <p>
            Once the add-on is installed, Stremio lets ShowSeek know whenever you play something. When you finish it,
            ShowSeek marks it as watched, the same as if you'd tapped it yourself. Your episode progress moves on and
            your auto-add and auto-remove list settings apply as usual.
          </p>
          <p>
            <strong>What counts as finished?</strong> Either the video plays to the end, or you close it after watching
            at least 80%. Skipping the end credits is fine: it still counts.
          </p>
          <p>
            <strong>What Stremio shares.</strong> Only the title you played and how far you got. Nothing about your
            Stremio account, add-ons or streams.
          </p>
        </>
      ),
    },
    {
      id: "anime",
      heading: "Does Stremio sync work with anime?",
      body: (
        <p>
          Yes. Anime you play from Stremio's built-in catalogs or from the Anime Kitsu catalog is tracked like any
          other show. Anime numbering doesn't always line up between catalogs, so an episode that can't be matched with
          confidence is skipped instead of being marked on the wrong show.
        </p>
      ),
    },
    {
      id: "devices",
      heading: "Does it work on the Stremio Android or iPhone app?",
      body: (
        <p>
          Not yet. Add-on sync currently works with the Stremio desktop app and {stremioWeb}. Anything you watch in
          the Stremio phone apps isn't sent to ShowSeek, so you can mark those as watched in ShowSeek yourself. Your
          phone is only needed once, to create the link.
        </p>
      ),
    },
    {
      id: "vs-trakt",
      heading: "Stremio sync without Trakt",
      body: (
        <>
          <p>
            A lot of Stremio users connect Trakt just to keep a watch history. With ShowSeek you can skip that: the
            add-on sends your watches straight to your ShowSeek library, and you don't need a Trakt account at all.
          </p>
          <p>
            Already have years of history on Trakt?{" "}
            <Link to={guidePath("trakt-sync")}>Connect your Trakt account in ShowSeek</Link> to bring it in, and use
            the add-on for everything you watch from now on.
            Coming from TV Time instead? See the <Link to={guidePath("tv-time-import")}>TV Time import guide</Link>.
          </p>
        </>
      ),
    },
    {
      id: "manage",
      heading: "Keep your link private, or replace it",
      body: (
        <>
          <p>
            Your add-on link is tied to your ShowSeek account and acts like a password: anyone with it could mark
            titles as watched for you. Don't post it or share it.
          </p>
          <p>
            Lost the link, or think someone else has it? Tap <strong>Create new link</strong> in ShowSeek and install
            the add-on again with the new one. The old link stops working immediately.
          </p>
          <p>
            To turn sync off, tap <strong>Disconnect</strong> in ShowSeek or remove the ShowSeek add-on from Stremio.
          </p>
        </>
      ),
    },
    {
      id: "troubleshooting",
      heading: "Stremio watches not showing up in ShowSeek?",
      body: (
        <ul>
          <li>
            <strong>You stopped early.</strong> Close the video only after you've watched at least 80% of it.
          </li>
          <li>
            <strong>You watched on your phone.</strong> Only the Stremio desktop app and web.stremio.com send
            watches for now.
          </li>
          <li>
            <strong>You made a new link.</strong> Reinstall the add-on in Stremio with the new link. The old one no
            longer works.
          </li>
          <li>
            <strong>The title couldn't be matched.</strong> Rarely, a title can't be identified reliably and is skipped.
            Mark it as watched in ShowSeek by hand.
          </li>
        </ul>
      ),
    },
  ],
  faqs: [
    {
      q: "How do I track what I watch on Stremio?",
      a: "Install the ShowSeek add-on in Stremio. Every movie and episode you finish in the Stremio desktop app or web.stremio.com is then marked as watched in ShowSeek automatically.",
    },
    {
      q: "Do I need Trakt to sync Stremio with ShowSeek?",
      a: "No. The ShowSeek add-on sends your watches straight to ShowSeek. You don't need a Trakt account.",
    },
    {
      q: "Does ShowSeek sync with the Stremio app on Android or iPhone?",
      a: "Not yet. Sync works with the Stremio desktop app and web.stremio.com. Your phone is only needed to create the add-on link.",
    },
    {
      q: "When does Stremio mark an episode as watched in ShowSeek?",
      a: "When the video plays to the end, or when you close it after watching at least 80%. Skipping the end credits still counts.",
    },
    {
      q: "Can I sync anime from Stremio?",
      a: "Yes. Anime from Stremio's catalogs and the Anime Kitsu catalog is tracked. Episodes that can't be matched reliably are skipped rather than marked on the wrong show.",
    },
    {
      q: "How do I stop syncing Stremio with ShowSeek?",
      a: "Tap Disconnect on the Stremio Add-on screen in ShowSeek, or remove the ShowSeek add-on from Stremio. The link stops working right away.",
    },
  ],
  related: ["trakt-sync", "tv-time-import"],
};
