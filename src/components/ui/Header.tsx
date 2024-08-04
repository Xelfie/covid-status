import { PropsWithChildren } from "react";

import { TailwindProps } from "@/types/types";

function Header({ children, className }: TailwindProps & PropsWithChildren) {
  return (
    <h1
      className={`${className && className} flex items-center justify-center gap-4 text-center text-5xl font-medium text-primary sm:py-4 sm:text-6xl`}
    >
      {children}
    </h1>
  );
}

export default Header;
