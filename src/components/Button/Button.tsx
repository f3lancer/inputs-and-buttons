import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "font-display font-semibold text-base w-full rounded-xl h-controllg transition-all duration-400 px-4 cursor-pointer",
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
  },
);

type ButtonVariant = "primary" | "secondary" | "outline" | "destructive" | "link" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  variant = "primary",
  children,
  leftIcon,
  rightIcon,
  asChild = false,
  ...props
}) => {
  const Comp: React.ElementType = asChild ? Slot : "button";

  const computedClassName = buttonVariants({
    variant: variant,
    disabled,
  });

  return (
    <Comp
      className={computedClassName}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      {...props}
    >
      <div className="flex items-center justify-between w-full">
        {leftIcon}
        <div className="flex-1 text-center">{children}</div>
        {rightIcon}
      </div>
    </Comp>
  );
};
