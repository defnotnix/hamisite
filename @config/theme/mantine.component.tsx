import {
  Container,
  NumberInput,
  Select,
  TextInput,
  Title,
  createTheme,
} from "@mantine/core";
import { DateInput } from "@mantine/dates";

export const configMantineComponents = {
  Title: Title.extend({
    defaultProps: {
      tt: "uppercase",
      fw: 500,
      style: {
        fontFamily: "var(--font-heading)",
      },
    },
  }),

  Container: Container.extend({
    defaultProps: {
      size: "1540",
    },
  }),

  TextInput: TextInput.extend({
    defaultProps: {
      size: "sm",
      styles: {
        input: {
          fontSize: "var(--mantine-font-size-xs)",
        },
        label: {
          fontSize: "var(--mantine-font-size-xs)",
        },
      },
    },
  }),
  NumberInput: NumberInput.extend({
    defaultProps: {
      size: "sm",
      styles: {
        input: {
          fontSize: "var(--mantine-font-size-xs)",
        },
        label: {
          fontSize: "var(--mantine-font-size-xs)",
        },
      },
    },
  }),
  Select: Select.extend({
    defaultProps: {
      size: "sm",
      styles: {
        input: {
          fontSize: "var(--mantine-font-size-xs)",
        },
        label: {
          fontSize: "var(--mantine-font-size-xs)",
        },
      },
    },
  }),
  DateInput: DateInput.extend({
    defaultProps: {
      size: "sm",
      styles: {
        input: {
          fontSize: "var(--mantine-font-size-xs)",
        },
        label: {
          fontSize: "var(--mantine-font-size-xs)",
        },
      },
    },
  }),
};
