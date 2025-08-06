// src/components/Select/Select.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  args: {
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const WithLabel: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <Select
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
  args: {
    label: "Choose an option",
  },
};

export const WithoutLabel: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <Select
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
  args: {},
};

export const Invalid: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <Select
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },
  args: {
    label: "Choose an option",
    invalid: true,
  },
};

export const Predefined: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value || "");

    return (
      <Select
        {...args}
        value={value}
        onChange={setValue}
      />
    );
  },

  args: {
    label: "Choose an option",
    value: "Predefined",
  },
};

export const WithDefaultValue: Story = {
  render: args => <Select {...args} />,
  args: {
    label: "Choose an option",
    defaultValue: "red",

  },
};
