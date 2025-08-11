import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import { Select } from "./Select";

describe("Select", () => {
  const options = [
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ];

  const label = "Choose option";
  const placeholder = "Select something";

  it("renders label and placeholder", () => {
    render(<Select options={options} label={label} value={placeholder} />);
    expect(screen.getByText(label)).not.toBeNull();
  });
  it("opens options on click and selects an option", async () => {
    let selected = "";
    const handleChange = (val: string) => {
      selected = val;
    };

    const { rerender } = render(
      <Select
        options={options}
        label={label}
        value={selected}
        onChange={handleChange}
      />,
    );

    expect(screen.queryByText("Option 2")).toBeNull();

    const trigger = screen.getByText(label);
    await userEvent.click(trigger);

    expect(screen.getByText("Option 2")).not.toBeNull();

    await userEvent.click(screen.getByText("Option 2"));

    rerender(
      <Select
        options={options}
        label={label}
        value="2"
        onChange={handleChange}
      />,
    );

    expect(screen.getByText("Option 2")).not.toBeNull();
  });

  it("matches snapshot — default state", () => {
    const { container } = render(
      <Select options={options} label={label} value="" />,
    );
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot — open dropdown", async () => {
    const { container } = render(
      <Select options={options} label={label} value="" />,
    );
    const trigger = screen.getByText(label);
    await userEvent.click(trigger);
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
        value={selected}
        onChange={handleChange}
      />,
    );

    const trigger = screen.getByText(label);

    fireEvent.click(trigger);
    fireEvent.mouseDown(screen.getByText("Option 2"));

    rerender(
      <Select
        options={options}
        label={label}
        value="2"
        onChange={handleChange}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});

it("renders default value and updates on user selection (uncontrolled)", async () => {
  render(
    <Select
      label="Choose option"
      defaultValue="2"
      options={[
        { value: "1", label: "Option 1" },
        { value: "2", label: "Option 2" },
        { value: "3", label: "Option 3" },
      ]}
    />,
  );

  expect(screen.getByText("Option 2")).not.toBeNull();

  await userEvent.click(screen.getByText("Option 2"));

  await userEvent.click(screen.getByText("Option 3"));

  expect(screen.getByText("Option 3")).not.toBeNull();
});
