export type Roles = "admin" | "empresa" | "pacientes" | "profesional";

export interface UserAdmin {
  id: string;
  name: string;
  email: string;
  role: Roles;
  first_name: string;
  last_name: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserProfesional {
  id: string;
  email: string;
  password: string;
  licence_number: string;
  speciality: string;
  first_name: string;
  last_name: string;
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
  phone?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserPatient {
  id: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  dni: string;
  date_of_birth: string;
  phone: string;
  createdAt?: string;
  updatedAt?: string;
}
