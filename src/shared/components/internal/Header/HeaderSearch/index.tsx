"use client";

import { Suspense } from "react";
import { Search } from "lucide-react";

import { cn } from "@/shared/lib";
import { useSearch } from "@/shared/hooks";

import { HeaderFieldSearchProps } from "./types";

const HeaderFieldSearchContent = ({
  className = "",
}: HeaderFieldSearchProps) => {
  const { search, onSubmitSearch, onChangeSearch } = useSearch();

  return (
    <form
      onSubmit={onSubmitSearch}
      className={cn(
        "flex items-center gap-2 bg-slate-800 py-2 px-4 rounded-md w-full",
        className
      )}
    >
      <input
        type="search"
        value={search}
        aria-label="Pesquisar"
        placeholder="Pesquisar"
        onChange={onChangeSearch}
        className="w-full outline-none border-none bg-transparent flex-1"
      />

      <button type="submit">
        <Search size={16} />
      </button>
    </form>
  );
};

export const HeaderFieldSearch = (props: HeaderFieldSearchProps) => {
  return (
    <Suspense>
      <HeaderFieldSearchContent {...props} />
    </Suspense>
  );
};
