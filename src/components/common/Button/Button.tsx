import * as React from "react";

import { ButtonProps } from "./Button.types";
import { buttonVariants } from "./Button.styles";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      isLoading,
      children,
      fullWidth,
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          fullWidth && "w-full"
        )}
        ref={ref}
        type={type}
        {...props}
        disabled={isLoading || disabled}
      >
        {isLoading && <Loader2 className="animate-spin" />}
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button };
