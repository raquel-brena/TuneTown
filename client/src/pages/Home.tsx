import { useParams } from "react-router-dom";
import { Menu } from "../components/Menu.tsx";
import { ThemeButton } from "../components/ThemeButton.tsx";
export const Home = () => {

    return (
        <div className="bg-base text-contrast items-center flex fixed w-screen h-screen text-balance">
            <div className="absolute top-4 z-40 left-4">
                <ThemeButton/>
            </div>
            <Menu />
        </div>
    );

};
