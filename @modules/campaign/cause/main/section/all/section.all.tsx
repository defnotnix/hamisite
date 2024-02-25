"use client";

import React, { useState, useEffect, useContext } from "react";
//nextjs
import { useRouter } from "next/navigation";
//mantine
import {
  AspectRatio,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  Grid,
  Group,
  Menu,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
//icons
import { ArrowRight, CaretDown, MagnifyingGlass } from "@phosphor-icons/react";
//query
import { useQuery } from "@tanstack/react-query";
import api from "@/@services/campaign/cause";
//context
import { ContextPageProp } from "@/@context/PageProp";
//classes
import cx from "clsx";
import classes from "./section.all.module.css";

//motion
import { AnimatePresence, motion } from "framer-motion";

//animate
import { variantContainer, variantContainerParent } from "@/@animate/container";
//components

import { CardCause } from "@/@components/card/cause";

export function SectionAll() {
  // * DEFINITION

  const theme = useMantineTheme();

  // * STATES

  // > CONTEXT
  const { state, dispatch } = useContext(ContextPageProp.Context);

  const filters = [
    {
      label: "STATUS",
      children: [
        {
          label: "Active",
          value: 0,
        },
        {
          label: "Completed",
          value: 1,
        },
      ],
    },
    {
      label: "Donation Status",
      children: [
        {
          label: "Fund Donation",
          value: 0,
        },
        {
          label: "Kind Donation",
          value: 1,
        },
        {
          label: "Closed",
          value: 2,
        },
      ],
    },
    {
      label: "Category",
      children: [
        {
          label: "Disaster Relief",
          value: 0,
        },
        {
          label: "Fundraiser",
          value: 1,
        },
        {
          label: "Welfare",
          value: 2,
        },
        {
          label: "Financial Help",
          value: 3,
        },
      ],
    },
  ];
  // * PRELOADING

  const queryCause = useQuery({
    queryKey: api.getFeatured.key,
    queryFn: async () => {
      const res = await api.getFeatured();
      return res;
    },
    initialData: [],
  });

  useEffect(() => {
    dispatch({
      type: "PAGE_LOADED",
      value: "CAUSES",
    });
  }, [dispatch]);

  // * ANIMATE

  // * FUNCTION

  // * COMPONENTS

  return (
    <>
      <Container my={100}>
        <Grid>
          <Grid.Col span={12} py="100" visibleFrom="lg">
            <Title size="5rem" lh="5rem">
              EXPLORE OUR CAUSES
            </Title>
          </Grid.Col>
          <Grid.Col span={3} visibleFrom="lg">
            <div
              style={{
                position: "sticky",
                top: "2rem",
              }}
            >
              {filters.map((filtergroup: any, index: number) => (
                <motion.div
                  key={index}
                  variants={variantContainerParent}
                  initial="hidden"
                  whileInView="show"
                >
                  <motion.div key={index} variants={variantContainer}>
                    <Text
                      tt="uppercase"
                      size="xs"
                      mb="lg"
                      mt="xs"
                      opacity={0.5}
                    >
                      {filtergroup.label}
                    </Text>
                  </motion.div>

                  <Stack mb="xl">
                    {filtergroup.children.map((fil: any, index: number) => (
                      <motion.div key={index} variants={variantContainer}>
                        <Checkbox
                          color="gray.8"
                          size="xs"
                          defaultChecked
                          label={fil.label}
                        />
                      </motion.div>
                    ))}
                  </Stack>
                </motion.div>
              ))}
            </div>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 9 }}>
            <Group justify="space-between" mb="md">
              <Text tt="uppercase" size="xs">
                Showing <b>{queryCause.data.length} Causes</b>
              </Text>
              <TextInput
                placeholder="Search"
                rightSection={<MagnifyingGlass />}
                size="sm"
                w={{ base: "50%", lg: 300 }}
                styles={{
                  input: {
                    fontSize: theme.fontSizes.xs,
                    background: theme.colors.dark[9],
                  },
                }}
              />
            </Group>
            <AnimatePresence>
              <SimpleGrid cols={{ base: 1, lg: 2 }}>
                {queryCause.data.map((causeinfo: any, index: number) => (
                  <motion.div
                    key={index}
                    variants={variantContainer}
                    initial="hidden"
                    whileInView="show"
                  >
                    <CardCause.Home data={causeinfo} />
                  </motion.div>
                ))}
              </SimpleGrid>
            </AnimatePresence>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
