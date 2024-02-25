"use client";

import React, { useState, useEffect } from "react";
//nextjs
import { useRouter } from "next/navigation";
//mantine
import {
  Badge,
  Divider,
  Group,
  Image,
  Paper,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";
//hooks
import { useHover } from "@mantine/hooks";
//styles
import classes from "./home.module.css";
import { showNotification } from "@mantine/notifications";
import { Info } from "@phosphor-icons/react";

export function CardCauseHome({ data }: { data: any }) {
  // * DEFINITION
  const theme = useMantineTheme();
  const Router = useRouter();
  const { hovered, ref } = useHover();

  // * STATE

  // * PRELOADING

  // * FUNCTION

  // * COMPONENTS

  const ImageCard = () => {
    const { hovered, ref } = useHover();

    return (
      <>
        <Paper
          ref={ref}
          visibleFrom="lg"
          style={{
            height: 600,
            overflow: "hidden",
          }}
          className={classes.videoBackground}
        >
          {!hovered ? (
            <Image
              src={data.image_album[0]?.image}
              height={600}
              style={{
                transition: ".3s ease-in-out",
                transform: hovered ? "scale(1.05)" : "",
              }}
            />
          ) : (
            <Paper>
              <iframe
                width="100%"
                height="100%"
                src={`${data.youtubeurl}&autoplay=1&mute=1&playsinline=1&loop=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </Paper>
          )}

          <Badge
            style={{
              position: "absolute",
              bottom: "var(--mantine-spacing-sm)",
              left: "var(--mantine-spacing-sm)",
            }}
            color="dark"
          >
            Hover for a video snapshot
          </Badge>
        </Paper>
      </>
    );
  };

  return (
    <>
      <Paper
        onClick={() => {
          if (data.id == 1) {
            Router.push("/campaign/causes/" + data.id);
          } else {
            showNotification({
              color:"blue",
              icon: <Info />,
              title: "Work in progress",
              id: "1",
              message:
                "Data is currently being updated. Please check again later.",
            });
          }
        }}
        ref={ref}
        py={54}
        style={{
          transition: "ease-in-out .3s",
          background: "none",
          opacity: hovered ? 1 : 0.6,
          cursor: "pointer",
        }}
      >
        <ImageCard />

        <Paper
          hiddenFrom="lg"
          style={{
            height: 450,
            overflow: "hidden",
          }}
        >
          <Image
            src={data.image_album[0]?.image}
            height={450}
            style={{
              transition: ".3s ease-in-out",
              transform: hovered ? "scale(1.05)" : "",
            }}
          />
        </Paper>

        <Space h={32} />

        <Group>
          <Text
            style={{
              color: theme.colors.gray[1],
              textTransform: "uppercase",
            }}
            size="xs"
            ta={{
              base: "center",
              lg: "left",
            }}
          >
            {data.category}
          </Text>
        </Group>

        <Group my="md">
          <Group gap="xs">
            <Text
              size="xs"
              style={{
                color: theme.colors.gray[0],
              }}
            >
              {data.start_date}
            </Text>
            <Text
              size="xs"
              style={{
                color: theme.colors.gray[0],
              }}
            >
              -
            </Text>
            <Text size="xs" color={data.enddata ? "dimmed" : "teal"}>
              {data.end_date || "Ongoing"}
            </Text>
          </Group>

          <Divider style={{ opacity: 0.5 }} orientation="vertical" />

          <Group gap="xs">
            <Text
              size="xs"
              style={{
                color: theme.colors.gray[0],
              }}
            >
              - Volunteers
            </Text>

            <Text
              size="xs"
              style={{
                color: theme.colors.gray[0],
              }}
            >
              - Participants
            </Text>
          </Group>
        </Group>

        <Text
          visibleFrom="lg"
          my="xs"
          className="heading"
          style={{
            color: theme.colors.gray[1],
            fontSize: "3rem",
            lineHeight: "3rem",
          }}
          ta={{
            base: "center",
            lg: "left",
          }}
        >
          {data.title}
        </Text>
        <Text
          hiddenFrom="lg"
          my="xs"
          className="heading"
          style={{
            color: theme.colors.gray[1],
            fontSize: "2rem",
            lineHeight: "2rem",
          }}
        >
          {data.title}
        </Text>
      </Paper>
    </>
  );
}
