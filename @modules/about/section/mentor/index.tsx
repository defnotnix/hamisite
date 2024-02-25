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

export function SectionMentor() {
  // * DEFINITION
  const theme = useMantineTheme();

  // * STATES

  const [active, setActive] = useState(0);

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Container size="xl" py={{ base: "xl", lg: 100 }}>
        <AnimateText.Container>
          <AnimateText.Row>
            <Group gap="xs" justify="center">
              <Text size="xs" opacity={0.3}>
                MENTORS
              </Text>
            </Group>
          </AnimateText.Row>
          <AnimateText.Row>
            <Title my="xl" size="1.6rem" ta="center">
              OUR MENTORS
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
                      When I am operating, my soul, my heart, my brain,
                      everything is in the eye. Because I don't think about
                      anything else, just the eye.
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
                      Dr.
                    </AnimatedTitle>{" "}
                    <AnimatedTitle
                      size={"8rem"}
                      lh={"7rem"}
                      ta="left"
                      c="rgba(255,255,255,1)"
                    >
                      Sanduk
                    </AnimatedTitle>
                    <AnimatedTitle size={"8rem"} lh={"7rem"} ta="left">
                      Ruit.
                    </AnimatedTitle>
                    <AnimateText.Row>
                      <Text
                        size="md"
                        style={{
                          lineHeight: "1.8rem",
                        }}
                      >
                        <b>Dr. Sanduk Ruit</b>, is a world renowned
                        ophthalmologist and philanthropist widely recognised for
                        restoring the sight of over 130,000 people. He is an
                        eminent eye-surgeon and also the first to pioneer a
                        method for delivering high-quality microsurgical
                        procedures in remote eye camps. Dr. Sanduk’s
                        humanitarian efforts have changed the lives of many, he
                        has been a mentor and ally for Hami Nepal.
                      </Text>
                    </AnimateText.Row>
                    <AnimateText.Row>
                      <Text
                        size="md"
                        style={{
                          lineHeight: "1.8rem",
                        }}
                      >
                        His assistance has been paramount during times of
                        crisis, providing his expertise in the medical field to
                        carry out the task more efficiently. During the second
                        lockdown, he shared Barbara foundation ‘s office space
                        where Hami Nepal family has found a home. His continued
                        moral support, guidance has helped us pursue a vision
                        for better Nepal.
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
