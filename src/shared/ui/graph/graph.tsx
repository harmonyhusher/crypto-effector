import React from "react";
import {
  LineChart,
  LineChartCurveType,
  LineChartSeries,
} from "@mantine/charts";

type TickOrGrid = "xy" | "x" | "y" | "none" | undefined;

type Props = {
  data: Record<string, any>[];
  series: LineChartSeries[];
  dataKey: string;
  settings: {
    curveType: LineChartCurveType;
    tickLine: TickOrGrid;
    gridAxis: TickOrGrid;
  };
};

export const LineGraph = ({ data, series, settings, dataKey }: Props) => {
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
