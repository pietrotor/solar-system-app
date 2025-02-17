import { fetchWithBaseUrl } from "@/lib/fetch-config";
import { ApiResponse, Planet } from "@/types";

export async function getPlanetByName({
  name,
}: {
  name: string;
}): Promise<ApiResponse<Planet>> {
  try {
    const res = await fetchWithBaseUrl(`/planets/${name}`, {
      cache: "reload",
      next: {
        revalidate: 5,
      },
    });

    return {
      response: res,
      error: res.error || false,
    };
  } catch (error) {
    console.log(error);
    return {
      response: null,
      error: true,
    };
  }
}
