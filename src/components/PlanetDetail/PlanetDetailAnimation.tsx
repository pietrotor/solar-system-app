"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type PlanetDetailAnimationProps = {
  children: ReactNode;
};

export const PlanetDetailAnimation = ({
  children,
}: PlanetDetailAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4 }}
      className="md:order-2"
    >
      {children}
    </motion.div>
  );
};
