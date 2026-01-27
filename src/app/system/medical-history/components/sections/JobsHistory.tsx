import React, {useEffect} from "react";
import {useForm} from "react-hook-form";

import {MedicalRecordLaboralHistory} from "@/types";

import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

import {SectionHandler} from "../../useFormRegistry";

interface Props {
  defaultValues: MedicalRecordLaboralHistory | null;
  registerSection: (handler: SectionHandler<MedicalRecordLaboralHistory>) => () => void;
}

export const JobsHistory = React.memo(({defaultValues, registerSection}: Props) => {
  const form = useForm<MedicalRecordLaboralHistory>({
    defaultValues: defaultValues ?? ({} as MedicalRecordLaboralHistory),
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
    <AccordionItem value="item-4">
      <AccordionTrigger>Antecedentes laborales</AccordionTrigger>
      <AccordionContent>
        <div className="relative">
          <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
          <div className="flex flex-col gap-3">
            <p className="text-base font-medium">Tareas realizadas - Duración de las mismas</p>
            <div className="flex flex-col gap-2">
              <textarea className="w-full border border-gray-500 p-2" {...register("done_tasks")} />
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
});

JobsHistory.displayName = "JobsHistory";
