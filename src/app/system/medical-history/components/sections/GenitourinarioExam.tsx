import React, {useEffect} from "react";
import {Controller, useForm} from "react-hook-form";

import {MedicalRecordGenitourinarioExam} from "@/types";

import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

import {SectionHandler} from "../../useFormRegistry";

interface Props {
  defaultValues: MedicalRecordGenitourinarioExam | null;
  registerSection: (handler: SectionHandler<MedicalRecordGenitourinarioExam>) => () => void;
}

// Helper function to convert string booleans to actual booleans
const normalizeBooleanFields = (
  data: MedicalRecordGenitourinarioExam | null,
): MedicalRecordGenitourinarioExam | null => {
  if (!data) return null;

  const toBool = (value: any): boolean => value === "true" || value === true;

  return {
    ...data,
    women_alteraciones_mamarias: toBool(data.women_alteraciones_mamarias),
    women_alteraciones_ginecologicas: toBool(data.women_alteraciones_ginecologicas),
    women_fum: toBool(data.women_fum),
    women_dolores_menstruales: toBool(data.women_dolores_menstruales),
    women_flujos_alterados: toBool(data.women_flujos_alterados),
    women_anticonceptivos: toBool(data.women_anticonceptivos),
    women_parto_normal: toBool(data.women_parto_normal),
    women_abortos: toBool(data.women_abortos),
    women_cesarea: toBool(data.women_cesarea),
    men_alteraciones_mamarias: toBool(data.men_alteraciones_mamarias),
    men_alteraciones_testiculares: toBool(data.men_alteraciones_testiculares),
  };
};

export const GenitourinarioExamSection = React.memo(({defaultValues, registerSection}: Props) => {
  const normalizedDefaults = normalizeBooleanFields(defaultValues);

  const form = useForm<MedicalRecordGenitourinarioExam>({
    defaultValues: normalizedDefaults ?? ({} as MedicalRecordGenitourinarioExam),
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
    <AccordionItem value="item-18">
      <AccordionTrigger>Examen Genitourinario</AccordionTrigger>
      <AccordionContent>
        <div className="relative">
          <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
          <div className="flex gap-8">
            {/* Columna Mujeres */}
            <div className="flex-1 border-r-2 border-blue-400 pr-6">
              <p className="mb-3 text-lg font-semibold italic">Mujeres</p>
              <div className="flex flex-col gap-3 text-lg">
                {/* Header */}
                <div className="flex items-center">
                  <div className="flex-1" />
                  <div className="flex gap-3">
                    <p className="w-6 text-center text-base font-semibold">Si</p>
                    <p className="w-6 text-center text-base font-semibold">No</p>
                  </div>
                </div>

                {/* Alteraciones mamarias */}
                <div className="flex items-center">
                  <p className="flex-1 text-base">Alteraciones mamarias</p>
                  <Controller
                    control={control}
                    name="women_alteraciones_mamarias"
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

                {/* Alteraciones ginecológicas */}
                <div className="flex items-center">
                  <p className="flex-1 text-base">Alteraciones ginecológicas</p>
                  <Controller
                    control={control}
                    name="women_alteraciones_ginecologicas"
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

                {/* FUM */}
                <div className="flex items-center">
                  <p className="flex-1 text-base">FUM</p>
                  <Controller
                    control={control}
                    name="women_fum"
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

                {/* Dolores menstruales */}
                <div className="flex items-center">
                  <p className="flex-1 text-base">Dolores menstruales</p>
                  <Controller
                    control={control}
                    name="women_dolores_menstruales"
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

                {/* Flujos alterados */}
                <div className="flex items-center">
                  <p className="flex-1 text-base">Flujos alterados</p>
                  <Controller
                    control={control}
                    name="women_flujos_alterados"
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

                {/* Anticonceptivos */}
                <div className="flex items-center">
                  <p className="flex-1 text-base">Anticonceptivos</p>
                  <Controller
                    control={control}
                    name="women_anticonceptivos"
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

                {/* Parto normal */}
                <div className="flex items-center">
                  <p className="flex-1 text-base">Parto normal</p>
                  <Controller
                    control={control}
                    name="women_parto_normal"
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

                {/* Abortos */}
                <div className="flex items-center">
                  <p className="flex-1 text-base">Abortos</p>
                  <Controller
                    control={control}
                    name="women_abortos"
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

                {/* Cesárea */}
                <div className="flex items-center">
                  <p className="flex-1 text-base">Cesárea</p>
                  <Controller
                    control={control}
                    name="women_cesarea"
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
              </div>
            </div>

            {/* Columna Hombres */}
            <div className="flex-1 pl-6">
              <p className="mb-3 text-lg font-semibold italic">Hombres</p>
              <div className="flex flex-col gap-3 text-lg">
                {/* Header */}
                <div className="flex items-center">
                  <div className="flex-1" />
                  <div className="flex gap-3">
                    <p className="w-6 text-center text-base font-semibold">Si</p>
                    <p className="w-6 text-center text-base font-semibold">No</p>
                  </div>
                </div>

                {/* Alteraciones mamarias */}
                <div className="flex items-center">
                  <p className="flex-1 text-base">Alteraciones mamarias</p>
                  <Controller
                    control={control}
                    name="men_alteraciones_mamarias"
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

                {/* Alteraciones testiculares */}
                <div className="flex items-center">
                  <p className="flex-1 text-base">Alteraciones testiculares</p>
                  <Controller
                    control={control}
                    name="men_alteraciones_testiculares"
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
              </div>
            </div>
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
      </AccordionContent>
    </AccordionItem>
  );
});

GenitourinarioExamSection.displayName = "GenitourinarioExamSection";
