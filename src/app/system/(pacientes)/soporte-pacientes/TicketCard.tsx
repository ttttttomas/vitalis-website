import Link from "next/link";
import {Ticket} from "@/types";

export default function TicketCard({ticket, linkPrefix}: {ticket: Ticket; linkPrefix: string}) {
  const statusLabel = ticket.status === "pending" ? "Pendiente" : "Respondido";
  const statusColor = ticket.status === "pending" ? "text-yellow-600" : "text-green-600";

  return (
    <section className="flex items-center justify-between gap-5 border p-4 rounded-xl text-black bg-white my-2 shadow-sm">
      <p>
        Asunto: <b>{ticket.subject}</b>
      </p>
      <div className="flex items-center gap-5">
        <p className="text-sm">
          Estado: <b className={statusColor}>{statusLabel}</b>
        </p>
        <Link className="flex justify-center gap-2 underline text-blue-600 font-semibold" href={`${linkPrefix}/${ticket.id}`}>
          Ver caso
        </Link>
      </div>
    </section>
  );
}
