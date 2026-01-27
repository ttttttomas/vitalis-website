import type {UserAdmin, UserCompany, UserPatient, UserProfessional, MedicalRecord} from "@/types";

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

  /**
   * Obtener paciente por ID
   */
  async getPatientById(patient_id: string): Promise<UserPatient> {
    const response = await apiClient.get(`/patients/${patient_id}`, {
      withCredentials: true,
    });

    return response.data as UserPatient;
  },

  /**
   * Subir un estudio para un paciente
   */
  async postStudie(pacient_id: string, formData: FormData): Promise<any> {
    const response = await apiClient.post(`/studies/patient/${pacient_id}`, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  },

  /**
   * Crear un nuevo medical record completo
   * @param patient_id - ID del paciente
   * @param data - Datos del medical record (objeto JSON)
   * @param data_img - Imagen opcional para medical_record_data
   * @param file - Archivo opcional (firma)
   */
  async createMedicalRecord(
    patient_id: string,
    data: Partial<MedicalRecord>,
    data_img?: File,
    file?: File,
  ): Promise<MedicalRecord> {
    const formData = new FormData();

    // Agregar patient_id
    formData.append("patient_id", patient_id);

    // Agregar data como JSON string
    formData.append("data", JSON.stringify(data));

    // Agregar archivos opcionales si existen
    if (data_img) {
      formData.append("data_img", data_img);
    }

    if (file) {
      formData.append("file", file);
    }

    const response = await apiClient.post(`/medical-records/`, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data as MedicalRecord;
  },

  /**
   * Obtener un medical record por patient_id
   * @param patient_id - ID del paciente
   */
  async getMedicalRecord(patient_id: string): Promise<MedicalRecord[]> {
    const response = await apiClient.get(`/medical-records/patient/${patient_id}`, {
      withCredentials: true,
    });

    if (!response.data) throw new Error("Error fetching medical record");

    return response.data as MedicalRecord[];
  },

  async updateMedicalRecord(
    record_id: string,
    patient_id: string,
    data: Partial<MedicalRecord>,
  ): Promise<MedicalRecord> {
    const formData = new FormData();

    formData.append("patient_id", patient_id);
    formData.append("data", JSON.stringify(data));

    const response = await apiClient.put(`/medical-records/${record_id}`, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data as MedicalRecord;
  },
};
