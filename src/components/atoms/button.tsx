import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-[0.99] disabled:pointer-events-none disabled:opacity-50",
  {
    defaultVariants: {
      size: "md",
      variant: "outline",
    },
    variants: {
      size: {
        icon: "size-10",
        lg: "h-11 rounded-lg px-8",
        md: "h-10 px-4 py-2",
        sm: "h-9 px-3",
      },
      variant: {
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-bittersweet-700 active:bg-bittersweet-800",
        ghost:
          "hover:bg-accent active:bg-boulder-100 dark:active:bg-boulder-800",
        link: "px-2 text-scooter-500 underline-offset-4 hover:underline focus-visible:underline active:text-scooter-700 dark:text-scooter-400 dark:active:text-scooter-200",
        outline:
          "border border-input bg-background hover:bg-accent active:bg-boulder-100 dark:active:bg-boulder-800",
        primary:
          "bg-primary text-primary-foreground hover:bg-scooter-500 active:bg-scooter-600",
      },
    },
  },
);

// infer types from the variant definitions
type ButtonVariantTypes = VariantProps<typeof buttonVariants>;
// extract the size and variant types
export type ButtonSize = Exclude<ButtonVariantTypes["size"], null | undefined>;
export type ButtonVariant = Exclude<
  ButtonVariantTypes["variant"],
  null | undefined
>;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ asChild = false, className, size, variant, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ className, size, variant }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
