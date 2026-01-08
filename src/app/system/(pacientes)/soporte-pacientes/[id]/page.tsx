import Link from "next/link";

import Panel from "@/app/system/components/Panel";
import {ArrowLeft, Support} from "@/components/ui/Icons";

export default function TicketResponsePage() {
  return (
    <Panel pageIcon={<Support />} pageTitle="Ticket NRO: #123">
      <Link className="flex items-center gap-1 font-bold" href="/system/soporte-pacientes">
        <ArrowLeft />
        Volver
      </Link>
      <form className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">
          Solicitud: <b>Nombre del asunto</b>
        </h2>
        <div className="flex w-full items-center gap-2 rounded-lg border px-5 py-5">
          <p>Cuerpo de la solicitud </p>
        </div>
        <h2 className="text-lg font-bold">Respuesta</h2>
        <div className="flex w-full items-center gap-2 rounded-lg border px-5 py-5">
          <p>Respuesta </p>
        </div>
      </form>
    </Panel>
  );
}
