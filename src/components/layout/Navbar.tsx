import React from "react";
import Link from "next/link";

import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { faVirusCovid } from "@fortawesome/free-solid-svg-icons/faVirusCovid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 flex h-navbar w-full flex-none items-center bg-backgroundStart/50 px-5 backdrop-blur">
      <ul className="flex w-full flex-row items-center justify-between">
        <li>
          <Link href="/">
            <FontAwesomeIcon
              className="-ml-3 p-3 text-primary hover:text-accent"
              icon={faVirusCovid}
              size="2x"
            />
          </Link>
        </li>
        <span className="flex h-full flex-row gap-4">
          <li className="font-semibold hover:text-accent">
            <Link href="/stats">Statistics</Link>
          </li>
          <li className="font-semibold hover:text-accent">
            <Link
              href="https://disease.sh/docs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Data API <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
          </li>
        </span>
      </ul>
    </nav>
  );
}
