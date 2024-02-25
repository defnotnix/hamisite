"use client";

import React, { useState, useEffect } from "react";
//next

//mantine
import {
  Box,
  Center,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  Space,
  Stack,
  Title,
} from "@mantine/core";
//animation
import { motion } from "framer-motion";

//styles
import classes from "./hero.module.css";

//image
import imgFist from "@/@assets/img/hero/intro/fist.png";
import AnimatedTitle from "@/@components/animated/AnimatedTitle";
import { AnimateText } from "@/@animate/text";
import { AnimateDiv } from "@/@animate/div";

export function SectionHero() {
  // * DEFINITION

  // * STATE

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <section className={classes.root}>
        <Space
          h={{
            base: 80,
            md: 280,
          }}
        />

        <Center visibleFrom="lg">
          <Grid>
            <Grid.Col span={{ base: 12, lg: 4 }} offset={{ lg: 8 }}>
              <AnimateText.Row>
                <Title c="dark.9">WE ARE</Title>
              </AnimateText.Row>
            </Grid.Col>
            <Grid.Col span={12}>
              <Group justify="center">
                <div>
                  <Stack gap="0">
                    <AnimateText.Container>
                      <AnimateText.Row>
                        <Title lh="2rem" c="dark.9">
                          MORE THAN
                        </Title>
                      </AnimateText.Row>
                      <AnimateText.Row>
                        <Title lh="2rem" c="dark.9">
                          JUST AN
                        </Title>
                      </AnimateText.Row>
                      <AnimateText.Row>
                        <Title lh="2rem" c="dark.9">
                          ORGANIZATION
                        </Title>
                      </AnimateText.Row>
                    </AnimateText.Container>
                  </Stack>
                </div>

                <AnimatedTitle
                  size="18rem"
                  lh="15rem"
                  style={{
                    mixBlendMode: "multiply",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  A YOUTH
                </AnimatedTitle>
              </Group>
              <AnimatedTitle
                size="18rem"
                lh="15rem"
                style={{
                  mixBlendMode: "multiply",
                  fontFamily: "var(--font-heading)",
                }}
                ta="center"
              >
                MOVEMENT
              </AnimatedTitle>
            </Grid.Col>
          </Grid>
        </Center>

        <Center hiddenFrom="lg">
          <Space h={500} />
          <Grid>
            <Grid.Col span={{ base: 12, lg: 4 }} offset={{ lg: 8 }}>
              <AnimateText.Row>
                <Title size="md" ta="center" c="dark.9">
                  MORE THAN JUST AN ORGANIZATION
                </Title>
              </AnimateText.Row>
            </Grid.Col>
            <Grid.Col span={12}>
              <Group justify="center">
                <AnimatedTitle
                  size="18rem"
                  lh="15rem"
                  style={{
                    mixBlendMode: "multiply",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  WE ARE A YOUTH
                </AnimatedTitle>
              </Group>
              <AnimatedTitle
                size="18rem"
                lh="15rem"
                style={{
                  mixBlendMode: "multiply",
                  fontFamily: "var(--font-heading)",
                }}
                ta="center"
              >
                MOVEMENT
              </AnimatedTitle>
            </Grid.Col>
          </Grid>
        </Center>

        <div className={classes.backdrop}>
          <AnimateDiv.Row>
            <Container>
              <Box className={classes.imageoverlay}>
                <Space h={{base:300,lg:0}} />
                <Image
                  src={imgFist.src}
                  fit="contain"
                  className={classes.img}
                />
                <Paper radius="xl" className={classes.box} />
              </Box>
            </Container>
          </AnimateDiv.Row>
        </div>
      </section>
    </>
  );
}
