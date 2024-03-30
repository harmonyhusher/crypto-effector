"use client";
import React from "react";
import { Currency } from "@components/shared/api/list/types";
import { Flex, Group } from "@mantine/core";
import { ListApi } from "@components/shared/api/list";
import { Input } from "@components/shared/Input";
import { useQuery } from "@tanstack/react-query";
import cs from "./CoinList.module.scss";
import { List } from "@components/entities/List";

const instance = new ListApi();

export const CoinList = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => instance.getList({ limit: 20, currency: Currency.USD }),
    queryKey: ["list"],
  });
  return (
    <Group className={cs.group}>
      <Flex gap="md" direction="column" wrap="wrap" p={'sm'}>
        <Input />
        <List data={data} isSuccess={isSuccess} isLoading={isLoading} />
      </Flex>
    </Group>
  );
};
