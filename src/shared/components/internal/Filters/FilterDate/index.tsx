"use client";

import { useFilterDate } from "@/shared/hooks";
import { FILTER_DATES } from "@/shared/constants";
import * as CE from "@/shared/components/external";

export const FilterDate = () => {
  const { date, onChangeDate } = useFilterDate();

  return (
    <div>
      <h4 className="mb-4 text-slate-500">Data</h4>

      <CE.RadioGroup value={date} onValueChange={onChangeDate}>
        {FILTER_DATES.map((filter) => (
          <div key={filter.id} className="flex items-center gap-3">
            <CE.RadioGroupItem value={filter.id} id={filter.id} />
            <CE.Label htmlFor={filter.id}>{filter.label}</CE.Label>
          </div>
        ))}
      </CE.RadioGroup>
    </div>
  );
};
