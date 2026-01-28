"use client";
import Link from "next/link";
import {useEffect, useState} from "react";

import {UserAdmin} from "@/types";

import {UserSVG} from "@/components/ui/Icons";
import {dataService} from "@/services/dataService";

import Panel from "../../components/Panel";

interface UsersRow {
  nombre: string;
  dni: string;
  email: string;
  telefono: string;
  password: string;
}

export default function SystemUsuariosPage() {
  const [users, setUsers] = useState<UserAdmin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      const users = await dataService.getUsersFilters("admin");

      setUsers(users as UserAdmin[]);
      setLoading(false);
    };

    void getUsers();
  }, []);

  if (loading) {
    return (
      <Panel pageIcon={<UserSVG />} pageTitle="Usuarios">
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-blue-600" />
        </div>
      </Panel>
    );
  }

  return (
    <Panel pageIcon={<UserSVG />} pageTitle="Usuarios">
      <div className="flex flex-col items-end gap-5 overflow-x-auto">
        <Link
          className="flex w-max items-center gap-2 rounded-xl border px-3 py-1"
          href="/system/usuarios/add"
        >
          <p className="text-sm">Agregar usuario</p>
          <p className="text-xl font-bold">+</p>
        </Link>
        <table className="w-full overflow-x-auto text-xs">
          <thead>
            <tr className="bg-[#3A3A3A] text-white">
              <th className="border-r border-[#4A4A4A] px-3 py-2 text-left">Nombre completo</th>
              <th className="border-r border-[#4A4A4A] px-3 py-2 text-left">DNI</th>
              <th className="border-r border-[#4A4A4A] px-3 py-2 text-left">Correo electrónico</th>
              <th className="border-r border-[#4A4A4A] px-3 py-2 text-left">Teléfono</th>
              <th className="px-3 py-2 text-left">Contraseña</th>
            </tr>
          </thead>

          <tbody>
            {users.map((row, idx) => (
              <tr key={idx} className="border-t border-[#4A4A4A] bg-[#333333] text-white">
                <td className="border-r border-[#4A4A4A] px-3 py-2">{row.first_name}</td>
                <td className="border-r border-[#4A4A4A] px-3 py-2">{row.dni}</td>
                <td className="border-r border-[#4A4A4A] px-3 py-2">{row.email}</td>
                <td className="border-r border-[#4A4A4A] px-3 py-2">{row.phone}</td>
                <td className="px-3 py-2">{row.password}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}
