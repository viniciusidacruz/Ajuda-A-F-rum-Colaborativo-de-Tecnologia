import { ChevronDown } from "lucide-react";

import * as CE from "@/shared/components/external";
import { Button } from "@/shared/components/external";
import Link from "next/link";

export const HeaderMenu = () => {
  const isAuthenticated = false;

  return isAuthenticated ? (
    <CE.DropdownMenu>
      <CE.DropdownMenuTrigger asChild>
        <button type="button" aria-label="Abrir menu">
          <ChevronDown size={16} />
        </button>
      </CE.DropdownMenuTrigger>

      <CE.DropdownMenuContent>
        <CE.DropdownMenuItem>
          <button
            type="button"
            aria-label="Sair"
            className="text-center w-full"
          >
            Sair
          </button>
        </CE.DropdownMenuItem>
      </CE.DropdownMenuContent>
    </CE.DropdownMenu>
  ) : (
    <Link href="/entrar">
      <Button type="button" variant="outline">
        Entrar
      </Button>
    </Link>
  );
};
