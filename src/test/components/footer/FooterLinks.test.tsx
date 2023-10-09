/**
 * @jest-environment jsdom
 */
import React from "react";
import { render } from "@testing-library/react";
import { FooterLinks } from "../../../components/footer/Server";

describe("FooterLinks", () => {
  it("renders without errors", () => {
    render(<FooterLinks />);
  });

  it("displays the correct number of links", () => {
    const { container } = render(<FooterLinks />);
    const links = container.querySelectorAll("a");
    expect(links.length).toBe(2);
  });

  it("displays the correct link URLs", () => {
    const { getByRole } = render(<FooterLinks />);
    const githubLink = getByRole("link", { name: /GitHub/i });
    const linkedinLink = getByRole("link", { name: /LinkedIn/i });

    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/AndrewShmorhunGit/next-test-app"
    );

    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/andrew-shmorhun-850a76209/"
    );
  });
});
