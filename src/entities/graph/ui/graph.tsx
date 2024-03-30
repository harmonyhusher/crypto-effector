import React from "react";
import { GraphApi } from "../api";
import { useQuery } from "@tanstack/react-query";
import { Card, Flex } from "@mantine/core";
import { LineGraph } from "@/shared/ui/graph";

const instance = new GraphApi();

export const Graph = () => {
  const { data, isLoading, isSuccess } = useQuery({
    queryFn: () => instance.getGraphData(),
    queryKey: ["graph"],
  });

  return (
    <Card withBorder padding={"xs"}>
      <Flex gap="md" direction="column" wrap="wrap" p={"sm"}>
        {isSuccess && (
          <LineGraph
            settings={{ curveType: "linear", gridAxis: "xy", tickLine: "xy" }}
            data={data.Data.Data}
            dataKey="time"
            series={[]}
          />
        )}
      </Flex>
    </Card>
  );
};
