import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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
        value={placeholder}
      />,
    );
    expect(screen.getByText(label)).not.toBeNull();
    expect(screen.getByText(placeholder)).not.toBeNull();
    expect(screen.getByText(helperText)).not.toBeNull();
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
        helperText={helperText}
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
        helperText={helperText}
        value="Option 2"
        onChange={handleChange}
      />,
    );

    expect(screen.getByText("Option 2")).not.toBeNull();
  });

  it("matches snapshot — default state", () => {
    const { container } = render(
      <Select
        options={options}
        label={label}
        helperText={helperText}
        value=""
      />,
    );
    expect(container).toMatchSnapshot();
  });

  it("matches snapshot — open dropdown", async () => {
    const { container } = render(
      <Select
        options={options}
        label={label}
        helperText={helperText}
        value=""
      />,
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
        helperText={helperText}
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
        helperText={helperText}
        value="Option 2"
        onChange={handleChange}
      />,
    );

    expect(container).toMatchSnapshot();
  });
});

// import { render, fireEvent, screen } from "@testing-library/react";
// import { describe, it, expect } from "vitest";

// import { Select } from "./Select";

// describe("Select", () => {
//   const options = ["Option 1", "Option 2", "Option 3"];
//   const label = "Choose option";
//   const helperText = "Some helper text";
//   const placeholder = "Select something";

//   it("renders label and placeholder", () => {
//     render(
//       <Select
//         options={options}
//         label={label}
//         helperText={helperText}
//         value={placeholder}
//       />,
//     );
//     expect(screen.getByText(label)).not.toBeNull();
//     expect(screen.getByText(placeholder)).not.toBeNull();
//     expect(screen.getByText(helperText)).not.toBeNull();
//   });

//   it("opens options on click and selects an option", () => {
//     let selected = "";
//     const handleChange = (val: string) => {
//       selected = val;
//     };

//     render(
//       <Select
//         options={options}
//         label={label}
//         helperText={helperText}
//         value={selected}
//         onChange={handleChange}
//       />,
//     );

//     expect(screen.queryByText("Option 2")).toBeNull();

//     const trigger = screen.getByText(label).parentElement as HTMLElement;
//     trigger.focus(); // фокус вручну
//     fireEvent.mouseDown(trigger); // відкриває, не викликає blur
//     expect(screen.getByText("Option 2")).not.toBeNull();

//     fireEvent.mouseDown(screen.getByText("Option 2"));
//     expect(screen.getByText("Option 2")).toBeInTheDocument();

//     fireEvent.blur(screen.getByText("Option 2"));
//     expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
//   });

//   it("matches snapshot — default state", () => {
//     const { container } = render(
//       <Select
//         options={options}
//         label={label}
//         helperText={helperText}
//         value=""
//       />,
//     );
//     expect(container).toMatchSnapshot();
//   });

//   it("matches snapshot — open dropdown", () => {
//     const { container } = render(
//       <Select
//         options={options}
//         label={label}
//         helperText={helperText}
//         value=""
//       />,
//     );
//     fireEvent.click(screen.getByText(label));
//     expect(container).toMatchSnapshot();
//   });

//   it("matches snapshot — selected option", () => {
//     let selected = "";
//     const handleChange = (val: string) => {
//       selected = val;
//     };

//     const { container, rerender } = render(
//       <Select
//         options={options}
//         label={label}
//         helperText={helperText}
//         value={selected}
//         onChange={handleChange}
//       />,
//     );

//     fireEvent.click(screen.getByText(label));
//     fireEvent.mouseDown(screen.getByText("Option 2"));

//     rerender(
//       <Select
//         options={options}
//         label={label}
//         helperText={helperText}
//         value="Option 2"
//         onChange={handleChange}
//       />,
//     );

//     expect(container).toMatchSnapshot();
//   });
// });
