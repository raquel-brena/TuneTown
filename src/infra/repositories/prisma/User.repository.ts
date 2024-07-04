import { IUsersRepository } from "../../../app/repositories/IUserRepository";
import {
  CreateUserAndProfileDTO,
  User,
  UserEntity,
  UserResponseDTO,
  UserWithProfile,
} from "../../../domain/types/User.types";
import { prisma } from "../../database/prisma";

export class UserRepository implements IUsersRepository {
  async create({
    email,
    name,
    username,
    password,
    avatarUrl,
  }: CreateUserAndProfileDTO): Promise<UserResponseDTO> {
    throw new Error("Method not implemented.");
  }

  async createUserAndProfile({
    email,
    name,
    username,
    password,
    avatarUrl,
    refreshToken,
    accessToken
  }: CreateUserAndProfileDTO): Promise<UserResponseDTO | null> {

    try {
      const user = await prisma.user.create({
        data: {
          email,
          username,
          name,
          password,
          userToken: {
            create: {
              refreshToken: refreshToken ? refreshToken : "",
              accessToken: accessToken ? accessToken : "",
            },
          },
          profile: {
            create: {
              bio: "",
              favoriteSong: "",
              avatarUrl: avatarUrl,
            },
          },
        },
        include: {
          profile: true,
        },
      });

      if (!user) {
        throw new Error("User not created");
      }

      return {
        email: user.email,
        username: user.username,
        name: user.name,
        password: user.password,
        profileId: user.profile!.id,
        avatarUrl: user.profile!.avatarUrl,
        createdAt: user.createdAt.toISOString(),
      };
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async findByEmail(email: string): Promise<UserWithProfile | null> {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
        include: {
          profile: {
            select: {
              id: true,
              userId: true,
              bio: true,
              favoriteSong: true,
              avatarUrl: true,
              posts: true,
              followers: true,
              following: true,
            },
          },
        },
      });

      if (!user) {
        return null;
      }

      const userWithProfile: UserWithProfile = {
        email: user.email,
        name: user.name,
        username: user.username,
        password: user.password,
        profile: {
          userId: user.profile!.userId,
          bio: user.profile!.bio,
          favoriteSong: user.profile!.favoriteSong,
          avatarUrl: user.profile!.avatarUrl,
          posts: user.profile!.posts,
          followers: user.profile!.followers,
          following: user.profile!.following,
        },
      };

      return userWithProfile;
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
