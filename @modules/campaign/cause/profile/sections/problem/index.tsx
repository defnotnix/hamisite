"use client";

import React, { useState } from "react";
//mantine
import {
  Button,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import { ArrowRight } from "@phosphor-icons/react";
import { AnimateDiv } from "@/@animate/div";
import Link from "next/link";

export function SectionProblem() {
  // * DEFINITION

  // * STATE

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Container mt={100} size="xl">
        <AnimateDiv.Container>
          <AnimateDiv.Row key={1}>
            <Group gap="xs">
              <ArrowRight color="var(--mantine-color-brand-5)" />
              <Text size="xs" tt="uppercase">
                The Problem
              </Text>
            </Group>
          </AnimateDiv.Row>

          <Grid>
            <Grid.Col span={{ base: 12, lg: 9 }}>
              <Stack gap="xl">
                <AnimateDiv.Row key={2}>
                  <>
                    <Text size="2.5rem" lh="3.5rem" mt="xl" visibleFrom="lg">
                      At 23:47 NPT (18:02 UTC) on November 3, 2023, a magnitude
                      5.7 earthquake hit Jajarkot District, Karnali Province,
                      Nepal. This seismic event resulted in the loss of 153
                      lives and caused injuries to at least 375 individuals. Its
                      impact was felt extensively across western Nepal and
                      northern India. Remarkably, it stands as the deadliest
                      earthquake in Nepal since 2015.
                    </Text>
                    <Text size="1.5rem" lh="2.5rem" mt="xl" hiddenFrom="lg">
                      At 23:47 NPT (18:02 UTC) on November 3, 2023, a magnitude
                      5.7 earthquake hit Jajarkot District, Karnali Province,
                      Nepal. This seismic event resulted in the loss of 153
                      lives and caused injuries to at least 375 individuals. Its
                      impact was felt extensively across western Nepal and
                      northern India. Remarkably, it stands as the deadliest
                      earthquake in Nepal since 2015.
                    </Text>
                  </>
                </AnimateDiv.Row>
                <AnimateDiv.Row key={3}>
                  <Group>
                    <Link href="https://kathmandupost.com/national/2023/11/05/earthquake-wreaks-havoc-in-jajarkot-rukum-west">
                      <Button
                        size="lg"
                        style={{
                          fontSize: "var(--mantine-font-size-sm)",
                        }}
                        variant="light"
                        rightSection={<ArrowRight />}
                      >
                        Read a full report on this disaster here
                      </Button>
                    </Link>
                  </Group>
                </AnimateDiv.Row>
              </Stack>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 3 }}>
              <AnimateDiv.Row key={4}>
                <>
                  <Image
                    radius="lg"
                    h={550}
                    src="https://assets-cdn.kathmandupost.com/uploads/source/news/2023/third-party/HKCJajarkot4-1699061762.jpg"
                  />
                  <Text size="xs" ta="center" mt="md" opacity={0.7}>
                    Source: Initial glimpse of the earthquake's destructive
                    aftermath. Credsit: The Himalayan Times.
                  </Text>
                </>
              </AnimateDiv.Row>
            </Grid.Col>
          </Grid>
        </AnimateDiv.Container>
      </Container>
    </>
  );
}
