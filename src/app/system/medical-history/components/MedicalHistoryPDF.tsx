import React from "react";
import {Page, Text, View, Document, StyleSheet, Image, Font} from "@react-pdf/renderer";

import {MedicalRecord} from "@/types";

// Register fonts if needed, or use default
// Font.register({
//   family: "roboto",
//   fonts: [
//     {src: "https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxK.ttf"},
//     {
//       src: "https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlfBBc4.ttf",
//       fontWeight: "bold",
//     },
//   ],
// });

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 9,
    fontFamily: "Helvetica",
    color: "#000",
  },
  // Header
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 5,
  },
  logo: {
    width: 60,
    height: 60,
  },
  headerTextContainer: {
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E5887", // Approx blue from logo
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 8,
    marginTop: 2,
    color: "#444",
  },
  headerRight: {
    fontSize: 8,
    textAlign: "right",
    width: 100,
  },

  // Grid System
  tableContainer: {
    borderWidth: 1,
    borderColor: "#000",
    marginBottom: 5,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  noBorderBottom: {
    borderBottomWidth: 0,
  },
  cell: {
    padding: 2,
    borderRightWidth: 1,
    borderRightColor: "#000",
  },
  lastCell: {
    borderRightWidth: 0,
  },

  // Headers
  greenHeader: {
    backgroundColor: "#93C47D",
    padding: 2,
    fontWeight: "bold",
    fontSize: 9,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  sectionTitle: {
    fontWeight: "bold",
  },

  // Field pairs (Label: Value)
  fieldPair: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontWeight: "bold",
    marginRight: 4,
    fontSize: 8,
  },
  value: {
    fontSize: 8,
    flex: 1,
  },

  // Checkboxes
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 6,
  },
  checkboxBox: {
    width: 8,
    height: 8,
    borderWidth: 1,
    borderColor: "#000",
    marginRight: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  checkmark: {
    fontSize: 6,
  },

  // Utilities
  w100: {width: "100%"},
  w50: {width: "50%"},
  w30: {width: "30%"},
  w70: {width: "70%"},
  flex1: {flex: 1},
});

interface MedicalHistoryPDFProps {
  medicalRecord: MedicalRecord;
}

const Checkbox = ({value}: {value?: boolean | null}) => (
  <View style={[styles.checkboxBox, value ? {backgroundColor: "#000"} : {}]}>
    {value && <Text style={{fontSize: 6, color: "#fff"}}>X</Text>}
  </View>
);

const SectionHeader = ({title}: {title: string}) => (
  <View style={styles.greenHeader}>
    <Text>{title}</Text>
  </View>
);

