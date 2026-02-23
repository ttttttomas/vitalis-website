"use client";
import {useEffect, useState} from "react";

import {UserProfessional} from "@/types";

import {Users} from "@/components/ui/Icons";
import {authService} from "@/services/authService";

import Panel from "../../components/Panel";

export default function MisDatosProfesionalPage() {
  const [user, setUser] = useState<UserProfessional | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = async () => {
      try {
        const {user} = await authService.getCurrentUser();

        if (user?.role === "professional") {
          setUser(user);
          setLoading(false);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    void data();
  }, []);

  if (loading) {
    return (
      <Panel pageIcon={<Users />} pageTitle="Mis datos">
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-blue-600" />
        </div>
      </Panel>
    );
  }

  if (!user) {
    return (
      <Panel pageIcon={<Users />} pageTitle="Mis datos">
        <p>No se encontro el usuario</p>
      </Panel>
    );
  }

  return (
    <Panel pageIcon={<Users />} pageTitle="Mis datos">
      <form className="mt-10 flex flex-col gap-2">
        <label className="text-lg font-bold italic" htmlFor="nombre">
          Nombre completo *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">{user.first_name}</p>
        <label className="text-lg font-bold italic" htmlFor="dni">
          DNI *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">{user.dni}</p>
        <label className="text-lg font-bold italic" htmlFor="email">
          Ingresa el correo electrónico *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">{user.email}</p>
        <label className="text-lg font-bold italic" htmlFor="telefono">
          Teléfono de contacto*
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">{user.phone}</p>
        {/* <label className="text-lg font-bold italic" htmlFor="password">
          Contraseña *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">Contraseña</p> */}
        <label className="text-lg font-bold italic" htmlFor="profesion">
          Profesión *
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">Profesional</p>
      </form>
    </Panel>
  );
}
