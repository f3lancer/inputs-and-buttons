import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    label: "Choose an option",
    helperText: "You must select one option",
    Text: "Select...",
  },
};

export const WithLongList: Story = {
  args: {
    options: Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`),
    label: "Big list",
    helperText: "Scroll to see all",
    Text: "Choose item",
  },
};

export const WithNoOptions: Story = {
  args: {
    options: [],
    label: "Empty select",
    helperText: "Nothing to choose here",
    Text: "Unavailable",
  },
};
