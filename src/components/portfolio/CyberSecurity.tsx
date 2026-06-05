import { Section } from "./Section";
import { SECURITY_INTERESTS } from "./data";
import { Shield, Lock, Terminal, Globe, Network } from "lucide-react";
import { motion } from "framer-motion";

const ICONS = [Network, Shield, Lock, Terminal, Globe];

export function CyberSecurity() {
  return (
    <Section
      id="security"
      eyebrow="Exploring Cyber Security"
      title={
        <>
          Building with a <span className="gradient-text">security-first mindset</span>
        </>
      }
      subtitle="A growing area of interest alongside my core software engineering studies, focused on safer systems and stronger development habits."
    >
      <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {SECURITY_INTERESTS.map((s, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="surface group relative overflow-hidden rounded-2xl p-6 card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40"
            >
              <div
                aria-hidden
                className="absolute inset-x-6 top-0 h-px bg-[image:var(--gradient-brand)] opacity-0 transition group-hover:opacity-80"
              />
              <span className="relative mb-4 grid size-11 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]">
                <Icon className="size-5" />
              </span>
              <h3 className="relative font-semibold">{s.title}</h3>
              <p className="relative text-sm leading-6 text-muted-foreground mt-3">{s.desc}</p>
              <div className="relative mt-5 border-t border-white/10 pt-4">
                <p className="text-xs uppercase tracking-widest text-[var(--brand)] font-semibold">
                  Key Areas
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.keyAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-foreground/85 transition group-hover:border-white/15"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
