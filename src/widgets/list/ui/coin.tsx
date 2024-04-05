import { Card, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { Skeleton } from "@/shared/ui/skeletons";
import { cutPrice } from "../lib/cutPrice";
import cs from "./List.module.scss";
import Link from "next/link";

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
    return <Skeleton type={"coin"} />;
  }

  return (
    <Link href={`/${coinId}`} target="_blank">
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
    </Link>
  );
};
