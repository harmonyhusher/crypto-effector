export interface GraphI {
  result: Result[];
  meta: Meta;
}

export interface GraphIParams {
  coinId: string;
  period: string
}

export interface Meta {
  page: number;
  limit: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

export interface Result {
  _created_at: string;
  _updated_at: string;
  exchange: string;
  from: string;
  to: string;
  pair: string;
  price: number;
  pairPrice: number;
  volume: number;
  pairVolume: number;
}
