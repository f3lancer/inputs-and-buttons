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
        value=""
      />
    );
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(placeholder)).toBeInTheDocument();
    expect(screen.getByText(helperText)).toBeInTheDocument();
  });

  it("opens options on click and selects an option", () => {
    let selected = "";
    const handleChange = (val: string) => {
      selected = val;
    };

    render(
      <Select
        options={options}
        label={label}
        helperText={helperText}
        Text={placeholder}
        value={selected}
        onChange={handleChange}
      />
    );

    expect(screen.queryByText("Option 2")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText(placeholder));
    expect(screen.getByText("Option 2")).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByText("Option 2"));
    expect(screen.getByText("Option 2")).toBeInTheDocument();

    fireEvent.blur(screen.getByText("Option 2"));
    expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
  });

  it("matches snapshot — default state", () => {
    const { container } = render(
      <Select
        options={options}
        label={label}
        helperText={helperText}
        Text={placeholder}
        value=""
      />
    );
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot — open dropdown", () => {
    const { container } = render(
      <Select
        options={options}
        label={label}
        helperText={helperText}
        Text={placeholder}
        value=""
      />
    );
    fireEvent.click(screen.getByText(placeholder));
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot — selected option", () => {
    let selected = "";
    const handleChange = (val: string) => {
      selected = val;
    };

    const { container, rerender } = render(
      <Select
        options={options}
        label={label}
        helperText={helperText}
        Text={placeholder}
        value={selected}
        onChange={handleChange}
      />
    );

    fireEvent.click(screen.getByText(placeholder));
    fireEvent.mouseDown(screen.getByText("Option 2"));

    rerender(
      <Select
        options={options}
        label={label}
        helperText={helperText}
        Text={placeholder}
        value="Option 2"
        onChange={handleChange}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
