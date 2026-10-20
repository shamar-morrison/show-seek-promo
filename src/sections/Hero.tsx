import type { CSSProperties } from "react";
import heroShot from "../assets/hero.webp";
import detailShot from "../assets/hero_2.webp";
import { StoreButtons } from "../components/StoreButtons";

const step = (i: number) => ({ "--i": i }) as CSSProperties;

const posters = Object.values(
  import.meta.glob<string>("../assets/posters/*.webp", { eager: true, import: "default" }),
);

const COLUMNS = 8;
const columns = Array.from({ length: COLUMNS }, (_, c) => posters.filter((_, i) => i % COLUMNS === c));

// 4 columns on mobile, 6 on tablet, 8 on desktop
const columnVisibility = (c: number) => (c < 4 ? "flex" : c < 6 ? "hidden sm:flex" : "hidden lg:flex");

/** Decorative collage of posters; columns drift in opposite directions. */
function PosterWall() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -inset-x-8 -top-24 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8">
        {columns.map((col, c) => (
          <div
            key={c}
            className={`poster-col flex-col ${columnVisibility(c)}`}
            data-reverse={c % 2 === 1}
            style={{ marginTop: `${(c % 3) * 56}px` } as CSSProperties}
          >
            {/* Tripled so the drift loop never shows a gap */}
            {[...col, ...col, ...col].map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                width={240}
                height={360}
                loading={i < col.length ? "eager" : "lazy"}
                className="mb-3 aspect-[2/3] w-full rounded-xl object-cover brightness-[0.55]"
              />
            ))}
          </div>
        ))}
      </div>
      {/* Neutral fades: down to the page black, and behind the headline */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(20_20_20/0.35)_0%,rgb(20_20_20/0.55)_45%,#141414_88%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_8%,rgb(20_20_20/0.7)_45%,transparent_75%)] max-lg:bg-[linear-gradient(to_bottom,rgb(20_20_20/0.72),rgb(20_20_20/0.72))]" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <PosterWall />
      <div className="relative mx-auto grid min-h-[calc(100dvh-4rem)] max-w-7xl grid-cols-1 items-center gap-12 px-4 pt-12 pb-16 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:gap-8 lg:px-8 lg:pt-16">
        <div className="max-w-2xl">
          <p className="enter text-sm font-semibold uppercase tracking-[0.2em] text-accent" style={step(0)}>
            Movie &amp; TV tracker
          </p>
          <h1
            className="enter mt-5 font-display text-5xl leading-[1.02] font-bold tracking-tighter text-balance sm:text-6xl lg:text-[3.5rem] xl:text-[3.9rem]"
            style={step(1)}
          >
            Track every show and movie in one place.
          </h1>
          <p className="enter mt-6 max-w-[42ch] text-lg leading-relaxed text-fg/75" style={step(2)}>
            Episode progress, watchlists, ratings and release reminders, across every streaming service you use.
          </p>
          <div className="enter mt-9" style={step(3)}>
            <StoreButtons />
          </div>
        </div>

        <div className="relative mx-auto h-[520px] w-full max-w-[520px] sm:h-[600px] lg:h-[min(76dvh,680px)]">
          <img
            src={detailShot}
            alt="ShowSeek title details screen with Watch Trailer and Mark as Watched buttons"
            width={720}
            height={1452}
            className="enter absolute top-[14%] right-0 h-[78%] w-auto brightness-[0.8] drop-shadow-[0_30px_60px_rgb(0_0_0/0.8)] sm:right-[2%]"
            style={step(4)}
          />
          <img
            src={heroShot}
            alt="ShowSeek home screen showing trending and upcoming movies"
            width={720}
            height={1452}
            fetchPriority="high"
            className="enter absolute top-0 left-0 h-full w-auto drop-shadow-[0_40px_80px_rgb(0_0_0/0.85)] sm:left-[6%]"
            style={step(3)}
          />
        </div>
      </div>
    </section>
  );
}
