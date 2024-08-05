"use client";

import React, { useState } from "react";
import Link from "next/link";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NavbarOption from "./NavbarOption";

export default function HamburgerMenu() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <li className="hover:text-accent sm:hidden">
        <button
          type="button"
          className="-mr-3 p-3"
          aria-label="Open menu"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <FontAwesomeIcon icon={faBars} size="xl" />
        </button>
      </li>

      {isExpanded && (
        <div className="absolute right-0 top-0 flex h-screen w-2/5 flex-col items-end bg-backgroundStart px-[calc(5%+10px)] py-6">
          <button
            type="button"
            className="-mr-3 -mt-3 p-3"
            aria-label="Close menu"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <FontAwesomeIcon icon={faXmark} size="xl" />
          </button>

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
      )}
    </>
  );
}
