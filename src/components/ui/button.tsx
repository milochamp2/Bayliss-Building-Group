import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-heading font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-accent text-white hover:bg-accent-600 active:bg-accent-700 shadow-sm hover:shadow-md",
        secondary:
          "bg-charcoal text-white hover:bg-charcoal-400 active:bg-charcoal-700",
        outline:
          "border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
        "outline-light":
          "border-2 border-white text-white hover:bg-white hover:text-charcoal",
        ghost:
          "text-charcoal hover:bg-charcoal-50 active:bg-charcoal-100",
        link: "text-accent underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        sm: "h-9 px-4 text-body-sm rounded-lg",
        md: "h-11 px-6 text-body rounded-lg",
        lg: "h-13 px-8 text-body-lg rounded-xl",
        xl: "h-14 px-10 text-body-lg rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
