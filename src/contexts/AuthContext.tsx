import React, { createContext, useContext, useEffect, useState } from "react";
import { subscribeToAuth } from "../lib/auth";
import { User } from "firebase/auth";

const AuthContext = createContext<{ user: User | null }>({ user: null });

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    return subscribeToAuth(setUser);
  }, []);

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);