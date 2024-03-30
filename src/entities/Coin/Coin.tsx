import { Card, Flex, Paper, Skeleton, Text, Title } from "@mantine/core";
import Image from "next/image";
import React from "react";
import cs from "./Coin.module.scss";

type Props = {
  price: string;
  img: string;
  change: string;
  name: string;
  bone: boolean;
};

export const Coin = ({ price, img, change, name, bone }: Partial<Props>) => {
  if (bone) {
    return (
      <>
        <Skeleton height={10} mt={6} radius="xl" />
        <Skeleton circle />
        <Skeleton height={8} mt={6} radius="xl" />
        <Skeleton height={8} mt={6} radius="xl" />
      </>
    );
  }

  return (
    <Card shadow="xs" radius="lg" p={"lg"} className={cs.card}>
      <Text size={"sm"}>{name}</Text>
      {/* <Image fill src={img} alt={name} /> */}
      <Text>{price}</Text>
    </Card>
  );
};
