export default function ContactPage() {
  return (
    <main className="mx-30 flex justify-between">
      <section className="flex w-1/2 flex-col items-center gap-10 px-20 py-10">
        <img alt="Logo" className="mx-auto" src="/logo.png" width={140} />
        <h1 className="text-3xl font-bold">Contacto</h1>
        <h3 className="text-xl font-semibold">Comunicate con nosotros</h3>
        <form className="flex w-full flex-col gap-5">
          <input
            className="rounded-lg border border-black/50 px-4 py-1"
            placeholder="Nombre completo"
            type="text"
          />
          <input
            className="rounded-lg border border-black/50 px-4 py-1"
            placeholder="Correo electrónico"
            type="text"
          />
          <textarea
            className="rounded-lg border border-black/50 px-4 py-1"
            id=""
            name="message"
            placeholder="Dejanos tu consulta..."
          />
          <button className="bg-green cursor-pointer rounded-lg px-4 py-2 text-xl font-normal text-white">
            Enviar
          </button>
        </form>
      </section>
      <section className="w-1/2">
        <img alt="Contacto" className="mx-auto" src="/contact.png" />
      </section>
    </main>
  );
}
