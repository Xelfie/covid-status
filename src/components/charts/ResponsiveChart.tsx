import React, { PropsWithChildren } from "react";

import { TailwindProps } from "@/types/types";

export default function ResponsiveChart({
  children,
  className,
}: TailwindProps & PropsWithChildren) {
  return <div className={`relative ${className && className}`}>{children}</div>;
}
