import { User } from "@prisma/client";
import { sign } from "jsonwebtoken";
import { UserEntity, UserWithProfile } from "../../../domain/types/User.types";

export function generateToken(user: UserWithProfile) {
  const secretKey = process.env.API_SECRET;

  const generatedToken = sign(user, secretKey || "secret", {
    expiresIn: "1h",
  });

  return generatedToken;
}