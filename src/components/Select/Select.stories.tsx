// src/components/Select/Select.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  args: {
    options: [
      { value: "", label: "Choose" },
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const WithLabel: Story = {
  args: {
    label: "Choose an option",
    defaultValue: "1",
  },
};

export const WithoutLabel: Story = {
  args: {
    defaultValue: "1",
  },
};

export const Invalid: Story = {
  args: {
    label: "Choose an option",
    invalid: true,
    defaultValue: "1",
  },
};

export const Predefined: Story = {
  args: {
    label: "Choose an option",
    defaultValue: "1",
  },
};

export const WithDefaultValue: Story = {
  args: {
    label: "Choose an option",
    defaultValue: "red",
  },
};

export const WithFullWidth: Story = {
  args: {
    label: "Choose an option",
    // defaultValue: "1",
    className: "w-full",
  },
};
