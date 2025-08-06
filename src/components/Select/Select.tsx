import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import React, { useState } from "react";

const selectWrapper = cva(
  "class-select h-controllg bg-grey rounded-xl border px-4 py-1.5 text-left cursor-pointer transition-all",
  {
    variants: {
      open: {
        true: "[box-shadow:0_0_0_1px_blue] border-blue",
        false: "border-grey",
      },
    },
  },
);

const iconStyle = cva(
  "ml-2 w-6 h-6 text-gray-800 transition-transform duration-300",
  {
    variants: {
      open: {
        true: "rotate-180",
        false: "",
      },
    },
  },
);

type SelectOptionType = {
  value: string;
  label: string;
};

interface SelectProps {
  options: SelectOptionType[];
  label?: string;
  value?: string;
  defaultValue?: string;
  invalid?: boolean;
  name?: string;
  onChange?: (value: string) => void;
};

export const Select: React.FC<SelectProps> = ({
  options,
  label,
  value,
  defaultValue,
  name,
  onChange,

}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");

  const currentValue = value ?? internalValue;

  return (
    <div className="relative flex flex-col gap-[7px] ">
      <div
        className={selectWrapper({ open: isOpen })}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        onBlur={() => setIsOpen(false)}
      >
        {label && <div className="font-display font-normal text-[11px] leading-[150%] text-dark-grey">{label}</div>}
        <div className="font-display font-normal text-base leading-[150%] text-black">
          {options.find(opt => opt.value === currentValue)?.label ?? currentValue}
        </div>
        <div className="absolute right-4 top-4"><ChevronDownIcon className={iconStyle({ open: isOpen })} /></div>
      </div>
      <div className="relative">
        {isOpen && (
          <div className="py-1 px-2 border border-grey absolute z-[10] rounded-xl bg-white w-full">
            {options.map(opt => (
              <div
                key={opt.value}
                className="cursor-pointer h-controlsm flex items-center px-2 transition duration-300 rounded-xl hover:bg-grey"
                onMouseDown={() => {
                  setIsOpen(false);
                  // (onChange ? onChange(opt.value) : setInternalValue(opt.value));
                  if (onChange) {
                    onChange(opt.value);
                  }
                  else {
                    setInternalValue(opt.value);
                  }
                }}
              >
                {opt.label}
              </div>
            ))}
          </div>
        )}
        {name && (<input type="hidden" name={name} value={value} />)}
      </div>
    </div>
  );
};
