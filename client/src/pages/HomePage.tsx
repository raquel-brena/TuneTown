import { GoogleLogin } from "@react-oauth/google";
import logo  from "../assets/logo.svg";
import { ThemeButton } from "../components/ThemeButton";
import { Button } from "../components/Button";

export const HomePage = () => {


  return (
    <div className="bg-base text-contrast gap-40 justify-center items-center flex fixed w-screen h-screen text-balance">
      
      <ThemeButton />
      <div className="flex relative h-auto w-[30%]">
        <img className="size-fit" src={logo} alt="Logo" />
      </div>

      <div className="flex flex-col w-1/4 space-y-6">
        <h1 className="font-semibold text-3xl ">Inscreva-se hoje</h1>
        <div className="justify-center overflow-hidden">
          <GoogleLogin
            size="large"
            shape="rectangular"
            logo_alignment="center"
            text="signup_with"
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
        <div>
          <div className="relative border-b">
            <span className="px-2 bg-base absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              ou
            </span>
          </div>
        </div>
        <div className="w-full h-px bg-oil-black-300" />

        <Button text="Criar conta" onClick={() => {}} />

      <p className='text-contrast text-xs'>Ao se inscrever, você concorda com os Termos de Serviço e a Política de Privacidade, incluindo o Uso de Cookies.</p>
        <h1 className="font-semibold text-xl">Já tem uma conta?</h1>
        <Button text="Entrar com o e-mail" full onClick={() => {}} />

        <div className="w-full h-px bg-oil-black-300" />
        <div className="w-full flex justify-center text-xs underline">
          <button>Esqueceu sua senha?</button>
        </div>
      </div>
    </div>
  );
};
