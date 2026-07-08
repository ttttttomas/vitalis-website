"use client";
import {useEffect, useState} from "react";
import Link from "next/link";
import {useParams, useRouter} from "next/navigation";

import {Ticket} from "@/types";

import Panel from "@/app/system/components/Panel";
import {ArrowLeft, Support} from "@/components/ui/Icons";
import {dataService} from "@/services/dataService";

export default function SolicitudPage() {
  const params = useParams();
  const router = useRouter();
  const ticketId = params.id as string;

  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [responseText, setResponseText] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState<boolean>(false);

  useEffect(() => {
    const fetchTicket = async () => {
      try {
        const data = await dataService.getTicketById(ticketId);

        setTicket(data);
        if (data.response) {
          setResponseText(data.response);
        }
      } catch (error) {
        console.error("Error fetching support ticket details:", error);
      } finally {
        setLoading(false);
      }
    };

    void fetchTicket();
  }, [ticketId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!responseText.trim()) {
      alert("Por favor, ingresa una respuesta.");

      return;
    }

    setSubmitting(true);
    try {
      await dataService.respondTicket(ticketId, responseText);
      alert("Respuesta enviada correctamente");
      router.push("/system/soporte");
    } catch (error) {
      console.error("Error sending response:", error);
      alert("Ocurrió un error al enviar la respuesta.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <Panel pageIcon={<Support />} pageTitle="Soporte">
        <div className="flex h-full w-full items-center justify-center">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-t-4 border-gray-200 border-t-blue-600" />
        </div>
      </Panel>
    );
  }

  if (!ticket) {
    return (
      <Panel pageIcon={<Support />} pageTitle="Soporte">
        <div className="p-5 text-center text-red-500">No se encontró el ticket de soporte.</div>
      </Panel>
    );
  }

  const isPending = ticket.status === "pending";

  return (
    <Panel pageIcon={<Support />} pageTitle="Soporte">
      <Link className="flex items-center gap-1 font-bold text-black" href="/system/soporte">
        <ArrowLeft />
        Cancelar
      </Link>
      <form className="my-5 flex flex-col gap-3" onSubmit={handleSubmit}>
        <h2 className="text-lg font-bold text-black">
          Solicitud {isPending ? "pendiente" : "respondida"}
        </h2>
        <div className="flex w-full flex-col gap-2 rounded-lg border px-5 py-3 text-black">
          <p>
            <b>Asunto: </b> {ticket.subject}
          </p>
          <p>
            <b>Cuerpo: </b> {ticket.body}
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Enviado por: {ticket.user_role === "company" ? "Empresa" : "Paciente"} (
            {ticket.created_at?.split(" ")[0]})
          </p>
        </div>

        <h2 className="text-lg font-bold text-black">Respuesta</h2>

        {isPending ? (
          <>
            <textarea
              required
              className="w-full rounded-lg border p-3 text-black outline-none focus:ring-2 focus:ring-blue-500"
              disabled={submitting}
              placeholder="Escribe la respuesta aquí..."
              rows={5}
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
            />
            <button
              className="cursor-pointer rounded-lg bg-[#64BDEB] px-5 py-2 font-bold text-white transition duration-200 hover:bg-blue-700 disabled:bg-gray-400"
              disabled={submitting}
              type="submit"
            >
              {submitting ? "Enviando..." : "Enviar"}
            </button>
          </>
        ) : (
          <div className="flex w-full items-center gap-2 rounded-lg border bg-gray-50 px-5 py-5 text-black">
            <p>{ticket.response}</p>
          </div>
        )}
      </form>
    </Panel>
  );
}
