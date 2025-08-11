import { cva } from "class-variance-authority";
import { useState } from "react";

import { Label } from "../Label";

const inputVariants = cva(
  `class-input peer font-display h-controllg   
   font-normal text-base bg-grey leading-[150%] text-black px-4 relative rounded-xl transition-all 
   duration-300 focus:outline-none focus:border-blue focus:shadow-[0_0_0_1px_var(--color-blue)] w-full`,
  {
    variants: {
      invalid: {
        false: "border border-grey",
        true: "border border-red shadow-[0_0_0_1px_var(--color-red)]",
      },
    },
  },
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  invalid?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  invalid = false,
  value,
  defaultValue,
  onChange,
  ...props
}) => {
  const [hasValue, setHasValue] = useState(
    (value ?? defaultValue ?? "").toString().length > 0,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasValue(e.target.value.length > 0);
    onChange?.(e);
  };

  return (
    <label className="group relative flex">
      <input
        className={inputVariants({ invalid })}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        {...props}
      />
      <Label label={label} invalid={invalid} hasValue={hasValue} />
    </label>
  );
};
