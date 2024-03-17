"use client";

import React, { useState } from "react";
//mantine
import {
  Accordion,
  Box,
  Center,
  Container,
  Grid,
  Group,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
//icons
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Circle,
  Clock,
  DotsNine,
  DotsThree,
  Note,
} from "@phosphor-icons/react";
//styles
import classes from "./info.module.css";
//clsx
import cx from "clsx";
import { AnimatePresence } from "framer-motion";
import AnimatedTitle from "@/@components/animated/AnimatedTitle";
import { AnimateText } from "@/@animate/text";

export function SectionInfo() {
  // * DEFINITION
  const theme = useMantineTheme();

  // * STATES

  const [active, setActive] = useState(0);

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  const TabBackground = () => (
    <Grid gutter="3rem">
      <Grid.Col span={{ base: 12, lg: 12 }}>
        <AnimatedTitle size={"8rem"} lh={"7rem"} ta="left">
          Championing
        </AnimatedTitle>
        <AnimatedTitle size={"8rem"} lh={"7rem"} ta="left">
          the Greater Good and
        </AnimatedTitle>
        <AnimatedTitle
          size={"8rem"}
          lh={"7rem"}
          ta="left"
          c="rgba(255,255,255,1)"
        >
          Fighting for What's Right
        </AnimatedTitle>
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 12 }} pt="3rem">
        <SimpleGrid
          cols={{ base: 1, lg: 3 }}
          spacing={{ base: "md", lg: "3rem" }}
        >
          <AnimateText.Container>
            <Stack>
              <AnimateText.Row>
                <Text
                  opacity={0.5}
                  size="xs"
                  style={{
                    lineHeight: "1.8rem",
                  }}
                >
                  WE ARE
                </Text>
              </AnimateText.Row>
              <AnimateText.Row>
                <Text
                  size="md"
                  style={{
                    lineHeight: "1.8rem",
                  }}
                >
                  Hami Nepal is a non-profit organisation, established in 2015
                  A.D. and registered in 2020 A.D. (Regd.no. 609789065), which
                  directly connects the donors and the recipients. Our main
                  objective is to help anyone in need without any hesitations
                  and expectation of payback.
                </Text>
              </AnimateText.Row>
            </Stack>
          </AnimateText.Container>

          <AnimateText.Container>
            <Stack>
              <AnimateText.Row>
                <Text
                  opacity={0.5}
                  size="xs"
                  style={{
                    lineHeight: "1.8rem",
                  }}
                >
                  WHAT WE DO
                </Text>
              </AnimateText.Row>
              <AnimateText.Row>
                <Text
                  size="md"
                  style={{
                    lineHeight: "1.8rem",
                  }}
                >
                  We are a youth movement established in 2015 A.D. and
                  registered in 2020 A.D. (Regd.no. 609789065), dedicated to
                  fostering positive change. Our transparent approach ensures
                  that all donations received directly benefit efforts to
                  improve societies and communities. We actively support
                  communities in times of need, striving to maximize our impact
                  by efficiently channeling resources where they are most
                  needed.
                </Text>
              </AnimateText.Row>
            </Stack>
          </AnimateText.Container>

          <AnimateText.Container>
            <Stack>
              <AnimateText.Row>
                <Text
                  opacity={0.5}
                  size="xs"
                  style={{
                    lineHeight: "1.8rem",
                  }}
                >
                  HOW WE DO
                </Text>
              </AnimateText.Row>
              <AnimateText.Row>
                <Text
                  size="md"
                  style={{
                    lineHeight: "1.8rem",
                  }}
                >
                  With our dynamic team mobilized and ready for action, we not
                  only address immediate issues but also strive to implement
                  sustainable solutions for long-term impact. Through proactive
                  engagement and collaboration, we stand shoulder to shoulder
                  with communities, fostering resilience and driving positive
                  change from within.
                </Text>
              </AnimateText.Row>
            </Stack>
          </AnimateText.Container>
        </SimpleGrid>
      </Grid.Col>
    </Grid>
  );

  const TabHistory = () => (
    <Grid gutter="3rem">
      <Grid.Col span={{ base: 12, lg: 12 }}>
        <AnimatedTitle size={"8rem"} lh={"7rem"} ta="left">
          The Beginning of
        </AnimatedTitle>
        <AnimatedTitle
          size={"8rem"}
          lh={"7rem"}
          c="rgba(255,255,255,1)"
          ta="left"
        >
          Hami Nepal. A MOVEMENT BORN IN TIMES OF NEED.
        </AnimatedTitle>
      </Grid.Col>
      <Grid.Col span={{ base: 12, lg: 12 }} pt="3rem">
        <SimpleGrid
          cols={{ base: 1, lg: 3 }}
          spacing={{ base: "md", lg: "3rem" }}
        >
          <AnimateText.Container>
            <Stack>
              <AnimateText.Row>
                <Text
                  size="md"
                  style={{
                    lineHeight: "1.8rem",
                  }}
                >
                  On April 25, 2015, Nepal was struck by a devastating
                  earthquake measuring 7.8 on the Richter scale, followed by
                  frequent aftershocks occurring every 15-20 minutes. This
                  catastrophic event left an indelible mark on the nation,
                  resulting in approximately 9,000 fatalities and nearly 22,000
                  injuries, affecting a significant portion of the population.
                </Text>
              </AnimateText.Row>
            </Stack>
          </AnimateText.Container>

          <AnimateText.Container>
            <Stack>
              <AnimateText.Row>
                <Text
                  size="md"
                  style={{
                    lineHeight: "1.8rem",
                  }}
                >
                  In the aftermath of the earthquake, chaos engulfed hospitals
                  in Kathmandu, including the National Trauma Center, which,
                  despite being open, struggled to function effectively.
                  Witnessing the dire situation firsthand, our organization's
                  founder, Mr. Sudan Gurung, though not from a social-work
                  background, felt compelled to take action. Recognizing the
                  inadequacy of individual efforts, he rallied volunteers to aid
                  in the relief efforts. What began with 200 volunteers quickly
                  snowballed into a movement, with their numbers swelling to
                  1,600.
                </Text>
              </AnimateText.Row>
            </Stack>
          </AnimateText.Container>

          <AnimateText.Container>
            <Stack>
              <AnimateText.Row>
                <Text
                  size="md"
                  style={{
                    lineHeight: "1.8rem",
                  }}
                >
                  United by a shared sense of duty, this army of young
                  volunteers worked tirelessly to restore functionality to
                  overwhelmed hospitals in Kathmandu. As the days passed, their
                  efforts expanded beyond the capital, reaching 48 remote areas
                  across Nepal, where relief and assistance were desperately
                  needed. This grassroots movement exemplified the power of
                  collective action and solidarity in times of crisis, igniting
                  hope and resilience in communities grappling with the
                  aftermath of the earthquake.
                </Text>
              </AnimateText.Row>
            </Stack>
          </AnimateText.Container>
        </SimpleGrid>
      </Grid.Col>
    </Grid>
  );

  const TabTimeline = () => <>background</>;

  // * DEPSTATES

  const tabs = [
    {
      label: "Background",
      render: <TabBackground />,
    },
    {
      label: "The Story",
      render: <TabHistory />,
    },
    {
      label: "Timeline",
      render: <TabTimeline />,
    },
  ];

  return (
    <>
      <Container
        size="lg"
        py={{ base: "xl", lg: 100 }}
        px={{ base: "xl", lg: 0 }}
      >
        <AnimateText.Container>
          <Group gap="xs" justify="center">
            <AnimateText.Row>
              <Text size="xs" opacity={0.3}>
                ABOUT
              </Text>
            </AnimateText.Row>
          </Group>

          <Center mt="xl">
            <Group>
              {tabs.map((tabinfo: any, index: number) => (
                <UnstyledButton
                  onClick={() => {
                    setActive(index);
                  }}
                  key={index}
                  className={cx(classes.tab, {
                    [classes.active]: index == active,
                  })}
                >
                  <AnimateText.Row key={index}>
                    <>
                      <Title size="1.6rem">{tabinfo.label}</Title>
                      <Center>
                        <Circle
                          size="8"
                          weight="fill"
                          color="var(--mantine-color-brand-5)"
                        />
                      </Center>
                    </>
                  </AnimateText.Row>
                </UnstyledButton>
              ))}
            </Group>
          </Center>
        </AnimateText.Container>

        <Space h={100} />

        <AnimatePresence>{tabs[active].render}</AnimatePresence>
      </Container>
    </>
  );
}
