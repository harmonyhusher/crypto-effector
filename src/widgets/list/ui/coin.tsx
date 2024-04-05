import React from "react";
import Image from "next/image";
import { Card, HoverCard, Text } from "@mantine/core";

import { cutPrice } from "../lib/cutPrice";

import cs from "./List.module.scss";

import { SkeletonVariant } from "@/shared/ui/skeletons/Skeleton";
import { Skeleton } from "@/shared/ui/skeletons";
import { Coin as CoinInfo } from "@/entities/coin";

type Props = {
  price: string;
  img: string;
  change: string;
  name: string;
  bone: boolean;
  coinId: string;
};

export const Coin = ({
  price,
  img,
  change,
  name,
  bone,
  coinId,
}: Partial<Props>) => {
  if (bone) {
    return <Skeleton type={SkeletonVariant.COIN} />;
  }

  return (
    <HoverCard shadow="md" closeDelay={400} withArrow closeOnClickOutside position="right">
      <HoverCard.Target>
        <Card shadow="sm" radius="lg" className={cs.card}>
          {img && <Image width={48} height={48} src={img!} alt={name!} />}
          <Text size={"sm"} mt={"sm"}>
            {name}
          </Text>
          <Text
            size={"xl"}
            fw={900}
            variant={"gradient"}
            gradient={{ from: "#e2e2e2", to: "cyan", deg: 90 }}
          >
            $ {price && cutPrice(price as string)}
          </Text>
          <Text
            size="sm"
            fw={500}
            variant="gradient"
            gradient={{ from: "white", to: "black", deg: 120 }}
          >
            {change}
          </Text>
        </Card>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        {coinId && <CoinInfo coin={coinId as string} />}
      </HoverCard.Dropdown>
    </HoverCard>
  );
};
