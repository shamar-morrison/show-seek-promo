import { Tooltip } from "@base-ui/react/tooltip";
import googlePlayBadge from "../assets/badges/google-play.webp";
import appStoreBadge from "../assets/badges/app-store.svg";
import { links } from "../content";
import { ExternalLink } from "./ExternalLink";

// Official store artwork; both rendered at the same height per brand guidelines.
const badgeHeight = "h-12 sm:h-14 w-auto";

export function GooglePlayButton() {
  return (
    <ExternalLink
      href={links.playStore}
      className="rounded-[10px] transition-transform duration-300 ease-out-expo hover:-translate-y-0.5 active:scale-[0.98]"
    >
      <img src={googlePlayBadge} alt="Get it on Google Play" width={564} height={168} className={badgeHeight} />
    </ExternalLink>
  );
}

export function AppStoreComingSoon() {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <Tooltip.Root>
        <Tooltip.Trigger
          aria-disabled="true"
          aria-label="Download on the App Store, coming soon"
          onClick={(e) => e.preventDefault()}
          className="cursor-not-allowed rounded-[10px]"
        >
          <img src={appStoreBadge} alt="" width={120} height={40} className={`${badgeHeight} opacity-40 grayscale`} />
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Positioner side="bottom" sideOffset={30} className="z-60">
            <Tooltip.Popup className="origin-(--transform-origin) rounded-xl border border-line bg-surface-2 px-3 py-2 text-sm text-fg shadow-xl shadow-black/40 transition-[transform,opacity] duration-150 data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0">
              The iOS version is on its way.
            </Tooltip.Popup>
          </Tooltip.Positioner>
        </Tooltip.Portal>
      </Tooltip.Root>
      <span className="text-xs font-medium text-muted">Coming soon</span>
    </div>
  );
}

export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-start gap-3 ${className}`}>
      <GooglePlayButton />
      <AppStoreComingSoon />
    </div>
  );
}
