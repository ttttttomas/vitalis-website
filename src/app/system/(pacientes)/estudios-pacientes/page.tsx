import {Clients} from "@/components/ui/Icons";

import Panel from "../../components/Panel";

import EstudiosCard from "./EstudiosCard";

export default function EstudiosPacientesPage() {
  return (
    <Panel pageIcon={<Clients />} pageTitle="Mis estudios">
      <section className="flex flex-col gap-5">
        <EstudiosCard />
        <EstudiosCard />
        <EstudiosCard />
      </section>
    </Panel>
  );
}
