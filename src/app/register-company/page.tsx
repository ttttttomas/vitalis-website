import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="bg-blue flex items-center justify-center py-10">
      <section className="grid max-h-screen w-full max-w-5xl grid-cols-1 overflow-hidden rounded-3xl bg-white pb-10 md:grid-cols-2">
        {/* Columna izquierda – Formulario */}
        <div className="flex flex-col justify-start p-12">
          <h1 className="mb-8 text-4xl font-bold text-black">Registro</h1>

          <form className="flex flex-col gap-4">
            {/* Nombre de la empresa */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-black" htmlFor="nameCompany">
                Nombre de la empresa <span className="text-red-500">*</span>
              </label>
              <input
                className="rounded-md border px-3 py-2"
                id="nameCompany"
                name="nameCompany"
                type="text"
              />
            </div>

            {/* Nombre del responsable */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-black" htmlFor="dni">
                Nombre del responsable <span className="text-red-500">*</span>
              </label>
              <input className="rounded-md border px-3 py-2" id="dni" name="dni" type="text" />
            </div>

            {/* CUIT */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-black" htmlFor="cuit">
                CUIT <span className="text-red-500">*</span>
              </label>
              <input className="rounded-md border px-3 py-2" id="cuit" name="cuit" type="text" />
            </div>

            {/* Correo electrónico */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-black" htmlFor="email">
                Correo electrónico <span className="text-red-500">*</span>
              </label>
              <input className="rounded-md border px-3 py-2" id="email" name="email" type="email" />
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
                  name="password"
                  type="password"
                />
                <button
                  className="absolute inset-y-0 right-2 flex items-center text-sm text-gray-500"
                  type="button"
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
                  className="w-full rounded-md border px-3 py-2 pr-10"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                />
                <button
                  className="absolute inset-y-0 right-2 flex items-center text-sm text-gray-500"
                  type="button"
                >
                  👁
                </button>
              </div>
            </div>

            {/* Teléfono */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-black" htmlFor="phone">
                Teléfono de contacto <span className="text-red-500">*</span>
              </label>
              <input className="rounded-md border px-3 py-2" id="phone" name="phone" type="tel" />
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
              <Link className="text-gray-500 hover:underline" href="/register" type="button">
                Registro paciente
              </Link>
            </div>

            {/* Logo */}
            <div className="mt-4 mb-10 flex justify-start">
              <img alt="Logo" className="size-14" src="/logo.png" />
            </div>
          </form>
        </div>

        {/* Columna derecha – Imagen */}
        <div className="hidden md:block">
          <img alt="Background registro" className="w-full object-cover" src="/bg-register.png" />
        </div>
      </section>
    </main>
  );
}
