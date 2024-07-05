import { UserWithProfile } from "./User.types";

export type UserSpotifyToken = {
  userId: string;
  accessToken: string | null;
  refreshToken: string | null;
};

export type UserSpotifyTokenEntity = UserSpotifyToken & {
  id: string;
  createdAt: string;
};

export type AuthUser = {
  email: string;
  password: string;
};

export type AuthUserResponse = {
  token: string;
  user: UserWithProfile;
};
