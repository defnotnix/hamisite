"use client";

import React, { useContext, useEffect, useState } from "react";
//next

//mantine
import {
  ActionIcon,
  Anchor,
  Badge,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  Menu,
  Modal,
  Paper,
  Progress,
  Select,
  SimpleGrid,
  Space,
  Table,
  Tabs,
  Text,
  Tooltip,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
//hooks
import { useDisclosure } from "@mantine/hooks";
//table
//icons
import {
  CaretDown,
  Image,
  MagnifyingGlass,
  MicrosoftExcelLogo,
  Printer,
} from "@phosphor-icons/react";
//styles

//data
import { dataTransparency } from "@/@json/data/transparency";
//components
import { ContextPageProp } from "@/@context/PageProp";

export function ModuleTransparency() {
  // DEFINITION

  const theme = useMantineTheme();

  // PRE STATES

  // STATES

  const [activeTab, setActiveTab] = useState("donations");

  const { state, dispatch } = useContext(ContextPageProp.Context);
  // PRELOADING

  useEffect(() => {
    dispatch({
      type: "PAGE_LOADED",
      value: "transparency",
    });
  }, []);

  // FUNCTIONS

  // COMPONENTS

  const rows = dataTransparency.spent.map((element: any) => (
    <Table.Tr key={element.id}>
      <Table.Td>{element.id}</Table.Td>
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>
        <Anchor
          style={{
            color: theme.colors.red[6],
          }}
        >
          <Text
            style={{
              fontSize: theme.fontSizes.xs,
              fontWeight: 600,
            }}
          >
            {element.campaign}
          </Text>
        </Anchor>
      </Table.Td>
      <Table.Td>{element.particular}</Table.Td>
      <Table.Td>{element.donor}</Table.Td>
      <Table.Td>{element.quantity}</Table.Td>
      <Table.Td>{element.amount}</Table.Td>
      <Table.Td>
        <ActionIcon color="red" variant="light">
          <Image />
        </ActionIcon>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <Paper
        pt={160}
        pb={100}
        style={{
          background: theme.colors.dark[9],
        }}
      >
        <Container size="xl">
          <Grid>
            <Grid.Col span={{ xs: 12, lg: 8 }}>
              <Text
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
                  Nothing to hide.
                </span>
                <br />
                Revealing Our Account.
              </Text>

              <Space h="xl"></Space>
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
                  <Progress.Section value={25} color={theme.colors.teal[7]} />
                </Tooltip>
                <Tooltip label="Kinds Donated - 12,32,00.00">
                  <Progress.Section value={25} color={theme.colors.orange[4]} />
                </Tooltip>
                <Tooltip label="Total Used - 12,32,00.00">
                  <Progress.Section value={15} color={theme.colors.red[5]} />
                </Tooltip>
                <Tooltip label="Remaining - 12,32,00.00">
                  <Progress.Section value={35} color={theme.colors.gray[7]} />
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

      <Container size="xl">
        {/* <Tabs
          //   classNames={{
          //     tab: classes.tab,
          //     list: classes.tab_list,
          //   }}
          keepMounted={false}
          value={activeTab}
          color="red"
          variant="pills"
        >
          <Grid py="xl" my="xl">
            <Grid.Col
              span={{ xs: 12, lg: 6 }}
              style={{
                borderBottom: 0,
              }}
            >
              <Tabs.List>
                <Tabs.Tab value="donations">
                  <Group>
                    Donations
                    <Badge size="xs" color="red">
                      122
                    </Badge>
                  </Group>
                </Tabs.Tab>
                <Tabs.Tab value="spent">
                  <Group>
                    Spent
                    <Badge size="xs" color="red">
                      122
                    </Badge>
                  </Group>
                </Tabs.Tab>
                <Tabs.Tab value="in-house">
                  <Group>
                    In-House
                    <Badge size="xs" color="red">
                      122
                    </Badge>
                  </Group>
                </Tabs.Tab>
              </Tabs.List>
            </Grid.Col>
            <Grid.Col span={{ xs: 12, lg: 6 }}>
              <Group gap="xs" justify="flex-end">
                <Menu>
                  <Menu.Target>
                    <UnstyledButton>
                      <Group gap="xs">
                        <Text size="xs">Sort by Date Added</Text>
                        <CaretDown size={12} />
                      </Group>
                    </UnstyledButton>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item>Date Added</Menu.Item>
                    <Menu.Item>Completion Date</Menu.Item>
                    <Menu.Item>Status</Menu.Item>
                  </Menu.Dropdown>
                </Menu>

                <Group gap={0}>
                  <Tooltip label="Print Spreadsheet">
                    <ActionIcon
                      size="lg"
                      variant="light"
                      color="grape"
                      radius={0}
                      style={{
                        borderTopLeftRadius: theme.radius.md,
                        borderBottomLeftRadius: theme.radius.md,
                      }}
                    >
                      <Printer />
                    </ActionIcon>
                  </Tooltip>

                  <Tooltip label="Download Spreadsheet">
                    <ActionIcon
                      size="lg"
                      variant="filled"
                      color="teal"
                      radius={0}
                      style={{
                        borderTopRightRadius: theme.radius.md,
                        borderBottomRightRadius: theme.radius.md,
                      }}
                    >
                      <MicrosoftExcelLogo />
                    </ActionIcon>
                  </Tooltip>
                </Group>
                <Select
                  leftSection={<MagnifyingGlass />}
                  radius="md"
                  size="sm"
                  placeholder="Select Campaign"
                  data={[]}
                />
              </Group>
            </Grid.Col>
          </Grid>
        </Tabs> */}

        {/* <Paper withBorder>
          <Table
            striped
            verticalSpacing={"xs"}
            style={{
              fontSize: theme.fontSizes.xs,
            }}
          >
            <Table.Thead>
              <Table.Tr>
                <Table.Th>#</Table.Th>
                <Table.Th>Date</Table.Th>
                <Table.Th>Campaign</Table.Th>
                <Table.Th>Particular</Table.Th>
                <Table.Th>Donor</Table.Th>
                <Table.Th>Quantity</Table.Th>
                <Table.Th>Amount</Table.Th>
                <Table.Th>Reciept</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{rows}</Table.Tbody>
          </Table>
        </Paper> */}

        <Text size="sm" ta="center" my={100}>
          <Text size="sm">
            Hello, wonderful supporter!
            <br />
            <br />
            Thank you for visiting the site! Please note that it is currently
            under construction and not yet finalized
            <br />
            <br />
            Our dedicated team is working hard on this revamped site and will be
            fully live as soon as possible. Thank you immensely for your
            patience and ongoing support.
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
        </Text>
      </Container>
    </>
  );
}
