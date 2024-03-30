/* eslint-disable class-methods-use-this */
import request from "@api";
import { HTTPMethod } from "../types";
import { ListaApiParams } from "./types";
import { RootInterface } from "./types";

export class ListApi {
  async getList({ limit, currency }: ListaApiParams) {
    const params = new URLSearchParams();
    params.append("limit", String(limit));
    params.append("tsym", currency);
    const data = await request<RootInterface>(
      `/data/top/totalvolfull?${params.toString()}`,
      HTTPMethod.GET
    );
    return data;
  }
}
