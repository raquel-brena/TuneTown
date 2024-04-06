import Box from "../components/Box";
import Header from "../components/Header";
import Input from "../components/Input";
import { GoogleLogin } from "@react-oauth/google";

function Login() {
  return (
    <div className="bg-oil-black-100 space-y-28 flex flex-col fixed w-screen h-screen items-center text-white text-balance">
      <Header />
      <div className="absolute flex m-0 w-full justify-end pr-3">
        <p>Não tem conta ainda? Inscreva-se!</p>
      </div>
      <Box width="w-1/3" height="h-2/3" stroke={true}>
        <div className="flex flex-col w-5/6 space-y-6">
          <h1 className="font-semibold text-2xl ">Faça seu login</h1>
          <h4 className="text-xs">
            Esteja conectado aos seus amigos e suas músicas
          </h4>
          <div className=" justify-center overflow-hidden">
            <GoogleLogin
              size="medium"
              shape="circle"
              logo_alignment="center"
              text="continue_with"
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </div>
          <div className="w-full h-px bg-oil-black-300" />

          <form className="space-y-8">
            <Input label="E-mail" />
            <Input label="Senha" />
          </form>
          <button>Entrar</button>
          <div className="w-full h-px bg-oil-black-300" />
          <div className="w-full flex justify-center text-xs underline">
            <p>Esqueceu sua senha?</p>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Login;
