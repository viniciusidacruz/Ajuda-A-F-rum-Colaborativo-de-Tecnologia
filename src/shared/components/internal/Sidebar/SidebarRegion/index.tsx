import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Skeleton,
} from "@/shared/components/external";
import { useGetRegions, useFilterRegion } from "@/shared/hooks";

export const SidebarRegion = () => {
  const { regionId, onChangeRegion } = useFilterRegion();
  const { data: regions, isFetching } = useGetRegions();

  const hasRegions = regions.length > 0;

  if (isFetching) {
    return (
      <div className="space-y-2 my-10">
        <Skeleton className="w-1/2 h-2" />

        <Skeleton className="w-full h-2" />
      </div>
    );
  }

  if (!hasRegions && !isFetching) return null;

  return (
    <div className="my-10">
      <h4 className="mb-4 text-slate-500">Regiões</h4>

      <Select value={regionId} onValueChange={onChangeRegion}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Selecione uma região" />
        </SelectTrigger>

        <SelectContent>
          {regions.map((region) => (
            <SelectItem key={region.id} value={region.id}>
              {region.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
