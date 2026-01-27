import React, {useEffect} from "react";
import {Controller, useForm} from "react-hook-form";

import {MedicalRecordOsteoarticularExam} from "@/types";

import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

import {SectionHandler} from "../../useFormRegistry";

interface Props {
  defaultValues: MedicalRecordOsteoarticularExam | null;
  registerSection: (handler: SectionHandler<MedicalRecordOsteoarticularExam>) => () => void;
}

// Helper function to convert string booleans to actual booleans
const normalizeBooleanFields = (
  data: MedicalRecordOsteoarticularExam | null,
): MedicalRecordOsteoarticularExam | null => {
  if (!data) return null;

  const toBool = (value: any): boolean => value === "true" || value === true;

  return {
    ...data,
    column_movilidad_alterada: toBool(data.column_movilidad_alterada),
    column_puntos_dolorosos: toBool(data.column_puntos_dolorosos),
    column_escoliosis: toBool(data.column_escoliosis),
    column_cifosis: toBool(data.column_cifosis),
    column_lordosis: toBool(data.column_lordosis),
    dolor_articular: toBool(data.dolor_articular),
    limitacion_movimientos: toBool(data.limitacion_movimientos),
    tono_trofismo: toBool(data.tono_trofismo),
    amputaciones: toBool(data.amputaciones),
    movilidad_hombro_alterado: toBool(data.movilidad_hombro_alterado),
    movilidad_codo_alterado: toBool(data.movilidad_codo_alterado),
    movilidad_muñeca_alterado: toBool(data.movilidad_muñeca_alterado),
    movilidad_mano_alterado: toBool(data.movilidad_mano_alterado),
    movilidad_rodilla_alterado: toBool(data.movilidad_rodilla_alterado),
    movilidad_pie_alterado: toBool(data.movilidad_pie_alterado),
  };
};

export const OsteoarticularExamSection = React.memo(({defaultValues, registerSection}: Props) => {
  const normalizedDefaults = normalizeBooleanFields(defaultValues);

  const form = useForm<MedicalRecordOsteoarticularExam>({
    defaultValues: normalizedDefaults ?? ({} as MedicalRecordOsteoarticularExam),
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
    <AccordionItem value="item-26">
      <AccordionTrigger>Examen Osteoarticular</AccordionTrigger>
      <AccordionContent>
        <div className="relative">
          <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
          <div className="flex flex-col gap-3 text-lg">
            {/* Columna vertebral */}
            <p className="font-semibold italic">Columna vertebral</p>

            {/* Header */}
            <div className="mt-10 flex items-center">
              <div className="flex-1" />
              <div className="flex gap-3">
                <p className="w-6 text-center text-base font-semibold">Si</p>
                <p className="w-6 text-center text-base font-semibold">No</p>
              </div>
            </div>

            {/* Movilidad alterada */}
            <div className="flex items-center">
              <p className="flex-1 text-base">Movilidad alterada</p>
              <Controller
                control={control}
                name="column_movilidad_alterada"
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

            {/* Puntos dolorosos */}
            <div className="flex items-center">
              <p className="flex-1 text-base">Puntos dolorosos</p>
              <Controller
                control={control}
                name="column_puntos_dolorosos"
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

            {/* Escoliosis */}
            <div className="flex items-center">
              <p className="flex-1 text-base">Escoliosis</p>
              <Controller
                control={control}
                name="column_escoliosis"
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

            {/* Cifosis anormal */}
            <div className="flex items-center">
              <p className="flex-1 text-base">Cifosis anormal</p>
              <Controller
                control={control}
                name="column_cifosis"
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

            {/* Lordosis anormal */}
            <div className="flex items-center">
              <p className="flex-1 text-base">Lordosis anormal</p>
              <Controller
                control={control}
                name="column_lordosis"
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

            {/* Extremidades superiores */}
            <p className="mt-4 font-semibold italic">Extremidades superiores</p>

            {/* Header */}
            <div className="flex items-center">
              <div className="flex-1" />
              <div className="flex gap-3">
                <p className="w-6 text-center text-base font-semibold">Si</p>
                <p className="w-6 text-center text-base font-semibold">No</p>
              </div>
            </div>

            {/* Dolor articular */}
            <div className="flex items-center">
              <p className="flex-1 text-base">Dolor articular</p>
              <Controller
                control={control}
                name="dolor_articular"
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

            {/* Limitación de movimientos */}
            <div className="flex items-center">
              <p className="flex-1 text-base">Limitación de movimientos</p>
              <Controller
                control={control}
                name="limitacion_movimientos"
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

            {/* Tono/Trofismo alterado */}
            <div className="flex items-center">
              <p className="flex-1 text-base">Tono/Trofismo alterado</p>
              <Controller
                control={control}
                name="tono_trofismo"
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

            {/* Amputaciones */}
            <div className="flex items-center">
              <p className="flex-1 text-base">Amputaciones</p>
              <Controller
                control={control}
                name="amputaciones"
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

            {/* Movilidad hombro alterado */}
            <div className="flex items-center">
              <p className="flex-1 text-base">Movilidad hombro alterado</p>
              <Controller
                control={control}
                name="movilidad_hombro_alterado"
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

            {/* Movilidad codo alterado */}
            <div className="flex items-center">
              <p className="flex-1 text-base">Movilidad codo alterado</p>
              <Controller
                control={control}
                name="movilidad_codo_alterado"
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

            {/* Movilidad muñeca alterada */}
            <div className="flex items-center">
              <p className="flex-1 text-base">Movilidad muñeca alterada</p>
              <Controller
                control={control}
                name="movilidad_muñeca_alterado"
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

            {/* Extremidades inferiores */}
            <p className="mt-4 font-semibold italic">Extremidades inferiores</p>

            {/* Header */}
            <div className="flex items-center">
              <div className="flex-1" />
              <div className="flex gap-3">
                <p className="w-6 text-center text-base font-semibold">Si</p>
                <p className="w-6 text-center text-base font-semibold">No</p>
              </div>
            </div>

            {/* Movilidad mano alterada */}
            <div className="flex items-center">
              <p className="flex-1 text-base">Movilidad mano alterada</p>
              <Controller
                control={control}
                name="movilidad_mano_alterado"
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

            {/* Movilidad rodilla alterada */}
            <div className="flex items-center">
              <p className="flex-1 text-base">Movilidad rodilla alterada</p>
              <Controller
                control={control}
                name="movilidad_rodilla_alterado"
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

            {/* Movilidad pié alterado */}
            <div className="flex items-center">
              <p className="flex-1 text-base">Movilidad pié alterado</p>
              <Controller
                control={control}
                name="movilidad_pie_alterado"
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

OsteoarticularExamSection.displayName = "OsteoarticularExamSection";
