// @vitest-environment jsdom
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { FieldErrorMessage } from "../FieldErrorMessage";
import { FieldHelper } from "../FieldHelper";

import { Input } from "./Input";

describe("Input", () => {
  it("works as controlled input", () => {
    render(<Input label="Name" value="test" onChange={() => {}} />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("test");

    fireEvent.change(input, { target: { value: "test" } });
    expect((input as HTMLInputElement).value).toBe("test");
  });

  it("works as uncontrolled input", () => {
    render(<Input label="Name" defaultValue="hello" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("hello");

    fireEvent.change(input, { target: { value: "abc" } });
    expect(input).toHaveValue("abc");
  });

  it("shows error if value is less than 2 symbols and loses focus", () => {
    render(
      <>
        <Input label="Name" value="a" invalid />
        <FieldErrorMessage>
          String must contain at least 2 character(s)
        </FieldErrorMessage>
        <FieldHelper>Your name</FieldHelper>
      </>,
    );

    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("border-red");
    expect(screen.getByText("Your name")).toBeInTheDocument();
  });

  it("matches snapshot — default", () => {
    const { container } = render(<Input label="Email" />);
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot — with error", () => {
    const { container } = render(<Input label="Username" invalid />);
    expect(container).toMatchSnapshot();
  });
});

describe("FormsMock: controlled input", () => {
  it("renders with value and triggers onChange", () => {
    const handleChange = vi.fn();

    render(<Input label="Controlled" value="Controlled value" onChange={handleChange} />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("Controlled value");

    fireEvent.change(input, { target: { value: "Updated" } });
    expect(handleChange).toHaveBeenCalled();
  });
});

describe("FormsMock: uncontrolled input", () => {
  it("renders with defaultValue and updates on user input", () => {
    render(<Input label="Uncontrolled" defaultValue="Default value" />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveValue("Default value");

    fireEvent.change(input, { target: { value: "User typed" } });
    expect(input).toHaveValue("User typed");
  });
});
