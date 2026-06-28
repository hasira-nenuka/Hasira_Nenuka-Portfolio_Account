import { Code2, Github, Linkedin, Mail, MapPin, Phone, type LucideIcon } from "lucide-react";
import { NAV_LINKS, SOCIALS } from "./data";

const EMAIL = "hasiranenuka20896@gmail.com";
const PHONE_DISPLAY = "+94 72 990 2000";
const LOCATION = "Maharagama, Sri Lanka";

export function Footer() {
  return (
    <footer className="relative mt-16 border-t border-border bg-background/70 backdrop-blur">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-brand)] opacity-55"
      />
      <div className="mx-auto grid max-w-4xl gap-6 px-4 py-7 sm:px-6 lg:grid-cols-[0.95fr_1.1fr_1.05fr]">
        <div>
          <div className="flex items-center gap-2 font-display text-base font-bold">
            <span className="grid size-8 place-items-center rounded-lg bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]">
              <Code2 className="size-4" />
            </span>
            <span>Hasira Nenuka</span>
          </div>
          <p className="mt-2 max-w-xs text-xs leading-5 text-muted-foreground">
            Aspiring software engineer building thoughtful, scalable and secure applications.
          </p>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold">Quick Links</h4>
          <ul className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex rounded-md px-1 py-0.5 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-2 text-sm font-semibold">Connect</h4>
          <div className="mb-3 flex items-center gap-2">
            <a
              href={SOCIALS.github}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white text-black shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand)]/45"
            >
              <Github className="size-4" />
            </a>
            <a
              href={SOCIALS.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white text-black shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand)]/45"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
          <div className="space-y-1.5 text-xs text-muted-foreground">
            <ContactInfo icon={Mail} label={EMAIL} />
            <ContactInfo icon={Phone} label={PHONE_DISPLAY} />
            <ContactInfo icon={MapPin} label={LOCATION} />
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-2 px-4 py-3 text-xs text-muted-foreground sm:flex-row sm:px-6">
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

function ContactInfo({
  icon: Icon,
  label,
}: {
  icon: LucideIcon;
  label: string;
}) {
  return (
    <p className="flex min-w-0 items-center gap-2">
      <span className="grid size-6 shrink-0 place-items-center rounded-md bg-white text-black shadow-sm">
        <Icon className="size-3.5" />
      </span>
      <span className="min-w-0 break-words">{label}</span>
    </p>
  );
}
