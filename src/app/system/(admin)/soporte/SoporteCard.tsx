import Link from "next/link";
import {Ticket} from "@/types";

export default function SoporteCard({ticket}: {ticket: Ticket}) {
  return (
    <div className="flex items-center justify-between rounded-xl border px-5 py-2">
      <div className="flex items-center gap-2 text-black">
        <p>Asunto: </p>
        <b>{ticket.subject}</b>
      </div>
      <Link className="text-lg font-bold underline text-blue-600 hover:text-blue-800" href={`/system/soporte/${ticket.id}`}>
        Ver
      </Link>
    </div>
  );
}
