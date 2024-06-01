import {
  CreateUserAndProfileDTO,
  CreateUserDTO,
  UserResponseDTO,
  AuthUser,
  AuthUserResponse,
} from "../../domain/types/User.types";
import { SignUp } from "../services/auth/SignUp";
import { SignIn } from "../services/auth/SignIn";
import { Request, Response } from "express";


export class AuthController {
   
  async signIn(req: Request, res: Response) {
    const { email, password }: AuthUser = req.body as unknown as AuthUser;
    try {
      const authenticateUser = new SignIn();

          const response: AuthUserResponse | null =
            await authenticateUser.execute({
              email,
              password,
            })

          if (response === null) {
            return res.status(400).json({ message: "User not found" });
          }

      return res.status(200).json({ token: response.token, user: response.user});

    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }


  async signUp(req: Request, res: Response) {
    const { email, name, username, password }: CreateUserAndProfileDTO =
      req.body as unknown as CreateUserDTO;

    try {
      const newUser: UserResponseDTO | null = await SignUp({
        name,
        email,
        username,
        password,
      });

      if (newUser === null) {
        return res.status(400).json({ message: "User not created" });
      }
      return res.status(201).json({ user: newUser.username });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
}
