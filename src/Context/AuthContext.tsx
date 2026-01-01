import { createContext, useContext } from "react";

interface AuthContextType {
  token: string | null;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const token = localStorage.getItem("token");

  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider value={{ token, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
