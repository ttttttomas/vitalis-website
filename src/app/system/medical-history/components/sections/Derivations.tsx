import React, {useEffect} from "react";
import {useForm} from "react-hook-form";

import {MedicalRecordDerivations} from "@/types";

import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

import {SectionHandler} from "../../useFormRegistry";

interface Props {
  defaultValues: MedicalRecordDerivations | null;
  registerSection: (handler: SectionHandler<MedicalRecordDerivations>) => () => void;
}

export const DerivationsSection = React.memo(({defaultValues, registerSection}: Props) => {
  const form = useForm<MedicalRecordDerivations>({
    defaultValues: defaultValues ?? ({} as MedicalRecordDerivations),
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
    <AccordionItem value="item-derivations">
      <AccordionTrigger>Derivaciones</AccordionTrigger>
      <AccordionContent>
        <div className="relative">
          <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
          <div className="flex flex-col gap-3 text-lg">
            <div className="mt-4 flex flex-col gap-2">
              <span className="text-base font-semibold">Derivación a especialista:</span>
              <textarea
                {...register("derivations_lastname_especialists")}
                className="h-24 w-full resize-none border border-gray-500 p-2"
              />
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
});

DerivationsSection.displayName = "DerivationsSection";
