"use client";

import { useContext, useEffect } from "react";
//mantine
import {
  Box,
  Button,
  Container,
  Divider,
  Group,
  Image,
  Space,
  Text,
} from "@mantine/core";
//notification
import { showNotification } from "@mantine/notifications";
//icons
import { Check } from "@phosphor-icons/react";
//context
import { ContextPageProp } from "@/@context/PageProp";
//sections
import { SectionHome } from "./sections";
import { AnimateDiv } from "@/@animate/div";

export function ModuleHome() {
  // * DEFINITIONS

  // * STATE

  // > CONTEXT

  const { state, dispatch } = useContext(ContextPageProp.Context);

  // * PRELOADING

  useEffect(() => {
    dispatch({
      type: "PAGE_LOADED",
      value: "home",
    });
  }, []);

  // * FUNCTION

  // * COMPONENTS

  return (
    <>
      <SectionHome.Hero />

      <AnimateDiv.Row>
       <>
       <Text
          visibleFrom="lg"
          ta="center"
          style={{
            opacity: 0.8,
            // bottom: "-15rem",
            left: "10rem",
            fontSize: "23em",
            fontWeight: 900,
            color: "var(--mantine-color-brand-5)",
          }}
        >
          हामी नेपाल
        </Text>
        <Text
          hiddenFrom="lg"
          ta="center"
          style={{
            opacity: 0.8,
            // bottom: "-15rem",
            left: "10rem",
            fontSize: "7em",
            fontWeight: 900,
            color: "var(--mantine-color-brand-5)",
          }}
        >
          हामी नेपाल
        </Text></>
      </AnimateDiv.Row>

      <SectionHome.ImpactMap />

      <SectionHome.Intro />

      <SectionHome.Causes />

      <SectionHome.Transparency />

      <SectionHome.Supporters />
    </>
  );
}
