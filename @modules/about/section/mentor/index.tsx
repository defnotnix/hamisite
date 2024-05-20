"use client";

import {
  ActionIcon,
  AspectRatio,
  Blockquote,
  Box,
  Center,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
import { Circle, Play } from "@phosphor-icons/react";
import { useState } from "react";
//styles
import classes from "./mentor.module.css";
//images
import imgSandip from "@/@assets/img/SandukRuit2.png";
import imgManita from "@/@assets/img/manita.png";
import { AnimateText } from "@/@animate/text";
import AnimatedTitle from "@/@components/animated/AnimatedTitle";
import { AnimateDiv } from "@/@animate/div";
import cx from "clsx";
import { AnimatePresence } from "framer-motion";

export function SectionMentor() {
  // * DEFINITION
  const theme = useMantineTheme();

  // * STATES

  const [active, setActive] = useState(0);

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  const TabMentorSanduk = () => {
    return (
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
                    When I am operating, my soul, my heart, my brain, everything
                    is in the eye. Because I don't think about anything else,
                    just the eye.
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
                      eminent eye-surgeon and also the first to pioneer a method
                      for delivering high-quality microsurgical procedures in
                      remote eye camps. Dr. Sanduk’s humanitarian efforts have
                      changed the lives of many, he has been a mentor and ally
                      for Hami Nepal.
                    </Text>
                  </AnimateText.Row>
                  <AnimateText.Row>
                    <Text
                      size="md"
                      style={{
                        lineHeight: "1.8rem",
                      }}
                    >
                      His assistance has been paramount during times of crisis,
                      providing his expertise in the medical field to carry out
                      the task more efficiently. During the second lockdown, he
                      shared Barbara foundation ‘s office space where Hami Nepal
                      family has found a home. His continued moral support,
                      guidance has helped us pursue a vision for better Nepal.
                    </Text>
                  </AnimateText.Row>
                </Stack>
              </AnimateText.Container>
            </Grid.Col>
          </Grid>
        </Container>
      </Paper>
    );
  };

  const TabAmbassador = () => {
    return (
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
                  <Image src={imgManita.src} mb={{ base: "xl", lg: 0 }} />
                </AnimateDiv.Row>
                <AnimateDiv.Row>
                  {/* <Blockquote
                    mt="md"
                    color="brand"
                    style={{
                      background: theme.colors.dark[9],
                    }}
                    p="xl"
                  >
                  Miss Universe Nepal 2018
                  </Blockquote> */}
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
                      Nepal 2018 A.D., a determined and resilient Nepalese woman
                      who has navigated various challenges and pursued her
                      dreams. Ms. Devkota has made a positive impact in her
                      community and beyond with her consistent dedication, a
                      strong sense of identity and purpose.
                    </Text>
                  </AnimateText.Row>
                  <AnimateText.Row>
                    <Text
                      size="md"
                      style={{
                        lineHeight: "1.8rem",
                      }}
                    >
                      Manita Devkota has really been supportive to Hami Nepal in
                      terms of raising funds both locally and globally. She has
                      also been actively involved in raising awareness about the
                      various issues that Hami Nepal is addressing. Her
                      dedication to these efforts has made a significant impact,
                      increasing the organization’s reach and impact.
                    </Text>
                  </AnimateText.Row>
                </Stack>
              </AnimateText.Container>
            </Grid.Col>
          </Grid>
        </Container>
      </Paper>
    );
  };

  const tabs = [
    {
      label: "Mentor",
      sub: "Dr.Sanduk Ruit",
      render: <TabMentorSanduk />,
    },
    {
      label: "Goodwill Ambassador",
      sub: "Ms. Manita Devkota",
      render: <TabAmbassador />,
    },
  ];

  return (
    <>
      <Container size="xl" py={{ base: "xl", lg: 100 }}>
        <AnimateText.Container>
          <AnimateText.Row>
            <Group gap="xs" justify="center">
              <Text size="xs" opacity={0.3}>
                MENTORS & AMBASSADORS
              </Text>
            </Group>
          </AnimateText.Row>
          <AnimateText.Row>
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
                      </>
                    </AnimateText.Row>
                  </UnstyledButton>
                ))}
              </Group>
            </Center>
          </AnimateText.Row>
        </AnimateText.Container>

        <AnimatePresence>{tabs[active].render}</AnimatePresence>
      </Container>
    </>
  );
}
