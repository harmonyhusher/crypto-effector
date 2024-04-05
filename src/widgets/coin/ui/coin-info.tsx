import React from "react";
import {
  IconCalendarWeek,
  IconClockHour12Filled,
  IconClockHour1Filled,
  IconBrandX,
  IconBrandTwitterFilled,
  IconLink,
} from "@tabler/icons-react";
import { Anchor, Flex, Group, List, Text, Title } from "@mantine/core";

import { tabs } from "@/entities/coin/lib/tabs";
import { ICoin } from "@/entities/coin/api/types";

interface Props extends ICoin {
  tab: string;
}

export const CoinInfo = ({
  tab,
  priceChange1h,
  priceChange1d,
  priceChange1w,
  redditUrl,
  twitterUrl,
  websiteUrl,
}: Props) => {
  return (
    <Flex
      gap="sm"
      mt={"sm"}
      justify="flex-start"
      align="flex-start"
      direction="column"
    >
      <Title>{tab}</Title>
      {tab === tabs[0].label && (
        <Group>
          <IconCalendarWeek />
          <Text c={priceChange1h < 0 ? "red" : "green"} fw={600}>
            {priceChange1h} %
          </Text>
          <IconClockHour1Filled />
          <Text c={priceChange1d < 0 ? "red" : "green"} fw={600}>
            {priceChange1d} %
          </Text>
          <IconClockHour12Filled />
          <Text c={priceChange1w < 0 ? "red" : "green"} fw={600}>
            {priceChange1w} %
          </Text>
        </Group>
      )}
      {tab === tabs[1].label && (
        <Group>
          {redditUrl && (
            <Anchor href={redditUrl} target="_blank" underline="never">
              <IconBrandX color="white" />{" "}
            </Anchor>
          )}
          {twitterUrl && (
            <Anchor href={twitterUrl} target="_blank" underline="never">
              <IconBrandTwitterFilled color="white" />{" "}
            </Anchor>
          )}
          {websiteUrl && (
            <Anchor href={websiteUrl} target="_blank" underline="never">
              <IconLink color="white" />{" "}
            </Anchor>
          )}
        </Group>
      )}
    </Flex>
  );
};
