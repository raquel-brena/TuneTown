import { Profile } from "./Profile.types";


export type User = {
  email: string;
  name: string;
  password: string;
  username: string;
};

export type UserEntity = User & {
  id: string;
  profile: Profile;
  createdAt: string;
};


export type UserWithProfile = User & {
  profile: Profile;
};

export type UserResponseDTO = User & {
  profileId: string;
  avatarUrl: string | null;
  createdAt: string;
};

export type CreateUserDTO = User & {
  password: string;
  accessToken?: string | null;
  refreshToken?: string | null;
};

export type CreateUserAndProfileDTO = CreateUserDTO & {
  avatarUrl?: string | null;
};

export type UpdateUserDTO = {
  email?: string | null;
  name?: string | null;
  username?: string | null;
  password?: string | null;
};


