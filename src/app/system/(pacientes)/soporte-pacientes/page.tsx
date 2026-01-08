import {Support} from "@/components/ui/Icons";

import Panel from "../../components/Panel";

import TicketCard from "./TicketCard";

export default function SoportePacientesPage() {
  return (
    <Panel pageIcon={<Support />} pageTitle="Soporte">
      <section className="flex flex-col gap-5">
        <div>
          <h2 className="text-lg font-bold">Solicitudes pendientes</h2>
          <TicketCard />
        </div>
        <h2 className="text-lg font-bold">Comenzar solicitud</h2>
        <form className="flex flex-col gap-5">
          <input className="w-full rounded-md border p-2" placeholder="Asunto" type="text" />
          <textarea className="w-full rounded-md border p-2" placeholder="Cuerpo" />
          <button className="bg-blue rounded-md p-2 text-white">Enviar</button>
        </form>
      </section>
    </Panel>
  );
}
