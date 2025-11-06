'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function ContactPage() {
  const {register, handleSubmit} = useForm();
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = handleSubmit((data) => {
    try {
      void axios.post(
        "https://saludvitalis.org/MdpuF8KsXiRArNlHtl6pXO2XyLSJMTQ8_Vitalis/api/formContact",
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );      
      setShowPopup(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      console.error("Error al enviar formulario:", error);
    }
  });
  return (
    <main className="md:mx-30 mx-5 flex justify-between">
      <section className="flex flex-col justify-center w-full items-center gap-10 md:px-20 py-10">
        <img alt="Logo" className="mx-auto" src="/logo.png" width={140} />
        <h1 className="text-3xl font-bold">Contacto</h1>
        <h3 className="text-xl font-semibold">Comunicate con nosotros</h3>
        <form onSubmit={(e) => {
          e.preventDefault();
          void onSubmit(e);
        }} className="flex w-full flex-col gap-5">
          <input
          {...register("name")}
            className="rounded-lg border border-black/50 px-4 py-1"
            placeholder="Nombre completo"
            type="text"
          />
          <input
          {...register("email")}
            className="rounded-lg border border-black/50 px-4 py-1"
            placeholder="Correo electrónico"
            type="text"
          />
          <textarea
          {...register("note")}
            className="rounded-lg border border-black/50 px-4 py-1"
            id="note"
            name="note"
            placeholder="Dejanos tu consulta..."
          />
          {showPopup && 
            <div  className="text-center font-semibold">
              <p>Mensaje enviado!</p>
              <p>Redirigiendo al inicio...</p>
            </div>}
          <button className="bg-green cursor-pointer rounded-lg px-4 py-2 text-xl font-normal text-white">
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}
