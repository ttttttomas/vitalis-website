import Link from "next/link";

import EstudiosCard from "@/app/system/(pacientes)/estudios-pacientes/EstudiosCard";
import Panel from "@/app/system/components/Panel";
import {ArrowLeft, Clients} from "@/components/ui/Icons";

export default function EstudiosPacientesPage() {
  // TODO: TRAER LOS ESTUDIOS DE PACIENTES CARGADOS POR ESE PROFESIONAL

  return (
    <Panel pageIcon={<Clients />} pageTitle="Mis estudios">
      <Link className="flex items-center gap-1 font-bold" href="/system/pacientes-profesional">
        <ArrowLeft />
        Volver
      </Link>
      <section className="my-5 flex flex-col gap-5">
        <EstudiosCard />
        <EstudiosCard />
        <EstudiosCard />
      </section>
    </Panel>
  );
}
