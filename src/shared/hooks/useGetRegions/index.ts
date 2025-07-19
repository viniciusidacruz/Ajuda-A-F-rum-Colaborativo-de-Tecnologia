import { useQuery } from "@tanstack/react-query";

import { Region } from "@/shared/interfaces/region";

export const useGetRegions = () => {
  return useQuery({
    queryKey: ["regions"],
    queryFn: () =>
      fetch("http://localhost:4000/regions").then((res) =>
        res.json()
      ) as Promise<Region[]>,
    refetchOnWindowFocus: false,
    initialData: [],
  });
};
