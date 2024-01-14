"use client";
import React from "react";
import AnimateIn from "./AnimateIn";
import cn from "mxcn";

const FadeIn = ({
  children,
  delay,
  className,
  from,
  to,
  style,
  as,
}: {
  children?: React.ReactNode;
  delay?: number;
  className?: string;
  from?: string;
  to?: string;
  style?: React.CSSProperties;
  as?: keyof React.ReactHTML;
}) => {
  return (
    <AnimateIn
      className={className}
      from={cn("opacity-0", from)}
      to={cn("opacity-100", to)}
      delay={delay}
      style={style}
      as={as}
    >
      {children}
    </AnimateIn>
  );
};

export default FadeIn;
