"use client";

import React, { useState } from "react";
//mantine
import {
  ActionIcon,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Modal,
  Paper,
  ScrollArea,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { ArrowRight } from "@phosphor-icons/react";
import { Carousel } from "@mantine/carousel";
import { Cards } from "@/@components/card";
import { useDisclosure } from "@mantine/hooks";
import { AnimateDiv } from "@/@animate/div";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export function SectionVolunteers({ data }: { data: any }) {
  // * DEFINITION

  // * STATE

  const [opened, handlers] = useDisclosure(false, {
    onOpen: () => {},
  });

  const [activeData, setActiveData] = useState<any>({});

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Container mt={160} size="xl">
        <AnimateDiv.Container>
          <AnimateDiv.Row key={1}>
            <Group gap="xs">
              <ArrowRight color="var(--mantine-color-brand-5)" />
              <Text size="xs" tt="uppercase">
                Volunteers Involved
              </Text>
            </Group>
          </AnimateDiv.Row>

          <AnimateDiv.Row key={2}>
            <Carousel
              withControls={false}
              slideSize={{
                base: "100%",
                lg: "33.33%",
              }}
              align="start"
              my={64}
              slideGap={"lg"}
            >
              {data.volunteers.reverse().map((userinfo: any, index: number) => (
                <Carousel.Slide
                  key={index}
                  onClick={() => {
                    handlers.open();
                    setActiveData(userinfo);
                  }}
                >
                  <Paper
                    radius="lg"
                    key={index}
                    bg="dark.9"
                    style={{
                      // backgroundImage:
                      //   "url(https://0.soompi.io/wp-content/uploads/2021/06/12125311/I.M.jpeg)",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <Paper
                      p="xl"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.85) 70%)",
                        position: "relative",
                      }}
                    >
                      <Space h={500} />

                      <Group>
                        <Title c="brand.5">@</Title>
                        <div>
                          <Title>{userinfo}</Title>
                          <Text size="xs">Volunteer</Text>
                        </div>
                      </Group>

                      <Group gap={0} justify="flex-end">
                        <ActionIcon variant="subtle" size="xs">
                          <IconBrandFacebook />
                        </ActionIcon>
                        <ActionIcon variant="subtle" size="xs">
                          <IconBrandInstagram />
                        </ActionIcon>
                        <ActionIcon variant="subtle" size="xs">
                          <IconBrandLinkedin />
                        </ActionIcon>
                      </Group>
                    </Paper>
                  </Paper>
                </Carousel.Slide>
              ))}
            </Carousel>
          </AnimateDiv.Row>
        </AnimateDiv.Container>
      </Container>
    </>
  );
}
