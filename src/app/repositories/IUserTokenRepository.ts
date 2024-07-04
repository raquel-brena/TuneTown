import { UserToken } from "../../domain/types/UserToken.types";

export interface IUserTokenRepository {
  createUserToken(userTokenRequest: UserToken): Promise<string>;
  findUserByToken(tokenId: string): Promise<string | null>;
  updateUserToken(userTokenRequest: UserToken): Promise<string>;
}