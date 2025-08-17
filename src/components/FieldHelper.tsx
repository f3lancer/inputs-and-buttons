type FieldHelperProps = {
  className?: string;
  children?: React.ReactNode;
};

export const FieldHelper: React.FC<FieldHelperProps> = ({ children, className }) => (
  <div className={`font-display font-normal text-[12px] leading-[133%] text-dark-grey pl-4 mt-2${className ?? ""}`}>
    {children}
  </div>
);
