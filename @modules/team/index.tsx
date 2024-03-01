"use client";

import React, { useContext, useEffect, useState } from "react";
//mantine
import {
  ActionIcon,
  Box,
  Container,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Tabs,
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
import { AnimatePresence } from "framer-motion";
import { AnimateDiv } from "@/@animate/div";

import imgBrand from "@/@assets/brand/logoOriginal.png";

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

  const RenderPanel = ({ area }: { area: any }) => {
    return (
      <SimpleGrid cols={{ base: 1, lg: 3 }}>
        <AnimatePresence>
          {data
            .filter((e: any) => {
              return e.location.includes(area);
            })
            .map((userinfo: any, index: number) => (
              <AnimateDiv.Row key={index}>
                <Paper
                  withBorder
                  radius="lg"
                  bg="none"
                  style={{
                    position: "relative",
                    borderColor: "var(--mantine-color-dark-8)",
                  }}
                >
                  {userinfo.image && (
                    <Image
                      radius="lg"
                      src={userinfo.image}
                      h="100%"
                      fit="cover"
                      style={{
                        position: "absolute",
                        zIndex: -1,
                      }}
                    />
                  )}

                  {!userinfo.image && (
                    <Image
                      radius="lg"
                      src={imgBrand.src}
                      h={100}
                      fit="contain"
                      mt={200}
                      opacity={.3}
                      style={{
                        position: "absolute",
                        zIndex: -1,
                      }}
                    />
                  )}

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
              </AnimateDiv.Row>
            ))}
        </AnimatePresence>
      </SimpleGrid>
    );
  };

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

        <Tabs defaultValue="All">
          <AnimateDiv.Row>
            <Tabs.List mb="xl">
              <Tabs.Tab value="All">All Volunteers</Tabs.Tab>
              <Tabs.Tab value="Kathmandu">Kathmandu</Tabs.Tab>
              <Tabs.Tab value="Nepalgunj">Nepalgunj</Tabs.Tab>
              <Tabs.Tab value="Pokhara">Pokhara</Tabs.Tab>
              <Tabs.Tab value="Dharan">Dharan</Tabs.Tab>
            </Tabs.List>
          </AnimateDiv.Row>

          <Tabs.Panel value="All">
            <RenderPanel area="" />
          </Tabs.Panel>
          <Tabs.Panel value="Kathmandu">
            <RenderPanel area="Kathmandu" />
          </Tabs.Panel>
          <Tabs.Panel value="Nepalgunj">
            <RenderPanel area="Nepalgunj" />
          </Tabs.Panel>
          <Tabs.Panel value="Pokhara">
            <RenderPanel area="Pokhara" />
          </Tabs.Panel>
          <Tabs.Panel value="Dharan">
            <RenderPanel area="Dharan" />
          </Tabs.Panel>
        </Tabs>
      </Container>
    </>
  );
}
