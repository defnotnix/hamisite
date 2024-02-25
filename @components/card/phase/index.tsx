import {
  ActionIcon,
  Box,
  Divider,
  Group,
  Image,
  Paper,
  Space,
  Text,
  Title,
} from "@mantine/core";
import { ArrowRight } from "@phosphor-icons/react";

import classes from "./phase.module.css";
import { useHover } from "@mantine/hooks";

export function CardPhase({ data }: { data: any }) {
  return (
    <Paper
      withBorder
      radius="lg"
      className={classes.root}
      style={{
        backgroundImage: `url(${data.thumbnail})`,
      }}
    >
      <Paper className={classes.overlay}>
        <Space h={300} />

        <Box p="xl" py="xl">
          <Group justify="space-between">
            <Group gap="xs">
              <Text size="xs" fw={600} tt="uppercase" c="gray.6">
                PHASE {data.phase_order}
              </Text>
              <Divider orientation="vertical" />
              <Text size="xs" fw={600} tt="uppercase" c="brand.6">
                {data.phase_category}
              </Text>
            </Group>

            <Text size="xs" fw={600}>
              {data.start_date} -{" "}
              <span
                style={{
                  color: data.active ? "var(--mantine-color-teal-5)" : "",
                }}
              >
                {data.active ? "ACTIVE" : data.end_date}
              </span>
            </Text>
          </Group>

          <Space h={"xl"} />

          <Title size="2rem" lh="2.5rem">
            {data.label}
          </Title>
        </Box>
      </Paper>
    </Paper>
  );
}
