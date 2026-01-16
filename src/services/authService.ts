import type {
  AuthenticatedUser,
  UserAdmin,
  UserCompany,
  UserPatient,
  UserProfessional,
} from "@/types";

import {apiClient} from "@/lib/axios";

export type User = UserAdmin | UserCompany | UserPatient | UserProfessional;

interface LoginCredentials {
  email: string;
  password: string;
}

interface LoginResponse {
  access_token: string;
  token_type: string;
  user: User;
}

export const authService = {
  /**
   * Login de usuario
   */
  async login(credentials: LoginCredentials): Promise<{token: string; user: AuthenticatedUser}> {
    const formData = new URLSearchParams();

    formData.append("email", credentials.email);
    formData.append("password", credentials.password);

    const response = await apiClient.post<LoginResponse>("/login", formData, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      withCredentials: true,
    });

    // El backend establece la cookie Authorization automáticamente
    // Obtener datos completos del usuario desde /me
    const user = await this.getCurrentUser();

    console.log("user", user);

    return {token: response.data.access_token, user};
  },

  /**
   * Logout de usuario
   */
  async logout(): Promise<void> {
    try {
      await apiClient.post("/logout", null, {
        withCredentials: true,
      });
    } catch (_error: unknown) {
      console.error("Error during logout:", _error);
    }
    // El backend elimina la cookie Authorization automáticamente
  },

  /**
   * Obtener usuario actual
   */
  async getCurrentUser(): Promise<AuthenticatedUser> {
    const response = await apiClient.get("/me", {
      withCredentials: true,
    });

    return response.data as AuthenticatedUser;
  },

  /**
   * Verificar token actual
   */
  async verifyToken(): Promise<boolean> {
    try {
      await apiClient.get("/verify-token", {
        withCredentials: true,
      });

      return true;
    } catch (_error) {
      return false;
    }
  },
};
