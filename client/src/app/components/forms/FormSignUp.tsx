import { Button } from "../Button";
import Input from "../Input";

export const FormSignUp = () => {


    return (
      <div className="flex flex-col space-y-5 px-6 py-5">
        <div className="mb-4">
          <p className="text-3xl mb-1 font-semibold">Cadastre-se!</p>
          <p className="text-md font-light">
            Esteja conectado aos seus amigos e suas músicas
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <Input label="Nome" />
          <Input label="Email" />
          <Input label="Username" />
          <Input label="Senha" />
        </div>

        <Button>Criar conta</Button>
      </div>
    );
  };
  