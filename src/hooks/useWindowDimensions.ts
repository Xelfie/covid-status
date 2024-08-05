"use client";

import { useState } from "react";

export default function useWindowDimensions() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const getWindowDimensions = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  if (typeof window !== "undefined") {
    window.addEventListener("resize", getWindowDimensions);
  }

  return {
    windowWidth: width,
    windowHeight: height,
  };
}
