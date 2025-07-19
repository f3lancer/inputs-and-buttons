import React, { useState } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import "./Select.css";

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
        className={`class-select h-[56px] bg-[#F2F2F7] rounded-[13px] border px-4 py-1.5 text-left ${
          open ? "class-select--open border-[#007bff]" : "border-[#F2F2F7]"
        }  cursor-pointer`}
        onClick={() => setOpen(!open)}
        tabIndex={0}
        onBlur={() => setOpen(false)}
      >
        <div className="font-normal text-[11px] leading-[150%] text-[#545454] ">
          {label}
        </div>
        <div
          className=" font-normal text-base leading-[150%] text-[#000]"
          style={{
            fontFamily: "Roboto",
          }}
        >
          {selected || Text}
        </div>
        <div className="absolute right-4 top-4">
          {open ? (
            <ChevronUpIcon className="ml-2 w-6 h-6 text-gray-800" />
          ) : (
            <ChevronDownIcon className="ml-2 w-6 h-6 text-gray-800" />
          )}
        </div>
      </div>
      <div className="relative">
        {open && (
          <div className="py-1 px-2  border border-[#F2F2F7] absolute z-[10] rounded-xl bg-white w-full">
            {options.map((opt) => (
              <div
                key={opt}
                className="cursor-pointer hover:bg-[#F2F2F7] h-[34px] flex items-center px-2 transition duration-300 rounded-xl"
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
      <div
        className={` text-left ml-4 text-[#545454] text-xs leading-[133%] mt-[-7px]`}
      >
        {helperText}
      </div>
    </div>
  );
};
