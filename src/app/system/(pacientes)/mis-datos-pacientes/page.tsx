"use client";

import {UserSVG} from "@/components/ui/Icons";
import {useAuth} from "@/contexts/AuthContext";

import Panel from "../../components/Panel";

export default function MisDatosPacientesPage() {
  const {user} = useAuth();

  return (
    <Panel pageIcon={<UserSVG />} pageTitle="Mis datos">
      <form className="mt-10 flex flex-col gap-2">
        <label className="text-lg font-bold italic" htmlFor="nombre">
          Nombre completo
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">
          {user?.first_name && user.last_name ? `${user.first_name} ${user.last_name}` : "N/A"}
        </p>
        <label className="text-lg font-bold italic" htmlFor="dni">
          DNI
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">
          {user?.role === "patient" ? (user as any).dni : "N/A"}
        </p>
        <label className="text-lg font-bold italic" htmlFor="email">
          Fecha de nacimiento
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">
          {user?.role === "patient" ? (user as any).date_of_birth : "N/A"}
        </p>
        <label className="text-lg font-bold italic" htmlFor="email">
          Correo electrónico
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">{user?.email}</p>
        <label className="text-lg font-bold italic" htmlFor="telefono">
          Teléfono
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">
          {user?.role === "patient" ? (user as any).phone : "N/A"}
        </p>
        <label className="text-lg font-bold italic" htmlFor="password">
          Contraseña
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">********</p>
        <label className="text-lg font-bold italic" htmlFor="obra-social">
          Obra social
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">
          {user?.role === "patient" ? (user as any).social_security : "N/A"}
        </p>
      </form>
    </Panel>
  );
}
