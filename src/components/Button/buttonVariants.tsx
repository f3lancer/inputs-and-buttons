import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "font-display font-semibold text-base w-full rounded-xl h-controllg transition duration-400",
  {
    variants: {
      variant: {
        primary: "primary cursor-pointer text-white bg-blue",
        secondary: "secondary cursor-pointer text-black bg-grey",
        outline:
          "outline cursor-pointer text-black  border-2 border-black outline",
        destructive: "destructive cursor-pointer text-white bg-red",
        ghost: "ghost cursor-pointer text-black",
        disabled: "disabled text-black/50 bg-grey",
        linck: "linck cursor-pointer text-black",
        doubleIcon:
          "doubleIcon bg-grey text-black justify-between flex justify-between px-4 items-center",
        leftIcon:
          "leftIcon bg-grey text-black justify-between flex justify-between px-4 items-center",
        rightIcon:
          "rightIcon bg-grey text-black justify-between flex justify-between px-4 items-center",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];

export const spElSt = cva("inline-block w-[24px]");
