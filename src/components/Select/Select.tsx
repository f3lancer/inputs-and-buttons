import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

import {
  selectWrapper,
  selectOption,
  iconStyle,
  selectOptionSkin,
  selectedTextStyle,
  labelStyle,
} from "./selectVariants";

type SelectProps = {
  options: string[];
  label: string;
  value: string;
  onChange?: (value: string) => void;
};

export const Select: React.FC<SelectProps> = ({
  options,
  label,
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative flex flex-col gap-[7px] ">
      <div
        className={selectWrapper({ open: isOpen })}
        onClick={() => setIsOpen(!isOpen)}
        tabIndex={0}
        onBlur={() => setIsOpen(false)}
      >
        <div className={labelStyle()}>{label}</div>
        <div className={selectedTextStyle()}>{value}</div>
        <div className="absolute right-4 top-4">
          <ChevronDownIcon className={iconStyle({ open: isOpen })} />
        </div>
      </div>
      <div className="relative">
        {isOpen && (
          <div className={selectOptionSkin()}>
            {options.map(opt => (
              <div
                key={opt}
                className={selectOption()}
                onMouseDown={() => {
                  setIsOpen(false);
                  onChange?.(opt);
                }}
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
