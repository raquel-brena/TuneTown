import { MenuLeftItem } from "./MenuLeftItem";
import {
  home,
  home2,
  search,
  search2,
  profile,
  profile2,
  foruns,
  foruns2,
  more, more2,
  config,
  config2
} from "../../../assets/left_menu";
import { useEffect, useState } from "react";

type MenuLeftProps = {
  buttonSelected: string;
  setButtonSelected: (value: string) => void;
};


export const MenuLeft = ({
  buttonSelected,
  setButtonSelected,
}: MenuLeftProps) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    setTheme(localStorage.getItem("theme")!);
  }, []);

  const items = {
    home: { src: theme === "light" ? home2 : home, alt: "home" },
    search: { src: theme === "light" ? search2 : search, alt: "search" },
    profile: { src: theme === "light" ? profile2 : profile, alt: "profile" },
    foruns: { src: theme === "light" ? foruns2 : foruns, alt: "foruns" },
    more: { src: theme === "light" ? more : more2, alt: "more" },
  };

  return (
    <div
      className="md:h-full md:w-1/12 
      justify-center items-center flex 
      h-12 w-full absolute bottom-0 border-box 
      border border-stroke md:relative overflow-hidden md:z-0 z-30"
    >
      <div
        className="h-2/3 w-full justify-between sm:flex-row text-contrast gap-4 
      md:flex-col items-center flex md:bg-transparent bg-fume"
      >
        <div
          className="h-[80%] flex md:flex-col md:bg-transparent 
        flex-row bg-fume w-full sh-full gap-4 items-center"
        >
          {Object.values(items).map((item, index) => (
            <MenuLeftItem
              key={index}
              src={item.src}
              alt={item.alt}
              buttonSelected={buttonSelected}
              setButtonSelected={setButtonSelected}
            />
          ))}
        </div>
        <MenuLeftItem src={config} alt={"config"} />
      </div>

      <div
        className={`absolute h-1/2 w-48 bg-copacity_theme rotate-90 blur-3xl translate-y-96 `}
      />
    </div>
  );
};
