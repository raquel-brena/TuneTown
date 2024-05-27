
import { MenuLeft } from "../components/feed/menuLeft/MenuLeft.tsx";
import { ThemeButton } from "../components/ThemeButton.tsx";
import { Sidebar } from "../components/feed/sidebar/Sidebar.tsx";
import { useState } from "react";

export const ContainerCentral = ({children}: {
  children: JSX.Element | JSX.Element[] | string | string[] | any } 
) => {
  const [buttonSelected, setButtonSelected] = useState<string>("home");

  return (
    <div className="bg-base text-contrast items-center flex fixed w-screen h-screen text-balance">
      <div className="absolute hidden md:flex md:top-4 md:z-40 md:left-4">
        <ThemeButton />
      </div>

      <MenuLeft
        buttonSelected={buttonSelected}
        setButtonSelected={setButtonSelected}
      />

      <div
        className="h-full space-y-5 mx-2 md:mx-0 
        w-full md:w-[60%] flex relative 
        flex-col overflow-y-auto scroll-smooth scroll"
      >
        {children}
      </div>

      <Sidebar />

    </div>
  );
};
