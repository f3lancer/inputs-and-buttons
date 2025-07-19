import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

// Обов'язково цей default export!
const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  args: {
    label: "Name",
    helperText: "Enter Name",
  },
};

export const Error: Story = {
  args: {
    label: "Name",
    errorText: "Min 2 values",
    helperText: "Enter Name",
  },
};
