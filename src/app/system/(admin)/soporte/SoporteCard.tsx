import Link from "next/link";

export default function SoporteCard({solicitud}: {solicitud: any}) {
  return (
    <div className="flex items-center justify-between rounded-xl border px-5 py-2">
      <div className="flex items-center gap-2">
        <p>Asunto: </p>
        <b>{solicitud.asunto}</b>
      </div>
      <Link className="text-lg font-bold underline" href="/system/soporte/1">
        Ver
      </Link>
    </div>
  );
}
