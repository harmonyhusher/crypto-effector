import { AppShell, Burger, Group } from "@mantine/core";

type Props = {
  opened: boolean;
  open: () => void;
};

export const Header = ({ opened, open }: Props) => {
  return (
    <AppShell.Header>
      <Group h="100%" px="md">
        <Burger onClick={open} size="sm" />
      </Group>
    </AppShell.Header>
  );
};
