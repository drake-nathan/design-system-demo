import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/components/atoms/input";

const meta: Meta<typeof Input> = {
  args: {
    placeholder: "Input",
    type: "text",
  },
  argTypes: {},
  component: Input,
  title: "Atoms/Input",
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {};
