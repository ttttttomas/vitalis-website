import React, {useEffect} from "react";
import {Controller, useForm} from "react-hook-form";

import {MedicalRecordNeuroClinicalExam} from "@/types";

import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

import {SectionHandler} from "../../useFormRegistry";

interface Props {
  defaultValues: MedicalRecordNeuroClinicalExam | null;
  registerSection: (handler: SectionHandler<MedicalRecordNeuroClinicalExam>) => () => void;
}

// Helper function to convert string booleans to actual booleans
const normalizeBooleanFields = (
  data: MedicalRecordNeuroClinicalExam | null,
): MedicalRecordNeuroClinicalExam | null => {
  if (!data) return null;

  const toBool = (value: any): boolean => value === "true" || value === true;

  return {
    ...data,
    desorientado: toBool(data.desorientado),
    motilidad_alterada: toBool(data.motilidad_alterada),
    sensibilidad_alterada: toBool(data.sensibilidad_alterada),
    reflejos_alterados: toBool(data.reflejos_alterados),
    apraxia: toBool(data.apraxia),
    ataxia: toBool(data.ataxia),
  };
};

export const NeuroClinicalExamSection = React.memo(({defaultValues, registerSection}: Props) => {
  const normalizedDefaults = normalizeBooleanFields(defaultValues);

  const form = useForm<MedicalRecordNeuroClinicalExam>({
    defaultValues: normalizedDefaults ?? ({} as MedicalRecordNeuroClinicalExam),
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
    <AccordionItem value="item-20">
      <AccordionTrigger>Evaluación Clínica Neurológica</AccordionTrigger>
      <AccordionContent>
        <div className="relative">
          <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
          <div className="flex flex-col gap-3 text-lg">
            {/* Header */}
            <div className="mt-20 flex items-center">
              <div className="flex-1" />
              <div className="flex gap-3">
                <p className="w-6 text-center font-semibold">Si</p>
                <p className="w-6 text-center font-semibold">No</p>
              </div>
            </div>

            {/* Desorientado tiempo y espacio */}
            <div className="flex items-center">
              <p className="flex-1">Desorientado tiempo y espacio</p>
              <Controller
                control={control}
                name="desorientado"
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

            {/* Motilidad alterada */}
            <div className="flex items-center">
              <p className="flex-1">Motilidad alterada</p>
              <Controller
                control={control}
                name="motilidad_alterada"
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

            {/* Sensibilidad alterada */}
            <div className="flex items-center">
              <p className="flex-1">Sensibilidad alterada</p>
              <Controller
                control={control}
                name="sensibilidad_alterada"
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

            {/* Reflejos alterados */}
            <div className="flex items-center">
              <p className="flex-1">Reflejos alterados</p>
              <Controller
                control={control}
                name="reflejos_alterados"
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

            {/* Apraxia */}
            <div className="flex items-center">
              <p className="flex-1">Apraxia</p>
              <Controller
                control={control}
                name="apraxia"
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

            {/* Ataxia */}
            <div className="flex items-center">
              <p className="flex-1">Ataxia</p>
              <Controller
                control={control}
                name="ataxia"
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

NeuroClinicalExamSection.displayName = "NeuroClinicalExamSection";
