import {Poetsen_One} from "next/font/google";

import CardEstudios from "@/components/CardEstudios";
import CardServices from "@/components/CardServices";
import {Checked} from "@/components/ui/Icons";

const poetsenOne = Poetsen_One({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export default function HomePage() {
  return (
    <main>
      <section className="m-10 flex flex-col px-10" id="beneficios">
        <h2 className={`${poetsenOne.className} pb-5 text-center text-4xl font-bold`}>
          Beneficios del Portal para nuestros Clientes
        </h2>
        <ul className="flex flex-col items-start gap-3 text-center">
          <li className="flex items-center gap-3">
            Consultar el estado de tus estudios.
            <Checked />
          </li>
          <li className="flex items-center gap-3">
            Descargar los PDF con los resultados de tus estudios.
            <Checked />
          </li>
          <li className="flex items-center gap-3">
            Ponerte en contacto con nosotros de manera sencilla y directa.
            <Checked />
          </li>
          <li className="flex items-center gap-3">
            Acceso las 24hs desde cualquier dispositivo, sin depender de horarios de atención.
            <Checked />
          </li>
        </ul>
      </section>
      <section className="m-10 flex flex-col px-10" id="servicios">
        <h3 className={`${poetsenOne.className} pb-5 text-center text-4xl font-bold`}>Servicios</h3>
        <div className="flex flex-wrap justify-center gap-20">
          <CardServices
            description="Controles médicos previos al ingreso laboral que aseguran la aptitud física y mental del postulante, cumpliendo con las normativas vigentes y priorizando la prevención de riesgos laborales."
            image="/services1.png"
            title="Realización de Exámenes Preocupacionales"
          />
          <CardServices
            description="Evaluaciones médicas orientadas al diagnóstico y seguimiento de la salud general del trabajador, con estudios clínicos y de laboratorio que permiten detectar factores de riesgo y prevenir enfermedades."
            image="/services2.png"
            title="Evaluación de la salud general"
          />
          <CardServices
            description="Evaluaciones de salud para deportistas de bajo rendimiento, programas integrales para alto rendimiento, monitoreo y análisis físico, planes de prevención de lesiones y rehabilitación."
            image="/services3.png"
            title="Evaluación de la salud general"
          />
          <CardServices
            description="Tratamientos médicos no invasivos diseñados para mejorar el bienestar, la imagen personal y la confianza del paciente, combinando tecnología avanzada y atención profesional personalizada."
            image="/services4.png"
            title="Medicina estética"
          />
          <CardServices
            description="Implementamos programas integrales de prevención y control en el ámbito laboral, asegurando entornos de trabajo seguros y saludables mediante evaluaciones, capacitaciones y cumplimiento de normas vigentes."
            image="/services5.png"
            title="Seguridad e Higiene"
          />
        </div>
      </section>
      <section className="m-10 flex flex-col px-10" id="estudios">
        <h4 className={`${poetsenOne.className} pb-5 text-center text-4xl font-bold`}>
          Estudios que brindamos
        </h4>

        <div className="flex flex-wrap justify-center gap-20">
          <CardEstudios
            description="Evaluación del ritmo y la actividad eléctrica del corazón para detectar posibles alteraciones cardíacas."
            image="/estudios1.png"
            title="Electrocardiogramas"
          />
          <CardEstudios
            description="Registro de la actividad eléctrica cerebral, útil para el diagnóstico de trastornos neurológicos."
            image="/estudios2.png"
            title="Electroencefalogramas"
          />
          <CardEstudios
            description="Medición de la capacidad pulmonar y la función respiratoria, ideal para detectar enfermedades pulmonares."
            image="/estudios3.png"
            title="Espirometrías"
          />
          <CardEstudios
            description="Prueba de esfuerzo físico controlado que permite evaluar el funcionamiento del corazón durante la actividad."
            image="/estudios4.png"
            title="Ergometrías"
          />
          <CardEstudios
            description="Estudio por imágenes que permite visualizar estructuras internas del cuerpo, como huesos y órganos."
            image="/estudios5.png"
            title="Radiografías"
          />
          <CardEstudios
            description="Exploración médica mediante ultrasonido para observar tejidos blandos y órganos internos."
            image="/estudios6.png"
            title="Ecografías"
          />
          <CardEstudios
            description="Evaluación de la capacidad auditiva para detectar pérdidas o alteraciones en la audición."
            image="/estudios7.png"
            title="Audiometrías"
          />
          <CardEstudios
            description="Pruebas de evaluación cognitiva y psicológica para determinar aptitudes laborales o clínicas."
            image="/estudios8.png"
            title="Psicotécnicos"
          />
          <CardEstudios
            description="Tratamientos no invasivos que mejoran la salud y apariencia de la piel, promoviendo bienestar, armonía y cuidado personal."
            image="/estudios9.png"
            title="Medicina estética"
          />
          <CardEstudios
            description="Exámenes de sangre, orina y otros fluidos corporales que brindan información sobre el estado general de salud."
            image="/estudios10.png"
            title="Análisis clínicos de laboratorio"
          />
        </div>
      </section>
    </main>
  );
}
