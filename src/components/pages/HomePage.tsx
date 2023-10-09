/** @jsxImportSource theme-ui */
"use client";
import { FlexBox } from "components/lib/Boxes";
import Link from "next/link";
import { Box, Button, Grid } from "theme-ui";

export function HomePage() {
  return (
    <FlexBox
      flex="column"
      sx={{
        minHeight: "100%",
        gap: 4,
      }}
    >
      <h1 sx={{ variant: "styles.headers.main" }}>Welcome</h1>
      <Grid gap={3} columns={[2, "1fr 4fr"]} sx={{ pt: 3, fontSize: 3, mx: 7 }}>
        <Box bg="primary.main" p={1} sx={{ variant: "styles.box.flex.center" }}>
          Add products
        </Box>
        <Box bg="muted" p={1}>
          To add products press the "Add" button
        </Box>
        <Box bg="primary.main" p={1} sx={{ variant: "styles.box.flex.center" }}>
          Delete products
        </Box>
        <Box bg="muted" p={1}>
          Delete method implemented with experimental "acton"
          functionality(without page rerender). Implemented in groups and income
          pages
        </Box>
      </Grid>
      <Link href={"/products"}>
        <Button sx={{ variant: "styles.buttons.primary", mt: 4 }}>
          get started
        </Button>
      </Link>
    </FlexBox>
  );
}
