"use client";
import {useEffect, useState} from "react";

import {Ticket} from "@/types";

import {Support} from "@/components/ui/Icons";
import {dataService} from "@/services/dataService";

import Panel from "../../components/Panel";

import TicketCard from "./TicketCard";

export default function SoportePacientesPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Form state
  const [subject, setSubject] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [submitting, setSubmitting] = useState<boolean>(false);

  const fetchTickets = async () => {
    try {
      const data = await dataService.getMyTickets();

      setTickets(data);
    } catch (error) {
      console.error("Error fetching patient tickets:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void fetchTickets();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!subject.trim() || !body.trim()) {
      alert("Por favor completa todos los campos.");

      return;
    }

    setSubmitting(true);
    try {
      await dataService.createTicket({subject, body});
      alert("Ticket de soporte creado correctamente");
      setSubject("");
      setBody("");
      void fetchTickets(); // Refresh list
    } catch (error) {
      console.error("Error creating ticket:", error);
      alert("Ocurrió un error al enviar la solicitud.");
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

  return (
    <Panel pageIcon={<Support />} pageTitle="Soporte">
      <section className="flex flex-col gap-5 text-black">
        <div>
          <h2 className="text-lg font-bold">Mis solicitudes</h2>
          <div className="mt-2 max-h-[300px] overflow-y-auto pr-2">
            {tickets.map((ticket) => (
              <TicketCard key={ticket.id} linkPrefix="/system/soporte-pacientes" ticket={ticket} />
            ))}
            {tickets.length === 0 && (
              <p className="text-sm text-gray-500 italic">No tienes solicitudes creadas.</p>
            )}
          </div>
        </div>

        <h2 className="text-lg font-bold">Comenzar solicitud</h2>
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <input
            required
            className="w-full rounded-md border bg-white p-2 text-black"
            disabled={submitting}
            placeholder="Asunto"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            required
            className="w-full rounded-md border bg-white p-2 text-black"
            disabled={submitting}
            placeholder="Cuerpo"
            rows={4}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button
            className="cursor-pointer rounded-md bg-[#64BDEB] p-2 font-bold text-white transition duration-200 hover:bg-blue-700 disabled:bg-gray-400"
            disabled={submitting}
            type="submit"
          >
            {submitting ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </section>
    </Panel>
  );
}
