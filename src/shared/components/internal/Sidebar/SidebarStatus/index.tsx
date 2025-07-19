import { FILTER_STATUS } from "@/shared/constants";
import { useFilterReset, useFiltersMultiply } from "@/shared/hooks";
import { Button, Checkbox } from "@/shared/components/external";

export const SidebarStatus = () => {
  const { selectedIds, onChangeFilters, onSubmitFilters } =
    useFiltersMultiply("status");
  const { resetAllFilters } = useFilterReset();

  return (
    <div className="my-10">
      <h4 className="mb-4 text-slate-500">Status</h4>

      <ul className="space-y-2">
        {FILTER_STATUS.map((status) => (
          <li key={status.id} className="text-sm flex items-center gap-2">
            <Checkbox
              id={status.id}
              checked={selectedIds.includes(status.id)}
              onCheckedChange={() => onChangeFilters(status.id)}
            />
            <label htmlFor={status.id}>{status.name}</label>
          </li>
        ))}
      </ul>

      <Button
        type="button"
        className="w-full mt-4"
        onClick={onSubmitFilters}
        aria-label="Aplicar filtros"
      >
        Aplicar
      </Button>

      <Button
        type="button"
        className="w-full mt-4"
        variant="outline"
        onClick={resetAllFilters}
      >
        Limpar filtros
      </Button>
    </div>
  );
};
