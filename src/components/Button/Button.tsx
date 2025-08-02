import { Slot } from "@radix-ui/react-slot";
import React from "react";

import { buttonVariants } from "./buttonVariants";

type ButtonVariant = | "primary"
  | "secondary"
  | "outline"
  | "destructive"
  | "leftIcon"
  | "rightIcon"
  | "doubleIcon";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  asChild?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  variant,
  children,
  leftIcon,
  rightIcon,
  asChild = false,
  ...props
}) => {
  const Comp: React.ElementType = asChild ? Slot : props.href ? "a" : "button";

  const resolvedVariant = variant ?? (Comp !== "a" ? "primary" : undefined);

  const computedClassName = buttonVariants({
    variant: resolvedVariant,
    disabled,
    a: Comp === "a",
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
        <div className="flex-1">{children}</div>
        {rightIcon}
      </div>
    </Comp>
  );
};
