import { cva } from "class-variance-authority";
import { useState } from "react";

import { Label } from "../Label";

const inputVariants = cva(
  `class-input peer font-display h-controllg   
   font-normal text-base bg-grey leading-[150%] text-black px-4 relative rounded-xl transition-all 
   duration-300 focus:outline-none focus:border-blue focus:shadow-[0_0_0_1px_var(--color-blue)]`,
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
  classLable?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  invalid = false,
  value,
  defaultValue,
  classLable,
  className,
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
    <label className="group relative inline-block w-full">
      <input
        {...props}
        className={`${inputVariants({ invalid })} ${className ?? ""}`}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
      />
      {label && <Label invalid={invalid} hasValue={hasValue} className={classLable}>{label}</Label>}
    </label>
  );
};
