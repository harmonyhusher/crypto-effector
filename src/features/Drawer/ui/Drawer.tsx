import { Drawer as MantineDrawer } from "@mantine/core";
import React from "react";

interface Props {
  opened: boolean;
  close: () => void;
}

export const Drawer = ({
  opened,
  close,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <React.Fragment>
      <MantineDrawer
        opened={opened}
        onClose={close}
        position="right"
        // withCloseButton={false}
        overlayProps={{ backgroundOpacity: 0.5, blur: 1 }}
        offset={8}
        radius="md"
      >
        {children}
      </MantineDrawer>
    </React.Fragment>
  );
};
