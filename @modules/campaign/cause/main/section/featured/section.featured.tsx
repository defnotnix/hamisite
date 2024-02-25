"use client";

import React, { useState, useEffect, useContext } from "react";
//nextjs
import { useRouter } from "next/navigation";
//mantine
import {
  AspectRatio,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
//icons
import { ArrowRight } from "@phosphor-icons/react";
//query
import { useQuery } from "@tanstack/react-query";
import api from "@/@services/campaign/cause";
//context
import { ContextPageProp } from "@/@context/PageProp";
//classes
import classes from "./section.featured.module.css";
//motion
import { AnimatePresence, motion } from "framer-motion";

//animate
import { variantContainer } from "@/@animate/container";
//components
import { AnimateText } from "@/@animate/text";
import { CardCause } from "@/@components/card/cause";

export function SectionFeatured() {
  // * DEFINITION

  const theme = useMantineTheme();

  // * STATES

  // > CONTEXT
  const { state, dispatch } = useContext(ContextPageProp.Context);

  // > CAROUSEL

  const [active, setActive] = useState(0);

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
  }, []);

  // * ANIMATE

  // * FUNCTION

  // * COMPONENTS

  const CauseHeader = () => {
    const data: any = queryCause.data ? queryCause.data[active] : {};
    console.log(queryCause.data);

    return (
      <Container size="lg">
        <AnimateText.Container>
          <AnimateText.Container>
            <Grid>
              <Grid.Col span={12}>
                <AnimateText.Row>
                  <Title size="3rem" ta="center" mb="md" opacity={0.2}>
                    ONGOING CAUSES
                  </Title>
                </AnimateText.Row>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 4 }} visibleFrom="lg">
                <AnimateText.Row>
                  <Group gap="xs">
                    <Text size="xs" tt="uppercase" c="gray.6">
                      {String(new Date(data.start_date)).substring(0, 15)}
                    </Text>
                    <Text size="xs" c="gray.0" tt="uppercase">
                      {data.category}
                    </Text>
                  </Group>
                </AnimateText.Row>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 4 }} hiddenFrom="lg">
                <AnimateText.Row>
                  <Group gap="xs" justify="center">
                    <Text size="xs" tt="uppercase" c="gray.6">
                      {String(new Date(data.start_date)).substring(0, 15)}
                    </Text>
                    <Text size="xs" c="gray.0" tt="uppercase">
                      {data.category}
                    </Text>
                  </Group>
                </AnimateText.Row>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 4 }} visibleFrom="lg">
                <Group gap="xs" justify="center">
                  <AnimateText.Row>
                    <Text size="xs" fw={500}>
                      <b> {String(active + 1).padStart(2, "0")} - </b>
                      <span
                        style={{
                          opacity: 0.7,
                        }}
                      >
                        {String(queryCause.data.length).padStart(2, "0")}
                      </span>
                    </Text>
                  </AnimateText.Row>
                </Group>
              </Grid.Col>
              <Grid.Col span={{ base: 12, lg: 4 }} visibleFrom="lg">
                <Group gap="xs" justify="flex-end">
                  <AnimateText.Row>
                    <Button variant="subtle" size="xs" c="gray.0">
                      READ THE FULL STORY
                    </Button>
                  </AnimateText.Row>
                </Group>
              </Grid.Col>
            </Grid>
          </AnimateText.Container>
        </AnimateText.Container>
      </Container>
    );
  };

  return (
    <>
      <section>
        {queryCause.isFetched && <CauseHeader />}

        <Container>
          <motion.div
            variants={variantContainer}
            initial="hidden"
            whileInView={"show"}
          >
            <Carousel
              slideGap={"lg"}
              withControls={false}
              withIndicators={true}
              styles={{
                indicator: {
                  height: 1,
                  width: 10,
                },
              }}
            >
              <AnimatePresence>
                {queryCause.data.map((causeinfo: any, index: number) => {
                  if (index == active) {
                    return (
                      <motion.div key={index}>
                        <CardCause.Featured data={causeinfo} />
                      </motion.div>
                    );
                  }
                })}
              </AnimatePresence>
            </Carousel>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
