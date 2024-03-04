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
import React, { useRef, useState } from "react";
import { Cards } from "@/@components/card";
import { influencerTestimonials } from "@/@json/data/testimonial";
import { dataSupporters } from "@/@json/data/supporters";
import { AnimateDiv } from "@/@animate/div";
import Link from "next/link";

import AutoScroll from "embla-carousel-auto-scroll";

export function SectionHomeSupporters() {
  // * DEFINITION
  const theme = useMantineTheme();
  const autoplay = useRef(AutoScroll({ speed: 0.6, direction: "backward" }));
  const autoplay2 = useRef(AutoScroll({ speed: 0.6 }));
  const autoplay3 = useRef(AutoScroll({ speed: 0.6 }));

  const autoplay4 = useRef(AutoScroll({ speed: 0.3 }));

  // * STATES

  const [active, setActive] = useState(0);

  const supporters = [
    {
      img: "https://dogstudio.co/app/uploads/2019/02/new-york-times.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/american-airlines.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/microsoft.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/msi.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/alexander-mcqueen.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/eastpack.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/rappi.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/quanta.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/burger-king.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/navy-pier.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/jfk.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/adobe.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/crypt.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/kikk.png",
    },
    {
      img: "https://dogstudio.co/app/uploads/2019/02/verizon.png",
    },
  ];

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Container size="xl" py={{ base: "xl", lg: 100 }}>
        <Group gap="xs" justify="center">
          <Text size="xs" opacity={0.3}>
            SUPPORTERS
          </Text>
        </Group>

        <Title my="xl" size="1.6rem" ta="center">
          PEOPLE THAT SUPPORT US
        </Title>
      </Container>
      <Container
        size="xl"
        style={{
          position: "relative",
        }}
      >
        <Paper
          h={600}
          style={{
            position: "absolute",
            width: "100%",
            left: 0,
            zIndex: 4,
            pointerEvents: "none",
            background:
              "linear-gradient(90deg, #000000ff 0%, #00000000 20%, #00000000 80%, #000000ff 100%)",
          }}
        />

        <Carousel
          loop={true}
          withIndicators={false}
          withControls={false}
          slideSize={{
            base: "100%",
            lg: "33.33%",
          }}
          initialSlide={0}
          align="start"
          slideGap={"md"}
          plugins={[autoplay4.current]}
          onMouseEnter={autoplay4.current.stop}
          onMouseLeave={autoplay4.current.play}
        >
          {influencerTestimonials.map((testimonial: any, index: number) => (
            <Carousel.Slide key={index}>
              <Cards.Testimonial data={testimonial} />
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
      <Title size="1.6rem" ta="center" my="100">
        BRANDS THAT SUPPORT US
      </Title>

      <Container
        size="xl"
        style={{
          position: "relative",
        }}
      >
        <Paper
          h={600}
          style={{
            position: "absolute",
            width: "100%",
            left: 0,
            zIndex: 4,
            pointerEvents: "none",
            background:
              "linear-gradient(90deg, #000000ff 0%, #00000000 20%, #00000000 80%, #000000ff 100%)",
          }}
        />

        <Carousel
          loop={true}
          withIndicators={false}
          withControls={false}
          slideSize={{ base: "20%", lg: "14.285%" }}
          align={"start"}
          plugins={[autoplay3.current]}
        >
          {dataSupporters.slice(0, 10).map((supdata: any, index: number) => (
            <Carousel.Slide key={index}>
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
            </Carousel.Slide>
          ))}
        </Carousel>
        <Carousel
          loop={true}
          withIndicators={false}
          withControls={false}
          slideSize={{ base: "20%", lg: "16.66%" }}
          align={"start"}
          plugins={[autoplay.current]}
        >
          {dataSupporters.slice(10, 20).map((supdata: any, index: number) => (
            <Carousel.Slide key={index}>
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
            </Carousel.Slide>
          ))}
        </Carousel>
      </Container>
    </>
  );
}
