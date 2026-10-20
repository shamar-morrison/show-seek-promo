import { useEffect, useRef, useState } from "react";
import { Tabs } from "@base-ui/react/tabs";
import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import {
  ArrowDataTransferHorizontalIcon,
  Bookmark02Icon,
  Notification03Icon,
  PlayListAddIcon,
  SmileIcon,
  Tv01Icon,
} from "@hugeicons/core-free-icons";
import progressShot from "../assets/watch_progress.webp";
import listsShot from "../assets/watch_lists.webp";
import addShot from "../assets/add_to_list.webp";
import moodShot from "../assets/mood_picker.webp";
import reminderShot from "../assets/set_reminder.webp";
import traktShot from "../assets/connect_trakt.webp";
import { Reveal } from "../components/Reveal";

type Feature = {
  id: string;
  icon: IconSvgElement;
  title: string;
  body: string;
  shot: string;
  alt: string;
};

const features: Feature[] = [
  {
    id: "progress",
    icon: Tv01Icon,
    title: "Watch progress",
    body: "See the next episode and how far along you are in every series.",
    shot: progressShot,
    alt: "Watch Progress screen listing shows with the next episode and a progress bar for each",
  },
  {
    id: "lists",
    icon: Bookmark02Icon,
    title: "Watch lists",
    body: "Should Watch, Currently Watching, Already Watched and Favorites.",
    shot: listsShot,
    alt: "Watch Lists screen with Should Watch, Currently Watching and Already Watched lists",
  },
  {
    id: "add",
    icon: PlayListAddIcon,
    title: "Custom lists",
    body: "Add any title to any list in one tap, or create your own.",
    shot: addShot,
    alt: "Add to List sheet with list checkboxes and a Create Custom List button",
  },
  {
    id: "mood",
    icon: SmileIcon,
    title: "Mood picker",
    body: "Cozy, mind-bending or spooky. Find something that fits tonight.",
    shot: moodShot,
    alt: "Mood Picker screen with Cozy, Mind-Bending, Adrenaline and Heartbreaking moods",
  },
  {
    id: "reminders",
    icon: Notification03Icon,
    title: "Release reminders",
    body: "Get notified on air day or the day before a new episode.",
    shot: reminderShot,
    alt: "Set Reminder dialog with every episode and on air day options selected",
  },
  {
    id: "trakt",
    icon: ArrowDataTransferHorizontalIcon,
    title: "Trakt sync",
    body: "Bring over your history, ratings and lists from Trakt or IMDb.",
    shot: traktShot,
    alt: "Connect Trakt screen listing what will be synced",
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
  const changed = useRef(false);

  // Keep the active pill visible in the mobile scroll row (no-op on desktop, where tabs are already in view)
  useEffect(() => {
    if (!changed.current) {
      changed.current = true;
      return;
    }
    listRef.current
      ?.querySelector<HTMLElement>('[aria-selected="true"]')
      ?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [active]);

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
          onValueChange={(v) => setActive(v as string)}
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
                  alt={isActive ? f.alt : ""}
                  aria-hidden={!isActive}
                  width={720}
                  height={1564}
                  loading={i === 0 ? "eager" : "lazy"}
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
