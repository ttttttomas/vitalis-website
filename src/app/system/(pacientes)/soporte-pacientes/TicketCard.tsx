import Link from "next/link";

export default function TicketCard() {
  return (
    <section className="flex items-center justify-between gap-5">
      <p>
        Asunto: <b>Nombre del asunto</b>
      </p>
      <div>
        <p>
          Estado: <b>Respondido</b>
        </p>
        <Link className="flex justify-center gap-2 underline" href="/system/soporte-pacientes/1">
          Ver caso
        </Link>
      </div>
    </section>
  );
}
