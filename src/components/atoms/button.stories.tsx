import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/atoms/button";

const meta: Meta<typeof Button> = {
  args: {
    children: "Button",
    variant: "primary",
  },
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["icon", "sm", "md", "lg"],
    },
    variant: {
      control: { type: "radio" },
      options: ["outline", "primary", "ghost", "link", "destructive"],
    },
  },
  component: Button,
  title: "Atoms/Button",
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {};

export const AllButtons: Story = {
  render: ({}) => (
    <div className="flex flex-col items-start gap-8">
      <Button>Outline</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};
