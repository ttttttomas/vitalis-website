export type Roles = "admin" | "company" | "patient" | "professional";

export interface UserAdmin {
  id: string;
  name: string;
  email: string;
  role: "admin";
  first_name: string;
  last_name: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Studies {
  id: string;
  patient_id: string;
  professional_id?: string;
  created_by_user_id?: string;
  study_type: string;
  created_at?: string;
  status: string;
  study_file: string;
}

export interface UserProfessional {
  id: string;
  email: string;
  password: string;
  licence_number: string;
  speciality: string;
  first_name: string;
  last_name: string;
  role: "professional";
  phone: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserCompany {
  id: string;
  email: string;
  password: string;
  company_name: string;
  responsable_name: string;
  cuit: string;
  company_phone: string;
  company_address: string;
  first_name?: string;
  last_name?: string;
  role: "company";
  phone?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserPatient {
  id: string;
  email: string;
  password: string;
  first_name: string;
  role: "patient";
  last_name: string;
  dni: string;
  date_of_birth: string;
  phone: string;
  insurance?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserProfile {
  company_id: string | null;
  patient_id: string | null;
  professional_id: string | null;
}

export interface AuthenticatedUser {
  user: UserAdmin | UserCompany | UserPatient | UserProfessional;
  profile: UserProfile;
}
