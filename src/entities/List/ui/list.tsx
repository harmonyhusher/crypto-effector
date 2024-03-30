"use client";
import React from "react";
import { Card, Flex } from "@mantine/core";
import { Input } from "@/shared/ui/Input";
import { useQuery } from "@tanstack/react-query";
import { ListApi } from "../api";
import { List } from "@/widgets/list";

const instance = new ListApi();

export const CoinsList = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => instance.getList({ limit: 20 }),
    queryKey: ["list"],
  });
  return (
    <Card withBorder padding={"xs"}>
      <Flex gap="md" direction="column" wrap="wrap" p={"sm"}>
        <Input />
        <List data={data} isSuccess={isSuccess} isLoading={isLoading} />
      </Flex>
    </Card>
  );
};