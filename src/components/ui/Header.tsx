import { PropsWithChildren } from "react";

function Header({ children }: PropsWithChildren) {
  return (
    <h1 className="text-center text-5xl font-medium text-primary sm:py-4 sm:text-6xl">
      {children}
    </h1>
  );
}

export default Header;
