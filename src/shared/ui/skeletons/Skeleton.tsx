import { CoinSkeleton } from "./views/coin";
import { ListSkeleton } from "./views/list";

export type SkeletonVariant = "coin" | "list";

const activeType: Record<SkeletonVariant, React.FC> = {
  list: ListSkeleton,
  coin: CoinSkeleton,
};
export const Skeleton = ({ type }: { type: SkeletonVariant }) => {
  const Component = activeType[type];
  return <Component />;
};
