import { Card, Text } from "@mantine/core";
import Image from "next/image";
import React from "react";
import { Skeleton } from "@/shared/ui/skeletons";

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
      <Text size={"sm"} color="white">
        {name}
      </Text>
      <Text>$ {price}</Text>
      <Text>{change}</Text>
    </Card>
  );
};
