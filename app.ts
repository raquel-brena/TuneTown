import createError from "http-errors";
import express, { Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

import indexRouter from "./src/app/routes/index";
import userRoutes from "./src/app/routes/users";
import authRoutes from "./src/app/routes/auth";

const app = express();

app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

app.use(function (req: Request, res: Response, next: NextFunction) {
  next(createError(404));
});

app.set("view engine", "ejs");

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  console.error(err.stack);
  res.status(500).json( { error: err });
});

const port = process.env.PORT || 3333;
app.listen(port, () => console.log(`Server running on port ${port}`));
