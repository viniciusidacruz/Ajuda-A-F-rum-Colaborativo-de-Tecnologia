import Link from "next/link";
import { Filter } from "lucide-react";

import * as CE from "@/shared/components/external";
import * as CI from "@/shared/components/internal";

export const SubHeader = () => (
  <div className="flex w-full items-center gap-4 md:hidden mb-8">
    <CE.Sheet>
      <CE.SheetTrigger asChild>
        <CE.Button type="button" variant="secondary">
          Filtros
          <Filter />
        </CE.Button>
      </CE.SheetTrigger>

      <CE.SheetContent className="px-4">
        <CE.SheetHeader className="w-full px-0">
          <CE.SheetTitle>Filtros</CE.SheetTitle>
          <CE.SheetDescription>
            Filtre os resultados da sua busca
          </CE.SheetDescription>
        </CE.SheetHeader>

        <CE.ScrollArea className="h-[calc(100vh-150px)]">
          <CI.FilterTech />
          <CI.FilterRegion />
          <CI.FilterDate />
          <CI.FilterStatus />
        </CE.ScrollArea>
      </CE.SheetContent>
    </CE.Sheet>

    <Link href="/fazer-perguntar" className="w-full">
      <CE.Button type="button" className="w-full">
        Fazer pergunta
      </CE.Button>
    </Link>
  </div>
);
