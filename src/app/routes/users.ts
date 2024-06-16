import { Router, Request, Response } from "express";
import { UserController } from "../controllers/UserController";

const userRoutes = Router();
const userController = new UserController();

userRoutes.post("/", (req: Request, res: Response) =>
  userController.createUserAndProfile(req, res)
);

export default userRoutes;
