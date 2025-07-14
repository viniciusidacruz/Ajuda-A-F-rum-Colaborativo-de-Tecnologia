import Link from "next/link";
import Image from "next/image";

import { Button } from "@/shared/components/external";

import { HeaderMenu } from "./HeaderMenu";
import { HeaderUser } from "./HeaderUser";
import { HeaderFieldSearch } from "./HeaderSearch";

export const Header = () => (
  <header className="border-b border-b-gray-800">
    <div className="container mx-auto px-4 h-auto py-4 gap-6 md:py-0 md:h-16 flex flex-col md:flex-row items-center justify-between">
      <Link href="/">
        <Image src="/logo-png.png" alt="Ajuda Aí" width={100} height={100} />
      </Link>

      <div className="flex items-center gap-2">
        <HeaderFieldSearch className="md:min-w-md mr-8" />

        <Link href="/perguntar">
          <Button type="button" className="mx-8 hidden md:block">
            Fazer pergunta
          </Button>
        </Link>

        <HeaderUser />

        <HeaderMenu />
      </div>
    </div>
  </header>
);
