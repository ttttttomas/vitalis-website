import React, {useEffect} from "react";
import {useForm} from "react-hook-form";

import {MedicalRecordData} from "@/types";

import {SectionHandler} from "../../useFormRegistry";

interface Props {
  defaultValues: MedicalRecordData | null;
  registerSection: (handler: SectionHandler<MedicalRecordData>) => () => void;
}

export const PatientDataSection = React.memo(({defaultValues, registerSection}: Props) => {
  const form = useForm<MedicalRecordData>({
    defaultValues: defaultValues ?? ({} as MedicalRecordData),
    mode: "onBlur",
  });

  const {getValues, trigger, register} = form;

  useEffect(() => {
    const unregister = registerSection({
      getValues: () => getValues(),
      validate: async () => trigger(),
    });

    return unregister;
  }, [registerSection, getValues, trigger]);

  return (
    <section className="flex flex-col items-center gap-5 px-5">
      <div className="mt-7 flex w-full flex-col justify-between gap-2 text-xl font-bold md:flex-row md:text-2xl">
        <p>Datos del paciente *</p>
        {/* <p>Empresa</p> */}
      </div>
      <div className="flex w-full flex-col gap-5 md:flex-row md:gap-4">
        <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <input
            className="w-full border border-gray-500 p-2"
            placeholder="Nombre completo"
            type="text"
            {...register("complete_name")}
          />
          <input
            className="w-full border border-gray-500 p-2"
            placeholder="Fecha de nacimiento. Formato: 00/00/0000"
            type="text"
            {...register("date_of_birthday")}
          />
          <input
            className="w-full border border-gray-500 p-2"
            placeholder="Estado civil"
            type="text"
            {...register("civil_status")}
          />
          <input
            className="w-full border border-gray-500 p-2"
            placeholder="DNI"
            type="text"
            {...register("dni")}
          />
          <input
            className="w-full border border-gray-500 p-2"
            placeholder="Nacionalidad"
            type="text"
            {...register("nacionality")}
          />
          <input
            className="w-full border border-gray-500 p-2"
            placeholder="Teléfono"
            type="text"
            {...register("phone")}
          />
          <input
            className="w-full border border-gray-500 p-2"
            placeholder="Dirección"
            type="text"
            {...register("address")}
          />
          <input
            className="w-full border border-gray-500 p-2"
            placeholder="E-mail"
            type="email"
            {...register("email")}
          />
          <input
            className="w-full border border-gray-500 p-2"
            placeholder="Hijos"
            type="text"
            {...register("sons")}
          />
        </div>
        <img alt="Logo" className="hidden shrink-0 object-cover md:block" src="/logo.png" width={150} />
      </div>
      <input
        className="mx-5 mb-10 w-full border border-gray-500 p-2"
        placeholder="Tareas a realizar"
        type="text"
        {...register("tasks")}
      />
    </section>
  );
});

PatientDataSection.displayName = "PatientDataSection";
