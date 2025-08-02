import { cva } from "class-variance-authority";

export const inputVariants = cva(
  `class-input peer font-display h-controllg   
   font-normal text-base leading-[150%] text-black px-4 relative rounded-xl transition-all duration-300
   focus:outline-none focus:border-blue focus:shadow-[0_0_0_1px_var(--color-blue)] w-full`,
  {
    variants: {
      state: {
        default: "default bg-grey border border-grey",
        error:
          "error border border-red bg-grey shadow-[0_0_0_1px_var(--color-red)]",
      },
    },
  },
);

export const SpanVariants = cva(
  `
  class-span font-normal font-display leading-[150%] absolute z-[1] transition-all duration-300 px-4 peer-focus:text-blue
  peer-focus:text-[11px] peer-focus:top-0  peer-focus:-translate-y-0 left-0 text-xs11
  `,
  {
    variants: {
      state: {
        default: "",
        error: "",
      },
      hasValue: {
        false: "text-dark-grey top-1/2 -translate-y-1/2 ",
        true: "hasValue text-[11px] top-0  ",
      },
    },
    compoundVariants: [
      {
        hasValue: true,
        state: "error",
        class: "error text-red",
      },
    ],
  },
);
