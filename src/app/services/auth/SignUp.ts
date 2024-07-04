import { CreateUserAndProfileDTO, CreateUserDTO, User, UserResponseDTO } from "../../../domain/types/User.types";
import { UserRepository } from "../../../infra/repositories/prisma/User.repository";
import { CreateUser } from "../user/CreateUser";
import { passwordHasher } from "./PasswordHasher";

export async function SignUp({
  name,
  email,
  username,
  password,
  avatarUrl,
  accessToken, 
  refreshToken
}: CreateUserAndProfileDTO): Promise<UserResponseDTO> {

  try {
    const userRepository = new UserRepository();
    const ifExists = await userRepository.findByEmail(email);

    if (ifExists) {
      throw new Error("User already exists");
    }

    const hasher: string = await passwordHasher(password);

    const createUser = new CreateUser();
    const user: UserResponseDTO | null = await createUser.execute({
      name,
      email,
      username,
      password: hasher,
      avatarUrl,
      accessToken,
      refreshToken,
    });

    if (!user) {
      throw new Error("User not created");
    }

    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }

}
