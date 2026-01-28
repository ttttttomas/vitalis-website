"use client";
import {useState, useEffect, use, useCallback} from "react";
import {ArrowLeft, Printer} from "lucide-react";
import {useRouter} from "next/navigation";

import {MedicalRecord} from "@/types";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {dataService} from "@/services/dataService";

import {MedicalHistoryHeader} from "../components/MedicalHistoryHeader";
import {EvaluationTypeSection} from "../components/sections/EvaluationTypeSection";
import {useFormRegistry} from "../useFormRegistry";
import {HabitsSection} from "../components/sections/HabitsSection";
import {FamilyHistory} from "../components/sections/FamilyHistory";
import {JobsHistory} from "../components/sections/JobsHistory";
import {PreviousProblems} from "../components/sections/PreviousProblems";
import {LaboralContactsSection} from "../components/sections/LaboralContacts";
import {LaboralExamSection} from "../components/sections/LaboralExam";
import {RecomendationsSection} from "../components/sections/Recomendations";
import {PatientDataSection} from "../components/sections/PatientData";
import {DerivationsSection} from "../components/sections/Derivations";
import {StudiesDoneSection} from "../components/sections/StudiesDone";
import {SurgerysSection} from "../components/sections/Surgerys";
import {PersonalHistorySection} from "../components/sections/PersonalHistory";
import {ClinicalExamSection} from "../components/sections/ClinicalExam";
import {SkinExamSection} from "../components/sections/SkinExam";
import {OftalmologicoExamSection} from "../components/sections/Oftalmologico";
import {BucodentalExamSection} from "../components/sections/BucodentalExam";
import {OrlExamSection} from "../components/sections/OrlExam";
import {HeadExamSection} from "../components/sections/HeadExam";
import {CardiovascularExamSection} from "../components/sections/CardiovascularExam";
import {RespiratorioExamSection} from "../components/sections/RespiratorioExam";
import {DigestiveExamSection} from "../components/sections/DigestiveExam";
import {GenitourinarioExamSection} from "../components/sections/GenitourinarioExam";
import {OsteoarticularExamSection} from "../components/sections/OsteoarticularExam";
import {NeuroClinicalExamSection} from "../components/sections/NeuroClinicalExam";
import {PsychiatricClinicalExamSection} from "../components/sections/PsychiatricClinicalExam";
import {ImmunizationsSection} from "../components/sections/Immunizations";

// const raleway = Raleway({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
// });

// const patuaOne = Patua_One({
//   subsets: ["latin"],
//   weight: ["400"],
// });

interface PageProps {
  params: Promise<{id: string}>;
}

