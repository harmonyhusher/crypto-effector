import { ICoin } from "@/entities/coin/api/types";
import Image from "next/image";
import React from "react";

export const CoinImage = ({ icon }: Pick<ICoin, "icon">) => {
  return (
    <Image
      src={icon}
      alt="coin-image"
      width={248}
      height={248}
      quality={100}
      priority
    />
  );
};
