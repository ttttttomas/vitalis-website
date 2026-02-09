import type {
  UserAdmin,
  UserCompany,
  UserPatient,
  UserProfessional,
  MedicalRecord,
  Studies,
  StudiesCategory,
} from "@/types";

import {apiClient} from "@/lib/axios";

export type User = UserAdmin | UserCompany | UserPatient | UserProfessional;

interface AddUserForm {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export const dataService = {
  /**
   * Obtener todos los pacientes del sistema
   */
  async getPatients(): Promise<UserPatient[]> {
    const response = await apiClient.get(`/patients/getPatients`, {
      withCredentials: true,
    });

    return response.data as UserPatient[];
  },

  /**
   * Obtener todos los profesionales
   */
  async getProfessionals(): Promise<UserProfessional[]> {
    const response = await apiClient.get(`/admin/users/getProfessionals`, {
      withCredentials: true,
    });

    return response.data.users as UserProfessional[];
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
   * Obtener categorias de estudios
   */
  async getCategories(): Promise<StudiesCategory[]> {
    const response = await apiClient.get(`/studies/admin/get_study_categories`, {
      withCredentials: true,
    });

    return response.data.studies_categories as StudiesCategory[];
  },

  /**
   * Crear categoria de estudio
   */
  async createCategory(formData: FormData): Promise<StudiesCategory> {
    const response = await apiClient.post("/studies/admin/create_study_category", formData, {
      withCredentials: true,
      headers: {"Content-Type": "multipart/form-data"},
    });

    return response.data as StudiesCategory;
  },

  /**
   * Eliminar categoria de estudio
   */
  async deleteCategory(category_id: string): Promise<any> {
    const response = await apiClient.delete(`/studies/admin/delete_study_category/${category_id}`, {
      withCredentials: true,
    });

    return response.data;
  },

  /**
   * Subir un estudio para un paciente
   */
  async postStudie(pacient_id: string, formData: FormData): Promise<any> {
    // `https://saludvitalis.org/MdpuF8KsXiRArNlHtl6pXO2XyLSJMTQ8_Vitalis/api/studies/patient/${pacient_id}`,

    const response = await apiClient.post(`/studies/patient/${pacient_id}`, formData, {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  },
  /**
   * Obtener estudios por patient_id
   * @param patient_id - ID del paciente
   */
  async getStudiesByPatientId(patient_id: string): Promise<Studies[]> {
    const response = await apiClient.get(`/studies/patient/${patient_id}`, {
      withCredentials: true,
    });

    console.log(response);

    if (!response.data) throw new Error("Error fetching studies");

    return response.data.studies as Studies[];
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

  /**
   * Obtener datos de empresa
   */
  async getCompanie(): Promise<UserCompany[]> {
    const response = await apiClient.get(`/companies/`, {
      withCredentials: true,
    });

    return response.data.companies as UserCompany[];
  },

  /**
   * Obtener datos de pacientes:
   * Si te logueas como empresa, podes buscar sin poner nada y te aparecen todos tus empleados
   * Si te logueas como admin y buscas como sea (con dni, con company_id, con user_id) te aparecen todos los pacientes, sean con filtro o no.
   * Si te logueas como profesional podes ver o todos los pacientes sin filtrar nada o filtrar con DNI
   */
  async getPatientsFilters(): Promise<UserPatient[]> {
    const response = await apiClient.get(`/patients`, {
      withCredentials: true,
    });

    return response.data.patients as UserPatient[];
  },

  /**
   * Crear usuario admin
   */
  async createUserAdmin(data: AddUserForm): Promise<UserAdmin> {
    const response = await apiClient.post(`/auth/register/admin`, data, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return response.data as UserAdmin;
  },

  /**
   * Crear usuario profesional
   */
  async createUserProfessional(data: AddUserForm): Promise<UserProfessional> {
    const response = await apiClient.post(`/auth/register/professional`, data, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return response.data as UserProfessional;
  },

  /**
   * Crear empleado de empresa
   */
  async createEmployee(id: string, data: UserPatient): Promise<UserPatient> {
    const response = await apiClient.post(`/companies/${id}/employees`, data, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return response.data as UserPatient;
  },

  /**
   * Obtener usuarios filtrado por roles
   */
  async getUsersFilters(role: string): Promise<UserProfessional[] | UserAdmin[]> {
    const response = await apiClient.get(`/admin/users/role/${role}`, {
      withCredentials: true,
    });

    return response.data.users as UserProfessional[] | UserAdmin[];
  },
};
