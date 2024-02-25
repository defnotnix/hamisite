"use client";

import { useContext, useEffect } from "react";
//mantine
import { Button, Container, Divider, Space } from "@mantine/core";
//notification
import { showNotification } from "@mantine/notifications";
//icons
import { Check } from "@phosphor-icons/react";
//context
import { ContextPageProp } from "@/@context/PageProp";
//sections
import { SectionHome } from "./sections";

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

      <SectionHome.ImpactMap />

      <SectionHome.Intro />

      <SectionHome.Causes />

      <SectionHome.Transparency />

      <SectionHome.Supporters />
    </>
  );
}
