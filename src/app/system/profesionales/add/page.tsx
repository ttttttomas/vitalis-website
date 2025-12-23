import Link from "next/link";

import {Clients} from "@/components/ui/Icons";

import Panel from "../../components/Panel";

export default function AddProfessionalPage() {
  return (
    <Panel pageIcon={<Clients />} pageTitle="Usuarios" roles="admin" userLabel="Nombre - Admin">
      <Link className="font-bold" href="/system/profesionales">{`< Cancelar`}</Link>
      <form className="flex flex-col">
        <label htmlFor="">Nombre completo</label>
        <input placeholder="Nombre completo" type="text" />
        <label htmlFor="">DNI</label>
        <input placeholder="DNI" type="text" />
        <label htmlFor="">Correo electrónico</label>
        <input placeholder="Correo electrónico" type="text" />
        <label htmlFor="">Teléfono</label>
        <input placeholder="Teléfono" type="text" />
        <label htmlFor="">Contraseña</label>
        <input placeholder="Contraseña" type="password" />
        <label htmlFor="">Profesion</label>
        <input type="text" />
        <button>Agregar</button>
      </form>
    </Panel>
  );
}
