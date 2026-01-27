import React, {useEffect} from "react";
import {Controller, useForm} from "react-hook-form";

import {MedicalRecordOrlExam} from "@/types";

import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

import {SectionHandler} from "../../useFormRegistry";

interface Props {
  defaultValues: MedicalRecordOrlExam | null;
  registerSection: (handler: SectionHandler<MedicalRecordOrlExam>) => () => void;
}

// Helper function to convert string booleans to actual booleans
const normalizeBooleanFields = (data: MedicalRecordOrlExam | null): MedicalRecordOrlExam | null => {
  if (!data) return null;

  // The API sometimes returns booleans as strings ("true"/"false")
  // We need to normalize them to actual boolean values
  const toBool = (value: any): boolean => value === "true" || value === true;

  return {
    ...data,
    faringe_pathology: toBool(data.faringe_pathology),
    amigdalas_pathology: toBool(data.amigdalas_pathology),
    voice_alterations: toBool(data.voice_alterations),
    rinitis: toBool(data.rinitis),
    audition_disorders: toBool(data.audition_disorders),
    adenopatias: toBool(data.adenopatias),
  };
};

export const OrlExamSection = React.memo(({defaultValues, registerSection}: Props) => {
  const normalizedDefaults = normalizeBooleanFields(defaultValues);

  const form = useForm<MedicalRecordOrlExam>({
    defaultValues: normalizedDefaults ?? ({} as MedicalRecordOrlExam),
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
    <AccordionItem value="item-13">
      <AccordionTrigger>Examen ORL</AccordionTrigger>
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

            {/* Patología de Faringe */}
            <div className="flex items-center">
              <p className="flex-1">Patología de Faringe</p>
              <Controller
                control={control}
                name="faringe_pathology"
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

            {/* Patología de Amígdalas */}
            <div className="flex items-center">
              <p className="flex-1">Patología de Amígdalas</p>
              <Controller
                control={control}
                name="amigdalas_pathology"
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

            {/* Alteraciones de la voz */}
            <div className="flex items-center">
              <p className="flex-1">Alteraciones de la voz</p>
              <Controller
                control={control}
                name="voice_alterations"
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

            {/* Rinitis */}
            <div className="flex items-center">
              <p className="flex-1">Rinitis</p>
              <Controller
                control={control}
                name="rinitis"
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

            {/* Trastornos de la audición */}
            <div className="flex items-center">
              <p className="flex-1">Trastornos de la audición</p>
              <Controller
                control={control}
                name="audition_disorders"
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

OrlExamSection.displayName = "OrlExamSection";
