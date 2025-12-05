"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

import {
  Clients,
  Estudies,
  Logout,
  Profesionals,
  Support,
  Users,
  UserSVG,
} from "@/components/ui/Icons";

type Roles = "admin" | "empresa" | "empleado";

interface NavItem {
  label: string;
  href: string;
  icon?: React.ReactNode;
}

const navByRole: Record<Roles, NavItem[]> = {
  admin: [
    {label: "Clientes", href: "/system/clientes", icon: <Clients />},
    {label: "Usuarios", href: "/system/usuarios", icon: <Users />},
    {label: "Profesionales", href: "/system/profesionales", icon: <Profesionals />},
    {label: "Estudios", href: "/system/estudios", icon: <Estudies />},
    {label: "Soporte", href: "/system/soporte", icon: <Support />},
  ],
  empresa: [
    {label: "Empleados", href: "/system/empleados", icon: <Clients />},
    {label: "Mis datos", href: "/system/mis-datos", icon: <Clients />},
    {label: "Soporte", href: "/system/soporte", icon: <Clients />},
  ],
  empleado: [
    {label: "Mis datos", href: "/system/mis-datos", icon: <Clients />},
    {label: "Soporte", href: "/system/soporte", icon: <Clients />},
  ],
};

interface DashboardLayoutProps {
  children: React.ReactNode;
  roles: Roles;
  userLabel: string; // "Nombre - Admin" / "Nombre Empresa - Empresa"
  pageTitle: string; // "Clientes", "Agregar usuario", "Mis datos", etc.
  pageIcon?: React.ReactNode; // iconito izquierda del título
}

export default function Panel({
  children,
  roles,
  userLabel,
  pageTitle,
  pageIcon,
}: DashboardLayoutProps) {
  const pathname = usePathname();
  const navItems = navByRole[roles];

  return (
    <main className="flex items-start justify-center bg-[#f2f2f2] px-4 py-32">
      {/* Logo flotante superior */}
      <div className="relative w-full max-w-6xl">
        <div className="absolute -top-10 left-1/2 z-20 -translate-x-1/6">
          <img
            alt="Vitalis"
            className="size-24 rounded-full border-10 border-[#F2F2F2] bg-white"
            src="/logo.png"
          />
        </div>

        {/* Card principal */}
        <section className="mt-6 flex w-full overflow-hidden rounded-3xl bg-white shadow-sm">
          {/* Sidebar */}
          <aside className="flex w-64 flex-col justify-between rounded-l-3xl bg-[#64BDEB] py-8">
            <div className="flex flex-col gap-8">
              {/* Logo dentro de sidebar */}
              <div className="flex justify-center">
                <img alt="Vitalis" className="size-20 rounded-full" src="/logo.png" />
              </div>

              {/* Menú */}
              <nav className="mt-4 flex flex-col">
                {navItems.map((item) => {
                  const isActive = pathname.startsWith(item.href);

                  return (
                    <Link
                      key={item.href}
                      className={`flex items-center gap-3 px-6 py-3 text-sm ${
                        isActive
                          ? "rounded-l-full bg-white text-black"
                          : "text-white hover:bg-white/15"
                      }`}
                      href={item.href}
                    >
                      {/* placeholder icon */}
                      {item.icon}
                      <span className="text-lg">{item.label}</span>
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Soporte + Cerrar sesión */}
            <div className="mt-8 flex flex-col gap-2 px-6 text-sm text-white">
              <button className="flex cursor-pointer gap-2 text-left hover:underline">
                <Logout />
                <p>Cerrar sesión</p>
              </button>
            </div>
          </aside>

          {/* Contenido */}
          <section className="flex-1 rounded-3xl bg-white px-10 py-8">
            <header className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/5">
                  {pageIcon ?? <span className="h-4 w-4 rounded-sm border border-black" />}
                </div>
                <h1 className="text-xl font-semibold text-black">{pageTitle}</h1>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-700">
                <span>{userLabel}</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full text-[15px]">
                  <UserSVG />
                </span>
              </div>
            </header>
            {/* Slot de contenido */}
            <div className="h-full rounded-2xl p-6">{children}</div>
          </section>
        </section>
      </div>
    </main>
  );
}
