import React, { useId, useState } from "react";
import { FieldMessages } from "../FieldMessages";
import { inputVariants, labelVariants } from "./inputVariants";

export type InputProps = {
  label: string;
  helperText?: string;
  errorText?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  hasError?: boolean;
};

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  errorText,
  value,
  id,
  onChange,
  hasError: hasErrorProp,
  ...props
}) => {
  const [touched, setTouched] = useState(false);
  const internalId = id ?? useId();
  const hasValue = (value ?? "").length > 0;
  const hasError =
    hasErrorProp ?? (touched && hasValue && (value?.length ?? 0) < 2);

  let inputClass = hasValue ? " has-value" : "";
  if (hasError) inputClass += " input-error";
  else if (touched && hasValue) inputClass += " input-true";

  return (
    <div className={`group relative flex flex-col gap-2 ${inputClass}`}>
      <input
        id={internalId}
        className={inputVariants({ state: hasError ? "error" : "default" })}
        value={value}
        onChange={(e) => {
          setTouched(false);
          onChange?.(e);
        }}
        onBlur={() => setTouched(true)}
        {...props}
      />

      <label
        htmlFor={internalId}
        className={labelVariants({
          state: hasError ? "error" : "default",
        })}
      >
        {label}
      </label>

      <FieldMessages errorText={errorText} helperText={helperText} />
    </div>
  );
};
