export const BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL!;

export async function fetchWithBaseUrl(
  endpoint: string,
  options: RequestInit = {}
) {
  const url = `${BASE_URL}${endpoint}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      "Content-Type": "application/json",
    },
  });

  // if (!res.ok) throw new Error(`Error en la solicitud: ${res.statusText}`);

  return res.json();
}
