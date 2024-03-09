"use client";

import React, { useContext, useRef, useState } from "react";
//mantine
import {
  AspectRatio,
  Autocomplete,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
//hooks
import { useMouse } from "@mantine/hooks";
//motion
import { motion } from "framer-motion";
//query
import { useQuery } from "@tanstack/react-query";
//styles
import classes from "./hero.module.css";
//context
import { ContextPageProp } from "@/@context/PageProp";
//data
import { dataCampaignCause } from "@/@json/data/cause";
import { Circle } from "@phosphor-icons/react";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import AnimatedTitle from "@/@components/animated/AnimatedTitle";

import { variantContainer, variantContainerParent } from "@/@animate/container";
import { AnimateText } from "@/@animate/text";
import { useRouter } from "next/navigation";

import AutoPlay from "embla-carousel-autoplay";

export function SectionHomeHero() {
  // * DEFINITION

  const mousePosition = useMouse();
  const theme = useMantineTheme();

  const autoplay = useRef(AutoPlay());

  // * STATE

  const [slideActive, setSlideActive] = useState(0);

  // > CONTEXT

  const { state, dispatch } = useContext(ContextPageProp.Context);
  const Router = useRouter();

  // * PRELOADING

  const queryData = useQuery({
    queryKey: ["campaign", "causes", "featured"],
    queryFn: async () => {
      return dataCampaignCause;
    },
    initialData: [],
  });

  // * FUNCTIONS

  function initializePosition() {}

  // * COMPONENTS

  return (
    <>
      <motion.section
        initial="hidden"
        animate="show"
        ref={mousePosition.ref}
        className={classes.root}
        onMouseLeave={() => {
          initializePosition();
        }}
      >
        <div className={classes.backdrop}>
          <div className={classes.img_overlay}></div>

          <motion.div
            className={classes.img_face_front}
            animate={{
              y: !state.loading ? mousePosition.y / 15 : 0,
              x: !state.loading
                ? mousePosition.x / 17 - mousePosition.x / 15
                : 0,
            }}
            transition={{
              type: "tween",
            }}
          >
            <img src={queryData.data[slideActive]?.imgFace1} alt="" />
          </motion.div>

          <motion.div
            className={classes.img_face_mid}
            animate={{
              y: !state.loading ? -mousePosition.y / 30 : 0,
              x: !state.loading
                ? mousePosition.x / 17 - mousePosition.x / 15
                : 0,
            }}
            transition={{
              type: "tween",
            }}
          >
            <img src={queryData.data[slideActive]?.imgFace2} alt="" />
          </motion.div>

          <motion.div
            className={classes.img_shape_container}
            animate={{
              y: !state.loading ? mousePosition.y / 32 : 0,
              x: !state.loading
                ? mousePosition.x / 17 - mousePosition.x / 13
                : 0,
            }}
            transition={{
              type: "tween",
            }}
          >
            <Center>
              <div className={classes.img_shape}></div>

              <motion.div
                animate={{
                  rotate: "360deg",
                }}
                transition={{ repeat: Infinity, duration: 100 }}
                className={classes.img_outline}
              ></motion.div>
            </Center>
          </motion.div>

          <motion.div
            className={classes.img_face_back}
            animate={{
              y: !state.loading ? mousePosition.y / 10 : 0,
              x: !state.loading
                ? mousePosition.x / 15 - mousePosition.x / 10
                : 0,
            }}
            transition={{
              type: "tween",
            }}
          >
            <img src={queryData.data[slideActive]?.imgFace3} alt="" />
          </motion.div>
        </div>

        <div className={classes.forecontent}>
          <Container>
            <i className={classes.container_line} />

            <div className={classes.container}>
              <Container
                px={{
                  base: "xl",
                  lg: 0,
                }}
              >
                <Grid gutter={48} align="flex-end">
                  <Grid.Col span={{ base: 12, lg: 3 }} visibleFrom="lg">
                    <Grid pb="sm" align="flex-start">
                      <Grid.Col span={1}>
                        <Circle size={12} color={theme.colors.brand[5]} />
                      </Grid.Col>
                      <Grid.Col span={11}>
                        <SimpleGrid spacing="sm">
                          <AnimateText.Row>
                            <Text size="xs" fw={600}>
                              Phase IV
                              <br />
                              Distribution of 500+ jackets in different schools.
                            </Text>
                          </AnimateText.Row>
                          <AnimateText.Row>
                            <Text size="xs" opacity={0.6}>
                              2023-07-15 - 2023-12-31
                            </Text>
                          </AnimateText.Row>
                          <AnimateText.Row>
                            <Text size="xs">
                              We expanded our focus to address the immediate
                              needs of schoolchildren by distributing 500+
                              jackets across various schools in the affected
                              areas.
                            </Text>
                          </AnimateText.Row>
                          <AnimateText.Row>
                            <Text size="xs" c="brand.5">
                              6 Volunteers | - Participants
                            </Text>
                          </AnimateText.Row>
                        </SimpleGrid>
                      </Grid.Col>
                    </Grid>
                  </Grid.Col>
                  <Grid.Col span={{ base: 12, lg: 5 }} offset={{ lg: 0.5 }}>
                    <Box visibleFrom="lg">
                      <AnimatedTitle
                        size="3.5rem"
                        lh="3.5rem"
                        c="rgba(255,255,255,1)"
                      >
                        {queryData.data[slideActive]?.title || ""}
                      </AnimatedTitle>
                    </Box>

                    <Box hiddenFrom="lg">
                      <Title
                        size="2.5rem"
                        lh="2.5rem"
                        c="rgba(255,255,255,1)"
                        ta="center"
                      >
                        {queryData.data[slideActive]?.title || ""}
                      </Title>
                    </Box>
                    <Group justify="center" gap="xs" visibleFrom="lg">
                      <AnimateText.Row>
                        <Text size="xs" mt="md" tt="uppercase" opacity={0.8}>
                          Current ongoing cause
                        </Text>
                      </AnimateText.Row>
                      <AnimateText.Row>
                        <Text size="xs" mt="md" tt="uppercase" opacity={0.3}>
                          |
                        </Text>
                      </AnimateText.Row>
                      <AnimateText.Row>
                        <Button
                          mt="md"
                          size="xs"
                          variant="subtle"
                          onClick={() => {
                            dispatch({
                              type: "TRANSITION_START",
                              value: "Causes",
                            });

                            setTimeout(() => {
                              Router.push("/campaign/causes/1");
                            }, 1000);
                          }}
                        >
                          VIEW CAUSE
                        </Button>
                      </AnimateText.Row>
                    </Group>

                    <Group justify="center" gap="xs" hiddenFrom="lg">
                      <AnimateText.Row>
                        <Text size="xs" mt="md" tt="uppercase" opacity={0.8}>
                          Current ongoing cause
                        </Text>
                      </AnimateText.Row>
                      <AnimateText.Row>
                        <Text size="xs" mt="md" tt="uppercase" opacity={0.3}>
                          |
                        </Text>
                      </AnimateText.Row>
                      <AnimateText.Row>
                        <Link href="#">
                          <Text
                            c="brand.5"
                            size="xs"
                            mt="md"
                            tt="uppercase"
                            opacity={0.8}
                          >
                            VIEW CAUSE
                          </Text>
                        </Link>
                      </AnimateText.Row>
                    </Group>
                  </Grid.Col>

                  <Grid.Col
                    span={{ base: 12, lg: 3 }}
                    offset={{ lg: 0.5 }}
                    visibleFrom="lg"
                  >
                    <Link href="https://www.instagram.com/haminepal_/?hl=en">
                      <Group justify="flex-end">
                        <Carousel
                          w={200}
                          withControls={false}
                          withIndicators={false}
                          slideSize={"50%"}
                          slideGap={"xs"}
                          align={"start"}
                          loop={true}
                          plugins={[autoplay.current]}
                        >
                          <Carousel.Slide>
                            <motion.div variants={variantContainer}>
                              <AspectRatio ratio={9 / 16} maw={150}>
                                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9VWTdlTpPfeBK8xTummFHbP2cFo6tFRYr5sZaMqcsFF4L9PFR-73Urj5mILPC_evUwuo&usqp=CAU" />
                              </AspectRatio>
                            </motion.div>
                          </Carousel.Slide>
                          <Carousel.Slide>
                            <AspectRatio ratio={9 / 16} maw={150}>
                              <Image src="data:image/jpeg;base64,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" />
                            </AspectRatio>
                          </Carousel.Slide>
                          <Carousel.Slide>
                            <AspectRatio ratio={9 / 16} maw={150}>
                              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTieB-bLYxvSLh7TkpF3q0vZkPr1aww-GmLVoUtoJPKHZnNA0WWPVoOqkh6aRVTvZskbIo&usqp=CAU" />
                            </AspectRatio>
                          </Carousel.Slide>
                        </Carousel>
                      </Group>
                    </Link>
                  </Grid.Col>
                </Grid>
              </Container>
            </div>
          </Container>
        </div>
      </motion.section>
    </>
  );
}
