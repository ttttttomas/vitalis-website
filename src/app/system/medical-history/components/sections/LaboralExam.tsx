import React, {useEffect} from "react";
import {Controller, useForm} from "react-hook-form";

import {MedicalRecordLaboralExam} from "@/types";

import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

import {SectionHandler} from "../../useFormRegistry";

interface Props {
  defaultValues: MedicalRecordLaboralExam | null;
  registerSection: (handler: SectionHandler<MedicalRecordLaboralExam>) => () => void;
}

// Helper function to convert string booleans to actual booleans
const normalizeBooleanFields = (
  data: MedicalRecordLaboralExam | null,
): MedicalRecordLaboralExam | null => {
  if (!data) return null;

  const toBool = (value: any): boolean => value === "true" || value === true;

  return {
    ...data,
    physical: toBool(data.physical),
    chemical: toBool(data.chemical),
    biological: toBool(data.biological),
    ergonomic: toBool(data.ergonomic),
    others: toBool(data.others),
  };
};

export const LaboralExamSection = React.memo(({defaultValues, registerSection}: Props) => {
  const normalizedDefaults = normalizeBooleanFields(defaultValues);

  const form = useForm<MedicalRecordLaboralExam>({
    defaultValues: normalizedDefaults ?? ({} as MedicalRecordLaboralExam),
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
    <AccordionItem value="item-laboral">
      <AccordionTrigger>Examen Laboral</AccordionTrigger>
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

            {/* Físicos */}
            <div className="flex items-center">
              <p className="flex-1">Físicos</p>
              <Controller
                control={control}
                name="physical"
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

            {/* Químicos */}
            <div className="flex items-center">
              <p className="flex-1">Químicos</p>
              <Controller
                control={control}
                name="chemical"
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

            {/* Biológicos */}
            <div className="flex items-center">
              <p className="flex-1">Biológicos</p>
              <Controller
                control={control}
                name="biological"
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

            {/* Ergonómicos */}
            <div className="flex items-center">
              <p className="flex-1">Ergonómicos</p>
              <Controller
                control={control}
                name="ergonomic"
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

            {/* Otros */}
            <div className="flex items-center">
              <p className="flex-1">Otros</p>
              <Controller
                control={control}
                name="others"
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

LaboralExamSection.displayName = "LaboralExamSection";
