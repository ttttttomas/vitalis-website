import Link from "next/link";

import {ArrowLeft, Estudies} from "@/components/ui/Icons";
import Panel from "@/app/system/components/Panel";

export default function page() {
  return (
    <Panel pageIcon={<Estudies />} pageTitle="Agregar estudio">
      <Link className="flex items-center gap-1 font-bold" href="/system/usuarios">
        <ArrowLeft />
        Cancelar
      </Link>
      <form className="my-5 flex flex-col gap-2">
        <label htmlFor="nombre">Nombre del estudio *</label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          id="nombre"
          placeholder="Ingresa el nombre del estudio"
          type="text"
        />
        <label htmlFor="descripcion">Imagen del estudio *</label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          id="imagen"
          type="file"
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
