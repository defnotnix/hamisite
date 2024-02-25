"use client";

import React, { useState, useEffect } from "react";
//mantie
import {
  Container,
  Paper,
  SimpleGrid,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";

//syles
import classes from "./stats.module.css";
import { AnimateDiv } from "@/@animate/div";

export function SectionStats({ data }: { data: any }) {
  // * DEFINITIONS

  const theme = useMantineTheme();

  // * STATES

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Container size="xl" my={160}>
        <AnimateDiv.Container>
          <SimpleGrid cols={{ base: 2, lg: 4 }} spacing="xs">
            <AnimateDiv.Row key={1}>
              <Paper className={classes.statcard} p="xl" radius="lg">
                <Text size="xs" opacity={0.5} tt="uppercase">
                  Project Duration
                </Text>
                <Space h={48} />
                <Text size="2.5rem">127 days</Text>
                <Space h={"sm"} />
                <Text size="xs" c="gray.6">
                  {data.start_date} - {data.end_date || "Ongoing"}
                </Text>
              </Paper>
            </AnimateDiv.Row>

            <AnimateDiv.Row key={2}>
              <Paper className={classes.statcard} p="xl" radius="lg">
                <Text size="xs" opacity={0.5} tt="uppercase">
                  Families Helped
                </Text>
                <Space h={48} />
                <Text size="2.5rem">13,000 +</Text>
                <Space h={"sm"} />
                <Text size="xs" c="gray.6">
                  1,20,000 + Individuals
                </Text>
              </Paper>
            </AnimateDiv.Row>

            <AnimateDiv.Row key={3}>
              <Paper className={classes.statcard} p="xl" radius="lg">
                <Text size="xs" opacity={0.5} tt="uppercase">
                  Funds used
                </Text>
                <Space h={48} />
                <Text size="2.5rem">-</Text>
                <Space h={"sm"} />
                <Text size="xs" c="gray.6">
                  <span
                    style={{
                      opacity: 0.5,
                    }}
                  >
                    {" "}
                    Will be updated soon
                  </span>
                </Text>
              </Paper>
            </AnimateDiv.Row>

            <AnimateDiv.Row key={4}>
              <Paper className={classes.statcard} p="xl" radius="lg">
                <Text size="xs" opacity={0.5} tt="uppercase">
                  Goods Donated
                </Text>
                <Space h={48} />
                <Text size="2.5rem">-</Text>
                <Space h={"sm"} />
                <Text size="xs" c="gray.6">
                  Will be updated soon
                </Text>
              </Paper>
            </AnimateDiv.Row>
          </SimpleGrid>
        </AnimateDiv.Container>
      </Container>
    </>
  );
}
