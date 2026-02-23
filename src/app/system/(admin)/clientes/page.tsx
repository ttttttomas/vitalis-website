"use client";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";

import {UserCompany, UserPatient} from "@/types";

import {Clients, Lupa} from "@/components/ui/Icons";
import {dataService} from "@/services/dataService";

import Panel from "../../components/Panel";

type Mode = "empresas" | "pacientes";

export default function ClientesAdminPage() {
  const [mode, setMode] = useState<Mode>("empresas");
  const isEmpresas = mode === "empresas";
  const [patients, setPatients] = useState<UserPatient[]>([]);
  const [companies, setCompanies] = useState<UserCompany[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getPatients = async () => {
      const patients = await dataService.getPatients();
      const companies = await dataService.getCompanie();

      setPatients(patients);
      setCompanies(companies);
      setLoading(false);
    };

    void getPatients();
  }, []);

  if (loading) {
    return (
      <Panel pageIcon={<Clients />} pageTitle="Clientes">
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-blue-600" />
        </div>
      </Panel>
    );
  }

  return (
    <Panel pageIcon={<Clients />} pageTitle="Clientes">
      <div className="w-full">
        {/* Header verde con toggle */}
        <div className="grid grid-cols-2 text-center text-sm font-semibold text-white">
          <button
            className={`cursor-pointer py-2 transition-all ${isEmpresas ? "bg-[#3F5C3B]" : "bg-green"}`}
            type="button"
            onClick={() => setMode("empresas")}
          >
            Empresas
          </button>
          <button
            className={`cursor-pointer py-2 transition-all ${!isEmpresas ? "bg-[#3F5C3B]" : "bg-[#A3DFA3]"}`}
            type="button"
            onClick={() => setMode("pacientes")}
          >
            Pacientes
          </button>
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              {isEmpresas ? (
                <tr className="bg-[#3A3A3A] text-white">
                  <th className="px-3 py-2 text-left">
                    Nombre empresa <Lupa />
                  </th>
                  <th className="px-3 py-2 text-left">
                    Nombre responsable <Lupa />
                  </th>
                  <th className="px-3 py-2 text-left">
                    DNI/CUIT <Lupa />
                  </th>
                  <th className="px-3 py-2 text-left">
                    Correo electrónico <Lupa />
                  </th>
                  <th className="px-3 py-2 text-left">Teléfono</th>
                  {/* <th className="px-3 py-2 text-left">Contraseña</th> */}
                </tr>
              ) : (
                <tr className="bg-[#3A3A3A] text-white">
                  <th className="px-3 py-2 text-left">Nombre completo</th>
                  <th className="px-3 py-2 text-left">DNI</th>
                  <th className="px-3 py-2 text-left">Fecha de nacimiento</th>
                  <th className="px-3 py-2 text-left">Correo electrónico</th>
                  <th className="px-3 py-2 text-left">Teléfono</th>
                  <th className="px-3 py-2 text-left">Obra social</th>
                  {/* <th className="px-3 py-2 text-left">Contraseña</th> */}
                  <th className="px-3 py-2 text-left">Resultados</th>
                  <th className="px-3 py-2 text-left">Ficha</th>
                  <th className="px-3 py-2 text-left">Tipo de estudio</th>
                </tr>
              )}
            </thead>

            <tbody>
              {isEmpresas
                ? companies.map((row, idx) => (
                    <tr key={idx} className="border-t border-[#4A4A4A] bg-[#333333] text-white">
                      <td className="px-3 py-2">{row.name}</td>
                      <td className="px-3 py-2">{row.responsable_name}</td>
                      <td className="px-3 py-2">{row.cuit}</td>
                      <td className="px-3 py-2">{row.email}</td>
                      <td className="px-3 py-2">{row.phone}</td>
                      {/* <td className="px-3 py-2">{row.password}</td> */}
                    </tr>
                  ))
                : patients.map((row, idx) => (
                    <tr
                      key={idx}
                      className="text-md border-t border-[#4A4A4A] bg-[#333333] text-white"
                    >
                      <td className="px-3 py-2">{row.first_name}</td>
                      <td className="px-3 py-2">{row.dni}</td>
                      <td className="px-3 py-2">{row.date_of_birth}</td>
                      <td className="px-3 py-2">{row.email}</td>
                      <td className="px-3 py-2">{row.phone}</td>
                      <td className="px-3 py-2">{row.role}</td>
                      <td className="px-3 py-2">
                        <Link
                          className="cursor-pointer text-xs underline"
                          href={`/system/clientes/${row.id}`}
                        >
                          Ver estud.
                        </Link>
                      </td>
                      <td className="px-3 py-2">
                        <Link
                          className="cursor-pointer text-xs underline"
                          href={`/system/medical-history/${row.id}`}
                        >
                          Acceder
                        </Link>
                      </td>
                      <td className="px-3 py-2">{row.study_type}</td>
                    </tr>
                    // <div className="px-3 py-2 text-center">
                    //   <button className="px-2 py-1 text-xs text-white">🗑</button>
                    // </div>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </Panel>
  );
}
