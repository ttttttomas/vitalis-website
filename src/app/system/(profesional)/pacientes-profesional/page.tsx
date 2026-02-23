"use client";
import Link from "next/link";
import {useEffect, useState} from "react";

import {UserPatient} from "@/types";

import {Pacientes} from "@/components/ui/Icons";
import {dataService} from "@/services/dataService";

import Panel from "../../components/Panel";

export default function PacientesProfesional() {
  const [patients, setPatients] = useState<UserPatient[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchName, setSearchName] = useState("");

  const filteredPatients = patients.filter((patient) =>
    patient.first_name.toLowerCase().includes(searchName.toLowerCase()),
  );

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
      <h1 className="font-semibold">Filtrar por nombre</h1>
      <input
        className="my-5 w-full rounded-md border border-[#4A4A4A] px-3 py-2"
        placeholder="Buscar"
        type="text"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
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
          {filteredPatients.map((row, idx) => (
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
