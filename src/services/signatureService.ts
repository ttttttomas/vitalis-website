import { apiClient } from "@/lib/axios";

/**
 * Sube la imagen de firma al servidor.
 *
 * @param blob  - Blob PNG generado por el canvas de firma
 * @param fileName - Nombre del archivo (default "firma.png")
 * @returns La respuesta de la API
 */
export async function uploadSignature(blob: Blob, fileName = "firma.png") {
  const formData = new FormData();
  formData.append("signature", blob, fileName);

  const token = typeof window !== "undefined" ? localStorage.getItem("access_token") : null;

  const response = await apiClient.post("/api/signatures/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });

  return response.data;
}
