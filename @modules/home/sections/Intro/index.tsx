"use client";

import {
  Box,
  Container,
  Grid,
  Image,
  Paper,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
//styles
import classes from "./intro.module.css";
//assets
import imgFist from "@/@assets/img/hero/intro/fist.png";

import { motion } from "framer-motion";

import AnimatedTitle from "@/@components/animated/AnimatedTitle";

import { variantContainer, variantContainerParent } from "@/@animate/container";
import { AnimateText } from "@/@animate/text";

export function SectionHomeIntro() {
  const theme = useMantineTheme();

  const images = [
    "https://informnepal.com/wp-content/uploads/2021/05/hami-1.jpeg",
    "https://barbarafoundation.org/wp-content/uploads/2021/06/DSC06435-min-300x200.jpg",
    "https://barbarafoundation.org/wp-content/uploads/2021/06/DSC05246-min-300x200.jpg",
    "https://www.newbusinessage.com/img/news/20211221051757_PIC%203.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStPz2wsh4QLkwl7Fv48W5T3-PVs1XjRaL4nIyvSavx6LCSLobrlIIjHZFjVSiDnxkwu4k&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPcMVXKALrzw7W2qoGdQNAJ3wUhKgVa5jn6Os-ir9JBo-rqGsbQfEuvr9FF8f-puWicYc&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLnfLjj8AU-nTfbgSliM08ieq27D7Pjww8mtgNq_E4F8yq6TJFR8y1Vg2CDbdo8Do-QJo&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuMwPpQ5kyRBT_Jp66HoCdC1Ywc7pSVdYaXTp6yrEd6zTAgdMgHe2hoHsf6ch7aXIoLRE&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5lRRcWoivYUcw_pkCkJ-houcRORVQbsZe4SEED3WKvSxdKNFw7rEFpdbCWuz4SW_su-w&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfaVgt1gb5x3ols3piEWLGQzy_aWVPHYr-jGU7xkQTSFiq10gCeoC7VQHh6tIJDOjXI2Q&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqatmiVGxIfoP032HCpLodZTVVkLi3JiMHxQ45BD-A--b28XCDK3x5hwoMG8q3fOJ1UXU&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTME7F71tFoWmhab6rnB3CBfs0YTDSIa4AVQA&usqp=CAU",
    "data:image/jpeg;base64,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",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUV80GCjwEdTAvICV1c7kk73_yNo0SWiNMSFvYw5vOovY58I_1Mm3eq2wKS-ztweqTNY&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROUf8VUYQUnN4a45OKjbNqb2MoqhEMUnHL6MU79fgKAY9u87Sk4JPKvrwpItcQczKM_ug&usqp=CAU",
  ];

  return (
    <>
      <Box
        py={{
          base: 0,
          lg: 100,
        }}
      >
        <section className={classes.root}>
          <div className={classes.backdrop}>
            <Container
              px={{
                base: "xl",
                lg: 0,
              }}
            >
              <motion.div
                variants={variantContainerParent}
                initial="hidden"
                whileInView="show"
              >
                <SimpleGrid cols={5} spacing="xs" visibleFrom="lg">
                  {images.map((img: string, index: number) => (
                    <motion.div key={index} variants={variantContainer}>
                      <Paper
                        opacity={0.3}
                        radius="lg"
                        style={{
                          background: `url(${img})`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        h={{ base: 100, lg: 300 }}
                      />
                    </motion.div>
                  ))}
                </SimpleGrid>
              </motion.div>
            </Container>
          </div>

          <div className={classes.backdrop}>
            <Container>
              <SimpleGrid cols={{ base: 1, lg: 3 }}>
                <div></div>
                <Image
                  h={{
                    base: "100vh",
                    lg: 900,
                  }}
                  src={imgFist.src}
                  fit="contain"
                  opacity={{
                    base: 0.6,
                    lg: 1,
                  }}
                />
                <div></div>
              </SimpleGrid>
            </Container>
          </div>

          <Container
            size="sm"
            pt={{
              base: "xl",
              lg: 200,
            }}
            pb={{
              base: "xl",
              lg: 0,
            }}
            px={{
              base: "xl",
              lg: 0,
            }}
          >
            <motion.div
              initial="initial"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
            >
              <AnimatedTitle
                initiate={true}
                size="11rem"
                lh="10rem"
                c="rgba(255,255,255,1)"
              >
                WE ARE A
              </AnimatedTitle>
              <AnimatedTitle
                initiate={true}
                size="11rem"
                lh="10rem"
                //  c="rgba(255,255,255,1)"
              >
                MOVEMENT
              </AnimatedTitle>
            </motion.div>

            <AnimateText.Container>
              <Grid>
                <Grid.Col span={{ base: 12, lg: 6 }}>
                  <AnimateText.Row key={1}>
                    <Text
                      mt="xl"
                      size="sm"
                      style={{
                        lineHeight: "170%",
                      }}
                    >
                      <b>Hami Nepal</b>, a non-profit organization established
                      in 2015 A.D. and registered in{" "}
                      <b>2020 A.D. (Regd.no. 609789065)</b>, connects donors
                      directly with recipients. Our main objective is to assist
                      anyone in need without hesitations or expectations of
                      payback. The organization ensures that 100% of donations
                      reach recipients, avoiding administrative costs.
                    </Text>
                  </AnimateText.Row>
                </Grid.Col>
                <Grid.Col span={{ base: 12, lg: 6 }}>
                  <AnimateText.Row key={2}>
                    <Text
                      mt={{
                        base: "md",
                        lg: "xl",
                      }}
                      size="sm"
                      style={{
                        lineHeight: "170%",
                      }}
                    >
                      All volunteers involved in problem authentication,
                      logistics, and delivery cover their own expenses,
                      eliminating administrative overhead. This commitment
                      guarantees that every donation to Hami Nepal goes directly
                      toward aiding those in need, prioritizing impactful
                      assistance.
                    </Text>
                  </AnimateText.Row>
                </Grid.Col>
              </Grid>
            </AnimateText.Container>
          </Container>
        </section>
      </Box>
    </>
  );
}
