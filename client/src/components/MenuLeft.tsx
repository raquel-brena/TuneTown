import { MenuLeftItem } from "./MenuLeftItem"
import {  profile, foruns, home, search}  from "../assets/left_menu";
import { Img } from "./Img"

export const Menu = () => {

    return (
      <div
        className="md:h-full md:w-1/12 
      justify-center items-center flex 
      h-12 w-full absolute bottom-0 border-box 
      border border-stroke md:relative overflow-hidden"
      >
        <div className="h-2/3 w-full text-contrast gap-4 flex-col items-center flex">
          <MenuLeftItem>
            <Img src={home} alt="Logo" />
          </MenuLeftItem>

          <MenuLeftItem>
            <Img src={search} alt="Logo" />
          </MenuLeftItem>

          <MenuLeftItem>
            <Img src={foruns} alt="Logo" />
          </MenuLeftItem>

          <MenuLeftItem>
            <Img src={profile} alt="Logo" />
          </MenuLeftItem>
        </div>

        <div
          className={`absolute h-1/2 w-48 bg-copacity_theme rotate-90 blur-3xl translate-y-96 `}
        />
      </div>
    );
}