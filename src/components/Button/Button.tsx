import React from "react";
import { buttonVariants } from "./buttonVariants";
import { Slot } from "@radix-ui/react-slot";

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

  const Comp = asChild ? Slot : href ? "a" : "button";

  const handleClick = (e: React.MouseEvent<any>) => {
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
          {iconArray[0] && (
            <span className="inline-block w-[24px]">{iconArray[0]}</span>
          )}
          {children}
          {iconArray[1] && (
            <span className="inline-block w-[24px]">{iconArray[1]}</span>
          )}
        </>
      ) : (
        <>
          <span className="inline-block w-[24px]">{leftIcon}</span>
          {children}
          <span className="inline-block w-[24px]">{rightIcon}</span>
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
