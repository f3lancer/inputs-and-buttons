import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import {
  selectWrapper,
  selectOption,
  helperTextHere,
  iconStyle,
  selectOptionSkin,
  selectedTextStyle,
  labelStyle,
} from "./selectVariants";

type SelectProps = {
  options: string[];
  label: string;
  helperText: string;
  Text: string;
};

export const Select: React.FC<SelectProps> = ({
  options,
  helperText,
  label,
  Text,
}) => {
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex flex-col gap-[7px] ">
      <div
        className={selectWrapper({ open: open ? true : false })}
        onClick={() => setOpen(!open)}
        tabIndex={0}
        onBlur={() => setOpen(false)}
      >
        <div className={labelStyle()}>{label}</div>
        <div className={selectedTextStyle()}>{selected || Text}</div>
        <div className="absolute right-4 top-4">
          {open ? (
            <ChevronUpIcon className={iconStyle()} />
          ) : (
            <ChevronDownIcon className={iconStyle()} />
          )}
        </div>
      </div>
      <div className="relative">
        {open && (
          <div className={selectOptionSkin()}>
            {options.map((opt) => (
              <div
                key={opt}
                className={selectOption()}
                onMouseDown={() => {
                  setSelected(opt);
                  setOpen(false);
                }}
              >
                {opt}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={helperTextHere()}>{helperText}</div>
    </div>
  );
};
