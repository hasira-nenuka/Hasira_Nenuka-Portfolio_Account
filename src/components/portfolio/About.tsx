import { motion } from "framer-motion";
import { Code2, GraduationCap, Layers, ShieldCheck } from "lucide-react";
import { Section } from "./Section";
import { STATS } from "./data";

const POINTS = [
  {
    icon: GraduationCap,
    text: "Information Technology undergraduate with hands-on academic project experience.",
  },
  {
    icon: Code2,
    text: "Focused on full-stack systems with practical interfaces and maintainable APIs.",
  },
  {
    icon: Layers,
    text: "Comfortable learning modern tools and turning coursework into working products.",
  },
  {
    icon: ShieldCheck,
    text: "Growing security awareness across authentication, validation and application design.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About Me"
      title={
        <span className="block whitespace-nowrap text-[clamp(1.45rem,5.6vw,3rem)]">
          A developer shaped by <span className="gradient-text">curiosity and craft</span>
        </span>
      }
      subtitle="I am an Information Technology undergraduate and aspiring full-stack developer who enjoys building efficient, user-friendly and scalable applications. My work combines academic learning, self-study and practical project building."
    >
      <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <ul className="space-y-4">
          {POINTS.map((p, i) => (
            <motion.li
              key={p.text}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="surface group flex items-start gap-4 rounded-2xl p-5 card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)] transition group-hover:scale-105">
                <p.icon className="size-5" />
              </span>
              <span className="text-sm leading-6 text-foreground/90 md:text-base">{p.text}</span>
            </motion.li>
          ))}
        </ul>

        <div className="grid grid-cols-2 gap-4">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="surface relative overflow-hidden rounded-2xl p-6 text-center card-hover hover:-translate-y-1 hover:border-[var(--brand-2)]/40"
            >
              <div
                aria-hidden
                className="absolute inset-x-6 top-0 h-px bg-[image:var(--gradient-brand)] opacity-70"
              />
              <div className="text-3xl font-bold gradient-text md:text-4xl">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
