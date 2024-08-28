import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../atoms/input";
import { Label } from "../atoms/label";
import { TextfieldComposable } from "./textfield";

const meta: Meta<typeof TextfieldComposable> = {
  component: TextfieldComposable,
  tags: ["!autodocs"],
  title: "Molecules/Textfield",
};
export default meta;

type Story = StoryObj<typeof TextfieldComposable>;

export const Basic: Story = {
  render: (props) => (
    <TextfieldComposable className="min-w-[250px]" {...props}>
      <Label htmlFor="name">Name</Label>
      <Input
        id="name"
        placeholder="Bender Bending Rodriguez"
        required
        type="password"
      />
    </TextfieldComposable>
  ),
};
