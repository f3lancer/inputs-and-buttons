type FieldHelperProps = {
  children?: React.ReactNode;
};

export const FieldHelper: React.FC<FieldHelperProps> = ({ children }) => (
  <div className="font-display font-normal text-[12px] leading-[133%] text-dark-grey pl-4 mt-2">
    {children}
  </div>
);
