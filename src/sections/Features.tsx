import { useRef, useState } from "react";
import { Tabs } from "@base-ui/react/tabs";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  Bookmark02Icon,
  Notification03Icon,
  Share08Icon,
  ShuffleIcon,
  SmileIcon,
  Tv01Icon,
} from "@hugeicons/core-free-icons";
import progressShot from "../assets/watch_progress.webp";
import listsShot from "../assets/watch_lists.webp";
import shuffleShot from "../assets/shuffle.webp";
import moodShot from "../assets/mood_picker.webp";
import reminderShot from "../assets/set_reminder.webp";
import shareShot from "../assets/share_card.webp";
import { Reveal } from "../components/Reveal";
import { screenshotSrcSet } from "../screenshots";

type Feature = {
  id: string;
  icon: IconSvgElement;
  title: string;
  body: string;
  shot: string;
  /** Base name for the srcset variants in assets/responsive. */
  shotName: string;
  alt: string;
};

const features: Feature[] = [
  {
    id: "progress",
    shotName: "watch_progress",
    icon: Tv01Icon,
    title: "Watch progress",
    body: "See the next episode and how far along you are in every series.",
    shot: progressShot,
    alt: "Watch Progress screen listing shows with the next episode and a progress bar for each",
  },
  {
    id: "lists",
    shotName: "watch_lists",
    icon: Bookmark02Icon,
    title: "Watch lists",
    body: "Should Watch, Currently Watching, Already Watched, Favorites, plus custom lists you make.",
    shot: listsShot,
    alt: "Watch Lists screen with Should Watch, Currently Watching and Already Watched lists",
  },
  {
    id: "shuffle",
    shotName: "shuffle",
    icon: ShuffleIcon,
    title: "Shuffle picker",
    body: "Can't decide? Shuffle any list and let ShowSeek pick tonight's watch.",
    shot: shuffleShot,
    alt: "Shuffle dialog over the Should Watch list, landing on Mystic River",
  },
  {
    id: "mood",
    shotName: "mood_picker",
    icon: SmileIcon,
    title: "Mood picker",
    body: "Cozy, mind-bending or spooky. Find something that fits tonight.",
    shot: moodShot,
    alt: "Mood Picker screen with Cozy, Mind-Bending, Adrenaline and Heartbreaking moods",
  },
  {
    id: "reminders",
    shotName: "set_reminder",
    icon: Notification03Icon,
    title: "Release reminders",
    body: "Get notified on air day or the day before a new episode.",
    shot: reminderShot,
    alt: "Set Reminder dialog with every episode and on air day options selected",
  },
  {
    id: "share",
    shotName: "share_card",
    icon: Share08Icon,
    title: "Share cards",
    body: "Turn any title into a card for your story, in portrait, square or landscape.",
    shot: shareShot,
    alt: "Share Card editor for Avengers: Endgame with note, format and style options",
  },
];

// Desktop grid placement: 3 tabs left of the phone, 3 to the right.
const placement = [
  "lg:col-start-1 lg:row-start-1",
  "lg:col-start-1 lg:row-start-2",
  "lg:col-start-1 lg:row-start-3",
  "lg:col-start-3 lg:row-start-1",
  "lg:col-start-3 lg:row-start-2",
  "lg:col-start-3 lg:row-start-3",
];

export function Features() {
  const [active, setActive] = useState(features[0].id);
  const current = features.find((f) => f.id === active) ?? features[0];
  const listRef = useRef<HTMLDivElement>(null);

  const selectTab = (id: string) => {
    setActive(id);
    // Keep the active pill visible in the mobile scroll row (no-op on desktop, where tabs are already in view).
    // Runs from the tab change, not an effect: an effect would also fire on page load and scroll the page here.
    listRef.current?.children[features.findIndex((f) => f.id === id)]?.scrollIntoView({
      block: "nearest",
      inline: "center",
      behavior: "smooth",
    });
  };

  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-4xl font-bold tracking-tighter text-balance md:text-5xl">
          Everything you watch, organized.
        </h2>
        <p className="mx-auto mt-4 max-w-[52ch] text-lg leading-relaxed text-muted">
          One library for every series you are following and every movie on your list.
        </p>
      </Reveal>

      <Reveal>
        <Tabs.Root
          value={active}
          onValueChange={(v) => selectTab(v as string)}
          className="mt-14 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-[1fr_auto_1fr] lg:grid-rows-3 lg:items-center lg:gap-x-10 lg:gap-y-4"
        >
          <Tabs.List
            ref={listRef}
            aria-label="ShowSeek features"
            className="-mx-4 flex snap-x gap-2 overflow-x-auto px-4 [scrollbar-width:none] max-lg:order-2 sm:-mx-6 sm:px-6 lg:contents"
          >
            {features.map((f, i) => (
              <Tabs.Tab
                key={f.id}
                value={f.id}
                className={`group flex shrink-0 cursor-pointer snap-start items-center gap-3 rounded-full border border-line px-4 py-2.5 text-left text-muted transition-colors duration-300 hover:text-fg data-active:border-white/15 data-active:bg-surface data-active:text-fg lg:items-start lg:gap-4 lg:rounded-3xl lg:border-transparent lg:p-6 ${
                  i < 3 ? "lg:flex-row-reverse lg:text-right" : ""
                } ${placement[i]}`}
              >
                <span className="flex size-6 shrink-0 items-center justify-center transition-colors group-data-active:text-accent lg:size-11 lg:rounded-2xl lg:bg-white/5">
                  <HugeiconsIcon icon={f.icon} size={22} strokeWidth={1.8} />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="font-display text-base font-semibold tracking-tight whitespace-nowrap lg:text-xl">
                    {f.title}
                  </span>
                  <span className="hidden leading-relaxed text-muted lg:block">{f.body}</span>
                </span>
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {/* Phone: all screens stacked, the active one crossfades in */}
          <div className="relative mx-auto aspect-[720/1564] h-[540px] max-lg:order-1 sm:h-[620px] lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:h-[680px]">
            {features.map((f, i) => {
              const isActive = f.id === active;
              return (
                <img
                  key={f.id}
                  src={f.shot}
                  srcSet={screenshotSrcSet(f.shotName, f.shot)}
                  // The phone frame is 540 / 620 / 680px tall at the screenshot's aspect ratio.
                  sizes="(min-width: 1024px) 315px, (min-width: 640px) 290px, 250px"
                  alt={isActive ? f.alt : ""}
                  aria-hidden={!isActive}
                  width={720}
                  height={1564}
                  loading={i === 0 ? "eager" : "lazy"}
                  // Below the fold: let the hero's images download first.
                  fetchPriority="low"
                  className={`absolute inset-0 h-full w-full object-contain transition-[opacity,translate,scale] duration-500 ease-out-expo motion-reduce:transition-none ${
                    isActive ? "translate-y-0 scale-100 opacity-100" : "translate-y-3 scale-[0.96] opacity-0"
                  }`}
                />
              );
            })}
          </div>

          <p
            className="mx-auto max-w-[40ch] text-center leading-relaxed text-muted max-lg:order-3 lg:hidden"
            aria-live="polite"
          >
            {current.body}
          </p>
        </Tabs.Root>
      </Reveal>
    </section>
  );
}
