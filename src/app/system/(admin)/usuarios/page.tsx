"use client";
import Link from "next/link";
import {useEffect, useState} from "react";

import {UserAdmin} from "@/types";

import {UserSVG} from "@/components/ui/Icons";
import {dataService} from "@/services/dataService";

import Panel from "../../components/Panel";

export default function SystemUsuariosPage() {
  const [users, setUsers] = useState<UserAdmin[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const users = await dataService.getUsersFilters("admin");

        setUsers(users as UserAdmin[]);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    void getUsers();
  }, []);

  const handleToggleActive = async (userId: string, currentStatus?: boolean) => {
    try {
      const newStatus = !currentStatus;

      await dataService.updateUserStatus(userId, newStatus);
      setUsers((prev) => prev.map((u) => (u.id === userId ? {...u, is_active: newStatus} : u)));
    } catch (error) {
      console.error("Error al actualizar el estado del usuario:", error);
      alert("Error al actualizar el estado del usuario. Por favor intenta nuevamente.");
    }
  };

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
              <th className="border-r border-[#4A4A4A] px-3 py-2 text-center">Nombre</th>
              <th className="border-r border-[#4A4A4A] px-3 py-2 text-center">Apellido</th>
              <th className="border-r border-[#4A4A4A] px-3 py-2 text-center">
                Correo electrónico
              </th>
              <th className="border-r border-[#4A4A4A] px-3 py-2 text-center">Activo</th>
              {/* <th className="px-3 py-2 text-center">Acciones</th> */}
            </tr>
          </thead>

          <tbody>
            {users.map((row, idx) => (
              <tr key={idx} className="border-t border-[#4A4A4A] bg-[#333333] text-white">
                <td className="border-r border-[#4A4A4A] px-3 py-2">{row.first_name}</td>
                <td className="border-r border-[#4A4A4A] px-3 py-2">{row.last_name}</td>
                <td className="border-r border-[#4A4A4A] px-3 py-2">{row.email}</td>
                <td className="border-r border-[#4A4A4A] px-3 py-2 text-center">
                  {row.is_active ? "Sí" : "No"}
                </td>
                {/* <td className="px-3 py-2 text-center">
                  <button
                    onClick={() => void handleToggleActive(row.id, row.is_active)}
                    className={`rounded px-3 py-1 cursor-pointer font-semibold text-white transition-colors duration-150 ${
                      row.is_active
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-green-600 hover:bg-green-700"
                    }`}
                  >
                    {row.is_active ? "Desactivar" : "Activar"}
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}
