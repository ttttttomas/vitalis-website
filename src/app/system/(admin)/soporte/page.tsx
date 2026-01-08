import {Support} from "@/components/ui/Icons";

import Panel from "../../components/Panel";

import SoporteCard from "./SoporteCard";

export default function SoportePage() {
  return (
    <Panel pageIcon={<Support />} pageTitle="Soporte">
      <section className="flex flex-col gap-3">
        <h2>Solicitudes pendientes</h2>
        <SoporteCard solicitud={{asunto: "Asunto 2"}} />
        <SoporteCard solicitud={{asunto: "Asunto 2"}} />
        <SoporteCard solicitud={{asunto: "Asunto 2"}} />
        <SoporteCard solicitud={{asunto: "Asunto 2"}} />
        <SoporteCard solicitud={{asunto: "Asunto 2"}} />
        <SoporteCard solicitud={{asunto: "Asunto 1"}} />
        <SoporteCard solicitud={{asunto: "Asunto 1"}} />
        <SoporteCard solicitud={{asunto: "Asunto 1"}} />
        <h2>Solicitudes respondidas</h2>
        <SoporteCard solicitud={{asunto: "Asunto 1"}} />
        <SoporteCard solicitud={{asunto: "Asunto 1"}} />
        <SoporteCard solicitud={{asunto: "Asunto 2"}} />
        <SoporteCard solicitud={{asunto: "Asunto 2"}} />
        <SoporteCard solicitud={{asunto: "Asunto 2"}} />
        <SoporteCard solicitud={{asunto: "Asunto 2"}} />
        <SoporteCard solicitud={{asunto: "Asunto 2"}} />
        <SoporteCard solicitud={{asunto: "Asunto 2"}} />
      </section>
    </Panel>
  );
}
