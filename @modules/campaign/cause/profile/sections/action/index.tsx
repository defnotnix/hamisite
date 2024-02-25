"use client";

import React, { useState } from "react";
//mantine
import {
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
import { ModalPhase } from "./modal";

export function SectionAction({ data }: { data: any }) {
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
                ACTION TAKEN / PHASES
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
              {data.campaign_phases
                .reverse()
                .map((phaseinfo: any, index: number) => (
                  <Carousel.Slide
                    key={index}
                    onClick={() => {
                      handlers.open();
                      setActiveData(phaseinfo);
                    }}
                  >
                    <Cards.Phase data={phaseinfo} />
                  </Carousel.Slide>
                ))}
            </Carousel>
          </AnimateDiv.Row>
        </AnimateDiv.Container>
      </Container>

      <Modal
        radius={"lg"}
        title={null}
        withCloseButton={false}
        size="1200"
        opened={opened}
        onClose={handlers.close}
        styles={{
          body: {
            background: "var(--mantine-color-dark-9)",
          },
        }}
      >
        <ModalPhase
          activeData={{
            ...activeData,
            total: data.campaign_phases.length || 0,
          }}
        />
      </Modal>
    </>
  );
}
