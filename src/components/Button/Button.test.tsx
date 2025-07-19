import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

describe("Button", () => {
  it("renders button text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("renders as <a> if href provided", () => {
    render(<Button href="https://google.com">Go</Button>);
    const link = screen.getByText("Go");
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "https://google.com");
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("calls onClick if not disabled", () => {
    const handleClick = vi.fn();
    render(
      <Button>
        <span onClick={handleClick}>Clickable</span>
      </Button>
    );
    fireEvent.click(screen.getByText("Clickable"));
    expect(handleClick).toHaveBeenCalled();
  });

  it("renders leftIcon and rightIcon", () => {
    render(
      <Button
        leftIcon={<ChevronUpIcon data-testid="left" />}
        rightIcon={<ChevronUpIcon data-testid="right" />}
      >
        Icon button
      </Button>
    );
    expect(screen.getByTestId("left")).toBeInTheDocument();
    expect(screen.getByTestId("right")).toBeInTheDocument();
  });

  it("renders icons array as left and right absolute icons", () => {
    render(
      <Button
        icons={[
          <ChevronUpIcon data-testid="icon-left" key="l" />,
          <ChevronUpIcon data-testid="icon-right" key="r" />,
        ]}
      >
        Icon array
      </Button>
    );
    expect(screen.getByTestId("icon-left")).toBeInTheDocument();
    expect(screen.getByTestId("icon-right")).toBeInTheDocument();
  });
});
