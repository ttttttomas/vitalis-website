"use client";
import Link from "next/link";

import EstudiosCard from "@/app/system/(pacientes)/estudios-pacientes/EstudiosCard";
import Panel from "@/app/system/components/Panel";
import {ArrowLeft, Clients} from "@/components/ui/Icons";

export default function EstudiosPacientesPage() {
  // TODO: TRAER LOS ESTUDIOS DE UN PACIENTE EN ESPECIFICO
  const p = [
    {
      id: "ae368752-055a-40d8-a573-433c6661cb1b",
      patient_id: "c022923c-515a-4d4d-84b7-3ae7107cc481",
      created_by_user_id: "a929f739-3a4a-4b27-8f9e-341565783237",
      study_type: "Espirometria",
      status: "pending",
      study_file: "mock.pdf",
      created_at: "2026-01-17 20:40:21",
      files: [
        {
          id: "d79e2a75-64e9-49af-b73b-ccd24576a5e5",
          study_id: "ae368752-055a-40d8-a573-433c6661cb1b",
          file_path:
            "C:\\proyectos\\backend-vitalis\\studies\\f9aae930-c022-4a41-b31c-778732e79d27.pdf",
          original_filename: "Menú.pdf",
          mime_type: "application/pdf",
          size_bytes: 118047146,
          uploaded_at: "2026-01-17 20:40:22",
        },
      ],
    },
    {
      id: "fb8b8b9f-30e1-45fe-938b-83fc4fc244ba",
      patient_id: "c022923c-515a-4d4d-84b7-3ae7107cc481",
      created_by_user_id: "b9f6d48b-52a3-4a58-8584-1a1684b8f2da",
      study_type: "string",
      status: "string",
      study_file: "mock.pdf",
      created_at: "2026-01-17 15:58:06",
      files: [
        {
          id: "d6b72213-e824-47e7-8f07-3f361cf3f492",
          study_id: "fb8b8b9f-30e1-45fe-938b-83fc4fc244ba",
          file_path: "/app/studies/5167a663-e4c6-4c65-8097-726034c692a6.pdf",
          original_filename: "CONTRATO VCP 13-01.pdf",
          mime_type: "application/pdf",
          size_bytes: 223026,
          uploaded_at: "2026-01-17 15:58:07",
        },
      ],
    },
    {
      id: "fe69514d-b873-4b0a-922e-95b8e7565499",
      patient_id: "c022923c-515a-4d4d-84b7-3ae7107cc481",
      created_by_user_id: "b9f6d48b-52a3-4a58-8584-1a1684b8f2da",
      study_type: "string",
      status: "string",
      study_file: "mock.pdf",
      created_at: "2026-01-17 15:49:22",
      files: [
        {
          id: "b0836697-eb22-4baa-8ba2-69517cf5a224",
          study_id: "fe69514d-b873-4b0a-922e-95b8e7565499",
          file_path: "/app/studies/67a70b8e-e2df-4ad0-9174-dc5a6bbe58a5.pdf",
          original_filename: "CONTRATO VCP 13-01.pdf",
          mime_type: "application/pdf",
          size_bytes: 223026,
          uploaded_at: "2026-01-17 15:49:22",
        },
      ],
    },
  ];
  const p1 = p[0];

  return (
    <Panel pageIcon={<Clients />} pageTitle="Historial de estudios - Empleado1">
      <Link className="flex items-center gap-1 font-bold" href="/system/empleados">
        <ArrowLeft />
        Volver
      </Link>
      <section className="my-5 flex flex-col gap-5">
        <EstudiosCard key={p1.id} studies={p1} />
      </section>
    </Panel>
  );
}
