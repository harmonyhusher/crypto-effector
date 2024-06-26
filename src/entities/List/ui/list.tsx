"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, Flex } from "@mantine/core";

import { ListApi } from "../api";

import { List } from "@/widgets/list";

const instance = new ListApi();

export const CoinsList = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => instance.getList({ limit: 20 }),
    queryKey: ["list"],
  });
  return (
    <Card withBorder>
      <Flex gap="md" direction="column" pt={"sm"} px={"sm"}>
        <List data={data} isSuccess={isSuccess} isLoading={isLoading} />
      </Flex>
    </Card>
  );
};
