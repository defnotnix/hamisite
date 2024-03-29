import {
  ActionIcon,
  Avatar,
  Grid,
  Group,
  Paper,
  Space,
  Text,
  Tooltip,
} from "@mantine/core";
import { Quotes } from "@phosphor-icons/react";
import { IconBrandFacebook, IconBrandInstagram } from "@tabler/icons-react";
import Link from "next/link";

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
        <Group justify="space-between" align="flex-start">
          <Avatar size="xl" src={data.image} />
          <Quotes weight="fill" size={32} />
        </Group>

        <Space h="32" />

        <Text size="sm">{data.testimonial}</Text>

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
                <Group gap="4" mt="xs">
                  <Tooltip color="dark" label={data.name + "'s Instagram"}>
                    <Link href={"https://www.instagram.com/" + data.instagram}>
                      <ActionIcon size="xs" variant="light" color="orange">
                        <IconBrandInstagram />
                      </ActionIcon>
                    </Link>
                  </Tooltip>
                  {data.facebook && (
                    <Tooltip color="dark" label={data.name + "'s Facebook"}>
                      <Link href={"https://www.facebook.com/" + data.instagram}>
                        <ActionIcon size="xs" variant="light" color="blue">
                          <IconBrandFacebook />
                        </ActionIcon>
                      </Link>
                    </Tooltip>
                  )}
                </Group>
              </div>
            </Group>
          </Grid.Col>
          <Grid.Col span={4}>
            <Group justify="flex-end"></Group>
          </Grid.Col>
        </Grid>
      </Paper>
    </>
  );
}
