import React, {useEffect} from "react";
import {Controller, useForm} from "react-hook-form";

import {MedicalRecordSkinExam} from "@/types";

import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

import {SectionHandler} from "../../useFormRegistry";

interface Props {
  defaultValues: MedicalRecordSkinExam | null;
  registerSection: (handler: SectionHandler<MedicalRecordSkinExam>) => () => void;
}

// Helper function to convert string booleans to actual booleans
const normalizeBooleanFields = (
  data: MedicalRecordSkinExam | null,
): MedicalRecordSkinExam | null => {
  if (!data) return null;

  // The API sometimes returns booleans as strings ("true"/"false")
  // We need to normalize them to actual boolean values
  const toBool = (value: any): boolean => value === "true" || value === true;

  return {
    ...data,
    skin_alteration: toBool(data.skin_alteration),
    piercing: toBool(data.piercing),
    tattoo: toBool(data.tattoo),
    cicatrices: toBool(data.cicatrices),
  };
};

export const SkinExamSection = React.memo(({defaultValues, registerSection}: Props) => {
  const normalizedDefaults = normalizeBooleanFields(defaultValues);

  const form = useForm<MedicalRecordSkinExam>({
    defaultValues: normalizedDefaults ?? ({} as MedicalRecordSkinExam),
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
    <AccordionItem value="item-9">
      <AccordionTrigger>Examen de Piel/Faneras</AccordionTrigger>
      <AccordionContent>
        <div className="relative">
          <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
          <div className="flex flex-col gap-3 text-lg">
            {/* Header */}
            <div className="mt-20 flex items-center">
              <div className="flex-1" />
              <div className="flex gap-6">
                <p className="w-6 text-center font-semibold">Si</p>
                <p className="w-6 text-center font-semibold">No</p>
              </div>
            </div>

            {/* Alteraciones de la piel y faneras */}
            <div className="flex items-center">
              <p className="flex-1">Alteraciones de la piel y faneras</p>
              <Controller
                control={control}
                name="skin_alteration"
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

            {/* Piercing */}
            <div className="flex items-center">
              <p className="flex-1">Piercing</p>
              <Controller
                control={control}
                name="piercing"
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

            {/* Tatuajes */}
            <div className="flex items-center">
              <p className="flex-1">Tatuajes</p>
              <Controller
                control={control}
                name="tattoo"
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

            {/* Cicatrices */}
            <div className="flex items-center">
              <p className="flex-1">Cicatrices</p>
              <Controller
                control={control}
                name="cicatrices"
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

SkinExamSection.displayName = "SkinExamSection";
