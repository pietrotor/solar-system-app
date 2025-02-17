"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type PlanetAnimationProps = {
  children: React.ReactNode;
  id: string;
};

export const PlanetAnimation = ({ children, id }: PlanetAnimationProps) => {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={id}
        layoutId={id}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
