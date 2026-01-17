import {Studies} from "@/types";

import {apiClient} from "@/lib/axios";

export default function EstudiosCard({studies}: {studies: Studies}) {
  const downloadStudy = async () => {
    try {
      // Hacer petición al backend para obtener el archivo
      const response = await apiClient.get(`/studies/${studies.id}/files`, {
        responseType: "blob", // Importante para archivos binarios
        withCredentials: true,
      });

      // Crear un URL temporal para el blob
      const blob = new Blob([response.data], {type: "application/pdf"});
      const url = window.URL.createObjectURL(blob);

      // Crear un elemento <a> temporal para descargar
      const link = document.createElement("a");

      link.href = url;
      link.download = studies.id;
      document.body.appendChild(link);
      link.click();

      // Limpiar
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error descargando el estudio:", error);
      alert("Error al descargar el archivo. Por favor, intenta nuevamente.");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pendiente":
        return "bg-yellow-500";
      case "completado":
        return "bg-green-500";
      case "cancelado":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section className="bg-blue flex w-full items-center justify-between gap-5 rounded-xl p-5 text-white">
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
      <div className="flex flex-col gap-2">
        <p>
          Estado: <b className={getStatusColor(studies.status)}>{studies.status}</b>
        </p>
        <button className="underline" onClick={() => void downloadStudy()}>
          Descargar PDF
        </button>
      </div>
    </section>
  );
}
