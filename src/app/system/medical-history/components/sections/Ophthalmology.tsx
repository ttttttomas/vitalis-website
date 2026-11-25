import React, {useEffect} from "react";
import {Controller, useForm} from "react-hook-form";
import {MedicalRecordOphthalmology} from "@/types";
import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {SectionHandler} from "../../useFormRegistry";

interface Props {
  defaultValues: MedicalRecordOphthalmology | null;
  registerSection: (handler: SectionHandler<MedicalRecordOphthalmology>) => () => void;
  embedded?: boolean;
}

const yesNoFields: Array<[keyof MedicalRecordOphthalmology, string]> = [
  ["consulted_ophthalmologist", "¿Consultó a un oftalmólogo en los últimos 2 años?"],
  ["vision_disease", "¿Tiene o tuvo alguna enfermedad en la vista?"],
  ["vision_treatment", "¿Está realizando algún tratamiento para la vista?"],
  ["vision_surgery", "¿Lo/la operaron de la vista?"],
  ["glasses_or_contacts", "¿Usa anteojos o lentes de contacto?"],
  ["medications", "¿Toma medicamentos?"],
  ["monocular_vision", "Visión monocular"],
  ["anisometropia", "Anisometropía"],
  ["ocular_movement_extrinsic", "Movimientos oculares extrínsecos (estrabismo)"],
  ["ocular_movement_intrinsic", "Movimientos oculares intrínsecos (anisocoria)"],
];

export const OphthalmologySection = React.memo(({defaultValues, registerSection, embedded = false}: Props) => {
  const booleanFields = [
    "consulted_ophthalmologist",
    "vision_disease",
    "vision_treatment",
    "vision_surgery",
    "glasses_or_contacts",
    "medications",
    "monocular_vision",
    "anisometropia",
    "ocular_movement_extrinsic",
    "ocular_movement_intrinsic",
  ] as const;
  const toBool = (value: unknown) => value === true || value === "true" || value === 1;
  const normalizedDefaults = defaultValues
    ? {
        ...defaultValues,
        ...Object.fromEntries(
          booleanFields.map((field) => [
            field,
            defaultValues[field] == null ? undefined : toBool(defaultValues[field]),
          ]),
        ),
      } as MedicalRecordOphthalmology
    : null;
  const {register, getValues, trigger, control} = useForm<MedicalRecordOphthalmology>({
    defaultValues: normalizedDefaults ?? ({} as MedicalRecordOphthalmology),
    mode: "onBlur",
  });

  useEffect(
    () => registerSection({getValues, validate: async () => trigger()}),
    [registerSection, getValues, trigger],
  );

  const radioRow = (name: (typeof yesNoFields)[number][0], label: string) => (
    <div
      key={name}
      className="grid grid-cols-[minmax(0,1fr)_4rem_4rem] items-center gap-2 border-b border-gray-200 py-3"
    >
      <span className="min-w-0 text-sm">{label}</span>
      <Controller
        control={control}
        name={name}
        render={({field}) => (
          <>
            <label className="flex items-center justify-center gap-1 text-sm">
              <input checked={field.value === true} type="radio" onChange={() => field.onChange(true)} />
              Sí
            </label>
            <label className="flex items-center gap-1 text-sm">
              <input checked={field.value === false} type="radio" onChange={() => field.onChange(false)} />
              No
            </label>
          </>
        )}
      />
    </div>
  );

  const content = (
    <section className="space-y-5 border-t border-gray-200 px-2 pt-5">
      <h3 className="font-semibold">Anamnesis visual</h3>
      <div>{yesNoFields.map(([field, label]) => radioRow(field, label))}</div>
    </section>
  );

  if (embedded) return content;

  return (
    <AccordionItem value="ophthalmology">
      <AccordionTrigger>Oftalmología</AccordionTrigger>
      <AccordionContent>{content}</AccordionContent>
    </AccordionItem>
  );
});

OphthalmologySection.displayName = "OphthalmologySection";
