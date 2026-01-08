"use client";

import {createContext, use, useEffect, useState} from "react";

import {authService, type User} from "@/services/authService";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: {children: React.ReactNode}) {
  const [user, setUser] = useState<User | null>({
    id: "123",
    name: "Admin",
    email: "admin@admin.com",
    role: "profesional",
    first_name: "admin",
    last_name: "admin",
    licence_number: "123",
    speciality: "Medicina",
  });
  const [isLoading, setIsLoading] = useState(true);

  // Verificar si hay sesión al cargar la app
  useEffect(() => {
    const initAuth = async () => {
      try {
        const storedUser = authService.getStoredUser();
        const storedToken = authService.getStoredToken();

        if (storedUser && storedToken) {
          // Verificar si el token es válido
          const isValid = await authService.verifyToken();

          if (isValid) {
            setUser(storedUser);
          } else {
            // Token inválido, limpiar
            localStorage.removeItem("access_token");
            localStorage.removeItem("user");
          }
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
        // Limpiar en caso de error
        localStorage.removeItem("access_token");
        localStorage.removeItem("user");
      } finally {
        setIsLoading(false);
      }
    };

    void initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const {user: loggedUser} = await authService.login({email, password});

      setUser(loggedUser);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await authService.logout();
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshUser = async () => {
    try {
      const currentUser = await authService.getCurrentUser();

      setUser(currentUser);
      localStorage.setItem("user", JSON.stringify(currentUser));
    } catch (error: unknown) {
      console.error("Error refreshing user:", error);
    }
  };

  return (
    <AuthContext
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext>
  );
}

export function useAuth() {
  const context = use(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
