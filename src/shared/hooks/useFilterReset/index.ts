import { usePathname, useRouter } from "next/navigation";

export const useFilterReset = () => {
  const router = useRouter();
  const pathname = usePathname();

  const resetAllFilters = () => {
    router.replace(pathname);
  };

  return { resetAllFilters };
};
