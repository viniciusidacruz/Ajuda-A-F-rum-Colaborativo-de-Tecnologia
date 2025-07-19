"use client";

import { useState } from "react";
import { useQueryState } from "nuqs";

export const useSearch = () => {
  const [params, setParams] = useQueryState("q", {
    defaultValue: "",
  });

  const [search, setSearch] = useState(params);

  const onSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParams(search);
  };

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return { search, onSubmitSearch, onChangeSearch };
};
