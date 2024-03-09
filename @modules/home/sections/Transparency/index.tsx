"use client";

import React, { useContext, useEffect, useState } from "react";
//next

//mantine
import {
  ActionIcon,
  Alert,
  Anchor,
  Badge,
  Box,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  Menu,
  Paper,
  Progress,
  Select,
  SimpleGrid,
  Space,
  Table,
  Tabs,
  Text,
  Title,
  Tooltip,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
//hooks
import {} from "@mantine/hooks";
//table
//icons
import {
  CaretDown,
  Image,
  Info,
  MagnifyingGlass,
  MicrosoftExcelLogo,
  Printer,
} from "@phosphor-icons/react";

import AnimatedTitle from "@/@components/animated/AnimatedTitle";

import { motion } from "framer-motion";
import { variantContainer, variantContainerParent } from "@/@animate/container";
import { AnimateText } from "@/@animate/text";

export function SectionHomeTransparency() {
  const theme = useMantineTheme();

  return (
    <Paper
      pt={{
        base: 64,
        lg: 160,
      }}
      pb={{
        base: 100,
        lg: 160,
      }}
      style={{
        background: theme.colors.dark[9],
      }}
    >
      <Container
        px={{
          base: "xl",
          xl: 0,
        }}
      >
        <Grid gutter={{ base: "sm", lg: 54 }}>
          <Grid.Col span={{ xs: 12, lg: 6 }}>
            <Box visibleFrom="lg">
              <AnimatedTitle size="6rem" lh="6rem" ta="left">
                Transparently
              </AnimatedTitle>
              <AnimatedTitle
                size="6rem"
                lh="6rem"
                c="rgba(255,255,255,1)"
                ta="left"
              >
                Unveiling our account.
              </AnimatedTitle>
            </Box>

            <Box hiddenFrom="lg">
              <AnimateText.Row key={1}>
                <>
                  <Title size="3rem" lh="3.5rem" ta="left" c="brand.5">
                    Transparently
                  </Title>
                  <Title size="3rem" lh="3.5rem" ta="left">
                    Unveiling our account.
                  </Title>
                </>
              </AnimateText.Row>
            </Box>

            <Space h="xl"></Space>
          </Grid.Col>

          <Grid.Col span={{ xs: 12, lg: 6 }} pt="xl">
            <motion.div
              variants={variantContainerParent}
              initial="hidden"
              whileInView="show"
            >
              <SimpleGrid spacing="lg" cols={{ xs: 1, lg: 2 }}>
                <motion.div variants={variantContainer}>
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
                      fontSize: "2.5rem",
                      fontWeight: 600,
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Rs.22,47,86,190
                    <span
                      style={{
                        color: theme.colors.gray[8],
                      }}
                    >
                      .00
                    </span>
                  </Text>
                </motion.div>
                <motion.div variants={variantContainer}>
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
                      fontSize: "2.5rem",
                      fontWeight: 600,
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Rs.7,03,82,390
                    <span
                      style={{
                        color: theme.colors.gray[8],
                      }}
                    >
                      .00
                    </span>
                  </Text>
                </motion.div>
                <motion.div variants={variantContainer}>
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
                      fontSize: "2.5rem",
                      fontWeight: 600,
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Rs. 19,11,28,460
                    <span
                      style={{
                        color: theme.colors.gray[8],
                      }}
                    >
                      .00
                    </span>
                  </Text>
                </motion.div>
                <motion.div variants={variantContainer}>
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
                      fontSize: "2.5rem",
                      fontWeight: 600,
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Rs. 54,98,17,120
                    <span
                      style={{
                        color: theme.colors.gray[8],
                      }}
                    >
                      .00
                    </span>
                  </Text>
                </motion.div>
              </SimpleGrid>
              <motion.div variants={variantContainer}>
                <Progress.Root size={8} my="xl">
                  <Tooltip label="Funds Donated - 22,47,86,190">
                    <Progress.Section
                      value={40.91}
                      color={theme.colors.teal[7]}
                    />
                  </Tooltip>
                  <Tooltip label="Kinds Donated - 7,03,82,390">
                    <Progress.Section
                      value={12.8}
                      color={theme.colors.orange[4]}
                    />
                  </Tooltip>
                  <Tooltip label="Total Used - 19,11,28,460">
                    <Progress.Section
                      value={34.76}
                      color={theme.colors.red[5]}
                    />
                  </Tooltip>
                  <Tooltip label="Remaining - 63,52,008">
                    <Progress.Section
                      value={11.54}
                      color={theme.colors.gray[7]}
                    />
                  </Tooltip>
                </Progress.Root>
              </motion.div>

              <motion.div variants={variantContainer}>
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
                    fontSize: "2.5rem",
                    fontWeight: 600,
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Rs. 63,52,008
                  <span
                    style={{
                      color: theme.colors.gray[8],
                    }}
                  >
                    .00
                  </span>
                </Text>
              </motion.div>
            </motion.div>

            <AnimateText.Row>
              <Group justify="center">
                <Alert
                  variant="light"
                  color="teal"
                  title="Notice! "
                  icon={<Info />}
                  mt="xl"
                >
                  <Text size="xs" mb="md">
                    We are currently in the process of building this site. Our
                    team is transferring all previous account records, and soon
                    it will be fully operational for your convenience. We
                    appreciate your patience during this time.
                  </Text>
                </Alert>
              </Group>
            </AnimateText.Row>
          </Grid.Col>
        </Grid>
      </Container>
    </Paper>
  );
}
