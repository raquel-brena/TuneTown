import { UserSpotifyToken, UserSpotifyTokenEntity } from "../../domain/types/Auth.types";

export interface IUserTokenRepository {
  createUserToken(userTokenRequest: UserSpotifyToken): Promise<{userTokenId: string}>;
  findUserByToken(userTokenId: string): Promise< UserSpotifyTokenEntity | null>;
  updateUserToken(userTokenRequest: UserSpotifyToken): Promise<{userTokenId: string}>;
}