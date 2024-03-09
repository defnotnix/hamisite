"use client";

import React, { useState, useEffect, useContext } from "react";
//mantine
import {
  Container,
  Grid,
  Group,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
//query
import { useQuery } from "@tanstack/react-query";
//api
import api from "@/@services/campaign/cause";
//components
import { CardCause } from "@/@components/card/cause";
//styles
import classes from "./cause.module.css";

import AnimatedTitle from "@/@components/animated/AnimatedTitle";

import { motion } from "framer-motion";

import Link from "next/link";
import { variantContainer, variantContainerParent } from "@/@animate/container";
import { AnimateText } from "@/@animate/text";
import { ContextPageProp } from "@/@context/PageProp";
import { useRouter } from "next/navigation";

export function SectionHomeCauses() {
  // * DEFINITION

  const theme = useMantineTheme();
  const Router = useRouter();

  // * STATE

  // > CONTEXT
  const { state, dispatch } = useContext(ContextPageProp.Context);

  // * PRELOADING

  const queryData = useQuery({
    queryKey: api.getFeatured.key,
    queryFn: async () => {
      return await api.getFeatured();
    },
    initialData: [],
  });

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Container
        mt={{ base: 100, lg: 0 }}
        mb={{ base: 64, lg: 0 }}
        px={{
          base: "xl",
          xl: 0,
        }}
      >
        <AnimateText.Container>
          <Grid align="center">
            <Grid.Col span={{ base: 12, lg: 4 }}>
              <Group gap="md" visibleFrom="lg">
                <AnimatedTitle initiate={true} size="4rem" ta="left">
                  OUR
                </AnimatedTitle>
                <AnimatedTitle
                  initiate={true}
                  size="4rem"
                  ta="left"
                  c="rgba(255,255,255,1)"
                >
                  CAUSE
                </AnimatedTitle>
              </Group>

              <Group gap="md" hiddenFrom="lg" justify="center">
                <AnimatedTitle initiate={true} size="4rem" ta="left">
                  OUR
                </AnimatedTitle>
                <AnimatedTitle
                  initiate={true}
                  size="4rem"
                  ta="left"
                  c="rgba(255,255,255,1)"
                >
                  CAUSE
                </AnimatedTitle>
              </Group>
            </Grid.Col>
            <Grid.Col span={{ xs: 12, lg: 4 }}>
              <AnimateText.Row key={1}>
                <Text
                  mt={{
                    base: "xs",
                    lg: "md",
                  }}
                  size="xs"
                  ta="center"
                  c="gray.6"
                >
                  Our initiatives for a better tomorrow.
                </Text>
              </AnimateText.Row>
            </Grid.Col>
            <Grid.Col span={{ xs: 12, lg: 4 }} visibleFrom="lg">
              <AnimateText.Row key={2}>
                <Link href="/campaign/causes">
                  <Title
                    className={classes.seemore}
                    style={{
                      fontSize: "4rem",
                      color: theme.colors.gray[1],
                      textAlign: "right",
                    }}
                    onClick={() => {
                      dispatch({
                        type: "TRANSITION_START",
                        value: "Causes",
                      });

                      setTimeout(() => {
                        Router.push("/campaign/causes");
                      }, 1000);
                    }}
                  >
                    SEE MORE
                  </Title>
                </Link>
              </AnimateText.Row>
            </Grid.Col>
          </Grid>
        </AnimateText.Container>

        <motion.div
          variants={variantContainerParent}
          initial="hidden"
          whileInView="show"
        >
          <Carousel
            slideSize={{
              base: "100%",
              md: "33.33%",
            }}
            align="start"
            slideGap={"xs"}
          >
            {queryData.data.map((cause: any, index: any) => (
              <Carousel.Slide key={index} style={{ cursor: "pointer" }}>
                <motion.div variants={variantContainer}>
                  <CardCause.Home data={cause} />
                </motion.div>
              </Carousel.Slide>
            ))}
          </Carousel>
        </motion.div>
      </Container>
    </>
  );
}
