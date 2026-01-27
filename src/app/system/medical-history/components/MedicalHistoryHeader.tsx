import React from "react";
import {Raleway, Patua_One} from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const patuaOne = Patua_One({
  subsets: ["latin"],
  weight: ["400"],
});

interface MedicalHistoryHeaderProps {
  onSave: () => void | Promise<void>;
  saving?: boolean;
  saved?: boolean;
  error?: string | null;
}

export const MedicalHistoryHeader = React.memo(
  ({onSave, saving, saved, error}: MedicalHistoryHeaderProps) => {
    return (
      <div className="mx-auto flex flex-col items-center gap-3">
        <img alt="Logo" className="mx-auto" src="/logo.png" width={200} />
        <h1 className={`text-center text-[69px] font-bold text-[#134173] ${raleway.className}`}>
          VITALIS
        </h1>
        <h2 className="text-center text-[36px] font-semibold text-black">
          Centro de salud integral
        </h2>
        <p className="font-bold">Salud Ocupacional</p>
        <small>(Ley 19.587 y 7.229) (Dcto. 658/96) (Res. SRT 37/2010)</small>
        <p className={patuaOne.className + " font-bold"}>MEDICINA LABORAL</p>
        <button
          className="bg-orange my-5 cursor-pointer rounded-md border border-black px-10 py-2 text-lg font-bold disabled:opacity-50"
          disabled={saving}
          type="button"
          onClick={() => void onSave()}
        >
          Guardar
        </button>

        {saving && <p className="font-bold text-blue-600">Guardando...</p>}
        {!saving && error && <p className="font-bold text-red-600">Error: {error}</p>}
        {!saving && !error && saved && (
          <p className="font-bold text-green-600">¡Historial médico guardado!</p>
        )}
      </div>
    );
  },
);

MedicalHistoryHeader.displayName = "MedicalHistoryHeader";
