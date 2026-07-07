"use client";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useParams} from "next/navigation";

import Panel from "@/app/system/components/Panel";
import {ArrowLeft, Support} from "@/components/ui/Icons";
import {Ticket} from "@/types";
import {dataService} from "@/services/dataService";

export default function TicketResponsePage() {
  const params = useParams();
  const ticketId = params.id as string;

  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const data = await dataService.getTicketById(ticketId);
        setTicket(data);
      } catch (error) {
        console.error("Error fetching support ticket details:", error);
      } finally {
        setLoading(false);
      }
    };

    void fetchTicket();
  }, [ticketId]);

  if (loading) {
    return (
      <Panel pageIcon={<Support />} pageTitle="Ticket">
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-blue-600" />
        </div>
      </Panel>
    );
  }

  if (!ticket) {
    return (
      <Panel pageIcon={<Support />} pageTitle="Ticket">
        <div className="text-center p-5 text-red-500">
          No se encontró el ticket de soporte.
        </div>
      </Panel>
    );
  }

  return (
    <Panel pageIcon={<Support />} pageTitle={`Ticket NRO: #${ticket.id.slice(0, 8)}`}>
      <Link className="flex items-center gap-1 font-bold text-black" href="/system/soporte-empresa">
        <ArrowLeft />
        Volver
      </Link>
      <div className="flex flex-col gap-3 mt-5 text-black">
        <h2 className="text-lg font-bold">
          Solicitud: <b>{ticket.subject}</b>
        </h2>
        <div className="flex w-full flex-col gap-2 rounded-lg border px-5 py-5 bg-white">
          <p className="whitespace-pre-line">{ticket.body}</p>
          <span className="text-xs text-gray-400 mt-2">
            Creado el: {ticket.created_at?.split(" ")[0]}
          </span>
        </div>
        
        <h2 className="text-lg font-bold">Respuesta</h2>
        <div className="flex w-full items-center gap-2 rounded-lg border px-5 py-5 bg-gray-50">
          {ticket.response ? (
            <p className="whitespace-pre-line">{ticket.response}</p>
          ) : (
            <p className="text-gray-500 italic text-sm">Tu solicitud está pendiente de respuesta.</p>
          )}
        </div>
      </div>
    </Panel>
  );
}
