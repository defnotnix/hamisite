import {
  Breadcrumbs,
  Center,
  Divider,
  Group,
  Image,
  Paper,
  Space,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { useRouter } from "next/navigation";

import { animate, motion, useAnimate } from "framer-motion";

import classes from "./general.module.css";

import cx from "clsx";
import { useContext, useEffect, useMemo, useState } from "react";

import imgSrc from "@/@assets/brand/logo_brand.png";
import { ContextPageProp } from "@/@context/PageProp";

//images

export function CauseCardDefault({ data }: any) {
  const theme = useMantineTheme();

  const Router = useRouter();

  // > CONTEXT
  const { state, dispatch } = useContext(ContextPageProp.Context);

  useEffect(() => {
    console.log("load card");
  }, []);

  const MediaCard = () => {
    // * PRELOADER
    useEffect(() => {
      console.log("load mediacard");
    }, []);

    // * SCOPES
    const [scopeImage, animateImage] = useAnimate();
    const [scopeOverlay, animateOverlay] = useAnimate();
    const [scopeVideo, animateVideo] = useAnimate();

    const [play, setPlay] = useState(false);

    async function onMouseEnter() {
      animateOverlay(scopeOverlay.current, {
        opacity: 1,
      });
      animateImage(scopeImage.current, {
        opacity: 0,
      });

      animateImage(scopeImage.current, {
        display: "none",
      });

      setPlay(true);
    }

    async function onVideoReady(event: any) {
      console.log(event);

      setTimeout(async () => {
        await animateOverlay(scopeOverlay.current, {
          opacity: 0,
        });
        animateVideo(scopeVideo.current, {
          display: "block",
        });
        await animateVideo(scopeVideo.current, {
          opacity: 1,
        });
      }, 500);
    }

    async function onMouseLeave() {
      setPlay(false);
      setTimeout(async () => {
        animateVideo(scopeVideo.current, {
          opacity: 0,
        });
        animateOverlay(scopeOverlay.current, {
          opacity: 0,
        });
        await animateImage(scopeImage.current, {
          display: "block",
        });
        animateImage(scopeImage.current, {
          opacity: 1,
        });
      }, 1600);
    }

    const opts = {
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <Paper
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        visibleFrom="lg"
        style={{
          height: 600,
          overflow: "hidden",
        }}
        className={cx(classes.videoBackground)} // Replace with your class
      >
        <motion.div
          className={cx(classes.causemedia, classes.mediaImage)} // Replace with your classes
          ref={scopeImage}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          Image
        </motion.div>
        <motion.div
          className={cx(classes.causemedia, classes.mediaOverlay)} // Replace with your classes
          ref={scopeOverlay}
          initial={{
            opacity: 0,
          }}
        >
          <Image src={imgSrc.src} h={32} w={32} />
        </motion.div>
        <motion.div
          className={cx(
            classes.causemedia,
            classes.mediaVideo,
            classes.videoBackground
          )} // Replace with your classes
          ref={scopeVideo}
          initial={{
            opacity: 0,
            display: "none",
          }}
        ></motion.div>
      </Paper>
    );
  };

  return (
    <>
      <div
        className={classes.root}
        onClick={() => {
          if (data.id == 1) {
            Router.push("/campaign/causes/" + data.id);
          }
        }}
      >
        <MediaCard />

        <Space h={32} />

        <Group>
          <Text
            style={{
              color: theme.colors.gray[1],
              textTransform: "uppercase",
            }}
            size="xs"
            c="dimmed"
          >
            {data.category}
          </Text>
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

        <Group>
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

        <Space h="xl" />
      </div>
    </>
  );
}
