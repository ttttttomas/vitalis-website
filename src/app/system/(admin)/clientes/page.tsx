"use client";
import {useEffect, useState} from "react";
import Link from "next/link";

import {UserCompany, UserPatient} from "@/types";

import {Clients} from "@/components/ui/Icons";
import {dataService} from "@/services/dataService";

import Panel from "../../components/Panel";

type Mode = "empresas" | "pacientes";

const getStudyDetail = (studyType?: string) => {
  if (!studyType) return "Sin estudio asignado";
  const trimmed = studyType.trim().toLowerCase();

  if (trimmed === "estudio1" || trimmed === "basico de ley" || trimmed === "básico de ley") {
    return "Básico de ley (Consentimiento informado + ECG + Radiografía de Tórax frente, Exámen Clínico)";
  }
  if (
    trimmed === "estudio2" ||
    trimmed === "básico + eeg + audiometría + psicotécnico + rx" ||
    trimmed === "basico + eeg + audiometria + psicotecnico + rx"
  ) {
    return "Básico de ley + EEG + Audiometria+ Psicotécnico + Radiografía de CLS frente y perfil";
  }
  if (
    trimmed === "estudio3" ||
    trimmed === "básico + eeg + audiometría + psicotécnico + rx + drogas" ||
    trimmed === "basico + eeg + audiometria + psicotecnico + rx + drogas"
  ) {
    return "Básico de ley + EEG+ Audiometría+ Psicotécnico + Radiografía de CLS frente y perfil + Drogas de abuso con Benzodiacepinas y derivados";
  }
  if (
    trimmed === "estudio4" ||
    trimmed === "básico + eeg + audiometría + psicotécnico + rx + drogas (m/c)" ||
    trimmed === "basico + eeg + audiometria + psicotecnico + rx + drogas (m/c)"
  ) {
    return "Básico de ley + EEG + Audiometria + Psicotecnico + Radiografía de CLS y CC frente y perfil + Drogas de abuso (Marihuana y Cocaina)";
  }
  if (
    trimmed === "estudio5" ||
    trimmed === "básico + eeg + audiometría + psicotécnico + rx + drogas + test cereal + espiro" ||
    trimmed === "basico + eeg + audiometria + psicotecnico + rx + drogas + test cereal + espiro"
  ) {
    return "Básico de ley + EEG+ Audiometria + Psicotécnico + Radiografía de CLS frente y perfil + Drogas de abuso con benzodiacepinas y derivados+ Test del cereal + Espirometría";
  }

  return studyType;
};

