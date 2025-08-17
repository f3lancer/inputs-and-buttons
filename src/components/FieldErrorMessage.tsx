interface FieldErrorMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
};
// export const Label: React.FC<LabelProps> = ({
export const FieldErrorMessage: React.FC<FieldErrorMessageProps> = ({
  children,
  className,
}) => (
  <div className={`font-display font-normal text-[12px] leading-[133%] text-red pl-4 mt-2 ${className ?? ""}`}>
    {children}
  </div>
);
