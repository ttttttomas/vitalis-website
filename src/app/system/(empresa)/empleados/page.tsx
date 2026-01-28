"use client";
import Link from "next/link";
import {useEffect, useState} from "react";

import {UserCompany, UserPatient} from "@/types";

import {Users} from "@/components/ui/Icons";
import {dataService} from "@/services/dataService";

import Panel from "../../components/Panel";

interface UsersRow {
  nombre: string;
  apellido: string;
  dni: string;
  fecha_nacimiento: string;
  obra_social: string;
  puesto: string;
}

const USERS_DATA: UsersRow[] = [
  {
    nombre: "Empleado1",
    apellido: "Empleado1",
    dni: "11111111",
    fecha_nacimiento: "1990-01-01",
    obra_social: "11111111",
    puesto: "11111111",
  },
  {
    apellido: "Empleado2",
    nombre: "Empleado2",
    dni: "11111111",
    fecha_nacimiento: "1990-01-01",
    obra_social: "11111111",
    puesto: "11111111",
  },
];

export default function EmpleadosPage() {
  // const [companie, setCompanie] = useState<UserCompany | null>(null);
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState<UserPatient[]>([]);

  useEffect(() => {
    const data = async () => {
      try {
        // const res = await dataService.getCompanie();
        const res2 = await dataService.getPatientsFilters();

        setEmployees(res2);
        // setCompanie(res);
        setLoading(false);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    void data();
  }, []);

  if (loading)
    return (
      <Panel pageIcon={<Users />} pageTitle="Empleados">
        <p>Cargando...</p>
      </Panel>
    );

  return (
    <Panel pageIcon={<Users />} pageTitle="Empleados">
      <div className="flex flex-col items-end gap-5 overflow-x-auto">
        <Link
          className="flex w-max items-center gap-2 rounded-xl border px-3 py-1"
          href="/system/empleados/add"
        >
          <p className="text-sm">Agregar empleado</p>
          <p className="text-xl font-bold">+</p>
        </Link>
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-[#3A3A3A] text-white">
              <th className="border-r border-[#4A4A4A] px-3 py-2 text-left">Nombre completo</th>
              <th className="border-r border-[#4A4A4A] px-3 py-2 text-left">DNI</th>
              <th className="border-r border-[#4A4A4A] px-3 py-2 text-left">Fecha de nacimiento</th>
              <th className="border-r border-[#4A4A4A] px-3 py-2 text-left">Obra social</th>
              <th className="border-r border-[#4A4A4A] px-3 py-2 text-left">Puesto</th>
              <th className="border-r border-[#4A4A4A] px-3 py-2 text-center text-wrap">
                Historial de resultados
              </th>
              <th className="px-3 py-2 text-center">Eliminar</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((row, idx) => (
              <tr key={idx} className="border-t border-[#4A4A4A] bg-[#333333] text-white">
                <td className="border-r border-[#4A4A4A] px-3 py-2">{row.first_name}</td>
                <td className="border-r border-[#4A4A4A] px-3 py-2">{row.dni}</td>
                <td className="border-r border-[#4A4A4A] px-3 py-2">{row.date_of_birth}</td>
                <td className="border-r border-[#4A4A4A] px-3 py-2">{row.social_security}</td>
                <td className="border-r border-[#4A4A4A] px-3 py-2">Empleado</td>
                <td className="border-r border-[#4A4A4A] px-3 py-2 text-center underline">
                  <Link href={`/system/empleados/${row.id}`}>Ver</Link>
                </td>
                <td className="px-3 py-2 text-center underline">
                  <button className="cursor-pointer">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}
