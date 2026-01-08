import Link from "next/link";

import {Pacientes} from "@/components/ui/Icons";

import Panel from "../../components/Panel";

interface UsersRow {
  nombre: string;
  apellido: string;
  dni: string;
  fecha_nacimiento: string;
  obra_social: string;
}

const USERS_DATA: UsersRow[] = [
  {
    nombre: "Vitalis",
    apellido: "Vitalis",
    dni: "11111111",
    fecha_nacimiento: "1990-01-01",
    obra_social: "11111111",
  },
  {
    apellido: "Vitalis",
    nombre: "Vitalis",
    dni: "11111111",
    fecha_nacimiento: "1990-01-01",
    obra_social: "11111111",
  },
];

export default function PacientesProfesional() {
  return (
    <Panel pageIcon={<Pacientes />} pageTitle="Pacientes">
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-[#3A3A3A] text-white">
            <th className="border-r border-[#4A4A4A] px-3 py-2 text-left">Nombre</th>
            <th className="border-r border-[#4A4A4A] px-3 py-2 text-left">Apellido</th>
            <th className="border-r border-[#4A4A4A] px-3 py-2 text-left">DNI</th>
            <th className="border-r border-[#4A4A4A] px-3 py-2 text-left">Fecha de nacimiento</th>
            <th className="border-r border-[#4A4A4A] px-3 py-2 text-left">Obra social</th>
            <th className="border-r border-[#4A4A4A] px-3 py-2 text-center text-wrap">
              Historial de resultados
            </th>
            <th className="px-3 py-2 text-center">Ficha médica</th>
          </tr>
        </thead>

        <tbody>
          {USERS_DATA.map((row, idx) => (
            <tr key={idx} className="border-t border-[#4A4A4A] bg-[#333333] text-white">
              <td className="border-r border-[#4A4A4A] px-3 py-2">{row.nombre}</td>
              <td className="border-r border-[#4A4A4A] px-3 py-2">{row.apellido}</td>
              <td className="border-r border-[#4A4A4A] px-3 py-2">{row.dni}</td>
              <td className="border-r border-[#4A4A4A] px-3 py-2">{row.fecha_nacimiento}</td>
              <td className="border-r border-[#4A4A4A] px-3 py-2">{row.obra_social}</td>
              <td className="border-r border-[#4A4A4A] px-3 py-2 text-center underline">
                <Link href="/system/pacientes-profesional/1">Ver</Link>
              </td>
              <td className="px-3 py-2 text-center underline">
                <Link href="/system/medical-history/1">Acceder</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}
