/* eslint-disable @typescript-eslint/no-empty-object-type */

import { cx } from "class-variance-authority";

interface FieldHelperProps extends React.HTMLAttributes<HTMLDivElement> {};

export const FieldHelper: React.FC<FieldHelperProps> = ({
  className,
  ...props
}) => (
  <div className={cx("font-display font-normal text-[12px] leading-[133%] text-dark-grey pl-4 mt-2", className)} {...props} />

);
