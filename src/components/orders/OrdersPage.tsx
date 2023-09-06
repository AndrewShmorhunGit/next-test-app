/** @jsxImportSource theme-ui */
"use client";

import { Box, Flex, Heading, Button } from "theme-ui";

export function OrdersPage() {
  return (
    <>
      <Box p={4} bg="highlight">
        <Flex
          sx={{
            alignItems: "center",
          }}
        >
          <Heading>Components</Heading>
          <Button ml="auto">Beep</Button>
        </Flex>
      </Box>
    </>
  );
}
