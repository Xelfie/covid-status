import { PropsWithChildren } from "react";

import { TailwindProps } from "@/types/types";

function Header({
  children,
  className = "",
}: TailwindProps & PropsWithChildren) {
  return (
    <h1
      className={`${className} flex items-center justify-center py-4 text-center text-[calc(2rem+2vw)] font-medium text-primary`}
    >
      {children}
    </h1>
  );
}

export default Header;
