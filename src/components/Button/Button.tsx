import React from "react";

import "@fontsource/roboto/600.css";

import "./Button.css";

type ButtonProps = {
  disabled?: boolean;
  variant?: string;
  href?: string;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  icons?: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  disabled = false,
  variant,
  href,
  children,
  leftIcon,
  rightIcon,
  icons,
}) => {
  const iconArray = icons ? React.Children.toArray(icons) : [];
  const content = (
    <>
      {icons ? (
        <>
          {iconArray[0] && (
            <span className="mr-2 text-xl absolute absolute w-6 h-6 left-4">
              {iconArray[0]}
            </span>
          )}
          {children}
          {iconArray[1] && (
            <span className="ml-2 text-xl absolute absolute w-6 h-6 right-4">
              {iconArray[1]}
            </span>
          )}
        </>
      ) : (
        <>
          <span className="mr-2 text-xl absolute absolute w-6 h-6 left-4">
            {leftIcon}
          </span>
          {children}
          <span className="ml-2 text-xl absolute absolute w-6 h-6 right-4">
            {rightIcon}
          </span>
        </>
      )}
    </>
  );

  if (href) {
    return (
      <a
        className={`font-semibold button ${variant} h-[56px] text-base leading-[1.5] text-center cursor-pointer w-full bg-[#b6a2a2] rounded-[13px] flex flex items-center justify-center bg-[#f2f2f7]`}
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
    <button
      className={`font-semibold button relative ${variant} h-[56px] text-base leading-[1.5] text-center cursor-pointer w-full bg-[#b6a2a2] rounded-[13px] font-roboto`}
      disabled={disabled}
    >
      {content}
    </button>
  );
};
