import { useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu02Icon } from "@hugeicons/core-free-icons";
import { navItems } from "../content";
import { Logo } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/75 backdrop-blur-xl backdrop-saturate-150">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-sm text-muted">
            {navItems.slice(0, 2).map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-fg">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#download"
            className="rounded-full bg-accent-fill px-5 py-2 text-sm font-semibold text-white transition-[transform,background-color] hover:bg-accent-fill-hover active:scale-[0.98]"
          >
            Download
          </a>
        </div>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger
            className="-mr-2 flex size-10 items-center justify-center rounded-full text-fg hover:bg-white/5 md:hidden"
            aria-label="Open menu"
          >
            <HugeiconsIcon icon={Menu02Icon} size={22} strokeWidth={1.8} />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Backdrop className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-200 data-ending-style:opacity-0 data-starting-style:opacity-0" />
            <Dialog.Popup className="fixed inset-x-3 top-3 z-50 rounded-3xl border border-line bg-surface p-5 shadow-2xl shadow-black/60 transition-[transform,opacity] duration-300 ease-out-expo data-ending-style:-translate-y-3 data-ending-style:opacity-0 data-starting-style:-translate-y-3 data-starting-style:opacity-0">
              <div className="flex items-center justify-between">
                <Dialog.Title render={<div />}>
                  <Logo />
                </Dialog.Title>
                <Dialog.Close
                  className="-mr-2 flex size-10 items-center justify-center rounded-full hover:bg-white/5"
                  aria-label="Close menu"
                >
                  <HugeiconsIcon icon={Cancel01Icon} size={22} strokeWidth={1.8} />
                </Dialog.Close>
              </div>
              <ul className="mt-6 flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-2xl px-3 py-3 font-display text-2xl font-semibold tracking-tight hover:bg-white/5"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  );
}
