import { Section } from "./Section";
import { EDUCATION } from "./data";
import { Award, BookMarked, Calendar, GraduationCap, type LucideIcon } from "lucide-react";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title={
        <span className="block whitespace-nowrap text-[clamp(1.3rem,4.7vw,3rem)]">
          Building a Strong Foundation in{" "}
          <span className="gradient-text">Information Technology</span>
        </span>
      }
      subtitle="Formal computing studies supported by practical modules in development, databases, networks and information security."
    >
      <div className="grid gap-5 lg:grid-cols-[1fr_0.85fr]">
        <div className="surface relative overflow-hidden rounded-2xl p-6 md:p-7">
          <div
            aria-hidden
            className="absolute inset-x-8 top-0 h-px bg-[image:var(--gradient-brand)]"
          />
          <div className="flex items-start gap-4">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]">
              <GraduationCap className="size-5" />
            </span>
            <div>
              <h3 className="text-xl font-semibold">{EDUCATION.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{EDUCATION.university}</p>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <Info icon={Award} label="Current GPA" value={EDUCATION.gpa} />
            <Info icon={Calendar} label="Graduation" value={EDUCATION.graduation} />
          </div>
          <div className="mt-6">
            <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
              <BookMarked className="size-3.5" /> Relevant Modules
            </p>
            <div className="flex flex-wrap gap-2">
              {EDUCATION.modules.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-3">
          {[
            ["Foundation", "Programming, databases and software engineering principles."],
            ["Application", "Full-stack coursework transformed into working project systems."],
            ["Direction", "Security, automation and maintainable product engineering."],
          ].map(([label, text], index) => (
            <div key={label} className="surface flex gap-4 rounded-2xl p-5">
              <span className="mt-1 grid size-8 shrink-0 place-items-center rounded-full border border-[var(--brand)]/35 bg-[var(--brand)]/10 text-sm font-semibold text-[var(--brand)]">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold">{label}</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Info({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-background/25 p-4">
      <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-muted-foreground">
        <Icon className="size-3" /> {label}
      </p>
      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}
