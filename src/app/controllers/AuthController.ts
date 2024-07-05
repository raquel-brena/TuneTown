import {
  CreateUserAndProfileDTO,
  CreateUserDTO,
  UserResponseDTO
} from "../../domain/types/User.types";
import { SignUp } from "../services/auth/SignUp";
import { SignIn } from "../services/auth/SignIn";
import { Request, Response } from "express";
import { AuthUser, AuthUserResponse, UserSpotifyToken } from "../../domain/types/Auth.types";

export class AuthController {

  async signIn(req: Request, res: Response) {
    const { email, password }: AuthUser = req.body as unknown as AuthUser;
    try {
      const authenticateUser = new SignIn();

      const response: AuthUserResponse | null 
      = await authenticateUser.execute({
        email,
        password,
      });

      console.log(response);
      if (response === null) {
        return res.status(400).json({ message: "Usuário não encontrado" });
      }
      return res
        .status(200)
        .json({ token: response.token, user: response.user });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async signUp(req: Request, res: Response) {
    const { email, name, username, 
      password, avatarUrl, refreshToken, 
      accessToken }: CreateUserAndProfileDTO =
      req.body as unknown as CreateUserDTO;

    try {
      const newUser: UserResponseDTO | null = await SignUp({
        name,
        email,
        username,
        password,
        avatarUrl,
        refreshToken, 
        accessToken
      });

      if (newUser === null) {
        return res.status(400).json({ message: "Usuário não criado" });
      }
      return res.status(201).json({ user: newUser.username });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

  async spotifyTokens(req: Request, res: Response) {
    const { refreshToken, accessToken }:  =
      req.body as UserSpotifyToken;

    try {
      const storedTokens = await storeSpotifyTokens({
        refreshToken, 
        accessToken
      });

      if (newUser === null) {
        return res.status(400).json({ message: "Usuário não criado" });
      }
      return res.status(201).json({ user: newUser.username });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }

}