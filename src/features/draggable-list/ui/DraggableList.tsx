"use client";
import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mantine/core";
import { CoinsList } from "@/entities/list";

export const DraggableList = () => {
  return (
    <Box maw={350}>
      <motion.div
        drag
        dragTransition={{ bounceStiffness: 300, bounceDamping: 10 }}
        whileDrag={{ scale: 1.03 }}
        whileTap={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
      >
        <CoinsList />
      </motion.div>
    </Box>
  );
};
