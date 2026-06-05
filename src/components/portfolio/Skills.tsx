import { motion } from "framer-motion";
import { BookOpen, Cpu, Database, Server, Wrench } from "lucide-react";
import { Section } from "./Section";
import { SKILLS } from "./data";

const ICONS = [Cpu, Server, Database, Wrench, BookOpen];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Technical Skills"
      title={
        <>
          A practical toolkit for <span className="gradient-text">shipping software</span>
        </>
      }
      subtitle="A growing toolkit across the full stack, from responsive interfaces and APIs to databases, testing and developer workflows."
    >
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((g, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          return (
            <motion.div
              key={g.group}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="surface group relative overflow-hidden rounded-2xl p-6 card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40"
            >
              <div
                aria-hidden
                className="absolute inset-x-6 top-0 h-px bg-[image:var(--gradient-brand)] opacity-0 transition group-hover:opacity-80"
              />
              <div className="mb-4 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{g.group}</h3>
                  <p className="text-xs text-muted-foreground">{g.items.length} technologies</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-background/30 px-3 py-1.5 text-xs font-medium text-foreground/85 transition hover:border-[var(--brand)]/50 hover:bg-accent/50"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
