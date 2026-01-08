import Link from "next/link";

import {Estudies, Trash} from "@/components/ui/Icons";

import Panel from "../../components/Panel";

export default function StudiesPanelPage() {
  return (
    <Panel pageIcon={<Estudies />} pageTitle="Estudios">
      <div className="flex justify-end">
        <Link
          className="flex w-max items-center gap-2 rounded-xl border px-3 py-1"
          href="/system/estudios/add"
        >
          <p className="text-sm">Agregar estudio</p>
          <p className="text-xl font-bold">+</p>
        </Link>
      </div>
      {/* Tabla de Estudios */}
      <div className="mt-6 overflow-hidden rounded-lg">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-neutral-800 text-white">
              <th className="border-b border-neutral-700 px-6 py-4 text-left text-sm font-medium">
                Nombre del Estudio
              </th>
              <th className="border-b border-neutral-700 px-6 py-4 text-left text-sm font-medium">
                Imagen
              </th>
              <th className="w-16 border-b border-neutral-700" />
            </tr>
          </thead>
          <tbody>
            {[
              {name: "Electrocardiogramas", hasImage: true},
              {name: "Electroencefalogramas", hasImage: true},
              {name: "Espirometrías", hasImage: true},
              {name: "Ergometrías", hasImage: true},
              {name: "Radiografías", hasImage: true},
              {name: "Ecografías", hasImage: true},
              {name: "Psicotécnicos", hasImage: true},
              {name: "Audiometrías", hasImage: true},
              {name: "Análisis clínicos de laboratorio", hasImage: true},
            ].map((estudio, index) => (
              <tr
                key={index}
                className="hover:bg-neutral-750 border-b border-neutral-700 bg-neutral-800 transition-colors"
              >
                <td className="px-6 py-4 text-sm text-white">{estudio.name}</td>
                <td className="px-6 py-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500">
                    <svg
                      className="h-5 w-5 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </div>
                </td>
                <td className="px-4 py-4">
                  <button
                    aria-label={`Eliminar ${estudio.name}`}
                    className="cursor-pointer rounded p-2 text-neutral-400 transition-colors hover:bg-neutral-700 hover:text-red-500"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}
