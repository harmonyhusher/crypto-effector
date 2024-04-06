'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useDisclosure } from '@mantine/hooks';
import { Group } from '@mantine/core';

import { Header } from '@/widgets/header/ui/header';
import { DrawerList } from '@/widgets/drawer-list';
import { Drawer } from '@/features/drawer';
import { DraggableList } from '@/features/draggable-list';

const Home = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const constraintsRef = React.useRef(null);

  return (
    <motion.div ref={constraintsRef}>
      <Header opened={opened} open={open} />
      <Group>
        {opened && (
          <Drawer opened={opened} close={close}>
            <DrawerList />
          </Drawer>
        )}
        <DraggableList />
        {/* <Graph/> */}
      </Group>
    </motion.div>
  );
};

export default Home;
