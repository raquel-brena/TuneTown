import { PropsWithChildren, useState } from "react";
import { AuthContext } from "./UseAuth";

type AuthProviderProps = PropsWithChildren & {
  isSignedIn?: boolean;
};

export default function AuthProvider({
  children,
  isSignedIn,
}: AuthProviderProps) {
    
  const [user] = useState<User | null>(isSignedIn ? { id: 1 } : null);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
