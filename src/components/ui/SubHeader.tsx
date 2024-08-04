import { PropsWithChildren } from "react";

import { TailwindProps } from "@/types/types";

function SubHeader({ children, className }: TailwindProps & PropsWithChildren) {
  return (
    <h2
      className={`${className && className} text-2xl text-primary sm:text-3xl`}
    >
      {children}
    </h2>
  );
}

export default SubHeader;
