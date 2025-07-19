"use client";

import { useQuery } from "@tanstack/react-query";

import { Technology } from "@/shared/interfaces/technology";

export const useGetTechnologies = () => {
  return useQuery({
    queryKey: ["technologies"],
    queryFn: () =>
      fetch("http://localhost:4000/technologies").then((res) =>
        res.json()
      ) as Promise<Technology[]>,
    refetchOnWindowFocus: false,
    initialData: [],
  });
};
