import { notFound } from "next/navigation";

import { getPlanetByName } from "@/services";
import { PageContainer, PlanetDetail } from "@/components";
import { PlanetDetailAnimation } from "@/components/PlanetDetail/PlanetDetailAnimation";
import { Metadata } from "next";

interface Props {
  params: Promise<{
    name: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params;

  const planet = await getPlanetByName({ name });

  return {
    title: planet?.response?.name ?? "planeta no encontrado",
    description: planet?.response?.resume ?? "",
    openGraph: {
      title: planet?.response?.name ?? "planeta no encontrado",
      description: planet?.response?.resume ?? "",
      images: [planet?.response?.images?.png || ""],
    },
  };
}

export default async function PlanetDetailPage({ params }: Props) {
  const { name } = await params;
  const { error, response: planet } = await getPlanetByName({ name });

  if (error || !planet) {
    return notFound();
  }

  return (
    <PlanetDetailAnimation>
      <PageContainer className="grid md:grid-cols-2 gap-9 md:h-screen items-center">
        <PlanetDetail planet={planet} />
      </PageContainer>
    </PlanetDetailAnimation>
  );
}
