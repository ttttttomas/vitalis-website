import React, {useEffect} from "react";
import {Controller, useForm} from "react-hook-form";

import {MedicalRecordRespiratorioExam} from "@/types";

import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

import {SectionHandler} from "../../useFormRegistry";

interface Props {
  defaultValues: MedicalRecordRespiratorioExam | null;
  registerSection: (handler: SectionHandler<MedicalRecordRespiratorioExam>) => () => void;
}

// Helper function to convert string booleans to actual booleans
const normalizeBooleanFields = (
  data: MedicalRecordRespiratorioExam | null,
): MedicalRecordRespiratorioExam | null => {
  if (!data) return null;

  const toBool = (value: any): boolean => value === "true" || value === true;

  return {
    ...data,
    deformaciones_toracicas: toBool(data.deformaciones_toracicas),
    rales: toBool(data.rales),
    roncus: toBool(data.roncus),
    murmullo_vesicular: toBool(data.murmullo_vesicular),
    adenopatias: toBool(data.adenopatias),
    proceso_agudo: toBool(data.proceso_agudo),
  };
};

export const RespiratorioExamSection = React.memo(({defaultValues, registerSection}: Props) => {
  const normalizedDefaults = normalizeBooleanFields(defaultValues);

  const form = useForm<MedicalRecordRespiratorioExam>({
    defaultValues: normalizedDefaults ?? ({} as MedicalRecordRespiratorioExam),
    mode: "onBlur",
  });

  const {getValues, trigger, register, control} = form;

  useEffect(() => {
    const unregister = registerSection({
      getValues: () => getValues(),
      validate: async () => trigger(),
    });

    return unregister;
  }, [registerSection, getValues, trigger]);

  return (
    <AccordionItem value="item-16">
      <AccordionTrigger>Examen Torácico/Respiratorio</AccordionTrigger>
      <AccordionContent>
        <div className="relative">
          <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
          <div className="flex flex-col gap-3 text-lg">
            {/* Frecuencia respiratoria */}
            <div className="flex items-center gap-2">
              <span>Frecuencia respiratoria:</span>
              <input
                {...register("freq_respiratoria", {valueAsNumber: true})}
                className="w-full border border-gray-500 p-1 md:w-[150px]"
                type="text"
              />
              <span className="text-sm italic">por minuto</span>
            </div>

            {/* Header */}
            <div className="mt-4 flex items-center">
              <div className="flex-1" />
              <div className="flex gap-3">
                <p className="w-6 text-center font-semibold">Si</p>
                <p className="w-6 text-center font-semibold">No</p>
              </div>
            </div>

            {/* Deformaciones torácicas */}
            <div className="flex items-center">
              <p className="flex-1">Deformaciones torácicas</p>
              <Controller
                control={control}
                name="deformaciones_toracicas"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-3">
                    <input
                      checked={value}
                      className="h-6 w-6 cursor-pointer"
                      type="radio"
                      onChange={() => onChange(true)}
                    />
                    <input
                      checked={!value}
                      className="h-6 w-6 cursor-pointer"
                      type="radio"
                      onChange={() => onChange(false)}
                    />
                  </div>
                )}
              />
            </div>

            {/* Rales */}
            <div className="flex items-center">
              <p className="flex-1">Rales</p>
              <Controller
                control={control}
                name="rales"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-3">
                    <input
                      checked={value}
                      className="h-6 w-6 cursor-pointer"
                      type="radio"
                      onChange={() => onChange(true)}
                    />
                    <input
                      checked={!value}
                      className="h-6 w-6 cursor-pointer"
                      type="radio"
                      onChange={() => onChange(false)}
                    />
                  </div>
                )}
              />
            </div>

            {/* Roncus y Sibilancias */}
            <div className="flex items-center">
              <p className="flex-1">Roncus y Sibilancias</p>
              <Controller
                control={control}
                name="roncus"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-3">
                    <input
                      checked={value}
                      className="h-6 w-6 cursor-pointer"
                      type="radio"
                      onChange={() => onChange(true)}
                    />
                    <input
                      checked={!value}
                      className="h-6 w-6 cursor-pointer"
                      type="radio"
                      onChange={() => onChange(false)}
                    />
                  </div>
                )}
              />
            </div>

            {/* Murmullo vesicular alterado */}
            <div className="flex items-center">
              <p className="flex-1">Murmullo vesicular alterado</p>
              <Controller
                control={control}
                name="murmullo_vesicular"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-3">
                    <input
                      checked={value}
                      className="h-6 w-6 cursor-pointer"
                      type="radio"
                      onChange={() => onChange(true)}
                    />
                    <input
                      checked={!value}
                      className="h-6 w-6 cursor-pointer"
                      type="radio"
                      onChange={() => onChange(false)}
                    />
                  </div>
                )}
              />
            </div>

            {/* Adenopatías */}
            <div className="flex items-center">
              <p className="flex-1">Adenopatías</p>
              <Controller
                control={control}
                name="adenopatias"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-3">
                    <input
                      checked={value}
                      className="h-6 w-6 cursor-pointer"
                      type="radio"
                      onChange={() => onChange(true)}
                    />
                    <input
                      checked={!value}
                      className="h-6 w-6 cursor-pointer"
                      type="radio"
                      onChange={() => onChange(false)}
                    />
                  </div>
                )}
              />
            </div>

            {/* Proceso agudo en curso */}
            <div className="flex items-center">
              <p className="flex-1">Proceso agudo en curso</p>
              <Controller
                control={control}
                name="proceso_agudo"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-3">
                    <input
                      checked={value}
                      className="h-6 w-6 cursor-pointer"
                      type="radio"
                      onChange={() => onChange(true)}
                    />
                    <input
                      checked={!value}
                      className="h-6 w-6 cursor-pointer"
                      type="radio"
                      onChange={() => onChange(false)}
                    />
                  </div>
                )}
              />
            </div>

            {/* Observaciones */}
            <div className="mt-4 flex flex-col gap-2">
              <span className="text-base font-semibold">Observaciones:</span>
              <textarea
                {...register("observations")}
                className="h-24 w-full resize-none border border-gray-500 p-2"
              />
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
});

RespiratorioExamSection.displayName = "RespiratorioExamSection";
