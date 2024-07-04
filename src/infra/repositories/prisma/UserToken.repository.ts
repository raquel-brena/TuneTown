import { IUserTokenRepository } from "../../../app/repositories/IUserTokenRepository";
import { UserToken } from "../../../domain/types/UserToken.types";

export class UserTokenRepository implements IUserTokenRepository {
    createUserToken(userTokenRequest: UserToken): Promise<string> {
        throw new Error("Method not implemented.");
    }
    findUserByToken(tokenId: string): Promise<string | null> {
        throw new Error("Method not implemented.");
    }
    updateUserToken(userTokenRequest: UserToken): Promise<string> {
        throw new Error("Method not implemented.");
    }

}