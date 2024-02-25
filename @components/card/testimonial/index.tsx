import { Avatar, Group, Paper, Space, Text } from "@mantine/core";
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

        <Group justify="space-between">
          <Group gap="xs">
            <span
              style={{
                color: "var(--mantine-color-brand-5)",
              }}
            >
              @
            </span>
            <div>
              <Text size="sm">{data.name}</Text>
              <Text size="xs" opacity={0.5}>
                Influencer
              </Text>
            </div>
          </Group>

          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjMTZTN48t3ivlGYM0cvvVhN7_9MvjDMdgFg&usqp=CAU" />
        </Group>
      </Paper>
    </>
  );
}
