import { fetchWithBaseUrl } from "@/lib/fetch-config";
import { GenericApiResponse, Planet } from "@/types";

export async function getPlanets({
  filter = "",
  page = 1,
  sort = "",
}: {
  filter?: string;
  page?: number;
  sort?: string;
}): Promise<GenericApiResponse<Planet>> {
  try {
    const res = await fetchWithBaseUrl(
      `/planets?filter=${filter}&page=${page}&sort=${sort}`,
      {
        cache: "reload",
        next: {
          revalidate: 5,
        },
      }
    );

    console.log({ res });

    return {
      response: res,
      error: false,
    };
  } catch (error) {
    console.log(error);
    return {
      response: {
        limit: 0,
        page: 0,
        results: [],
        total: 0,
        totalPages: 0,
      },
      error: true,
    };
  }
}
