"use client";
import React from "react";
import { motion } from "framer-motion";
import { Box } from "@mantine/core";
import { CoinsList } from "@/entities/list";

export const DraggableList = () => {
  return (
      <motion.div
        drag
        whileDrag={{ scale: 1.03 }}
        whileTap={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
      >
        <CoinsList />
      </motion.div>
  );
};
