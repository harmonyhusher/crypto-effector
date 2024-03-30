export interface RootInterface {
  Message: string;
  Type: number;
  MetaData: MetaData;
  SponsoredData: any[];
  Data: Datum[];
  RateLimit: RateLimit;
  HasWarning: boolean;
}

export enum Currency {
  RUB = "RUB",
  USD = "USD",
}

export interface ListaApiParams {
  limit: number;
  currency: Currency;
}

export interface RateLimit {}

export interface Datum {
  CoinInfo: CoinInfo;
  RAW: RAW;
  DISPLAY: DISPLAY;
}

export interface DISPLAY {
  USD: USD2;
}

export interface USD2 {
  FROMSYMBOL: string;
  TOSYMBOL: string;
  MARKET: string;
  LASTMARKET: string;
  TOPTIERVOLUME24HOUR: string;
  TOPTIERVOLUME24HOURTO: string;
  LASTTRADEID: string;
  PRICE: string;
  LASTUPDATE: string;
  LASTVOLUME: string;
  LASTVOLUMETO: string;
  VOLUMEHOUR: string;
  VOLUMEHOURTO: string;
  OPENHOUR: string;
  HIGHHOUR: string;
  LOWHOUR: string;
  VOLUMEDAY: string;
  VOLUMEDAYTO: string;
  OPENDAY: string;
  HIGHDAY: string;
  LOWDAY: string;
  VOLUME24HOUR: string;
  VOLUME24HOURTO: string;
  OPEN24HOUR: string;
  HIGH24HOUR: string;
  LOW24HOUR: string;
  CHANGE24HOUR: string;
  CHANGEPCT24HOUR: string;
  CHANGEDAY: string;
  CHANGEPCTDAY: string;
  CHANGEHOUR: string;
  CHANGEPCTHOUR: string;
  CONVERSIONTYPE: string;
  CONVERSIONSYMBOL: string;
  CONVERSIONLASTUPDATE: string;
  SUPPLY: string;
  MKTCAP: string;
  MKTCAPPENALTY: string;
  CIRCULATINGSUPPLY: string;
  CIRCULATINGSUPPLYMKTCAP: string;
  TOTALVOLUME24H: string;
  TOTALVOLUME24HTO: string;
  TOTALTOPTIERVOLUME24H: string;
  TOTALTOPTIERVOLUME24HTO: string;
  IMAGEURL: string;
}

export interface RAW {
  USD: USD;
}

export interface USD {
  TYPE: string;
  MARKET: string;
  FROMSYMBOL: string;
  TOSYMBOL: string;
  FLAGS: string;
  LASTMARKET: string;
  MEDIAN: number;
  TOPTIERVOLUME24HOUR: number;
  TOPTIERVOLUME24HOURTO: number;
  LASTTRADEID: string;
  PRICE: number;
  LASTUPDATE: number;
  LASTVOLUME: number;
  LASTVOLUMETO: number;
  VOLUMEHOUR: number;
  VOLUMEHOURTO: number;
  OPENHOUR: number;
  HIGHHOUR: number;
  LOWHOUR: number;
  VOLUMEDAY: number;
  VOLUMEDAYTO: number;
  OPENDAY: number;
  HIGHDAY: number;
  LOWDAY: number;
  VOLUME24HOUR: number;
  VOLUME24HOURTO: number;
  OPEN24HOUR: number;
  HIGH24HOUR: number;
  LOW24HOUR: number;
  CHANGE24HOUR: number;
  CHANGEPCT24HOUR: number;
  CHANGEDAY: number;
  CHANGEPCTDAY: number;
  CHANGEHOUR: number;
  CHANGEPCTHOUR: number;
  CONVERSIONTYPE: string;
  CONVERSIONSYMBOL: string;
  CONVERSIONLASTUPDATE: number;
  SUPPLY: number;
  MKTCAP: number;
  MKTCAPPENALTY: number;
  CIRCULATINGSUPPLY: number;
  CIRCULATINGSUPPLYMKTCAP: number;
  TOTALVOLUME24H: number;
  TOTALVOLUME24HTO: number;
  TOTALTOPTIERVOLUME24H: number;
  TOTALTOPTIERVOLUME24HTO: number;
  IMAGEURL: string;
}

export interface CoinInfo {
  Id: string;
  Name: string;
  FullName: string;
  Internal: string;
  ImageUrl: string;
  Url: string;
  Algorithm: string;
  ProofType: string;
  Rating: Rating;
  NetHashesPerSecond: number;
  BlockNumber: number;
  BlockTime: number;
  BlockReward: number;
  AssetLaunchDate: string;
  MaxSupply: number;
  Type: number;
  DocumentType: string;
}

export interface Rating {
  Weiss: Weiss;
}

export interface Weiss {
  Rating: string;
  TechnologyAdoptionRating: string;
  MarketPerformanceRating: string;
}

export interface MetaData {
  Count: number;
}
