import { createFileRoute } from "@tanstack/react-router";
import { GitHubShowcase } from "@/components/portfolio/GitHubShowcase";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const Route = createFileRoute("/github")({
  component: GitHubPage,
});

function GitHubPage() {
  return (
    <PortfolioPage>
      <GitHubShowcase />
    </PortfolioPage>
  );
}
