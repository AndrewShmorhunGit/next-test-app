/** @jsxImportSource theme-ui */
"use client";
import { FlexBox } from "components/lib/Boxes";
import { Box, Button, Grid } from "theme-ui";

export function HomePage() {
  return (
    <FlexBox
      flex="column"
      sx={{
        minHeight: "100%",
      }}
    >
      <h1 sx={{ variant: "styles.headers.main" }}>Welcome</h1>
      <Button sx={{ variant: "styles.buttons.primary" }}>get started</Button>
      <Grid gap={3} columns={[2, "1fr 2fr"]} sx={{ pt: 3 }}>
        <Box bg="primary.main" p={1}>
          Task 1
        </Box>
        <Box bg="muted" p={1}>
          Description 1
        </Box>
        <Box bg="primary.main" p={1}>
          Task 2
        </Box>
        <Box bg="muted" p={1}>
          Description 2
        </Box>
      </Grid>
    </FlexBox>
  );
}
