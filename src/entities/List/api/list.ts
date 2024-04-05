/* eslint-disable class-methods-use-this */
import { HTTPAuth, HTTPMethod } from "../../../shared/api/types";

import { ListI, Meta } from "./types";

import request from "@/shared/api/api";

export class ListApi {
  async getList({ limit, page = 1 }: Partial<Meta>) {
    const params = new URLSearchParams();
    params.append("limit", String(limit));
    params.append("page", String(page));
    const data = await request<ListI>(
      `/coins?${params.toString()}`,
      HTTPMethod.GET,
      HTTPAuth.XAPIKEY
    );
    return data;
  }
}
