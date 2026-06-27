import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/portfolio/About";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <PortfolioPage>
      <About />
    </PortfolioPage>
  );
}
