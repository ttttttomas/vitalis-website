"use client";
import {Inter} from "next/font/google";
import Link from "next/link";
import {usePathname} from "next/navigation";

const inter = Inter({subsets: ["latin"]});

const Header = () => {
  const p = usePathname();

  if (p !== "/") {
    return null;
  }

  return (
    <header className="header relative flex h-[250px] items-start justify-start px-5 py-5 md:h-[450px] md:px-20 md:py-12">
      <div className="absolute inset-0 top-0 right-0 bottom-0 left-0 h-full bg-white opacity-70" />
      <section className="z-20 flex h-20 flex-col items-start justify-between gap-5 md:h-full md:w-1/2">
        <div>
          <h1 className="text-xl font-bold text-[#134173] md:text-5xl">VITALIS</h1>
          <p className={`${inter.className} font-normal text-nowrap`}>Centro de salud integral</p>
        </div>
        <p className={`${inter.className} text-xs font-normal md:w-[550px] md:text-2xl`}>
          Invertir en salud es invertir en productividad y calidad de vida. Estamos comprometidos a
          ofrecer los mejores servicios en medicina laboral y chequeos de salud, adaptándonos a las
          necesidades de cada cliente.
        </p>
        <div className="flex gap-5">
          <Link href="/">
            <button className="cursor-pointer rounded-lg bg-gray-300 px-4 py-2 text-xs font-normal md:text-xl">
              Registrarse
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-blue text-primary cursor-pointer rounded-lg px-4 py-2 text-xs font-normal md:text-xl">
              Contactanos
            </button>
          </Link>
        </div>
      </section>
      <section className="z-20 flex h-20 flex-col items-end justify-between gap-5 md:h-full md:w-1/2">
        <Link href="/">
          <button className="cursor-pointer rounded-lg bg-gray-300 px-4 py-1 text-xs font-normal text-nowrap md:text-lg">
            Iniciar sesión
          </button>
        </Link>
        <img alt="Logo" src="/logo.png" width={150} />
      </section>
    </header>
  );
};

export default Header;
