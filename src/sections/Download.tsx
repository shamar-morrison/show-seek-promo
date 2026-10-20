import logo from "../assets/logo.webp";
import backdrop from "../assets/backdrops/avengers.webp";
import { StoreButtons } from "../components/StoreButtons";
import { Reveal } from "../components/Reveal";

export function Download() {
  return (
    <section id="download" className="relative overflow-hidden py-28 lg:py-40">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <img
          src={backdrop}
          alt=""
          width={1280}
          height={720}
          loading="lazy"
          className="h-full w-full object-cover object-center brightness-[0.6]"
        />
        {/* Fade the backdrop into the page black at the top and bottom edges */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#141414_0%,rgb(20_20_20/0.55)_30%,rgb(20_20_20/0.55)_60%,#141414_100%)]" />
      </div>
      <Reveal className="relative mx-auto flex max-w-3xl flex-col items-center px-4 text-center sm:px-6">
        <img
          src={logo}
          alt=""
          width={96}
          height={96}
          loading="lazy"
          className="size-24 rounded-[1.6rem] border border-line"
        />
        <h2 className="mt-10 font-display text-5xl leading-[1.05] font-bold tracking-tighter text-balance md:text-6xl">
          Start your watch library today.
        </h2>
        <p className="mt-5 max-w-[44ch] text-lg leading-relaxed text-fg/80">
          Free on Android. Bring your Trakt or IMDb history and pick up right where you left off.
        </p>
        <StoreButtons className="mt-10 justify-center" />
      </Reveal>
    </section>
  );
}
