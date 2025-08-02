type FieldErrorMessageProps = {
  children?: React.ReactNode;
};

export const FieldErrorMessage: React.FC<FieldErrorMessageProps> = ({
  children,
}) => (
  <div className="font-display font-normal text-[12px] leading-[133%] text-red pl-4 mt-2">
    {children}
  </div>
);
