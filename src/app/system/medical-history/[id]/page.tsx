"use client";
import {Raleway, Patua_One} from "next/font/google";
import {ArrowLeft} from "lucide-react";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {Switch} from "@/components/ui/switch";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const patuaOne = Patua_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function MedicalHistoryPage() {
  const img = null;

  return (
    <main className="mx-30 my-10">
      <section className="flex items-start justify-between">
        <Link className="mt-20 flex items-center gap-1 font-bold" href="/system/usuarios">
          <ArrowLeft />
          Volver al Portal
        </Link>
        <div className="flex flex-col items-center gap-3">
          <img alt="Logo" className="mx-auto" src="/logo.png" width={200} />
          <h1 className={`text-center text-[69px] font-bold text-[#134173] ${raleway.className}`}>
            VITALIS
          </h1>
          <h2 className="text-center text-[36px] font-semibold text-black">
            Centro de salud integral
          </h2>
          <p className="font-bold">Salud Ocupacional</p>
          <small>(Ley 19.587 y 7.229) (Dcto. 658/96) (Res. SRT 37/2010)</small>
          <p className={patuaOne.className + " font-bold"}>MEDICINA LABORAL</p>
          <button className="bg-orange my-5 cursor-pointer rounded-md border border-black px-10 py-2 text-lg font-bold">
            Guardar
          </button>
        </div>
        <div className="text-md mt-20 flex h-full flex-col items-end justify-between gap-2 font-medium">
          <div className="flex items-center justify-between gap-3">
            <p>Vista Clasica</p>
            <Switch className="bg-blue-500" onClick={() => console.log("hola")} />
            <p>Vista Moderna</p>
          </div>
        </div>
      </section>
      <form className="rounded-xl bg-white">
        <p className="rounded-t-xl bg-[#5AB5E04D] px-5 py-2 font-semibold italic">
          Los campos con * son obligatorios
        </p>
        <section className="flex flex-col items-center gap-5 px-5">
          <div className="mt-7 flex w-full justify-between text-2xl font-bold">
            <p>Datos del paciente</p>
            <p>Empresa</p>
          </div>
          <div className="flex w-full justify-between gap-2">
            <div className="flex flex-col gap-5">
              <input
                className="border border-gray-500 p-2 xl:w-[400px]"
                id="name"
                name="name"
                placeholder="Nombre completo"
                type="text"
              />
              <input
                className="border border-gray-500 p-2 xl:w-[400px]"
                id="dni"
                name="dni"
                placeholder="DNI"
                type="text"
              />
              <input
                className="border border-gray-500 p-2 xl:w-[400px]"
                id="address"
                name="address"
                placeholder="Dirección"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-5">
              <input
                className="border border-gray-500 p-2 xl:w-[400px]"
                id="name"
                name="name"
                placeholder="Nombre completo"
                type="date"
              />
              <input
                className="border border-gray-500 p-2 xl:w-[400px]"
                id="Nacionalidad"
                name="Nacionalidad"
                placeholder="Nacionalidad"
                type="text"
              />
              <input
                className="border border-gray-500 p-2 xl:w-[400px]"
                id="mail"
                name="mail"
                placeholder="E-mail"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-5">
              <input
                className="border border-gray-500 p-2 xl:w-[400px]"
                id="Estado civil"
                name="Estado civil"
                placeholder="Estado civil"
                type="text"
              />
              <input
                className="border border-gray-500 p-2 xl:w-[400px]"
                id="telefono"
                name="telefono"
                placeholder="Teléfono"
                type="text"
              />
              <input
                className="border border-gray-500 p-2 xl:w-[400px]"
                id="Hijos"
                name="Hijos"
                placeholder="Hijos"
                type="text"
              />
            </div>
            <img alt="Logo" className="object-cover" src="/logo.png" width={150} />
          </div>
          <input
            className="mx-5 mb-10 w-full border border-gray-500 p-2"
            placeholder="Tareas a realizar"
            type="text"
          />
        </section>
        <Accordion collapsible type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>Tipo de evaluación</AccordionTrigger>
            <AccordionContent className="flex gap-30">
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input name="type-evaluation" type="radio" />
                  <p className="text-lg">Examen Preocupacional</p>
                </label>
                <label className="flex items-center gap-2">
                  <input name="type-evaluation" type="radio" />
                  <p className="text-lg">Examen de egreso</p>
                </label>
                <label className="flex items-center gap-2">
                  <input name="type-evaluation" type="radio" />
                  <p className="text-lg">Post. Enf. Prolongada</p>
                </label>
                <label className="flex items-center gap-2">
                  <input name="type-evaluation" type="radio" />
                  <p className="text-lg">Otro</p>
                </label>
              </div>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input name="type-evaluation" type="radio" />
                  <p className="text-lg">Examen de salud ocupacional</p>
                </label>
                <label className="flex items-center gap-2">
                  <input name="type-evaluation" type="radio" />
                  <p className="text-lg">Cambio Puesto Laboral</p>
                </label>
                <label className="flex items-center gap-2">
                  <input name="type-evaluation" type="radio" />
                  <p className="text-lg">Aptitud Física Deportiva</p>
                </label>
                <label className="flex items-center gap-2">
                  <p className="text-lg">¿Cual?</p>
                  <input className="w-[200px] border border-gray-500 p-1" name="" type="text" />
                </label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-2">
            <AccordionTrigger>Hábitos</AccordionTrigger>
            <AccordionContent>
              <div className="relative">
                <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
                <div className="flex flex-col gap-3 text-lg">
                  {/* Header */}
                  <div className="flex items-center text-lg">
                    <div className="w-[300px]" />
                    <div className="flex gap-6">
                      <p className="w-6 text-center font-semibold">Si</p>
                      <p className="w-6 text-center font-semibold">No</p>
                    </div>
                  </div>

                  {/* Dieta */}
                  <div className="flex items-center text-lg">
                    <p className="w-[300px]">Dieta</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="dieta"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="dieta"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Fuma */}
                  <div className="flex items-center text-lg">
                    <p className="w-[300px]">Fuma</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="fuma"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="fuma"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">¿Cuántos por día?</span>
                      <input className="w-[180px] border border-gray-500 p-1" type="text" />
                    </div>
                  </div>

                  {/* Toma bebidas alcoholicas */}
                  <div className="flex items-center text-lg">
                    <p className="w-[300px]">Toma bebidas alcohólicas</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="alcohol"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="alcohol"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">Cantidad</span>
                      <input className="w-[180px] border border-gray-500 p-1" type="text" />
                    </div>
                  </div>

                  {/* Usa/ha usado drogas en abuso */}
                  <div className="flex items-center text-lg">
                    <p className="w-[300px]">Usa/ha usado drogas en abuso</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="drogas"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="drogas"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">¿Cuáles?</span>
                      <input className="w-[180px] border border-gray-500 p-1" type="text" />
                    </div>
                  </div>

                  {/* Tiene alteración del sueño */}
                  <div className="flex items-center text-lg">
                    <p className="w-[300px]">Tiene alteración del sueño</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="sueno"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="sueno"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">¿Cuántas horas duerme?</span>
                      <input className="w-[180px] border border-gray-500 p-1" type="text" />
                    </div>
                  </div>

                  {/* Hace alguna dieta */}
                  <div className="flex items-center text-lg">
                    <p className="w-[300px]">Hace alguna dieta</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="hace_dieta"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="hace_dieta"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">¿De qué tipo?</span>
                      <input className="w-[180px] border border-gray-500 p-1" type="text" />
                    </div>
                  </div>

                  {/* Realiza actividad física */}
                  <div className="flex items-center text-lg">
                    <p className="w-[300px]">Realiza actividad física</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="actividad_fisica"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="actividad_fisica"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">¿Cual?</span>
                      <input className="w-[180px] border border-gray-500 p-1" type="text" />
                    </div>
                    <div className="ml-4 flex-col items-center gap-3">
                      <div className="flex items-center gap-6">
                        <label className="flex items-center gap-1">
                          <span className="text-sm">Leve</span>
                          <input
                            className="h-5 w-5 cursor-pointer"
                            name="frecuencia"
                            type="radio"
                            value="leve"
                          />
                        </label>
                        <label className="flex items-center gap-1">
                          <span className="text-sm">Moderada</span>
                          <input
                            className="h-5 w-5 cursor-pointer"
                            name="frecuencia"
                            type="radio"
                            value="moderada"
                          />
                        </label>
                        <label className="flex items-center gap-1">
                          <span className="text-sm">Intensa</span>
                          <input
                            className="h-5 w-5 cursor-pointer"
                            name="frecuencia"
                            type="radio"
                            value="intensa"
                          />
                        </label>
                      </div>
                      <p className="text-center text-lg">Frecuencia</p>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
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
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="padre"
                        type="radio"
                        value="vivo"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="padre"
                        type="radio"
                        value="fallecido"
                      />
                    </div>
                    <p className="ml-20 w-[250px]">Enfermedades mentales</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="enf_mentales"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="enf_mentales"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <p className="ml-32 w-[150px]">Diabetes</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="diabetes"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="diabetes"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Madre - Enfermedades cardiovasculares - empty */}
                  <div className="flex items-center">
                    <p className="w-[120px]">Madre</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="madre"
                        type="radio"
                        value="vivo"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="madre"
                        type="radio"
                        value="fallecido"
                      />
                    </div>
                    <p className="ml-20 w-[250px]">Enfermedades cardiovasculares</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="enf_cardiovasculares"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="enf_cardiovasculares"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Hermanos - Problemas de riñón - Reumatismo */}
                  <div className="flex items-center">
                    <p className="w-[120px]">Hermanos</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="hermanos"
                        type="radio"
                        value="vivo"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="hermanos"
                        type="radio"
                        value="fallecido"
                      />
                    </div>
                    <p className="ml-20 w-[250px]">Problemas de riñón</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="prob_rinon"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="prob_rinon"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <p className="ml-32 w-[150px]">Reumatismo</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="reumatismo"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="reumatismo"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Hermanas - Problemas digestivos - empty */}
                  <div className="flex items-center">
                    <p className="w-[120px]">Hermanas</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="hermanas"
                        type="radio"
                        value="vivo"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="hermanas"
                        type="radio"
                        value="fallecido"
                      />
                    </div>
                    <p className="ml-20 w-[250px]">Problemas digestivos</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="prob_digestivos"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="prob_digestivos"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Esposo/a - Asma - Cáncer */}
                  <div className="flex items-center">
                    <p className="w-[120px]">Esposo/a</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="esposo"
                        type="radio"
                        value="vivo"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="esposo"
                        type="radio"
                        value="fallecido"
                      />
                    </div>
                    <p className="ml-20 w-[250px]">Asma</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="asma"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="asma"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <p className="ml-32 w-[150px]">Cáncer</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="cancer"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="cancer"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Hijos - Tuberculosis - Especificar tipo */}
                  <div className="flex items-center">
                    <p className="w-[120px]">Hijos</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="hijos"
                        type="radio"
                        value="vivo"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="hijos"
                        type="radio"
                        value="fallecido"
                      />
                    </div>
                    <p className="ml-20 w-[250px]">Tuberculosis</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="tuberculosis"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="tuberculosis"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-32 flex flex-col gap-1">
                      <span className="text-base">Especificar tipo</span>
                      <textarea className="h-20 w-[200px] resize-none border border-gray-500 p-2" />
                    </div>
                  </div>

                  {/* Observaciones */}
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-base font-semibold">Observaciones:</span>
                    <textarea className="h-24 w-full resize-none border border-gray-500 p-2" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-4">
            <AccordionTrigger>Antecedentes laborales</AccordionTrigger>
            <AccordionContent>
              <div className="relative">
                <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
                <div className="flex flex-col gap-3">
                  <p className="text-base font-medium">
                    Tareas realizadas - Duración de las mismas
                  </p>
                  <div className="flex flex-col gap-2">
                    <textarea className="w-full border border-gray-500 p-2" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-5">
            <AccordionTrigger>
              ¿Usted ha tenido alguno de los siguientes problemas?
            </AccordionTrigger>
            <AccordionContent>
              <div className="relative">
                <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
                <div className="flex gap-10 text-lg">
                  {/* Columna Izquierda */}
                  <div className="flex flex-1 flex-col gap-3">
                    {/* Header */}
                    <div className="mt-20 flex items-center justify-end">
                      <div className="flex gap-6">
                        <p className="w-6 text-center font-semibold">Si</p>
                        <p className="w-6 text-center font-semibold">No</p>
                      </div>
                    </div>

                    {/* Dolores de cabeza frecuente */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Dolores de cabeza frecuente</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="dolores_cabeza"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="dolores_cabeza"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Convulsiones */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Convulsiones</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="convulsiones"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="convulsiones"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Mareos o desmayos */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Mareos o desmayos</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="mareos"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="mareos"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Nerviosismo excesivo */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Nerviosismo excesivo</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="nerviosismo"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="nerviosismo"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Pérdida de memoria */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Pérdida de memoria</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="perdida_memoria"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="perdida_memoria"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Problemas en los ojos o en la vista */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Problemas en los ojos o en la vista</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="prob_ojos"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="prob_ojos"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Problemas en los oídos o en la audición */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Problemas en los oídos o en la audición</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="prob_oidos"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="prob_oidos"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Problemas en la boca/dientes */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Problemas en la boca/dientes</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="prob_boca"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="prob_boca"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Enfermedades de la piel */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Enfermedades de la piel</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="enf_piel"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="enf_piel"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Alergias */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Alergias</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="alergias_prob"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="alergias_prob"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Sinusitis */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Sinusitis</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="sinusitis_prob"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="sinusitis_prob"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Asma */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Asma</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="asma_prob"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="asma_prob"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Tos prolongada o sangre al escupir */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Tos prolongada o sangre al escupir</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="tos_prolongada"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="tos_prolongada"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Tuberculosis */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Tuberculosis</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="tuberculosis_prob"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="tuberculosis_prob"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Dolores de pecho */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Dolores de pecho</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="dolores_pecho"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="dolores_pecho"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Falta de aire */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Falta de aire</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="falta_aire"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="falta_aire"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Palpitaciones */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Palpitaciones</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="palpitaciones"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="palpitaciones"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Presión alta o baja */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Presión alta o baja</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="presion"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="presion"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Problemas digestivos */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Problemas digestivos</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="prob_digestivos_salud"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="prob_digestivos_salud"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Otros */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <p>Otros</p>
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="otros_problemas"
                          type="radio"
                          value="si"
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">¿Cual?</span>
                        <input className="w-[200px] border border-gray-500 p-1" type="text" />
                      </div>
                    </div>
                  </div>

                  {/* Columna Derecha */}
                  <div className="mt-20 flex flex-1 flex-col gap-3">
                    {/* Header */}
                    <div className="flex items-center justify-end">
                      <div className="flex gap-6">
                        <p className="w-6 text-center font-semibold">Si</p>
                        <p className="w-6 text-center font-semibold">No</p>
                      </div>
                    </div>

                    {/* Hepatitis */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Hepatitis</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="hepatitis"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="hepatitis"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Hernias */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Hernias</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="hernias"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="hernias"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Hemorroides */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Hemorroides</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="hemorroides"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="hemorroides"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Dificultad para orinar */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Dificultad para orinar</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="dif_orinar"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="dif_orinar"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Amputaciones */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Amputaciones</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="amputaciones"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="amputaciones"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Fracturas */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Fracturas</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="fracturas"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="fracturas"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Dolores de cuello */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Dolores de cuello</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="dolores_cuello"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="dolores_cuello"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Dolores de espalda o cintura */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Dolores de espalda o cintura</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="dolores_espalda"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="dolores_espalda"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Dolores en hombros/codos/muñecas */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Dolores en hombros/codos/muñecas</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="dolores_hombros"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="dolores_hombros"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Dolores en caderas/rodillas/tobillos */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Dolores en caderas/rodillas/tobillos</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="dolores_caderas"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="dolores_caderas"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Pies planos */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Pies planos</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="pies_planos"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="pies_planos"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Várices */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Várices</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="varices"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="varices"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Diabetes */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Diabetes</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="diabetes_prob"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="diabetes_prob"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Fiebre reumática */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Fiebre reumática</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="fiebre_reumatica"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="fiebre_reumatica"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Chagas */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Chagas</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="chagas"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="chagas"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Enfermedades de transmisión sexual */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Enfermedades de transmisión sexual</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="enf_transmision"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="enf_transmision"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Cáncer o tumores */}
                    <div className="flex items-center justify-between">
                      <p className="flex-1">Cáncer o tumores</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="cancer_tumores"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="cancer_tumores"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* Toma actualmente alguna medicación */}
                    <div className="flex items-center justify-between gap-2">
                      <p className="flex-1">Toma actualmente alguna medicación</p>
                      <div className="flex gap-6">
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="medicacion"
                          type="radio"
                          value="si"
                        />
                        <input
                          className="h-6 w-6 cursor-pointer"
                          name="medicacion"
                          type="radio"
                          value="no"
                        />
                      </div>
                    </div>

                    {/* ¿Cual? */}
                    <div className="flex items-center gap-2">
                      <span className="text-sm">¿Cual?</span>
                      <input className="flex-1 border border-gray-500 p-1" type="text" />
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-6">
            <AccordionTrigger>Estuvo alguna vez laboralmente en contacto con:</AccordionTrigger>
            <AccordionContent>
              <div className="relative">
                <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
                <div className="flex flex-col gap-3 text-lg">
                  {/* Header */}
                  <div className="flex items-center">
                    <div className="w-[300px]" />
                    <div className="flex gap-6">
                      <p className="w-6 text-center font-semibold">Si</p>
                      <p className="w-6 text-center font-semibold">No</p>
                    </div>
                  </div>

                  {/* ¿Ambiente pulverulento? */}
                  <div className="flex items-center">
                    <p className="w-[300px]">¿Ambiente pulverulento?</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="amb_pulverulento"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="amb_pulverulento"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">Fecha aproximada</span>
                      <input className="w-[200px] border border-gray-500 p-1" type="date" />
                    </div>
                  </div>

                  {/* ¿Ambiente ruidoso? */}
                  <div className="flex items-center">
                    <p className="w-[300px]">¿Ambiente ruidoso?</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="amb_ruidoso"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="amb_ruidoso"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">Fecha aproximada</span>
                      <input className="w-[200px] border border-gray-500 p-1" type="date" />
                    </div>
                  </div>

                  {/* ¿Productos animales? */}
                  <div className="flex items-center">
                    <p className="w-[300px]">¿Productos animales?</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="prod_animales"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="prod_animales"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">Fecha aproximada</span>
                      <input className="w-[200px] border border-gray-500 p-1" type="date" />
                    </div>
                  </div>

                  {/* ¿Productos químicos? */}
                  <div className="flex items-center">
                    <p className="w-[300px]">¿Productos químicos?</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="prod_quimicos"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="prod_quimicos"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">Fecha aproximada</span>
                      <input className="w-[200px] border border-gray-500 p-1" type="date" />
                    </div>
                  </div>

                  {/* ¿Radiaciones ionizantes? */}
                  <div className="flex items-center">
                    <p className="w-[300px]">¿Radiaciones ionizantes?</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="radiaciones"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="radiaciones"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">Fecha aproximada</span>
                      <input className="w-[200px] border border-gray-500 p-1" type="date" />
                    </div>
                  </div>

                  {/* ¿Otros contaminantes? */}
                  <div className="flex items-center">
                    <p className="w-[300px]">¿Otros contaminantes?</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="otros_contaminantes"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="otros_contaminantes"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">Fecha aproximada</span>
                      <input className="w-[200px] border border-gray-500 p-1" type="date" />
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-7">
            <AccordionTrigger>Ha sido operado/a de:</AccordionTrigger>
            <AccordionContent>
              <div className="relative">
                <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
                <div className="flex flex-col gap-3 text-lg">
                  {/* Header */}
                  <div className="flex items-center">
                    <div className="w-[300px]" />
                    <div className="flex gap-6">
                      <p className="w-6 text-center font-semibold">Si</p>
                      <p className="w-6 text-center font-semibold">No</p>
                    </div>
                  </div>

                  {/* ¿Apéndice? */}
                  <div className="flex items-center">
                    <p className="w-[300px]">¿Apéndice?</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="op_apendice"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="op_apendice"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">Fecha aproximada</span>
                      <input className="w-[200px] border border-gray-500 p-1" type="date" />
                    </div>
                  </div>

                  {/* ¿Amígdala? */}
                  <div className="flex items-center">
                    <p className="w-[300px]">¿Amígdala?</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="op_amigdala"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="op_amigdala"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">Fecha aproximada</span>
                      <input className="w-[200px] border border-gray-500 p-1" type="date" />
                    </div>
                  </div>

                  {/* ¿Hernia? */}
                  <div className="flex items-center">
                    <p className="w-[300px]">¿Hernia?</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="op_hernia"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="op_hernia"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">Fecha aproximada</span>
                      <input className="w-[200px] border border-gray-500 p-1" type="date" />
                    </div>
                  </div>

                  {/* ¿Várices? */}
                  <div className="flex items-center">
                    <p className="w-[300px]">¿Várices?</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="op_varices"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="op_varices"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">Fecha aproximada</span>
                      <input className="w-[200px] border border-gray-500 p-1" type="date" />
                    </div>
                  </div>

                  {/* ¿Vesícula? */}
                  <div className="flex items-center">
                    <p className="w-[300px]">¿Vesícula?</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="op_vesicula"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="op_vesicula"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">Fecha aproximada</span>
                      <input className="w-[200px] border border-gray-500 p-1" type="date" />
                    </div>
                  </div>

                  {/* ¿Columna? */}
                  <div className="flex items-center">
                    <p className="w-[300px]">¿Columna?</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="op_columna"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="op_columna"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">Fecha aproximada</span>
                      <input className="w-[200px] border border-gray-500 p-1" type="date" />
                    </div>
                  </div>

                  {/* ¿Testículos? */}
                  <div className="flex items-center">
                    <p className="w-[300px]">¿Testículos?</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="op_testiculos"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="op_testiculos"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">Fecha aproximada</span>
                      <input className="w-[200px] border border-gray-500 p-1" type="date" />
                    </div>
                  </div>

                  {/* Otros */}
                  <div className="flex items-center">
                    <p className="w-[300px]">Otros</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="op_otros"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="op_otros"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-10 flex items-center gap-2">
                      <span className="text-sm">Fecha aproximada</span>
                      <input className="w-[200px] border border-gray-500 p-1" type="date" />
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-12">
            <AccordionTrigger>Antecedentes personales</AccordionTrigger>
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

                  {/* Internaciones */}
                  <div className="flex items-center">
                    <p className="w-[200px]">Internaciones</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="internaciones"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="internaciones"
                        type="radio"
                        value="no"
                      />
                    </div>
                    <div className="ml-6 flex items-center gap-2">
                      <span className="text-sm">En caso de si, indique, ¿por qué?</span>
                      <input className="w-[300px] border border-gray-500 p-1" type="text" />
                    </div>
                  </div>

                  {/* Covid-19 */}
                  <div className="flex items-center">
                    <p className="flex-1">Covid-19</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="covid19"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="covid19"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* FHA */}
                  <div className="flex items-center">
                    <p className="flex-1">FHA</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="fha"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="fha"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Dengue */}
                  <div className="flex items-center">
                    <p className="flex-1">Dengue</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="dengue"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="dengue"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-8">
            <AccordionTrigger>Examen Clínico</AccordionTrigger>
            <AccordionContent>
              <div className="relative">
                <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
                <div className="flex flex-col gap-3 text-lg">
                  {/* Talla */}
                  <div className="flex items-center gap-4">
                    <span className="w-[150px]">Talla</span>
                    <input className="w-[200px] border border-gray-500 p-2" type="text" />
                  </div>

                  {/* Peso */}
                  <div className="flex items-center gap-4">
                    <span className="w-[150px]">Peso</span>
                    <input className="w-[200px] border border-gray-500 p-2" type="text" />
                  </div>

                  {/* Saturación */}
                  <div className="flex items-center gap-4">
                    <span className="w-[150px]">Saturación</span>
                    <input className="w-[200px] border border-gray-500 p-2" type="text" />
                  </div>

                  {/* IMC */}
                  <div className="flex items-center gap-4">
                    <span className="w-[150px]">IMC</span>
                    <input className="w-[200px] border border-gray-500 p-2" type="text" />
                  </div>

                  {/* TA: mínima */}
                  <div className="flex items-center gap-4">
                    <span className="w-[150px]">TA: mínima</span>
                    <input className="w-[200px] border border-gray-500 p-2" type="text" />
                  </div>

                  {/* TA: máxima */}
                  <div className="flex items-center gap-4">
                    <span className="w-[150px]">TA: máxima</span>
                    <input className="w-[200px] border border-gray-500 p-2" type="text" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
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
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="alt_piel"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="alt_piel"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Piercing */}
                  <div className="flex items-center">
                    <p className="flex-1">Piercing</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="piercing"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="piercing"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Tatuajes */}
                  <div className="flex items-center">
                    <p className="flex-1">Tatuajes</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="tatuajes"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="tatuajes"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Cicatrices */}
                  <div className="flex items-center">
                    <p className="flex-1">Cicatrices</p>
                    <div className="flex gap-6">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="cicatrices"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="cicatrices"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Observaciones */}
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-base font-semibold">Observaciones:</span>
                    <textarea className="h-24 w-full resize-none border border-gray-500 p-2" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-10">
            <AccordionTrigger>Examen Oftalmológico</AccordionTrigger>
            <AccordionContent>
              <div className="relative">
                <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
                <div className="flex flex-col gap-4 text-lg">
                  {/* Agudeza Visual */}
                  <div>
                    <p className="font-semibold">Agudeza Visual</p>

                    {/* Cercana */}
                    <p className="mt-3 italic">Cercana</p>
                    <div className="mt-2 flex gap-8">
                      <div className="flex items-center gap-2">
                        <span>S/C | OD</span>
                        <input className="w-[120px] border border-gray-500 p-1" type="text" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span>S/C | OI</span>
                        <input className="w-[120px] border border-gray-500 p-1" type="text" />
                      </div>
                    </div>
                    <div className="mt-2 flex gap-8">
                      <div className="flex items-center gap-2">
                        <span>C/C | OD</span>
                        <input className="w-[120px] border border-gray-500 p-1" type="text" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span>C/C | OI</span>
                        <input className="w-[120px] border border-gray-500 p-1" type="text" />
                      </div>
                    </div>

                    {/* Lejana */}
                    <p className="mt-4 italic">Lejana</p>
                    <div className="mt-2 flex gap-8">
                      <div className="flex items-center gap-2">
                        <span>S/C | OD</span>
                        <input className="w-[120px] border border-gray-500 p-1" type="text" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span>S/C | OI</span>
                        <input className="w-[120px] border border-gray-500 p-1" type="text" />
                      </div>
                    </div>
                    <div className="mt-2 flex gap-8">
                      <div className="flex items-center gap-2">
                        <span>C/C | OD</span>
                        <input className="w-[120px] border border-gray-500 p-1" type="text" />
                      </div>
                      <div className="flex items-center gap-2">
                        <span>C/C | OI</span>
                        <input className="w-[120px] border border-gray-500 p-1" type="text" />
                      </div>
                    </div>
                  </div>

                  {/* Header Si No con spacing reducido */}
                  <div className="mt-4 flex items-center">
                    <div className="flex-1" />
                    <div className="flex gap-3">
                      <p className="w-6 text-center font-semibold">Si</p>
                      <p className="w-6 text-center font-semibold">No</p>
                    </div>
                  </div>

                  {/* Alteraciones oculares */}
                  <div className="flex items-center">
                    <p className="flex-1">Alteraciones oculares</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="alt_oculares"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="alt_oculares"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Discromatopsia */}
                  <div className="flex items-center">
                    <p className="flex-1">Discromatopsia</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="discromatopsia"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="discromatopsia"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Observaciones */}
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-base font-semibold">Observaciones:</span>
                    <textarea className="h-24 w-full resize-none border border-gray-500 p-2" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
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
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="protesis"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="protesis"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Caries */}
                  <div className="flex items-center">
                    <p className="flex-1">Caries</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="caries"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="caries"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Encías alteradas */}
                  <div className="flex items-center">
                    <p className="flex-1">Encías alteradas</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="encias_alteradas"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="encias_alteradas"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Dentadura parcial */}
                  <div className="flex items-center">
                    <p className="flex-1">Dentadura parcial</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="dentadura_parcial"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="dentadura_parcial"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Observaciones */}
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-base font-semibold">Observaciones:</span>
                    <textarea className="h-24 w-full resize-none border border-gray-500 p-2" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-13">
            <AccordionTrigger>Examen ORL</AccordionTrigger>
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

                  {/* Patología de Faringe */}
                  <div className="flex items-center">
                    <p className="flex-1">Patología de Faringe</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="patologia_faringe"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="patologia_faringe"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Patología de Amígdalas */}
                  <div className="flex items-center">
                    <p className="flex-1">Patología de Amígdalas</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="patologia_amigdalas"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="patologia_amigdalas"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Alteraciones de la voz */}
                  <div className="flex items-center">
                    <p className="flex-1">Alteraciones de la voz</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="alt_voz"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="alt_voz"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Rinitis */}
                  <div className="flex items-center">
                    <p className="flex-1">Rinitis</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="rinitis"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="rinitis"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Trastornos de la audición */}
                  <div className="flex items-center">
                    <p className="flex-1">Trastornos de la audición</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="trastornos_audicion"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="trastornos_audicion"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Adenopatías */}
                  <div className="flex items-center">
                    <p className="flex-1">Adenopatías</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="adenopatias"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="adenopatias"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Observaciones */}
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-base font-semibold">Observaciones:</span>
                    <textarea className="h-24 w-full resize-none border border-gray-500 p-2" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-14">
            <AccordionTrigger>Examen Cabeza o Cuello</AccordionTrigger>
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

                  {/* Movilidad alterada */}
                  <div className="flex items-center">
                    <p className="flex-1">Movilidad alterada</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="movilidad_alterada"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="movilidad_alterada"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Latidos carotídeos alterados */}
                  <div className="flex items-center">
                    <p className="flex-1">Latidos carotídeos alterados</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="latidos_carotideos"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="latidos_carotideos"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Tumoraciones tiroideas */}
                  <div className="flex items-center">
                    <p className="flex-1">Tumoraciones tiroideas</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="tumoraciones_tiroideas"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="tumoraciones_tiroideas"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Adenopatías */}
                  <div className="flex items-center">
                    <p className="flex-1">Adenopatías</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="adenopatias_cuello"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="adenopatias_cuello"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Observaciones */}
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-base font-semibold">Observaciones:</span>
                    <textarea className="h-24 w-full resize-none border border-gray-500 p-2" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-15">
            <AccordionTrigger>Examen Cardiovascular</AccordionTrigger>
            <AccordionContent>
              <div className="relative">
                <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
                <div className="flex flex-col gap-3 text-lg">
                  {/* Frecuencia cardíaca */}
                  <div className="flex items-center gap-2">
                    <span>Frecuencia cardíaca:</span>
                    <input className="w-[150px] border border-gray-500 p-1" type="text" />
                    <span className="text-sm italic">por minuto</span>
                  </div>

                  {/* Tensión arterial */}
                  <div className="flex items-center gap-2">
                    <span>Tensión arterial:</span>
                    <input className="w-[150px] border border-gray-500 p-1" type="text" />
                    <span className="text-sm italic">mm/Hg</span>
                  </div>

                  {/* Header */}
                  <div className="mt-4 flex items-center">
                    <div className="flex-1" />
                    <div className="flex gap-3">
                      <p className="w-6 text-center font-semibold">Si</p>
                      <p className="w-6 text-center font-semibold">No</p>
                    </div>
                  </div>

                  {/* Ritmo cardíaco irregular */}
                  <div className="flex items-center">
                    <p className="flex-1">Ritmo cardíaco irregular</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="ritmo_irregular"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="ritmo_irregular"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Ruidos cardíacos alterados */}
                  <div className="flex items-center">
                    <p className="flex-1">Ruidos cardíacos alterados</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="ruidos_alterados"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="ruidos_alterados"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Extrasístoles */}
                  <div className="flex items-center">
                    <p className="flex-1">Extrasístoles</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="extrasistoles"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="extrasistoles"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Soplos */}
                  <div className="flex items-center">
                    <p className="flex-1">Soplos</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="soplos"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="soplos"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Pulsos periféricos ausentes */}
                  <div className="flex items-center">
                    <p className="flex-1">Pulsos periféricos ausentes</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="pulsos_ausentes"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="pulsos_ausentes"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Várices */}
                  <div className="flex items-center">
                    <p className="flex-1">Várices</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="varices_cardiovascular"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="varices_cardiovascular"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Observaciones */}
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-base font-semibold">Observaciones:</span>
                    <textarea className="h-24 w-full resize-none border border-gray-500 p-2" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-16">
            <AccordionTrigger>Examen Torácico/Respiratorio</AccordionTrigger>
            <AccordionContent>
              <div className="relative">
                <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
                <div className="flex flex-col gap-3 text-lg">
                  {/* Frecuencia respiratoria */}
                  <div className="flex items-center gap-2">
                    <span>Frecuencia respiratoria:</span>
                    <input className="w-[150px] border border-gray-500 p-1" type="text" />
                    <span className="text-sm italic">por minuto</span>
                  </div>

                  {/* Header */}
                  <div className="mt-4 flex items-center">
                    <div className="flex-1" />
                    <div className="flex gap-3">
                      <p className="w-6 text-center font-semibold">Si</p>
                      <p className="w-6 text-center font-semibold">No</p>
                    </div>
                  </div>

                  {/* Deformaciones torácicas */}
                  <div className="flex items-center">
                    <p className="flex-1">Deformaciones torácicas</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="deformaciones_toracicas"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="deformaciones_toracicas"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Rales */}
                  <div className="flex items-center">
                    <p className="flex-1">Rales</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="rales"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="rales"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Roncus y Sibilancias */}
                  <div className="flex items-center">
                    <p className="flex-1">Roncus y Sibilancias</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="roncus_sibilancias"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="roncus_sibilancias"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Murmullo vesicular alterado */}
                  <div className="flex items-center">
                    <p className="flex-1">Murmullo vesicular alterado</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="murmullo_alterado"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="murmullo_alterado"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Adenopatías */}
                  <div className="flex items-center">
                    <p className="flex-1">Adenopatías</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="adenopatias_respiratorio"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="adenopatias_respiratorio"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Proceso agudo en curso */}
                  <div className="flex items-center">
                    <p className="flex-1">Proceso agudo en curso</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="proceso_agudo"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="proceso_agudo"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Observaciones */}
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-base font-semibold">Observaciones:</span>
                    <textarea className="h-24 w-full resize-none border border-gray-500 p-2" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
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
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="cicatrices_quirurgicas"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="cicatrices_quirurgicas"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Hemorroides */}
                  <div className="flex items-center">
                    <p className="flex-1">Hemorroides</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="hemorroides"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="hemorroides"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Dolores abdominales */}
                  <div className="flex items-center">
                    <p className="flex-1">Dolores abdominales</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="dolores_abdominales"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="dolores_abdominales"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Hepatomegalia */}
                  <div className="flex items-center">
                    <p className="flex-1">Hepatomegalia</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="hepatomegalia"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="hepatomegalia"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Esplenomegalia */}
                  <div className="flex items-center">
                    <p className="flex-1">Esplenomegalia</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="esplenomegalia"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="esplenomegalia"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Adenopatías */}
                  <div className="flex items-center">
                    <p className="flex-1">Adenopatías</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="adenopatias_digestivo"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="adenopatias_digestivo"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Hernias/Eventraciones */}
                  <div className="flex items-center">
                    <p className="flex-1">Hernias/Eventraciones</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="hernias_eventraciones"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="hernias_eventraciones"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Observaciones */}
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-base font-semibold">Observaciones:</span>
                    <textarea className="h-24 w-full resize-none border border-gray-500 p-2" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-18">
            <AccordionTrigger>Examen Genitourinario</AccordionTrigger>
            <AccordionContent>
              <div className="relative">
                <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
                <div className="flex gap-8">
                  {/* Columna Mujeres */}
                  <div className="flex-1 border-r-2 border-blue-400 pr-6">
                    <p className="mb-3 text-lg font-semibold italic">Mujeres</p>
                    <div className="flex flex-col gap-3 text-lg">
                      {/* Header */}
                      <div className="flex items-center">
                        <div className="flex-1" />
                        <div className="flex gap-3">
                          <p className="w-6 text-center text-base font-semibold">Si</p>
                          <p className="w-6 text-center text-base font-semibold">No</p>
                        </div>
                      </div>

                      {/* Alteraciones mamarias */}
                      <div className="flex items-center">
                        <p className="flex-1 text-base">Alteraciones mamarias</p>
                        <div className="flex gap-3">
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="alt_mamarias_m"
                            type="radio"
                            value="si"
                          />
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="alt_mamarias_m"
                            type="radio"
                            value="no"
                          />
                        </div>
                      </div>

                      {/* Alteraciones ginecológicas */}
                      <div className="flex items-center">
                        <p className="flex-1 text-base">Alteraciones ginecológicas</p>
                        <div className="flex gap-3">
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="alt_ginecologicas"
                            type="radio"
                            value="si"
                          />
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="alt_ginecologicas"
                            type="radio"
                            value="no"
                          />
                        </div>
                      </div>

                      {/* FUM */}
                      <div className="flex items-center">
                        <p className="flex-1 text-base">FUM</p>
                        <div className="flex gap-3">
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="fum"
                            type="radio"
                            value="si"
                          />
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="fum"
                            type="radio"
                            value="no"
                          />
                        </div>
                      </div>

                      {/* Dolores menstruales */}
                      <div className="flex items-center">
                        <p className="flex-1 text-base">Dolores menstruales</p>
                        <div className="flex gap-3">
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="dolores_menstruales"
                            type="radio"
                            value="si"
                          />
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="dolores_menstruales"
                            type="radio"
                            value="no"
                          />
                        </div>
                      </div>

                      {/* Flujos alterados */}
                      <div className="flex items-center">
                        <p className="flex-1 text-base">Flujos alterados</p>
                        <div className="flex gap-3">
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="flujos_alterados"
                            type="radio"
                            value="si"
                          />
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="flujos_alterados"
                            type="radio"
                            value="no"
                          />
                        </div>
                      </div>

                      {/* Anticonceptivos */}
                      <div className="flex items-center">
                        <p className="flex-1 text-base">Anticonceptivos</p>
                        <div className="flex gap-3">
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="anticonceptivos"
                            type="radio"
                            value="si"
                          />
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="anticonceptivos"
                            type="radio"
                            value="no"
                          />
                        </div>
                      </div>

                      {/* Parto normal */}
                      <div className="flex items-center">
                        <p className="flex-1 text-base">Parto normal</p>
                        <div className="flex gap-3">
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="parto_normal"
                            type="radio"
                            value="si"
                          />
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="parto_normal"
                            type="radio"
                            value="no"
                          />
                        </div>
                      </div>

                      {/* Abortos */}
                      <div className="flex items-center">
                        <p className="flex-1 text-base">Abortos</p>
                        <div className="flex gap-3">
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="abortos"
                            type="radio"
                            value="si"
                          />
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="abortos"
                            type="radio"
                            value="no"
                          />
                        </div>
                      </div>

                      {/* Cesárea */}
                      <div className="flex items-center">
                        <p className="flex-1 text-base">Cesárea</p>
                        <div className="flex gap-3">
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="cesarea"
                            type="radio"
                            value="si"
                          />
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="cesarea"
                            type="radio"
                            value="no"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Columna Hombres */}
                  <div className="flex-1 pl-6">
                    <p className="mb-3 text-lg font-semibold italic">Hombres</p>
                    <div className="flex flex-col gap-3 text-lg">
                      {/* Header */}
                      <div className="flex items-center">
                        <div className="flex-1" />
                        <div className="flex gap-3">
                          <p className="w-6 text-center text-base font-semibold">Si</p>
                          <p className="w-6 text-center text-base font-semibold">No</p>
                        </div>
                      </div>

                      {/* Alteraciones mamarias */}
                      <div className="flex items-center">
                        <p className="flex-1 text-base">Alteraciones mamarias</p>
                        <div className="flex gap-3">
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="alt_mamarias_h"
                            type="radio"
                            value="si"
                          />
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="alt_mamarias_h"
                            type="radio"
                            value="no"
                          />
                        </div>
                      </div>

                      {/* Alteraciones testiculares */}
                      <div className="flex items-center">
                        <p className="flex-1 text-base">Alteraciones testiculares</p>
                        <div className="flex gap-3">
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="alt_testiculares"
                            type="radio"
                            value="si"
                          />
                          <input
                            className="h-6 w-6 cursor-pointer"
                            name="alt_testiculares"
                            type="radio"
                            value="no"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Observaciones */}
                <div className="mt-4 flex flex-col gap-2">
                  <span className="text-base font-semibold">Observaciones:</span>
                  <textarea className="h-24 w-full resize-none border border-gray-500 p-2" />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
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
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="movilidad_alterada_cv"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="movilidad_alterada_cv"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Puntos dolorosos */}
                  <div className="flex items-center">
                    <p className="flex-1 text-base">Puntos dolorosos</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="puntos_dolorosos"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="puntos_dolorosos"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Escoliosis */}
                  <div className="flex items-center">
                    <p className="flex-1 text-base">Escoliosis</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="escoliosis"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="escoliosis"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Cifosis anormal */}
                  <div className="flex items-center">
                    <p className="flex-1 text-base">Cifosis anormal</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="cifosis_anormal"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="cifosis_anormal"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Lordosis anormal */}
                  <div className="flex items-center">
                    <p className="flex-1 text-base">Lordosis anormal</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="lordosis_anormal"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="lordosis_anormal"
                        type="radio"
                        value="no"
                      />
                    </div>
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
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="dolor_articular_es"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="dolor_articular_es"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Limitación de movimientos */}
                  <div className="flex items-center">
                    <p className="flex-1 text-base">Limitación de movimientos</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="limitacion_movimientos"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="limitacion_movimientos"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Tono/Trofismo alterado */}
                  <div className="flex items-center">
                    <p className="flex-1 text-base">Tono/Trofismo alterado</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="tono_trofismo"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="tono_trofismo"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Amputaciones */}
                  <div className="flex items-center">
                    <p className="flex-1 text-base">Amputaciones</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="amputaciones_es"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="amputaciones_es"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Movilidad hombro alterado */}
                  <div className="flex items-center">
                    <p className="flex-1 text-base">Movilidad hombro alterado</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="movilidad_hombro"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="movilidad_hombro"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Movilidad codo alterado */}
                  <div className="flex items-center">
                    <p className="flex-1 text-base">Movilidad codo alterado</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="movilidad_codo"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="movilidad_codo"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Movilidad muñeca alterada */}
                  <div className="flex items-center">
                    <p className="flex-1 text-base">Movilidad muñeca alterada</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="movilidad_muneca"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="movilidad_muneca"
                        type="radio"
                        value="no"
                      />
                    </div>
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
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="movilidad_mano"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="movilidad_mano"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Movilidad cadera alterada */}
                  <div className="flex items-center">
                    <p className="flex-1 text-base">Movilidad cadera alterada</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="movilidad_cadera"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="movilidad_cadera"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Movilidad rodilla alterada */}
                  <div className="flex items-center">
                    <p className="flex-1 text-base">Movilidad rodilla alterada</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="movilidad_rodilla"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="movilidad_rodilla"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Movilidad pié alterado */}
                  <div className="flex items-center">
                    <p className="flex-1 text-base">Movilidad pié alterado</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="movilidad_pie"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="movilidad_pie"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Pies planos - ANTES de Observaciones */}
                  <div className="flex items-center">
                    <p className="flex-1 text-base">Pies planos</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="pies_planos"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="pies_planos"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Observaciones - AHORA AL FINAL */}
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-base font-semibold">Observaciones:</span>
                    <textarea className="h-24 w-full resize-none border border-gray-500 p-2" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-20">
            <AccordionTrigger>Evaluación Clínica Neurológica</AccordionTrigger>
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

                  {/* Desorientado tiempo y espacio */}
                  <div className="flex items-center">
                    <p className="flex-1">Desorientado tiempo y espacio</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="desorientado"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="desorientado"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Motilidad alterada */}
                  <div className="flex items-center">
                    <p className="flex-1">Motilidad alterada</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="motilidad_alterada_neuro"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="motilidad_alterada_neuro"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Sensibilidad alterada */}
                  <div className="flex items-center">
                    <p className="flex-1">Sensibilidad alterada</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="sensibilidad_alterada"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="sensibilidad_alterada"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Reflejos alterados */}
                  <div className="flex items-center">
                    <p className="flex-1">Reflejos alterados</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="reflejos_alterados"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="reflejos_alterados"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Apraxia */}
                  <div className="flex items-center">
                    <p className="flex-1">Apraxia</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="apraxia"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="apraxia"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Ataxia */}
                  <div className="flex items-center">
                    <p className="flex-1">Ataxia</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="ataxia"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="ataxia"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Observaciones */}
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-base font-semibold">Observaciones:</span>
                    <textarea className="h-24 w-full resize-none border border-gray-500 p-2" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-20">
            <AccordionTrigger>Evaluación Clínica Psíquica</AccordionTrigger>
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

                  {/* Alteraciones de conducta */}
                  <div className="flex items-center">
                    <p className="flex-1">Alteraciones de conducta</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="alt_conducta"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="alt_conducta"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Nerviosismo excesivo */}
                  <div className="flex items-center">
                    <p className="flex-1">Nerviosismo excesivo</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="nerviosismo"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="nerviosismo"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Depresión Psicomotriz */}
                  <div className="flex items-center">
                    <p className="flex-1">Depresión Psicomotriz</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="depresion_psicomotriz"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="depresion_psicomotriz"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Timidez excesiva */}
                  <div className="flex items-center">
                    <p className="flex-1">Timidez excesiva</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="timidez"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="timidez"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Observaciones */}
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-base font-semibold">Observaciones:</span>
                    <textarea className="h-24 w-full resize-none border border-gray-500 p-2" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-21">
            <AccordionTrigger>Inmunizaciones</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-6">
                <div className="grid grid-cols-[260px_120px_1fr] items-center">
                  <span />
                  <div className="flex justify-center gap-8">
                    <span className="w-6 text-center font-semibold">Si</span>
                    <span className="w-6 text-center font-semibold">No</span>
                  </div>
                  <span>Dosis</span>
                </div>

                <div className="grid grid-cols-[260px_120px_1fr] items-center">
                  <span className="text-lg text-gray-900">Sars-cov-2</span>

                  <div className="flex justify-center gap-8">
                    <input className="radio" name="covid" type="radio" />
                    <input className="radio checked" name="covid" type="radio" />
                  </div>

                  <div className="flex gap-6">
                    <label className="flex items-center gap-2">
                      <input className="radio" name="covid-dose" type="radio" /> 1
                    </label>
                    <label className="flex items-center gap-2">
                      <input className="radio" name="covid-dose" type="radio" /> 2
                    </label>
                    <label className="flex items-center gap-2">
                      <input className="radio" name="covid-dose" type="radio" /> 3
                    </label>
                    <label className="flex items-center gap-2">
                      <input className="radio" name="covid-dose" type="radio" /> 4
                    </label>
                  </div>
                </div>

                <div className="grid grid-cols-[260px_120px_1fr] items-center">
                  <span className="text-lg text-gray-900">FHA</span>
                  <div className="flex justify-center gap-8">
                    <input className="radio" name="fha" type="radio" />
                    <input className="radio checked" name="fha" type="radio" />
                  </div>
                  <span />
                </div>

                <div className="grid grid-cols-[260px_120px_1fr] items-center">
                  <span className="text-lg text-gray-900">Triple adultos (tétanos)</span>
                  <div className="flex justify-center gap-8">
                    <input className="radio" name="tetanos" type="radio" />
                    <input className="radio checked" name="tetanos" type="radio" />
                  </div>
                  <span />
                </div>

                <div className="grid grid-cols-[260px_120px_1fr] items-center">
                  <span className="text-lg text-gray-900">Hepatitis A</span>
                  <div className="flex justify-center gap-8">
                    <input className="radio" name="hep-a" type="radio" />
                    <input className="radio checked" name="hep-a" type="radio" />
                  </div>
                  <span />
                </div>

                <div className="grid grid-cols-[260px_120px_1fr] items-center">
                  <span className="text-lg text-gray-900">Hepatitis B</span>
                  <div className="flex justify-center gap-8">
                    <input className="radio" name="hep-b" type="radio" />
                    <input className="radio checked" name="hep-b" type="radio" />
                  </div>
                  <span />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-22">
            <AccordionTrigger>Examen médico laboral</AccordionTrigger>
            <AccordionContent>
              <div className="relative">
                <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
                <div className="flex flex-col gap-3 text-lg">
                  {/* Subtitle */}
                  <p className="font-semibold italic">Antecedentes de exposición</p>

                  {/* Header */}
                  <div className="flex items-center">
                    <div className="flex-1" />
                    <div className="flex gap-3">
                      <p className="w-6 text-center font-semibold">Si</p>
                      <p className="w-6 text-center font-semibold">No</p>
                    </div>
                  </div>

                  {/* Físico */}
                  <div className="flex items-center">
                    <p className="flex-1">Físico</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="fisico_laboral"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="fisico_laboral"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Químico */}
                  <div className="flex items-center">
                    <p className="flex-1">Químico</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="quimico_laboral"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="quimico_laboral"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Biológico */}
                  <div className="flex items-center">
                    <p className="flex-1">Biológico</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="biologico_laboral"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="biologico_laboral"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Ergonómico */}
                  <div className="flex items-center">
                    <p className="flex-1">Ergonómico</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="ergonomico_laboral"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="ergonomico_laboral"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Otros */}
                  <div className="flex items-center">
                    <p className="flex-1">Otros</p>
                    <div className="flex gap-3">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="otros_laboral"
                        type="radio"
                        value="si"
                      />
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="otros_laboral"
                        type="radio"
                        value="no"
                      />
                    </div>
                  </div>

                  {/* Observaciones */}
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-base font-semibold">Observaciones:</span>
                    <textarea className="h-24 w-full resize-none border border-gray-500 p-2" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-23">
            <AccordionTrigger>Conclusiones y recomendaciones</AccordionTrigger>
            <AccordionContent>
              <div className="relative">
                <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
                <div className="flex flex-col gap-3 text-lg">
                  <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3">
                    {/* Columna izquierda */}
                    <div className="flex items-center gap-2">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="conclusion"
                        type="radio"
                        value="apto"
                      />
                      <label className="text-base">Apto</label>
                    </div>

                    {/* Columna derecha */}
                    <div className="flex items-center gap-2">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="conclusion"
                        type="radio"
                        value="apto_sin_condicion"
                      />
                      <label className="text-base">
                        Apto con preexistencia que no condiciona su tarea laboral
                      </label>
                    </div>

                    {/* Columna izquierda */}
                    <div className="flex items-center gap-2">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="conclusion"
                        type="radio"
                        value="no_apto_definitivo"
                      />
                      <label className="text-base">No apto definitivo</label>
                    </div>

                    {/* Columna derecha */}
                    <div className="flex items-center gap-2">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="conclusion"
                        type="radio"
                        value="apto_con_condicion"
                      />
                      <label className="text-base">
                        Apto con preexistencia que condiciona su tarea laboral
                      </label>
                    </div>

                    {/* Columna izquierda */}
                    <div className="flex items-center gap-2">
                      <input
                        className="h-6 w-6 cursor-pointer"
                        name="conclusion"
                        type="radio"
                        value="no_apto_temporal"
                      />
                      <label className="text-base">No apto temporal</label>
                    </div>
                  </div>

                  {/* Duración */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-base">Duración</span>
                    <input className="w-[200px] border border-gray-500 p-1" type="text" />
                  </div>

                  {/* Observaciones */}
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="text-base font-semibold">Observaciones:</span>
                    <textarea className="h-24 w-full resize-none border border-gray-500 p-2" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-24">
            <AccordionTrigger>
              Derivaciones y apellido del pacientes con especialistas
            </AccordionTrigger>
            <AccordionContent>
              <div className="relative">
                <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
                <div className="mt-10">
                  <textarea className="h-32 w-full resize-none border border-gray-500 p-2 text-base" />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-25">
            <AccordionTrigger>Estudios realizados</AccordionTrigger>
            <AccordionContent>
              <div className="relative">
                <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
                <div className="mt-10 flex flex-col gap-2 text-base">
                  {/* RX Torax frente */}
                  <div className="flex items-center gap-2">
                    <input className="h-5 w-5 cursor-pointer" name="rx_torax" type="checkbox" />
                    <span>RX Torax frente</span>
                  </div>

                  {/* RX Columna Lumbo-Sacra frente/perfi */}
                  <div className="flex items-center gap-2">
                    <input
                      className="h-5 w-5 cursor-pointer"
                      name="rx_columna_lumbo"
                      type="checkbox"
                    />
                    <span>RX Columna Lumbo-Sacra frente/perfi</span>
                  </div>

                  {/* RX Columna Cervical frente/perfil */}
                  <div className="flex items-center gap-2">
                    <input
                      className="h-5 w-5 cursor-pointer"
                      name="rx_columna_cervical"
                      type="checkbox"
                    />
                    <span>RX Columna Cervical frente/perfil</span>
                  </div>

                  {/* Electrocardiograma */}
                  <div className="flex items-center gap-2">
                    <input
                      className="h-5 w-5 cursor-pointer"
                      name="electrocardiograma_estudio"
                      type="checkbox"
                    />
                    <span>Electrocardiograma</span>
                  </div>

                  {/* Audiometría */}
                  <div className="flex items-center gap-2">
                    <input
                      className="h-5 w-5 cursor-pointer"
                      name="audiometria_estudio"
                      type="checkbox"
                    />
                    <span>Audiometría</span>
                  </div>

                  {/* Psicotécnico */}
                  <div className="flex items-center gap-2">
                    <input className="h-5 w-5 cursor-pointer" name="psicotecnico" type="checkbox" />
                    <span>Psicotécnico</span>
                  </div>

                  {/* Espirometría */}
                  <div className="flex items-center gap-2">
                    <input
                      className="h-5 w-5 cursor-pointer"
                      name="espirometria_estudio"
                      type="checkbox"
                    />
                    <span>Espirometría</span>
                  </div>

                  {/* Ergometría */}
                  <div className="flex items-center gap-2">
                    <input className="h-5 w-5 cursor-pointer" name="ergometria" type="checkbox" />
                    <span>Ergometría</span>
                  </div>

                  {/* Evaluación Oftalmológica */}
                  <div className="flex items-center gap-2">
                    <input
                      className="h-5 w-5 cursor-pointer"
                      name="eval_oftalmologica"
                      type="checkbox"
                    />
                    <span>Evaluación Oftalmológica</span>
                  </div>

                  {/* Psicometría */}
                  <div className="flex items-center gap-2">
                    <input className="h-5 w-5 cursor-pointer" name="psicometria" type="checkbox" />
                    <span>Psicometría</span>
                  </div>

                  {/* Electroencefalograma */}
                  <div className="flex items-center gap-2">
                    <input
                      className="h-5 w-5 cursor-pointer"
                      name="electroencefalograma"
                      type="checkbox"
                    />
                    <span>Electroencefalograma</span>
                  </div>

                  {/* Laboratorio */}
                  <div className="flex items-center gap-2">
                    <input className="h-5 w-5 cursor-pointer" name="laboratorio" type="checkbox" />
                    <span>Laboratorio</span>
                  </div>

                  {/* Drogas de abuso */}
                  <div className="flex items-center gap-2">
                    <input className="h-5 w-5 cursor-pointer" name="drogas_abuso" type="checkbox" />
                    <span>Drogas de abuso</span>
                  </div>

                  {/* Observaciones - AHORA AL FINAL */}
                  <div className="mt-4 flex flex-col gap-2">
                    <span className="font-semibold">Observaciones:</span>
                    <textarea className="h-24 w-full resize-none border border-gray-500 p-2" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion collapsible type="single">
          <AccordionItem value="item-final">
            <AccordionTrigger>Firma Digital y Matrícula</AccordionTrigger>
            <AccordionContent>
              <div className="relative">
                <img alt="Logo" className="absolute top-0 right-0" src="/logo.png" width={60} />
                <div className="space-y-8">
                  {/* Médico Evaluador */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold">Médico Evaluador</p>

                    <div className="flex items-center gap-4">
                      <label className="text-base" htmlFor="fecha-evaluador">
                        Fecha
                      </label>
                      <input
                        className="border border-gray-500 p-1"
                        id="fecha-evaluador"
                        type="date"
                      />
                    </div>

                    <div className="flex gap-4">
                      <label className="text-base whitespace-nowrap" htmlFor="firma-evaluador">
                        Firma y matrícula
                      </label>
                      <textarea
                        className="h-24 w-full resize-none border border-gray-500 p-2"
                        id="firma-evaluador"
                      />
                    </div>
                  </div>

                  {/* Médico Laboral */}
                  <div className="space-y-4">
                    <p className="text-lg font-semibold">Médico Laboral</p>

                    <div className="flex items-center gap-4">
                      <label className="text-base" htmlFor="fecha-laboral">
                        Fecha
                      </label>
                      <input
                        className="border border-gray-500 p-1"
                        id="fecha-laboral"
                        type="date"
                      />
                    </div>

                    <div className="flex gap-4">
                      <label className="text-base whitespace-nowrap" htmlFor="firma-laboral">
                        Firma y matrícula
                      </label>
                      <textarea
                        className="h-24 w-full resize-none border border-gray-500 p-2"
                        id="firma-laboral"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </form>
    </main>
  );
}
