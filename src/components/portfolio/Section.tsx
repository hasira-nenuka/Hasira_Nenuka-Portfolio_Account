import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl md:mb-12"
        >
          {eyebrow && (
            <span className="mb-3 inline-flex rounded-full border border-white/10 bg-white/[0.055] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--brand)] shadow-[0_10px_30px_-22px_var(--brand)]">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">{title}</h2>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              {subtitle}
            </p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
