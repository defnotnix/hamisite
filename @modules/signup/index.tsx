"use client";

import React, { useState, useEffect, useContext } from "react";
//mantine
import {
  Alert,
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
  WarningCircle,
  WhatsappLogo,
} from "@phosphor-icons/react";

import { AnimatePresence, motion } from "framer-motion";
import { DateInput } from "@mantine/dates";
import { useForm } from "@mantine/form";

import { showNotification, updateNotification } from "@mantine/notifications";
import { useRouter } from "next/navigation";
import { useGoogleLogin } from "@react-oauth/google";

import imgLogo from "@/@assets/brand/logo_brand.png";
import { ContextPageProp } from "@/@context/PageProp";

export function ModuleLoginSignup() {
  const Router = useRouter();

  const theme = useMantineTheme();

  const [registerStage, setRegisterStage] = useState(0);
  const [signupType, setSignupType] = useState("");

  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState(false);

  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  const form = useForm({
    initialValues: {
      newsletter: true,
      opt_in_marketting: true,
    },
  });

  const { state, dispatch } = useContext(ContextPageProp.Context);

  useEffect(() => {
    dispatch({
      type: "PAGE_LOADED",
      value: "ABOUT",
    });
  }, []);
  const handleGoogleLogin = (gresponse: any) => {
    // api.authenticateGoogle(gresponse).then((res: any) => {
    //   sessionStorage.setItem(
    //     "mwigoogletoken",
    //     res?.headers?.authorization || ""
    //   );
    // });
  };

  const googleSignIn = useGoogleLogin({
    onSuccess: handleGoogleLogin,
    onError: (err) => {
      console.log(err);
    },
    scope: "https://www.googleapis.com/auth/userinfo.profile openid",
  });

  const handleSubmit = () => {
    setFormLoading(true);

    showNotification({
      id: "formsubmit",
      loading: true,
      title: "Processing",
      message: "Processing your request",
      color: "blue",
      autoClose: false,
    });

    // api.createUser(form.values).then((res: any) => {
    //   console.log("resp", res);

    //   setFormLoading(false);

    //   if ([400, 401, 404, 500].includes(res.code)) {
    //     setFormError(true);
    //     form.setErrors(res.errObj);
    //     updateNotification({
    //       loading: false,
    //       color: "red",
    //       id: "formsubmit",
    //       title: "Error",
    //       message: res.message || "Invalid request, please recheck",
    //       icon: <Warning />,
    //     });
    //   } else {
    //     setFormError(false);

    //     updateNotification({
    //       loading: false,
    //       color: "teal",
    //       id: "formsubmit",
    //       title: "Attribute Added!",
    //       message: "Your attribute has been added successfully!",
    //       icon: <Check />,
    //       autoClose: 2000,
    //       onClose: () => {
    //         Router.push("/signin");
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
                Register a<br />{" "}
                <b
                  style={{
                    color: theme.colors.brand[5],
                  }}
                >
                  Member Account
                </b>{" "}
                for Hami Nepal.
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
                  size="xl"
                  variant="light"
                  leftSection={<ArrowLeft />}
                  style={{
                    fontSize: "var(--mantine-font-size-xs)",
                  }}
                  onClick={() => {
                    dispatch({
                      type: "TRANSITION_START",
                      value: "Home",
                    });

                    Router.push("/");
                  }}
                >
                  Back to Website
                </Button>
              </Group>
            </SimpleGrid>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 6 }}>
            {registerStage == 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={0}
              >
                <Text
                  size="xs"
                  style={{
                    color: theme.colors.gray[7],
                    textAlign: "center",
                  }}
                >
                  Make a new account
                </Text>

                <SimpleGrid my="xl">
                  <Button
                    loading={formLoading}
                    size="xl"
                    color="gray.9"
                    variant="filled"
                    style={{
                      fontSize: theme.fontSizes.xs,
                      fontWeight: 500,
                    }}
                    leftSection={<Envelope />}
                    onClick={() => {
                      setRegisterStage(1);
                      setSignupType("email");
                    }}
                  >
                    Sign up via email
                  </Button>

                  <Text
                    size="xs"
                    style={{
                      color: theme.colors.gray[7],
                      textAlign: "center",
                    }}
                  >
                    or
                  </Text>

                  <Button
                    loading={formLoading}
                    size="xl"
                    color="red.7"
                    variant="filled"
                    style={{
                      fontSize: theme.fontSizes.xs,
                      fontWeight: 500,
                      //background: theme.colors.red[9],
                    }}
                    leftSection={<GoogleLogo />}
                    onClick={() => {
                      googleSignIn();
                    }}
                  >
                    Sign up via Google
                  </Button>

                  <Button
                    loading={formLoading}
                    size="xl"
                    color="indigo.7"
                    variant="filled"
                    style={{
                      fontSize: theme.fontSizes.xs,
                      fontWeight: 500,
                    }}
                    leftSection={<DiscordLogo />}
                  >
                    Sign up via Discord
                  </Button>

                  <Button
                    variant="subtle"
                    color="gray"
                    size="xl"
                    onClick={() => {
                      Router.push("/signin");
                    }}
                  >
                    <Text size="xs">Already have an account? Sign In</Text>
                  </Button>
                </SimpleGrid>
              </motion.div>
            )}

            {registerStage == 1 && (
              <motion.div
                style={{}}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key={1}
              >
                <SimpleGrid>
                  {formError && (
                    <Alert
                      variant="light"
                      color="red"
                      title="Invalid Fields"
                      icon={<WarningCircle />}
                    >
                      Please fix the issues and send again.
                    </Alert>
                  )}

                  <TextInput
                    size="lg"
                    variant="filled"
                    placeholder="Email Address"
                    leftSection={<Envelope size={12} />}
                    styles={{
                      input: {
                        background: theme.colors.gray[8],
                        fontSize: theme.fontSizes.xs,
                        color: theme.colors.gray[3],
                      },
                    }}
                    {...form.getInputProps("email")}
                  />
                  <PasswordInput
                    size="lg"
                    variant="filled"
                    placeholder="Password"
                    leftSection={<Key size={12} />}
                    styles={{
                      input: {
                        background: theme.colors.gray[8],
                        fontSize: theme.fontSizes.xs,
                        color: theme.colors.gray[3],
                      },
                      visibilityToggle: { fontSize: theme.fontSizes.xs },
                    }}
                    {...form.getInputProps("password")}
                  />

                  <TextInput
                    size="lg"
                    variant="filled"
                    placeholder="Full Name"
                    leftSection={<User size={12} />}
                    styles={{
                      input: {
                        background: theme.colors.gray[8],
                        fontSize: theme.fontSizes.xs,
                        color: theme.colors.gray[3],
                      },
                    }}
                    {...form.getInputProps("name")}
                  />

                  <Group gap="xs" mt="sm">
                    <Checkbox
                      size="xs"
                      {...form.getInputProps("newsletter", {
                        type: "checkbox",
                      })}
                    />{" "}
                    <Text size="xs" c="gray.5">
                      Sign up for exclusive offers & promotions.
                    </Text>
                  </Group>

                  <Group gap="xs" mb="sm">
                    <Checkbox
                      size="xs"
                      {...form.getInputProps("opt_in_marketting", {
                        type: "checkbox",
                      })}
                    />{" "}
                    <Text size="xs" c="gray.5">
                      Sign up for our Subscription
                    </Text>
                  </Group>

                  <Button
                    loading={formLoading}
                    color="brand"
                    fullWidth
                    size="lg"
                    style={{
                      fontSize: theme.fontSizes.xs,
                    }}
                    onClick={() => handleSubmit()}
                  >
                    Register
                  </Button>
                  <Button
                    leftSection={<CaretLeft />}
                    variant="subtle"
                    color="gray"
                    size="xl"
                    onClick={() => {
                      setRegisterStage(0);
                    }}
                  >
                    <Text size="xs">Register with a different method.</Text>
                  </Button>
                </SimpleGrid>
              </motion.div>
            )}
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
