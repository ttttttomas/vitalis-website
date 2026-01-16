"use client";

import {createContext, use, useEffect, useState} from "react";

import type {UserAdmin, UserCompany, UserPatient, UserProfessional, UserProfile} from "@/types";

import {authService} from "@/services/authService";

type User = UserAdmin | UserCompany | UserPatient | UserProfessional;

interface AuthContextType {
  user: User | null;
  profile: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({children}: {children: React.ReactNode}) {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar si hay sesión al cargar la app
  useEffect(() => {
    const initAuth = async () => {
      try {
        // Verificar si hay cookie de sesión válida
        const isValid = await authService.verifyToken();

        if (isValid) {
          // Obtener datos del usuario
          const data = await authService.getCurrentUser();

          setUser(data.user);
          setProfile(data.profile);
        }
      } catch (error) {
        console.error("Error initializing auth:", error);
        setUser(null);
        setProfile(null);
      } finally {
        setIsLoading(false);
      }
    };

    void initAuth();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const {user: authData} = await authService.login({email, password});

      setUser(authData.user);
      setProfile(authData.profile);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      await authService.logout();
      setUser(null);
      setProfile(null);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshUser = async () => {
    try {
      const data = await authService.getCurrentUser();

      setUser(data.user);
      setProfile(data.profile);
    } catch (error: unknown) {
      console.error("Error refreshing user:", error);
      setUser(null);
      setProfile(null);
    }
  };

  return (
    <AuthContext
      value={{
        user,
        profile,
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
