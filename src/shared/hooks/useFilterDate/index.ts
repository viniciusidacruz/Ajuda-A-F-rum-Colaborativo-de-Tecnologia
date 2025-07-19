"use client";

import { useState } from "react";

import { useQueryState } from "nuqs";

export const useFilterDate = () => {
  const [params, setParams] = useQueryState("date", {
    defaultValue: "today",
  });
  const [date, setDate] = useState<string>(params);

  const onChangeDate = (date: string) => {
    setDate(date);
    setParams(date);
  };

  return { date, onChangeDate };
};
