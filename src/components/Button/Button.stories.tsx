// src/components/Button/Button.stories.tsx
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  // MusicalNoteIcon,
  // ChevronRightIcon,
} from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Click me",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const WithLeftIcon: Story = {
  args: {
    variant: "leftIcon",
    leftIcon: <ArrowLeftIcon className="w-5 h-5" />,
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: "rightIcon",
    rightIcon: <ArrowRightIcon className="w-5 h-5" />,
  },
};

export const WithDoubleIcons: Story = {
  args: {
    variant: "doubleIcon",
    icons: [
      <ArrowLeftIcon key="left" className="w-5 h-5" />,
      <ArrowRightIcon key="right" className="w-5 h-5" />,
    ],
  },
};

export const AsLink: Story = {
  args: {
    variant: "linck",
    href: "#",
  },
};

export const Disabled: Story = {
  args: {
    variant: "disabled",
    disabled: true,
  },
};
