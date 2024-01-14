"use client";
import React, { useEffect, useState } from "react";
import cn from "mxcn";
// or if using shadcn:
// import { cn } from "@/lib/utils"; // https://github.com/shadcn-ui/ui/blob/main/apps/www/lib/utils.ts

const AnimateIn = ({
  children,
  delay = 0,
  duration = 500,
  className = "",
  from,
  to,
  style,
  as = 'div',
}: {
  from: string;
  to: string;
  children?: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: keyof React.ReactHTML;
}) => {
  const [animate, setAnimate] = useState(from);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(to);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, to]);

  return React.createElement(
    as,
    {
      className: cn("transition-all ease-in-out", className, animate),
      style: { transitionDuration: duration ? `${duration}ms`: "500ms", ...style},
    },
    children
  );
};

export default AnimateIn;
