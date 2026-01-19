"use client";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";

import {UserPatient} from "@/types";

import {Clients, Lupa} from "@/components/ui/Icons";
import {dataService} from "@/services/dataService";

import Panel from "../../components/Panel";

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

export default function ClientesAdminPage() {
  const [mode, setMode] = useState<Mode>("empresas");
  const [selectedClient, setSelectedClient] = useState<string | null>(null);
  const isEmpresas = mode === "empresas";
  const [patients, setPatients] = useState<UserPatient[]>([]);
  const [fileName, setFileName] = useState<string>("Sin archivos seleccionados");
  const [studyType, setStudyType] = useState<string>("");
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [date, setDate] = useState<string>("");

  const handleClick = (id: string) => () => {
    setSelectedClient(id);
    openModal();
  };

  useEffect(() => {
    const getPatients = async () => {
      const patients = await dataService.getPatients();

      setPatients(patients);
    };

    void getPatients();
  }, []);

  const openModal = () => {
    setMode("empresas");
  };

  const closeModal = () => {
    setSelectedClient(null);
    setMode("empresas");
  };

  const handleChangeStudyType = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStudyType(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selectedClient) {
      console.error("No client selected");

      return;
    }

    const f = new FormData();

    f.append("study_files", fileRef.current?.files?.[0]);
    f.append("study_type", studyType);
    f.append("status", "pending");

    const res = await dataService.postStudie(selectedClient, f);

    console.log(res);
  };

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
                      <td className="px-3 py-2">{row.role}</td>
                      <td className="px-3 py-2">
                        <button
                          className="cursor-pointer text-xs underline"
                          onClick={handleClick(row.id)}
                        >
                          Subir
                        </button>
                      </td>
                      <td className="px-3 py-2">
                        <Link
                          className="cursor-pointer text-xs underline"
                          href="/system/medical-history/1"
                        >
                          Acceder
                        </Link>
                      </td>
                    </tr>
                    // <div className="px-3 py-2 text-center">
                    //   <button className="px-2 py-1 text-xs text-white">🗑</button>
                    // </div>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
      {selectedClient && (
        <section className="bg-primary fixed top-1/2 left-1/2 z-50 max-h-[95vh] w-[80%] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-xl shadow-2xl">
          <div className="flex w-full flex-col items-center justify-center gap-6 bg-[#f4f6f8] px-6 py-10">
            <img alt="Logo" className="w-28" src="/logo.png" />
            <form className="w-full max-w-3xl space-y-4" onSubmit={handleSubmit}>
              {/* Fecha */}
              <div className="relative">
                <input
                  required
                  className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-900 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                {/* Icono calendario (opcional, porque type=date ya trae uno en muchos navegadores) */}
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-400">
                  {/* <Calendar /> */}
                </div>
              </div>

              {/* Select */}
              <div className="relative">
                <select
                  className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-900 outline-none focus:border-gray-400 focus:ring-2 focus:ring-gray-200"
                  onChange={handleChangeStudyType}
                >
                  <option disabled className="text-gray-400" value="Estudio">
                    Estudio realizado
                  </option>
                  <option value="Electrocardiograma">Electrocardiograma</option>
                  <option value="Electroencefalograma">Electroencefalograma</option>
                  <option value="Espirometria">Espirometría</option>
                  <option value="Ergometria">Ergometría</option>
                  <option value="Radiografia">Radiografía</option>
                  <option value="Ecografia">Ecografía</option>
                  <option value="Psicotecnico">Psicotécnico</option>
                  <option value="Audiometria">Audiometría</option>
                  <option value="analisis-clinico">Análisis clínico de laboratorio</option>
                </select>

                {/* Flecha custom */}
                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500">
                  ▾
                </div>
              </div>

              {/* Subir PDF (custom) */}
              <div className="space-y-1">
                <input
                  ref={fileRef}
                  accept="application/pdf"
                  className="hidden"
                  id="pdf"
                  name="pdf"
                  type="file"
                  onChange={(e) => {
                    const f = e.target.files?.[0];

                    setFileName(f ? f.name : "Sin archivos seleccionados");
                  }}
                />

                <button
                  className="flex w-full cursor-pointer items-center gap-3 text-gray-900"
                  type="button"
                  onClick={() => fileRef.current?.click()}
                >
                  <span className="text-xl">⤴</span>
                  <span className="font-medium">Subir PDF</span>
                </button>

                <p className="text-sm text-gray-500">{fileName}</p>
              </div>

              {/* Botones */}
              <div className="space-y-3 pt-2">
                <button
                  className="w-full cursor-pointer rounded-xl bg-sky-500 py-3 font-semibold text-white shadow-sm transition hover:bg-sky-600 active:scale-[0.99]"
                  type="submit"
                >
                  Subir
                </button>

                <button
                  className="w-full cursor-pointer rounded-xl border border-gray-300 bg-white py-3 font-semibold text-gray-900 transition hover:bg-gray-50"
                  type="button"
                  onClick={closeModal}
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </Panel>
  );
}