export default function MedicalHistoryPage({params}: PageProps) {
  const patientId = use(params).id;
  const router = useRouter();

  const [medicalRecord, setMedicalRecord] = useState<MedicalRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const registry = useFormRegistry<MedicalRecord>();

  // GET devuelve array -> elegimos el primero (después si querés elegimos por created_at)
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        setError(null);

        const records: MedicalRecord[] = await dataService.getMedicalRecord(patientId);
        const active = records[0] || ({} as MedicalRecord);

        setMedicalRecord(active);
      } catch (_err) {
        // Si falla, asumimos que no hay registro (o error de conexión), pero permitimos crear uno nuevo
        // Ojo: idealmente chequear si es 404. Por ahora ante error asumimos "nuevo".
        // O podríamos dejar el error visible si es "Network Error".
        // Para cumplir "retorne formulario vacio":
        setMedicalRecord({} as MedicalRecord);
        // setError(err instanceof Error ? err.message : "Error cargando historial");
      } finally {
        setLoading(false);
      }
    };

    void load();
  }, [patientId]);

  const handleSaveAll = useCallback(async () => {
    if (!medicalRecord) return;

    try {
      setSaving(true);
      setError(null);
      setSaved(false);

      const entries = registry.getAll();

      for (const [, handler] of entries) {
        if (handler.validate) {
          const ok = await handler.validate();

          if (!ok) return;
        }
      }

      const merged: MedicalRecord = {...medicalRecord};

      for (const [key, handler] of entries) {
        const value = handler.getValues();

        (merged as any)[key] = value;
      }

      let result: MedicalRecord;

      if (medicalRecord.id) {
        // UPDATE
        result = await dataService.updateMedicalRecord(medicalRecord.id, patientId, merged);
      } else {
        // CREATE
        // merge necesita tener la estructura correcta para el backend
        result = await dataService.createMedicalRecord(medicalRecord.id, merged);
      }

      setMedicalRecord(result);
      setSaved(true);
      console.log("saved", result);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error guardando historial");
    } finally {
      setSaving(false);
    }
  }, [medicalRecord, registry, patientId]);

  if (loading)
    return (
      <div className="mt-50 flex h-full w-full items-center justify-center">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-blue-600" />
      </div>
    );
  if (!medicalRecord)
    return (
      <div className="mx-auto p-6">
        No hay historial para este paciente. {error ? `(${error})` : ""}
      </div>
    );

  return (
    <main className="mx-30 my-10">
      <section className="flex items-start justify-between">
        <button className="mt-20 flex items-center gap-1 font-bold" onClick={() => router.back()}>
          <ArrowLeft />
          Volver al Portal
        </button>
        <MedicalHistoryHeader error={error} saved={saved} saving={saving} onSave={handleSaveAll} />
        <div className="text-md mt-20 flex h-full flex-col items-end justify-between gap-2 font-medium">
          <button className="flex cursor-pointer items-center gap-2 font-bold">
            <Printer className="text-blue" />
            <p className="text-blue">Imprimir</p>
          </button>
        </div>
      </section>

      <form className="rounded-xl bg-white">
        <p className="rounded-t-xl bg-[#5AB5E04D] px-5 py-2 font-semibold italic">
          Los campos con * son obligatorios
        </p>
        <PatientDataSection
          defaultValues={medicalRecord.medical_record_data ?? null}
          registerSection={(handler) => registry.register("medical_record_data", handler)}
        />
        <Accordion collapsible type="single">
          <EvaluationTypeSection
            defaultValues={medicalRecord.medical_record_evaluation_type ?? null}
            registerSection={(handler) =>
              registry.register("medical_record_evaluation_type", handler)
            }
          />
        </Accordion>
        <Accordion collapsible type="single">
          <HabitsSection
            defaultValues={medicalRecord.medical_record_habits ?? null}
            registerSection={(handler) => registry.register("medical_record_habits", handler)}
          />
        </Accordion>
        <Accordion collapsible type="single">
          <FamilyHistory
            defaultValues={medicalRecord.medical_record_family_history ?? null}
            registerSection={(handler) =>
              registry.register("medical_record_family_history", handler)
            }
          />
        </Accordion>
        <Accordion collapsible type="single">
          <JobsHistory
            defaultValues={medicalRecord.medical_record_laboral_history ?? null}
            registerSection={(handler) =>
              registry.register("medical_record_laboral_history", handler)
            }
          />
        </Accordion>
        <Accordion collapsible type="single">
          <PreviousProblems
            defaultValues={medicalRecord.medical_record_previous_problems ?? null}
            registerSection={(handler) =>
              registry.register("medical_record_previous_problems", handler)
            }
          />
        </Accordion>
        <Accordion collapsible type="single">
          <LaboralContactsSection
            defaultValues={medicalRecord.medical_record_laboral_contacts ?? null}
            registerSection={(handler) =>
              registry.register("medical_record_laboral_contacts", handler)
            }
          />
        </Accordion>
        <Accordion collapsible type="single">
          <SurgerysSection
            defaultValues={medicalRecord.medical_record_surgerys ?? null}
            registerSection={(handler) => registry.register("medical_record_surgerys", handler)}
          />
        </Accordion>
        <Accordion collapsible type="single">
          <PersonalHistorySection
            defaultValues={medicalRecord.medical_record_personal_history ?? null}
            registerSection={(handler) =>
              registry.register("medical_record_personal_history", handler)
            }
          />
        </Accordion>
        <Accordion collapsible type="single">
          <ClinicalExamSection
            defaultValues={medicalRecord.medical_record_clinical_exam ?? null}
            registerSection={(handler) =>
              registry.register("medical_record_clinical_exam", handler)
            }
          />
        </Accordion>
        <Accordion collapsible type="single">
          <SkinExamSection
            defaultValues={medicalRecord.medical_record_skin_exam ?? null}
            registerSection={(handler) => registry.register("medical_record_skin_exam", handler)}
          />
        </Accordion>
        <Accordion collapsible type="single">
          <OftalmologicoExamSection
            defaultValues={medicalRecord.medical_record_oftalmologico_exam ?? null}
            registerSection={(handler) =>
              registry.register("medical_record_oftalmologico_exam", handler)
            }
          />
        </Accordion>
        <Accordion collapsible type="single">
          <BucodentalExamSection
            defaultValues={medicalRecord.medical_record_bucodental_exam ?? null}
            registerSection={(handler) =>
              registry.register("medical_record_bucodental_exam", handler)
            }
          />
        </Accordion>
        <Accordion collapsible type="single">
          <OrlExamSection
            defaultValues={medicalRecord.medical_record_orl_exam ?? null}
            registerSection={(handler) => registry.register("medical_record_orl_exam", handler)}
          />
        </Accordion>
        <Accordion collapsible type="single">
          <HeadExamSection
            defaultValues={medicalRecord.medical_record_head_exam ?? null}
            registerSection={(handler) => registry.register("medical_record_head_exam", handler)}
          />
        </Accordion>
        <Accordion collapsible type="single">
          <CardiovascularExamSection
            defaultValues={medicalRecord.medical_record_cardiovascular_exam ?? null}
            registerSection={(handler) =>
              registry.register("medical_record_cardiovascular_exam", handler)
            }
          />
        </Accordion>
        <Accordion collapsible type="single">
          <RespiratorioExamSection
            defaultValues={medicalRecord.medical_record_respiratorio_exam ?? null}
            registerSection={(handler) =>
              registry.register("medical_record_respiratorio_exam", handler)
            }
          />
        </Accordion>
        <Accordion collapsible type="single">
          <DigestiveExamSection
            defaultValues={medicalRecord.medical_record_digestive_exam ?? null}
            registerSection={(handler) =>
              registry.register("medical_record_digestive_exam", handler)
            }
          />
        </Accordion>
        <Accordion collapsible type="single">
          <GenitourinarioExamSection
            defaultValues={medicalRecord.medical_record_genitourinario_exam ?? null}
            registerSection={(handler) =>
              registry.register("medical_record_genitourinario_exam", handler)
            }
          />
        </Accordion>
        <Accordion collapsible type="single">
          <OsteoarticularExamSection
            defaultValues={medicalRecord.medical_record_osteoarticular_exam ?? null}
            registerSection={(handler) =>
              registry.register("medical_record_osteoarticular_exam", handler)
            }
          />
        </Accordion>
        <Accordion collapsible type="single">
          <NeuroClinicalExamSection
            defaultValues={medicalRecord.medical_record_neuro_clinical_exam ?? null}
            registerSection={(handler) =>
              registry.register("medical_record_neuro_clinical_exam", handler)
            }
          />
        </Accordion>
        <Accordion collapsible type="single">
          <PsychiatricClinicalExamSection
            defaultValues={medicalRecord.medical_record_psychiatric_clinical_exam ?? null}
            registerSection={(handler) =>
              registry.register("medical_record_psychiatric_clinical_exam", handler)
            }
          />
        </Accordion>
        <Accordion collapsible type="single">
          <ImmunizationsSection
            defaultValues={medicalRecord.medical_record_immunizations ?? null}
            registerSection={(handler) =>
              registry.register("medical_record_immunizations", handler)
            }
          />
        </Accordion>
        <Accordion collapsible type="single">
          <LaboralExamSection
            defaultValues={medicalRecord.medical_record_laboral_exam ?? null}
            registerSection={(handler) => registry.register("medical_record_laboral_exam", handler)}
          />
        </Accordion>
        <Accordion collapsible type="single">
          <RecomendationsSection
            defaultValues={medicalRecord.medical_record_recomendations ?? null}
            registerSection={(handler) =>
              registry.register("medical_record_recomendations", handler)
            }
          />
        </Accordion>
        <Accordion collapsible type="single">
          <DerivationsSection
            defaultValues={medicalRecord.medical_record_derivations ?? null}
            registerSection={(handler) => registry.register("medical_record_derivations", handler)}
          />
        </Accordion>
        <Accordion collapsible type="single">
          <StudiesDoneSection
            defaultValues={medicalRecord.medical_record_studies ?? null}
            registerSection={(handler) => registry.register("medical_record_studies", handler)}
          />
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-final">
            <AccordionTrigger>Firma Digital y Matrícula *</AccordionTrigger>
            <AccordionContent>
              <div className="relative">
                <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
                <div className="space-y-8">
                  {/* Médico Evaluador */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold">Médico Evaluador</p>

                    <div className="flex items-center gap-4">
                      <label className="text-base" htmlFor="fecha-evaluador">
                        Fecha
                      </label>
                      <input
                        className="border border-gray-500 p-1"
                        id="fecha-evaluador"
                        type="text"
                      />
                    </div>

                    <div className="flex gap-4">
                      <label className="text-base whitespace-nowrap" htmlFor="firma-evaluador">
                        Firma y matrícula
                      </label>
                      <textarea
                        className="h-24 w-full resize-none border border-gray-500 p-2"
                        id="firma-evaluador"
                      />
                    </div>
                  </div>

                  {/* Médico Laboral */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold">Médico Laboral</p>

                    <div className="flex items-center gap-4">
                      <label className="text-base" htmlFor="fecha-laboral">
                        Fecha
                      </label>
                      <input
                        className="border border-gray-500 p-1"
                        id="fecha-laboral"
                        type="text"
                      />
                    </div>

                    <div className="flex gap-4">
                      <label className="text-base whitespace-nowrap" htmlFor="firma-laboral">
                        Firma y matrícula
                      </label>
                      <textarea
                        className="h-24 w-full resize-none border border-gray-500 p-2"
                        id="firma-laboral"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
    </main>
  );
}
