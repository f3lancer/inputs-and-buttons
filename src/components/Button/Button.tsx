import { Slot } from "@radix-ui/react-slot";
import React from "react";

import { buttonVariants, spElSt } from "./buttonVariants";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "destructive"
  | "ghost"
  | "disabled"
  | "linck"
  | "doubleIcon"
  | "leftIcon"
  | "rightIcon";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: ButtonVariant;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  icons?: React.ReactNode;
  asChild?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  variant = "primary",
  href,
  children,
  leftIcon,
  rightIcon,
  icons,
  asChild = false,
  onClick,
  ...props
}) => {
  const iconArray = icons ? React.Children.toArray(icons) : [];
  const computedClassName = buttonVariants({ variant });

  const Comp: React.ElementType = asChild ? Slot : href ? "a" : "button"; // fix

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const content = (
    <>
      {icons ? (
        <>
          {iconArray[0] && <span className={spElSt()}>{iconArray[0]}</span>}
          {children}
          {iconArray[1] && <span className={spElSt()}>{iconArray[1]}</span>}
        </>
      ) : (
        <>
          <span className={spElSt()}>{leftIcon}</span>
          {children}
          <span className={spElSt()}>{rightIcon}</span>
        </>
      )}
    </>
  );

  return (
    <Comp
      className={computedClassName}
      href={href}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      onClick={handleClick}
      {...props}
    >
      {content}
    </Comp>
  );
};
