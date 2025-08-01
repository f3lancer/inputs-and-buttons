// @vitest-environment jsdom
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Input } from "./Input";

describe("Input", () => {
  it("renders label and updates value", () => {
    render(<Input label="Name" helperText="Enter name" />);
    expect(screen.getByText("Name")).toBeInTheDocument();

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "abc" } });
    expect((input as HTMLInputElement).value).toBe("abc");
  });

  it("shows error if value is less than 2 symbols and loses focus", () => {
    render(<Input label="Name" value="a" hasError errorText="Min 2 symbols" />);
    expect(screen.getByText("Min 2 symbols")).toBeInTheDocument();
  });

  it("matches snapshot — default", () => {
    const { container } = render(
      <Input label="Email" helperText="Enter your email" />,
    );
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot — with error", () => {
    const { container } = render(
      <Input
        label="Username"
        helperText="Enter username"
        errorText="This field is required"
        hasError
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
