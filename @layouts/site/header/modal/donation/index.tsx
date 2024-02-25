"use client";
import { dataCampaignCause } from "@/@json/data/cause";
import {
  Box,
  Button,
  Group,
  NumberInput,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
  ThemeIcon,
} from "@mantine/core";
import { Heartbeat } from "@phosphor-icons/react";
import { useState } from "react";

export function ModalDonation({ onClose }: { onClose: any }) {
  const [step, setStep] = useState(0);

  switch (step) {
    case 0: {
      return (
        <>
          <Box p="md">
            <Stack gap="xl">
              <div>
                <Text ta="center" size="xs" opacity={0.5}>
                  Step 1 of 3
                </Text>
                <Text ta="center" size="xl">
                  Select a cause to donate to.
                </Text>
              </div>
              <Select
                data={dataCampaignCause.map((e: any, index: number) => {
                  return {
                    label: e.title,
                    value: String(index),
                  };
                })}
                placeholder="Select a cause to donate to."
              />

              <Group justify="flex-end" gap="xs" mb="xl">
                <Button size="xs" variant="light" disabled>
                  Back
                </Button>
                <Button
                  size="xs"
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  Next
                </Button>
              </Group>
            </Stack>
          </Box>
        </>
      );
    }
    case 1: {
      return (
        <>
          <Box p="md">
            <Stack gap="xl">
              <div>
                <Text ta="center" size="xs" opacity={0.5}>
                  Step 2 of 3
                </Text>
                <Text ta="center" size="xl">
                  Donation Details
                </Text>
              </div>

              <Stack>
                <TextInput placeholder="Display Name for your donation" />
                <NumberInput
                  leftSection={<Text size="xs">Rs.</Text>}
                  placeholder="Enter your donation amount."
                />
                <Textarea placeholder="Enter a message for your donation." />
              </Stack>

              <Group justify="flex-end" gap="xs" mb="xl">
                <Button
                  size="xs"
                  variant="light"
                  onClick={() => {
                    setStep(0);
                  }}
                >
                  Back
                </Button>
                <Button
                  size="xs"
                  onClick={() => {
                    setStep(1);
                  }}
                >
                  Next
                </Button>
              </Group>
            </Stack>
          </Box>
        </>
      );
    }
  }
}
