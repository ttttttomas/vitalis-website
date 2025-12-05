"use client";
import {useState} from "react";

import {Clients, Lupa} from "@/components/ui/Icons";

import Panel from "../components/Panel";

type Mode = "empresas" | "pacientes";

interface EmpresaRow {
  nombreEmpresa: string;
  responsable: string;
  dniCuit: string;
  email: string;
  telefono: string;
  password: string;
}

interface PacienteRow {
  nombreCompleto: string;
  dni: string;
  fechaNacimiento: string;
  email: string;
  telefono: string;
  obraSocial: string;
  password: string;
}

const EMPRESAS_DATA: EmpresaRow[] = [
  {
    nombreEmpresa: "Vitalis",
    responsable: "Adrián Pérez",
    dniCuit: "11111111",
    email: "empresa@gmail.com",
    telefono: "1121212121",
    password: "******",
  },
  // repetí o reemplazá con tu data real
];

const PACIENTES_DATA: PacienteRow[] = [
  {
    nombreCompleto: "Adrián Perez",
    dni: "11111111",
    fechaNacimiento: "01/01/1990",
    email: "correo@gmail.com",
    telefono: "1121212121",
    obraSocial: "-",
    password: "******",
  },
  // repetí o reemplazá con tu data real
];

export default function ClientesAdminPage() {
  const [mode, setMode] = useState<Mode>("empresas");

  const isEmpresas = mode === "empresas";

  return (
    <Panel pageIcon={<Clients />} pageTitle="Clientes" roles="admin" userLabel="Nombre - Admin">
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
                  <th className="px-3 py-2 text-left">Contraseña</th>
                </tr>
              ) : (
                <tr className="bg-[#3A3A3A] text-white">
                  <th className="px-3 py-2 text-left">
                    Nombre completo <Lupa />
                  </th>
                  <th className="px-3 py-2 text-left">DNI</th>
                  <th className="px-3 py-2 text-left">Fecha de nacimiento</th>
                  <th className="px-3 py-2 text-left">Correo electrónico</th>
                  <th className="px-3 py-2 text-left">Teléfono</th>
                  <th className="px-3 py-2 text-left">
                    Obra social <Lupa />
                  </th>
                  <th className="px-3 py-2 text-left">Contraseña</th>
                  <th className="px-3 py-2 text-left">Resultados</th>
                  <th className="px-3 py-2 text-left">Ficha</th>
                </tr>
              )}
            </thead>

            <tbody>
              {isEmpresas
                ? EMPRESAS_DATA.map((row, idx) => (
                    <tr key={idx} className="border-t border-[#4A4A4A] bg-[#333333] text-white">
                      <td className="px-3 py-2">{row.nombreEmpresa}</td>
                      <td className="px-3 py-2">{row.responsable}</td>
                      <td className="px-3 py-2">{row.dniCuit}</td>
                      <td className="px-3 py-2">{row.email}</td>
                      <td className="px-3 py-2">{row.telefono}</td>
                      <td className="px-3 py-2">{row.password}</td>
                    </tr>
                  ))
                : PACIENTES_DATA.map((row, idx) => (
                    <tr
                      key={idx}
                      className="text-md border-t border-[#4A4A4A] bg-[#333333] text-white"
                    >
                      <td className="px-3 py-2">{row.nombreCompleto}</td>
                      <td className="px-3 py-2">{row.dni}</td>
                      <td className="px-3 py-2">{row.fechaNacimiento}</td>
                      <td className="px-3 py-2">{row.email}</td>
                      <td className="px-3 py-2">{row.telefono}</td>
                      <td className="px-3 py-2">{row.obraSocial}</td>
                      <td className="px-3 py-2">{row.password}</td>
                      <td className="px-3 py-2">
                        <button className="text-xs underline">Subir</button>
                      </td>
                      <td className="px-3 py-2">
                        <button className="text-xs underline">Acceder</button>
                      </td>
                    </tr>
                    //   <div className="px-3 py-2 text-center">
                    //     <button className="px-2 py-1 text-xs text-white">🗑</button>
                    //   </div>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </Panel>
  );
}
