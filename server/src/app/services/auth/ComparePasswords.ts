import bcrypt from "bcryptjs";
type comparePasswords = { password: string; hashedPassword: string };

export async function comparePasswords({
  password,
  hashedPassword,
}: comparePasswords): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}
