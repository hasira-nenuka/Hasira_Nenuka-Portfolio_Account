import { useState } from "react";
import { Section } from "./Section";
import { PROJECTS, PROJECT_FILTERS, ProjectCategory } from "./data";
import { Github, ExternalLink, Folder } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Projects() {
  const [filter, setFilter] = useState<(typeof PROJECT_FILTERS)[number]>("All");

  const filtered = PROJECTS.filter(
    (p) => filter === "All" || p.category.includes(filter as ProjectCategory),
  );

  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title={
        <span className="block whitespace-nowrap text-[clamp(1.45rem,5.6vw,3rem)]">
          Selected work with <span className="gradient-text">real product shape</span>
        </span>
      }
      subtitle="A snapshot of full-stack systems, automation work and academic projects with practical workflows and user-facing screens."
    >
      <div className="premium-border mb-8 flex flex-wrap gap-2 overflow-hidden rounded-2xl bg-background/25 p-2 backdrop-blur">
        {PROJECT_FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all ${
              filter === f
                ? "border-transparent bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]"
                : "border-border bg-background/25 text-muted-foreground hover:border-[var(--brand)]/40 hover:text-foreground"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="premium-border group surface flex flex-col overflow-hidden rounded-2xl card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40"
            >
              <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 grid place-items-center">
                    <Folder className="size-12 text-foreground/40 group-hover:scale-110 transition-transform" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/12 to-transparent opacity-0 transition group-hover:opacity-100"
                />
                <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-1">
                  {p.category.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-white/15 bg-background/65 px-2 py-0.5 text-[10px] font-medium backdrop-blur"
                    >
                      {c}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-3 right-3 rounded-full border border-white/15 bg-background/65 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[var(--brand)] shadow-[0_0_24px_-12px_var(--brand)] backdrop-blur">
                  Case Study
                </div>
              </div>
              <div className="flex grow flex-col p-5">
                <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                <p className="mt-2 grow text-sm leading-6 text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-lg border border-white/10 bg-background/40 px-2 py-1 text-[11px] text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                  {p.github && (
                    <a
                      href={p.github}
                      target={p.github === "#" ? undefined : "_blank"}
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm transition hover:bg-white/[0.055] hover:text-[var(--brand)]"
                    >
                      <Github className="size-4" /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-sm transition hover:bg-white/[0.055] hover:text-[var(--brand)]"
                    >
                      <ExternalLink className="size-4" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
}
