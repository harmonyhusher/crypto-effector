import { ListSkeleton } from "./views/list";
import { CoinInfoSkeleton } from "./views/coinInfo";
import { CoinSkeleton } from "./views/coin";

export enum SkeletonVariant {
  COIN = "coin",
  LIST = "list",
  COIN_INFO = "coinInfo",
}

const activeType: Record<SkeletonVariant, React.FC> = {
  list: ListSkeleton,
  coin: CoinSkeleton,
  coinInfo: CoinInfoSkeleton,
};
export const Skeleton = ({ type }: { type: SkeletonVariant }) => {
  const Component = activeType[type];
  return <Component />;
};
