"use client";

import { useState } from "react";
import { useQueryState } from "nuqs";

export const useFiltersMultiply = (queryKey: string) => {
  const [params, setParams] = useQueryState(queryKey, {
    defaultValue: "",
  });

  const paramsValid = params.split(",").filter((id) => id.length > 0);
  const [selectedIds, setSelectedIds] = useState<string[]>(paramsValid);

  const onChangeFilters = (id: string) => {
    setSelectedIds((prevIds) => {
      const alreadySelected = prevIds.includes(id);

      if (alreadySelected) {
        return prevIds.filter((prevId) => prevId !== id);
      }

      return [...prevIds, id];
    });
  };

  const onSubmitFilters = () => {
    setParams(selectedIds.join(","));
  };

  return {
    selectedIds,
    onChangeFilters,
    onSubmitFilters,
    params: params.split(","),
  };
};
