import { PropsWithChildren } from "react";

function SubHeader({ children }: PropsWithChildren) {
  return <h2 className="text-2xl text-primary sm:text-3xl">{children}</h2>;
}

export default SubHeader;
