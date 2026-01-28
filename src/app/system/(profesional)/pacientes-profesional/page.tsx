"use client";
import Link from "next/link";
import {useEffect, useState} from "react";

import {UserPatient} from "@/types";

import {Pacientes} from "@/components/ui/Icons";
import {dataService} from "@/services/dataService";

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
  const [patients, setPatients] = useState<UserPatient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = async () => {
      try {
        const res = await dataService.getPatients();

        setPatients(res);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    void data();
  }, []);

  if (loading) {
    return (
      <Panel pageIcon={<Pacientes />} pageTitle="Pacientes">
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-blue-600" />
        </div>
      </Panel>
    );
  }

  if (patients.length === 0) {
    return (
      <Panel pageIcon={<Pacientes />} pageTitle="Pacientes">
        <p>No hay pacientes</p>
      </Panel>
    );
  }

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
          {patients.map((row, idx) => (
            <tr key={idx} className="border-t border-[#4A4A4A] bg-[#333333] text-white">
              <td className="border-r border-[#4A4A4A] px-3 py-2">{row.first_name}</td>
              <td className="border-r border-[#4A4A4A] px-3 py-2">{row.last_name}</td>
              <td className="border-r border-[#4A4A4A] px-3 py-2">{row.dni}</td>
              <td className="border-r border-[#4A4A4A] px-3 py-2">{row.date_of_birth}</td>
              <td className="border-r border-[#4A4A4A] px-3 py-2">{row.insurance}</td>
              <td className="border-r border-[#4A4A4A] px-3 py-2 text-center underline">
                <Link href={`/system/pacientes-profesional/${row.id}`}>Ver</Link>
              </td>
              <td className="px-3 py-2 text-center underline">
                <Link href={`/system/medical-history/${row.id}`}>Acceder</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Panel>
  );
}
