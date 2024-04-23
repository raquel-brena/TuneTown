import { useEffect, useState } from "react";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

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
    <button className="text-black border border-stroke 
    absolute size-12 items-center rounded-md flex justify-center
    hover:w-20 transition-all duration-500 group hover:bg-blend-overlay hover:shadow-md hover:shadow-[#cfe9bc1a]" onClick={toggleTheme}>
     
     { theme === 'dark' ?  
     <div className="relative h-auto flex items-center group-hover:gap-2  justify-center w-3 over:before:content-['dark'] text-theme  shadow-inner group-hover:transform ">
        <img className="size-fit group-hover:-rotate-12 " src={moon} alt="Logo" />
        <div className="group-hover:before:content-['dark'] text-theme text-sm hover:rotate-0"></div>
      </div> 
      :  
      <div className="relative h-auto flex items-center group-hover:gap-2 justify-center w-[0.9rem] over:before:content-['dark'] text-theme  shadow-inner group-hover:transform ">
      <img className="size-fit group-hover:-rotate-12  " src={sun} alt="Logo" />
      <div className="group-hover:before:content-['light'] text-sm text-theme hover:rotate-0"></div>
    </div> }
</button>
  );
};
