import { useState } from "react";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const rootElement = document.documentElement;
    const currentTheme = isDarkMode ? "light" : "dark";

    setIsDarkMode(!isDarkMode);
    rootElement.setAttribute("data-theme", currentTheme);
  };

  return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;