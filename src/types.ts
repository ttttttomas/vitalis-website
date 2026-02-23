export type Roles = "admin" | "company" | "patient" | "professional";

export interface UserAdmin {
  id: string;
  name: string;
  email: string;
  role: "admin";
  first_name: string;
  last_name: string;
  dni: string;
  phone: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserProfessional {
  id: string;
  email: string;
  password: string;
  licence_number: string;
  speciality: string;
  first_name: string;
  dni: number;
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
  name: string;
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
  user_id: string;
  social_security: string;
  phone: string;
  insurance?: string;
  company_id?: string | null;
  createdAt?: string;
  updatedAt?: string;
  study_type?: string;
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

export interface UserProfile {
  company_id: string | null;
  patient_id: string | null;
  professional_id: string | null;
}

export interface AuthenticatedUser {
  user?: UserAdmin | UserCompany | UserPatient | UserProfessional;
  profile?: UserProfile;
}

// Medical Record Interfaces
export interface MedicalRecordSkinExam {
  id: string;
  medical_record_id: string;
  skin_alteration: boolean;
  piercing: boolean;
  tattoo: boolean;
  cicatrices: boolean;
  observations: string;
}

export interface MedicalRecordLaboralExam {
  id: string;
  medical_record_id: string;
  physical: boolean;
  chemical: boolean;
  biological: boolean;
  ergonomic: boolean;
  others: boolean;
  observations: string;
}

export interface MedicalRecordOftalmologicoExam {
  id: string;
  medical_record_id: string;
  cc_oi_nearby: number;
  sc_od_distant: number;
  observations: string;
  cc_od_nearby: number;
  sc_oi_distant: number;
  sc_oi_nearby: number;
  cc_od_distant: number;
  eyes_alterations: boolean;
  sc_od_nearby: number;
  cc_oi_distant: number;
  discromatopsia: boolean;
}

export interface MedicalRecordCardiovascularExam {
  id: string;
  medical_record_id: string;
  ruidos_alterados: boolean;
  pulsos_perifericos_ausentes: boolean;
  observations: string;
  freq_cardiaca: number;
  varices: boolean;
  tension_arterial: number;
  extrasistoles: boolean;
  ritmo_irregular: boolean;
  soplos: boolean;
}

export interface MedicalRecordStudies {
  id: string;
  medical_record_id: string;
  psicometria: boolean;
  ergometria: boolean;
  audiometria: boolean;
  psicotecnico: boolean;
  observations: string;
  drogas_abuso: boolean;
  evaluation_oftalmologica: boolean;
  electro: boolean;
  laboratorio: boolean;
  rx_columna_cervical_frente: boolean;
  test_cereal: boolean;
  rx_torax_frente: boolean;
  espirometria: boolean;
  electroencefalograma: boolean;
  rx_columna_lumbo_sacra_frente: boolean;
}

export interface MedicalRecordNeuroClinicalExam {
  id: string;
  medical_record_id: string;
  reflejos_alterados: boolean;
  ataxia: boolean;
  observations: string;
  apraxia: boolean;
  motilidad_alterada: boolean;
  desorientado: boolean;
  sensibilidad_alterada: boolean;
}

export interface MedicalRecordRespiratorioExam {
  id: string;
  medical_record_id: string;
  murmullo_vesicular: boolean;
  proceso_agudo: boolean;
  observations: string;
  rales: boolean;
  freq_respiratoria: number;
  roncus: boolean;
  deformaciones_toracicas: boolean;
  adenopatias: boolean;
}

export interface MedicalRecordData {
  id: string;
  medical_record_id: string;
  sons: number;
  nacionality: string;
  phone: number;
  tasks: string;
  complete_name: string;
  date_of_birthday: string;
  address: string;
  email: string;
  civil_status: string;
  dni: number;
}

export interface MedicalRecordDigestiveExam {
  id: string;
  medical_record_id: string;
  hernias: boolean;
  observations: string;
  hepatomegalia: boolean;
  dolores_abdominales: boolean;
  cicatrices_quirurgicas: boolean;
  esplenomegalia: boolean;
  hemorroides: boolean;
  adenopatias: boolean;
}

export interface MedicalRecordRecomendations {
  id: string;
  medical_record_id: string;
  no_apto_definitivo: boolean;
  duracion: string;
  observations: string;
  apto: boolean;
  apto_preexistencia_condiciona: boolean;
  no_apto_temporal: boolean;
  apto_preexistencia_no_condiciona: boolean;
}

export interface MedicalRecordClinicalExam {
  id: string;
  medical_record_id: string;
  talla: number;
  peso: number;
  saturacion: number;
  imc: number;
  ta_min: number;
  ta_max: number;
}

export interface MedicalRecordBucodentalExam {
  id: string;
  medical_record_id: string;
  protesis: boolean;
  caries: boolean;
  encias_alteradas: boolean;
  dentadura_parcial: boolean;
  observations: string;
}

export interface MedicalRecordDataImg {
  id: string;
  medical_record_data_id: string;
  url: string;
}

export interface MedicalRecordLaboralHistory {
  id: string;
  medical_record_id: string;
  done_tasks: string;
}

export interface MedicalRecordImmunizations {
  id: string;
  medical_record_id: string;
  sars_cov_2: boolean;
  sars_cov_2_dosis: number;
  fha: boolean;
  triple_adultos_tetanos: boolean;
  hepatitis_a: boolean;
  hepatitis_b: boolean;
}

export interface MedicalRecordGenitourinarioExam {
  id: string;
  medical_record_id: string;
  women_dolores_menstruales: boolean;
  observations: string;
  men_alteraciones_mamarias: boolean;
  women_alteraciones_ginecologicas: boolean;
  women_parto_normal: boolean;
  women_alteraciones_mamarias: boolean;
  women_abortos: boolean;
  women_anticonceptivos: boolean;
  men_alteraciones_testiculares: boolean;
  women_cesarea: boolean;
  women_fum: boolean;
  women_flujos_alterados: boolean;
}

export interface MedicalRecordOsteoarticularExam {
  id: string;
  medical_record_id: string;
  movilidad_rodilla_alterado: boolean;
  tono_trofismo: boolean;
  column_cifosis: boolean;
  column_puntos_dolorosos: boolean;
  observations: string;
  dolor_articular: boolean;
  limitacion_movimientos: boolean;
  column_lordosis: boolean;
  column_escoliosis: boolean;
  movilidad_muñeca_alterado: boolean;
  amputaciones: boolean;
  movilidad_hombro_alterado: boolean;
  movilidad_pie_alterado: boolean;
  movilidad_codo_alterado: boolean;
  movilidad_mano_alterado: boolean;
  column_movilidad_alterada: boolean;
  movilidad_cadera_alterado: boolean;
}

export interface MedicalRecordPersonalHistory {
  id: string;
  medical_record_id: string;
  internations: boolean;
  internations_motive: string;
  covid: boolean;
  fha: boolean;
  dengue: boolean;
}

export interface MedicalRecordOrlExam {
  id: string;
  medical_record_id: string;
  audition_disorders: boolean;
  voice_alterations: boolean;
  observations: string;
  rinitis: boolean;
  amigdalas_pathology: boolean;
  faringe_pathology: boolean;
  adenopatias: boolean;
}

export interface MedicalRecordPsychiatricClinicalExam {
  id: string;
  medical_record_id: string;
  alteraciones_conducta: boolean;
  nerviosismo_excesivo: boolean;
  depresion_psicomotriz: boolean;
  timidez_excesiva: boolean;
  observations: string;
}

export interface MedicalRecordLaboralContacts {
  id: string;
  medical_record_id: string;
  chemicals_products: boolean;
  ionizing_radiation_date: string;
  noisy_environment: boolean;
  other_contamination: boolean;
  animal_products_date: string;
  animal_products: boolean;
  other_contamination_date: string;
  chemicals_products_date: string;
  ionizing_radiation: boolean;
  noisy_environment_date: string;
  dusty_environment_date: string;
  dusty_environment: boolean;
}

export interface MedicalRecordFamilyHistory {
  id: string;
  medical_record_id: string;
  cancer: boolean;
  brothers_alive: boolean;
  diabetes: boolean;
  reumatism: boolean;
  asma: boolean;
  observations: string;
  cardiovascular_illnesses: boolean;
  husband_alive: boolean;
  father_alive: boolean;
  sons_alive: boolean;
  mother_alive: boolean;
  kidney_problems: boolean;
  mental_illnesses: boolean;
  cancer_type: string;
  tuberculosis: boolean;
  sisters_alive: boolean;
  digestive_problems: boolean;
}

export interface MedicalRecordDerivations {
  id: string;
  medical_record_id: string;
  derivations_lastname_especialists: string;
}

export interface MedicalRecordPreviousProblems {
  id: string;
  medical_record_id: string;
  cancer: boolean;
  amputations: boolean;
  memory_loss: boolean;
  hernias: boolean;
  sexual_transmition_diseases: boolean;
  diabetes: boolean;
  others: string;
  other_boolean: boolean;
  excesive_nervious: boolean;
  asma: boolean;
  dizziness_or_fainting: boolean;
  long_cough: boolean;
  medication_type: string;
  sinusitis: boolean;
  medication_actually: boolean;
  mouth_problems: boolean;
  difficulty_pee: boolean;
  seizures: boolean;
  insufficient_air: boolean;
  shoulders_elbows_wrists_pain: boolean;
  bone_breaks: boolean;
  hips_knees_ankles_pain: boolean;
  varices: boolean;
  high_or_low_pressure: boolean;
  eyes_problems: boolean;
  plane_feet: boolean;
  chest_pain: boolean;
  head_pain: boolean;
  neck_pain: boolean;
  back_or_waist_pain: boolean;
  hemorroides: boolean;
  skin_diseases: boolean;
  tuberculosis: boolean;
  hepatitis: boolean;
  ear_problems: boolean;
  chagas: boolean;
  fiebre_reumatica: boolean;
  allergies: boolean;
  palpitations: boolean;
  digestive_problems: boolean;
}

export interface MedicalRecordEvaluationType {
  id: string;
  medical_record_id: string;
  sport_physical_aptitude: boolean;
  post_enf_prolonged: boolean;
  preocupational_exam: boolean;
  periodic_exams: boolean;
  graduation_exam: boolean;
  other: string;
  other_boolean: boolean;
  laboral_change_position: boolean;
}

export interface MedicalRecordHeadExam {
  id: string;
  medical_record_id: string;
  alteration_movility: boolean;
  latidos_carotideos_alterados: boolean;
  tumoraciones_tiroideas: boolean;
  adenopatias: boolean;
  observations: string;
}

export interface MedicalRecordSurgerys {
  id: string;
  medical_record_id: string;
  vesicula_date: string;
  columna_date: string;
  others: boolean;
  testiculos_date: string;
  testiculos: boolean;
  others_date: string;
  columna: boolean;
  vesicula: boolean;
  apendice_date: string;
  varices: boolean;
  amigdala_date: string;
  hernia: boolean;
  hernia_date: string;
  amigdala: boolean;
  varices_date: string;
  apendice: boolean;
}

export interface MedicalRecordHabits {
  id: string;
  medical_record_id: string;
  physic_activity: boolean;
  diet_type: string;
  drugs_type: string;
  sleep_alteration: boolean;
  sleep_hours: number;
  smoke: boolean;
  alcoholic_drinks: boolean;
  drugs: boolean;
  diet: boolean;
  physic_activity_type: string;
  alcoholic_drinks_quantity: number;
  daily_diet: boolean;
  smoke_quantity: number;
  frequency: string;
}

export interface MedicalRecord {
  id: string;
  patient_id: string;
  medical_record_data: MedicalRecordData | null;
  medical_record_evaluation_type: MedicalRecordEvaluationType | null;
  medical_record_skin_exam: MedicalRecordSkinExam | null;
  medical_record_habits: MedicalRecordHabits | null;
  medical_record_family_history: MedicalRecordFamilyHistory | null;
  medical_record_laboral_exam: MedicalRecordLaboralExam | null;
  medical_record_oftalmologico_exam: MedicalRecordOftalmologicoExam | null;
  medical_record_cardiovascular_exam: MedicalRecordCardiovascularExam | null;
  medical_record_studies: MedicalRecordStudies | null;
  medical_record_neuro_clinical_exam: MedicalRecordNeuroClinicalExam | null;
  medical_record_respiratorio_exam: MedicalRecordRespiratorioExam | null;
  medical_record_digestive_exam: MedicalRecordDigestiveExam | null;
  medical_record_recomendations: MedicalRecordRecomendations | null;
  medical_record_clinical_exam: MedicalRecordClinicalExam | null;
  medical_record_bucodental_exam: MedicalRecordBucodentalExam | null;
  medical_record_data_img: MedicalRecordDataImg | null;
  medical_record_laboral_history: MedicalRecordLaboralHistory | null;
  medical_record_immunizations: MedicalRecordImmunizations | null;
  medical_record_genitourinario_exam: MedicalRecordGenitourinarioExam | null;
  medical_record_osteoarticular_exam: MedicalRecordOsteoarticularExam | null;
  medical_record_personal_history: MedicalRecordPersonalHistory | null;
  medical_record_orl_exam: MedicalRecordOrlExam | null;
  medical_record_psychiatric_clinical_exam: MedicalRecordPsychiatricClinicalExam | null;
  medical_record_laboral_contacts: MedicalRecordLaboralContacts | null;
  medical_record_derivations: MedicalRecordDerivations | null;
  medical_record_previous_problems: MedicalRecordPreviousProblems | null;
  medical_record_head_exam: MedicalRecordHeadExam | null;
  medical_record_surgerys: MedicalRecordSurgerys | null;
  fecha_medico_evaluador?: string | null;
  firma_medico_evaluador?: string | null;
  fecha_medico_laboral?: string | null;
  firma_medico_laboral?: string | null;
}
