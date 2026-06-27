import { createFileRoute } from "@tanstack/react-router";
import { Capabilities } from "@/components/portfolio/Capabilities";
import { PortfolioPage } from "@/components/portfolio/PortfolioPage";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PortfolioPage>
      <Capabilities />
    </PortfolioPage>
  );
}
