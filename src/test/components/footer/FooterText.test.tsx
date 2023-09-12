import { render } from "@testing-library/react";
import { FooterText } from "../../../components/footer/Client";

describe("FooterText", () => {
  it("renders without errors", () => {
    render(<FooterText />);
  });

  it("displays the copyright text when media is big or medium", () => {
    jest.mock("hooks/useMedia", () => ({
      useMedia: jest.fn(() => ({ isMedia: { big: true, medium: false } })),
    }));

    const { getByText } = render(<FooterText />);
    const copyrightText = getByText(/©\s+\d{4}/i); // Matches copyright symbol followed by a year (e.g., © 2023)
    // @ts-ignore
    expect(copyrightText).toBeInTheDocument();
  });
});
