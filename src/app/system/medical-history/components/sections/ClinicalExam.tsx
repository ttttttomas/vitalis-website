import React, {useEffect} from "react";
import {useForm} from "react-hook-form";

import {MedicalRecordClinicalExam} from "@/types";

import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

import {SectionHandler} from "../../useFormRegistry";

interface Props {
  defaultValues: MedicalRecordClinicalExam | null;
  registerSection: (handler: SectionHandler<MedicalRecordClinicalExam>) => () => void;
}

export const ClinicalExamSection = React.memo(({defaultValues, registerSection}: Props) => {
  const form = useForm<MedicalRecordClinicalExam>({
    defaultValues: defaultValues ?? ({} as MedicalRecordClinicalExam),
    mode: "onBlur",
  });

  const {getValues, trigger, register} = form;

  useEffect(() => {
    const unregister = registerSection({
      getValues: () => getValues(),
      validate: async () => trigger(),
    });

    return unregister;
  }, [registerSection, getValues, trigger]);

  return (
    <AccordionItem value="item-8">
      <AccordionTrigger>Examen Clínico</AccordionTrigger>
      <AccordionContent>
        <div className="relative">
          <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
          <div className="flex flex-col gap-3 text-lg">
            {/* Talla */}
            <div className="flex items-center gap-4">
              <span className="w-[100px] shrink-0 md:w-[150px]">Talla</span>
              <input
                {...register("talla", {valueAsNumber: true})}
                className="w-full border border-gray-500 p-2 md:w-[200px]"
                type="text"
              />
            </div>

            {/* Peso */}
            <div className="flex items-center gap-4">
              <span className="w-[100px] shrink-0 md:w-[150px]">Peso</span>
              <input
                {...register("peso", {valueAsNumber: true})}
                className="w-full border border-gray-500 p-2 md:w-[200px]"
                type="text"
              />
            </div>

            {/* Saturación */}
            <div className="flex items-center gap-4">
              <span className="w-[100px] shrink-0 md:w-[150px]">Saturación</span>
              <input
                {...register("saturacion", {valueAsNumber: true})}
                className="w-full border border-gray-500 p-2 md:w-[200px]"
                type="text"
              />
            </div>

            {/* IMC */}
            <div className="flex items-center gap-4">
              <span className="w-[100px] shrink-0 md:w-[150px]">IMC</span>
              <input
                {...register("imc", {valueAsNumber: true})}
                className="w-full border border-gray-500 p-2 md:w-[200px]"
                type="text"
              />
            </div>

            {/* TA: mínima */}
            <div className="flex items-center gap-4">
              <span className="w-[100px] shrink-0 md:w-[150px]">TA: mínima</span>
              <input
                {...register("ta_min", {valueAsNumber: true})}
                className="w-full border border-gray-500 p-2 md:w-[200px]"
                type="text"
              />
            </div>

            {/* TA: máxima */}
            <div className="flex items-center gap-4">
              <span className="w-[100px] shrink-0 md:w-[150px]">TA: máxima</span>
              <input
                {...register("ta_max", {valueAsNumber: true})}
                className="w-full border border-gray-500 p-2 md:w-[200px]"
                type="text"
              />
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
});

ClinicalExamSection.displayName = "ClinicalExamSection";
