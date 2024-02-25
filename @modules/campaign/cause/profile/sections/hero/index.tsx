"use client";

import { AnimateText } from "@/@animate/text";
import { Container, Divider, Group, Text, Title } from "@mantine/core";
import React from "react";

export function SectionHero({ data }: { data: any }) {
  return (
    <Container size="xl" px={{ base: "xl", lg: 0 }}>
      <AnimateText.Container>
        <Group mb="xl" justify="space-between">
          <Group>
            <AnimateText.Row>
              <Text size="sm" fw={600} tt="uppercase" color="brand.5">
                {data.category}
              </Text>
            </AnimateText.Row>
            <AnimateText.Row>
              <Divider orientation="vertical" />
            </AnimateText.Row>
            <AnimateText.Row>
              <Group gap="xs">
                <Text size="sm" fw={600}>
                  {data.start_date}
                </Text>{" "}
                -{" "}
                <Text
                  fw={600}
                  size="sm"
                  tt="uppercase"
                  c={data.end_date ? "brand.5" : "teal.6"}
                >
                  {data.end_date || "Ongoing"}{" "}
                </Text>
              </Group>
            </AnimateText.Row>
          </Group>
        </Group>

        <AnimateText.Row>
          <>
            <Title size={"8rem"} lh={"7rem"} visibleFrom="lg">
              {data.title}
            </Title>
            <Title size={"3rem"} lh={"3.5rem"} hiddenFrom="lg">
              {data.title}
            </Title>
          </>
        </AnimateText.Row>

        <AnimateText.Row>
          <Text size="sm" fw={600} tt="uppercase" mt="sm" opacity={.5}>
            {data.location}
          </Text>
        </AnimateText.Row>
      </AnimateText.Container>
    </Container>
  );
}
