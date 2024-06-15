
import { CreateUserDTO, User, UserEntity, UserResponseDTO } from "../../domain/types/User.types";

export interface IUsersRepository {
    create(data: CreateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<UserResponseDTO | null>;
    findMany(): Promise<UserEntity[]>;
}