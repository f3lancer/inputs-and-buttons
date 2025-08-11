import type { Meta } from "@storybook/react-vite";
import React, { useState, useActionState } from "react";

import { Button } from "../Button";
import { FieldErrorMessage } from "../FieldErrorMessage";
import { Input } from "../Input";
import { Select } from "../Select";

const meta: Meta = {
  title: "Forms/Form1",
};
export default meta;

const GENDER_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

export const ControlledForm = () => {
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
          name="name"
          label="Name"
          value={values.name}
          onChange={e =>
            setValues(p => ({ ...p, name: (e.target as HTMLInputElement).value }))}

        />
        {errors.name && <FieldErrorMessage>{errors.name}</FieldErrorMessage>}
      </div>

      <div>
        <Select
          name="gender"
          label="Gender"
          value={values.gender}
          onChange={value => setValues(p => ({ ...p, gender: value }))}
          options={GENDER_OPTIONS}
        />
        {errors.gender && <FieldErrorMessage>{errors.gender}</FieldErrorMessage>}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
};

const submit = (
  _prevState: unknown,
  formData: FormData) => {
  const values = {
    name: formData.get("name") as string,
    gender: formData.get("gender") as string,
  };
  const errors: { name?: string; gender?: string } = {};

  if (values.name.length <= 2) {
    errors.name = "Name must be at least 2 characters";
  }
  if (!values.gender) {
    errors.gender = "Gender is required";
  }

  const success = Object.keys(errors).length === 0;

  if (success) {
    console.log("Form submitted with values:", values);
  }

  return { success, errors };
};

export const UncontrolledForm = () => {
  const [{ errors }, submitAction] = useActionState(submit, { success: true, errors: {} });
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <form
      className="flex flex-col gap-4"
      action={submitAction}
      onSubmit={() => setSubmitted(true)}
    >
      <div>
        <Input
          name="name"
          label="Name"
          invalid={submitted && !!errors.name}
        />
        {submitted && errors.name && <FieldErrorMessage>{errors.name}</FieldErrorMessage>}
      </div>

      <div>
        <Select
          name="gender"
          label="Choose the Gender"
          options={GENDER_OPTIONS}
          invalid={submitted && !!errors.gender}
        />
        {submitted && errors.gender && <FieldErrorMessage>{errors.gender}</FieldErrorMessage>}
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
