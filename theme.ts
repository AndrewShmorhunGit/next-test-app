"use client";
import { roboto } from "@theme-ui/presets";
import { mq } from "app/styles/services/media-queries";
import type { Theme } from "theme-ui";

// const makeTheme = <T extends Theme>(t: T) => t;

const helpers = {
  flex: {
    center: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    column: {
      display: "flex",
      flexDirection: "column",
    },
  },
};

export const theme: Theme = {
  ...roboto,
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    background: { main: "#ffffff", second: "#f0f3f5", third: "#cfd8dc" },
    text: { main: "#343A40", error: "#d02b28", light: "lightgrey" },
    error: "#d02b28",
    primary: { main: "#7cb342", second: "#689e30" },
    // Dark theme
    modes: {
      dark: {
        background: { main: "#ffffff", second: "#f0f3f5", third: "#cfd8dc" },

        text: { main: "#343A40", error: "#d02b28", light: "lightgrey" },
        error: "#d02b28",
        primary: { main: "#7cb342", second: "#689e30" },
      },
    },
  },
  fontSizes: [
    "1.2rem",
    "1.4rem",
    "1.6rem",
    "2.0rem",
    "2.4rem",
    "3.2rem",
    "4.8rem",
    "6.4rem",
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    buttons: "0.2rem",
  },
  space: [0, 0.4, 0.8, 1.6, 3.2, 6.4, 12.8, 25.6, 51.2].map(
    (i) => `${i}` + "rem"
  ),
  sizes: {
    wide: 204.8,
    container: 102.4,
    narrow: 51.2,
  },
  borders: {},
  radii: ["50%", ".4rem", ".8rem", "1.2rem", "2rem", "10rem"],
  shadows: {
    standard: ".4rem .4rem .8rem rgba(0, 0, 0, 0.25)",
    input: "inset 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1)",
    grey: "0 0 0.2rem 0.2rem lightgrey",
  },
  breakpoints: [
    "@media (min-width: 41.25em)",
    "@media (min-width: 60em)",
    "@media screen and (min-width: 75em)",
  ],

  styles: {
    ...roboto.styles,
    box: {
      flex: {
        center: { ...helpers.flex.center },
        column: { ...helpers.flex.center, flexDirection: "column" },
      },
    },
    headers: {
      main: {
        textAlign: "center",
        fontSize: 6,
        fontFamily: "body",
        fontWeight: "heading",
        color: "primary.main",
        mt: 4,
        mb: 3,
      },
      page: {
        textAlign: "center",
        fontSize: 6,
        fontFamily: "body",
        fontWeight: "body",
        color: "text.main",
        mt: 4,
        mb: 3,
      },
    },
    buttons: {
      standard: {
        border: "none",
        fontWeight: "700",
        textTransform: "uppercase",
        fontSize: 2,
        padding: "2rem 4rem",
        borderRadius: "10rem",
        cursor: "pointer",
        letterSpacing: "buttons",
      },
      primary: {
        variant: "styles.buttons.standard",
        bg: "background.main",
        color: "text.main",
        "&:hover": {
          bg: "background.third",
        },
      },
      modal: {
        variant: "styles.buttons.standard",
        bg: "background.main",
        color: "error",
        gap: 4,
        ...helpers.flex.center,
      },
      error: {
        variant: "styles.buttons.standard",
        bg: "error",
        color: "white",
      },
    },
    forms: {
      input: {
        pl: 2,
        alignItems: "center",
        bg: "background.second",
        color: "text",
        fontWeight: "bold",
        border: "none",
        borderRadius: 1,
        fontSize: 2,
        maxWidth: "32rem",
        height: "2.8rem",
        boxShadow: "input",
        [mq.medium]: { maxWidth: "24rem" },
        [mq.small]: { display: "none" },
        [mq.mini]: { display: "none" },
      },
    },
  },
};

export type ExactTheme = typeof theme;
