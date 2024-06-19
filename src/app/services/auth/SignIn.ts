import {
  AuthUser,
  AuthUserResponse,
  CreateUserDTO,
  UserResponseDTO,
} from "../../../domain/types/User.types";
import { UserRepository } from "../../../infra/repositories/prisma/User.repository";
import { comparePasswords } from "../auth/ComparePasswords";
import { generateToken } from "../auth/GenerateToken";

export class SignIn {

  async execute({
    email,
    password,
  }: AuthUser): Promise<AuthUserResponse | null> {

    try {
      const userRepository = new UserRepository();
      const userEntity = await userRepository.findByEmail(email);

      if (!userEntity) {
        throw new Error("Usuário não encontrado");
      }
      const isPasswordCorrect = await comparePasswords({
        password,
        hashedPassword: userEntity.password,
      });

      if (!isPasswordCorrect) {
        throw new Error("Senha incorreta");
      }

      const token = generateToken(userEntity);

      return { token, user: userEntity };

    } catch (error: any) {
      throw new Error(error.message);
    }

  }
}
