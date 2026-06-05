import { useEffect, useState } from "react";

export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 900);
    return () => clearTimeout(t);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity">
      <div className="surface flex min-w-48 flex-col items-center gap-4 rounded-2xl p-6">
        <div className="relative size-14">
          <div className="absolute inset-0 rounded-2xl border border-[var(--brand)]/30" />
          <div className="absolute inset-2 rounded-xl border border-[var(--brand-2)]/35" />
          <div className="absolute inset-0 rounded-2xl border-2 border-transparent border-t-[var(--brand)] border-r-[var(--brand-2)] animate-spin" />
        </div>
        <p className="text-sm font-semibold uppercase tracking-widest gradient-text">
          Loading Portfolio
        </p>
      </div>
    </div>
  );
}
