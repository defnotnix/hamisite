"use client";

import React, { useState, useEffect } from "react";
//mantine
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Container,
  Group,
  Image,
  Paper,
  Progress,
  SimpleGrid,
  Stack,
  Text,
  useMantineTheme,
} from "@mantine/core";
//hooks
import {} from "@mantine/hooks";
//icons
import {
  ArrowArcLeft,
  ArrowArcRight,
  ArrowBendDownRight,
  ArrowCircleRight,
  ArrowClockwise,
  CircleDashed,
  Eye,
  EyeClosed,
  X,
} from "@phosphor-icons/react";
//query
import { useQuery } from "@tanstack/react-query";
//leaflet
import { MapContainer, TileLayer, useMap } from "react-leaflet";
//framer
import { motion, AnimatePresence, useAnimate } from "framer-motion";
//components
import { MapMarker } from "../Marker";
//styles
import classes from "./map.module.css";
//api
import api from "@/@services/campaign/cause";

export default function ImpactMapContainer() {
  // * DEFINITION

  const theme = useMantineTheme();

  // * STATE

  const [zoom, setZoom] = useState(8);

  const [scope, animate] = useAnimate();
  const [scopeEvent, animateEvent] = useAnimate();

  const [activeCause, setActiveCause] = useState<number | null>(null);
  const [activeEvent, setActiveEvent] = useState<number | null>(null);

  const pointerTypes = [
    {
      label: "Cause",
      value: "cause",
      color: "red.5",
    },
    {
      label: "Cause Phase",
      value: "phase",
      color: "orange.5",
    },
    {
      label: "Events",
      value: "event",
      color: "indigo.5",
    },
    {
      label: "Green Movement",
      value: "green",
      color: "green.5",
    },
    {
      label: "Headquater",
      value: "hq",
      color: "blue.5",
    },
  ];

  const [pointerActive, setPointerActive] = useState<any>({
    cause: true,
    phase: true,
    event: true,
    green: true,
    hq: true,
  });

  // * PRELOADING

  useEffect(() => {}, []);

  const queryData = useQuery({
    queryKey: api.getFeatured.key,
    queryFn: async () => {
      return await api.getFeatured();
    },
    initialData: [],
  });

  // * FUNCTIONS

  const updateCauseCard = async (newactive: number) => {
    await animate(scope.current, {
      display: "block",
    });

    await animate(scope.current, {
      opacity: 0,
      x: -8,
    });

    setActiveCause(newactive);

    await animate(scope.current, {
      opacity: 1,
      x: 0,
    });
  };

  const updateCauseEvent = async (newactive: number) => {
    await animateEvent(scopeEvent.current, {
      display: "block",
    });

    await animateEvent(scopeEvent.current, {
      opacity: 0,
      x: 8,
    });

    setActiveEvent(newactive);

    await animateEvent(scopeEvent.current, {
      opacity: 1,
      x: 0,
    });
  };

  const resetEvent = async () => {
    await animateEvent(scopeEvent.current, {
      opacity: 0,
      x: 8,
    });

    setActiveEvent(null);

    await animateEvent(scopeEvent.current, {
      display: "none",
    });
  };

  const resetAll = async () => {
    await animateEvent(scopeEvent.current, {
      opacity: 0,
      x: 8,
    });

    await animate(scope.current, {
      opacity: 0,
      x: -8,
    });

    setActiveEvent(null);

    setActiveCause(null);

    await animateEvent(scopeEvent.current, {
      display: "none",
    });

    await animate(scope.current, {
      display: "none",
    });
  };

  // * COMPONENTS

  const EventCard = () => {
    const eventdata = queryData.data[activeCause || 0]?.event[activeEvent || 0];

    return (
      <Paper className={classes.card} w={300} radius="lg" shadow="lg" mt="xs">
        <Box px="md" py="lg">
          <SimpleGrid spacing={4}>
            <Group justify="space-between">
              <div>
                <Text
                  size="xs"
                  style={{
                    color: theme.colors.gray[6],
                    textTransform: "uppercase",
                  }}
                >
                  EVENT
                </Text>

                <Text size="xs" c="brand.3">
                  {eventdata?.start_date}
                </Text>
              </div>
              <ActionIcon
                variant="light"
                color="gray"
                onClick={() => {
                  resetEvent();
                }}
              >
                <X />
              </ActionIcon>
            </Group>

            <Text size="xl" c="gray.0" my="xs">
              {eventdata?.name}
            </Text>

            <Text size="xs" c="gray.6">
              {eventdata?.description}
            </Text>

            <Progress
              mt="md"
              mb="xs"
              size="xs"
              value={
                (Number(eventdata?.completion_amount) /
                  Number(eventdata?.amount)) *
                100
              }
            />

            <Group justify="space-between" mb="md">
              <Text size="xs" c="gray.6">
                {eventdata?.completion_amount} / {eventdata?.amount}
              </Text>
            </Group>

            <Group gap="xs">
              <Button mt="xs" variant="light" size="xs">
                Donate
              </Button>
              <Button color="gray" mt="xs" variant="light" size="xs">
                Participate
              </Button>
            </Group>
          </SimpleGrid>
        </Box>
      </Paper>
    );
  };

  const CauseCard = () => {
    const causedata = queryData.data[activeCause || 0];

    return (
      <>
        <Paper className={classes.card} w={300} radius="lg" shadow="lg">
          <Image src={causedata?.image_album[0]?.image} h={200} w={300} />
          <Box p="md">
            <Text
              size="xs"
              style={{
                color: theme.colors.gray[6],
                textTransform: "uppercase",
              }}
            >
              {causedata?.category}
            </Text>

            <Text
              my="md"
              className="heading"
              style={{
                color: theme.colors.gray[0],
                fontSize: "1.7rem",
                lineHeight: "1.7rem",
              }}
            >
              {causedata?.title}
            </Text>
            <Group gap="xs">
              <Text
                size="xs"
                style={{
                  color: theme.colors.red[5],
                }}
              >
                {causedata?.start_date}
              </Text>
              <CircleDashed
                weight="fill"
                size={4}
                color={theme.colors.red[4]}
              />
              <Text
                size="xs"
                style={{
                  color: theme.colors.red[5],
                }}
              >
                {causedata?.end_date || "Ongoing"}
              </Text>
            </Group>
          </Box>
        </Paper>
      </>
    );
  };

  const ResetMap = () => {
    const map = useMap();

    return (
      <ActionIcon
        size={28}
        className={classes.mapreset}
        color="black"
        onClick={() => {
          map.flyTo([28.4, 84], 8, {
            animate: true,
            duratino: 2,
          });

          resetAll();
        }}
      >
        <X weight="bold" />
      </ActionIcon>
    );
  };

  return (
    <>
      <div className={classes.root}>
        <Container style={{ position: "relative" }}>
          <Paper
            radius="lg"
            style={{
              overflow: "hidden",
            }}
          >
            <MapContainer
              //@ts-ignore
              center={[28.4, 84]}
              zoom={zoom}
              scrollWheelZoom={false}
              style={{
                height: "90vh",
              }}
              markerZoomAnimation={true}
            >
              <TileLayer
                //@ts-ignore
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {queryData.data?.map((cause: any, index: number) => (
                <React.Fragment key={index}>
                  <MapMarker.Cause
                    data={{
                      ...cause,
                      key: index,
                    }}
                    setActive={updateCauseCard}
                  />
                </React.Fragment>
              ))}

              {activeCause !== null &&
                queryData.data[activeCause]?.event.map(
                  (cause: any, index: number) => (
                    <React.Fragment key={index}>
                      <MapMarker.Event
                        data={{
                          ...cause,
                          key: index,
                        }}
                        setActive={updateCauseEvent}
                      />
                    </React.Fragment>
                  )
                )}

              <ResetMap />
            </MapContainer>

            <motion.div
              className={classes.causeinfo}
              ref={scope}
              initial={{ opacity: 0, display: "none" }}
            >
              <CauseCard />
            </motion.div>

            <motion.div
              className={classes.eventinfo}
              ref={scopeEvent}
              initial={{ opacity: 0, display: "none" }}
            >
              <EventCard />
            </motion.div>

            <Paper className={classes.mapindex}>
              <Stack align="flex-end" gap="xs">
                {pointerTypes.map((pointerinfo: any, index: number) => (
                  <Group key={index} gap="xs">
                    <Badge
                      variant="dot"
                      color={pointerinfo.color}
                      opacity={pointerActive[pointerinfo.value] ? 1 : 0.3}
                    >
                      {pointerinfo.label}
                    </Badge>
                    <ActionIcon
                      size="xs"
                      radius="xl"
                      variant="subtle"
                      color="gray"
                      onClick={() => {
                        setPointerActive({
                          ...pointerActive,
                          [pointerinfo.value]:
                            !pointerActive[pointerinfo.value],
                        });
                      }}
                    >
                      {pointerActive[pointerinfo.value] ? (
                        <Eye />
                      ) : (
                        <EyeClosed />
                      )}
                    </ActionIcon>
                  </Group>
                ))}
              </Stack>
            </Paper>
          </Paper>

          <div className={classes.maptitle}>
            <Text size="xs" fw={600}>
              HAMI NEPAL - IMPACT MAP{" "}
            </Text>
          </div>
        </Container>
      </div>
    </>
  );
}
