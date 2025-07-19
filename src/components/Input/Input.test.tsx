import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

describe("Input", () => {
  it(() => {
    render(<Input label="Name" helperText="Enter name" />);
    // Has Input
    expect(screen.getByText("Name")).toBeInTheDocument();

    // Founding input
    const input = screen.getByRole("textbox");
    //Change the value
    fireEvent.change(input, { target: { value: "abc" } });
    // Checking if the vlue did change
    expect((input as HTMLInputElement).value).toBe("abc");
  });

  it("Show error if < 2 symbol and area did loses focus", () => {
    render(<Input label="Name" />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "a" } });
    fireEvent.blur(input); //did lose the focus
    expect(screen.getByText("Min 2 sumbols")).toBeInTheDocument();
  });
});
