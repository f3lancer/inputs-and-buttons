import { cva } from "class-variance-authority";

export const inputVariants = cva(
  `class-input peer font-display h-controllg bg-grey border border-grey font-sans
   font-normal text-base leading-[150%] text-black px-4 relative rounded-xl transition-all duration-300
   focus:outline-none focus:[box-shadow:0_0_0_1px__var(--color-blue)] focus:bg-grey focus:border-grey`,
  {
    variants: {
      state: {
        default: "",
        error:
          "group-[.input-error]:border-grey group-[.input-error]:bg-grey group-[.input-error]:[box-shadow:0_0_0_1px_#eb0014]",
      },
    },
  }
);

export const labelVariants = cva(
  `class-label font-display absolute top-[0] z-[1] h-controllg flex items-center px-4 pointer-events-none text-dark-grey transition-all duration-300
  peer-focus:text-blue peer-focus:text-[11px] peer-focus:leading-[150%] peer-focus:top-[-16px] peer-focus:left-[-2px]
 group-[.has-value]:text-[11px] group-[.has-value]:leading-[150%] group-[.has-value]:top-[-16px] group-[.has-value]:left-[-2px]
  `,
  {
    variants: {
      state: {
        default: "",
        error:
          "group-[.input-error]:text-red group-[.input-error]:text-[11px] group-[.input-error]:leading-[150%] group-[.input-error]:top-[-16px] group-[.input-error]:left-[-2px]",
      },
    },
  }
);
