import { mq } from "./media-queries";
import { palette } from "./palette";

// Absolute

export const absoluteCenter = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
};

// Flex

export const flexCenter = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const flexColumn = {
  display: "flex",
  flexDirection: "column",
};

// Grid

export function createGrid(columns: number | string, rows: number | string) {
  return {
    display: "grid",
    gridTemplateColumns: `${
      typeof columns === "number" ? `repeat(${columns}, 1fr)}` : `${columns}`
    }`,
    gridTemplateRows: `${
      typeof rows === "number" ? `repeat(${rows}, 1fr)}` : `${rows}`
    }`,
  };
}

// Containers

export const wideContainer = {
  padding: "1.2rem 4rem",
};

export const marginCenter = {
  marginLeft: "auto",
  marginRight: "auto",
};

export const container = {
  ...marginCenter,
  maxWidth: "140rem",
  padding: "0 12rem",
  [mq.medium]: { maxWidth: "120rem", padding: "0 8rem" },
  [mq.small]: { padding: "0  3.2rem" },
  [mq.mini]: { padding: "0 3.2rem" },
};

//Container Styling

export function paddingLeftRight(
  left: number | string,
  right: number | string = left
): any {
  return {
    paddingLeft: typeof left === "string" ? left : `${left}rem`,
    paddingRight: typeof right === "string" ? right : `${right}rem`,
  };
}

export function paddingTopBottom(
  top: number | string,
  bottom: number | string = top
): any {
  return {
    paddingTop: typeof top === "string" ? top : `${top}rem`,
    paddingBottom: typeof bottom === "string" ? bottom : `${bottom}rem`,
  };
}

export function setWidth(min: number, max: number = min) {
  return {
    minWidth: `${min}rem`,
    maxWidth: `${max}rem`,
  };
}

// Text Styling

export const uppercaseFirstLetter = {
  ":first-letter": { textTransform: "uppercase" },
};

// FONTS

export const fonts = {
  fontFamily: "Lobster",
};

// SHADOWS

export const appShadows = {
  header: ".4rem .4rem .8rem rgba(0, 0, 0, 0.25)",
  settings: "0 0 0.2rem 0.2rem lightgrey",
};

// BTN's

export const activeBtnStyle = {
  border: `solid white 2px`,
  backgroundColor: palette.main_primary_dark,
  color: palette.white,
};
