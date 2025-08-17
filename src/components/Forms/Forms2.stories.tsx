import type { Meta } from "@storybook/react-vite";
import React, { useState } from "react";

import { Button } from "../Button";
import { FieldErrorMessage } from "../FieldErrorMessage";
import { Input } from "../Input";
import { Select } from "../Select";

const meta: Meta = {
  title: "Forms/Form2 castom class",
};
export default meta;

const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

export const ClassForm = () => {
  const [values, setValues] = useState({ name: "", gender: "" });
  const [errors, setErrors] = useState<{ name: string | null; gender: string | null }>({
    name: null,
    gender: null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ name: null, gender: null });

    if (values.name.length <= 2) {
      setErrors(prev => ({ ...prev, name: "Name must be at least 2 characters" }));
    }
    if (!values.gender) {
      setErrors(prev => ({ ...prev, gender: "Gender is required" }));
    }

    console.log("Form submitted with values:", values);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <Input
          className="text-fuchsia-700 w-full"
          classLable="text-fuchsia-700"
          name="name"
          label="Name"
          value={values.name}
          invalid={!!errors.name}
          onChange={e =>
            setValues(prev => ({ ...prev, name: (e.target as HTMLInputElement).value }))}
        />
        {errors.name && <FieldErrorMessage className="bg-amber-200">{errors.name}</FieldErrorMessage>}
      </div>

      <div>
        <Select
          name="gender"
          label="Gender"
          className="my-castom-class"
          value={values.gender}
          invalid={!!errors.gender}
          onChange={value => setValues(prev => ({ ...prev, gender: value }))}
          options={GENDER_OPTIONS}
        />
        {errors.gender && <FieldErrorMessage>{errors.gender}</FieldErrorMessage>}
      </div>

      <Button type="submit" className="my-castom-class">Submit</Button>
    </form>
  );
};
