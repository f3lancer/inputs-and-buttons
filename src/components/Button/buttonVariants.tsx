import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "font-display font-semibold text-base w-full rounded-xl h-controllg transition duration-400",
  {
    variants: {
      variant: {
        primary: "cursor-pointer text-white bg-blue",
        secondary: "cursor-pointer text-black bg-grey",
        outline: "cursor-pointer text-black  border-2 border-black outline",
        destructive: "cursor-pointer text-white bg-red",
        ghost: "cursor-pointer text-black",
        disabled: "text-black/50 bg-grey",
        linck: "cursor-pointer text-black",
        doubleIcon:
          "bg-grey text-black justify-between flex justify-between px-4 items-center",
        leftIcon:
          "bg-grey text-black justify-between flex justify-between px-4 items-center",
        rightIcon:
          "bg-grey text-black justify-between flex justify-between px-4 items-center",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
