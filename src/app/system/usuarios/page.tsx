import Link from "next/link";

import {Clients, Lupa} from "@/components/ui/Icons";

import Panel from "../components/Panel";

interface UsersRow {
  nombre: string;
  dni: string;
  email: string;
  telefono: string;
  password: string;
}

const USERS_DATA: UsersRow[] = [
  {
    nombre: "Vitalis",
    dni: "11111111",
    email: "empresa@gmail.com",
    telefono: "1121212121",
    password: "******",
  },
  {
    nombre: "Vitalis",
    dni: "11111111",
    email: "empresa@gmail.com",
    telefono: "1121212121",
    password: "******",
  },
  // repetí o reemplazá con tu data real
];

export default function SystemUsuariosPage() {
  return (
    <Panel pageIcon={<Clients />} pageTitle="Usuarios" roles="admin" userLabel="Nombre - Admin">
      <div className="flex flex-col items-end gap-5 overflow-x-auto">
        <Link className="flex w-max items-center gap-2 rounded-xl border px-3 py-1" href="">
          <p className="text-sm">Agregar usuario</p>
          <p className="text-xl font-bold">+</p>
        </Link>
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-[#3A3A3A] text-white">
              <th className="border-r border-[#4A4A4A] px-3 py-2 text-left">Nombre completo</th>
              <th className="border-r border-[#4A4A4A] px-3 py-2 text-left">DNI</th>
              <th className="border-r border-[#4A4A4A] px-3 py-2 text-left">Correo electrónico</th>
              <th className="border-r border-[#4A4A4A] px-3 py-2 text-left">Teléfono</th>
              <th className="px-3 py-2 text-left">Contraseña</th>
            </tr>
          </thead>

          <tbody>
            {USERS_DATA.map((row, idx) => (
              <tr key={idx} className="border-t border-[#4A4A4A] bg-[#333333] text-white">
                <td className="border-r border-[#4A4A4A] px-3 py-2">{row.nombre}</td>
                <td className="border-r border-[#4A4A4A] px-3 py-2">{row.dni}</td>
                <td className="border-r border-[#4A4A4A] px-3 py-2">{row.email}</td>
                <td className="border-r border-[#4A4A4A] px-3 py-2">{row.telefono}</td>
                <td className="px-3 py-2">{row.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}
