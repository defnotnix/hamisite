"use client";

import {
  Button,
  Container,
  Divider,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

//styles
import classes from "./footer.module.css";
import { ArrowRight } from "@phosphor-icons/react";
import { configNavPage } from "@/@config/nav/page";

export function LayoutSiteFooter() {
  return (
    <>
      <section className={classes.root}>
        <Divider opacity={0.5} mb={100} />

        <Container size="xl" px={{ base: "xl", lg: 0 }}>
          <SimpleGrid
            cols={{ base: 1, lg: 2 }}
            spacing={{ base: "md", lg: "5rem" }}
          >
            <Stack gap="xl">
              <Text size="3rem" lh="3.5rem" visibleFrom="lg"   ta={{ base: "center", lg: "left" }}>
                Join us in our fight for a better future for our societies and
                its people.
              </Text>

              <Text size="2rem" lh="2.5rem" hiddenFrom="lg"   ta={{ base: "center", lg: "left" }}>
                Join us in our fight for a better future for our societies and
                its people.
              </Text>

              <TextInput
                description="Stay updated with us and our causes."
                placeholder="Susbcribe to our Newsletter"
                rightSection={<ArrowRight />}
              />

              <div>
                <Button rightSection={<ArrowRight />} variant="light" visibleFrom="lg">
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
                    +977 01 4331231 , 9841312312
                  </Text>

                  <Text size="sm" ta={{ base: "center", lg: "left" }}>
                    info@haminepal.org
                  </Text>
                </Stack>
              </div>
            </SimpleGrid>
          </SimpleGrid>
        </Container>

        <div className={classes.textoverlay}>हामी नेपाल</div>
      </section>
    </>
  );
}
