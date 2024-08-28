import type { Meta, StoryObj } from "@storybook/react";

import { userEvent, within } from "@storybook/test";

import { LoginCard } from "./login-card";

const meta: Meta<typeof LoginCard> = {
  component: LoginCard,
  tags: ["!autodocs"],
  title: "Organisms/LoginCard",
};
export default meta;

type Story = StoryObj<typeof LoginCard>;

export const Basic: Story = {};

export const Interaction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByLabelText("Email"), "email@provider.com");

    await userEvent.type(
      canvas.getByLabelText("Password"),
      "a-random-password",
    );

    await userEvent.click(canvas.getByRole("button"));
  },
};
