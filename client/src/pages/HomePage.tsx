import { GoogleLogin } from "@react-oauth/google";
import logo from "../assets/logo.svg";
import { ThemeButton } from "../components/ThemeButton";
import { Button } from "../components/Button";
import * as Dialog from "@radix-ui/react-dialog";
import { FormSignIn } from "../components/forms/FormSignIn";
import { FormSignUp } from "../components/forms/FormSignUp";

export const HomePage = () => {
  return (
    <div className="bg-base text-contrast gap-40 justify-center items-center flex fixed w-screen h-screen text-balance">
      <div
        className="size-[50%] rounded-full bg-[#B56CFF] -translate-x-96 -translate-y-72 absolute 
        blur-3xl opacity-5
        "
      />
      <div
        className="size-[80%] rounded-full bg-[#68C56F]  -translate-x-[90%] translate-y-[80%] absolute 
        blur-3xl opacity-5"
      />
      <div className="size-[100%] rounded-full blur-3xl  bg-purple-600  translate-x-[95%] translate-y-96 opacity-10 absolute" />
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

        <Dialog.Root>
          <Dialog.Trigger>
            <Button text="Criar conta" />
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="bg-[#292929] opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className=" bg-fume text-contrast stroke-stroke data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
           
            <FormSignIn/>

              <Dialog.Close asChild>
                <button className="IconButton" aria-label="Close">
                  X
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
        <p className="text-contrast text-xs outline-none pointer-events-none">
          Ao se inscrever, você concorda com os Termos de Serviço e a Política
          de Privacidade, incluindo o Uso de Cookies.
        </p>
        <Dialog.Root>
          <Dialog.Trigger>
            <div className="space-y-3 text-left">
              <h1 className="font-semibold text-xl">Já tem uma conta?</h1>
              <Button text="Entrar com o e-mail" full />
            </div>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="bg-[#292929] opacity-50  data-[state=open]:animate-overlayShow fixed inset-0" />
            <Dialog.Content className="text-contrast data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-fume stroke-stroke p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
              
              <FormSignUp/>

              <Dialog.Close asChild>
                <button className="IconButton" aria-label="Close">
                  X
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </div>
  );
};
