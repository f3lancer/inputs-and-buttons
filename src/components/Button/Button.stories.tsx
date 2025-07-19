import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "outline",
        "destructive",
        "ghost",
        "disabled",
        "linck",
        "doubleIcon",
        "leftIcon",
        "rightIcon",
      ],
      defaultValue: "primary",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
  },
};

export const WithHref: Story = {
  args: {
    children: "As Link",
    href: "https://google.com",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const LeftIcon: Story = {
  args: {
    children: "Left icon",
    leftIcon: <ChevronUpIcon className="w-6 h-6" />,
  },
};

export const RightIcon: Story = {
  args: {
    children: "Right icon",
    rightIcon: <ChevronDownIcon className="w-6 h-6" />,
  },
};

export const DoubleIcons: Story = {
  args: {
    children: "Double icons",
    icons: [
      <ChevronUpIcon className="w-6 h-6" key="left" />,
      <ChevronDownIcon className="w-6 h-6" key="right" />,
    ],
  },
};
