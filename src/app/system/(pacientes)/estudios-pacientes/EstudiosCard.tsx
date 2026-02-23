import {useEffect, useState} from "react";

import {UserAdmin, UserCompany, UserPatient, UserProfessional, Studies} from "@/types";

import {apiClient} from "@/lib/axios";
import {authService} from "@/services/authService";
import {dataService} from "@/services/dataService";

export default function EstudiosCard({studies}: {studies: Studies}) {
  const [userData, setUserData] = useState<
    UserAdmin | UserCompany | UserPatient | UserProfessional | null
  >(null);

  useEffect(() => {
    const fetchUser = async () => {
      const {user} = await authService.getCurrentUser();

      setUserData(user ?? null);
    };

    void fetchUser();
  }, []);

  const downloadStudy = async () => {
    try {
      // Hacer petición al backend para obtener la URL del archiv o
      const response = await apiClient.get<{
        url: string;
        original_filename: string;
        mime_type: string;
      }>(`/studies/files/${studies.id}`, {
        withCredentials: true,
      });

      const {url, original_filename} = response.data;

      const link = document.createElement("a");

      link.href = url;
      link.download = original_filename;
      link.target = "_blank"; // Abrir en nueva pestaña por si el navegador no descarga directamente
      document.body.appendChild(link);
      link.click();

      // Limpiar
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error descargando el estudio:", error);
      alert("Error al descargar el archivo. Por favor, intenta nuevamente.");
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-yellow-200";
      case "Disponible":
        return "text-green-400";
      default:
        return "text-red-400";
    }
  };

  const updateStudyStatus = async () => {
    try {
      await dataService.changeStudyStatus(studies.id, {
        status: "Disponible",
        study_type: studies.study_type,
      });
      alert("Estudio actualizado correctamente");
      window.location.reload();
    } catch (error) {
      console.error("Error actualizando el estudio:", error);
      alert("Error al actualizar el estudio. Por favor, intenta nuevamente.");
    }
  };

  return (
    <section className="bg-blue md:text-md flex w-full items-center justify-between gap-5 rounded-xl p-5 text-sm text-white">
      <div className="flex gap-2">
        <img alt="image-estudie" className="size-10" src="/estudios1.png" />
        <div>
          <div className="flex items-center gap-2 text-sm">
            <p>Estudio:</p>
            <b>{studies.study_type}</b>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <p>Realizado el:</p>
            <b>{studies.created_at?.split("T")[0]}</b>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="flex flex-col items-start gap-2">
          <p className="flex items-center gap-1">
            Estado:
            <b className={getStatusColor(studies.status)}>
              {studies.status === "pending"
                ? "Pendiente"
                : studies.status === "Disponible"
                  ? "Disponible"
                  : "No reconocido"}
            </b>
          </p>
          {studies.status === "Disponible" && userData?.role === "patient" && (
            <button className="cursor-pointer underline" onClick={() => void downloadStudy()}>
              Descargar PDF
            </button>
          )}
          {userData?.role === "professional" && (
            <button className="cursor-pointer underline" onClick={() => void downloadStudy()}>
              Descargar PDF
            </button>
          )}
        </div>
        {userData?.role === "professional" && studies.status === "pending" && (
          <button className="cursor-pointer underline" onClick={() => void updateStudyStatus()}>
            Cambiar a disponible
          </button>
        )}
      </div>
    </section>
  );
}
