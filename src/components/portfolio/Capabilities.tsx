import { motion } from "framer-motion";
import { ArrowUpRight, Braces, Radar, ShieldCheck } from "lucide-react";
import { CAPABILITIES } from "./data";

const ICONS = [Braces, Radar, ShieldCheck];

export function Capabilities() {
  return (
    <section id="capabilities" className="relative scroll-mt-24 py-12 md:py-18">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="surface relative overflow-hidden rounded-[1.5rem] p-5 sm:p-6 lg:p-8">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-px bg-[image:var(--gradient-brand)] opacity-80"
          />
          <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <span className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--brand)]">
                What I Deliver
              </span>
              <h2 className="max-w-xl text-2xl font-bold leading-tight md:text-4xl">
                Practical engineering with a{" "}
                <span className="gradient-text">premium product eye</span>
              </h2>
              <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
                I combine software engineering fundamentals, full-stack implementation and
                security-aware thinking to build useful systems that feel clear, trustworthy and
                maintainable.
              </p>
            </motion.div>

            <div className="grid gap-3 md:grid-cols-3">
              {CAPABILITIES.map((item, index) => {
                const Icon = ICONS[index % ICONS.length];
                return (
                  <motion.article
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.07 }}
                    className="group rounded-2xl border border-white/10 bg-background/28 p-5 card-hover hover:-translate-y-1 hover:border-[var(--brand)]/45 hover:bg-background/42"
                  >
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <span className="grid size-10 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]">
                        <Icon className="size-5" />
                      </span>
                      <ArrowUpRight className="size-4 text-muted-foreground transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--brand)]" />
                    </div>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.desc}</p>
                    <div className="mt-4 space-y-2">
                      {item.points.map((point) => (
                        <div
                          key={point}
                          className="flex items-center gap-2 text-xs text-foreground/82"
                        >
                          <span className="size-1.5 rounded-full bg-[var(--brand-2)]" />
                          {point}
                        </div>
                      ))}
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
