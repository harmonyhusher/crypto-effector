import React from "react";
import { Flex, Skeleton } from "@mantine/core";

export const CoinInfoSkeleton = () => {
  return (
    <Flex
      mih={50}
      gap="sm"
      justify="flex-start"
      align="flex-start"
      direction="column"
    >
      <Skeleton height={50} circle />
      <Skeleton height={8} radius="xl" width={200} />
      <Skeleton height={8} width="70%" radius="xl" />
    </Flex>
  );
};
