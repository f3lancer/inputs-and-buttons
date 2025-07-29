import React from "react";

import { buttonVariants } from "./buttonVariants";

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
};

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  variant = "primary",
  href,
  children,
  leftIcon,
  rightIcon,
  icons,
  ...props
}) => {
  const { className, ...restProps } = props;
  const iconArray = icons ? React.Children.toArray(icons) : [];
  const computedClassName = buttonVariants({ variant });
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

  if (href) {
    return (
      <a
        className={computedClassName}
        href={href}
        aria-disabled={disabled || undefined}
        tabIndex={disabled ? -1 : undefined}
        onClick={(e) => disabled && e.preventDefault()}
      >
        {content}
      </a>
    );
  }
  return (
    <button className={computedClassName} disabled={disabled} {...restProps}>
      {content}
    </button>
  );
};
