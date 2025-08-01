// src/components/Select/Select.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  args: {
    label: "Choose an option",
    helperText: "Select one of the available options.",
    options: ["Option 1", "Option 2", "Option 3"],
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("Option 1");

    return <Select {...args} value={value} onChange={(val) => setValue(val)} />;
  },
};

export const Empty: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return <Select {...args} value={value} onChange={(val) => setValue(val)} />;
  },
};
