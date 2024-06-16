import { User } from "@prisma/client";
import { sign } from "jsonwebtoken";
import { UserEntity } from "../../../domain/types/User.types";

export function generateToken(user : UserEntity) {
  const secretKey = process.env.API_SECRET;

  if (!secretKey) {
    throw new Error("API_SECRET is missing");
  }

  const generatedToken = sign(user, secretKey, {
    expiresIn: "1h",
  })

  return generatedToken;
}