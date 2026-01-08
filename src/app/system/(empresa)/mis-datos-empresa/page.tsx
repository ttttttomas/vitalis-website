import {Users} from "@/components/ui/Icons";

import Panel from "../../components/Panel";

export default function MisDatosEmpresaPage() {
  return (
    <Panel pageIcon={<Users />} pageTitle="Mis datos">
      <form className="mt-10 flex flex-col gap-2">
        <label className="text-lg font-bold italic" htmlFor="nombre_empresa">
          Nombre de la empresa *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">Nombre empresa</p>
        <label className="text-lg font-bold italic" htmlFor="nombre_responsable">
          Nombre del responsable *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">Nombre responsable</p>
        <label className="text-lg font-bold italic" htmlFor="dni_cuit">
          DNI/CUIT *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">22919919922</p>
        <label className="text-lg font-bold italic" htmlFor="obra_social">
          Correo electrónico *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">email@email.com</p>
        <label className="text-lg font-bold italic" htmlFor="puesto">
          Teléfono de contacto *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">11111111</p>
      </form>
    </Panel>
  );
}
