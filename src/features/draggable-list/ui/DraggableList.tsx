"use client";
import React from "react";
import { motion } from "framer-motion";

import { CoinsList } from "@/entities/list";

export const DraggableList = () => {
  return (
    <motion.div drag whileDrag={{ scale: 1.03 }} whileTap={{ scale: 1.03 }}>
      <CoinsList />
    </motion.div>
  );
};
