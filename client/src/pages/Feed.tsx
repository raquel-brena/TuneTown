
import { Menu } from "../components/MenuLeft.tsx";
import { ThemeButton } from "../components/ThemeButton.tsx";
import { Share } from "../components/MenuTop.tsx";
import { Container } from "../components/Container.tsx"

export const Home = () => {
    return (
        <div className="bg-base text-contrast items-center flex fixed w-screen h-screen text-balance">
            <div className="absolute hidden md:flex md:top-4 md:z-40 md:left-4">
                <ThemeButton />
            </div>
            <Menu />
            <Container>
                <Share />
            </Container>

        </div>
    );

};
