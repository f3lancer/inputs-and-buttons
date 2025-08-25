import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "font-display font-semibold  inline-flex justify-center text-base rounded-xl h-controllg transition-all duration-400 px-4 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "text-white bg-blue hover:bg-blue/50",
        secondary: "text-black bg-grey border-grey hover:text-black/50",
        outline: "text-black border-2 border-black hover:border-black/50 hover:text-black/50",
        destructive: "text-white bg-red hover:bg-red/50",
        ghost: "text-black bg-transparent hover:text-black/50",
        link: "text-blue-500 hover:text-blue-700 hover:underline",
      },
      disabled: {
        true: "opacity-50 pointer-events-none",
        false: null,
      },
    },
    defaultVariants: {
      disabled: false,
      variant: "primary",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  disabled,
  variant,
  children,
  leftIcon,
  rightIcon,
  className,
  asChild = false,
  ...props
}) => {
  const Comp: React.ElementType = asChild ? Slot : "button";

  return (
    <Comp
      className={buttonVariants({ variant, disabled, className })}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      {...props}
    >
      <div className="flex items-center justify-between">
        {leftIcon}
        <div className="flex-1 text-center px-4">{children}</div>
        {rightIcon}
      </div>
    </Comp>
  );
};
