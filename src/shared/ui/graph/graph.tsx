import React from "react";
import { LineChart } from "@mantine/charts";

import { GraphI } from "@/entities/graph/model/types";

export const LineGraph = ({
  data,
  series,
  settings,
  dataKey,
}: Omit<GraphI, "api">) => {
  return (
    <LineChart
      h={300}
      data={data}
      dataKey={dataKey}
      series={series}
      {...settings}
    />
  );
};
