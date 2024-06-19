import { User } from "@prisma/client";
import { sign } from "jsonwebtoken";
import { UserEntity } from "../../../domain/types/User.types";

export function generateToken(user: UserEntity) {
  const secretKey = process.env.API_SECRET;

  if (!secretKey) {
    console.log('no secret')
  }

  const generatedToken = sign(user, secretKey || 'secret', {
    expiresIn: "1h",
  })

  return generatedToken;
}