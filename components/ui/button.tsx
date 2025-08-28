
import * as React from "react";
import clsx from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Button({ className, size="md", ...props }: ButtonProps) {
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2",
    lg: "px-5 py-3 text-base",
  } as const;
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-2xl bg-yellow-400 text-neutral-900 font-medium hover:brightness-95 active:brightness-90 transition",
        sizes[size],
        className
      )}
      {...props}
    />
  );
}
