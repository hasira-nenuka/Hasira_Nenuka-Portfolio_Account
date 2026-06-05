import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
} from "lucide-react";
import { HIGHLIGHTS, SOCIALS, STATS } from "./data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[94vh] overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-brand)] opacity-70"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="size-3.5 text-[var(--brand-2)]" />
            <span className="truncate">
              Available for internships, freelance work and collaborations
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.02] sm:text-5xl md:text-7xl">
            Hasira Nenuka
            <span className="block gradient-text">Software Developer</span>
            <span className="block text-foreground/92">with a security mindset.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-medium text-foreground/90 md:text-xl">
            Information Technology undergraduate building reliable web applications with clean
            interfaces, practical backends and a growing security mindset.
          </p>

          <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
            I focus on useful software: campus systems, helpdesk workflows, automation projects and
            modern full-stack applications that solve real problems with thoughtful design.
          </p>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {HIGHLIGHTS.map((highlight) => (
              <span
                key={highlight}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-xs text-foreground/85"
              >
                <CheckCircle2 className="size-3 text-[var(--brand-2)]" />
                {highlight}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5"
            >
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-16 bg-white/25 blur-xl animate-sheen"
              />
              <span className="relative">View Projects</span>
              <ArrowRight className="relative size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/30 px-5 py-3 font-medium transition hover:-translate-y-0.5 hover:border-[var(--brand)]/50 hover:bg-accent/60"
            >
              <Mail className="size-4" /> Contact Me
            </a>
            <a
              href="/Hasira-Nenuka-Profile-Summary.pdf"
              download="Hasira-Nenuka-Profile-Summary.pdf"
              className="inline-flex items-center gap-2 rounded-xl glass px-5 py-3 font-medium transition hover:-translate-y-0.5 hover:border-[var(--brand-2)]/50"
            >
              <Download className="size-4" /> Download Profile
            </a>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <div className="flex items-center gap-3">
              <SocialIcon href={SOCIALS.github} label="GitHub">
                <Github className="size-4" />
              </SocialIcon>
              <SocialIcon href={SOCIALS.linkedin} label="LinkedIn">
                <Linkedin className="size-4" />
              </SocialIcon>
              <SocialIcon href={SOCIALS.email} label="Email">
                <Mail className="size-4" />
              </SocialIcon>
            </div>
            <div className="h-8 w-px bg-border" />
            <p className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4 text-[var(--brand)]" />
              Maharagama, Sri Lanka
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative w-full max-w-[470px] justify-self-center lg:justify-self-end"
        >
          <div className="surface relative overflow-hidden rounded-[1.75rem] p-4 sm:p-5">
            <div
              aria-hidden
              className="absolute inset-x-8 top-0 h-px bg-[image:var(--gradient-brand)]"
            />
            <div
              aria-hidden
              className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"
            />

            <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-background/35 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="grid size-9 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                  <TerminalSquare className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Portfolio Console</p>
                  <p className="text-[11px] text-muted-foreground">
                    Full-stack + security learning
                  </p>
                </div>
              </div>
              <span className="rounded-full border border-[var(--brand)]/30 bg-[var(--brand)]/10 px-2.5 py-1 text-[11px] font-semibold text-[var(--brand)]">
                Online
              </span>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-secondary">
              <img
                src="/Profile.jpeg"
                alt="Hasira Nenuka portrait"
                width={680}
                height={760}
                className="aspect-[4/4.25] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/94 via-background/35 to-transparent p-5 pt-24">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">Building modern web systems</p>
                    <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                      <ShieldCheck className="size-3.5" /> Secure, usable and maintainable
                    </p>
                  </div>
                  <span className="grid size-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]">
                    <ShieldCheck className="size-5" />
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
              {STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.045] p-4"
                >
                  <p className="text-2xl font-bold gradient-text md:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="grid size-10 place-items-center rounded-xl glass transition hover:-translate-y-0.5 hover:border-[var(--brand)]/50 hover:text-[var(--brand)]"
    >
      {children}
    </a>
  );
}
