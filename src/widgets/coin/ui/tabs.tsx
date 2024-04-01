import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Flex, Group, Tabs, Text } from "@mantine/core";
import { ICoin } from "@/entities/coin/api/types";
import { CoinInfo } from "./coin-info";

type Props = {
  tabs: {
    label: string;
  }[];
  setSelectedTab: (item: any) => void;
  selectedTab: {
    label: string;
  };
  data: ICoin;
};

export const CoinTabs = ({
  tabs,
  setSelectedTab,
  selectedTab,
  data,
}: Props) => {
  return (
    <Tabs
      activateTabWithKeyboard={false}
      defaultValue={tabs[0].label}
      variant="outline"
    >
      <Tabs.List>
        {tabs.map((item) => (
          <Tabs.Tab key={item.label} value={item.label}>
            {item.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {tabs.map((item) => {
        return (
          <Tabs.Panel value={item.label}>
            <AnimatePresence mode="wait">
              <motion.div
                key={item.label}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <CoinInfo tab={item.label} {...data} />
              </motion.div>
            </AnimatePresence>
          </Tabs.Panel>
        );
      })}
    </Tabs>
  );
};
