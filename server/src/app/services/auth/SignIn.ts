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

      const userRepository = new UserRepository();
      const userEntity = await userRepository.findByEmail(email);

      if (!userEntity) {
        throw new Error("User not exists");
      }
      const isPasswordCorrect = await comparePasswords({
        password,
        hashedPassword: userEntity.password,
      });

      if (!isPasswordCorrect) {
        throw new Error("Password incorrect");
      }

      const token = generateToken(userEntity);

      return { token, user: userEntity };
    
  }
}
