import { Text, useMantineTheme } from "@mantine/core";
import { PropsWithChildren, useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

export default function AnimatedTitle({
  children,
  initiate = true,
  size = "14rem",
  lh = "13rem",
  c = "rgba(227, 53, 63,1)",
  ta = "center",
  style = {},
}: {
  children: string;
  initiate?: boolean;
  size?: any;
  lh?: any;
  c?: any;
  ta?: any;
  style?: {};
}) {
  const theme = useMantineTheme();
  children.split("");
  const animateContainer = {
    initial: {
      opacity: 0,
      y: 100,
    },
    show: {
      y: 0,
      opacity: 1,

      transition: {
        duration: 0.5,
        staggerChildren: 0.05,
      },
    },
  };

  const animateLetter = {
    initial: {
      y: -50,
      opacity: 0,
      color: "rgba(227, 53, 63,0)",
    },
    show: {
      y: 0,
      opacity: 1,
      color: c,
      transition: {
        duration: 0.3,
      },
    },
  };

  const renderLetters = children
    .split("")
    .map((letter: string, index: number) => {
      if (letter == "\n") {
        return <br key={index} />;
      } else {
        return (
          <motion.span
            style={{
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor:
                c == "rgba(227, 53, 63,1)"
                  ? theme.colors.brand[5]
                  : theme.colors.gray[0],
            }}
            key={index}
            variants={animateLetter}
          >
            {letter}
          </motion.span>
        );
      }
    });

  return (
    <motion.div
      variants={animateContainer}
      initial="initial"
      whileInView="show"
      viewport={{ once: true }}
    >
      <Text
        className="heading"
        size={"4.5rem"}
        ta={ta}
        c={c}
        hiddenFrom="lg"
        style={style}
      >
        {renderLetters}
      </Text>

      <Text
        className="heading"
        size={size}
        lh={lh}
        ta={ta}
        c={c}
        visibleFrom="lg"
        style={style}
      >
        {renderLetters}
      </Text>
    </motion.div>
  );
}
