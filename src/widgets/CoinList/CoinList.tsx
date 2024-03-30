"use client";
import React from "react";
import { Currency } from "@/shared/api/list/types";
import { Box, Card, Flex } from "@mantine/core";
import { ListApi } from "@/shared/api/list";
import { Input } from "@/shared/UIKit/Input";
import { useQuery } from "@tanstack/react-query";
import cs from "./CoinList.module.scss";
import { List } from "@/entities/List";

const instance = new ListApi();

export const CoinList = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => instance.getList({ limit: 20, currency: Currency.USD }),
    queryKey: ["list"],
  });
  return ( 
    <Box maw={300}>
      <Card withBorder padding={'xs'}>
        <Flex gap="md" direction="column" wrap="wrap" p={'sm'}>
          <Input />
          <List data={data} isSuccess={isSuccess} isLoading={isLoading} />
        </Flex>
      </Card>
    </Box>
  );
};
