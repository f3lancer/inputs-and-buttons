import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const labelVariants = cva(
  `class-label font-normal font-display leading-[150%] absolute z-[1] transition-all duration-300 px-4
peer-focus:text-blue peer-focus:text-[11px] peer-focus:top-1 peer-focus:-translate-y-0 left-0 text-xs11`,
  {
    variants: {
      invalid: {
        false: "invalid-false text-dark-grey",
        true: "invalid text-red",
      },
      hasValue: {
        false: "hasValue-false top-1/2 -translate-y-1/2",
        true: "hasValue text-[11px] top-1",
        // true: "hasValue text-[11px] top-[-12px]",
      },
    },
    defaultVariants: {
      invalid: false,
      hasValue: true,
    },
  },
);

interface LabelProps extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof labelVariants> {};

export const Label: React.FC<LabelProps> = ({
  invalid,
  hasValue,
  className,
  ...props
}) => {
  return <div className={`${labelVariants({ invalid, hasValue, className })}`} {...props} />;
};
