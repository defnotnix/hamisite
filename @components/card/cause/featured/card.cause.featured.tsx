"use client";

import { Carousel } from "@mantine/carousel";
import {
  AspectRatio,
  Button,
  Grid,
  Group,
  Paper,
  SimpleGrid,
  Text,
} from "@mantine/core";

//styles
import classes from "./featured.module.css";

export function CardCauseFeatured({ data }: { data: any }) {
  return (
    <Paper
      radius="lg"
      my="48"
      style={{
        overflow: "hidden",
      }}
      className={classes.causecard}
    >
      <div className={classes.videoBackground}>
        <iframe
          width="560"
          height="315"
          src={
            data.youtubeurl +
            "?controls=0&autoplay=1&mute=1&playsinline=1&loop=1"
          }
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          style={{ border: 0 }}
        ></iframe>
      </div>
      <Paper className={classes.contentdiv}>
        <Grid className={classes.causegrid} align="flex-end">
          <Grid.Col span={{ base: 12, lg: 3 }} offset={{ lg: 1 }}>
            <Paper
              radius="md"
              px="lg"
              py="xl"
              style={{
                background: "rgba(0,0,0,.3)",
                backdropFilter: "blur(8px)",
              }}
            >
              <SimpleGrid>
                <Text size="xs">Recent Update</Text>
                <Text size="xs" c="brand.5">
                  2023-07-15 - 2023-12-31
                </Text>

                <Text size="xs">
                  Kagbeni, a picturesque village in Mustang, was hit by
                  devastating floods in 2023. Many families have lost their
                  homes and belongings.
                </Text>
              </SimpleGrid>
            </Paper>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 4 }} offset={{ lg: 3 }}>
            <Text size="xs" className={classes.causetitle}>
              EARTHQUAKE RELIEF EFFORTS AT JAJARKOT
            </Text>
          </Grid.Col>
        </Grid>
      </Paper>
    </Paper>
  );
}
