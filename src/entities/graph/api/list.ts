/* eslint-disable class-methods-use-this */
import { GraphI, GraphIParams } from "./types";

import { HTTPAuth, HTTPMethod } from "@/shared/api/types";
import request from "@/shared/api/api";

export class GraphApi {
  async getGraphData({ coinId, period }: GraphIParams) {
    const params = new URLSearchParams();
    period && params.append("period", period);
    const data = await request<GraphI>(
      `/coins/${coinId}/charts?${params.toString()}`,
      HTTPMethod.GET,
      HTTPAuth.XAPIKEY
    );
    return data;
  }
}
