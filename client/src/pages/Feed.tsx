
import { MenuLeft } from "../components/feed/menuLeft/MenuLeft.tsx";
import { ThemeButton } from "../components/ThemeButton.tsx";
import { MenuTop } from "../components/feed/menuTop/MenuTop.tsx";
import { Container } from "../components/feed/Container.tsx"

export const Home = () => {
    return (
      <div className="bg-base text-contrast items-center flex fixed w-screen h-screen text-balance">
        <div className="absolute hidden md:flex md:top-4 md:z-40 md:left-4">
          <ThemeButton />
        </div>
        <MenuLeft />
        <Container/>
      </div>
    );

};
