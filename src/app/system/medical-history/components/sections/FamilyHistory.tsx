import React, {useEffect} from "react";
import {Controller, useForm} from "react-hook-form";

import {MedicalRecordFamilyHistory} from "@/types";

import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

import {SectionHandler} from "../../useFormRegistry";

interface Props {
  defaultValues: MedicalRecordFamilyHistory | null;
  registerSection: (handler: SectionHandler<MedicalRecordFamilyHistory>) => () => void;
}

// Helper function to convert string booleans to actual booleans
const normalizeBooleanFields = (
  data: MedicalRecordFamilyHistory | null,
): MedicalRecordFamilyHistory | null => {
  if (!data) return null;

  // The API sometimes returns booleans as strings ("true"/"false")
  // We need to normalize them to actual boolean values
  const toBool = (value: any): boolean => value === "true" || value === true;

  return {
    ...data,
    cancer: toBool(data.cancer),
    brothers_alive: toBool(data.brothers_alive),
    diabetes: toBool(data.diabetes),
    reumatism: toBool(data.reumatism),
    asma: toBool(data.asma),
    cardiovascular_illnesses: toBool(data.cardiovascular_illnesses),
    husband_alive: toBool(data.husband_alive),
    father_alive: toBool(data.father_alive),
    sons_alive: toBool(data.sons_alive),
    mother_alive: toBool(data.mother_alive),
    kidney_problems: toBool(data.kidney_problems),
    mental_illnesses: toBool(data.mental_illnesses),
    tuberculosis: toBool(data.tuberculosis),
    sisters_alive: toBool(data.sisters_alive),
    digestive_problems: toBool(data.digestive_problems),
  };
};

export const FamilyHistory = React.memo(({defaultValues, registerSection}: Props) => {
  const normalizedDefaults = normalizeBooleanFields(defaultValues);

  const form = useForm<MedicalRecordFamilyHistory>({
    defaultValues: normalizedDefaults ?? ({} as MedicalRecordFamilyHistory),
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
    <AccordionItem value="item-3">
      <AccordionTrigger>Antecedentes familiares</AccordionTrigger>
      <AccordionContent>
        <div className="relative">
          <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
          <div className="flex flex-col gap-3 text-lg">
            {/* Header */}
            <div className="flex items-center">
              <div className="w-[120px]" />
              <div className="flex gap-6">
                <p className="w-6 text-center font-semibold">Vivo</p>
                <p className="w-6 text-center font-semibold">Fallecido</p>
              </div>
              <div className="ml-20 w-[250px]" />
              <div className="flex gap-6">
                <p className="w-6 text-center font-semibold">Si</p>
                <p className="w-6 text-center font-semibold">No</p>
              </div>
              <div className="ml-32 w-[150px]" />
              <div className="flex gap-6">
                <p className="w-6 text-center font-semibold">Si</p>
                <p className="w-6 text-center font-semibold">No</p>
              </div>
            </div>

            {/* Padre - Enfermedades mentales - Diabetes */}
            <div className="flex items-center">
              <p className="w-[120px]">Padre</p>
              <Controller
                control={control}
                name="father_alive"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-6">
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
              <p className="ml-20 w-[250px]">Enfermedades mentales</p>
              <Controller
                control={control}
                name="mental_illnesses"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-6">
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
              <p className="ml-32 w-[150px]">Diabetes</p>
              <Controller
                control={control}
                name="diabetes"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-6">
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

            {/* Madre - Enfermedades cardiovasculares - empty */}
            <div className="flex items-center">
              <p className="w-[120px]">Madre</p>
              <Controller
                control={control}
                name="mother_alive"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-6">
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
              <p className="ml-20 w-[250px]">Enfermedades cardiovasculares</p>
              <Controller
                control={control}
                name="cardiovascular_illnesses"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-6">
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

            {/* Hermanos - Problemas de riñón - Reumatismo */}
            <div className="flex items-center">
              <p className="w-[120px]">Hermanos</p>
              <Controller
                control={control}
                name="brothers_alive"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-6">
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
              <p className="ml-20 w-[250px]">Problemas de riñón</p>
              <Controller
                control={control}
                name="kidney_problems"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-6">
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
              <p className="ml-32 w-[150px]">Reumatismo</p>
              <Controller
                control={control}
                name="reumatism"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-6">
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

            {/* Hermanas - Problemas digestivos - empty */}
            <div className="flex items-center">
              <p className="w-[120px]">Hermanas</p>
              <Controller
                control={control}
                name="sisters_alive"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-6">
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
              <p className="ml-20 w-[250px]">Problemas digestivos</p>
              <Controller
                control={control}
                name="digestive_problems"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-6">
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

            {/* Esposo/a - Asma - Cáncer */}
            <div className="flex items-center">
              <p className="w-[120px]">Esposo/a</p>
              <Controller
                control={control}
                name="husband_alive"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-6">
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
              <p className="ml-20 w-[250px]">Asma</p>
              <Controller
                control={control}
                name="asma"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-6">
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
              <p className="ml-32 w-[150px]">Cáncer</p>
              <Controller
                control={control}
                name="cancer"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-6">
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

            {/* Hijos - Tuberculosis - Especificar tipo */}
            <div className="flex items-center">
              <p className="w-[120px]">Hijos</p>
              <Controller
                control={control}
                name="sons_alive"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-6">
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
              <p className="ml-20 w-[250px]">Tuberculosis</p>
              <Controller
                control={control}
                name="tuberculosis"
                render={({field: {onChange, value}}) => (
                  <div className="flex gap-6">
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
              <div className="ml-32 flex flex-col gap-1">
                <span className="text-base">Especificar tipo</span>
                <textarea
                  className="h-20 w-[200px] resize-none border border-gray-500 p-2"
                  {...register("cancer_type")}
                />
              </div>
            </div>

            {/* Observaciones */}
            <div className="mt-4 flex flex-col gap-2">
              <span className="text-base font-semibold">Observaciones:</span>
              <textarea
                className="h-24 w-full resize-none border border-gray-500 p-2"
                {...register("observations")}
              />
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
});

FamilyHistory.displayName = "FamilyHistory";
