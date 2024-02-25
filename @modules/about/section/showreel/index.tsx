"use client";

import {
  ActionIcon,
  AspectRatio,
  Box,
  Container,
  Paper,
  Text,
} from "@mantine/core";
import { Play } from "@phosphor-icons/react";

export function SectionShowreel() {
  return (
    <>
      <Container>
        <AspectRatio ratio={16 / 9}>
          <Paper
            radius="xl"
            style={{
              overflow: "hidden",
              background: "rgba()",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActionIcon size={"3rem"} radius={9999} mb="md" variant="light">
              <Play weight="fill" />
            </ActionIcon>

            <Text size="xs">Play our Showreel</Text>
          </Paper>
        </AspectRatio>
      </Container>
    </>
  );
}
