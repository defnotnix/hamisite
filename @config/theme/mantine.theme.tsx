"use client";

import { createTheme } from "@mantine/core";
import { generateColors } from "@mantine/colors-generator";
import { configMantineComponents } from "./mantine.component";

export const configMantineTheme: any = createTheme({
  colors: {
    brand: generateColors("#C91A25"),
  },
  primaryColor: "brand",
  primaryShade: {
    light: 6,
    dark: 9,
  },
  fontFamily: "'DM Sans', sans-serif",

  components: configMantineComponents,
});
