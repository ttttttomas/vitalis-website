"use client";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {useState} from "react";

import {useAuth} from "@/contexts/AuthContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const {login} = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login(email, password);
      // Redirigir al sistema después de login exitoso
      router.push("/system");
    } catch (err: unknown) {
      console.error("Login error:", err);
      setError("Credenciales inválidas. Por favor, intenta nuevamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="bg-blue flex min-h-screen items-center justify-center p-6">
      <section className="grid w-full max-w-5xl grid-cols-1 overflow-hidden rounded-2xl bg-white md:grid-cols-2">
        {/* Columna izquierda */}
        <div className="flex flex-col justify-center p-12">
          <h1 className="mb-8 text-5xl font-bold text-black">Iniciar sesión</h1>

          <form className="flex flex-col gap-6" onSubmit={(e) => void handleSubmit(e)}>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-black" htmlFor="email">
                Correo electrónico
              </label>
              <input
                className="rounded-md border px-3 py-2"
                id="email"
                name="email"
                placeholder="Correo electrónico"
                type="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-black" htmlFor="password">
                Contraseña
              </label>
              <input
                className="rounded-md border px-3 py-2"
                id="password"
                name="password"
                placeholder="Contraseña"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {error && <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">{error}</div>}

            <button
              className="bg-green rounded-md py-2 text-lg font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
              disabled={isLoading}
              type="submit"
            >
              {isLoading ? "Iniciando sesión..." : "Iniciar sesión"}
            </button>

            <div className="mt-2 flex items-center justify-between text-sm">
              {/* <Link className="text-gray-500 hover:underline" href="#">
                ¿Olvidaste tu contraseña?
              </Link> */}
              <Link className="text-gray-500 hover:underline" href="/register">
                No tengo cuenta
              </Link>
            </div>

            <div className="mt-4 flex justify-start">
              <img alt="Logo" className="size-14" src="/logo.png" />
            </div>
          </form>
        </div>

        {/* Columna derecha */}
        <div className="hidden md:block">
          <img alt="Background" className="h-full w-full object-cover" src="/bg-login.png" />
        </div>
      </section>
    </main>
  );
}
