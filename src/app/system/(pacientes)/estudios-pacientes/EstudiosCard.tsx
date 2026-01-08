export default function EstudiosCard() {
  return (
    <section className="bg-blue flex w-full items-center justify-between gap-5 rounded-xl p-5 text-white">
      <div className="flex gap-2">
        <img alt="image-estudie" className="size-10" src="/estudios1.png" />
        <div>
          <div className="flex items-center gap-2 text-sm">
            <p>Estudio:</p>
            <b>Electrocardiograma</b>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <p>Realizado el:</p>
            <b>2022-01-01</b>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>
          Estado: <b>Disponible</b>
        </p>
        <button className="underline">Descargar PDF</button>
      </div>
    </section>
  );
}
