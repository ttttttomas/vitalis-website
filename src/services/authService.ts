import type {UserAdmin, UserCompany, UserPatient, UserProfesional} from "@/types";

import {apiClient} from "@/lib/axios";

export type User = UserAdmin | UserCompany | UserPatient | UserProfesional;

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  token_type: string;
}

export const authService = {
  /**
   * Login de usuario
   */
  async login(credentials: LoginCredentials): Promise<{token: string; user: User}> {
    const formData = new URLSearchParams();

    formData.append("email", credentials.email);
    formData.append("password", credentials.password);

    const response = await apiClient.post<LoginResponse>("/login", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    const {access_token} = response.data;

    // Guardar token
    localStorage.setItem("access_token", access_token);

    // Obtener datos del usuario
    const user = await this.getCurrentUser();

    // Guardar usuario en localStorage
    localStorage.setItem("user", JSON.stringify(user));

    return {token: access_token, user};
  },

  /**
   * Logout de usuario
   */
  async logout(): Promise<void> {
    try {
      await apiClient.post("/logout");
    } catch (_error: unknown) {
      console.error("Error during logout:", _error);
    } finally {
      // Limpiar localStorage
      localStorage.removeItem("access_token");
      localStorage.removeItem("user");
    }
  },

  /**
   * Obtener usuario actual
   */
  async getCurrentUser(): Promise<User> {
    const response = await apiClient.get<User>("/me");

    return response.data;
  },

  /**
   * Verificar token actual
   */
  async verifyToken(): Promise<boolean> {
    try {
      await apiClient.get("/verify-token");

      return true;
    } catch (_error) {
      return false;
    }
  },

  /**
   * Obtener token guardado
   */
  getStoredToken(): string | null {
    if (typeof window === "undefined") return null;

    return localStorage.getItem("access_token");
  },

  /**
   * Obtener usuario guardado
   */
  getStoredUser(): User | null {
    if (typeof window === "undefined") return null;

    const userStr = localStorage.getItem("user");

    if (!userStr) return null;

    try {
      return JSON.parse(userStr) as User;
    } catch {
      return null;
    }
  },
};
