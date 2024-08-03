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
  const [accentColor, setAccentColor] = useState("");

  useEffect(() => {
    const style = getComputedStyle(document.body);
    setPrimaryColor(style.getPropertyValue("--primary"));
    setAccentColor(style.getPropertyValue("--accent"));
  }, []);

  return {
    primaryColor,
    accentColor,
  };
};

export default useChartThemeColors;
