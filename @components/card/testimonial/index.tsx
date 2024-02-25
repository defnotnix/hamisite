import { Avatar, Grid, Group, Paper, Space, Text } from "@mantine/core";
import { Quotes } from "@phosphor-icons/react";

export function CardTestimonial({ data }: { data: any }) {
  return (
    <>
      <Paper
        p="xl"
        bg="rgba(255,255,255,.05)"
        withBorder
        style={{
          borderColor: "var(--mantine-color-dark-7)",
        }}
        radius="lg"
      >
        <Quotes weight="fill" />

        <Space h="100" />

        <Text size="1.3rem" lh="2rem">
          -
        </Text>

        <Space h="xl" />

        <Grid>
          <Grid.Col span={1}>
            <span
              style={{
                color: "var(--mantine-color-brand-5)",
              }}
            >
              @
            </span>
          </Grid.Col>
          <Grid.Col span={7}>
            <Group gap="xs">
              <div>
                <Text size="sm">{data.name}</Text>
                <Text size="xs" opacity={0.5}>
                  {data.title}
                </Text>
              </div>
            </Group>
          </Grid.Col>
          <Grid.Col span={4}>
            <Group justify="flex-end">
              <Avatar src={data.image} />
            </Group>
          </Grid.Col>
        </Grid>
      </Paper>
    </>
  );
}
