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
      <div className="mt-7 flex w-full justify-between text-2xl font-bold">
        <p>Datos del paciente</p>
        <p>Empresa</p>
      </div>
      <div className="flex w-full justify-between gap-2">
        <div className="flex flex-col gap-5">
          <input
            className="border border-gray-500 p-2 xl:w-[400px]"
            placeholder="Nombre completo"
            type="text"
            {...register("complete_name")}
          />
          <input
            className="border border-gray-500 p-2 xl:w-[400px]"
            placeholder="DNI"
            type="text"
            {...register("dni")}
          />
          <input
            className="border border-gray-500 p-2 xl:w-[400px]"
            placeholder="Dirección"
            type="text"
            {...register("address")}
          />
        </div>
        <div className="flex flex-col gap-5">
          <input
            className="border border-gray-500 p-2 xl:w-[400px]"
            placeholder="Fecha de nacimiento"
            type="text"
            {...register("date_of_birthday")}
          />
          <input
            className="border border-gray-500 p-2 xl:w-[400px]"
            placeholder="Nacionalidad"
            type="text"
            {...register("nacionality")}
          />
          <input
            className="border border-gray-500 p-2 xl:w-[400px]"
            placeholder="E-mail"
            type="email"
            {...register("email")}
          />
        </div>
        <div className="flex flex-col gap-5">
          <input
            className="border border-gray-500 p-2 xl:w-[400px]"
            placeholder="Estado civil"
            type="text"
            {...register("civil_status")}
          />
          <input
            className="border border-gray-500 p-2 xl:w-[400px]"
            placeholder="Teléfono"
            type="text"
            {...register("phone")}
          />
          <input
            className="border border-gray-500 p-2 xl:w-[400px]"
            placeholder="Hijos"
            type="text"
            {...register("sons")}
          />
        </div>
        <img alt="Logo" className="object-cover" src="/logo.png" width={150} />
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
