"use client";

import React, { useState, useEffect, useContext } from "react";
//mantine
import { Group, Loader, Text } from "@mantine/core";
//framer
import { motion, useAnimate } from "framer-motion";
//context
import { ContextPageProp } from "@/@context/PageProp";
//styles
import classes from "./overlay.module.css";

export function OverlayPageTransition() {
  // * DEFINITIONS

  // * STATE

  const [scope, animate] = useAnimate();

  // > CONTEXT

  const { state, dispatch } = useContext(ContextPageProp.Context);

  // * PRELOADING

  async function loadOverlay() {
    console.log("load");
    await animate(
      scope.current,
      {
        display: "flex",
      },
      {
        duration: 0.3,
        ease: "linear",
      }
    );

    await animate(
      scope.current,
      {
        opacity: 1,
      },
      {
        duration: 0.3,
        ease: "linear",
      }
    );
  }

  async function unloadOverlay() {
    await animate(
      scope.current,
      {
        opacity: 0,
      },
      {
        duration: 0.3,
        ease: "linear",
      }
    );

    await animate(scope.current, {
      display: "none",
    });

    dispatch({
      type: "TRANSITION_END",
    });
  }

  useEffect(() => {
    if (state.loadingTransition) {
      loadOverlay();
    } else {
      unloadOverlay();
    }
  }, [state.loadingTransition]);

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <motion.div ref={scope} className={classes.root} initial={{ opacity: 1 }}>
        <div className={classes.loader}>
          <Group justify="center">
            <div>
              <Group justify="center">
                <Loader size="sm" color="gray.0" />
              </Group>
            </div>
          </Group>
        </div>
      </motion.div>
    </>
  );
}