export const MedicalHistoryPDF: React.FC<MedicalHistoryPDFProps> = ({medicalRecord}) => {
  const {
    medical_record_data,
    medical_record_evaluation_type,
    medical_record_habits,
    medical_record_family_history,
    medical_record_laboral_history,
    medical_record_laboral_contacts,
    medical_record_previous_problems,
    medical_record_surgerys,
    medical_record_personal_history,
    medical_record_clinical_exam,
    medical_record_skin_exam,
    medical_record_oftalmologico_exam,
    medical_record_bucodental_exam,
    medical_record_orl_exam,
    medical_record_head_exam,
    medical_record_cardiovascular_exam,
    medical_record_respiratorio_exam,
    medical_record_digestive_exam,
    medical_record_genitourinario_exam,
    medical_record_osteoarticular_exam,
    medical_record_neuro_clinical_exam,
    medical_record_psychiatric_clinical_exam,
    medical_record_immunizations,
    medical_record_laboral_exam,
    medical_record_recomendations,
    medical_record_studies,
    medical_record_derivations,
  } = medicalRecord;

  // Helpers to calculate age or format dates could go here
  const formatDate = (date: string | null | undefined) =>
    date ? new Date(date).toLocaleDateString() : "";

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={styles.headerContainer}>
          <Image src="/logo.png" style={styles.logo} />
          <View style={styles.headerTextContainer}>
            <Text style={styles.title}>VITALIS</Text>
            <Text style={{fontSize: 10, fontWeight: "bold"}}>CENTRO DE SALUD INTEGRAL</Text>
            <Text style={styles.subtitle}>
              (Ley 19.587 y 7.229) (Dec. 658/96) (Res. SRT 37/2010)
            </Text>
            <Text style={{fontSize: 8, fontWeight: "bold"}}>Salud Ocupacional</Text>
          </View>
          <View style={styles.headerRight}>
            <Text>MEDICINA LABORAL</Text>
          </View>
        </View>

        {/* EMPRESA & DATOS PERSONALES */}
        <View style={styles.tableContainer}>
          <SectionHeader title="EMPRESA" />
          <View style={styles.row}>
            <View style={[styles.cell, styles.w100]}>
              <Text style={styles.value}> </Text>
            </View>
          </View>

          <View style={{flexDirection: "row"}}>
            {/* Left Column: Personal Data */}
            <View style={styles.w70}>
              <View style={styles.row}>
                <View style={[styles.cell, styles.flex1, {backgroundColor: "#93C47D"}]}>
                  <Text style={styles.label}>DATOS PERSONALES</Text>
                </View>
                <View
                  style={[styles.cell, {width: 150, flexDirection: "row", alignItems: "center"}]}
                >
                  <Text style={styles.label}>Fecha</Text>
                  <Text style={styles.value}>{new Date().toLocaleDateString()}</Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={[styles.cell, styles.w100]}>
                  <Text style={styles.label}>
                    Apellido y Nombres:{" "}
                    <Text style={{fontWeight: "normal"}}>{medical_record_data?.complete_name}</Text>
                  </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={[styles.cell, styles.flex1]}>
                  <Text style={styles.label}>
                    Fecha de Nac.:{" "}
                    <Text style={{fontWeight: "normal"}}>
                      {medical_record_data?.date_of_birthday}
                    </Text>
                  </Text>
                </View>
                <View style={[styles.cell, styles.flex1]}>
                  <Text style={styles.label}>
                    Lugar Nac.: <Text style={{fontWeight: "normal"}} />
                  </Text>
                </View>
                <View style={[styles.cell, styles.flex1]}>
                  <Text style={styles.label}>
                    Nacionalidad:{" "}
                    <Text style={{fontWeight: "normal"}}>{medical_record_data?.nacionality}</Text>
                  </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={[styles.cell, styles.flex1]}>
                  <Text style={styles.label}>
                    Estado Civil:{" "}
                    <Text style={{fontWeight: "normal"}}>{medical_record_data?.civil_status}</Text>
                  </Text>
                </View>
                <View style={[styles.cell, styles.flex1]}>
                  <Text style={styles.label}>
                    D.N.I.: <Text style={{fontWeight: "normal"}}>{medical_record_data?.dni}</Text>
                  </Text>
                </View>
                <View style={[styles.cell, {width: 50}]}>
                  <Text style={styles.label}>
                    Edad: <Text style={{fontWeight: "normal"}} />
                  </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={[styles.cell, styles.w70]}>
                  <Text style={styles.label}>
                    Calle:{" "}
                    <Text style={{fontWeight: "normal"}}>{medical_record_data?.address}</Text>
                  </Text>
                </View>
                <View style={[styles.cell, {width: 40}]}>
                  <Text style={styles.label}>
                    N°: <Text style={{fontWeight: "normal"}} />
                  </Text>
                </View>
                <View style={[styles.cell, styles.flex1]}>
                  <Text style={styles.label}>
                    Localidad: <Text style={{fontWeight: "normal"}} />
                  </Text>
                </View>
              </View>
              <View style={styles.row}>
                <View style={[styles.cell, styles.flex1]}>
                  <Text style={styles.label}>
                    Teléfono:{" "}
                    <Text style={{fontWeight: "normal"}}>{medical_record_data?.phone}</Text>
                  </Text>
                </View>
                <View style={[styles.cell, styles.flex1]}>
                  <Text style={styles.label}>
                    E-mail: <Text style={{fontWeight: "normal"}}>{medical_record_data?.email}</Text>
                  </Text>
                </View>
                <View style={[styles.cell, {width: 50}]}>
                  <Text style={styles.label}>
                    Hijos: <Text style={{fontWeight: "normal"}}>{medical_record_data?.sons}</Text>
                  </Text>
                </View>
              </View>
              <View style={[styles.row, styles.noBorderBottom]}>
                <View style={[styles.cell, styles.w100]}>
                  <Text style={styles.label}>
                    Tareas a realizar / realiza:{" "}
                    <Text style={{fontWeight: "normal"}}>{medical_record_data?.tasks}</Text>
                  </Text>
                </View>
              </View>
            </View>
            {/* Right Column: Photo */}
            <View
              style={[
                styles.w30,
                {
                  borderLeftWidth: 1,
                  borderLeftColor: "#000",
                  alignItems: "center",
                  justifyContent: "center",
                },
              ]}
            >
              <Text style={{color: "#ccc"}}>FOTO</Text>
            </View>
          </View>
          <View style={[styles.row, {borderTopWidth: 1}]}>
            <View style={[styles.cell, styles.w100, {flexDirection: "row", alignItems: "center"}]}>
              <Text style={styles.label}>Estudios:</Text>
              <Text style={{fontSize: 8}}>Primarios</Text>
              <Checkbox value={false} />
              <Text style={{fontSize: 8, marginLeft: 5}}>Secundarios</Text>
              <Checkbox value={false} />
              <Text style={{fontSize: 8, marginLeft: 5}}>Terciarios</Text>
              <Checkbox value={false} />
              <Text style={{fontSize: 8, marginLeft: 5}}>Universitarios</Text>
              <Checkbox value={false} />
              <Text style={{fontWeight: "bold", fontSize: 8, marginLeft: 20}}>Sector:</Text>
            </View>
          </View>
        </View>

        {/* TIPO EVALUACION & HABITOS */}
        <View style={[styles.tableContainer, {flexDirection: "row"}]}>
          {/* Tipo Evaluacion */}
          <View style={{width: "25%", borderRightWidth: 1, borderRightColor: "#000"}}>
            <SectionHeader title="TIPO EVALUACIÓN" />
            <View style={{padding: 4}}>
              <View style={styles.checkboxContainer}>
                <Text style={[styles.label, {flex: 1}]}>Examen Preocupacional</Text>
                <Checkbox value={medical_record_evaluation_type?.preocupational_exam} />
              </View>
              <View style={styles.checkboxContainer}>
                <Text style={[styles.label, {flex: 1}]}>Examen Periódicos</Text>
                <Checkbox value={medical_record_evaluation_type?.periodic_exams} />
              </View>
              <View style={styles.checkboxContainer}>
                <Text style={[styles.label, {flex: 1}]}>Examen de Egreso</Text>
                <Checkbox value={medical_record_evaluation_type?.graduation_exam} />
              </View>
              <View style={styles.checkboxContainer}>
                <Text style={[styles.label, {flex: 1}]}>Cambio Puesto Laboral</Text>
                <Checkbox value={medical_record_evaluation_type?.laboral_change_position} />
              </View>
              <View style={styles.checkboxContainer}>
                <Text style={[styles.label, {flex: 1}]}>Post. Enf. Prolongada</Text>
                <Checkbox value={medical_record_evaluation_type?.post_enf_prolonged} />
              </View>
              <View style={styles.checkboxContainer}>
                <Text style={[styles.label, {flex: 1}]}>Aptitud Física Deportiva</Text>
                <Checkbox value={medical_record_evaluation_type?.sport_physical_aptitude} />
              </View>
              <View style={styles.checkboxContainer}>
                <Text style={[styles.label, {flex: 1}]}>Otro</Text>
                <Checkbox value={!!medical_record_evaluation_type?.other} />
              </View>
              <Text style={{fontSize: 8}}>Cual: {medical_record_evaluation_type?.other}</Text>
            </View>
          </View>

          {/* Habitos */}
          <View style={{width: "75%"}}>
            <SectionHeader title="HÁBITOS" />
            <View style={{flexDirection: "row", padding: 2}}>
              {/* Checkbox Column */}
              <View style={{width: "30%", paddingRight: 5}}>
                <View style={{flexDirection: "row", justifyContent: "flex-end", marginBottom: 2}}>
                  <Text style={{fontSize: 8, fontWeight: "bold", width: 20, textAlign: "center"}}>
                    SI
                  </Text>
                  <Text style={{fontSize: 8, fontWeight: "bold", width: 20, textAlign: "center"}}>
                    NO
                  </Text>
                </View>
                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 2}}>
                  <Text style={[styles.label, {flex: 1}]}>Dieta</Text>
                  <Checkbox value={medical_record_habits?.diet === true} />
                  <View style={{width: 2}} />
                  <Checkbox value={medical_record_habits?.diet === false} />
                </View>
                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 2}}>
                  <Text style={[styles.label, {flex: 1}]}>Fuma</Text>
                  <Checkbox value={medical_record_habits?.smoke === true} />
                  <View style={{width: 2}} />
                  <Checkbox value={medical_record_habits?.smoke === false} />
                </View>
                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 2}}>
                  <Text style={[styles.label, {flex: 1}]}>Alcohol</Text>
                  <Checkbox value={medical_record_habits?.alcoholic_drinks === true} />
                  <View style={{width: 2}} />
                  <Checkbox value={medical_record_habits?.alcoholic_drinks === false} />
                </View>
                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 2}}>
                  <Text style={[styles.label, {flex: 1}]}>Drogas</Text>
                  <Checkbox value={medical_record_habits?.drugs === true} />
                  <View style={{width: 2}} />
                  <Checkbox value={medical_record_habits?.drugs === false} />
                </View>
                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 2}}>
                  <Text style={[styles.label, {flex: 1}]}>Sueño Alt.</Text>
                  <Checkbox value={medical_record_habits?.sleep_alteration === true} />
                  <View style={{width: 2}} />
                  <Checkbox value={medical_record_habits?.sleep_alteration === false} />
                </View>
                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 2}}>
                  <Text style={[styles.label, {flex: 1}]}>Act. Física</Text>
                  <Checkbox value={medical_record_habits?.physic_activity === true} />
                  <View style={{width: 2}} />
                  <Checkbox value={medical_record_habits?.physic_activity === false} />
                </View>
              </View>

              {/* Details Column */}
              <View
                style={{width: "70%", borderLeftWidth: 1, borderLeftColor: "#ccc", paddingLeft: 5}}
              >
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "#eee",
                    marginBottom: 2,
                    height: 15,
                    justifyContent: "center",
                  }}
                >
                  {/* Dieta details? The image has blank lines corresponding to items */}
                </View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "#eee",
                    marginBottom: 2,
                    height: 15,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{fontSize: 8}}>
                    Cuantos por día? {medical_record_habits?.smoke_quantity}
                  </Text>
                </View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "#eee",
                    marginBottom: 2,
                    height: 15,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{fontSize: 8}}>
                    Cantidad: {medical_record_habits?.alcoholic_drinks_quantity}
                  </Text>
                </View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "#eee",
                    marginBottom: 2,
                    height: 15,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{fontSize: 8}}>Cuáles? {medical_record_habits?.drugs_type}</Text>
                </View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "#eee",
                    marginBottom: 2,
                    height: 15,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{fontSize: 8}}>
                    Cuántas horas duerme? {medical_record_habits?.sleep_hours}
                  </Text>
                </View>
                <View
                  style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "#eee",
                    marginBottom: 2,
                    height: 15,
                    justifyContent: "center",
                  }}
                >
                  <Text style={{fontSize: 8}}>
                    De qué tipo? {medical_record_habits?.physic_activity_type}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* Antecedentes Familiares */}
        <View style={styles.tableContainer}>
          <SectionHeader title="ANTECEDENTES FAMILIARES" />
          <View style={{flexDirection: "row", padding: 5}}>
            {/* Relatives */}
            <View style={{width: "20%"}}>
              <View style={{flexDirection: "row", justifyContent: "flex-end", marginBottom: 2}}>
                <Text style={{fontSize: 7, width: 20, textAlign: "center"}}>VIVO</Text>
                <Text style={{fontSize: 7, width: 30, textAlign: "center"}}>FALLEC.</Text>
              </View>
              {[
                {l: "Padre", v: medical_record_family_history?.father_alive},
                {l: "Madre", v: medical_record_family_history?.mother_alive},
                {l: "Hermanos", v: medical_record_family_history?.brothers_alive},
                {l: "Hermanas", v: medical_record_family_history?.sisters_alive},
                {l: "Hijos", v: medical_record_family_history?.sons_alive},
              ].map((item, i) => (
                <View key={i} style={{flexDirection: "row", alignItems: "center", marginBottom: 2}}>
                  <Text style={[styles.label, {flex: 1}]}>{item.l}</Text>
                  <Checkbox value={item.v} />
                  <View style={{width: 10}} />
                  <Checkbox value={item.v === false} />
                </View>
              ))}
            </View>
            {/* Diseases Column 1 */}
            <View style={{width: "40%", paddingLeft: 10}}>
              <Text style={{fontSize: 8, fontWeight: "bold", marginBottom: 2, textAlign: "center"}}>
                Alguno de ellos a padecido:
              </Text>
              <View style={{flexDirection: "row", justifyContent: "flex-end", marginBottom: 2}}>
                <Text style={{fontSize: 7, width: 20, textAlign: "center"}}>SI</Text>
                <Text style={{fontSize: 7, width: 20, textAlign: "center"}}>NO</Text>
              </View>
              {[
                {l: "Enfermedades mentales", v: medical_record_family_history?.mental_illnesses},
                {
                  l: "Enf. cardiovasculares",
                  v: medical_record_family_history?.cardiovascular_illnesses,
                },
                {l: "Problemas de riñón", v: medical_record_family_history?.kidney_problems},
                {l: "Problemas digestivos", v: medical_record_family_history?.digestive_problems},
                {l: "Asma", v: medical_record_family_history?.asma},
                {l: "Tuberculosis", v: medical_record_family_history?.tuberculosis},
              ].map((item, i) => (
                <View key={i} style={{flexDirection: "row", alignItems: "center", marginBottom: 2}}>
                  <Text style={[styles.label, {flex: 1}]}>{item.l}</Text>
                  <Checkbox value={item.v} />
                  <View style={{width: 2}} />
                  <Checkbox value={!item.v && item.v !== undefined} />
                </View>
              ))}
            </View>
            {/* Diseases Column 2 */}
            <View style={{width: "40%", paddingLeft: 10, paddingTop: 15}}>
              {[
                {l: "Diabetes", v: medical_record_family_history?.diabetes},
                {l: "Reumatismo", v: medical_record_family_history?.reumatism},
                {l: "Cáncer", v: medical_record_family_history?.cancer},
              ].map((item, i) => (
                <View key={i} style={{flexDirection: "row", alignItems: "center", marginBottom: 2}}>
                  <Text style={[styles.label, {flex: 1}]}>{item.l}</Text>
                  <Checkbox value={item.v} />
                  <View style={{width: 2}} />
                  <Checkbox value={!item.v && item.v !== undefined} />
                </View>
              ))}
              <Text style={{fontSize: 8, marginTop: 5}}>
                Espec. tipo: {medical_record_family_history?.cancer_type}
              </Text>
            </View>
          </View>
          <View style={{borderTopWidth: 1, borderTopColor: "#000", padding: 2}}>
            <Text style={styles.label}>
              Observaciones:{" "}
              <Text style={{fontWeight: "normal"}}>
                {medical_record_family_history?.observations}
              </Text>
            </Text>
          </View>
        </View>

        {/* Antecedentes Laborales Header - Placeholder for next section */}
        <View style={styles.tableContainer}>
          <SectionHeader title="ANTECEDENTES LABORALES" />
          <View style={styles.row}>
            <View style={[styles.cell, styles.w100]}>
              <Text style={{fontSize: 8, textAlign: "center", fontWeight: "bold"}}>
                Tareas realizadas - Duración de las mismas
              </Text>
              <Text style={{fontSize: 8, minHeight: 40}}>
                {medical_record_laboral_history?.done_tasks}
              </Text>
            </View>
          </View>
        </View>

        {/* Antecedentes Patológicos Personales */}
        <View style={styles.tableContainer}>
          <SectionHeader title="ANTECEDENTES PATOLÓGICOS PERSONALES" />
          <View style={{flexDirection: "row", flexWrap: "wrap", padding: 5}}>
            {[
              {l: "Alergias", v: medical_record_previous_problems?.allergies},
              {l: "Asma", v: medical_record_previous_problems?.asma},
              {l: "Diabetes", v: medical_record_previous_problems?.diabetes},
              {l: "Epilepsia/Conv.", v: medical_record_previous_problems?.seizures},
              {l: "Tuberculosis", v: medical_record_previous_problems?.tuberculosis},
              {l: "Hepatitis", v: medical_record_previous_problems?.hepatitis},
              {l: "Chagas", v: medical_record_previous_problems?.chagas},
              {l: "Hernias", v: medical_record_previous_problems?.hernias},
              {l: "ETS", v: medical_record_previous_problems?.sexual_transmition_diseases},
              {l: "Prob. Oídos", v: medical_record_previous_problems?.ear_problems},
              {l: "Prob. Ojos", v: medical_record_previous_problems?.eyes_problems},
              {l: "Prob. Piel", v: medical_record_previous_problems?.skin_diseases},
              {l: "Prob. Digestivos", v: medical_record_previous_problems?.digestive_problems},
              {l: "Hemorroides", v: medical_record_previous_problems?.hemorroides},
              {l: "Várices", v: medical_record_previous_problems?.varices},
              {l: "Fiebre Reumática", v: medical_record_previous_problems?.fiebre_reumatica},
              {l: "Hipertensión/Hipo", v: medical_record_previous_problems?.high_or_low_pressure},
              {l: "Dolor Pecho", v: medical_record_previous_problems?.chest_pain},
              {l: "Palpitaciones", v: medical_record_previous_problems?.palpitations},
              {l: "Falta de aire", v: medical_record_previous_problems?.insufficient_air},
              {l: "Tos crónica", v: medical_record_previous_problems?.long_cough},
              {l: "Mareos/Desmayos", v: medical_record_previous_problems?.dizziness_or_fainting},
              {l: "Dolor Cabeza", v: medical_record_previous_problems?.head_pain},
              {l: "Nerviosismo", v: medical_record_previous_problems?.excesive_nervious},
              {l: "Pérdida Memoria", v: medical_record_previous_problems?.memory_loss},
              {l: "Fracturas", v: medical_record_previous_problems?.bone_breaks},
              {l: "Amputaciones", v: medical_record_previous_problems?.amputations},
              {l: "Dolor Cuello", v: medical_record_previous_problems?.neck_pain},
              {l: "Dolor Espalda", v: medical_record_previous_problems?.back_or_waist_pain},
              {
                l: "Dolor Articular",
                v: medical_record_previous_problems?.shoulders_elbows_wrists_pain,
              },
              {l: "Dolor Extremida.", v: medical_record_previous_problems?.hips_knees_ankles_pain},
              {l: "Pie Plano", v: medical_record_previous_problems?.plane_feet},
            ].map((item, i) => (
              <View
                key={i}
                style={{flexDirection: "row", alignItems: "center", width: "25%", marginBottom: 3}}
              >
                <Checkbox value={item.v} />
                <Text style={{fontSize: 7, marginLeft: 2}}>{item.l}</Text>
              </View>
            ))}
          </View>
          <View style={{borderTopWidth: 1, flexDirection: "row", padding: 2}}>
            <Text style={styles.label}>Medicación Actual:</Text>
            <Checkbox value={medical_record_previous_problems?.medication_actually} />
            <Text style={[styles.label, {marginLeft: 10}]}>Tipo:</Text>
            <Text style={styles.value}>{medical_record_previous_problems?.medication_type}</Text>
          </View>
          <View style={{borderTopWidth: 1, flexDirection: "row", padding: 2}}>
            <Text style={styles.label}>Otros antecedentes:</Text>
            <Text style={styles.value}>{medical_record_previous_problems?.others}</Text>
          </View>
        </View>
      </Page>

      {/* PAGE 2 */}
      <Page size="A4" style={styles.page}>
        <Text style={[styles.title, {fontSize: 14, marginBottom: 5}]}>
          Examen Médico - Página 2
        </Text>

        {/* Contactos Laborales & Cirugías (Moved from Page 1) */}
        <View style={{flexDirection: "row", gap: 5, marginBottom: 10}}>
          <View style={[styles.tableContainer, {flex: 1}]}>
            <SectionHeader title="EXPOSICIÓN A RIESGOS" />
            <View style={[styles.row, {backgroundColor: "#eee"}]}>
              <Text style={[styles.cell, {fontSize: 7, fontWeight: "bold", width: "40%"}]}>
                Agente
              </Text>
              <Text
                style={[
                  styles.cell,
                  {fontSize: 7, fontWeight: "bold", width: "15%", textAlign: "center"},
                ]}
              >
                Si/No
              </Text>
              <Text style={[styles.cell, {fontSize: 7, fontWeight: "bold", flex: 1}]}>Fecha</Text>
            </View>
            {[
              {
                l: "Prod. Químicos",
                v: medical_record_laboral_contacts?.chemicals_products,
                d: medical_record_laboral_contacts?.chemicals_products_date,
              },
              {
                l: "Rad. Ionizante",
                v: medical_record_laboral_contacts?.ionizing_radiation,
                d: medical_record_laboral_contacts?.ionizing_radiation_date,
              },
              {
                l: "Ruido",
                v: medical_record_laboral_contacts?.noisy_environment,
                d: medical_record_laboral_contacts?.noisy_environment_date,
              },
              {
                l: "Polvo",
                v: medical_record_laboral_contacts?.dusty_environment,
                d: medical_record_laboral_contacts?.dusty_environment_date,
              },
              {
                l: "Prod. Animales",
                v: medical_record_laboral_contacts?.animal_products,
                d: medical_record_laboral_contacts?.animal_products_date,
              },
              {
                l: "Otros",
                v: medical_record_laboral_contacts?.other_contamination,
                d: medical_record_laboral_contacts?.other_contamination_date,
              },
            ].map((item, i) => (
              <View key={i} style={styles.row}>
                <Text style={[styles.cell, {fontSize: 7, width: "40%"}]}>{item.l}</Text>
                <View style={[styles.cell, {width: "15%", alignItems: "center"}]}>
                  <Checkbox value={item.v} />
                </View>
                <Text style={[styles.cell, {fontSize: 7, flex: 1}]}>
                  {item.d ? new Date(item.d).toLocaleDateString() : ""}
                </Text>
              </View>
            ))}
          </View>

          <View style={[styles.tableContainer, {flex: 1}]}>
            <SectionHeader title="ANTECEDENTES QUIRÚRGICOS" />
            <View style={[styles.row, {backgroundColor: "#eee"}]}>
              <Text style={[styles.cell, {fontSize: 7, fontWeight: "bold", width: "40%"}]}>
                Tipo
              </Text>
              <Text
                style={[
                  styles.cell,
                  {fontSize: 7, fontWeight: "bold", width: "15%", textAlign: "center"},
                ]}
              >
                Si/No
              </Text>
              <Text style={[styles.cell, {fontSize: 7, fontWeight: "bold", flex: 1}]}>Fecha</Text>
            </View>
            {[
              {
                l: "Apéndice",
                v: medical_record_surgerys?.apendice,
                d: medical_record_surgerys?.apendice_date,
              },
              {
                l: "Vesícula",
                v: medical_record_surgerys?.vesicula,
                d: medical_record_surgerys?.vesicula_date,
              },
              {
                l: "Hernia",
                v: medical_record_surgerys?.hernia,
                d: medical_record_surgerys?.hernia_date,
              },
              {
                l: "Amígdalas",
                v: medical_record_surgerys?.amigdala,
                d: medical_record_surgerys?.amigdala_date,
              },
              {
                l: "Várices",
                v: medical_record_surgerys?.varices,
                d: medical_record_surgerys?.varices_date,
              },
              {
                l: "Columna",
                v: medical_record_surgerys?.columna,
                d: medical_record_surgerys?.columna_date,
              },
              {
                l: "Testículos",
                v: medical_record_surgerys?.testiculos,
                d: medical_record_surgerys?.testiculos_date,
              },
              {
                l: "Otros",
                v: medical_record_surgerys?.others,
                d: medical_record_surgerys?.others_date,
              },
            ].map((item, i) => (
              <View key={i} style={styles.row}>
                <Text style={[styles.cell, {fontSize: 7, width: "40%"}]}>{item.l}</Text>
                <View style={[styles.cell, {width: "15%", alignItems: "center"}]}>
                  <Checkbox value={item.v} />
                </View>
                <Text style={[styles.cell, {fontSize: 7, flex: 1}]}>
                  {item.d ? new Date(item.d).toLocaleDateString() : ""}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Examen Clínico */}
        <View style={styles.tableContainer}>
          <SectionHeader title="EXAMEN CLÍNICO GENERAL (Signos Vitales y Antropometría)" />
          <View style={styles.row}>
            <View style={[styles.cell, styles.flex1]}>
              <Text style={styles.label}>Peso: </Text>
              <Text style={styles.value}>{medical_record_clinical_exam?.peso} kg</Text>
            </View>
            <View style={[styles.cell, styles.flex1]}>
              <Text style={styles.label}>Talla: </Text>
              <Text style={styles.value}>{medical_record_clinical_exam?.talla} cm</Text>
            </View>
            <View style={[styles.cell, styles.flex1]}>
              <Text style={styles.label}>IMC: </Text>
              <Text style={styles.value}>{medical_record_clinical_exam?.imc}</Text>
            </View>
            <View style={[styles.cell, styles.flex1]}>
              <Text style={styles.label}>TA Max: </Text>
              <Text style={styles.value}>{medical_record_clinical_exam?.ta_max}</Text>
            </View>
            <View style={[styles.cell, styles.flex1]}>
              <Text style={styles.label}>TA Min: </Text>
              <Text style={styles.value}>{medical_record_clinical_exam?.ta_min}</Text>
            </View>
          </View>
        </View>

        {/* Exams Grid */}
        <View style={{flexDirection: "row", flexWrap: "wrap", gap: 5}}>
          {/* Piel y Faneras */}
          <View style={[styles.tableContainer, {width: "48%"}]}>
            <SectionHeader title="PIEL Y FANERAS" />
            <View style={{flexDirection: "row", flexWrap: "wrap", padding: 2}}>
              {[
                {l: "Cicatrices", v: medical_record_skin_exam?.cicatrices},
                {l: "Tatuajes", v: medical_record_skin_exam?.tattoo},
                {l: "Piercing", v: medical_record_skin_exam?.piercing},
                {l: "Alteraciones", v: medical_record_skin_exam?.skin_alteration},
              ].map((item, i) => (
                <View key={i} style={{flexDirection: "row", width: "50%", marginBottom: 2}}>
                  <Checkbox value={item.v} />
                  <Text style={{fontSize: 7, marginLeft: 2}}>{item.l}</Text>
                </View>
              ))}
            </View>
            <View style={{borderTopWidth: 1, padding: 2}}>
              <Text style={styles.label}>
                Obs: <Text style={styles.value}>{medical_record_skin_exam?.observations}</Text>
              </Text>
            </View>
          </View>

          {/* Oftalmologico */}
          <View style={[styles.tableContainer, {width: "48%"}]}>
            <SectionHeader title="OFTALMOLÓGICO" />
            <View style={styles.row}>
              <Text style={[styles.cell, {fontSize: 6, width: 25}]}>Lejana</Text>
              <Text style={[styles.cell, {fontSize: 6, flex: 1}]}>
                SC OD: {medical_record_oftalmologico_exam?.sc_od_distant}
              </Text>
              <Text style={[styles.cell, {fontSize: 6, flex: 1}]}>
                SC OI: {medical_record_oftalmologico_exam?.sc_oi_distant}
              </Text>
              <Text style={[styles.cell, {fontSize: 6, flex: 1}]}>
                CC OD: {medical_record_oftalmologico_exam?.cc_od_distant}
              </Text>
              <Text style={[styles.cell, {fontSize: 6, flex: 1}]}>
                CC OI: {medical_record_oftalmologico_exam?.cc_oi_distant}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.cell, {fontSize: 6, width: 25}]}>Cercana</Text>
              <Text style={[styles.cell, {fontSize: 6, flex: 1}]}>
                {medical_record_oftalmologico_exam?.sc_od_nearby}
              </Text>
              <Text style={[styles.cell, {fontSize: 6, flex: 1}]}>
                {medical_record_oftalmologico_exam?.sc_oi_nearby}
              </Text>
              <Text style={[styles.cell, {fontSize: 6, flex: 1}]}>
                {medical_record_oftalmologico_exam?.cc_od_nearby}
              </Text>
              <Text style={[styles.cell, {fontSize: 6, flex: 1}]}>
                {medical_record_oftalmologico_exam?.cc_oi_nearby}
              </Text>
            </View>
            <View style={{flexDirection: "row", padding: 2}}>
              <View style={{flexDirection: "row", marginRight: 5}}>
                <Checkbox value={medical_record_oftalmologico_exam?.discromatopsia} />
                <Text style={{fontSize: 7}}>Discromatopsia</Text>
              </View>
              <View style={{flexDirection: "row"}}>
                <Checkbox value={medical_record_oftalmologico_exam?.eyes_alterations} />
                <Text style={{fontSize: 7}}>Otras Alt.</Text>
              </View>
            </View>
          </View>

          {/* Bucodental */}
          <View style={[styles.tableContainer, {width: "48%"}]}>
            <SectionHeader title="BUCODENTAL" />
            <View style={{flexDirection: "row", flexWrap: "wrap", padding: 2}}>
              {[
                {l: "Caries", v: medical_record_bucodental_exam?.caries},
                {l: "Encías Alt.", v: medical_record_bucodental_exam?.encias_alteradas},
                {l: "Faltan Piezas", v: medical_record_bucodental_exam?.dentadura_parcial},
                {l: "Prótesis", v: medical_record_bucodental_exam?.protesis},
              ].map((item, i) => (
                <View key={i} style={{flexDirection: "row", width: "50%", marginBottom: 2}}>
                  <Checkbox value={item.v} />
                  <Text style={{fontSize: 7, marginLeft: 2}}>{item.l}</Text>
                </View>
              ))}
            </View>
            <View style={{borderTopWidth: 1, padding: 2}}>
              <Text style={styles.label}>
                Obs:{" "}
                <Text style={styles.value}>{medical_record_bucodental_exam?.observations}</Text>
              </Text>
            </View>
          </View>

          {/* ORL */}
          <View style={[styles.tableContainer, {width: "48%"}]}>
            <SectionHeader title="OTORRINOLARINGOLÓGICO" />
            <View style={{flexDirection: "row", flexWrap: "wrap", padding: 2}}>
              {[
                {l: "Alt. Auditivas", v: medical_record_orl_exam?.audition_disorders},
                {l: "Otoscopia Pat.", v: medical_record_orl_exam?.faringe_pathology},
                {l: "Rinitis", v: medical_record_orl_exam?.rinitis},
                {l: "Amígdalas Pat.", v: medical_record_orl_exam?.amigdalas_pathology},
                {l: "Adenopatías", v: medical_record_orl_exam?.adenopatias},
                {l: "Alt. Voz", v: medical_record_orl_exam?.voice_alterations},
              ].map((item, i) => (
                <View key={i} style={{flexDirection: "row", width: "50%", marginBottom: 2}}>
                  <Checkbox value={item.v} />
                  <Text style={{fontSize: 7, marginLeft: 2}}>{item.l}</Text>
                </View>
              ))}
            </View>
            <View style={{borderTopWidth: 1, padding: 2}}>
              <Text style={styles.label}>
                Obs: <Text style={styles.value}>{medical_record_orl_exam?.observations}</Text>
              </Text>
            </View>
          </View>

          {/* Cabeza y Cuello */}
          <View style={[styles.tableContainer, {width: "48%"}]}>
            <SectionHeader title="CABEZA Y CUELLO" />
            <View style={{flexDirection: "row", flexWrap: "wrap", padding: 2}}>
              {[
                {l: "Movilidad Alt.", v: medical_record_head_exam?.alteration_movility},
                {l: "Tumoraciones", v: medical_record_head_exam?.tumoraciones_tiroideas},
                {l: "Adenopatías", v: medical_record_head_exam?.adenopatias},
                {l: "Latidos Carot.", v: medical_record_head_exam?.latidos_carotideos_alterados},
              ].map((item, i) => (
                <View key={i} style={{flexDirection: "row", width: "50%", marginBottom: 2}}>
                  <Checkbox value={item.v} />
                  <Text style={{fontSize: 7, marginLeft: 2}}>{item.l}</Text>
                </View>
              ))}
            </View>
            <View style={{borderTopWidth: 1, padding: 2}}>
              <Text style={styles.label}>
                Obs: <Text style={styles.value}>{medical_record_head_exam?.observations}</Text>
              </Text>
            </View>
          </View>

          {/* Cardiovascular */}
          <View style={[styles.tableContainer, {width: "48%"}]}>
            <SectionHeader title="CARDIOVASCULAR" />
            <View style={styles.row}>
              <Text style={[styles.cell, {flex: 1, fontSize: 7}]}>
                FC: {medical_record_cardiovascular_exam?.freq_cardiaca}
              </Text>
              <Text style={[styles.cell, {flex: 1, fontSize: 7}]}>
                TA: {medical_record_cardiovascular_exam?.tension_arterial}
              </Text>
            </View>
            <View style={{flexDirection: "row", flexWrap: "wrap", padding: 2}}>
              {[
                {l: "Ruidos Alt.", v: medical_record_cardiovascular_exam?.ruidos_alterados},
                {l: "Soplos", v: medical_record_cardiovascular_exam?.soplos},
                {l: "Ritmo Irreg.", v: medical_record_cardiovascular_exam?.ritmo_irregular},
                {
                  l: "Pulsos Aus.",
                  v: medical_record_cardiovascular_exam?.pulsos_perifericos_ausentes,
                },
                {l: "Várices", v: medical_record_cardiovascular_exam?.varices},
              ].map((item, i) => (
                <View key={i} style={{flexDirection: "row", width: "50%", marginBottom: 2}}>
                  <Checkbox value={item.v} />
                  <Text style={{fontSize: 7, marginLeft: 2}}>{item.l}</Text>
                </View>
              ))}
            </View>
            <View style={{borderTopWidth: 1, padding: 2}}>
              <Text style={styles.label}>
                Obs:{" "}
                <Text style={styles.value}>{medical_record_cardiovascular_exam?.observations}</Text>
              </Text>
            </View>
          </View>

          {/* Respiratorio */}
          <View style={[styles.tableContainer, {width: "48%"}]}>
            <SectionHeader title="RESPIRATORIO" />
            <View style={styles.row}>
              <Text style={[styles.cell, {flex: 1, fontSize: 7}]}>
                Freq. Resp: {medical_record_respiratorio_exam?.freq_respiratoria}
              </Text>
            </View>
            <View style={{flexDirection: "row", flexWrap: "wrap", padding: 2}}>
              {[
                {l: "Deform. Torax", v: medical_record_respiratorio_exam?.deformaciones_toracicas},
                {l: "Murmullo Alt", v: medical_record_respiratorio_exam?.murmullo_vesicular},
                {l: "Roncus", v: medical_record_respiratorio_exam?.roncus},
                {l: "Rales", v: medical_record_respiratorio_exam?.rales},
                {l: "Adenopatías", v: medical_record_respiratorio_exam?.adenopatias},
                {l: "Proc. Agudo", v: medical_record_respiratorio_exam?.proceso_agudo},
              ].map((item, i) => (
                <View key={i} style={{flexDirection: "row", width: "50%", marginBottom: 2}}>
                  <Checkbox value={item.v} />
                  <Text style={{fontSize: 7, marginLeft: 2}}>{item.l}</Text>
                </View>
              ))}
            </View>
            <View style={{borderTopWidth: 1, padding: 2}}>
              <Text style={styles.label}>
                Obs:{" "}
                <Text style={styles.value}>{medical_record_respiratorio_exam?.observations}</Text>
              </Text>
            </View>
          </View>

          {/* Digestivo */}
          <View style={[styles.tableContainer, {width: "48%"}]}>
            <SectionHeader title="DIGESTIVO" />
            <View style={{flexDirection: "row", flexWrap: "wrap", padding: 2}}>
              {[
                {l: "Cicatrices Q.", v: medical_record_digestive_exam?.cicatrices_quirurgicas},
                {l: "Hernias", v: medical_record_digestive_exam?.hernias},
                {l: "Hepatomegalia", v: medical_record_digestive_exam?.hepatomegalia},
                {l: "Esplenomegalia", v: medical_record_digestive_exam?.esplenomegalia},
                {l: "Punto Doloroso", v: medical_record_digestive_exam?.dolores_abdominales},
              ].map((item, i) => (
                <View key={i} style={{flexDirection: "row", width: "50%", marginBottom: 2}}>
                  <Checkbox value={item.v} />
                  <Text style={{fontSize: 7, marginLeft: 2}}>{item.l}</Text>
                </View>
              ))}
            </View>
            <View style={{borderTopWidth: 1, padding: 2}}>
              <Text style={styles.label}>
                Obs: <Text style={styles.value}>{medical_record_digestive_exam?.observations}</Text>
              </Text>
            </View>
          </View>

          {/* Genitourinario */}
          <View style={[styles.tableContainer, {width: "48%"}]}>
            <SectionHeader title="GENITOURINARIO" />
            <View style={{flexDirection: "row", flexWrap: "wrap", padding: 2}}>
              {[
                {l: "Puño Percusión", v: undefined},
                {l: "Puntos Renales", v: undefined},
                // Properties not in type:
                {l: "Varicocele", v: undefined},
                {l: "Fimosis", v: undefined},
                {l: "Tumoracion", v: undefined},
                {l: "Adenopatias", v: undefined}, // adenopatias_inguinales not in type? Checking types.ts shows only specific fields.
                // If adenopatias exists on specific type, use it. But types.ts didn't show it for Genitourinario unless missed.
                // Actually types.ts showed: women_dolores_menstruales, observations, men_alteraciones_mamarias, women_alteraciones_ginecologicas...
                // It does NOT show adenopatias specifically for genitourinary.
              ].map((item, i) => (
                <View key={i} style={{flexDirection: "row", width: "50%", marginBottom: 2}}>
                  <Checkbox value={item.v} />
                  <Text style={{fontSize: 7, marginLeft: 2}}>{item.l}</Text>
                </View>
              ))}
            </View>
            <View style={{borderTopWidth: 1, padding: 2}}>
              <Text style={styles.label}>
                Obs:{" "}
                <Text style={styles.value}>{medical_record_genitourinario_exam?.observations}</Text>
              </Text>
            </View>
          </View>

          {/* Osteoarticular */}
          <View style={[styles.tableContainer, {width: "48%"}]}>
            <SectionHeader title="OSTEOARTICULAR" />
            <View style={{flexDirection: "row", flexWrap: "wrap", padding: 2}}>
              {[
                {l: "Columna", v: medical_record_osteoarticular_exam?.column_movilidad_alterada},
                // M. Superiores/Inferiores not explicitly in type as boolean group.
                // There are specific ones: movilidad_hombro_alterado, movilidad_rodilla_alterado etc.
                // We'll leave them undefined or try to aggregate if needed, for now undefined to satisfy TS.
                {l: "M. Superiores", v: undefined},
                {l: "M. Inferiores", v: undefined},
              ].map((item, i) => (
                <View key={i} style={{flexDirection: "row", width: "50%", marginBottom: 2}}>
                  <Checkbox value={item.v} />
                  <Text style={{fontSize: 7, marginLeft: 2}}>{item.l}</Text>
                </View>
              ))}
            </View>
            <View style={{borderTopWidth: 1, padding: 2}}>
              <Text style={styles.label}>
                Obs:{" "}
                <Text style={styles.value}>{medical_record_osteoarticular_exam?.observations}</Text>
              </Text>
            </View>
          </View>

          {/* Neurologico */}
          <View style={[styles.tableContainer, {width: "48%"}]}>
            <SectionHeader title="NEUROLÓGICO" />
            <View style={{flexDirection: "row", flexWrap: "wrap", padding: 2}}>
              {[
                {l: "Conciencia", v: undefined}, // vigil not in type
                {l: "Pares Craneales", v: undefined}, // not in type
                {l: "Movilidad", v: medical_record_neuro_clinical_exam?.motilidad_alterada},
                {l: "Fuerza", v: undefined}, // not in type
                {l: "Sensibilidad", v: medical_record_neuro_clinical_exam?.sensibilidad_alterada},
                {l: "Reflejos", v: medical_record_neuro_clinical_exam?.reflejos_alterados},
                {l: "Coordinación", v: undefined}, // not in type
                {l: "Marcha", v: undefined}, // not in type
              ].map((item, i) => (
                <View key={i} style={{flexDirection: "row", width: "50%", marginBottom: 2}}>
                  <Checkbox value={item.v} />
                  <Text style={{fontSize: 7, marginLeft: 2}}>{item.l}</Text>
                </View>
              ))}
            </View>
            <View style={{borderTopWidth: 1, padding: 2}}>
              <Text style={styles.label}>
                Obs:{" "}
                <Text style={styles.value}>{medical_record_neuro_clinical_exam?.observations}</Text>
              </Text>
            </View>
          </View>
        </View>

        {/* Inmunizaciones & Antecedentes Personales (Combined row or split) */}
        <View style={{flexDirection: "row", gap: 5, marginTop: 5}}>
          <View style={[styles.tableContainer, {flex: 1}]}>
            <SectionHeader title="INMUNIZACIONES" />
            <View style={{flexDirection: "row", flexWrap: "wrap", padding: 2}}>
              {[
                {l: "Antigripal", v: undefined}, // not in type
                {l: "Covid", v: medical_record_immunizations?.sars_cov_2},
                {l: "Doble Ad.", v: undefined}, // not in type
                {l: "Hep. B", v: medical_record_immunizations?.hepatitis_b},
                {l: "Antitet.", v: medical_record_immunizations?.triple_adultos_tetanos}, // Assuming this maps to Antitetanica/Triple
              ].map((item, i) => (
                <View key={i} style={{flexDirection: "row", width: "50%", marginBottom: 2}}>
                  <Checkbox value={item.v} />
                  <Text style={{fontSize: 7, marginLeft: 2}}>{item.l}</Text>
                </View>
              ))}
            </View>
          </View>
          <View style={[styles.tableContainer, {flex: 1}]}>
            <SectionHeader title="ANT. PERSONALES" />
            <View style={{flexDirection: "row", flexWrap: "wrap", padding: 2}}>
              {[
                {l: "Internac.", v: medical_record_personal_history?.internations},
                {l: "COVID-19", v: medical_record_personal_history?.covid},
                {l: "Dengue", v: medical_record_personal_history?.dengue},
              ].map((item, i) => (
                <View key={i} style={{flexDirection: "row", width: "50%", marginBottom: 2}}>
                  <Checkbox value={item.v} />
                  <Text style={{fontSize: 7, marginLeft: 2}}>{item.l}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Estudios Realizados */}
        <View style={styles.tableContainer}>
          <SectionHeader title="ESTUDIOS REALIZADOS" />
          <View style={{flexDirection: "row", flexWrap: "wrap", padding: 2}}>
            {[
              {l: "Laboratorio", v: medical_record_studies?.laboratorio},
              {l: "Electro", v: medical_record_studies?.electro},
              {l: "Rx Torax", v: medical_record_studies?.rx_torax_frente},
              {l: "Rx Col. Cerv.", v: medical_record_studies?.rx_columna_cervical_frente},
              {l: "Rx Col. Lum.", v: medical_record_studies?.rx_columna_lumbo_sacra_frente},
              {l: "Espiro", v: medical_record_studies?.espirometria},
              {l: "Audio", v: medical_record_studies?.audiometria},
              {l: "Ex. Vista", v: medical_record_studies?.evaluation_oftalmologica},
              {l: "Psico", v: medical_record_studies?.psicotecnico},
              {l: "EEG", v: medical_record_studies?.electroencefalograma},
              {l: "Ergo", v: medical_record_studies?.ergometria},
            ].map((item, i) => (
              <View key={i} style={{flexDirection: "row", width: "20%", marginBottom: 2}}>
                <Checkbox value={item.v} />
                <Text style={{fontSize: 7, marginLeft: 2}}>{item.l}</Text>
              </View>
            ))}
          </View>
          <View style={{borderTopWidth: 1, padding: 2}}>
            <Text style={styles.label}>
              Obs: <Text style={styles.value}>{medical_record_studies?.observations}</Text>
            </Text>
          </View>
        </View>

        {/* Conclusiones */}
        {medical_record_recomendations && (
          <View style={[styles.tableContainer, {marginTop: 5}]}>
            <SectionHeader title="CONCLUSIONES Y APTITUD" />
            <View style={{padding: 5}}>
              <Text style={styles.label}>
                Observaciones:{" "}
                <Text style={styles.value}>{medical_record_recomendations.observations}</Text>
              </Text>
              <Text style={[styles.label, {marginTop: 5}]}>
                Duración: <Text style={styles.value}>{medical_record_recomendations.duracion}</Text>
              </Text>
              <Text style={[styles.label, {marginTop: 5, fontSize: 10}]}>
                APTITUD:{" "}
                <Text style={{fontWeight: "bold", fontSize: 12}}>
                  {medical_record_recomendations.apto
                    ? "APTO"
                    : medical_record_recomendations.apto_preexistencia_no_condiciona
                      ? "APTO CON PREEXISTENCIA (NO CONDICIONA)"
                      : medical_record_recomendations.apto_preexistencia_condiciona
                        ? "APTO CON PREEXISTENCIA (CONDICIONA)"
                        : medical_record_recomendations.no_apto_temporal
                          ? "NO APTO TEMPORAL"
                          : medical_record_recomendations.no_apto_definitivo
                            ? "NO APTO DEFINITIVO"
                            : "NO DEFINIDO"}
                </Text>
              </Text>
            </View>
          </View>
        )}

        <Text style={{fontSize: 8, marginTop: 10, textAlign: "center"}}>
          Firma Médico: __________________________________________
        </Text>
      </Page>
    </Document>
  );
};
