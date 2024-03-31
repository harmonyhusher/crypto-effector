import { GraphApi } from "../api";
import { useQuery } from "@tanstack/react-query";
import { Card, Flex } from "@mantine/core";
import { LineGraph } from "@/shared/ui/graph";
import { useUnit } from "effector-react";
import { $storeGraph } from "../model/store";
import { Settings } from "./settings";

const instance = new GraphApi();

export const Graph = () => {
  const storeGraph = useUnit($storeGraph); // useStore is deprecated

  const { data, isSuccess } = useQuery({
    queryFn: () => instance.getGraphData(storeGraph.api),
    queryKey: ["graph"],
  });

  console.log(data);

  return (
    <Card withBorder padding={"xs"}>
      <Flex gap="md" direction="column" wrap="wrap" p={"sm"}>
        <Settings onClick={() => {}} />
        {isSuccess && (
          <LineGraph
            settings={{ ...storeGraph.settings }}
            data={data}
            dataKey={data.timestamp}
            series={data}
          />
        )}
      </Flex>
    </Card>
  );
};
