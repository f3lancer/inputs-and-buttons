type FieldMessagesProps = {
  helperText?: string;
  errorText?: string;
};

export const FieldMessages: React.FC<FieldMessagesProps> = ({
  helperText,
  errorText,
}) => (
  <>
    {errorText && (
      <div className="font-display error-block text-left ml-4 text-red text-[12px] leading-[133%] hidden group-[.input-error]:block">
        {errorText}
      </div>
    )}
    {helperText && (
      <div className="font-display text-left ml-4 text-dark-grey text-[12px] leading-[133%]">
        {helperText}
      </div>
    )}
  </>
);
