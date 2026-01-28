"use client";

import {useEffect, useState} from "react";

import {UserCompany} from "@/types";

import {Users} from "@/components/ui/Icons";
import {dataService} from "@/services/dataService";

import Panel from "../../components/Panel";

export default function MisDatosEmpresaPage() {
  const [data, setData] = useState<UserCompany>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = async () => {
      const res = await dataService.getCompanie();

      setData(res[0]);
      setLoading(false);
    };

    void data();
  }, []);

  if (loading) {
    return (
      <Panel pageIcon={<Users />} pageTitle="Mis datos">
        <p>Cargando...</p>
      </Panel>
    );
  }

  return (
    <Panel pageIcon={<Users />} pageTitle="Mis datos">
      <form className="mt-10 flex flex-col gap-2">
        <label className="text-lg font-bold italic" htmlFor="nombre_empresa">
          Nombre de la empresa *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">{data?.name}</p>
        <label className="text-lg font-bold italic" htmlFor="nombre_responsable">
          Nombre del responsable *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">
          {data?.responsable_name}
        </p>
        <label className="text-lg font-bold italic" htmlFor="dni_cuit">
          DNI/CUIT *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">{data?.cuit}</p>
        <label className="text-lg font-bold italic" htmlFor="obra_social">
          Correo electrónico *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">{data?.email}</p>
        <label className="text-lg font-bold italic" htmlFor="puesto">
          Teléfono de contacto *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">{data?.phone}</p>
      </form>
    </Panel>
  );
}
