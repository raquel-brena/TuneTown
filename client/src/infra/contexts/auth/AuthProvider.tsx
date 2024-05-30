import { PropsWithChildren, useEffect, useState } from "react";
import { AuthContext } from "./UseAuth";
import AxiosAdapter from "../../http/AxiosAdapter";
import { User } from "../../../domain/types/User";

type AuthProviderProps = PropsWithChildren & {
  isSignedIn?: boolean;
};

type AuthData = {
  email: string,
  password: string,
}

export default function AuthProvider({
  children
}: AuthProviderProps) {

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  
  const httpClient = new AxiosAdapter();

    useEffect(() => {
      const token = localStorage.getItem("token");

      if (token) {
       httpClient.setHeaders({ Authorization: `Bearer ${token}` });
       setUser(user);
      }

      setLoading(false);
    }, []);
  
      async function handleLogin({email, password} : AuthData) {
        const {
          data: { token, user },
        } = await httpClient.post("/authenticate", { email, password });
        localStorage.setItem("token", JSON.stringify(token));
        httpClient.setHeaders( `Bearer ${token}`)
        setUser(user);
      }

      function handleLogout() {
        setUser(null);
        localStorage.removeItem("token");
        httpClient.setHeaders(undefined);
      }
  
      if (loading) {
        return <p>Loading...</p>;
      }

  return <AuthContext.Provider value={{loading, user, handleLogin, handleLogout
  }}>{children}</AuthContext.Provider>;
}
