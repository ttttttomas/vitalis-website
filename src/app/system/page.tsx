"use client";

import {useRouter} from "next/navigation";
import {useEffect} from "react";

import {useAuth} from "@/contexts/AuthContext";

export default function SystemPage() {
  const {isLoading, user} = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    if (!user) {
      router.push("/login");

      return;
    }

    // Redirigir según el rol del usuario
    switch (user.role) {
      case "admin":
        router.push("/system/clientes");
        break;
      case "professional":
        router.push("/system/pacientes-profesional");
        break;
      case "patient":
        router.push("/system/estudios-pacientes");
        break;
      case "company":
        router.push("/system/empleados");
        break;
      default:
        // Este caso no debería ocurrir nunca si los tipos están correctos
        console.error("Rol desconocido");
        router.push("/login");
    }
  }, [isLoading, router, user]);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-lg">Cargando...</div>
    </main>
  );
}
