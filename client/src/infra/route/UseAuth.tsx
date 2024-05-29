import { createContext, useContext } from "react";

export const AuthContext = createContext<User | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("UseAuth must be used within a AuthProvider");
  }

  return context;
}
