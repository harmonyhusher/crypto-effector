"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";

import { CoinApi } from "../api";

import { CoinTabs } from "@/widgets/coin/ui/tabs";
import { CoinImage } from "@/widgets/coin/ui/coin-image";
import { SkeletonVariant } from "@/shared/ui/skeletons/Skeleton";
import { Skeleton } from "@/shared/ui/skeletons";

const instance = new CoinApi();

export const Coin = ({ coin }: { coin: string }) => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => instance.getCoin(coin as string),
    queryKey: [`${coin as string}`],
  });

  if (isLoading) {
    return <Skeleton type={SkeletonVariant.COIN_INFO} />;
  }

  return (
    isSuccess && (
      <React.Fragment>
        <CoinImage icon={data.icon} />
        <CoinTabs data={data} />
      </React.Fragment>
    )
  );
};
