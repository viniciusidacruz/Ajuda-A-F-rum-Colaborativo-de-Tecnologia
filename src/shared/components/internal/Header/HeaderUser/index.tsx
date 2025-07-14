import { Fragment } from "react";

import { Avatar, AvatarFallback } from "@/shared/components/external";

export const HeaderUser = () => {
  const isAuthenticated = false;

  if (!isAuthenticated) return null;

  return (
    <Fragment>
      <Avatar>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </Fragment>
  );
};
