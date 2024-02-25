"use client";

import React, { useState, useEffect } from "react";
//mantine
import {} from "@mantine/core";
import dynamic from "next/dynamic";
//motion
import { motion } from "framer-motion";
import { variantContainer } from "@/@animate/container";

const ImpactMap = dynamic(() => import("./Map"), {
  ssr: false,
});

export function SectionHomeImpactMap() {
  return (
    <>
      <motion.div
        variants={variantContainer}
        initial="hidden"
        whileInView="show"
      >
        <ImpactMap />
      </motion.div>
    </>
  );
}
