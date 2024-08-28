import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@/components/atoms/label";

const meta: Meta<typeof Label> = {
  args: {
    children: "Label",
  },
  component: Label,
  title: "Atoms/Label",
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Basic: Story = {};
