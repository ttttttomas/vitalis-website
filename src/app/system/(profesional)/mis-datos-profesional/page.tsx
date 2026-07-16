"use client";
import {useEffect, useState} from "react";

import {UserProfessional, UserProfile} from "@/types";

import {Users} from "@/components/ui/Icons";
import {authService} from "@/services/authService";

import Panel from "../../components/Panel";

export default function MisDatosProfesionalPage() {
  const [user, setUser] = useState<UserProfessional | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = async () => {
      try {
        const {user, profile} = await authService.getCurrentUser();

        if (user?.role === "professional") {
          setUser(user);
          setProfile(profile ?? null);
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
        <p>No se encontró el usuario</p>
      </Panel>
    );
  }

  return (
    <Panel pageIcon={<Users />} pageTitle="Mis datos">
      <form className="mt-10 flex flex-col gap-2 text-black">
        <label className="text-lg font-bold text-black italic" htmlFor="nombre">
          Nombre completo
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">
          {user.first_name} {user.last_name || ""}
        </p>

        <label className="text-lg font-bold text-black italic" htmlFor="email">
          Correo electrónico
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">{user.email}</p>

        <label className="text-lg font-bold text-black italic" htmlFor="license_number">
          Matrícula
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">
          {profile?.license_number}
        </p>

        <label className="text-lg font-bold text-black italic" htmlFor="speciality">
          Especialidad
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">
          {profile?.speciality}
        </p>

        <label className="text-lg font-bold text-black italic" htmlFor="rol">
          Rol
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">{profile?.rol}</p>

        <label className="text-lg font-bold text-black italic" htmlFor="telefono">
          Teléfono de contacto
        </label>
        <p className="rounded-lg border border-[#4A4A4A] bg-white px-5 py-1">{profile?.phone}</p>
      </form>
    </Panel>
  );
}
