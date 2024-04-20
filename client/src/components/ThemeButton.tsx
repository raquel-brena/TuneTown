import { useEffect, useState } from "react";

export const ThemeButton = () => {
  const [theme, setTheme] = useState("");

  function setSelectedTheme(theme: string) {
    document.documentElement.setAttribute("data-theme", theme);
    setTheme(theme);
  }

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)");

    const updateTheme = () => {
      const storedTheme = localStorage.getItem("theme");

      if (storedTheme !== null) {
        setSelectedTheme(storedTheme);
      } else {
        switch (true) {
          case prefersDark.matches:
            setSelectedTheme("dark");
            break;
          case prefersLight.matches:
            setSelectedTheme("light");
            break;
          default:
            break;
        }
      }
    };

    updateTheme();

    prefersDark.addEventListener("change", updateTheme);
    prefersLight.addEventListener("change", updateTheme);

    return () => {
      prefersDark.removeEventListener("change", updateTheme);
      prefersLight.removeEventListener("change", updateTheme);
    };
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setSelectedTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setSelectedTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button className="text-black absolute" onClick={toggleTheme}>
     ALTERAR TEMA
    </button>
  );
};
