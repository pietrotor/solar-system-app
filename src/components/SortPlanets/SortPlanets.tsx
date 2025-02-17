"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { Select } from "@/components";
import { useGetParams, useUpdateSearchParams } from "@/hooks";
import { SORT_TYPES } from "@/constants";

const SORT_OPTIONS = [
  { value: "", label: "Sin orden" },
  { value: SORT_TYPES.ASC, label: "Ascedente" },
  { value: SORT_TYPES.DESC, label: "Descendente" },
];

export const SortPlanets = () => {
  const updateSearchParams = useUpdateSearchParams();
  const searchParams = useSearchParams();
  const allSearchParams = useGetParams();
  const sortFromUrl = searchParams.get("sort");

  const [sortBy, setSortBy] = useState(sortFromUrl);

  const onChange = (value: string) => {
    setSortBy(value);
    updateSearchParams({
      ...allSearchParams,
      sort: value,
    });
  };

  return (
    <div className="md:w-64 w-full">
      <Select
        value={sortBy || ""}
        options={SORT_OPTIONS}
        onChange={(value) => onChange(value)}
        className="!text-lg"
      />
    </div>
  );
};
