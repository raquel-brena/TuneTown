import { Post } from "@prisma/client";

export type Profile = {
  id: string;
  userId: string;
  bio?: string | null;
  favoriteSong?: string | null;
  avatarUrl?: string | null;
  posts: Post[] | null;
  followers: Follow[] | null;
  following: Follow[] | null;
};

export type ProfileEntity = Profile & {
  id: number;
  lastLoginAt: string;
  createdAt: string;
  updatedAt: string;
};

export type Follow = {
  followerId: string;
  followingId: string;
};