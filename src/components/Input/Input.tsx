import { useId } from "react";

import { inputVariants, SpanVariants } from "./inputVariants";

export type InputProps = {
  label: string;
  hasError?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  type?: string;
  name?: string;
};

export const Input: React.FC<InputProps> = ({
  label,
  hasError,
  value,
  onChange,
  id,
  type = "text",
  ...props
}) => {
  const generatedId = useId();

  const internalId = id ?? generatedId;

  const hasValue = (value ?? "").length > 0;

  return (
    <label className="group relative flex">
      <input
        id={internalId}
        placeholder=" "
        className={
          "peer " + inputVariants({ state: hasError ? "error" : "default" })
        }
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <span
        className={SpanVariants({
          state: hasError ? "error" : "default",
          hasValue,
        })}
      >
        {label}
      </span>
      {/* <FieldMessages errorText={errorText} helperText={helperText} /> */}
    </label>
  );
};
