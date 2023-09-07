/** @jsxImportSource theme-ui */
import { Box, ThemeUIStyleObject } from "theme-ui";

function FlexBox({
  flex,
  sx,
  p,
  color,
  bg,
  children,
}: {
  flex: "center" | "column";
  sx?: ThemeUIStyleObject | undefined;
  p?: number;
  color?: string;
  bg?: string;
  children: React.ReactNode;
}) {
  return (
    <Box
      p={p}
      color={color}
      bg={bg}
      sx={{ variant: `styles.box.flex.${flex}`, ...sx }}
    >
      {children}
    </Box>
  );
}

export { FlexBox };
