import React from "react";
import { Skeleton } from "@mantine/core";

export const CoinSkeleton = () => {
  return (
    <React.Fragment>
      <Skeleton height={50} circle />
      <Skeleton height={8} radius="xl" />
      <Skeleton height={8} radius="xl" />
      <Skeleton height={8} width="70%" radius="xl" />
    </React.Fragment>
  );
};
