// src/components/Input/Input.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  args: {
    label: "Your name",
    helperText: "Please enter your full name.",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");

    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};

export const Prefilled: Story = {
  render: (args) => {
    const [value, setValue] = useState("John Doe");

    return (
      <Input
        {...args}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  },
};
