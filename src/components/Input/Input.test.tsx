// @vitest-environment jsdom
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { FieldErrorMessage } from "../FieldErrorMessage";
import { FieldHelper } from "../FieldHelper";

import { Input } from "./Input";

describe("Input", () => {
  it("renders label and updates value", () => {
    render(<Input label="Name" />);
    expect(screen.getByText("Name")).toBeInTheDocument();

    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "abc" } });
    expect((input as HTMLInputElement).value).toBe("abc");
  });

  it("shows error if value is less than 2 symbols and loses focus", () => {
    render(
      <>
        <Input label="Name" value="a" hasError />
        <FieldErrorMessage>
          String must contain at least 2 character(s)
        </FieldErrorMessage>
        <FieldHelper>Your name</FieldHelper>
      </>,
    );

    expect(
      screen.getByText("String must contain at least 2 character(s)"),
    ).toBeInTheDocument();

    expect(screen.getByText("Your name")).toBeInTheDocument();
  });

  it("matches snapshot — default", () => {
    const { container } = render(<Input label="Email" />);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot — with error", () => {
    const { container } = render(<Input label="Username" hasError />);
    expect(container).toMatchSnapshot();
  });
});
