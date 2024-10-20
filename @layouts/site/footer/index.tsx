"use client";

import {
  ActionIcon,
  Badge,
  Button,
  Container,
  Divider,
  Group,
  SimpleGrid,
  Space,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

//styles
import classes from "./footer.module.css";
import { ArrowRight } from "@phosphor-icons/react";
import { configNavPage } from "@/@config/nav/page";
import { useRouter } from "next/navigation";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconMail,
} from "@tabler/icons-react";

export function LayoutSiteFooter() {
  const Router = useRouter();

  return (
    <>
      <section className={classes.root}>
        <Space mb={100} />

        <Container size="xl" px={{ base: "xl", xl: 0 }}>
          <SimpleGrid
            cols={{ base: 1, lg: 2 }}
            spacing={{ base: "md", lg: "5rem" }}
          >
            <Stack gap="xl">
              <Text
                size="3rem"
                lh="3.5rem"
                visibleFrom="lg"
                ta={{ base: "center", lg: "left" }}
              >
                Join us in our fight for a better future for our societies and
                its people.
              </Text>

              <Text
                size="2rem"
                lh="2.5rem"
                hiddenFrom="lg"
                ta={{ base: "center", lg: "left" }}
              >
                Join us in our fight for a better future for our societies and
                its people.
              </Text>

              <TextInput
                description="Stay updated with us and our causes."
                placeholder="Susbcribe to our Newsletter"
                rightSection={<ArrowRight />}
              />

              <div>
                <Button
                  rightSection={<ArrowRight />}
                  variant="light"
                  visibleFrom="lg"
                  onClick={() => {
                    Router.push("https://forms.gle/jxWV7QkH6QMHbYuJ6");
                  }}
                >
                  Apply as a volunteer
                </Button>
              </div>
            </Stack>

            <SimpleGrid cols={{ base: 1, lg: 2 }}>
              <div />
              <div>
                <Text
                  size="xs"
                  opacity={0.5}
                  mb="lg"
                  ta={{ base: "center", lg: "left" }}
                >
                  KATHMANDU
                </Text>

                <Stack gap="xs">
                  <Text size="sm" ta={{ base: "center", lg: "left" }}>
                    Hami Nepal Headquater
                    <br />
                    Baluwatar, Kathmandu, Nepal.
                  </Text>

                  <Text size="sm" ta={{ base: "center", lg: "left" }}>
                    +977 9802260017
                  </Text>

                  <Text size="sm" ta={{ base: "center", lg: "left" }}>
                    info@haminepal.org
                  </Text>

                  <Text
                    mt="md"
                    size="xs"
                    opacity={0.5}
                    mb="xs"
                    ta={{ base: "center", lg: "left" }}
                  >
                    SOCIALS
                  </Text>
                  <Group gap="xs" visibleFrom="lg">
                    <ActionIcon
                      variant="light"
                      onClick={() => {
                        Router.push("https://www.instagram.com/haminepal_/");
                      }}
                    >
                      <IconBrandFacebook size={22} stroke={1} />
                    </ActionIcon>
                    <ActionIcon
                      variant="light"
                      onClick={() => {
                        Router.push("https://www.facebook.com/HamiNepalNPO/");
                      }}
                    >
                      <IconBrandInstagram size={22} stroke={1} />
                    </ActionIcon>
                    <ActionIcon
                      variant="light"
                      onClick={() => {
                        Router.push("mailto:info@haminepal.org");
                      }}
                    >
                      <IconMail size={22} stroke={1} />
                    </ActionIcon>
                  </Group>

                  <Group gap="xs" justify="center" hiddenFrom="lg">
                    <ActionIcon
                      variant="light"
                      onClick={() => {
                        Router.push("https://www.facebook.com/HamiNepalNPO/");
                      }}
                    >
                      <IconBrandFacebook size={22} stroke={1} />
                    </ActionIcon>
                    <ActionIcon
                      variant="light"
                      onClick={() => {
                        Router.push("https://www.instagram.com/haminepal_/");
                      }}
                    >
                      <IconBrandInstagram size={22} stroke={1} />
                    </ActionIcon>
                    <ActionIcon
                      variant="light"
                      onClick={() => {
                        Router.push("mailto:info@haminepal.org");
                      }}
                    >
                      <IconMail size={22} stroke={1} />
                    </ActionIcon>
                  </Group>
                </Stack>
              </div>
            </SimpleGrid>
          </SimpleGrid>
        </Container>
        <Space mb={100} />

        <Container size="xl" px={{ base: "xl", xl: 0 }}>
          <Group justify="space-between" gap="xs">
            <Text opacity={0.5} size="xs">
              Copyright @ 2024 Hami Nepal
            </Text>

            <Group gap="xs">
              <Badge variant="dot" color="teal" tt="none">
                <Text size="xs">Beta Release - v0.1.7</Text>
              </Badge>
              <Text size="xs">Hami Nepal x Void Studio</Text>
            </Group>
          </Group>
        </Container>
      </section>
    </>
  );
}
