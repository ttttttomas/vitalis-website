"use client";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useParams} from "next/navigation";

import {UserCompany, UserPatient} from "@/types";
import {ArrowLeft, Clients} from "@/components/ui/Icons";
import {dataService} from "@/services/dataService";
import Panel from "@/app/system/components/Panel";

const getStudyDetail = (studyType?: string) => {
  if (!studyType) return "Sin estudio asignado";
  const trimmed = studyType.trim().toLowerCase();
  
  if (trimmed === "estudio1" || trimmed === "basico de ley" || trimmed === "básico de ley") {
    return "Básico de ley (Consentimiento informado + ECG + Radiografía de Tórax frente, Exámen Clínico)";
  }
  if (trimmed === "estudio2" || trimmed === "básico + eeg + audiometría + psicotécnico + rx" || trimmed === "basico + eeg + audiometria + psicotecnico + rx") {
    return "Básico de ley + EEG + Audiometria+ Psicotécnico + Radiografía de CLS frente y perfil";
  }
  if (trimmed === "estudio3" || trimmed === "básico + eeg + audiometría + psicotécnico + rx + drogas" || trimmed === "basico + eeg + audiometria + psicotecnico + rx + drogas") {
    return "Básico de ley + EEG+ Audiometría+ Psicotécnico + Radiografía de CLS frente y perfil + Drogas de abuso con Benzodiacepinas y derivados";
  }
  if (trimmed === "estudio4" || trimmed === "básico + eeg + audiometría + psicotécnico + rx + drogas (m/c)" || trimmed === "basico + eeg + audiometria + psicotecnico + rx + drogas (m/c)") {
    return "Básico de ley + EEG + Audiometria + Psicotecnico + Radiografía de CLS y CC frente y perfil + Drogas de abuso (Marihuana y Cocaina)";
  }
  if (trimmed === "estudio5" || trimmed === "básico + eeg + audiometría + psicotécnico + rx + drogas + test cereal + espiro" || trimmed === "basico + eeg + audiometria + psicotecnico + rx + drogas + test cereal + espiro") {
    return "Básico de ley + EEG+ Audiometria + Psicotécnico + Radiografía de CLS frente y perfil + Drogas de abuso con benzodiacepinas y derivados+ Test del cereal + Espirometría";
  }
  
  return studyType;
};

export default function EmpresaEmpleadosPage() {
  const params = useParams();
  const companyId = params.id as string;

  const [patients, setPatients] = useState<UserPatient[]>([]);
  const [company, setCompany] = useState<UserCompany | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [patientsData, companiesData] = await Promise.all([
          dataService.getPatients(),
          dataService.getCompanie(),
        ]);

        // Filter patients belonging to this company
        const filtered = patientsData.filter(
          (p) => p.company_id === companyId
        );
        setPatients(filtered);

        // Find current company details
        const currentCompany = companiesData.find((c) => c.id === companyId);
        if (currentCompany) {
          setCompany(currentCompany);
        }
      } catch (error) {
        console.error("Error fetching company employees data:", error);
      } finally {
        setLoading(false);
      }
    };

    void fetchData();
  }, [companyId]);

  if (loading) {
    return (
      <Panel pageIcon={<Clients />} pageTitle="Empleados de Empresa">
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-blue-600" />
        </div>
      </Panel>
    );
  }

  const title = company ? `Empleados de ${company.name}` : "Empleados de Empresa";

  return (
    <Panel pageIcon={<Clients />} pageTitle={title}>
      <div className="w-full">
        {/* Back Link */}
        <div className="mb-5">
          <Link
            className="flex cursor-pointer items-center gap-1 font-bold text-black"
            href="/system/clientes"
          >
            <ArrowLeft />
            Volver
          </Link>
        </div>

        {/* Patients Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
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
            </thead>

            <tbody>
              {patients.map((row, idx) => (
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
                    className="px-3 py-2 cursor-help underline decoration-dotted"
                    title={getStudyDetail(row.study_type)}
                  >
                    {row.study_type ?? "-"}
                  </td>
                </tr>
              ))}

              {patients.length === 0 && (
                <tr className="border-t border-[#4A4A4A] bg-[#333333] text-white">
                  <td className="px-3 py-4 text-center" colSpan={9}>
                    No hay empleados registrados para esta empresa.
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
