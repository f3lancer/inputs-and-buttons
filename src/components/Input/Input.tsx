import React from "react";
import { useId } from "react";
import { useState } from "react";

import {
  inputVariants,
  labelVariants,
  hintText,
  errorTextPrint,
} from "./inputVariants";

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
  ...props
}) => {
  const [valueInput, setValue] = useState(value ?? "");

  const [touched, setTouched] = useState(false);
  const id = useId();

  React.useEffect(() => {
    setValue(value ?? "");
  }, [value]);

  const hasValue = valueInput.length > 0;
  console.log("hasValue", hasValue);

  let inputClass = hasValue ? " has-value" : "";
  console.log("inputClass", inputClass);

  if (touched && hasValue) {
    if (valueInput.length < 2) {
      console.log("input-error", valueInput.length);

      inputClass += " input-error";
    } else {
      console.log("input-true", valueInput.length);
      inputClass += " input-true";
    }
  }

  return (
    <div
      className={` 
        group
        relative  
        flex flex-col gap-2 
        ${inputClass}
        `}
    >
      <input
        id={`name-${id}`}
        className={inputVariants({ state: errorText ? "error" : "default" })}
        value={valueInput}
        onChange={(e) => {
          setValue(e.target.value);
          setTouched(false);
          if (typeof onChange === "function") {
            onChange(e);
          }
        }}
        onBlur={() => setTouched(true)}
        {...props}
      />
      <label
        htmlFor={`name-${id}`}
        className={labelVariants({
          state: errorText ? "error" : "default",
        })}
      >
        {label}
      </label>
      <div className={errorTextPrint()}>{errorText}</div>
      <div className={hintText()}>{helperText}</div>
    </div>
  );
};
