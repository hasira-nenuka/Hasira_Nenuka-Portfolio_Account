import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MonitorDot,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Workflow,
} from "lucide-react";
import { HIGHLIGHTS, SOCIALS, STATS } from "./data";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[88vh] overflow-hidden pt-24 pb-14 md:pt-28 md:pb-16"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-brand)] bg-[length:220%_220%] opacity-80 animate-gradient-pan"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-[var(--brand-2)]/40 to-[var(--brand-3)]/20"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-20 h-[78%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/10 to-transparent"
      />
      <div aria-hidden className="tech-3d-scene hidden lg:block">
        <div className="tech-3d-core">
          <div className="tech-cube">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="tech-ring" />
          <div className="tech-ring" />
          <div className="tech-chip">REACT</div>
          <div className="tech-chip">API</div>
          <div className="tech-chip">SEC</div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="premium-border mb-6 inline-flex max-w-full items-center gap-2 overflow-hidden rounded-full bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="size-3.5 text-[var(--brand-2)]" />
            <span className="truncate">
              Available for internships, freelance work and collaborations
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.02] sm:text-5xl md:text-7xl">
            Hasira Nenuka
            <span className="block gradient-text bg-[length:180%_180%] animate-gradient-pan">
              Software Developer
            </span>
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
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs text-foreground/85 shadow-[0_12px_30px_-24px_var(--brand-2)] backdrop-blur"
              >
                <CheckCircle2 className="size-3 text-[var(--brand-2)]" />
                {highlight}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/projects"
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
              href="/contact"
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
          <div className="premium-border surface holo-panel relative overflow-hidden rounded-[1.75rem] p-4 sm:p-5">
            <div
              aria-hidden
              className="absolute inset-x-8 top-0 h-px bg-[image:var(--gradient-brand)] bg-[length:200%_200%] animate-gradient-pan"
            />
            <div
              aria-hidden
              className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--brand-2)]/35 to-transparent"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0_28%,oklch(1_0_0/0.05)_29%,transparent_36%)]"
            />

            <div className="relative mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-background/35 px-4 py-3 shadow-[inset_0_1px_0_oklch(1_0_0/0.08)]">
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
              <span className="rounded-full border border-[var(--brand)]/30 bg-[var(--brand)]/10 px-2.5 py-1 text-[11px] font-semibold text-[var(--brand)] shadow-[0_0_24px_-10px_var(--brand)]">
                Online
              </span>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-secondary shadow-[0_20px_70px_-40px_var(--brand)]">
              <img
                src="/Profile.jpeg"
                alt="Hasira Nenuka portrait"
                width={680}
                height={760}
                className="aspect-[4/4.25] w-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--brand)]/24 to-transparent"
              />
              <div
                aria-hidden
                className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent animate-scan"
              />
              <div className="absolute left-3 top-3 grid gap-2">
                {[
                  ["React", "UI"],
                  ["API", "JWT"],
                  ["Secure", "Flow"],
                ].map(([label, value]) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-background/62 px-2.5 py-1 text-[10px] font-medium backdrop-blur"
                  >
                    <span className="size-1.5 rounded-full bg-[var(--brand-2)]" />
                    {label} <span className="text-muted-foreground">{value}</span>
                  </span>
                ))}
              </div>
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
                  className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 shadow-[inset_0_1px_0_oklch(1_0_0/0.08)]"
                >
                  <p className="text-2xl font-bold gradient-text md:text-3xl">{stat.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-background/30 p-4">
                <p className="flex items-center gap-2 text-xs font-semibold text-foreground/90">
                  <MonitorDot className="size-4 text-[var(--brand)]" /> Interface
                </p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[86%] rounded-full bg-[image:var(--gradient-brand)]" />
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-background/30 p-4">
                <p className="flex items-center gap-2 text-xs font-semibold text-foreground/90">
                  <Workflow className="size-4 text-[var(--brand-2)]" /> Delivery
                </p>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[78%] rounded-full bg-[image:var(--gradient-brand)]" />
                </div>
              </div>
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
