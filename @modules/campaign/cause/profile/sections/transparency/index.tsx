"use client";

import React from "react";
//mantine
import {
  Anchor,
  Button,
  Container,
  Grid,
  Group,
  Paper,
  Progress,
  SimpleGrid,
  Space,
  Text,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { ArrowRight } from "@phosphor-icons/react";
import { AnimateDiv } from "@/@animate/div";

export function SectionTransparency({ data }: { data: any }) {
  // * DEFINITIONS

  const theme = useMantineTheme();

  // * STATE

  // * PRELOADING

  // * FUNCTIONS

  // * COMPONENTS

  return (
    <>
      <Container mt={100} size="xl" px={{ base: "xl", lg: 0 }}>
        <AnimateDiv.Container>
          <AnimateDiv.Row key={1}>
            <Group gap="xs" mb={100}>
              <ArrowRight color="var(--mantine-color-brand-5)" />
              <Text size="xs" tt="uppercase">
                TRANSPARENCY
              </Text>
            </Group>
          </AnimateDiv.Row>
          <AnimateDiv.Row key={2}>
            <Paper
              radius="lg"
              px={{ base: "md", lg: "xl" }}
              py={64}
              bg="dark.9"
            >
              <Container>
                <Grid>
                  <Grid.Col span={{ xs: 12, lg: 8 }}>
                    <Space h="xl" />

                    <Text
                      visibleFrom="lg"
                      className="heading"
                      style={{
                        fontSize: "5rem",
                        lineHeight: "5rem",
                        color: theme.colors.gray[2],
                      }}
                    >
                      <span
                        style={{
                          color: theme.colors.brand[5],
                        }}
                      >
                        TRANSPARENCY
                      </span>
                      <br />
                      FUNDS RECIEVED / USED
                    </Text>

                    <Text
                      hiddenFrom="lg"
                      className="heading"
                      style={{
                        fontSize: "3rem",
                        lineHeight: "3.5rem",
                        color: theme.colors.gray[2],
                      }}
                    >
                      <span
                        style={{
                          color: theme.colors.brand[5],
                        }}
                      >
                        TRANSPARENCY
                      </span>
                      <br />
                      FUNDS RECIEVED / USED
                    </Text>

                    <Button
                      style={{
                        fontSize: "var(--mantine-font-size-xs)",
                      }}
                      variant="light"
                      mt="xl"
                      rightSection={<ArrowRight />}
                    >
                      View the full transparency report
                    </Button>

                    <Text size="xs">
                      Hello, wonderful supporter!
                      <br />
                      <br />
                      Thank you for visiting the site! Please note that it is
                      currently under construction and not yet finalized
                      <br />
                      <br />
                      Our dedicated team is working hard on this revamped site
                      in time. Thank you immensely for your patience and ongoing
                      support.
                      <br />
                      <br />
                      With heartfelt gratitude,
                      <br />
                      <br />
                      We post detailed report of each project over{" "}
                      <Anchor
                        style={{
                          color: theme.colors.brand[5],
                        }}
                        href="https://www.instagram.com/haminepal_/"
                      >
                        Instagram
                      </Anchor>
                    </Text>
                  </Grid.Col>
                  <Grid.Col span={{ xs: 12, lg: 4 }} pt="lg">
                    <SimpleGrid spacing="lg" cols={{ xs: 1, lg: 2 }}>
                      <div>
                        <Text
                          style={{
                            color: theme.colors.teal[8],
                          }}
                          size="xs"
                        >
                          FUNDS RECIEVED
                        </Text>
                        <Text
                          style={{
                            fontSize: 24,
                            fontWeight: 600,
                          }}
                        >
                          -
                          <span
                            style={{
                              color: theme.colors.gray[5],
                            }}
                          >
                            -
                          </span>
                        </Text>
                      </div>
                      <div>
                        <Text
                          size="xs"
                          style={{
                            color: theme.colors.orange[8],
                          }}
                        >
                          KINDS RECIEVED
                        </Text>
                        <Text
                          style={{
                            fontSize: 24,
                            fontWeight: 600,
                          }}
                        >
                          -
                          <span
                            style={{
                              color: theme.colors.gray[5],
                            }}
                          >
                            -
                          </span>
                        </Text>
                      </div>
                      <div>
                        <Text
                          size="xs"
                          style={{
                            color: theme.colors.red[9],
                          }}
                        >
                          TOTAL SPENT
                        </Text>
                        <Text
                          style={{
                            fontSize: 24,
                            fontWeight: 600,
                          }}
                        >
                          -
                          <span
                            style={{
                              color: theme.colors.gray[5],
                            }}
                          >
                            -
                          </span>
                        </Text>
                      </div>
                      <div>
                        <Text
                          size="xs"
                          style={{
                            color: theme.colors.gray[6],
                          }}
                        >
                          TOTAL AMOUNT
                        </Text>
                        <Text
                          style={{
                            fontSize: 24,
                            fontWeight: 600,
                          }}
                        >
                          -
                          <span
                            style={{
                              color: theme.colors.gray[5],
                            }}
                          >
                            -
                          </span>
                        </Text>
                      </div>
                    </SimpleGrid>

                    <Progress.Root size={8} my="lg">
                      <Tooltip label="Funds Donated - 12,32,00.00">
                        <Progress.Section
                          value={25}
                          color={theme.colors.teal[7]}
                        />
                      </Tooltip>
                      <Tooltip label="Kinds Donated - 12,32,00.00">
                        <Progress.Section
                          value={25}
                          color={theme.colors.orange[4]}
                        />
                      </Tooltip>
                      <Tooltip label="Total Used - 12,32,00.00">
                        <Progress.Section
                          value={15}
                          color={theme.colors.red[5]}
                        />
                      </Tooltip>
                      <Tooltip label="Remaining - 12,32,00.00">
                        <Progress.Section
                          value={35}
                          color={theme.colors.gray[7]}
                        />
                      </Tooltip>
                    </Progress.Root>

                    <div>
                      <Text
                        size="xs"
                        style={{
                          color: theme.colors.gray[5],
                        }}
                      >
                        REMAINING AMOUNT
                      </Text>
                      <Text
                        style={{
                          fontSize: 24,
                          fontWeight: 600,
                        }}
                      >
                        -
                        <span
                          style={{
                            color: theme.colors.gray[5],
                          }}
                        >
                          -
                        </span>
                      </Text>
                    </div>
                  </Grid.Col>
                </Grid>
              </Container>
            </Paper>
          </AnimateDiv.Row>
        </AnimateDiv.Container>
      </Container>
    </>
  );
}
