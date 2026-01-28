"use client";
import Link from "next/link";
import {use, useEffect, useState} from "react";

import {Studies, UserPatient} from "@/types";

import EstudiosCard from "@/app/system/(pacientes)/estudios-pacientes/EstudiosCard";
import Panel from "@/app/system/components/Panel";
import {ArrowLeft, Clients} from "@/components/ui/Icons";
import {dataService} from "@/services/dataService";

interface PageProps {
  params: Promise<{id: string}>;
}

export default function EstudiosPacientesPage({params}: PageProps) {
  const [data, setData] = useState<UserPatient | null>(null);
  const id = use(params).id;
  const [studies, setStudies] = useState<Studies[]>([]);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await dataService.getPatientById(id);
        const studies = await dataService.getStudiesByPatientId(id);

        setData(res);
        setStudies(studies);
      } catch (error) {
        console.error(error);
      }
    };

    void data();
  }, [id]);

  if (!data) {
    return (
      <Panel pageIcon={<Clients />} pageTitle="Historial de estudios">
        <p>Cargando...</p>
      </Panel>
    );
  }

  if (!studies.length) {
    return (
      <Panel pageIcon={<Clients />} pageTitle="Historial de estudios">
        <Link className="my-2 flex items-center gap-1 font-bold" href="/system/empleados">
          <ArrowLeft />
          Volver
        </Link>
        <p>No hay estudios</p>
      </Panel>
    );
  }

  return (
    <Panel
      pageIcon={<Clients />}
      pageTitle={`Historial de estudios - ${data.first_name} ${data.last_name}`}
    >
      <Link className="flex items-center gap-1 font-bold" href="/system/empleados">
        <ArrowLeft />
        Volver
      </Link>
      <section className="my-5 flex flex-col gap-5">
        {studies.map((study) => (
          <EstudiosCard key={study.id} studies={study} />
        ))}
      </section>
    </Panel>
  );
}
