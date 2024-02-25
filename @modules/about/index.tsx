"use client";

import React, { useContext, useEffect } from "react";
//context
import { ContextPageProp } from "@/@context/PageProp";
import { S } from "./section";

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
      <S.Testimonial />
    </>
  );
}
