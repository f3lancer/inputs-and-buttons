// src/components/Input/Input.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const WithoutLabel: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: "Your name",
  },
};

export const Invalid: Story = {
  args: {
    label: "Your name",
    invalid: true,
  },
};

export const Prefilled: Story = {
  args: {
    label: "Your name",
    defaultValue: "John Doe",
  },
};

export const PrefilledFocus: Story = {
  args: {
    label: "Your name",
    defaultValue: "John Doe",
  },
  play: async ({ canvasElement }) => {
    const input = canvasElement.querySelector("input");
    input?.focus();
  },
};

export const PrefilledInvalid: Story = {
  args: {
    label: "Your name",
    defaultValue: "John Doe",
    invalid: true,
  },
};

export const WithFullWidth: Story = {
  args: {
    label: "Your name",
    defaultValue: "John Doe",
    className: "w-full",
  },
};
