import React from "react";
import { render, screen } from "@testing-library/react";
import { AppProviders } from "components/application/AppProviders";
import AppLayout from "app/layout";

test("all the app render", async () => {
  render(<AppLayout children={undefined} />, { wrapper: AppProviders });
  screen.debug();
});
