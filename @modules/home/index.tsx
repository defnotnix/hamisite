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

import imgHN from "@/@assets/hn.png";

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

      <Space mt={{ base: 48, lg: 160 }} />

      <AnimateDiv.Row>
        <Image
          src={imgHN.src}
          w={{
            lg: "100vw",
          }}
          h={{ base: 160, lg: "auto" }}
        />
      </AnimateDiv.Row>

      <SectionHome.ImpactMap />

      <SectionHome.Intro />

      <SectionHome.Causes />

      <SectionHome.Transparency />

      <SectionHome.Supporters />
    </>
  );
}

// 1920 * 1080
