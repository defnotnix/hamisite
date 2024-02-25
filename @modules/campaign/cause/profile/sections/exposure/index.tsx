"use client";

import { Container, Group, Text } from "@mantine/core";
import { ArrowRight } from "@phosphor-icons/react";

export function SectionExposure({ data }: { data: any }) {
  // * DEFINITION

  // * STATE

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Container mt={100} size="xl">
        <Group gap="xs">
          <ArrowRight color="var(--mantine-color-brand-5)" />
          <Text size="xs" tt="uppercase">
            Media Exposure & Articles
          </Text>
        </Group>
      </Container>
    </>
  );
}
