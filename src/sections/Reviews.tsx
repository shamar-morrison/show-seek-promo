import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowUpRight01Icon, StarIcon } from "@hugeicons/core-free-icons";
import { links, reviews, type Review } from "../content";
import googlePlayMark from "../assets/badges/google-play-mark.webp";
import backdrop from "../assets/backdrops/dune-part-two.webp";
import { ExternalLink } from "../components/ExternalLink";
import { Reveal } from "../components/Reveal";

function Stars({ rating }: { rating: number }) {
  return (
    <span className="flex gap-0.5 text-[#f5b301]" role="img" aria-label={`Rated ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <HugeiconsIcon
          key={i}
          icon={StarIcon}
          size={15}
          strokeWidth={1.5}
          fill={i < rating ? "currentColor" : "none"}
          className={i < rating ? "" : "text-white/20"}
        />
      ))}
    </span>
  );
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <Reveal index={index % 3} className="mb-4 break-inside-avoid">
      <ExternalLink
        href={links.playStore}
        aria-label={`Read ${review.name}'s review on Google Play`}
        className="block rounded-3xl border border-line bg-surface p-6 transition-[border-color] duration-300 ease-out-expo hover:border-white/25"
      >
        <div className="flex items-center gap-3">
          <img
            src={review.avatar}
            alt=""
            width={40}
            height={40}
            loading="lazy"
            className="size-10 rounded-full bg-surface-2 object-cover"
          />
          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold leading-none">{review.name}</span>
            <Stars rating={review.rating} />
          </div>
        </div>
        <blockquote className="mt-4 line-clamp-3 leading-relaxed text-fg/90">&ldquo;{review.quote}&rdquo;</blockquote>
        <p className="mt-4 flex items-center gap-1.5 text-sm text-muted">
          Review from
          <img src={googlePlayMark} alt="Google Play" width={14} height={16} className="h-4 w-auto" />
        </p>
      </ExternalLink>
    </Reveal>
  );
}

export function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1/2">
        <img
          src={backdrop}
          alt=""
          width={1280}
          height={720}
          loading="lazy"
          className="h-full w-full object-cover object-center brightness-[0.7]"
        />
        {/* Soft top edge, then fully black by the halfway point of the section */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#141414_0%,rgb(20_20_20/0.15)_22%,rgb(20_20_20/0.45)_60%,#141414_100%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <Reveal>
          <h2 className="max-w-2xl font-display text-4xl font-bold tracking-tighter text-balance md:text-5xl">
            Loved by people who watch a lot.
          </h2>
          <p className="mt-4 max-w-[55ch] text-lg leading-relaxed text-fg/80">
            A few words from ShowSeek users on Google Play.
          </p>
        </Reveal>

        <div className="relative mt-14">
          <div className="max-h-[720px] columns-1 gap-4 overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent)] md:columns-2 lg:columns-3">
            {reviews.map((r, i) => (
              <ReviewCard key={r.name} review={r} index={i} />
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <ExternalLink
              href={links.playStore}
              className="flex items-center gap-1.5 rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-white/5"
            >
              Read all reviews on Google Play
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} strokeWidth={2} aria-hidden />
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  );
}
