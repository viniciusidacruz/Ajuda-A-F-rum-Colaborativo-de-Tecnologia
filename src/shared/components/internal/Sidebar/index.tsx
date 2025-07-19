"use client";

import { SidebarTech } from "./SidebarTech";
import { SidebarDate } from "./SidebarDate";
import { SidebarRegion } from "./SidebarRegion";
import { SidebarStatus } from "./SidebarStatus";

export const Sidebar = () => {
  return (
    <aside className="w-80 h-full bg-background border border-slate-800 px-8 py-10 hidden md:block rounded-lg">
      <h3 className="text-lg font-medium mb-8">Filtros</h3>

      <SidebarTech />
      <SidebarRegion />
      <SidebarDate />
      <SidebarStatus />
    </aside>
  );
};
