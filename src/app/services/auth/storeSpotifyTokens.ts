

import { UserSpotifyToken } from "../../../domain/types/Auth.types";
import { UserTokenRepository } from "../../../infra/repositories/prisma/UserToken.repository";
export async function StoreSpotifyTokens({
  refreshToken,
  accessToken,
  userId
}: UserSpotifyToken): Promise<any | null> {
  try {
    const userTokenRepository = new UserTokenRepository();
    return await userTokenRepository.createUserToken({ refreshToken, accessToken, userId })
  } catch (error: any) {
    throw new Error(error.message);
  }
}

