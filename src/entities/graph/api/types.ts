export interface GraphI {
  Response: string;
  Message: string;
  HasWarning: boolean;
  Type: number;
  RateLimit: RateLimit;
  Data: Data;
}

export interface Data {
  Aggregated: boolean;
  TimeFrom: number;
  TimeTo: number;
  Data: Datum[];
}

export interface Datum {
  id: number;
  symbol: string;
  time: number;
  zero_balance_addresses_all_time: number;
  unique_addresses_all_time: number;
  new_addresses: number;
  active_addresses: number;
  transaction_count: number;
  transaction_count_all_time: number;
  large_transaction_count: number;
  average_transaction_value: number;
  block_height: number;
  hashrate: number;
  difficulty: number;
  block_time: number;
  block_size: number;
  current_supply: number;
}

export interface RateLimit {
}