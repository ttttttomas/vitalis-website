import React, {useEffect} from "react";
import {Controller, useForm} from "react-hook-form";

import {MedicalRecordPsychiatricClinicalExam} from "@/types";

import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

import {SectionHandler} from "../../useFormRegistry";

interface Props {
  defaultValues: MedicalRecordPsychiatricClinicalExam | null;
  registerSection: (handler: SectionHandler<MedicalRecordPsychiatricClinicalExam>) => () => void;
}

// Helper function to convert string booleans to actual booleans
const normalizeBooleanFields = (
  data: MedicalRecordPsychiatricClinicalExam | null,
): MedicalRecordPsychiatricClinicalExam | null => {
  if (!data) return null;

  const toBool = (value: any): boolean => value === "true" || value === true;

  return {
    ...data,
    alteraciones_conducta: toBool(data.alteraciones_conducta),
    nerviosismo_excesivo: toBool(data.nerviosismo_excesivo),
    depresion_psicomotriz: toBool(data.depresion_psicomotriz),
    timidez_excesiva: toBool(data.timidez_excesiva),
  };
};

export const PsychiatricClinicalExamSection = React.memo(
  ({defaultValues, registerSection}: Props) => {
    const normalizedDefaults = normalizeBooleanFields(defaultValues);

    const form = useForm<MedicalRecordPsychiatricClinicalExam>({
      defaultValues: normalizedDefaults ?? ({} as MedicalRecordPsychiatricClinicalExam),
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
        <AccordionTrigger>Evaluación Clínica Psíquica</AccordionTrigger>
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

              {/* Alteraciones de conducta */}
              <div className="flex items-center">
                <p className="flex-1">Alteraciones de conducta</p>
                <Controller
                  control={control}
                  name="alteraciones_conducta"
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

              {/* Nerviosismo excesivo */}
              <div className="flex items-center">
                <p className="flex-1">Nerviosismo excesivo</p>
                <Controller
                  control={control}
                  name="nerviosismo_excesivo"
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

              {/* Depresión Psicomotriz */}
              <div className="flex items-center">
                <p className="flex-1">Depresión Psicomotriz</p>
                <Controller
                  control={control}
                  name="depresion_psicomotriz"
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

              {/* Timidez excesiva */}
              <div className="flex items-center">
                <p className="flex-1">Timidez excesiva</p>
                <Controller
                  control={control}
                  name="timidez_excesiva"
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
  },
);

PsychiatricClinicalExamSection.displayName = "PsychiatricClinicalExamSection";
