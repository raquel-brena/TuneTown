import {
  CreateUserAndProfileDTO,
  CreateUserDTO,
  UserResponseDTO,
} from "../../domain/types/User.types";
import { CreateUser } from "../services/user/CreateUser";
import { IController } from "./IController";
import { Request, Response } from "express";

export class UserController implements IController {
  get(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }

  create(req: Request, res: Response) {
    const { email, name, username, password }: CreateUserDTO =
      req.body as unknown as CreateUserDTO;

    const createUser = new CreateUser();

    createUser.execute({ name, email, username, password });
  }

  async createUserAndProfile(req: Request, res: Response) {
    const { email, name, username, password }: CreateUserAndProfileDTO =
      req.body as unknown as CreateUserDTO;

    try {
      const createUser = new CreateUser();

      const newUser: UserResponseDTO | null = await createUser.execute({
        name,
        email,
        username,
        password,
      });

      if (newUser === null) {
        return res.status(208).json({ message: "User not created" });
      }

      return res.status(201).json({ user: newUser.username });
    } catch (error: any) {
      return res.status(206).json({ message: error.message });
    }
  }

  update(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
  delete(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
  getMany(req: Request, res: Response) {
    throw new Error("Method not implemented.");
  }
}
