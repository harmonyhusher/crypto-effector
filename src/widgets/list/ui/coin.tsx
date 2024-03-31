import { Card, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { Skeleton } from "@/shared/ui/skeletons";
import { cutPrice } from "../lib/cutPrice";

type Props = {
  price: string;
  img: string;
  change: string;
  name: string;
  bone: boolean;
};

export const Coin = ({ price, img, change, name, bone }: Partial<Props>) => {
  if (bone) {
    return <Skeleton type={"coin"} />;
  }

  return (
    <Card shadow="xs" radius="lg" p={"lg"}>
      {img && <Image width={48} height={48} src={img!} alt={name!} />}
      <Text size={"sm"} mt={'sm'}>
        {name}
      </Text>
      <Text
        size="xl"
        fw={900}
        variant="gradient"
        gradient={{ from: "#e2e2e2", to: "cyan", deg: 90 }}
      >
        $ {cutPrice(price as string)}
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
  );
};
