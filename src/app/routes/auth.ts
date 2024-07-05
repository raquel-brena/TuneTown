import { Router, Request, Response } from "express";
import { AuthController } from "../controllers/AuthController";

const authRoutes = Router();
const authController = new AuthController();

authRoutes.post("/signin", (req: Request, res: Response) =>
  authController.signIn(req, res)
);

authRoutes.post("/signup", (req: Request, res: Response) =>
  authController.signUp(req, res)
);

authRoutes.post("/spotifyTokens", (req: Request, res: Response) =>
  authController.spotifyTokens(req, res)
);

export default authRoutes;
