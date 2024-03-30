"use client";
import React from "react";
import { Currency } from "@components/app/api/list/types";
import { Flex, Group, ScrollArea } from "@mantine/core";
import { ListApi } from "@components/app/api/list";
import { Input } from "@components/shared/Input";
import { Coin } from "@components/entities/Coin";
import { useQuery } from "@tanstack/react-query";
import cs from "./CoinList.module.scss";

const instance = new ListApi();

export const CoinList = () => {
  const { data, isLoading, isError, isSuccess } = useQuery({
    queryFn: () => instance.getList({ limit: 20, currency: Currency.USD }),
    queryKey: ["list"],
  });
  return (
    <Group className={cs.group}>
      <Flex gap="md" direction="column" wrap="wrap" p={'sm'}>
        <Input />
        <ScrollArea
          h={550}
          offsetScrollbars
          scrollbarSize={3}
          scrollHideDelay={500}
        >
          <Flex gap="md" justify="center" direction="column" wrap="wrap">
            {data?.Data.map(({ CoinInfo, DISPLAY, RAW }) => {
              return (
                <Coin
                  key={CoinInfo.Id}
                  price={DISPLAY?.USD.PRICE}
                  name={CoinInfo.FullName}
                  img=""
                  change={DISPLAY?.USD?.CHANGE24HOUR}
                  bone={false}
                />
              );
            })}
          </Flex>

          {isLoading &&
            Array.from({ length: 10 }).map((_, index) => (
              <Coin key={index} bone={true} />
            ))}
        </ScrollArea>
      </Flex>
    </Group>
  );
};
