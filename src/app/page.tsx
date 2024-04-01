"use client";
import { Graph } from "@/entities/graph";
import { DraggableList } from "@/features/draggable-list";
import { Group } from "@mantine/core";
const Home = () => {
  return (
    <Group>
      <DraggableList />
      {/* <Graph /> */}
    </Group>
  );
};

export default Home;
