/* eslint-disable class-methods-use-this */
import request from "@/shared/api/api";
import { HTTPAuth, HTTPMethod } from "../../../shared/api/types";
import { ICoin } from "./types";

export class CoinApi {
  async getCoin(coinId: string) {
    const data = await request<ICoin>(
      `/coins/${coinId}`,
      HTTPMethod.GET,
      HTTPAuth.XAPIKEY
    );
    return data;
  }
}
