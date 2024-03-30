/* eslint-disable class-methods-use-this */
import request from "@/shared/api/api";
import { HTTPAuth, HTTPMethod } from "../../../shared/api/types";
import { GraphI } from "./types";

export class GraphApi {
  async getGraphData() {
    const params = new URLSearchParams();
    params.append("api_key", process.env.TOKEN as string);
    const data = await request<GraphI>(
      `/data/social/coin/histo/day?${params.toString()}`,
      HTTPMethod.GET,
      HTTPAuth.XAPIKEY,
    );
    return data;
  }
}
