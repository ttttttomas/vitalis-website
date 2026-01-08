import Link from "next/link";

import Panel from "@/app/system/components/Panel";
import {ArrowLeft, Clients} from "@/components/ui/Icons";

export default function AddEmployeePage() {
  return (
    <Panel pageIcon={<Clients />} pageTitle="Agregar empleado">
      <Link className="flex items-center gap-1 font-bold" href="/system/empleados">
        <ArrowLeft />
        Cancelar
      </Link>
      <form className="mt-10 flex flex-col gap-2">
        <label className="text-lg font-bold italic" htmlFor="nombre">
          Nombre *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa el nombre"
          type="text"
        />
        <label className="text-lg font-bold italic" htmlFor="apellido">
          Apellido *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa el apellido"
          type="text"
        />
        <label className="text-lg font-bold italic" htmlFor="fecha_nacimiento">
          Fecha de nacimiento *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa la fecha de nacimiento"
          type="date"
        />
        <label className="text-lg font-bold italic" htmlFor="obra_social">
          Obra social *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa la obra social"
          type="text"
        />
        <label className="text-lg font-bold italic" htmlFor="puesto">
          Puesto *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa el puesto"
          type="text"
        />
        <button
          className="bg-blue mt-10 cursor-pointer rounded-lg py-2 font-semibold text-white"
          type="submit"
        >
          Agregar
        </button>
      </form>
    </Panel>
  );
}
