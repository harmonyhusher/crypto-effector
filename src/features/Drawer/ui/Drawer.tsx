import { Drawer as MantineDrawer, Button } from "@mantine/core";
import React from "react";

type Props = {
  opened: boolean;
  open: () => void;
  close: () => void;
};

export const Drawer = ({ opened, open, close }: Props) => {
  return (
    <React.Fragment>
      <MantineDrawer
        opened={opened}
        onClose={close}
      ></MantineDrawer>
      <Button onClick={open}>Open Drawer</Button>
    </React.Fragment>
  );
};
