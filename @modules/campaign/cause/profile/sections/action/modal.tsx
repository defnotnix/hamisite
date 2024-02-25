import { Carousel } from "@mantine/carousel";
import {
  Box,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { ArrowRight } from "@phosphor-icons/react";

export function ModalPhase({ activeData }: { activeData: any }) {
  function getRandomNumberFromList() {
    const list = [400, 450, 500, 550];
    const randomIndex = Math.floor(Math.random() * list.length); // Generate a random index within the length of the list
    return list[randomIndex]; // Return the element at that index
  }

  return (
    <Container size="lg" py={60}>
      <Text size="xs" my="md" tt="uppercase">
        Phase {activeData.phase_order}{" "}
        <span
          style={{
            opacity: 0.5,
          }}
        >
          of {activeData.total}
        </span>
      </Text>

      <Title size="4rem" lh="4rem" visibleFrom="lg">
        {activeData.label}
      </Title>

      <Title size="2.8rem" lh="3.2rem" hiddenFrom="lg">
        {activeData.label}
      </Title>

      <Group mb="xl" justify="space-between" mt="md">
        <Group>
          <Text size="sm" fw={600} tt="uppercase" c="brand.5">
            {activeData.phase_category}
          </Text>
          <Divider orientation="vertical" />
          <Group gap="xs">
            <Text size="sm" fw={600}>
              {activeData.start_date}
            </Text>{" "}
            -{" "}
            <Text
              fw={600}
              size="sm"
              tt="uppercase"
              c={activeData.end_date ? "brand.5" : "teal.6"}
            >
              {activeData.end_date || "Ongoing"}{" "}
            </Text>
          </Group>
        </Group>
      </Group>

      <Image radius="lg" src={activeData.thumbnail} mt="64" />

      <Box mt={64}>
        <SimpleGrid cols={{ base: 2, lg: 4 }} spacing="xs">
          <Paper p={{ base: "sm", lg: "xl" }} radius="lg">
            <Text size="xs" opacity={0.5} tt="uppercase">
              Project Duration
            </Text>
            <Space h={48} />
            <Text size="2.5rem" visibleFrom="lg">
              138 days
            </Text>
            <Text size="1.8rem" hiddenFrom="lg">
              138 days
            </Text>
            <Space h={"sm"} />
            <Text size="xs" c="gray.6">
              {activeData.start_date} - {activeData.end_date || "Ongoing"}
            </Text>
          </Paper>

          <Paper p={{ base: "sm", lg: "xl" }} radius="lg">
            <Text size="xs" opacity={0.5} tt="uppercase">
              Families Helped
            </Text>
            <Space h={48} />

            <Text size="2.5rem" visibleFrom="lg">
              13,000 +
            </Text>
            <Text size="1.8rem" hiddenFrom="lg">
              13,000 & more
            </Text>
            <Space h={"sm"} />

            <Text size="xs" c="gray.6">
              1,20,000 + Individuals
            </Text>
          </Paper>

          <Paper p={{ base: "sm", lg: "xl" }} radius="lg">
            <Text size="xs" opacity={0.5} tt="uppercase">
              Funds used
            </Text>
            <Space h={48} />
            <Text size="2.5rem" visibleFrom="lg">
              -
            </Text>
            <Text size="1.8rem" hiddenFrom="lg">
              -
            </Text>
            <Space h={"sm"} />

            <Text size="xs" c="gray.6">
              Rs. 2,23,44,510
              <span
                style={{
                  opacity: 0.5,
                }}
              >
                .00
              </span>
            </Text>
          </Paper>

          <Paper p={{ base: "sm", lg: "xl" }} radius="lg">
            <Text size="xs" opacity={0.5} tt="uppercase">
              Goods Donated
            </Text>
            <Space h={48} />
            <Text size="2.5rem" visibleFrom="lg">
              -
            </Text>
            <Text size="1.8rem" hiddenFrom="lg">
              -
            </Text>
            <Space h={"sm"} />
            <Text size="xs" c="gray.6">
              Jackets, Tents, Basic Necessities
            </Text>
          </Paper>
        </SimpleGrid>
      </Box>

      <Box mt={100}>
        <Group gap="xs">
          <ArrowRight color="var(--mantine-color-brand-5)" />
          <Text size="xs" tt="uppercase">
            Phase Overview
          </Text>
        </Group>

        <Grid>
          <Grid.Col span={{ base: 12, lg: 9 }}>
            <Stack gap="xl">
              <Text size="1.3rem" lh="2rem" mt="xl" visibleFrom="lg">
                {activeData.description}
              </Text>
              <Text size="1rem" lh="1.5rem" mt="xl" mb="xl" hiddenFrom="lg">
                {activeData.description}
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, lg: 3 }} visibleFrom="lg">
            <Image
              radius="lg"
              h={300}
              src="https://assets-cdn.kathmandupost.com/uploads/source/news/2023/third-party/HKCJajarkot4-1699061762.jpg"
            />
            <Text size="xs" ta="center" mt="md" opacity={0.7}>
              Source: Initial glimpse of the earthquake's destructive aftermath
            </Text>
          </Grid.Col>
        </Grid>
      </Box>

      <Box mt={130}>
        <Carousel
          slideSize={{
            base: "100%",
            md: "50%",
          }}
          slideGap={"md"}
          align={"start"}
        >
          <Carousel.Slide key={1010} hiddenFrom="lg">
            <Image
              radius="lg"
              h={400}
              src="https://assets-cdn.kathmandupost.com/uploads/source/news/2023/third-party/HKCJajarkot4-1699061762.jpg"
            />
            <Text size="xs" opacity={0.7} ta="center" mt="sm">
              Source: Initial glimpse of the earthquake's destructive aftermath
            </Text>
          </Carousel.Slide>
          {activeData.images.map((imageinfo: any, index: number) => (
            <Carousel.Slide key={index}>
              <Image radius="lg" h={400} src={imageinfo.url} />
              <Text size="xs" opacity={0.7} ta="center" mt="sm">
                Source : {imageinfo.label}
              </Text>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Box>
    </Container>
  );
}
