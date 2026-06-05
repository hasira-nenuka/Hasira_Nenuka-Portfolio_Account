import { Code2, Github, Linkedin, Mail } from "lucide-react";
import { NAV_LINKS, SOCIALS } from "./data";

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-border bg-background/55 backdrop-blur">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-brand)] opacity-55"
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold">
            <span className="grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]">
              <Code2 className="size-5" />
            </span>
            <span>Hasira Nenuka</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted-foreground">
            Aspiring software engineer building thoughtful, scalable and secure applications.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.slice(0, 6).map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold">Connect</h4>
          <div className="flex items-center gap-3">
            <a
              href={SOCIALS.github}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="grid size-10 place-items-center rounded-xl glass transition hover:-translate-y-0.5 hover:border-[var(--brand)]/45 hover:text-[var(--brand)]"
            >
              <Github className="size-4" />
            </a>
            <a
              href={SOCIALS.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="grid size-10 place-items-center rounded-xl glass transition hover:-translate-y-0.5 hover:border-[var(--brand)]/45 hover:text-[var(--brand)]"
            >
              <Linkedin className="size-4" />
            </a>
            <a
              href={SOCIALS.email}
              aria-label="Email"
              className="grid size-10 place-items-center rounded-xl glass transition hover:-translate-y-0.5 hover:border-[var(--brand)]/45 hover:text-[var(--brand)]"
            >
              <Mail className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>Copyright {new Date().getFullYear()} Hasira Nenuka. All rights reserved.</p>
          <p>
            Designed and developed by{" "}
            <span className="gradient-text font-semibold">Hasira Nenuka</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
