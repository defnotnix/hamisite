"use client";

import { AnimateDiv } from "@/@animate/div";
import { AnimateText } from "@/@animate/text";
import AnimatedTitle from "@/@components/animated/AnimatedTitle";
import {
  Container,
  Grid,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { ArrowRight } from "@phosphor-icons/react";

export function SectionConclusion({ data }: { data: any }) {
  const theme = useMantineTheme();

  return (
    <>
      <Container mt={100} size="xl" px={{ base: "xl", lg: 0 }}>
        <AnimateDiv.Container>
          <AnimateDiv.Row key={1}>
            <Group gap="xs">
              <ArrowRight color="var(--mantine-color-brand-5)" />
              <Text size="xs" tt="uppercase">
                CONCLUSION
              </Text>
            </Group>
          </AnimateDiv.Row>

          <Grid gutter="3rem" mt={100}>
            <Grid.Col span={{ base: 12, lg: 12 }}>
              <AnimateDiv.Row key={2}>
                <>
                  <AnimatedTitle
                    size={"8rem"}
                    lh={"7rem"}
                    ta="left"
                    c="rgba(255,255,255,1)"
                  >
                    Rising from the
                  </AnimatedTitle>
                  <AnimatedTitle
                    size={"8rem"}
                    lh={"7rem"}
                    ta="left"
                    c="rgba(255,255,255,1)"
                  >
                    Rubble: A Chronicle of
                  </AnimatedTitle>
                  <AnimatedTitle
                    size={"8rem"}
                    lh={"7rem"}
                    ta="left"
                    c="rgba(255,255,255,1)"
                  >
                    Relief and Renewal in
                  </AnimatedTitle>
                  <AnimatedTitle size={"8rem"} lh={"7rem"} ta="left">
                    Naglad Municipality
                  </AnimatedTitle>
                </>
              </AnimateDiv.Row>
            </Grid.Col>
            <Grid.Col span={{ base: 12, lg: 12 }} pt="3rem">
              <SimpleGrid
                cols={{ base: 1, lg: 3 }}
                spacing={{ base: "md", lg: "3rem" }}
              >
                <AnimateText.Container>
                  <Stack>
                    <AnimateText.Row>
                      <Text
                        opacity={0.5}
                        size="xs"
                        style={{
                          lineHeight: "1.8rem",
                        }}
                      >
                        THE MOTIVE
                      </Text>
                    </AnimateText.Row>
                    <AnimateText.Row>
                      <Text
                        size="md"
                        style={{
                          lineHeight: "1.8rem",
                        }}
                      >
                        Throughout our engagement in this cause, we witnessed
                        the devastating impact of the earthquake on the
                        communities of Nalgad Municipality. Families faced
                        significant challenges, from the loss of homes to
                        disruptions in essential services, exacerbating an
                        already difficult situation.
                      </Text>
                    </AnimateText.Row>
                  </Stack>
                </AnimateText.Container>

                <AnimateText.Container>
                  <Stack>
                    <AnimateText.Row>
                      <Text
                        opacity={0.5}
                        size="xs"
                        style={{
                          lineHeight: "1.8rem",
                        }}
                      >
                        THE ACTION
                      </Text>
                    </AnimateText.Row>
                    <AnimateText.Row>
                      <Text
                        size="md"
                        style={{
                          lineHeight: "1.8rem",
                        }}
                      >
                        In response to the urgent needs arising from the
                        disaster, our organization took decisive action across
                        multiple phases. We began by providing immediate relief,
                        distributing essential supplies directly to those
                        affected. This included food, water, shelter materials,
                        and medical aid, ensuring that families received
                        critical support during their time of need.
                        <br />
                        <br />
                        As the relief efforts progressed, we pivoted towards
                        long-term recovery initiatives, focusing on enhancing
                        healthcare capabilities and providing shelter solutions.
                        We equipped Nalgad Primary Hospital with vital medical
                        equipment, including oxygen concentrators and nebulizer
                        machines, to bolster its capacity to serve the
                        community's healthcare needs. Additionally, we erected
                        community tents in earthquake-affected areas and within
                        schools, offering temporary shelter and security to
                        those displaced by the disaster.
                      </Text>
                    </AnimateText.Row>
                  </Stack>
                </AnimateText.Container>

                <AnimateText.Container>
                  <Stack>
                    <AnimateText.Row>
                      <Text
                        opacity={0.5}
                        size="xs"
                        style={{
                          lineHeight: "1.8rem",
                        }}
                      >
                        THE OUTCOME
                      </Text>
                    </AnimateText.Row>
                    <AnimateText.Row>
                      <Text
                        size="md"
                        style={{
                          lineHeight: "1.8rem",
                        }}
                      >
                        The outcome of our collective efforts has been
                        impactful. Hundreds of families received immediate
                        relief assistance, while healthcare facilities were
                        strengthened to better address the medical needs of the
                        community. Moreover, the provision of shelter solutions,
                        including community tents and jackets for
                        schoolchildren, has helped mitigate the hardships faced
                        by those impacted by the earthquake.
                        <br />
                        <br />
                        While challenges remain, our commitment to supporting
                        the recovery and resilience of the Nalgad Municipality
                        community remains steadfast. By working together and
                        continuing to prioritize the well-being of those
                        affected, we can build a brighter future for all.
                      </Text>
                    </AnimateText.Row>
                  </Stack>
                </AnimateText.Container>
              </SimpleGrid>
            </Grid.Col>
          </Grid>
        </AnimateDiv.Container>
      </Container>
    </>
  );
}
