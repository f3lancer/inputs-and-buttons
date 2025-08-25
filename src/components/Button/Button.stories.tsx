// // src/components/Button/Button.stories.tsx

// src/components/Button/Button.stories.tsx
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {},
  render: args => (
    <div className="flex flex-col gap-4 items-center">
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    leftIcon: <ArrowLeftIcon className="w-5 h-5" />,
    rightIcon: <ArrowRightIcon className="w-5 h-5" />,
  },
  render: args => (
    <div className="flex flex-col gap-4 items-center">
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
};

export const DisabledButtons: Story = {
  args: {
    disabled: true,
  },
  render: args => (
    <div className="flex flex-col gap-4 items-center">
      <Button {...args} variant="primary">
        Primary
      </Button>
      <Button {...args} variant="secondary">
        Secondary
      </Button>
      <Button {...args} variant="outline">
        Outline
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="link">
        Link
      </Button>
    </div>
  ),
};

export const AsLink: Story = {
  render: () => (
    <div className="flex flex-col gap-4 items-center">
      <Button asChild>
        <a href="www.google.com">Click me</a>
      </Button>
    </div>
  ),
};

export const WithFullWidth: Story = {
  render: () => (
    <div className="flex gap-4 flex-col items-center">
      <Button variant="primary" className="w-full">
        Primary
      </Button>
      <Button variant="secondary" className="w-full">
        Secondary
      </Button>
      <Button variant="outline" className="w-full">
        Outline
      </Button>
      <Button variant="destructive" className="w-full">
        Destructive
      </Button>
      <Button variant="ghost" className="w-full">
        Ghost
      </Button>
      <Button variant="link" className="w-full">
        Link
      </Button>
    </div>
  ),
};
export const LikeInline: Story = {
  render: () => (
    <div>
      <Button variant="primary">
        Primary
      </Button>
      text
      <Button asChild>
        <a href="www.google.com">Click me</a>
      </Button>
      text again
    </div>
  ),
};
