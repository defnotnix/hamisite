"use client";

import React, { useContext, useEffect, useState } from "react";
//mantine
import {
  ActionIcon,
  Box,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Space,
  Text,
  Title,
} from "@mantine/core";
//api
import { useQuery } from "@tanstack/react-query";
import api from "@/@services/team";
//icons
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { ContextPageProp } from "@/@context/PageProp";
import AnimatedTitle from "@/@components/animated/AnimatedTitle";
export function ModuleTeam() {
  // * DEFINITION

  // * STATE

  // > CONTEXT
  const { state, dispatch } = useContext(ContextPageProp.Context);

  // * PRELOADING

  const { data, isLoading } = useQuery({
    queryKey: api.getSingle.key,
    queryFn: async () => {
      const res: any = await api.getAll();
      return res;
    },
    initialData: [],
  });

  useEffect(() => {
    dispatch({
      type: "PAGE_LOADED",
      value: "CAUSES",
    });
  }, []);

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Container size="xl">
        <Space h={160} />

        <AnimatedTitle size="10rem" lh="11rem">
          TOGETHER MAKING A
        </AnimatedTitle>
        <AnimatedTitle size="10rem" lh="11rem" c="rgba(255,255,255,1)">
          DIFFERENCE
        </AnimatedTitle>

        <Space h={100} />
        {/* 
        <Text size="md" opacity={0.5}>
          MANAGEMENT
        </Text> */}

        <SimpleGrid cols={{ base: 1, lg: 3 }}>
          {data.map((userinfo: any, index: number) => (
            <Paper
              radius="lg"
              key={index}
              bg="dark.9"
              style={{
                // backgroundImage:
                //   "url(https://0.soompi.io/wp-content/uploads/2021/06/12125311/I.M.jpeg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Paper
                p="xl"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.85) 70%)",
                  position: "relative",
                }}
              >
                <Space h={500} />

                <Group>
                  <Title c="brand.5">@</Title>
                  <div>
                    <Title>{userinfo.name}</Title>
                    <Text size="xs">Volunteer</Text>
                  </div>
                </Group>

                <Group gap={0} justify="flex-end">
                  <ActionIcon variant="subtle" size="xs">
                    <IconBrandFacebook />
                  </ActionIcon>
                  <ActionIcon variant="subtle" size="xs">
                    <IconBrandInstagram />
                  </ActionIcon>
                  <ActionIcon variant="subtle" size="xs">
                    <IconBrandLinkedin />
                  </ActionIcon>
                </Group>
              </Paper>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
