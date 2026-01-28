"use client";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";

import {UserSVG, ArrowLeft} from "@/components/ui/Icons";
import Panel from "@/app/system/components/Panel";
import {dataService} from "@/services/dataService";

interface AddUserForm {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export default function AddUserPage() {
  const {register, handleSubmit} = useForm<AddUserForm>();
  const router = useRouter();

  const onSubmit = async (data: AddUserForm) => {
    try {
      const response = await dataService.createUserAdmin(data);

      console.log(response);
      alert("Usuario agregado correctamente");
      router.push("/system/usuarios");
    } catch (error) {
      console.log(error);
      alert("Error al agregar usuario");
    }
  };

  return (
    <Panel pageIcon={<UserSVG />} pageTitle="Agregar usuario">
      <Link className="flex items-center gap-1 font-bold" href="/system/usuarios">
        <ArrowLeft />
        Cancelar
      </Link>
      <form
        className="mt-10 flex flex-col gap-2"
        onSubmit={(e) => {
          void handleSubmit(onSubmit)(e);
        }}
      >
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
        <label className="text-lg font-bold italic" htmlFor="email">
          Ingresa el correo electrónico *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa el correo electrónico"
          type="text"
          {...register("email")}
        />
        <label className="text-lg font-bold italic" htmlFor="password">
          Contraseña *
        </label>
        <input
          required
          className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1"
          placeholder="Ingresa la contraseña"
          type="password"
          {...register("password")}
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
