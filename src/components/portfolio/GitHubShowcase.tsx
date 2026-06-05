import { Section } from "./Section";
import { Github, GitCommit, Folder, Star, Activity } from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  { icon: Folder, label: "Repositories", value: "30+" },
  { icon: GitCommit, label: "Total Commits", value: "1.2k+" },
  { icon: Star, label: "Stars Earned", value: "60+" },
  { icon: Activity, label: "Contributions / yr", value: "800+" },
];

const LANGS = [
  { name: "JavaScript", pct: 32, color: "from-yellow-400 to-amber-500" },
  { name: "TypeScript", pct: 24, color: "from-sky-400 to-blue-600" },
  { name: "Java", pct: 22, color: "from-orange-400 to-red-500" },
  { name: "Python", pct: 12, color: "from-emerald-400 to-teal-500" },
  { name: "PHP", pct: 10, color: "from-violet-400 to-purple-600" },
];

export function GitHubShowcase() {
  const cells = Array.from({ length: 7 * 26 });
  return (
    <Section
      id="github"
      eyebrow="GitHub Showcase"
      title={
        <>
          Development activity and <span className="gradient-text">technical direction</span>
        </>
      }
      subtitle="A portfolio-style view of repositories, practice areas and frequently used technologies."
    >
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="surface rounded-2xl p-6 lg:col-span-2">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="grid size-10 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground">
                <Github className="size-5" />
              </span>
              <h3 className="font-semibold">Contribution graph</h3>
            </div>
            <span className="text-xs text-muted-foreground">Last 6 months</span>
          </div>
          <div
            className="grid gap-1 rounded-2xl border border-white/10 bg-background/30 p-3"
            style={{ gridTemplateColumns: "repeat(26, minmax(0, 1fr))" }}
            aria-label="Decorative GitHub-style contribution grid"
          >
            {cells.map((_, i) => {
              const intensity = ((i * 17 + Math.floor(i / 7) * 11) % 100) / 100;
              const lvl =
                intensity > 0.85
                  ? "bg-[var(--brand-2)]"
                  : intensity > 0.65
                    ? "bg-[var(--brand)]"
                    : intensity > 0.4
                      ? "bg-[var(--brand)]/50"
                      : intensity > 0.2
                        ? "bg-[var(--brand)]/20"
                        : "bg-secondary";
              return <div key={i} className={`aspect-square rounded-[3px] ${lvl}`} />;
            })}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-background/25 p-3">
                <s.icon className="size-4 text-[var(--brand)]" />
                <div className="mt-2 font-semibold">{s.value}</div>
                <div className="text-[11px] text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="surface rounded-2xl p-6">
          <h3 className="font-semibold mb-5">Top languages</h3>
          <div className="space-y-4">
            {LANGS.map((l, i) => (
              <div key={l.name}>
                <div className="flex items-center justify-between text-sm mb-1.5">
                  <span>{l.name}</span>
                  <span className="text-muted-foreground">{l.pct}%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${l.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.08 }}
                    className={`h-full rounded-full bg-gradient-to-r ${l.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
          <a
            href="https://github.com/hasira-nenuka"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--brand)] transition"
          >
            <Github className="size-4" /> Visit GitHub Profile
          </a>
        </div>
      </div>
    </Section>
  );
}
