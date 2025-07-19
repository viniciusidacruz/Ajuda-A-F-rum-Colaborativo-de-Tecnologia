import { Button, Checkbox } from "@/shared/components/external";
import { useFiltersMultiply, useGetTechnologies } from "@/shared/hooks";

import { SidebarGroupSkeleton } from "../SidebarGroupSkeleton";

export const SidebarTech = () => {
  const { selectedIds, onChangeFilters, onSubmitFilters } =
    useFiltersMultiply("techs");
  const { data: technologies, isFetching } = useGetTechnologies();
  const hasTechnologies = technologies.length > 0;

  if (isFetching) return <SidebarGroupSkeleton />;

  if (!hasTechnologies && !isFetching) return null;

  return (
    <div>
      <h4 className="mb-4 text-slate-500">Tecnologias</h4>

      <ul className="space-y-2">
        {technologies.map((technology) => (
          <li key={technology.id} className="text-sm flex items-center gap-2">
            <Checkbox
              id={technology.id}
              checked={selectedIds.includes(technology.id)}
              onCheckedChange={() => onChangeFilters(technology.id)}
            />
            <label htmlFor={technology.id}>{technology.name}</label>
            <span className="text-sm text-slate-500">({technology.count})</span>
          </li>
        ))}
      </ul>

      <Button
        type="button"
        disabled={isFetching}
        className="w-full mt-4"
        onClick={onSubmitFilters}
        aria-label="Aplicar filtros"
      >
        Aplicar
      </Button>
    </div>
  );
};
