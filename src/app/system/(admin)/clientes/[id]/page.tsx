"use client";
import {use, useEffect, useState} from "react";

import {Studies} from "@/types";

import {Clients} from "@/components/ui/Icons";
import {dataService} from "@/services/dataService";
import EstudiosCard from "@/app/system/(pacientes)/estudios-pacientes/EstudiosCard";
import Panel from "@/app/system/components/Panel";
interface PageProps {
  params: Promise<{id: string}>;
}

export default function ClientesEstudiosPage({params}: PageProps) {
  const [studies, setStudies] = useState<Studies[]>([]);
  const patient_id = use(params).id;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (patient_id) {
      const getStudies = async () => {
        try {
          const response = await dataService.getStudiesByPatientId(patient_id);

          setStudies(response);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching studies:", error);
          setIsLoading(false);
        }
      };

      void getStudies();
    }
  }, [patient_id]);

  return (
    <Panel pageIcon={<Clients />} pageTitle="Estudios - Paciente">
      {isLoading ? (
        <p className="my-auto text-center font-semibold">Cargando estudios...</p>
      ) : studies.length === 0 ? (
        <p className="my-auto text-center font-semibold">No tienes estudios aún.</p>
      ) : (
        <section className="flex max-h-82 flex-col gap-5 overflow-y-scroll md:px-10">
          {studies.map((study: Studies) => (
            <EstudiosCard key={study.id} studies={study} />
          ))}
        </section>
      )}
    </Panel>
  );
}
