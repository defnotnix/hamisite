"use client";

import {
  ActionIcon,
  AspectRatio,
  Box,
  Card,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { Play } from "@phosphor-icons/react";
import React, { useState } from "react";
import { Cards } from "@/@components/card";
import { AnimateText } from "@/@animate/text";
import { AnimateDiv } from "@/@animate/div";
import { dataSupporters } from "@/@json/data/supporters";
import { influencerTestimonials } from "@/@json/data/testimonial";
import Link from "next/link";

export function SectionTestimonial() {
  // * DEFINITION
  const theme = useMantineTheme();

  // * STATES

  const [active, setActive] = useState(0);

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Container size="lg" py={{ base: "xl", lg: 100 }}>
        <AnimateText.Container>
          <AnimateText.Row>
            <Group gap="xs" justify="center">
              <Text size="xs" opacity={0.3}>
                SUPPORTERS
              </Text>
            </Group>
          </AnimateText.Row>
          <AnimateText.Row>
            <Title my="xl" size="1.6rem" ta="center">
              PEOPLE THAT SUPPORT US
            </Title>
          </AnimateText.Row>
        </AnimateText.Container>

        <AnimateDiv.Row>
          <Carousel
            mb={100}
            slideSize={{
              base: "100%",
              lg: "33.33%",
            }}
            initialSlide={0}
            withControls={false}
            align="start"
            slideGap={"md"}
          >
            {influencerTestimonials.map((testimonial: any, index: number) => (
              <Carousel.Slide key={index}>
                <Cards.Testimonial data={testimonial} />
              </Carousel.Slide>
            ))}
          </Carousel>
        </AnimateDiv.Row>

        <AnimateText.Row>
          <Title my="xl" size="1.6rem" ta="center">
            BRANDS THAT SUPPORT US
          </Title>
        </AnimateText.Row>

        <AnimateDiv.Container>
          <SimpleGrid cols={{ base: 4, lg: 6 }} spacing="xl">
            {dataSupporters.map((supdata: any, index: number) => (
              <React.Fragment key={index}>
                <AnimateDiv.Row>
                  <Link href={supdata.url}>
                    <Image
                      my="xs"
                      style={{
                        filter: supdata.invert ? "invert(100%)" : "",

                        objectFit: "contain",
                      }}
                      src={supdata.img}
                    />
                  </Link>
                </AnimateDiv.Row>
              </React.Fragment>
            ))}
          </SimpleGrid>
        </AnimateDiv.Container>
      </Container>
    </>
  );
}
