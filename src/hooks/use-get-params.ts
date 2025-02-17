"use client";

import { useSearchParams } from "next/navigation";

export const useGetParams = (): Record<string, string> => {
  const searchParams = useSearchParams();

  const paramsObject: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    paramsObject[key] = value;
  });
  return paramsObject;
};
