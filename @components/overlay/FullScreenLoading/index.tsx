"use client";

import React, { useState, useEffect, useContext } from "react";
//mantine
import { Paper, Progress, Text } from "@mantine/core";
//framer
import { motion, useAnimate } from "framer-motion";
//context
import { ContextPageProp } from "@/@context/PageProp";
//css
import classes from "./overlay.module.css";

export function OverlayMainLoading({
  animateExit = true,
}: {
  animateExit?: boolean;
}) {
  // * DEFINITIONS

  // * STATE

  const [scope, animate] = useAnimate();
  const [scopeText, animateText] = useAnimate();
  const [progress, setProgress] = useState(0);

  // > CONTEXT

  const { state, dispatch } = useContext(ContextPageProp.Context);

  // * PRELOADING

  function unloadAnimation() {
    setTimeout(() => {
      setProgress(70);
      animateText(
        scopeText.current,
        {
          opacity: 0,
          y: -32,
        },
        {
          ease: "anticipate",
        }
      );
    }, 2200);
    setTimeout(() => {
      setProgress(100);
      animate(
        scope.current,
        {
          opacity: 0,
        },
        {
          duration: 0.3,
          ease: "linear",
        }
      );
    }, 2300);
    setTimeout(() => {
      setProgress(100);
      animate(scope.current, {
        display: "none",
        zIndex: -1,
      });
    }, 2600);
  }

  useEffect(() => {
    if (!state.loading) {
      unloadAnimation();
    }
  }, [state.loading]);

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <motion.div initial={{ opacity: 1 }} ref={scope} className={classes.root}>
      <div className={classes.icon}>
        <motion.svg
          width="122"
          height="112"
          viewBox="0 0 122 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              // repeat: Infinity,
              // repeatType: "loop",
              // repeatDelay: 1,
            }}
            d="M67.0371 1L40.0557 1.00009V84.0199C57.7527 101.737 67.0371 94.3974 67.0371 84.0199V61.1894H94.0186V96.4729L121 111.001V1H94.0186V34.208H67.0371V1Z"
            //fill="#CC343B"
            stroke="#CC343B"
            strokeWidth={2}
          />
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              // repeat: Infinity,
              // repeatType: "loop",
              // repeatDelay: 1,
            }}
            d="M31.7528 34.424V77.4213C-3.0368 47.895 -4.77368 34.4239 9.12081 34.4238L31.7528 34.424Z"
            //fill="#CC343B"
            stroke="#CC343B"
            strokeWidth={2}
          />
        </motion.svg>
      </div>

      <Text size="xs" p="xl" ref={scopeText}>
        FOR THE PEOPLE, BY THE PEOPLE.
      </Text>
    </motion.div>
  );
}
