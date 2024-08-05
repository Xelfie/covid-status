import React, { PropsWithChildren } from "react";

import { TailwindProps } from "@/types/types";

export default function NavbarOption({
  children,
  className = "",
}: TailwindProps & PropsWithChildren) {
  return <li className={`hover:text-accent ${className}`}>{children}</li>;
}
