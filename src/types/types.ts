import { HTMLProps } from "react";

/**
 * This file defines Global types and interfaces.
 * @returns Custom types to be used globally.
 */

/** Allows extension of Tailwind classes on a component */
export interface TailwindProps {
  className?: HTMLProps<HTMLElement>["className"];
}
