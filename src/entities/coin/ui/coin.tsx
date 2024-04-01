"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { CoinApi } from "../api";
import { useParams, useRouter } from "next/navigation";
import { CoinImage } from "@/widgets/coin/ui/coin-image";
import { CoinTabs } from "@/widgets/coin/ui/tabs";
import { tabs } from "../lib/tabs";

const instance = new CoinApi();

export const Coin = () => {
  const router = useRouter();
  const { coin } = useParams();
  const [selectedTab, setSelectedTab] = React.useState(tabs[0]);
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => instance.getCoin(coin as string),
    queryKey: [`${coin}`],
  });
  return (
    isSuccess && (
      <>
        <CoinImage icon={data.icon} />
        <CoinTabs
          data={data}
          tabs={tabs}
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
      </>
    )
  );
};
