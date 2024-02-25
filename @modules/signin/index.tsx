"use client";

import React, { useState, useEffect, useContext } from "react";
//mantine
import {
  Button,
  Checkbox,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  PasswordInput,
  Select,
  SimpleGrid,
  Space,
  Text,
  TextInput,
  Title,
  UnstyledButton,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import {
  ArrowLeft,
  Cake,
  CaretLeft,
  Check,
  DiscordLogo,
  Envelope,
  FacebookLogo,
  GenderIntersex,
  GoogleLogo,
  Key,
  Phone,
  User,
  Warning,
  WhatsappLogo,
} from "@phosphor-icons/react";

import { useForm } from "@mantine/form";

import { AnimatePresence, motion } from "framer-motion";
import { DateInput } from "@mantine/dates";

import { showNotification, updateNotification } from "@mantine/notifications";

import { useRouter } from "next/navigation";

//images
import imgLogo from "@/@assets/brand/logo_brand.png";
import { ContextPageProp } from "@/@context/PageProp";

export function ModuleLoginSignin() {
  const theme = useMantineTheme();

  const Router = useRouter();

  const [registerStage, setRegisterStage] = useState(0);
  const [signupType, setSignupType] = useState("");

  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(false);

  const form = useForm({});

  const { state, dispatch } = useContext(ContextPageProp.Context);

  useEffect(() => {
    dispatch({
      type: "PAGE_LOADED",
      value: "ABOUT",
    });
  }, []);

  const handleGoogleLogin: any = (gresponse: any) => {
    // api.authenticateGoogleLogin(gresponse).then((res: any) => {
    //   console.log(res);
    //   const [bearer, token] = res.headers.authorization.split(" ");
    //   sessionStorage.setItem("mwigoogletoken", token || "");
    // });
  };

  // const googleSignIn = useGoogleLogin({
  //   onSuccess: handleGoogleLogin,
  //   onError: (err) => {
  //     console.log(err);
  //   },
  //   scope: "https://www.googleapis.com/auth/userinfo.profile openid",
  // });

  const handleSignIn = () => {
    showNotification({
      id: "formsubmit",
      loading: true,
      title: "Processing",
      message: "Processing your request",
      color: "blue",
      autoClose: false,
    });

    // api.signIn(form.values).then((res: any) => {
    //   console.log(res);

    //   if ([400, 401, 404, 403, 405, 500].includes(res.code)) {
    //     switch (res.code) {
    //       case 403:
    //         console.log("403");
    //         form.setErrors(res.errObj);
    //         updateNotification({
    //           loading: false,
    //           color: "red",
    //           id: "formsubmit",
    //           title: "Error",
    //           message:
    //             res.message || "Account Disabled! Please contact support",
    //           icon: <Warning />,
    //         });
    //         break;
    //       case 401:
    //         console.log("401");
    //         form.setErrors(res.errObj);
    //         Router.push("/verify");
    //         break;
    //       case 405:
    //         form.setErrors(res.errObj);
    //         updateNotification({
    //           loading: false,
    //           color: "red",
    //           id: "formsubmit",
    //           title: "Error",
    //           message: res.message || "Invalid request, please recheck",
    //           icon: <Warning />,
    //         });
    //         break;
    //       default:
    //         console.log("def");
    //         setFormError(true);
    //         form.setErrors(res.errObj);
    //         updateNotification({
    //           loading: false,
    //           color: "red",
    //           id: "formsubmit",
    //           title: "Error",
    //           message: res.message || "Invalid request, please recheck",
    //           icon: <Warning />,
    //         });
    //     }
    //   } else {
    //     setFormError(false);

    //     updateNotification({
    //       loading: false,
    //       color: "teal",
    //       id: "formsubmit",
    //       title: "Authentication Verified!",
    //       message: "You have logged in successfully!",
    //       icon: <Check />,
    //       autoClose: 2000,
    //       onClose: () => {
    //         alert("now this changes page");
    //       },
    //     });

    //     form.setValues({});
    //   }
    // });
  };

  return (
    <Container size="sm">
      <div>
        <Space h={"20vh"} />

        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <SimpleGrid spacing="xl">
              <Image
                height={24}
                width={24}
                fit="contain"
                src={imgLogo.src}
                style={{
                  objectPosition: "left",
                }}
              />
              <Text
                size="md"
                style={{
                  color: theme.colors.gray[4],
                }}
              >
                HAMI{" "}
                <b
                  style={{
                    color: theme.colors.brand[5],
                  }}
                >
                  NEPAL
                </b>
              </Text>

              <Text
                size={"2rem"}
                style={{
                  color: theme.colors.gray[3],
                  lineHeight: "2.5rem",
                }}
              >
                <b
                  style={{
                    color: theme.colors.brand[5],
                  }}
                >
                  Member
                </b>{" "}
                Sign In.
              </Text>

              <Text
                size="sm"
                style={{
                  color: theme.colors.gray[6],
                }}
              >
                Welcome! Discover like-minded individuals like yourself and join
                us in engaging conversations and actions to lead for causes
                aimed at creating a better future.
                <br />
                <br />
                Let's interact, collaborate, and make a positive impact
                together!
              </Text>

              <Group>
                <Button
                  onClick={() => {
                    dispatch({
                      type: "TRANSITION_START",
                      value: "Home",
                    });

                    Router.push("/");
                  }}
                  size="xl"
                  variant="light"
                  leftSection={<ArrowLeft />}
                  style={{
                    fontSize: "var(--mantine-font-size-xs)",
                  }}
                >
                  Back to Website
                </Button>
              </Group>
            </SimpleGrid>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={0}
              >
                <SimpleGrid my="xl">
                  <TextInput
                    size="xl"
                    variant="filled"
                    placeholder="Email Address"
                    leftSection={<Envelope size={12} />}
                    styles={{
                      input: {
                        background: theme.colors.gray[9],
                        fontSize: theme.fontSizes.xs,
                        color: theme.colors.gray[4],
                      },
                    }}
                    {...form.getInputProps("email")}
                  />
                  <PasswordInput
                    size="xl"
                    variant="filled"
                    placeholder="Password"
                    leftSection={<Key size={12} />}
                    styles={{
                      input: {
                        background: theme.colors.gray[9],
                        fontSize: theme.fontSizes.xs,
                        color: theme.colors.gray[4],
                      },
                      visibilityToggle: { fontSize: theme.fontSizes.xs },
                    }}
                    {...form.getInputProps("password")}
                  />

                  <Button
                    loading={formLoading}
                    size="xl"
                    color="brand.8"
                    variant="filled"
                    style={{
                      fontSize: theme.fontSizes.xs,
                      fontWeight: 500,
                    }}
                    onClick={() => handleSignIn()}
                  >
                    LOGIN
                  </Button>

                  <Text
                    size="xs"
                    style={{
                      color: theme.colors.gray[7],
                      textAlign: "center",
                    }}
                  >
                    or login through
                  </Text>

                  <Button
                    size="xl"
                    color="red.6"
                    variant="light"
                    style={{
                      fontSize: theme.fontSizes.xs,
                      fontWeight: 500,
                      //background: theme.colors.red[9],
                    }}
                    leftSection={<GoogleLogo />}
                    // onClick={() => googleSignIn()}
                  >
                    Login via Google
                  </Button>

                  <Button
                    size="xl"
                    color="gray.5"
                    variant="subtle"
                    onClick={() => {
                      Router.push("/signup");
                    }}
                  >
                    <Text size="xs">
                      Don't have an account?{" "}
                      <span
                        style={{
                          color: theme.colors.gray[0],
                        }}
                      >
                        Create one.
                      </span>
                    </Text>
                  </Button>
                </SimpleGrid>
              </motion.div>
            </AnimatePresence>
          </Grid.Col>
        </Grid>

        <Space h={100} />

        <Divider opacity={0.1} my="xl" />

        <Text
          size="xs"
          style={{
            opacity: 0.3,
          }}
        >
          By proceesing, I agree to MWI's Terms of Use and Privacy Policy
        </Text>
      </div>
    </Container>
  );
}
