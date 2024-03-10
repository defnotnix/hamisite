"use client";

import React, { useState, useEffect, useContext } from "react";
//nextjs
import { usePathname, useRouter } from "next/navigation";
//mantine
import {
  AppShell,
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Grid,
  Group,
  Image,
  Modal,
  Stack,
  Text,
  UnstyledButton,
  useMantineTheme,
} from "@mantine/core";
//hooks
import { useDisclosure } from "@mantine/hooks";
//framer
import { AnimatePresence, motion } from "framer-motion";
//clsx
import cx from "clsx";
//nav
import { configNavPage } from "@/@config/nav/page";
//context
import { ContextPageProp } from "@/@context/PageProp";
//images
import imgLogo from "@/@assets/brand/logo_brand.png";
//styles
import classes from "./site.header.module.css";
import Link from "next/link";
import { Heartbeat } from "@phosphor-icons/react";
import { ModalDonation } from "./modal/donation";

export function LayoutSiteHeader() {
  // * DEFINITIONS

  const theme = useMantineTheme();
  const Router = useRouter();
  const Pathname = usePathname();

  // * STATES

  // > CONTEXT
  const { state, dispatch } = useContext(ContextPageProp.Context);

  // > NAVSTATE
  const [openedNav, handlersNav] = useDisclosure();
  const [openDrawerNav, handlersDrawerNav] = useDisclosure();
  const [openDonate, handlersDonate] = useDisclosure();

  // * ANIMATE

  const variantRoot = {
    initial: {
      y: -30,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const variantNav = {
    initial: {
      opacity: 0,
      y: -30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
    },
  };

  // * PRELOADING

  // * FUNCTIONS

  const handleNavClick = (url: string, label: string) => {
    handlersDrawerNav.close();

    dispatch({
      type: "TRANSITION_START",
      value: label,
    });

    setTimeout(() => {
      handlersNav.close();
      Router.push(url);
    }, 1000);
  };

  // * COMPONENTS

  const Breadcrumb = () => (
    <motion.div
      key={1}
      variants={variantNav}
      initial="initial"
      animate="visible"
      exit="exit"
      transition={{ type: "tween" }}
    >
      {state.current == "home" ? (
      <>
        <Group
        hiddenFrom="lg"
          justify="center"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            handlersDrawerNav.toggle();
          }}
        >
          <Text
            size="xs"
            style={{
              color: "rgba(255,255,255,.3)",
            }}
          >
            <span
              style={{
                color: theme.colors.brand[5],
                textTransform: "uppercase",
              }}
            >
              {state.current}
            </span>
            <span
              onClick={() => {
                if (Pathname !== "/") {
                  handleNavClick("/", "Home");
                }
              }}
            >
              / HAMI NEPAL
            </span>
          </Text>
        </Group>
        <Group
        visibleFrom="lg"
          justify="center"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            handlersNav.toggle();
          }}
        >
          <Text
            size="xs"
            style={{
              color: "rgba(255,255,255,.3)",
            }}
          >
            <span
              style={{
                color: theme.colors.brand[5],
                textTransform: "uppercase",
              }}
            >
              {state.current}
            </span>
            <span
              onClick={() => {
                if (Pathname !== "/") {
                  handleNavClick("/", "Home");
                }
              }}
            >
              / HAMI NEPAL
            </span>
          </Text>
        </Group>
        </>
      ) : (
        <Group justify="center">
          <Text
          hiddenFrom="lg"
            size="xs"
            style={{
              color: "rgba(255,255,255,.3)",
              cursor: "pointer",
            }}
          >
            <span
              className={classes.breadhome}
              onClick={() => {
                if (Pathname !== "/") {
                  handleNavClick("/", "Home");
                }
              }}
            >
              HAMI NEPAL
            </span>{" "}
            /{" "}
            <span
              style={{
                color: theme.colors.brand[5],
                textTransform: "uppercase",
              }}
            >
              {state.current}
            </span>
          </Text>
          <Text
          visibleFrom="lg"
            size="xs"
            style={{
              color: "rgba(255,255,255,.3)",
              cursor: "pointer",
            }}
          >
            <span
              className={classes.breadhome}
              onClick={() => {
                if (Pathname !== "/") {
                  handleNavClick("/", "Home");
                }
              }}
            >
              HAMI NEPAL
            </span>{" "}
            /{" "}
            <span
              style={{
                color: theme.colors.brand[5],
                textTransform: "uppercase",
              }}
            >
              {state.current}
            </span>
          </Text>
        </Group>
      )}
    </motion.div>
  );

  return (
    <>
      <header className={classes.root}>
        <motion.div
          variants={variantRoot}
          initial="initial"
          animate={
            state.loading || state.loadingTransition ? "initial" : "visible"
          }
          transition={{
            delay: 0.5,
          }}
        >
          <Container p="xl" size="xxl">
            <Grid
              align="center"
              style={{
                overflow: "visible",
              }}
            >
              <Grid.Col span={{ base: 3 }}>
                <UnstyledButton
                  onClick={() => {
                    if (Pathname !== "/") {
                      handleNavClick("/", "Home");
                    }
                  }}
                >
                  <Image
                    height={24}
                    width={24}
                    fit="contain"
                    src={imgLogo.src}
                    style={{
                      objectPosition: "left",
                    }}
                  />
                </UnstyledButton>
              </Grid.Col>
              <Grid.Col span={{ base: 6 }}>
                <Box hiddenFrom="md">
                  <Breadcrumb />
                </Box>

                <Box visibleFrom="lg">
                  <AnimatePresence>
                    {openedNav && (
                      <motion.div
                        key={1}
                        variants={variantNav}
                        initial="initial"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "tween" }}
                      >
                        <Group justify="center">
                          {configNavPage.map((navitem: any, index: number) => (
                            <Text
                              size="xs"
                              onClick={() => {
                                handleNavClick(navitem.url, navitem.label);
                              }}
                              key={index}
                              className={cx(classes.navitem, {
                                [classes.navitem_active]:
                                  Pathname == navitem.url,
                              })}
                            >
                              {navitem.label}
                            </Text>
                          ))}
                        </Group>
                      </motion.div>
                    )}

                    {!openedNav && (
                      <motion.div
                        key={2}
                        variants={variantNav}
                        initial="initial"
                        animate="visible"
                        exit="exit"
                        transition={{ type: "tween" }}
                      >
                        <Breadcrumb />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Box>
              </Grid.Col>
              <Grid.Col span={{ base: 3 }}>
                <Group justify="flex-end">
                  {openedNav && (
                    <motion.div
                      key={1}
                      variants={variantNav}
                      initial="initial"
                      animate="visible"
                      exit="exit"
                      transition={{ type: "tween" }}
                    >
                      <Group gap="xs">
                        <Button
                          size="xs"
                          onClick={handlersDonate.open}
                          leftSection={<Heartbeat />}
                        >
                          Donate
                        </Button>
                        <Button
                          size="xs"
                          variant="subtle"
                          color="brand.5"
                          onClick={() => {
                            handleNavClick("signin", "Register");
                          }}
                        >
                          <Text size="xs">
                            SIGN IN{" "}
                            <span
                              style={{
                                opacity: 0.5,
                              }}
                            >
                              / REGISTER
                            </span>
                          </Text>
                        </Button>
                      </Group>
                    </motion.div>
                  )}

                  <Burger
                    opened={openedNav}
                    onClick={() => {
                      handlersNav.toggle();
                    }}
                    size={14}
                    visibleFrom="md"
                  />

                  <Burger
                    opened={openedNav}
                    onClick={() => {
                      handlersDrawerNav.toggle();
                    }}
                    size={14}
                    hiddenFrom="md"
                  />
                </Group>
              </Grid.Col>
            </Grid>
          </Container>
        </motion.div>
      </header>

      <Drawer
        opened={openDrawerNav}
        onClose={handlersDrawerNav.close}
        title={
          <Image
            height={18}
            width={18}
            fit="contain"
            src={imgLogo.src}
            style={{
              objectPosition: "left",
            }}
          />
        }
      >
        <Stack justify="center" mt="xl">
          {configNavPage.map((navitem: any, index: number) => (
            <Text
              onClick={() => {
                handleNavClick(navitem.url, navitem.label);
              }}
              key={index}
              className={cx(classes.navitem, {
                [classes.navitem_active]: Pathname == navitem.url,
              })}
              tt="none"
              ta="center"
              size="3rem"
            >
              {navitem.label}
            </Text>
          ))}
        </Stack>
      </Drawer>

      <Modal
        title={
          <Text ta="center" size="xs" opacity={0.3}>
            DONATE FOR A CAUSE
          </Text>
        }
        opened={openDonate}
        onClose={handlersDonate.close}
      >
        <ModalDonation onClose={handlersDonate.close} />
      </Modal>
    </>
  );
}
