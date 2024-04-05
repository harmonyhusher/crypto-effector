import React from "react";
import { Skeleton } from "@mantine/core";

export const SkeletonProvider = ({ children }: React.PropsWithChildren) => {
  return <Skeleton>{children}</Skeleton>;
};
