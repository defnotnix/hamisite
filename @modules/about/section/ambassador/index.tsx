"use client";

import {
  ActionIcon,
  AspectRatio,
  Blockquote,
  Box,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Play } from "@phosphor-icons/react";
import { useState } from "react";
//styles
import classes from "./mentor.module.css";
//images
import imgSandip from "@/@assets/img/SandukRuit2.png";
import { AnimateText } from "@/@animate/text";
import AnimatedTitle from "@/@components/animated/AnimatedTitle";
import { AnimateDiv } from "@/@animate/div";

export function SectionGoodwillAmbassador() {
  // * DEFINITION
  const theme = useMantineTheme();

  // * STATES

  const [active, setActive] = useState(0);

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Container size="xl" py={{ base: "xl", lg: 100 }} pt={0}>
        <AnimateText.Container>
          <AnimateText.Row>
            <Group gap="xs" justify="center">
              <Text size="xs" opacity={0.3}>
                AMBASSADORS
              </Text>
            </Group>
          </AnimateText.Row>
          <AnimateText.Row>
            <Title my="xl" size="1.6rem" ta="center">
              OUR GOODWILL AMBASSADOR
            </Title>
          </AnimateText.Row>
        </AnimateText.Container>

        <Paper py={{ base: "1rem", lg: "5rem" }} bg={"#101010"} radius="xl">
          <Container size="lg">
            <Grid
              gutter={{
                base: "md",
                lg: "5rem",
              }}
            >
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <AnimateDiv.Container>
                  <AnimateDiv.Row>
                    <Image src={imgSandip.src} mb={{ base: "xl", lg: 0 }} />
                  </AnimateDiv.Row>
                  <AnimateDiv.Row>
                    <Blockquote
                      mt="md"
                      color="brand"
                      style={{
                        background: theme.colors.dark[9],
                      }}
                      p="xl"
                    >
                      Miss Universe 2018
                    </Blockquote>
                  </AnimateDiv.Row>
                </AnimateDiv.Container>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 6 }}>
                <AnimateText.Container>
                  <Stack>
                    <AnimatedTitle
                      size={"8rem"}
                      lh={"7rem"}
                      ta="left"
                      c="rgba(255,255,255,1)"
                    >
                      Ms.
                    </AnimatedTitle>{" "}
                    <AnimatedTitle
                      size={"8rem"}
                      lh={"7rem"}
                      ta="left"
                      c="rgba(255,255,255,1)"
                    >
                      Manita
                    </AnimatedTitle>
                    <AnimatedTitle size={"8rem"} lh={"7rem"} ta="left">
                      Devkota
                    </AnimatedTitle>
                    <AnimateText.Row>
                      <Text
                        size="md"
                        style={{
                          lineHeight: "1.8rem",
                        }}
                      >
                        <b>Ms.Manita Devkota</b> crowned as the Miss Universe
                        Nepal 2018 A.D., a determined and resilient Nepalese
                        woman who has navigated various challenges and pursued
                        her dreams. Ms. Devkota has made a positive impact in
                        her community and beyond with her consistent dedication,
                        a strong sense of identity and purpose.
                      </Text>
                    </AnimateText.Row>
                    <AnimateText.Row>
                      <Text
                        size="md"
                        style={{
                          lineHeight: "1.8rem",
                        }}
                      >
                        Manita Devkota has really been supportive to Hami Nepal
                        in terms of raising funds both locally and globally. She
                        has also been actively involved in raising awareness
                        about the various issues that Hami Nepal is addressing.
                        Her dedication to these efforts has made a significant
                        impact, increasing the organization’s reach and impact.
                      </Text>
                    </AnimateText.Row>
                  </Stack>
                </AnimateText.Container>
              </Grid.Col>
            </Grid>
          </Container>
        </Paper>
      </Container>
    </>
  );
}
