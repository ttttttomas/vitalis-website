import Link from "next/link";

import EstudiosCard from "@/app/system/(pacientes)/estudios-pacientes/EstudiosCard";
import Panel from "@/app/system/components/Panel";
import {ArrowLeft, Clients} from "@/components/ui/Icons";

export default function EstudiosPacientesPage() {
  // TODO: TRAER LOS ESTUDIOS DE UN PACIENTE EN ESPECIFICO

  return (
    <Panel pageIcon={<Clients />} pageTitle="Historial de estudios - Adriaz Perez">
      <Link className="flex items-center gap-1 font-bold" href="/system/empleados">
        <ArrowLeft />
        Volver
      </Link>
      <section className="my-5 flex flex-col gap-5">{/* <EstudiosCard /> */}</section>
    </Panel>
  );
}
