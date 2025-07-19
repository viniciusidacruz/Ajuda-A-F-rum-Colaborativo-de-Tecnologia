import { Skeleton } from "@/shared/components/external";

import { SidebarGroupSkeletonProps } from "./types";

export const SidebarGroupSkeleton = ({
  className = "",
}: SidebarGroupSkeletonProps) => {
  return (
    <div className={className}>
      <Skeleton className="w-1/2 h-2" />

      <div className="space-y-2 mt-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <Skeleton key={index} className="w-full h-2" />
        ))}
      </div>
    </div>
  );
};
