import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send, type LucideIcon } from "lucide-react";
import { Section } from "./Section";
import { SOCIALS } from "./data";

export function Contact() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    (e.target as HTMLFormElement).reset();
  }

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={
        <>
          Let's build something <span className="gradient-text">useful and polished</span>
        </>
      }
      subtitle="Open to internships, collaborations, project work and interesting engineering problems."
    >
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <form
          onSubmit={onSubmit}
          className="surface relative overflow-hidden rounded-2xl p-6 space-y-4 md:p-7"
        >
          <div
            aria-hidden
            className="absolute inset-x-8 top-0 h-px bg-[image:var(--gradient-brand)]"
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <Field id="name" label="Full Name" required />
            <Field id="email" type="email" label="Email" required />
          </div>
          <Field id="subject" label="Subject" required />
          <div>
            <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className="mt-1.5 w-full resize-none rounded-xl border border-border bg-background/35 px-4 py-3 text-sm transition focus:border-[var(--brand)] focus:outline-none"
              placeholder="Tell me about your project or opportunity..."
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[image:var(--gradient-brand)] px-5 py-3 font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition hover:-translate-y-0.5"
          >
            <Send className="size-4" /> {sent ? "Message sent" : "Send Message"}
          </button>
        </form>

        <div className="space-y-4">
          <ContactItem
            icon={Mail}
            title="Email"
            value="hasiranenuka20896@gmail.com"
            href={SOCIALS.email}
          />
          <ContactItem icon={Phone} title="Mobile" value="0729902000" href="tel:+94729902000" />
          <ContactItem
            icon={Github}
            title="GitHub"
            value="github.com/hasira-nenuka"
            href={SOCIALS.github}
          />
          <ContactItem
            icon={Linkedin}
            title="LinkedIn"
            value="linkedin.com/in/hasira"
            href={SOCIALS.linkedin}
          />
          <ContactItem
            icon={MapPin}
            title="Location"
            value="Maharagama, Sri Lanka"
            href="https://www.google.com/maps/search/?api=1&query=Maharagama%2C%20Sri%20Lanka"
          />
        </div>
      </div>
    </Section>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-xl border border-border bg-background/35 px-4 py-3 text-sm transition focus:border-[var(--brand)] focus:outline-none"
        placeholder={label}
      />
    </div>
  );
}

function ContactItem({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="surface group flex items-center gap-4 rounded-2xl p-5 card-hover hover:-translate-y-0.5 hover:border-[var(--brand)]/40">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)] transition group-hover:scale-105">
        <Icon className="size-5" />
      </span>
      <div className="min-w-0">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{title}</p>
        <p className="break-words font-medium">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}
