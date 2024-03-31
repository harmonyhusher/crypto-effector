import { Flex, Pill, PillGroup } from "@mantine/core";
type Props = {
  onClick: () => void;
};

const periods = ["all", "24h", "1w", "1m", "3m", "6m", "1y"];

export const Settings = ({ onClick }: Props) => {
  return (
    <Flex gap={"md"}>
      {periods.map((item) => {
        return (
          <Pill size={"lg"} onClick={onClick}>
            {item}
          </Pill>
        );
      })}
    </Flex>
  );
};
