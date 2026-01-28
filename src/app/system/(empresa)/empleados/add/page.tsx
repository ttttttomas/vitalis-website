"use client";
import Link from "next/link";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";

import {UserPatient} from "@/types";

import Panel from "@/app/system/components/Panel";
import {ArrowLeft, Clients} from "@/components/ui/Icons";
import {dataService} from "@/services/dataService";
import {authService} from "@/services/authService";

export default function AddEmployeePage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const {profile} = await authService.getCurrentUser();
      const id = profile.company_id;

      if (!id) {
        setError("No se pudo identificar a la empresa.");

        return;
      }

      await dataService.createEmployee(id, data as unknown as UserPatient);
      alert("Empleado agregado correctamente");
      router.push("/system/empleados");
    } catch (e) {
      console.error(e);
      setError("Ocurrió un error al agregar el empleado.");
    }
  };

  return (
    <Panel pageIcon={<Clients />} pageTitle="Agregar empleado">
      <Link className="flex items-center gap-1 font-bold" href="/system/empleados">
        <ArrowLeft />
        Cancelar
      </Link>
      <form
        className="mt-10 flex flex-col gap-2"
        onSubmit={(e) => {
          void handleSubmit(onSubmit)(e);
        }}
      >
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <label className="text-lg font-bold italic" htmlFor="nombre">
          Nombre *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa el nombre"
          type="text"
          {...register("first_name")}
        />
        {errors.first_name && <span className="text-red-500">Este campo es requerido</span>}
        <label className="text-lg font-bold italic" htmlFor="apellido">
          Apellido *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa el apellido"
          type="text"
          {...register("last_name")}
        />
        <label className="text-lg font-bold italic" htmlFor="fecha_nacimiento">
          Fecha de nacimiento *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa la fecha de nacimiento"
          type="date"
          {...register("date_of_birth")}
        />
        <label className="text-lg font-bold italic" htmlFor="obra_social">
          Obra social *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa la obra social"
          type="text"
          {...register("social_security")}
        />
        <label className="text-lg font-bold italic" htmlFor="dni">
          DNI *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa el DNI"
          type="text"
          {...register("dni")}
        />
        <label className="text-lg font-bold italic" htmlFor="telefono">
          Telefono *
        </label>
        <input
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa el telefono"
          type="text"
          {...register("phone")}
        />
        <label className="text-lg font-bold italic" htmlFor="direccion">
          Direccion *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa la direccion"
          type="text"
          {...register("address")}
        />
        <button
          className="bg-blue mt-10 cursor-pointer rounded-lg py-2 font-semibold text-white"
          type="submit"
        >
          Agregar
        </button>
      </form>
    </Panel>
  );
}
