export const mq = {
  large: "@media (min-width: 75em)", // 1200
  medium: "@media (min-width: 60em) and (max-width: 74.99em)", // 1200 - 960
  small: "@media (min-width: 41.25em) and (max-width: 59.99em) ", // 960
  mini: "@media (max-width: 41.24em)", // 960 - 660

  // Create custom media query
  setMQ(maxWidth: number, minWidth: number | null = null): string {
    if (minWidth === null) {
      return `@media (max-width: ${(maxWidth / 16).toFixed(2)}em)`;
    }
    return `@media (min-width: ${(minWidth / 16).toFixed(
      2
    )}em) and (max-width: ${(maxWidth / 16).toFixed(2)}em)`;
  },
};
