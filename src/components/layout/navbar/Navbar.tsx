import React from "react";
import Link from "next/link";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faVirusCovid } from "@fortawesome/free-solid-svg-icons/faVirusCovid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import HamburgerMenu from "./HamburgerMenu";
import NavbarOption from "./NavbarOption";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 flex h-navbar w-full flex-none items-center bg-backgroundStart/50 backdrop-blur">
      <ul className="flex w-full flex-row items-center justify-between px-[calc(5%+10px)] font-semibold text-textPrimary/80">
        <li>
          <Link href="/" className="flex items-center hover:text-accent">
            <FontAwesomeIcon
              className="-ml-2 p-2"
              icon={faVirusCovid}
              size="2x"
            />
            <span className="hidden sm:block">COVID-19 Status</span>
          </Link>
        </li>

        {/* Left-aligned navigation options */}
        <ul className="hidden h-full flex-row gap-4 sm:flex">
          <NavbarOption>
            <Link href="/stats">Statistics</Link>
          </NavbarOption>
          <NavbarOption>
            <Link
              href="https://disease.sh/docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Data API <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </NavbarOption>
        </ul>

        <HamburgerMenu />
      </ul>
    </nav>
  );
}
