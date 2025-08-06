import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "font-display font-semibold text-base w-full rounded-xl h-controllg transition-all duration-400 px-4",
  {
    variants: {
      variant: {
        primary:
          "primary text-white bg-blue  border-blue",
        secondary:
          "secondary text-black bg-grey border-grey",
        outline: "outline  text-black  border-2 border-black",
        destructive: "destructive text-white bg-red",
        ghost: "",
        link: "",
      },
      disabled: {
        true: "opacity-50 cursor-auto",
        false: null,
      },
    },
    compoundVariants: [
      {
        disabled: false,
        variant: "primary",
        class: "border hover:bg-white hover:border-black  hover:text-black cursor-pointer hover:px-3",
      },
      {
        disabled: false,
        variant: "secondary",
        class: "border hover:bg-white hover:border-black  hover:text-black cursor-pointer hover:px-3",
      },
      {
        disabled: false,
        variant: "outline",
        class: "cursor-pointer hover:border hover:px-3",
      },
      {
        disabled: false,
        variant: "destructive",
        class: "cursor-pointer hover:px-3",
      },
      {
        disabled: false,
        variant: "ghost",
        class: "cursor-pointer hover:px-3",
      },
      {
        disabled: false,
        variant: "link",
        class: "cursor-pointer hover:px-3",
      },
    ],
  },
);

type ButtonVariant = | "primary" | "secondary" | "outline" | "destructive" | "link" | "ghost";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
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
