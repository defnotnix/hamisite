"use client";

import React, { useState, useEffect, useContext } from "react";
//nextjs
import { useRouter } from "next/navigation";
//mantine
import {
  Box,
  Container,
  Divider,
  Grid,
  Group,
  Paper,
  Space,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
//query
import { useQuery } from "@tanstack/react-query";
import api from "@/@services/campaign/cause";
//section
import { S } from "./section";
//context
import { ContextPageProp } from "@/@context/PageProp";
//classes
import classes from "./main.module.css";
import { AnimatePresence, motion } from "framer-motion";
//components

import AnimatedTitle from "@/@components/animated/AnimatedTitle";
import { AnimateText } from "@/@animate/text";

export function ModuleCauses() {
  // * DEFINITION

  const theme = useMantineTheme();

  // * STATES

  // > CONTEXT

  const { state, dispatch } = useContext(ContextPageProp.Context);

  // * PRELOADING

  const queryCause = useQuery({
    queryKey: api.getFeatured.key,
    queryFn: async () => {
      const res = await api.getFeatured();

      return res;
    },
    initialData: [],
  });

  const queryCauseStat = useQuery({
    queryKey: api.getCauseStats.key,
    queryFn: async () => {
      const res = await api.getCauseStats();

      return res;
    },
    initialData: {
      causeCount: "-",
      participantCount: "-",
    },
  });

  useEffect(() => {
    dispatch({
      type: "PAGE_LOADED",
      value: "CAUSES",
    });
  }, []);

  // * ANIMATE

  // * FUNCTION

  // * COMPONENTS

  return (
    <>
      <section className={classes.hero}>
        <Paper
          style={{
            background: `url(https://images.sbs.com.au/dims4/default/4d70188/2147483647/strip/true/crop/6240x3510+0+576/resize/1280x720!/quality/90/?url=http%3A%2F%2Fsbs-au-brightspot.s3.amazonaws.com%2F09%2F85%2F2f5c48fb4ab18d8cfe4697ec0abe%2F20231124001868893854-original.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Paper className={classes.hero_overlay}>
            <Container size="lg">
              <Space h={{ base: 160, md: "14rem" }} />

              <Box visibleFrom="lg">
                <AnimatedTitle size="10rem" lh="10rem" ta="left">
                  Initiaives for a
                </AnimatedTitle>{" "}
                <AnimatedTitle
                  size="10rem"
                  lh="10rem"
                  c="rgba(255,255,255,1)"
                  ta="left"
                >
                  better tomorrow
                </AnimatedTitle>
              </Box>

              <Box hiddenFrom="lg">
                <AnimatedTitle size="10rem" lh="10rem">
                  Initiaives for a
                </AnimatedTitle>{" "}
                <AnimatedTitle size="10rem" lh="10rem" c="rgba(255,255,255,1)">
                  better tomorrow
                </AnimatedTitle>
              </Box>

              <Grid mt="xl">
                <Grid.Col span={{ base: 12, lg: 3 }} offset={{ lg: 3 }}>
                  <AnimateText.Container>
                    <Group gap="xs" mt="xl" justify="center">
                      <Text size="xs" fw={600} c="gray.2" tt="uppercase">
                        {queryCauseStat.data.causeCount} Causes
                      </Text>
                      <Text size="xs" fw={600} c="gray.6" tt="uppercase">
                        |
                      </Text>
                      <Text size="xs" fw={600} c="gray.2" tt="uppercase">
                        {queryCauseStat.data.participantCount} participants
                      </Text>
                    </Group>
                  </AnimateText.Container>
                </Grid.Col>
                <Grid.Col span={{ base: 12, lg: 4 }} visibleFrom="lg">
                  <AnimateText.Container>
                    <Stack gap="3">
                      <AnimateText.Row>
                        <Text size="xs" tt="uppercase" c="gray.5">
                          <b>Causes</b> represent the initiatives of Hami Nepal,
                        </Text>
                      </AnimateText.Row>
                      <AnimateText.Row>
                        <Text size="xs" tt="uppercase" c="gray.5">
                          dedicated to aiding societies and individuals during
                        </Text>
                      </AnimateText.Row>
                      <AnimateText.Row>
                        <Text size="xs" tt="uppercase" c="gray.5">
                          critical moments. We continually strive to be
                        </Text>
                      </AnimateText.Row>
                      <AnimateText.Row>
                        <Text size="xs" tt="uppercase" c="gray.5">
                          the first to respond in any situation.
                        </Text>
                      </AnimateText.Row>
                    </Stack>
                  </AnimateText.Container>
                </Grid.Col>
                <Grid.Col span={{ base: 12, lg: 4 }} hiddenFrom="lg">
                  <AnimateText.Container>
                    <Stack gap="3">
                      <AnimateText.Row>
                        <Text size="xs" tt="uppercase" c="gray.5" ta="center">
                          <b>Causes</b> represent the initiatives of Hami Nepal,
                        </Text>
                      </AnimateText.Row>
                      <AnimateText.Row>
                        <Text size="xs" tt="uppercase" c="gray.5" ta="center">
                          dedicated to aiding societies and individuals during
                        </Text>
                      </AnimateText.Row>
                      <AnimateText.Row>
                        <Text size="xs" tt="uppercase" c="gray.5" ta="center">
                          critical moments. We continually strive to be
                        </Text>
                      </AnimateText.Row>
                      <AnimateText.Row>
                        <Text size="xs" tt="uppercase" c="gray.5" ta="center">
                          the first to respond in any situation.
                        </Text>
                      </AnimateText.Row>
                    </Stack>
                  </AnimateText.Container>
                </Grid.Col>
              </Grid>
            </Container>
          </Paper>
        </Paper>
      </section>

      <Box visibleFrom="lg">
        <S.Featured />
      </Box>

      <Divider hiddenFrom="lg" mt={100} opacity={0.5} />

      <S.All />
    </>
  );
}
