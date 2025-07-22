import React from "react";
import { useId } from "react";
import { useState } from "react";
import "./Input.css";

import "@fontsource/roboto/400.css";

export type InputProps = {
  label: string;
  helperText?: string;
  errorText?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  errorText,
  value,
  onChange,
}) => {
  const [valueInput, setValue] = useState(value ?? "");

  const [touched, setTouched] = useState(false);
  const id = useId();

  React.useEffect(() => {
    setValue(value ?? "");
  }, [value]);

  const hasValue = valueInput.length > 0;

  let inputClass = hasValue ? "input-true" : "";
  if (touched && hasValue) {
    if (valueInput.length < 2) {
      inputClass += " input-error";
    } else {
      inputClass += " input-true";
    }
  }

  return (
    <div
      className={` 
        relative  
        flex flex-col gap-[7px] 
        ${inputClass}
        `}
    >
      <input
        id={`name-${id}`}
        className={`
            class-input 
            h-[56px] 
            bg-[#F2F2F7]
            border border-[#F2F2F7]
            font-sans
            font-normal
            text-[16px]
            leading-[150%]
            text-[#000]
            px-4
            relative
            rounded-[13px]
            px-[16px]
            focus:outline-none
            transition 
            duration-400
        `}
        style={{
          fontFamily: "Roboto",
        }}
        value={valueInput}
        onChange={(e) => {
          setValue(e.target.value);
          setTouched(false);
          if (typeof onChange === "function") {
            onChange(e);
          }
        }}
        onBlur={() => setTouched(true)}
      />
      <label
        htmlFor={`name-${id}`}
        className={`
        class-label 
        absolute  
        top-[0]
        z-[1] 
        h-[56px]
        flex
        items-center
        px-[16px]
        pointer-events-none
        text-[#545454]
        transition
        duration-400
        `}
      >
        {label}
      </label>
      <div
        className={`error-block text-left ml-[16px] text-[#eb0014] text-[12px] leading-[133%] hidden`}
      >
        {errorText}
      </div>
      <div
        className={` text-left ml-[16px] text-[#545454] text-[12px] leading-[133%]`}
      >
        {helperText}
      </div>
    </div>
  );
};
