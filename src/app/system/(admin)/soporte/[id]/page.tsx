import Link from "next/link";

import Panel from "@/app/system/components/Panel";
import {ArrowLeft, Support} from "@/components/ui/Icons";

export default function SolicitudPage() {
  return (
    <Panel pageIcon={<Support />} pageTitle="Soporte">
      <Link className="flex items-center gap-1 font-bold" href="/system/soporte">
        <ArrowLeft />
        Cancelar
      </Link>
      <form className="my-5 flex flex-col gap-3">
        <h2 className="text-lg font-bold">Solicitud pendiente</h2>
        <div className="flex w-full items-center gap-2 rounded-lg border px-5 py-1">
          <p>Asunto: </p>
          <b>Nombre del asunto</b>
        </div>
        <h2 className="text-lg font-bold">Respuesta</h2>
        <div className="flex w-full items-center gap-2 rounded-lg border px-5 py-1">
          <p>RE: </p>
          <p>Nombre del asunto</p>
        </div>
        <textarea className="w-full rounded-lg border p-3" placeholder="Cuerpo" rows={5} />
        <button className="bg-blue rounded-lg px-5 py-2 font-bold text-white">Enviar</button>
      </form>
    </Panel>
  );
}
