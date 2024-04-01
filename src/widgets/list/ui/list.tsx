import React from "react";
import { Flex, ScrollArea } from "@mantine/core";
import { Coin } from "./coin";
import { ListI } from "@/entities/list/api/types";

type Props = {
  data: ListI | undefined;
  isLoading: boolean;
  isSuccess: boolean;
};

export const List = ({ data, isLoading, isSuccess }: Props) => {
  return (
    <ScrollArea
      h={600}
      offsetScrollbars
      scrollbarSize={3}
      scrollHideDelay={500}
    >
      <Flex gap="md" justify="center" direction="column" wrap="wrap">
        {isSuccess &&
          data?.result.map(({ id, icon, name, symbol, price }) => {
            return (
              <Coin
                key={id}
                price={String(price)}
                name={name}
                img={icon}
                change={symbol}
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
  );
};
