import type {
  AuthenticatedUser,
  UserAdmin,
  UserCompany,
  UserPatient,
  UserProfessional,
} from "@/types";

import {apiClient} from "@/lib/axios";

export type User = UserAdmin | UserCompany | UserPatient | UserProfessional;

export const dataService = {
  /**
   * Obtener pacientes particulares
   */

  async getPatients(): Promise<UserPatient[]> {
    const response = await apiClient.get(`/patients/getPatients`, {
      withCredentials: true,
    });

    return response.data as UserPatient[];
  },

  async postStudie(pacient_id: string): Promise<any> {
    const response = await apiClient.post(`/studies/patient/${pacient_id}`, {
      withCredentials: true,
    });

    return response.data;
  },
};
