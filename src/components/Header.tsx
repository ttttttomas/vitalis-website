"use client";
import {Inter} from "next/font/google";
import {usePathname} from "next/navigation";

const inter = Inter({subsets: ["latin"]});

const Header = () => {
  const p = usePathname();

  if (p !== "/") {
    return null;
  }

  return (
    <header className="relative flex items-center justify-between px-20 py-12">
      <div className="absolute inset-0 top-0 right-0 bottom-0 left-0 h-full bg-white opacity-70" />
      <section className="z-20 flex h-full w-1/2 flex-col items-start justify-between">
        <div>
          <h1 className="text-5xl font-bold text-[#134173]">VITALIS</h1>
          <p className={`${inter.className} font-normal`}>Centro de salud integral</p>
        </div>
        <p className={`${inter.className} w-[550px] text-2xl font-normal`}>
          Invertir en salud es invertir en productividad y calidad de vida. Estamos comprometidos a
          ofrecer los mejores servicios en medicina laboral y chequeos de salud, adaptándonos a las
          necesidades de cada cliente.
        </p>
        <div className="flex gap-5">
          <button className="bg-orange cursor-pointer rounded-lg px-4 py-2 text-xl font-normal">
            Registrarse
          </button>
          <button className="bg-blue text-primary cursor-pointer rounded-lg px-4 py-2 text-xl font-normal">
            Contactanos
          </button>
        </div>
      </section>
      <section className="z-20 flex h-full w-1/2 flex-col items-end justify-between gap-5">
        <button className="bg-green cursor-pointer rounded-lg px-4 py-1 text-lg font-normal">
          Iniciar sesión
        </button>
        <img alt="Logo" src="/logo.png" width={150} />
      </section>
    </header>
  );
};

export default Header;
