'use client';

import { useState } from 'react';
import SignatureCanvas, { useSignatureCanvas } from '@/components/SignatureCanvas';

export default function SignatureExamplePage() {
  const [signatureData, setSignatureData] = useState<string>('');
  const [apiResponse, setApiResponse] = useState<string>('');
  const { canvasRef, clear, exportAsImage, exportAsBlob, isEmpty } = useSignatureCanvas();

  const handleExportToPNG = () => {
    const imageData = exportAsImage('png');
    setSignatureData(imageData);
    console.log('Signature exported as PNG:', imageData);
  };

  const handleExportToJPG = () => {
    const imageData = exportAsImage('jpg');
    setSignatureData(imageData);
    console.log('Signature exported as JPG:', imageData);
  };

  const handleSendToAPI = async () => {
    if (isEmpty()) {
      alert('Por favor, dibuja una firma primero');
      return;
    }

    try {
      const blob = await exportAsBlob('png');
      if (!blob) {
        alert('Error al exportar la firma');
        return;
      }

      // Crear FormData para enviar la imagen
      const formData = new FormData();
      formData.append('signature', blob, 'firma.png');

      // Ejemplo de envío a API externa
      // Descomentar y reemplazar con tu endpoint real
      /*
      const response = await fetch('https://tu-api-externa.com/upload-signature', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        setApiResponse(JSON.stringify(result, null, 2));
        alert('Firma enviada exitosamente!');
      } else {
        alert('Error al enviar la firma');
      }
      */

      // Simulación de respuesta de API para demostración
      setApiResponse(
        JSON.stringify(
          {
            success: true,
            message: 'Firma recibida correctamente',
            timestamp: new Date().toISOString(),
            size: blob.size,
          },
          null,
          2
        )
      );
      alert('Firma preparada para enviar a API (simulación)');
    } catch (error) {
      console.error('Error:', error);
      alert('Error al procesar la firma');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Componente de Firma Digital
        </h1>

        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Dibuja tu firma
          </h2>
          <SignatureCanvas
            ref={canvasRef}
            width={600}
            height={300}
            strokeWidth={2}
            strokeColor="#000000"
            backgroundColor="#ffffff"
          />
        </div>

        <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Acciones
          </h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={clear}
              className="rounded-lg bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600"
            >
              Limpiar Firma
            </button>
            <button
              onClick={handleExportToPNG}
              className="rounded-lg bg-green-500 px-4 py-2 text-white transition-colors hover:bg-green-600"
            >
              Exportar a PNG
            </button>
            <button
              onClick={handleExportToJPG}
              className="rounded-lg bg-yellow-500 px-4 py-2 text-white transition-colors hover:bg-yellow-600"
            >
              Exportar a JPG
            </button>
            <button
              onClick={handleSendToAPI}
              className="rounded-lg bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600"
            >
              Enviar a API
            </button>
          </div>
        </div>

        {signatureData && (
          <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Vista Previa de Firma Exportada
            </h2>
            <img
              src={signatureData}
              alt="Firma exportada"
              className="border border-gray-300 rounded-lg"
            />
            <div className="mt-4">
              <p className="text-sm text-gray-600 break-all">
                Data URL (primeros 100 caracteres): {signatureData.substring(0, 100)}...
              </p>
            </div>
          </div>
        )}

        {apiResponse && (
          <div className="mb-8 rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Respuesta de API (simulada)
            </h2>
            <pre className="overflow-x-auto rounded bg-gray-100 p-4 text-sm">
              {apiResponse}
            </pre>
          </div>
        )}

        <div className="rounded-lg bg-blue-50 p-6">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Instrucciones de Uso
          </h2>
          <div className="space-y-3 text-gray-700">
            <p>
              <strong>1. Dibujar:</strong> Usa el mouse o touch para dibujar tu firma en el canvas.
            </p>
            <p>
              <strong>2. Limpiar:</strong> Haz clic en "Limpiar Firma" para borrar y empezar de nuevo.
            </p>
            <p>
              <strong>3. Exportar:</strong> Exporta la firma como PNG o JPG para obtener el data URL.
            </p>
            <p>
              <strong>4. Enviar a API:</strong> El botón "Enviar a API" muestra cómo enviar la firma como FormData a un endpoint externo.
            </p>
            <div className="mt-4 rounded bg-white p-4">
              <p className="mb-2 font-semibold">Ejemplo de integración con API:</p>
              <pre className="overflow-x-auto text-xs">
{`const blob = await exportAsBlob('png');
const formData = new FormData();
formData.append('signature', blob, 'firma.png');

const response = await fetch('https://tu-api.com/upload', {
  method: 'POST',
  body: formData,
});`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
