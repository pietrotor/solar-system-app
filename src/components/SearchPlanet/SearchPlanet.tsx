"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Searchbar } from "@/components";
import { useGetParams, useUpdateSearchParams } from "@/hooks";
import debounce from "lodash.debounce";

export const SearchPlanet = () => {
  const searchParams = useSearchParams();
  const allSearchParams = useGetParams();
  const queryFromUrl = searchParams.get("filter");
  const updateSearchParams = useUpdateSearchParams();

  const [query, setQuery] = useState(queryFromUrl);
  const [querySearchParam, setQuerySearchParam] = useState(queryFromUrl);

  const onChangeQuerySearchParm = useMemo(
    () =>
      debounce((query: string) => {
        setQuerySearchParam(query);
      }, 400),
    []
  );

  const onChange = (value: string) => {
    setQuery(value);
    onChangeQuerySearchParm(value);
  };

  const onClear = () => {
    setQuery("");
    setQuerySearchParam("");
  };

  const updateUrlParams = useCallback(() => {
    updateSearchParams({
      ...allSearchParams,
      filter: querySearchParam,
      page: null,
    });
  }, [querySearchParam]);

  useEffect(() => {
    updateUrlParams();
  }, [querySearchParam, updateUrlParams]);

  return (
    <Searchbar
      value={query || ""}
      onChange={(value) => onChange(value)}
      placeholder="Buscar por: Nombre de planeta"
      onClear={onClear}
      className="!text-lg"
    />
  );
};
