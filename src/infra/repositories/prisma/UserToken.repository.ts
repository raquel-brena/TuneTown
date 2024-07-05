import { IUserTokenRepository } from "../../../app/repositories/IUserTokenRepository";
import { UserSpotifyToken, UserSpotifyTokenEntity } from "../../../domain/types/Auth.types";
import { prisma } from "../../database/prisma";

export class UserTokenRepository implements IUserTokenRepository {
    async createUserToken({ refreshToken, accessToken, userId }: UserSpotifyToken): Promise<{ userTokenId: string }> {
        try {
            const userToken = await prisma.userToken.create({
                data: {
                    userId,
                    refreshToken,
                    accessToken
                }
            })
            return { userTokenId: userToken.id }
        } catch (error: any) {
            throw new Error("Method not implemented.");
        }
    }
    async findUserByToken(userTokenId: string): Promise<UserSpotifyTokenEntity | null> {
        try {
            const userToken = await prisma.userToken.findFirst({
                where: {
                    id: userTokenId
                }
            })
    
            if (!userToken) {
                return null
            }
            
            return { id: userToken.id, createdAt: userToken.createdAt.toISOString(), userId: userToken.userId, refreshToken: userToken.refreshToken, accessToken: userToken.accessToken}
        } catch (error: any) {
            throw new Error("Method not implemented.");
        }
    }
    updateUserToken(userTokenRequest: UserSpotifyToken): Promise<{ userTokenId: string }> {
        throw new Error("Method not implemented.");
    }

}