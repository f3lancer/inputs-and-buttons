// @vitest-environment jsdom
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { Button } from "./Button";
import "@testing-library/jest-dom";

describe("Button", () => {
  it("matches snapshot — primary", () => {
    const { container } = render(<Button variant="primary">Primary</Button>);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot — with icons", () => {
    const { container } = render(
      <Button
        variant="primary"
        leftIcon={<ChevronUpIcon />}
        rightIcon={<ChevronUpIcon />}
      >
        With icons
      </Button>,
    );
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot — as link", () => {
    const { container } = render(
      <Button variant="primary" href="https://example.com">
        Link
      </Button>,
    );
    expect(container).toMatchSnapshot();
  });

  it("renders button text", () => {
    render(<Button variant="primary">Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders as <a> if href provided", () => {
    render(
      <Button variant="primary" href="https://google.com">
        Go
      </Button>,
    );
    const link = screen.getByRole("link", { name: "Go" });
    expect(link).toHaveAttribute("href", "https://google.com");
  });

  it("is disabled when disabled prop is true", () => {
    render(
      <Button variant="primary" disabled>
        Disabled
      </Button>,
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("calls onClick if not disabled", () => {
    const handleClick = vi.fn();
    render(
      <Button variant="primary">
        <span onClick={handleClick}>Clickable</span>
      </Button>,
    );
    fireEvent.click(screen.getByText("Clickable"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders leftIcon and rightIcon", () => {
    render(
      <Button
        variant="primary"
        leftIcon={<ChevronUpIcon data-testid="left" />}
        rightIcon={<ChevronUpIcon data-testid="right" />}
      >
        Icon button
      </Button>,
    );
    expect(screen.getByTestId("left")).toBeInTheDocument();
    expect(screen.getByTestId("right")).toBeInTheDocument();
  });
});
