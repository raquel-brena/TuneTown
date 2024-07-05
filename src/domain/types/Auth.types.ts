import { UserWithProfile } from "./User.types";

export type UserSpotifyToken = {
  accessToken: string;
  refreshToken: string;
};

export type UseraSpotifyTokenEntity = UserSpotifyToken & {
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
