"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

import useWindowDimensions from "@/hooks/useWindowDimensions";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavbarOption from "./NavbarOption";

export default function HamburgerMenu() {
  const { windowWidth } = useWindowDimensions();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const tailwindScreenSM = 640;
    if (windowWidth >= tailwindScreenSM) {
      setIsExpanded(false);
    }
  }, [windowWidth]);

  const sidebarStyles = isExpanded
    ? "w-2/5 px-[calc(5%+10px)]"
    : "w-0 px-0 overflow-hidden";

  return (
    <>
      {/* Hamburger menu icon */}
      <NavbarOption className="sm:hidden">
        <button
          type="button"
          className="-mr-3 p-3"
          aria-label="Open menu"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <FontAwesomeIcon icon={faBars} size="xl" />
        </button>
      </NavbarOption>

      {/* Sidebar */}
      <div
        className={`absolute right-0 top-0 flex h-screen ${sidebarStyles} flex-col items-end bg-backgroundStart py-6 duration-300 ease-in-out`}
      >
        {/* Close icon */}
        <NavbarOption>
          <button
            type="button"
            className="-mr-3 -mt-3 p-3"
            aria-label="Close menu"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </button>
        </NavbarOption>

        {/* Navigation options */}
        <ul className="w-full">
          <NavbarOption className="my-4 py-1">
            <Link href="/">Home</Link>
          </NavbarOption>

          <NavbarOption className="my-4 py-1">
            <Link href="/stats">Statistics</Link>
          </NavbarOption>

          <NavbarOption className="my-4 py-1">
            <Link
              href="https://disease.sh/docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Data API <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </NavbarOption>
        </ul>
      </div>
    </>
  );
}
