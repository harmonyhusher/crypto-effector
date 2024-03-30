import { Card, Flex, Paper, Skeleton, Text, Title, useMantineTheme } from "@mantine/core";
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
        <Skeleton height={50} circle mb="xl" />
        <Skeleton height={8} radius="xl" />
        <Skeleton height={8} mt={6} radius="xl" />
        <Skeleton height={8} mt={6} width="70%" radius="xl" />
      </>
    );
  }

  return (
    <Card shadow="xs" radius="lg" p={"lg"} className={cs.card}>
      <Text size={"sm"}>{name}</Text>
      {img && <Image fill src={img!} alt={name!} />}
      <Text>{price}</Text>
    </Card>
  );
};
