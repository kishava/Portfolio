import { Menu, X } from "lucide-react";
import { useState } from "react";
import type { NavItem } from "../data/siteContent";

interface NavbarProps {
  nav: readonly NavItem[];
}

export function Navbar({ nav }: NavbarProps) {
  const [open, setOpen] = useState(false);

  function scrollTo(id: string) {
    setOpen(false);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-white/5 bg-[oklch(0.12_0.02_260_/0.92)] backdrop-blur-xl">
      <nav
        className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="focus-ring font-display text-lg italic tracking-tight text-white sm:text-xl"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("top");
          }}
        >
          Avashik Ahamed
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => scrollTo(item.id)}
                className="focus-ring rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="focus-ring rounded-lg p-2 text-white/80 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-white/10 bg-[oklch(0.14_0.02_260_/0.98)] px-4 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {nav.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className="focus-ring w-full rounded-lg px-3 py-3 text-left text-sm font-medium text-white/85 hover:bg-white/5"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
