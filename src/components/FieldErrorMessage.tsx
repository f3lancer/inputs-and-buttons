/* eslint-disable @typescript-eslint/no-empty-object-type */

import { cx } from "class-variance-authority";

interface FieldErrorMessageProps extends React.HTMLAttributes<HTMLDivElement> {};

export const FieldErrorMessage: React.FC<FieldErrorMessageProps> = ({
  className,
  ...props
}) => (
  <div className={cx("font-display font-normal text-[12px] leading-[133%] text-red pl-4 mt-2", className)} {...props} />

);
