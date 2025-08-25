import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cva, type VariantProps } from "class-variance-authority";
import React, { useState, useMemo, useRef } from "react";

import { useClickOutside } from "../../hooks/useClickOutside";
import { Label } from "../Label";

const buttonVariants = cva(
  "class-select h-controllg bg-grey rounded-xl flex flex-col border  px-4 py-1.5 pt-1.5 pb-2.5 text-left cursor-pointer transition-all relative w-fit pr-12",
  {
    variants: {
      open: {
        true: "",
        false: "",
      },
      invalid: {
        true: "border-red shadow-[0_0_0_1px_var(--color-red)]",
        false: "",
      },
    },
    compoundVariants: [
      {
        open: true,
        invalid: false,
        class: "border-blue [box-shadow:0_0_0_1px_var(--color-blue)]",
      },
      {
        open: false,
        invalid: false,
        class: "border-grey [box-shadow:0_0_0_1px_var(--color-grey)]",
      },

    ],
    defaultVariants: {
      open: false,
    },
  },
);

const iconVariants = cva(
  "ml-2 w-6 h-6 text-gray-800 transition-transform duration-300",
  {
    variants: {
      open: {
        true: "rotate-180",
        false: "",
      },
    },
    defaultVariants: {
      open: false,
    },
  },
);

type SelectOptionType = {
  value: string;
  label: string;
};

interface SelectProps
  extends VariantProps<typeof buttonVariants> {
  options: SelectOptionType[];
  label?: string;
  value?: string;
  defaultValue?: string;
  invalid?: boolean;
  name?: string;
  className?: string;
  onChange?: (value: string) => void;
};

export const Select: React.FC<SelectProps> = ({
  options,
  label,
  value,
  defaultValue,
  name,
  className,
  onChange,
  invalid = false,

}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");

  const currentValue = value ?? internalValue;

  const selectedOption = useMemo(
    () => options.find(opt => opt.value === currentValue),
    [options, currentValue],
  );

  const rootRef = useRef<HTMLDivElement>(null);
  useClickOutside(rootRef, () => setIsOpen(false));

  console.log("selectedOption", selectedOption);

  return (
    <div ref={rootRef} className="relative inline-block">
      <button
        className={buttonVariants({ open: isOpen, invalid, className })}
        onClick={() => setIsOpen(prev => !prev)}
        tabIndex={0}
      >
        {label && <Label invalid={invalid}>{label}</Label>}
        {label && <span aria-hidden="true" className="font-normal text-[11px] h-0 opacity-0 invisible pointer-events-none select-none mr-[-32px]">{label}</span>}
        <div className="font-display font-normal text-base leading-[150%] text-black mt-auto">
          {selectedOption?.label}
        </div>
        <div className="absolute right-4 top-4"><ChevronDownIcon className={iconVariants({ open: isOpen })} /></div>
      </button>
      {isOpen && (
        <div className="absolute bottom-[-10px] w-full">
          <div className="py-1 px-2 border border-grey absolute z-[10] rounded-xl bg-white w-max">
            {options.map(opt => (
              <div
                key={opt.value}
                className="font-display w-full text-[14px] cursor-pointer h-controlsm flex items-center px-2 transition duration-300 rounded-xl hover:bg-grey"
                onClick={() => {
                  if (value === undefined) {
                    setInternalValue(opt.value);
                  }
                  onChange?.(opt.value);
                  setIsOpen(false);
                }}
              >
                {opt.label}
              </div>
            ))}
          </div>
        </div>
      )}
      <input type="hidden" name={name} defaultValue={selectedOption?.value} />
    </div>
  );
};
