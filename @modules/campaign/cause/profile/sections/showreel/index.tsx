"use client";

import React, { useState, useEffect } from "react";
//mantine
import { ActionIcon, Container, Paper, Text } from "@mantine/core";
import { Play } from "@phosphor-icons/react";
import { AnimateDiv } from "@/@animate/div";

export function SectionShowreel({ data }: { data: any }) {
  return (
    <>
      <Container mt="100">
        <AnimateDiv.Row>
          <Paper
            radius="xl"
            style={{
              backgroundImage: `url(${data?.image_album[1]?.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Paper
              radius="xl"
              style={{
                overflow: "hidden",
                background: "rgba(0,0,0,.7)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: 700,
              }}
            >
              <ActionIcon size={"3rem"} radius={9999} mb="md" variant="light">
                <Play weight="fill" />
              </ActionIcon>

              <Text size="xs">Play our Cause Showreel</Text>
            </Paper>
          </Paper>
        </AnimateDiv.Row>
      </Container>
    </>
  );
}
