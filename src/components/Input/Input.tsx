import { cva } from "class-variance-authority";
import { useState } from "react";

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
const labelVariants = cva(
  `class-label font-normal font-display leading-[150%] absolute z-[1] transition-all duration-300 px-4
peer-focus:text-blue peer-focus:text-[11px] peer-focus:top-1  peer-focus:-translate-y-0 left-0 text-xs11`,
  {
    variants: {
      invalid: {
        false: "invalid-false text-dark-grey",
        true: "invalid text-dark-grey",
      },
      hasValue: {
        false: "hasValue-false top-1/2 -translate-y-1/2 ",
        true: "hasValue text-[11px] top-1",
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
        // {...(value !== undefined ? { value } : { defaultValue })}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        {...props}
      />
      <div className={labelVariants({ invalid, hasValue })}>
        {label}
      </div>
    </label>
  );
};
