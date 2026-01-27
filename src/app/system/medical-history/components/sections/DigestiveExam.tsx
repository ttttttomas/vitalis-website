import React, {useEffect} from "react";
import {Controller, useForm} from "react-hook-form";

import {MedicalRecordDigestiveExam} from "@/types";

import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

import {SectionHandler} from "../../useFormRegistry";

interface Props {
  defaultValues: MedicalRecordDigestiveExam | null;
  registerSection: (handler: SectionHandler<MedicalRecordDigestiveExam>) => () => void;
}

// Helper function to convert string booleans to actual booleans
const normalizeBooleanFields = (
  data: MedicalRecordDigestiveExam | null,
): MedicalRecordDigestiveExam | null => {
  if (!data) return null;

  const toBool = (value: any): boolean => value === "true" || value === true;

  return {
    ...data,
    cicatrices_quirurgicas: toBool(data.cicatrices_quirurgicas),
    hemorroides: toBool(data.hemorroides),
    dolores_abdominales: toBool(data.dolores_abdominales),
    hepatomegalia: toBool(data.hepatomegalia),
    esplenomegalia: toBool(data.esplenomegalia),
    adenopatias: toBool(data.adenopatias),
    hernias: toBool(data.hernias),
  };
};

export const DigestiveExamSection = React.memo(({defaultValues, registerSection}: Props) => {
  const normalizedDefaults = normalizeBooleanFields(defaultValues);

  const form = useForm<MedicalRecordDigestiveExam>({
    defaultValues: normalizedDefaults ?? ({} as MedicalRecordDigestiveExam),
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
    <AccordionItem value="item-17">
      <AccordionTrigger>Examen Digestivo/Abdominal</AccordionTrigger>
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

            {/* Cicatrices quirúrgicas */}
            <div className="flex items-center">
              <p className="flex-1">Cicatrices quirúrgicas</p>
              <Controller
                control={control}
                name="cicatrices_quirurgicas"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-3">
                    <input
                      checked={value === true}
                      className="h-6 w-6 cursor-pointer"
                      onChange={() => onChange(true)}
                      type="radio"
                    />
                    <input
                      checked={value === false}
                      className="h-6 w-6 cursor-pointer"
                      onChange={() => onChange(false)}
                      type="radio"
                    />
                  </div>
                )}
              />
            </div>

            {/* Hemorroides */}
            <div className="flex items-center">
              <p className="flex-1">Hemorroides</p>
              <Controller
                control={control}
                name="hemorroides"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-3">
                    <input
                      checked={value === true}
                      className="h-6 w-6 cursor-pointer"
                      onChange={() => onChange(true)}
                      type="radio"
                    />
                    <input
                      checked={value === false}
                      className="h-6 w-6 cursor-pointer"
                      onChange={() => onChange(false)}
                      type="radio"
                    />
                  </div>
                )}
              />
            </div>

            {/* Dolores abdominales */}
            <div className="flex items-center">
              <p className="flex-1">Dolores abdominales</p>
              <Controller
                control={control}
                name="dolores_abdominales"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-3">
                    <input
                      checked={value === true}
                      className="h-6 w-6 cursor-pointer"
                      onChange={() => onChange(true)}
                      type="radio"
                    />
                    <input
                      checked={value === false}
                      className="h-6 w-6 cursor-pointer"
                      onChange={() => onChange(false)}
                      type="radio"
                    />
                  </div>
                )}
              />
            </div>

            {/* Hepatomegalia */}
            <div className="flex items-center">
              <p className="flex-1">Hepatomegalia</p>
              <Controller
                control={control}
                name="hepatomegalia"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-3">
                    <input
                      checked={value === true}
                      className="h-6 w-6 cursor-pointer"
                      onChange={() => onChange(true)}
                      type="radio"
                    />
                    <input
                      checked={value === false}
                      className="h-6 w-6 cursor-pointer"
                      onChange={() => onChange(false)}
                      type="radio"
                    />
                  </div>
                )}
              />
            </div>

            {/* Esplenomegalia */}
            <div className="flex items-center">
              <p className="flex-1">Esplenomegalia</p>
              <Controller
                control={control}
                name="esplenomegalia"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-3">
                    <input
                      checked={value === true}
                      className="h-6 w-6 cursor-pointer"
                      onChange={() => onChange(true)}
                      type="radio"
                    />
                    <input
                      checked={value === false}
                      className="h-6 w-6 cursor-pointer"
                      onChange={() => onChange(false)}
                      type="radio"
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
                      checked={value === true}
                      className="h-6 w-6 cursor-pointer"
                      onChange={() => onChange(true)}
                      type="radio"
                    />
                    <input
                      checked={value === false}
                      className="h-6 w-6 cursor-pointer"
                      onChange={() => onChange(false)}
                      type="radio"
                    />
                  </div>
                )}
              />
            </div>

            {/* Hernias/Eventraciones */}
            <div className="flex items-center">
              <p className="flex-1">Hernias/Eventraciones</p>
              <Controller
                control={control}
                name="hernias"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-3">
                    <input
                      checked={value === true}
                      className="h-6 w-6 cursor-pointer"
                      onChange={() => onChange(true)}
                      type="radio"
                    />
                    <input
                      checked={value === false}
                      className="h-6 w-6 cursor-pointer"
                      onChange={() => onChange(false)}
                      type="radio"
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

DigestiveExamSection.displayName = "DigestiveExamSection";
