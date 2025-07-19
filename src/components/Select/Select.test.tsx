import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Select } from "./Select";

describe("Select", () => {
  const options = ["Option 1", "Option 2", "Option 3"];
  const label = "Choose option";
  const helperText = "Some helper text";
  const placeholder = "Select something";

  it("renders label and placeholder", () => {
    render(
      <Select
        options={options}
        label={label}
        helperText={helperText}
        Text={placeholder}
      />
    );
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(placeholder)).toBeInTheDocument();
    expect(screen.getByText(helperText)).toBeInTheDocument();
  });

  it("opens options on click and selects an option", () => {
    render(
      <Select
        options={options}
        label={label}
        helperText={helperText}
        Text={placeholder}
      />
    );
    // Before click, options should not be visible
    expect(screen.queryByText("Option 2")).not.toBeInTheDocument();

    // Open dropdown
    fireEvent.click(screen.getByText(placeholder));
    expect(screen.getByText("Option 2")).toBeInTheDocument();

    // Select option
    fireEvent.mouseDown(screen.getByText("Option 2"));
    expect(screen.getByText("Option 2")).toBeInTheDocument();

    // Dropdown should close (options hidden)
    fireEvent.blur(screen.getByText("Option 2"));
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
  });
});
