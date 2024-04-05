import React from "react";
import Image from "next/image";

import { ICoin } from "@/entities/coin/api/types";

export const CoinImage = ({ icon }: Pick<ICoin, "icon">) => {
  return (
    <Image
      src={icon}
      alt="coin-image"
      sizes="100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1366px) 25vw, 20vw"
      width={64}
      height={64}
      quality={100}
      priority
    />
  );
};
