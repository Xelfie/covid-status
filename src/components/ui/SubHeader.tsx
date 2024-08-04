import { PropsWithChildren } from "react";

import { TailwindProps } from "@/types/types";

function SubHeader({ children, className }: TailwindProps & PropsWithChildren) {
  return (
    <h2
      className={`${className && className} text-[calc(1rem+1vw)] text-primary`}
    >
      {children}
    </h2>
  );
}

export default SubHeader;
