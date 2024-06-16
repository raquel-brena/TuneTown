import { Request, Response } from "express";

export interface IController {
  get(req: Request, res: Response): any;
  create(req: Request, res: Response): any;
  update(req: Request, res: Response): any;
  delete(req: Request, res: Response): any;
  getMany(req: Request, res: Response): any;
}
