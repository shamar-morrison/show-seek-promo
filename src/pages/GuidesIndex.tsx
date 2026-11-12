import { guides } from "../guides";
import { GuideCards } from "../components/GuideCards";
import { Download } from "../sections/Download";

export function GuidesIndex() {
  return (
    <>
      <section className="mx-auto max-w-5xl px-4 pt-14 pb-24 sm:px-6 lg:px-8 lg:pt-20">
        <header className="max-w-2xl">
          <p className="text-sm font-semibold tracking-[0.2em] text-accent uppercase">Guides</p>
          <h1 className="mt-4 font-display text-4xl leading-[1.05] font-bold tracking-tighter text-balance md:text-5xl">
            Bring your watch history to ShowSeek.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-fg/80">
            Switching trackers shouldn't mean starting from zero. These step-by-step guides show you how to import
            your history from other apps and keep ShowSeek in sync with where you watch.
          </p>
        </header>
        <div className="mt-12">
          <GuideCards guides={guides} />
        </div>
      </section>
      <Download />
    </>
  );
}
