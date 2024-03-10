"use client";

import React, { useContext, useEffect } from "react";
//context
import { ContextPageProp } from "@/@context/PageProp";
import { S } from "./section";
import { SectionHome } from "../home/sections";

export function ModuleAbout() {
  const { state, dispatch } = useContext(ContextPageProp.Context);

  useEffect(() => {
    dispatch({
      type: "PAGE_LOADED",
      value: "ABOUT",
    });
  }, []);

  return (
    <>
      <S.Hero />
      {/* <S.Showreel /> */}
      <S.Info />
      <S.Mentor />
      <SectionHome.Supporters />x
    </>
  );
}
