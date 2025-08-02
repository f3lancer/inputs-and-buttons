import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "font-display font-semibold text-base w-full rounded-xl h-controllg transition duration-400",
  {
    variants: {
      variant: {
        primary:
          "primary cursor-pointer text-white bg-blue border border-blue hover:bg-white hover:border-black  hover:text-black",
        secondary:
          "secondary cursor-pointer text-black bg-grey border border-grey hover:bg-white hover:border-black",
        outline: "outline cursor-pointer text-black  border-2 border-black",
        destructive: "destructive cursor-pointer text-white bg-red",
        doubleIcon:
          "doubleIcon bg-grey text-black flex justify-between px-4 items-center",
        leftIcon:
          "leftIcon bg-grey text-black flex justify-between px-4 items-center",
        rightIcon:
          "rightIcon bg-grey text-black flex justify-between px-4 items-center",
      },
      disabled: {
        true: " text-black/50 bg-grey ",
        false: null,
      },
      a: {
        true: "link-test cursor-pointer text-black flex text-center",
        false: null,
      },
    },
  },
);

export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
