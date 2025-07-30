import { cva } from "class-variance-authority";

export const selectWrapper = cva(
  "class-select h-controllg bg-grey rounded-xl border px-4 py-1.5 text-left cursor-pointer transition-all",
  {
    variants: {
      open: {
        true: "[box-shadow:0_0_0_1px_blue] border-blue",
        false: "border-grey",
      },
    },
  }
);

export const selectOptionSkin = cva(
  "py-1 px-2 border border-grey absolute z-[10] rounded-xl bg-white w-full"
);
export const selectOption = cva(
  "cursor-pointer h-controlsm flex items-center px-2 transition duration-300 rounded-xl",
  {
    variants: {
      hoverable: {
        true: "hover:bg-grey",
      },
    },
    defaultVariants: {
      hoverable: true,
    },
  }
);
export const helperTextHere = cva(
  "cursor-pointer h-controlsm flex items-center px-2 transition duration-300 rounded-xl"
);
// export const iconStyle = cva("ml-2 w-6 h-6 text-gray-800");

export const labelStyle = cva(
  "font-display font-normal text-[11px] leading-[150%] text-dark-grey"
);
export const selectedTextStyle = cva(
  "font-display font-normal text-base leading-[150%] text-black"
);

export const iconStyle = cva(
  "ml-2 w-6 h-6 text-gray-800 transition-transform duration-300",
  {
    variants: {
      open: {
        true: "rotate-180",
        false: "",
      },
    },
  }
);
