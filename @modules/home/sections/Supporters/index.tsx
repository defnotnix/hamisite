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
import { useState } from "react";
import { Cards } from "@/@components/card";
import { influencerTestimonials } from "@/@json/data/testimonial";

export function SectionHomeSupporters() {
  // * DEFINITION
  const theme = useMantineTheme();

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
      <Container size="lg" py={{ base: "xl", lg: 100 }}>
        <Group gap="xs" justify="center">
          <Text size="xs" opacity={0.3}>
            SUPPORTERS
          </Text>
        </Group>

        <Title my="xl" size="1.6rem" ta="center">
          PEOPLE THAT SUPPORT US
        </Title>

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

        <Title my="xl" size="1.6rem" ta="center" mb="100">
          BRANDS THAT SUPPORT US
        </Title>

        <SimpleGrid cols={{ base: 4, lg: 6 }} spacing="xl">
          {supporters.map((supdata: any, index: number) => (
            <Image
              my="xl"
              style={{
                //filter: "invert(100%)",
                maxHeight: "3rem",
                maxWidth: "7rem",
                objectFit: "contain",
              }}
              src={supdata.img}
              key={index}
            />
          ))}
        </SimpleGrid>
      </Container>
    </>
  );
}
