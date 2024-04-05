import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Tabs } from "@mantine/core";

import { CoinInfo } from "./coin-info";

import { tabs } from "@/entities/coin/lib/tabs";
import { ICoin } from "@/entities/coin/api/types";

type Props = {
  data: ICoin;
};

export const CoinTabs = ({ data }: Props) => {
  return (
    <Tabs activateTabWithKeyboard={false} defaultValue={tabs[0].label}>
      <Tabs.List>
        {tabs.map((item) => (
          <Tabs.Tab key={item.label} value={item.label}>
            {item.label}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {tabs.map((item) => {
        return (
          <Tabs.Panel value={item.label} key={item.label}>
            <AnimatePresence mode="wait">
              <motion.div
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
