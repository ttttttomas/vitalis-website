import {AxiosResponse} from "axios";

import {Studies} from "@/types";

import {apiClient} from "@/lib/axios";

export default function EstudiosCard({studies}: {studies: Studies}) {
  const downloadStudy = async () => {
    try {
      const response: AxiosResponse<Blob> = await apiClient.get(`/studies/files/${studies.id}`, {
        responseType: "blob",
        withCredentials: true,
      });

      const headers = response.headers as Record<string, string | undefined>;
      const contentDisposition = headers["content-disposition"];

      let filename = `study-${studies.id}.pdf`;

      if (typeof contentDisposition === "string") {
        // filename*=UTF-8''...  o  filename="..."
        const match = /filename\*?=(?:UTF-8''|")?([^";]+)"?/i.exec(contentDisposition);

        if (match?.[1]) filename = decodeURIComponent(match[1]);
      }

      const blob = response.data; // ya es Blob
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();

      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error descargando el estudio:", error);
      alert("Error al descargar el archivo. Por favor, intenta nuevamente.");
    }
  };
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "text-yellow-200";
      case "completado":
        return "text-green-200";
      case "cancelado":
        return "text-red-200";
      default:
        return "text-gray-200";
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
      <div className="flex flex-col justify-center gap-2">
        <p>
          Estado:{" "}
          <b className={getStatusColor(studies.status)}>
            {studies.status === "pending" ? "Pendiente" : studies.study_type}
          </b>
        </p>
        <button className="cursor-pointer underline" onClick={() => void downloadStudy()}>
          Descargar PDF
        </button>
      </div>
    </section>
  );
}
