"use client";

import * as CI from "@/shared/components/internal";

export const Sidebar = () => {
  return (
    <aside className="w-80 h-full bg-background border border-slate-800 px-8 py-10 hidden md:block rounded-lg">
      <h3 className="text-lg font-medium mb-8">Filtros</h3>

      <CI.FilterTech />
      <CI.FilterRegion />
      <CI.FilterDate />
      <CI.FilterStatus />
    </aside>
  );
};
