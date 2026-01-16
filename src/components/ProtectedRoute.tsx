"use client";

import {useRouter} from "next/navigation";
import {useEffect} from "react";

import {useAuth} from "@/contexts/AuthContext";

export default function ProtectedRoute({children}: {children: React.ReactNode}) {
  const {isAuthenticated, isLoading, user} = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (!isLoading && !isAuthenticated) {
  //     router.push("/login");
  //   }
  // }, [isAuthenticated, isLoading, router]);

  // if (isLoading) {
  //   return (
  //     <div className="flex min-h-screen items-center justify-center">
  //       <div className="text-lg">Cargando...</div>
  //     </div>
  //   );
  // }

  // if (!isAuthenticated) {
  //   return null;
  // }

  return <>{children}</>;
}
