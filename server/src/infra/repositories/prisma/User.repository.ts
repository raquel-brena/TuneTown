import { IUsersRepository } from "../../../app/repositories/IUserRepository";
import {
  CreateUserAndProfileDTO,
  CreateUserDTO,
  User,
  UserEntity,
  UserResponseDTO,
} from "../../../domain/types/User.types";
import { prisma } from "../../database/prisma";

export class UserRepository implements IUsersRepository {
  async create({
    email,
    name,
    username,
    password,
  }: CreateUserDTO): Promise<UserResponseDTO> {
    throw new Error("Method not implemented.");
  }

  async createUserAndProfile({
    email,
    name,
    username,
    password,
  }: CreateUserAndProfileDTO): Promise<UserResponseDTO | null> {
    try {
      const user = await prisma.user.create({
        data: {
          email,
          username,
          name,
          password,
          Profile: {
            create: {
              bio: "",
              favoriteSong: "",
              avatarUrl: "",
            },
          },
        },
        include: {
          Profile: true,
        },
      });

      if (!user) {
        throw new Error("User not created");
      }

      return {
        email: user.email,
        username: user.username,
        name: user.name,
        profileId: user.Profile!.id,
        createdAt: user.createdAt.toISOString(),
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
    return null;
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
        include: {
          Profile: {
            select: {
              id: true,
            },
          }
        },
      });

      if (!user) {
        return null;
      }

      const userEntity: UserEntity = {
        id: user.id,
        email: user.email,
        name: user.name,
        username: user.username,
        profileId: user.Profile!.id,
        password: user.password,
        createdAt: user.createdAt.toISOString(),
      };
      
      return userEntity;

    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  findById(id: string): Promise<UserResponseDTO | null> {
    throw new Error("Method not implemented.");
  }
  findMany(): Promise<UserEntity[]> {
    throw new Error("Method not implemented.");
  }
}
