import { useEffect, useState } from "react";
import { Code2, Menu, Moon, Sun, X } from "lucide-react";
import { NAV_LINKS } from "./data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`transition-all duration-300 ${
            scrolled
              ? "glass premium-border rounded-2xl px-3 shadow-[var(--shadow-card)]"
              : "px-0"
          }`}
        >
          <nav className="flex h-14 items-center justify-between">
            <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg">
              <span className="grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]">
                <Code2 className="size-5" />
              </span>
              <span className="hidden sm:inline">Hasira Nenuka</span>
              <span className="sm:hidden">Hasira</span>
              <span
                aria-hidden
                className="hidden h-2 w-2 rounded-full bg-[var(--brand-2)] shadow-[0_0_18px_var(--brand-2)] md:block"
              />
            </a>

            <ul className="hidden items-center gap-1 xl:flex">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-white/[0.07] hover:text-foreground hover:shadow-[inset_0_0_0_1px_oklch(1_0_0/0.08)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <button
                aria-label="Toggle theme"
                onClick={() => setLight((v) => !v)}
                className="grid size-9 place-items-center rounded-xl border border-border bg-background/25 transition-colors hover:bg-accent"
              >
                {light ? <Moon className="size-4" /> : <Sun className="size-4" />}
              </button>
              <a
                href="#contact"
                className="hidden items-center rounded-xl bg-[image:var(--gradient-brand)] bg-[length:180%_180%] px-4 py-2 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5 animate-gradient-pan sm:inline-flex"
              >
                Hire me
              </a>
              <button
                aria-label="Menu"
                className="grid size-9 place-items-center rounded-xl border border-border bg-background/25 xl:hidden"
                onClick={() => setOpen((v) => !v)}
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </nav>

          {open && (
            <ul className="grid grid-cols-2 gap-1 pb-4 pt-2 animate-fade-up sm:grid-cols-3 xl:hidden">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-white/[0.055] hover:text-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
