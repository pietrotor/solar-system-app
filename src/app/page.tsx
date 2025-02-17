import {
  NoResults,
  PageContainer,
  Pagination,
  Planet,
  SearchPlanet,
  SortPlanets,
} from "@/components";
import { getPlanets } from "@/services";

export default async function PlanetsPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string; page?: string; sort?: string }>;
}) {
  const { page, filter, sort } = (await searchParams) || {};

  const { response } = await getPlanets({
    page: Number(page || 1),
    filter,
    sort,
  });

  const { results: planets } = response;

  return (
    <PageContainer className="py-8">
      <h1>SISTEMA SOLAR</h1>
      <div className="mt-6 flex justify-between md:flex-row flex-col gap-3">
        <SearchPlanet />
        <SortPlanets />
      </div>
      {filter && !planets.length ? (
        <NoResults />
      ) : (
        <>
          <section className="grid md:grid-cols-2 xl:grid-cols-3 mt-12 gap-8">
            {planets.map((planet) => (
              <Planet
                name={planet.name}
                resume={planet.resume}
                photo={planet.images.png}
                key={planet.id}
                id={planet.id}
                temperature={planet.features.temperature}
                gravity={planet.features.gravity}
              />
            ))}
          </section>
          <Pagination totalPages={response.totalPages} />
        </>
      )}
    </PageContainer>
  );
}
