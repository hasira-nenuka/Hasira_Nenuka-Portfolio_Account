import { BookOpen, Calendar, GraduationCap, School, Sparkles, type LucideIcon } from "lucide-react";
import { Section } from "./Section";

const EDUCATION_ITEMS = [
  {
    icon: GraduationCap,
    logo: "/SLIIT%20logo.png",
    logoAlt: "Sri Lanka Institute of Information Technology logo",
    eyebrow: "University",
    institution: "Sri Lanka Institute of Information Technology (SLIIT)",
    details: [
      ["Degree", "B.Sc.(Hons) in Information Technology"],
      ["Current GPA", "2.12"],
      ["Graduation", "Expected 2027"],
    ],
    modules: [
      "Database Systems",
      "Software Engineering",
      "Web Application Development",
      "Data Structures & Algorithms",
      "Computer Networks",
      "Information Security",
    ],
  },
  {
    icon: School,
    logo: "/D%20S%20logo.png",
    logoAlt: "D.S. Senanayake College Colombo 7 logo",
    eyebrow: "School",
    institution: "D.S. Senanayake College Colombo 7",
    details: [
      ["Stream", "Technology"],
      ["G.C.E. Advanced Level", "Pass"],
    ],
    subjects: [
      ["Engineering Technology", "C"],
      ["Science for Technology", "C"],
      ["Information & Communication Technology", "C"],
    ],
  },
  {
    icon: BookOpen,
    logo: "/NIBM%20logo.jpg",
    logoAlt: "National Institute of Business Management logo",
    eyebrow: "Institute",
    institution: "National Institute of Business Management (NIBM)",
    details: [
      ["Course", "Certificate in Computer Science"],
      ["Grade", "Completed"],
    ],
    description:
      "Covered fundamental concepts of Computer Science and Information Technology.",
  },
  {
    icon: Sparkles,
    logo: "/JMC%20logo.png",
    logoAlt: "Jayasekera Management Centre logo",
    eyebrow: "Institute",
    institution: "Jayasekera Management Centre (JMC)",
    courses: [
      {
        name: "Certificate in Microsoft Office",
        grade: "Completed",
        description:
          "Gained practical knowledge in Microsoft Word, Excel, PowerPoint, Access, Windows, and Internet Applications.",
      },
      {
        name: "Certificate in 3 in One Business English Programme",
        grade: "Completed",
        description:
          "Successfully completed Business English, Basic Grammar, Spoken English, Viva Voce Test, and Project Report assessments.",
      },
    ],
  },
];

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
      <div className="grid items-stretch gap-5 lg:grid-cols-2">
        {EDUCATION_ITEMS.map((item) => (
          <EducationCard key={item.institution} item={item} />
        ))}
      </div>
    </Section>
  );
}

function EducationCard({ item }: { item: (typeof EDUCATION_ITEMS)[number] }) {
  const Icon = item.icon;

  return (
    <article className="surface premium-border group relative flex h-full min-h-[680px] flex-col overflow-hidden rounded-2xl p-4 card-hover hover:-translate-y-1 hover:border-[var(--brand)]/40 md:p-5">
      <div
        aria-hidden
        className="absolute inset-x-8 top-0 h-px bg-[image:var(--gradient-brand)] bg-[length:180%_180%] opacity-80 animate-gradient-pan"
      />
      <LogoPanel item={item} icon={Icon} />

      <div className="relative flex flex-1 flex-col px-1 pb-1 pt-5 md:px-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-[var(--brand)]">
            {item.eyebrow}
          </p>
          <h3 className="mt-2 text-xl font-semibold leading-snug text-foreground">
            {item.institution}
          </h3>

          {"details" in item && item.details ? (
            <dl className="mt-5 grid gap-3 sm:grid-cols-2">
              {item.details.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-background/28 p-3"
                >
                  <dt className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-5 text-foreground/92">{value}</dd>
                </div>
              ))}
            </dl>
          ) : null}

          {"modules" in item && item.modules ? (
            <div className="mt-5">
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                <Calendar className="size-3.5 text-[var(--brand)]" /> Relevant Modules
              </p>
              <div className="flex flex-wrap gap-2">
                {item.modules.map((module) => (
                  <span
                    key={module}
                    className="rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground/85"
                  >
                    {module}
                  </span>
                ))}
              </div>
            </div>
          ) : null}

          {"subjects" in item && item.subjects ? (
            <div className="mt-5 grid gap-2">
              {item.subjects.map(([subject, grade]) => (
                <div
                  key={subject}
                  className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-background/28 px-3 py-2.5"
                >
                  <span className="text-sm text-foreground/88">{subject}</span>
                  <span className="rounded-full bg-[var(--brand)]/12 px-3 py-1 text-xs font-bold text-[var(--brand)]">
                    {grade}
                  </span>
                </div>
              ))}
            </div>
          ) : null}

          {"description" in item && item.description ? (
            <p className="mt-5 rounded-xl border border-white/10 bg-background/28 p-4 text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
          ) : null}

          {"courses" in item && item.courses ? (
            <div className="mt-5 grid gap-3">
              {item.courses.map((course) => (
                <div
                  key={course.name}
                  className="rounded-xl border border-white/10 bg-background/28 p-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-semibold leading-snug">{course.name}</h4>
                    <span className="rounded-full bg-[var(--brand)]/12 px-3 py-1 text-xs font-bold text-[var(--brand)]">
                      {course.grade}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}

function LogoPanel({
  item,
  icon: Icon,
}: {
  item: (typeof EDUCATION_ITEMS)[number];
  icon: LucideIcon;
}) {
  return (
    <div className="relative grid min-h-[300px] w-full shrink-0 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.065] p-8 shadow-[inset_0_1px_0_oklch(1_0_0/0.08)] md:min-h-[330px]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,oklch(1_0_0/0.08),transparent_48%)]"
      />
      {"logo" in item && item.logo ? (
        <img
          src={item.logo}
          alt={item.logoAlt}
          className="relative max-h-[245px] w-full max-w-[82%] object-contain drop-shadow-[0_18px_40px_oklch(0.02_0.02_245_/_0.35)] md:max-h-[275px]"
          loading="lazy"
        />
      ) : (
        <div className="relative grid size-36 place-items-center rounded-2xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]">
          {"logoFallback" in item && item.logoFallback ? (
            <span className="font-display text-4xl font-black tracking-wide">
              {item.logoFallback}
            </span>
          ) : (
            <Icon className="size-14" />
          )}
        </div>
      )}
    </div>
  );
}
