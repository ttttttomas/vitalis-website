import Link from "next/link";

import {Profesionals, ArrowLeft} from "@/components/ui/Icons";
import Panel from "@/app/system/components/Panel";

export default function AddProfessionalPage() {
  return (
    <Panel pageIcon={<Profesionals />} pageTitle="Agregar profesional">
      <Link className="flex items-center gap-1 font-bold" href="/system/profesionales">
        <ArrowLeft />
        Cancelar
      </Link>
      <form className="mt-10 flex flex-col gap-2">
        <label className="text-lg font-bold italic" htmlFor="nombre">
          Nombre completo *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa el nombre completo"
          type="text"
        />
        <label className="text-lg font-bold italic" htmlFor="dni">
          DNI *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa el DNI"
          type="text"
        />
        <label className="text-lg font-bold italic" htmlFor="email">
          Ingresa el correo electrónico *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa el correo electrónico"
          type="text"
        />
        <label className="text-lg font-bold italic" htmlFor="telefono">
          Teléfono *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa el teléfono"
          type="text"
        />
        <label className="text-lg font-bold italic" htmlFor="password">
          Contraseña *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa la contraseña"
          type="password"
        />
        <label className="text-lg font-bold italic" htmlFor="profesion">
          Profesión *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa la profesión"
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
