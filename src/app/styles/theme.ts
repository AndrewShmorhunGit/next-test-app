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
    text: {
      main: "#343A40",
      error: "#d02b28",
      light: "grey",
      tables: "#495057",
    },
    error: "#d02b28",
    primary: { main: "#7cb342", second: "#689e30" },
    // Dark theme
    modes: {
      dark: {
        // change to bg
        background: { main: "#ffffff", second: "#f0f3f5", third: "#cfd8dc" },

        text: { main: "#343A40", error: "#d02b28", light: "grey" },
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
    tables: 500,
    nav: 600,
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
  borders: {
    lightgrey: "0.1rem lightgrey solid",
    nav: {
      active: "solid 0.4rem primary.main",
      transparent: "solid 0.4rem transparent",
    },
  },
  radii: ["50%", ".4rem", ".8rem", "1.2rem", "2rem", "10rem"],
  shadows: {
    standard: ".4rem .4rem .8rem rgba(0, 0, 0, 0.25)",
    input: "inset 0 0.2rem 0.2rem rgba(0, 0, 0, 0.1)",
    grey: "0 0 0.2rem 0.2rem lightgrey",
    green: "0 0 0.2rem 0.2rem #7cb342",
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
      absolute: {
        center: {
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        },
      },
      product: {
        wrapper: {
          minWidth: "auto",
          border: "lightgrey",
          p: "0.8rem 2.4rem",
          bg: "background.main",
          minHeight: "8rem",
          borderRadius: 1,
        },
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
      title: {
        fontSize: 5,
        fontWeight: "600",
        color: "text.main",
      },
    },
    buttons: {
      standard: {
        border: "none",
        fontWeight: "heading",
        textTransform: "uppercase",
        fontSize: 2,
        padding: "2rem 4rem",
        borderRadius: "10rem",
        cursor: "pointer",
        letterSpacing: "buttons",
        transition: "all .4s ease",
      },
      toggle: {
        variant: "styles.buttons.standard",
        fontSize: 0,
        padding: "1.2rem 2.4rem",
        bg: "background.main",
        color: "text.main",
        border: "grey",
        "&:hover": {
          bg: "background.third",
          color: "primary.main",
        },
      },
      primary: {
        variant: "styles.buttons.standard",
        bg: "background.main",
        color: "text.main",
        "&:hover": {
          bg: "background.third",
          color: "primary.main",
        },
      },
      modal: {
        variant: "styles.buttons.standard",
        bg: "background.main",
        color: "error",
        gap: 4,
        ...helpers.flex.center,
        "&:hover": { color: "text.main" },
      },
      error: {
        variant: "styles.buttons.standard",
        bg: "error",
        color: "white",
      },
      plus: {
        width: "2.4rem",
        height: "2.4rem",
        cursor: "pointer",
        display: "flex",
        borderRadius: 0,
        boxShadow: "green",
        position: "relative",
        bg: "primary.second",
        color: "white",
      },
      list: {
        borderRadius: 0,
        width: "3.2rem",
        height: "3.2rem",
        border: "lightgrey",
        position: "relative",
        cursor: "pointer",
      },
      x: {
        position: "absolute",
        width: "3.2rem",
        height: "3.2rem",
        top: "-1.6rem",
        right: "-1.6rem",
        borderRadius: "50%",
        bg: "background.second",
        boxShadow: ".4rem .4rem .2rem rgba(0, 0, 0, 0.25)",
        display: "grid",
        cursor: "pointer",
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
