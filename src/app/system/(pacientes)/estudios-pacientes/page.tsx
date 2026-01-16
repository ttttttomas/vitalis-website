"use client";
import {useEffect, useState} from "react";

import {Studies} from "@/types";

import {apiClient} from "@/lib/axios";
import {Clients} from "@/components/ui/Icons";
import {useAuth} from "@/contexts/AuthContext";

import Panel from "../../components/Panel";

import EstudiosCard from "./EstudiosCard";

export default function EstudiosPacientesPage() {
  const {profile} = useAuth();
  const [studies, setStudies] = useState<Studies[]>([]);
  const patient_id = profile?.patient_id;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (patient_id) {
      const getStudies = async () => {
        try {
          const response = await apiClient.get<{studies: Studies[]}>(
            `studies/?patient_id=${patient_id}`,
            {
              withCredentials: true,
            },
          );

          setStudies(response.data.studies);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching studies:", error);
          setIsLoading(false);
        }
      };

      void getStudies();
    }
  }, [patient_id]);

  return (
    <Panel pageIcon={<Clients />} pageTitle="Mis estudios">
      {isLoading ? (
        <p className="font-semibold">Cargando estudios...</p>
      ) : studies.length === 0 ? (
        <p className="font-semibold">No hay estudios</p>
      ) : (
        <section className="flex flex-col gap-5">
          {studies.map((study: Studies) => (
            <EstudiosCard key={study.id} studies={study} />
          ))}
        </section>
      )}
    </Panel>
  );
}
