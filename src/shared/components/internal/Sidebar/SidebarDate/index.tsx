import {
  Label,
  RadioGroup,
  RadioGroupItem,
} from "@/shared/components/external";
import { useFilterDate } from "@/shared/hooks";

export const SidebarDate = () => {
  const { date, onChangeDate } = useFilterDate();

  return (
    <div>
      <h4 className="mb-4 text-slate-500">Data</h4>

      <RadioGroup value={date} onValueChange={onChangeDate}>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="today" id="today" />
          <Label htmlFor="today">Hoje</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="week" id="week" />
          <Label htmlFor="week">Esta semana</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="month" id="month" />
          <Label htmlFor="month">Este mês</Label>
        </div>
        <div className="flex items-center gap-3">
          <RadioGroupItem value="all" id="all" />
          <Label htmlFor="all">Todos os tempos</Label>
        </div>
      </RadioGroup>
    </div>
  );
};
