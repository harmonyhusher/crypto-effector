import { useUnit } from "effector-react";
import { useQuery } from "@tanstack/react-query";
import { Card, Flex } from "@mantine/core";

import { $storeGraph } from "../model/store";
import { GraphApi } from "../api";

import { Settings } from "./settings";

import { LineGraph } from "@/shared/ui/graph";

const instance = new GraphApi();

export const Graph = () => {
  const [storeGraph] = useUnit([$storeGraph]); // useStore is deprecated

  const { data, isSuccess } = useQuery({
    queryFn: () => instance.getGraphData(storeGraph.api),
    queryKey: ["graph"],
  });

  console.log(data);

  return (
    <Card withBorder padding={"xs"}>
      <Flex gap="md" direction="column" wrap="wrap" p={"sm"}>
        <Settings onClick={() => {}} />
        {/* {isSuccess && (
          <LineGraph
            settings={{ ...storeGraph.settings }}
            data={data}
            dataKey={data.timestamp}
            series={[{name: storeGraph.api.coinId, color: 'grey.6'}]}
          />
        )} */}
      </Flex>
    </Card>
  );
};
