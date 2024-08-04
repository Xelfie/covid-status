import { useEffect, useState } from "react";

/**
 * Retrieves the CSS variables added in `globals.css` from the DOM
 * in order to be used in `Chart.js` charts.
 *
 * @returns The CSS variable values
 * @see {@link file://./../styles/globals.css}
 */
const useChartThemeColors = () => {
  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [accentColor, setAccentColor] = useState("");

  useEffect(() => {
    const style = getComputedStyle(document.body);
    setPrimaryColor(style.getPropertyValue("--primary"));
    setSecondaryColor(style.getPropertyValue("--secondary"));
    setAccentColor(style.getPropertyValue("--accent"));
  }, []);

  return {
    primaryColor,
    secondaryColor,
    accentColor,
  };
};

export default useChartThemeColors;
