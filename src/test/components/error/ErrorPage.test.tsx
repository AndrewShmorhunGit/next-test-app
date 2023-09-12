/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import { ErrorPage } from "../../../components/error/ErrorPage";

describe("ErrorPage", () => {
  it("renders without errors", () => {
    render(<ErrorPage />);
  });

  it("displays the error message", () => {
    const { getByText } = render(<ErrorPage />);
    const errorMessage = getByText("It Is an Error!");
    expect(errorMessage).toBe(true);
  });
});
