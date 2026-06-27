import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";
import { Projects } from "@/components/portfolio/Projects";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PortfolioPage>
      <Projects />
    </PortfolioPage>
  );
}
