"use client";
import {useEffect, useState} from "react";

import {Ticket} from "@/types";

import {Support} from "@/components/ui/Icons";
import {dataService} from "@/services/dataService";

import Panel from "../../components/Panel";

import SoporteCard from "./SoporteCard";

export default function SoportePage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const data = await dataService.getTickets();

        setTickets(data);
      } catch (error) {
        console.error("Error fetching support tickets:", error);
      } finally {
        setLoading(false);
      }
    };

    void fetchTickets();
  }, []);

  if (loading) {
    return (
      <Panel pageIcon={<Support />} pageTitle="Soporte">
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-blue-600" />
        </div>
      </Panel>
    );
  }

  const pendingTickets = tickets.filter((t) => t.status === "pending");
  const answeredTickets = tickets.filter((t) => t.status === "answered");

  return (
    <Panel pageIcon={<Support />} pageTitle="Soporte">
      <section className="flex flex-col gap-3">
        <h2 className="mt-2 text-lg font-bold text-black">Solicitudes pendientes</h2>
        {pendingTickets.map((ticket) => (
          <SoporteCard key={ticket.id} ticket={ticket} />
        ))}
        {pendingTickets.length === 0 && (
          <p className="text-sm text-gray-500 italic">No hay solicitudes pendientes.</p>
        )}

        <h2 className="mt-4 text-lg font-bold text-black">Solicitudes respondidas</h2>
        {answeredTickets.map((ticket) => (
          <SoporteCard key={ticket.id} ticket={ticket} />
        ))}
        {answeredTickets.length === 0 && (
          <p className="text-sm text-gray-500 italic">No hay solicitudes respondidas.</p>
        )}
      </section>
    </Panel>
  );
}
