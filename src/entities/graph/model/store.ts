import { createStore } from "effector";
import { changeApi, changeSettings } from "./events";
import { GraphI } from "./types";

const initState: GraphI = {
  data: [],
  series: [],
  dataKey: "",
  api: {
    coinId: "bitcoin",
    period: "all",
  },
  settings: {
    curveType: "linear",
    tickLine: "xy",
    gridAxis: "xy",
  },
};

export const $storeGraph = createStore(initState)
  .on(changeSettings, (state, settings) => ({
    ...state,
    settings: { ...state.settings, ...settings },
  }))
  .on(changeApi, (state, api) => ({
    ...state,
    api: { ...state.api, ...api },
  }));
