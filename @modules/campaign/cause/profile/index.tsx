"use client";

import React, { useState, useEffect, useContext } from "react";
//mantine
import {
  ActionIcon,
  Container,
  Divider,
  Group,
  Overlay,
  Paper,
  Space,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import {} from "@mantine/hooks";
//icons
import { Play } from "@phosphor-icons/react";
//api

import { useQuery } from "@tanstack/react-query";
import api from "@/@services/campaign/cause";
import { S } from "./sections";
import { ContextPageProp } from "@/@context/PageProp";
// components

export function ModuleCauseProfile() {
  // * DEFINITIONS

  const theme = useMantineTheme();

  // * STATES

  // > CONTEXT
  const { state, dispatch } = useContext(ContextPageProp.Context);

  // * PRELOADING

  const { data, isLoading } = useQuery({
    queryKey: api.getSingle.key,
    queryFn: async () => {
      const res: any = await api.getSingle(1);
      return res;
    },
    initialData: {
      image_album: [],
      campaign_phases: [],
      volunteers: [],
    },
  });

  useEffect(() => {
    dispatch({
      type: "PAGE_LOADED",
      value: "CAUSES",
    });
  }, []);

  // * FUNCTIONS

  // * COMPONENTS

  if (isLoading) {
    return <>Loading ...</>;
  }
  return (
    <>
      <Space h={160} />

      <S.Hero data={data} />
      <S.Showreel data={data} />
      <S.Stats data={data} />
      <S.Problem />
      <S.Action data={data} />
      {/* <S.Exposure data={data} /> */}
      <S.Transparency data={data} />
      <S.Conclusion data={data} />
      <S.Volunteers data={data} />
    </>
  );
}
