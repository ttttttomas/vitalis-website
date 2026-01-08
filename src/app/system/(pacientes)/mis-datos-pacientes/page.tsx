import {UserSVG} from "@/components/ui/Icons";

import Panel from "../../components/Panel";

export default function MisDatosPacientesPage() {
  return (
    <Panel pageIcon={<UserSVG />} pageTitle="Mis datos">
      <form className="mt-10 flex flex-col gap-2">
        <label className="text-lg font-bold italic" htmlFor="nombre">
          Nombre completo *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">Nombre completo</p>
        <label className="text-lg font-bold italic" htmlFor="dni">
          DNI *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">DNI</p>
        <label className="text-lg font-bold italic" htmlFor="email">
          Fecha de nacimiento *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">Fecha de nacimiento</p>
        <label className="text-lg font-bold italic" htmlFor="email">
          Ingresa el correo electrónico *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">Correo electrónico</p>
        <label className="text-lg font-bold italic" htmlFor="telefono">
          Teléfono *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">Teléfono</p>
        <label className="text-lg font-bold italic" htmlFor="password">
          Contraseña *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">Contraseña</p>
        <label className="text-lg font-bold italic" htmlFor="obra-social">
          Obra social *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">Obra social</p>
      </form>
    </Panel>
  );
}
