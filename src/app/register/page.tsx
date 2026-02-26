"use client";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";

import {authService} from "@/services/authService";

interface RegisterFormData {
  first_name: string;
  dni: string;
  date_of_birth: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  insurance?: string;
}

export default function RegisterPage() {
  const {register, handleSubmit, watch} = useForm<RegisterFormData>();
  const router = useRouter();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const passwordsMatch = !confirmPassword || password === confirmPassword;

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (data.password !== data.confirmPassword) {
        return;
      }
      await authService.register(data);
      alert("Usuario registrado exitosamente");
      router.push("/login");
    } catch (error: unknown) {
      // Axios lanza excepciones para status 4xx/5xx
      if (error && typeof error === "object" && "response" in error) {
        const axiosError = error as {response?: {status?: number; data?: {detail?: string}}};

        if (axiosError.response?.status === 400) {
          const detail =
            axiosError.response.data?.detail &&
            "Ya existe un usuario con ese DNI o correo electrónico. Por favor, revise los datos.";

          alert(detail);

          return;
        }
      }
      console.error("Error al registrar:", error);
      alert("Error al registrar usuario. Por favor, intente nuevamente.");
    }
  });

  return (
    <main className="bg-blue flex min-h-screen items-center justify-center py-10">
      <section className="grid w-full max-w-5xl grid-cols-1 rounded-3xl bg-white md:grid-cols-2 md:overflow-hidden">
        {/* Columna izquierda – Formulario */}
        <div className="flex flex-col justify-start p-12 pb-10">
          <h1 className="mb-8 text-4xl font-bold text-black">Registro</h1>

          <form
            className="flex min-h-0 flex-1 flex-col gap-8 overflow-y-auto"
            onSubmit={(e) => {
              e.preventDefault();
              void onSubmit(e);
            }}
          >
            {/* Nombre completo */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-black" htmlFor="first_name">
                Nombre <span className="text-red-500">*</span>
              </label>
              <input
                className="rounded-md border px-3 py-2"
                id="first_name"
                type="text"
                {...register("first_name")}
              />
            </div>

            {/* DNI */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-black" htmlFor="dni">
                Número de documento (DNI) <span className="text-red-500">*</span>
              </label>
              <input
                className="rounded-md border px-3 py-2"
                id="dni"
                type="text"
                {...register("dni")}
              />
            </div>

            {/* Fecha de nacimiento */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-black" htmlFor="date_of_birth">
                Fecha de nacimiento <span className="text-red-500">*</span>
              </label>
              <input
                className="rounded-md border px-3 py-2"
                id="date_of_birth"
                type="date"
                {...register("date_of_birth")}
              />
            </div>

            {/* Correo electrónico */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-black" htmlFor="email">
                Correo electrónico <span className="text-red-500">*</span>
              </label>
              <input
                className="rounded-md border px-3 py-2"
                id="email"
                type="email"
                {...register("email")}
              />
            </div>

            {/* Contraseña */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-black" htmlFor="password">
                Contraseña <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  className="w-full rounded-md border px-3 py-2 pr-10"
                  id="password"
                  type="password"
                  {...register("password")}
                />
                <button
                  className="absolute inset-y-0 right-2 flex items-center text-sm text-gray-500"
                  type="button"
                  onClick={() => {
                    const input = document.getElementById("password") as HTMLInputElement;

                    if (input.type === "password") {
                      input.type = "text";
                    } else {
                      input.type = "password";
                    }
                  }}
                >
                  👁
                </button>
              </div>
            </div>

            {/* Confirmar contraseña */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-black" htmlFor="confirmPassword">
                Confirmar contraseña <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  className={`w-full rounded-md border px-3 py-2 pr-10 ${!passwordsMatch ? "border-red-500" : ""}`}
                  id="confirmPassword"
                  type="password"
                  {...register("confirmPassword")}
                />
                <button
                  className="absolute inset-y-0 right-2 flex items-center text-sm text-gray-500"
                  type="button"
                  onClick={() => {
                    const input = document.getElementById("confirmPassword") as HTMLInputElement;

                    if (input.type === "password") {
                      input.type = "text";
                    } else {
                      input.type = "password";
                    }
                  }}
                >
                  👁
                </button>
              </div>
              {!passwordsMatch && (
                <p className="text-sm text-red-500">Las contraseñas no coinciden</p>
              )}
            </div>

            {/* Teléfono */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-black" htmlFor="phone">
                Teléfono de contacto <span className="text-red-500">*</span>
              </label>
              <input
                className="rounded-md border px-3 py-2"
                id="phone"
                type="tel"
                {...register("phone")}
              />
            </div>

            {/* Obra social */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-black" htmlFor="insurance">
                Obra social
              </label>
              <input
                className="rounded-md border px-3 py-2"
                id="insurance"
                type="text"
                {...register("insurance")}
              />
            </div>

            {/* Botón */}
            <button
              className="bg-green mt-2 cursor-pointer rounded-md py-3 font-semibold text-white"
              type="submit"
            >
              Registrarse
            </button>

            {/* Links inferiores */}
            <div className="mt-2 flex items-center justify-between text-sm">
              <Link className="text-gray-500 hover:underline" href="/login" type="button">
                Ya tengo cuenta
              </Link>
              <Link
                className="text-gray-500 hover:underline"
                href="/register-company"
                type="button"
              >
                Registro empresa
              </Link>
            </div>

            {/* Logo */}
            {/* <div className="mt-4 mb-10 flex justify-start">
              <img alt="Logo" className="mb-10 size-14" src="/logo.png" />
            </div> */}
          </form>
        </div>

        {/* Columna derecha – Imagen */}
        <div className="hidden h-full md:block">
          <img
            alt="Background registro"
            className="h-full w-full object-cover"
            src="/bg-register.png"
          />
        </div>
      </section>
    </main>
  );
}
