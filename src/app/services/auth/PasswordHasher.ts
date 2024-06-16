import bcrypt from "bcryptjs";

export async function passwordHasher(password: string): Promise<string> {
  const salts = 10;
  return await bcrypt.hash(password, salts);
}
