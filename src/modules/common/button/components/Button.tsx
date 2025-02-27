import { type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { buttonVariants } from "../utils/buttonVariants";
import { FC } from "react";

type ButtonProps = React.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
  children?: React.ReactNode
};

export const Button: FC<ButtonProps> = ({ className, variant, ...props }) => {
  return (
    <button
      className={cn(
        "px-4 py-3",
        buttonVariants({ variant, className })
      )}
      {...props}
    />
  );
}
