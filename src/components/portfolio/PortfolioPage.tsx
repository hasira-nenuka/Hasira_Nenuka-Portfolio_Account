import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Loader } from "./Loader";
import { Navbar } from "./Navbar";

export function PortfolioPage({
  children,
  contentClassName = "pt-16 md:pt-[4.75rem]",
}: {
  children: ReactNode;
  contentClassName?: string;
}) {
  return (
    <main className="page-shell relative min-h-dvh overflow-hidden">
      <Loader />
      <Navbar />
      <div className={contentClassName}>{children}</div>
      <Footer />
    </main>
  );
}