export default function ClientesAdminPage() {
  const [mode, setMode] = useState<Mode>("empresas");
  const isEmpresas = mode === "empresas";
  const [patients, setPatients] = useState<UserPatient[]>([]);
  const [companies, setCompanies] = useState<UserCompany[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

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

  // Reset search when switching tabs
  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    setSearch("");
  };

  const filteredCompanies = companies.filter((c) => {
    const q = search.toLowerCase();
    return (
      c.name?.toLowerCase().includes(q) ||
      c.responsable_name?.toLowerCase().includes(q)
    );
  });

  const filteredPatients = patients.filter((p) => {
    const q = search.toLowerCase();
    const fullName = `${p.first_name ?? ""} ${p.last_name ?? ""}`.toLowerCase();
    return (
      p.first_name?.toLowerCase().includes(q) ||
      p.last_name?.toLowerCase().includes(q) ||
      fullName.includes(q)
    );
  });

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
        <div className="grid grid-cols-2 text-center text-sm font-semibold">
          <button
            className={`cursor-pointer py-2 transition-all ${isEmpresas ? "bg-[#3F5C3B] text-white" : "bg-green text-blackW"}`}
            type="button"
            onClick={() => handleModeChange("empresas")}
          >
            Empresas
          </button>
          <button
            className={`cursor-pointer py-2 transition-all ${!isEmpresas ? "bg-[#3F5C3B] text-white" : "bg-[#A3DFA3] text-black"}`}
            type="button"
            onClick={() => handleModeChange("pacientes")}
          >
            Pacientes
          </button>
        </div>

        {/* Barra de búsqueda */}
        <div className="my-3 px-1">
          <input
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-black placeholder-gray-400 focus:border-blue-400 focus:outline-none"
            id="clientes-search"
            placeholder={isEmpresas ? "Buscar por nombre de empresa o responsable..." : "Buscar por nombre o apellido..."}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Tabla */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              {isEmpresas ? (
                <tr className="my-2 bg-[#3A3A3A] text-white">
                  <th className="px-3 py-2 text-left">Nombre empresa</th>
                  <th className="px-3 py-2 text-left">Nombre responsable</th>
                  <th className="px-3 py-2 text-left">CUIT</th>
                  <th className="px-3 py-2 text-left">Correo electrónico</th>
                  <th className="px-3 py-2 text-left">Teléfono</th>
                  <th className="px-3 py-2 text-left">Empleados</th>
                </tr>
              ) : (
                <tr className="bg-[#3A3A3A] text-white">
                  <th className="px-3 py-2 text-left">Nombre</th>
                  <th className="px-3 py-2 text-left">Apellido</th>
                  <th className="px-3 py-2 text-left">DNI</th>
                  <th className="px-3 py-2 text-left">Fecha de nacimiento</th>
                  <th className="px-3 py-2 text-left">Teléfono</th>
                  <th className="px-3 py-2 text-left">Obra social</th>
                  <th className="px-3 py-2 text-left">Resultados</th>
                  <th className="px-3 py-2 text-left">Ficha</th>
                  <th className="px-3 py-2 text-left">Tipo de estudio</th>
                </tr>
              )}
            </thead>

            <tbody>
              {isEmpresas
                ? filteredCompanies.map((row, idx) => (
                    <tr key={idx} className="border-t border-[#4A4A4A] bg-[#333333] text-white">
                      <td className="px-3 py-2">{row.name}</td>
                      <td className="px-3 py-2">{row.responsable_name}</td>
                      <td className="px-3 py-2">{row.cuit}</td>
                      <td className="px-3 py-2">{row.email}</td>
                      <td className="px-3 py-2">{row.phone}</td>
                      <td className="px-3 py-2">
                        <Link
                          className="cursor-pointer text-center text-xs underline"
                          href={`/system/clientes/empresa/${row.id}`}
                        >
                          Ver
                        </Link>
                      </td>
                    </tr>
                  ))
                : filteredPatients.map((row, idx) => (
                    <tr
                      key={idx}
                      className="text-md border-t border-[#4A4A4A] bg-[#333333] text-white"
                    >
                      <td className="px-3 py-2">{row.first_name || "-"}</td>
                      <td className="px-3 py-2">{row.last_name || "-"}</td>
                      <td className="px-3 py-2">{row.dni || "-"}</td>
                      <td className="px-3 py-2">{row.date_of_birth || "-"}</td>
                      <td className="px-3 py-2">{row.phone || "-"}</td>
                      <td className="px-3 py-2">{row.social_security || "-"}</td>
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
                      <td
                        className="cursor-help px-3 py-2 underline decoration-dotted"
                        title={getStudyDetail(row.study_type)}
                      >
                        {row.study_type ?? "-"}
                      </td>
                    </tr>
                  ))}

              {isEmpresas && filteredCompanies.length === 0 && (
                <tr className="border-t border-[#4A4A4A] bg-[#333333] text-white">
                  <td className="px-3 py-4 text-center" colSpan={6}>
                    No se encontraron empresas{search ? ` para "${search}"` : ""}.
                  </td>
                </tr>
              )}
              {!isEmpresas && filteredPatients.length === 0 && (
                <tr className="border-t border-[#4A4A4A] bg-[#333333] text-white">
                  <td className="px-3 py-4 text-center" colSpan={9}>
                    No se encontraron pacientes{search ? ` para "${search}"` : ""}.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Panel>
  );
}
