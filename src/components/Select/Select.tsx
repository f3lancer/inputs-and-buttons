import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import React, { useState, useMemo, useRef } from "react";

import { useClickOutside } from "../../hooks/useClickOutside";
import { Label } from "../Label";

// import { useClickOutside } from "@/hooks/useClickOutside";

const selectWrapper = cva(
  "class-select h-controllg bg-grey rounded-xl flex flex-col border px-4 py-1.5 pt-1.5 pb-2.5 text-left cursor-pointer transition-all",
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
  invalid = false,

}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalValue, setInternalValue] = useState(defaultValue ?? "");

  const currentValue = value ?? internalValue;

  const selectedOption = useMemo(
    () => options.find(opt => opt.value === currentValue),
    [options, currentValue],
  );

  const rootRef = useRef<HTMLButtonElement>(null);
  useClickOutside(rootRef, () => setIsOpen(false));

  return (
    <button ref={rootRef} type="button" className="relative flex flex-col gap-[7px] w-full">

      <div
        className={selectWrapper({ open: isOpen })}
        onClick={() => setIsOpen(isOpen => !isOpen)}
        tabIndex={0}
      >
        <Label label={label} invalid={invalid} hasValue={!!selectedOption} />
        <div className="font-display font-normal text-base leading-[150%] text-black mt-auto">
          {selectedOption?.label}
        </div>
        <div className="absolute right-4 top-4"><ChevronDownIcon className={iconStyle({ open: isOpen })} /></div>
      </div>
      {isOpen && (
        <div className="absolute bottom-[-10px] w-full">
          <div className="py-1 px-2 border border-grey absolute z-[10] rounded-xl bg-white w-full">
            {options.map(opt => (
              <div
                key={opt.value}
                className="cursor-pointer h-controlsm flex items-center px-2 transition duration-300 rounded-xl hover:bg-grey"
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
    </button>
  );
};
