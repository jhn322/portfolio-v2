"use client";
import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface StaticButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  borderRadius?: string;
  children: React.ReactNode;
  containerClassName?: string;
  borderClassName?: string;
  className?: string;
}

export const StaticButton = forwardRef<HTMLButtonElement, StaticButtonProps>(
  (
    {
      borderRadius = "1.75rem",
      children,
      containerClassName,
      borderClassName,
      className,
      ...otherProps
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "bg-transparent relative font-medium h-12 p-[2px] overflow-hidden",
          containerClassName
        )}
        style={{
          borderRadius: borderRadius,
        }}
        {...otherProps}
      >
        <div
          className="absolute inset-0"
          style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
        >
          <div className={cn("absolute inset-0 opacity-80", borderClassName)} />
        </div>

        <div
          className={cn(
            "relative bg-background backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-base antialiased",
            className
          )}
          style={{
            borderRadius: `calc(${borderRadius} * 0.96)`,
          }}
        >
          {children}
        </div>
      </button>
    );
  }
);

StaticButton.displayName = "StaticButton";
