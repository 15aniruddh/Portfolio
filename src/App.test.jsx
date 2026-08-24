import { render, screen } from "@testing-library/react";
import App from "./App";
import { Profile, NavLinks } from "./Components/Data/Profile";

describe("Portfolio", () => {
  test("renders the hero with the profile name", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: Profile.name })
    ).toBeInTheDocument();
  });

  test("renders a navigable section for every nav link", () => {
    const { container } = render(<App />);
    NavLinks.forEach((link) => {
      expect(container.querySelector(`#${link.id}`)).toBeInTheDocument();
    });
  });

  test("exposes a skip link to the main content", () => {
    render(<App />);
    expect(
      screen.getByRole("link", { name: /skip to content/i })
    ).toHaveAttribute("href", "#main");
  });
});
