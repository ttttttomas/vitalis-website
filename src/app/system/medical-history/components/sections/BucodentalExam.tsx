import React, {useEffect} from "react";
import {Controller, useForm} from "react-hook-form";

import {MedicalRecordBucodentalExam} from "@/types";

import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

import {SectionHandler} from "../../useFormRegistry";

interface Props {
  defaultValues: MedicalRecordBucodentalExam | null;
  registerSection: (handler: SectionHandler<MedicalRecordBucodentalExam>) => () => void;
}

// Helper function to convert string booleans to actual booleans
const normalizeBooleanFields = (
  data: MedicalRecordBucodentalExam | null,
): MedicalRecordBucodentalExam | null => {
  if (!data) return null;

  // The API sometimes returns booleans as strings ("true"/"false")
  // We need to normalize them to actual boolean values
  const toBool = (value: any): boolean => value === "true" || value === true;

  return {
    ...data,
    protesis: toBool(data.protesis),
    caries: toBool(data.caries),
    encias_alteradas: toBool(data.encias_alteradas),
    dentadura_parcial: toBool(data.dentadura_parcial),
  };
};

export const BucodentalExamSection = React.memo(({defaultValues, registerSection}: Props) => {
  const normalizedDefaults = normalizeBooleanFields(defaultValues);

  const form = useForm<MedicalRecordBucodentalExam>({
    defaultValues: normalizedDefaults ?? ({} as MedicalRecordBucodentalExam),
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
    <AccordionItem value="item-11">
      <AccordionTrigger>Examen Bucodental</AccordionTrigger>
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

            {/* Prótesis */}
            <div className="flex items-center">
              <p className="flex-1">Prótesis</p>
              <Controller
                control={control}
                name="protesis"
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

            {/* Caries */}
            <div className="flex items-center">
              <p className="flex-1">Caries</p>
              <Controller
                control={control}
                name="caries"
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

            {/* Encías alteradas */}
            <div className="flex items-center">
              <p className="flex-1">Encías alteradas</p>
              <Controller
                control={control}
                name="encias_alteradas"
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

            {/* Dentadura parcial */}
            <div className="flex items-center">
              <p className="flex-1">Dentadura parcial</p>
              <Controller
                control={control}
                name="dentadura_parcial"
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

BucodentalExamSection.displayName = "BucodentalExamSection";
