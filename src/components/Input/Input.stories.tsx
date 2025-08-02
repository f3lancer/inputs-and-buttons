// src/components/Input/Input.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

import { FieldErrorMessage } from "../FieldErrorMessage";
import { FieldHelper } from "../FieldHelper";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  args: {
    label: "Your name",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    const errors = {
      name:
        value.length === 1 ? "String must contain at least 2 character(s)" : "",
    };

    return (
      <div>
        <Input
          {...args}
          onChange={e => setValue(e.target.value)}
          id="name"
          name="name"
          type="text"
          label="Your name"
          value={value}
          hasError={!!errors.name}
        />
        {errors.name && <FieldErrorMessage>{errors.name}</FieldErrorMessage>}
        <FieldHelper>Your name</FieldHelper>
      </div>
    );
  },
};
export const HasError: Story = {
  render: (args) => {
    const [value, setValue] = useState("i");
    const errors = {
      name:
        value.length < 2 ? "String must contain at least 2 character(s)" : "",
    };

    return (
      <div>
        <Input
          {...args}
          onChange={e => setValue(e.target.value)}
          id="name"
          name="name"
          type="text"
          label="Name"
          value={value}
          hasError={!!errors.name}
        />
        {errors.name && <FieldErrorMessage>{errors.name}</FieldErrorMessage>}
        <FieldHelper>Your name</FieldHelper>
      </div>
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
        onChange={e => setValue(e.target.value)}
      />
    );
  },
};
