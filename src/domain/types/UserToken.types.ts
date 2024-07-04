export type UserToken = {
  userId: string;
  accessToken: string;
  refreshToken: string;
};

export type UserTokenEntity = UserToken & {
  id: string;
  createdAt: string;
};

