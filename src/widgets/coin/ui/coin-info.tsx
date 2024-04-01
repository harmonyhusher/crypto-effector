import { ICoin } from "@/entities/coin/api/types";
import { tabs } from "@/entities/coin/lib/tabs";
import { Group, Text, Title } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface Props extends ICoin {
  tab: string;
}

export const CoinInfo = ({ tab, ...props }: Props) => {
  return (
    <React.Fragment>
      <h1>{tab}</h1>
      {tab === tabs[0].label && (
        <Group>
          <Text>{props.name}</Text>
          <Text>{props.price}</Text>
          <Text>{props.price}</Text>
        </Group>
      )}
      {tab === tabs[1].label && (
        <Group>
          <Text>{props.name}</Text>
          <Text>{props.price}</Text>
          <Text>{props.price}</Text>
        </Group>
      )}
      {tab === tabs[2].label && (
        <Group>
          <Text>{props.name}</Text>
          <Text>{props.price}</Text>
          <Text>{props.price}</Text>
        </Group>
      )}
    </React.Fragment>
  );
};
