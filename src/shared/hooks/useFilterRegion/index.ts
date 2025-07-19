"use client";

import { useState } from "react";
import { useQueryState } from "nuqs";

export const useFilterRegion = () => {
  const [params, setParams] = useQueryState("region", {
    defaultValue: "",
  });

  const [regionId, setRegionId] = useState<string>(params);

  const onChangeRegion = (id: string) => {
    setRegionId(id);
    setParams(id);
  };

  return { regionId, onChangeRegion };
};
