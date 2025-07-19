"use client";

import * as CE from "@/shared/components/external";
import { useGetRegions, useFilterRegion } from "@/shared/hooks";

export const FilterRegion = () => {
  const { regionId, onChangeRegion } = useFilterRegion();
  const { data: regions, isFetching } = useGetRegions();

  const hasRegions = regions.length > 0;

  if (isFetching) {
    return (
      <div className="space-y-2 my-10">
        <CE.Skeleton className="w-1/2 h-2" />

        <CE.Skeleton className="w-full h-2" />
      </div>
    );
  }

  if (!hasRegions && !isFetching) return null;

  return (
    <div className="my-10">
      <h4 className="mb-4 text-slate-500">Regiões</h4>

      <CE.Select value={regionId} onValueChange={onChangeRegion}>
        <CE.SelectTrigger className="w-full">
          <CE.SelectValue placeholder="Selecione uma região" />
        </CE.SelectTrigger>

        <CE.SelectContent>
          {regions.map((region) => (
            <CE.SelectItem key={region.id} value={region.id}>
              {region.name}
            </CE.SelectItem>
          ))}
        </CE.SelectContent>
      </CE.Select>
    </div>
  );
};
