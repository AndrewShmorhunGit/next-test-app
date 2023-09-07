/** @jsxImportSource theme-ui */
"use client";
import { Box, Button, Grid } from "theme-ui";

export function HomePage() {
  return (
    <div
      sx={{
        minHeight: "100%",
        variant: "styles.box.flex.column",
      }}
    >
      <h1 sx={{ variant: "styles.headers.main" }} children={"Welcome"} />
      <Button
        sx={{ variant: "styles.buttons.primary" }}
        children={"get started"}
      />
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
    </div>
  );
}
