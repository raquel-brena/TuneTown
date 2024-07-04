const express = require('express');
import { Request, Response, NextFunction } from 'express'; 

const indexRouter = express.Router();

indexRouter.get(
  "/",
  function (req: Request, res: Response, next: NextFunction) {
    res.json({ message: "Hello World" });
  }
);

export default indexRouter;