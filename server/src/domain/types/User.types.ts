import { Profile } from "@prisma/client";
import e from "express";

export type User = {
  email: string;
  name: string;
  username: string;
};

export type UserEntity = User & {
  id: string;
  password: string;
  profileId: string;
  createdAt: string;
};

export type UserResponseDTO = User & {
  profileId: string;
  createdAt: string;
};

export type CreateUserDTO = User & {
  password: string;
};

export type CreateUserAndProfileDTO = CreateUserDTO & {};

export type UpdateUserDTO = {
  email?: string | null;
  name?: string | null;
  username?: string | null;
  password?: string | null;
};

export type AuthUser = {
  email: string;
  password: string;
};

export type AuthUserResponse = {
  token: string;
  user: UserEntity;
};