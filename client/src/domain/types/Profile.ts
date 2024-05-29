import { UserEntity } from "./User";

export type Profile = {
  username: string;
  bio?: string | null;
  favoriteSong?: string | null;
  avatarUrl?: string | null;
  followers: UserEntity[];
  following: UserEntity[];
};

export type ProfileEntity = Profile & {
  id: string;
  userId: string;
  lastLoginAt: string;
  createdAt: string;
  updatedAt: string;
};