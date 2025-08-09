import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cva } from "class-variance-authority";
import React, { useState, useMemo, useEffect, useRef } from "react";

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

const labelVariants = cva(
  `font-display font-normal text-[11px] leading-[150%]`,
  {
    variants: {
      invalid: {
        false: "invalid-false text-dark-grey",
        true: "invalid text-red",
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

  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, []);

  return (
    <div ref={rootRef} className="relative flex flex-col gap-[7px] ">

      <div
        className={selectWrapper({ open: isOpen })}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
      >
        {label && <div className={labelVariants({ invalid })}>{label}</div>}
        <div className="font-display font-normal text-base leading-[150%] text-black">
          {selectedOption?.label ?? currentValue}
        </div>
        <div className="absolute right-4 top-4"><ChevronDownIcon className={iconStyle({ open: isOpen })} /></div>
      </div>
      {isOpen && (
        <div className="relative">
          <div className="py-1 px-2 border border-grey absolute z-[10] rounded-xl bg-white w-full">
            {options.map(opt => (
              <div
                key={opt.value}
                className="cursor-pointer h-controlsm flex items-center px-2 transition duration-300 rounded-xl hover:bg-grey"
                onClick={() => {
                  if (onChange) {
                    onChange(opt.value);
                  }
                  else {
                    setInternalValue(opt.value);
                  }
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
