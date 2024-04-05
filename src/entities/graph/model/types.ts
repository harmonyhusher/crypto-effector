import { LineChartCurveType, LineChartSeries } from "@mantine/charts";

import { GraphIParams } from "../api/types";

type TickOrGrid = "xy" | "x" | "y" | "none" | undefined;

export interface GraphI {
  data: Record<string, any>[];
  series: LineChartSeries[];
  dataKey: string;
  api: GraphIParams;
  settings: {
    curveType: LineChartCurveType;
    tickLine: TickOrGrid;
    gridAxis: TickOrGrid;
  };
}
