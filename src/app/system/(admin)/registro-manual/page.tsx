"use client";
import {useState} from "react";
import {useRouter} from "next/navigation";
import {useForm} from "react-hook-form";

import {Users} from "@/components/ui/Icons";
import {authService} from "@/services/authService";

import Panel from "../../components/Panel";

type Tab = "empresa" | "paciente";

interface PatientForm {
  first_name: string;
  last_name: string;
  dni: string;
  date_of_birth: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  insurance?: string;
}

interface CompanyForm {
  company_name: string;
  responsable_name: string;
  cuit: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  company_address?: string;
}

export default function RegistroManualPage() {
  const [tab, setTab] = useState<Tab>("empresa");
  const router = useRouter();

  /* ─────────────────── EMPRESA ─────────────────── */
  const {
    register: regCo,
    handleSubmit: hsCo,
    watch: watchCo,
    reset: resetCo,
  } = useForm<CompanyForm>();

  const coPwd = watchCo("password");
  const coConfirm = watchCo("confirmPassword");
  const coPwdMatch = !coConfirm || coPwd === coConfirm;

  const onSubmitCompany = hsCo(async (data) => {
    if (data.password !== data.confirmPassword) return;
    try {
      await authService.registerCompany(data);
      alert("Empresa registrada correctamente.");
      resetCo();
    } catch (err: unknown) {
      const msg =
        (err as {response?: {data?: {detail?: string}}})?.response?.data?.detail ??
        "Error al registrar la empresa.";

      alert(msg);
    }
  });

  /* ─────────────────── PACIENTE ─────────────────── */
  const {
    register: regPat,
    handleSubmit: hsPat,
    watch: watchPat,
    reset: resetPat,
  } = useForm<PatientForm>();

  const patPwd = watchPat("password");
  const patConfirm = watchPat("confirmPassword");
  const patPwdMatch = !patConfirm || patPwd === patConfirm;

  const onSubmitPatient = hsPat(async (data) => {
    if (data.password !== data.confirmPassword) return;
    try {
      await authService.register(data);
      alert("Paciente registrado correctamente.");
      resetPat();
    } catch (err: unknown) {
      const msg =
        (err as {response?: {data?: {detail?: string}}})?.response?.data?.detail ??
        "Error al registrar el paciente.";

      alert(msg);
    }
  });

  return (
    <Panel pageIcon={<Users />} pageTitle="Registro Manual">
      {/* Tabs */}
      <div className="mb-6 grid grid-cols-2 text-center text-sm font-semibold">
        <button
          className={`cursor-pointer py-2 transition-all ${
            tab === "empresa" ? "bg-[#3F5C3B] text-white" : "bg-[#A3DFA3] text-black"
          }`}
          type="button"
          onClick={() => setTab("empresa")}
        >
          Empresa
        </button>
        <button
          className={`cursor-pointer py-2 transition-all ${
            tab === "paciente" ? "bg-[#3F5C3B] text-white" : "bg-[#A3DFA3] text-black"
          }`}
          type="button"
          onClick={() => setTab("paciente")}
        >
          Paciente Particular
        </button>
      </div>

      {/* ── FORM EMPRESA ── */}
      {tab === "empresa" && (
        <form
          className="mt-4 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            void onSubmitCompany(e);
          }}
        >
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-black" htmlFor="co_company_name">
              Nombre de la empresa <span className="text-red-500">*</span>
            </label>
            <input
              required
              className="rounded-md border px-3 py-2"
              id="co_company_name"
              type="text"
              {...regCo("company_name", {required: true})}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-black" htmlFor="co_responsable_name">
              Nombre del responsable <span className="text-red-500">*</span>
            </label>
            <input
              required
              className="rounded-md border px-3 py-2"
              id="co_responsable_name"
              type="text"
              {...regCo("responsable_name", {required: true})}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-black" htmlFor="co_cuit">
              CUIT <span className="text-red-500">*</span>
            </label>
            <input
              required
              className="rounded-md border px-3 py-2"
              id="co_cuit"
              type="text"
              {...regCo("cuit", {required: true})}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-black" htmlFor="co_email">
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              required
              className="rounded-md border px-3 py-2"
              id="co_email"
              type="email"
              {...regCo("email", {required: true})}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-black" htmlFor="co_phone">
              Teléfono <span className="text-red-500">*</span>
            </label>
            <input
              required
              className="rounded-md border px-3 py-2"
              id="co_phone"
              type="tel"
              {...regCo("phone", {required: true})}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-black" htmlFor="co_company_address">
              Dirección
            </label>
            <input
              className="rounded-md border px-3 py-2"
              id="co_company_address"
              type="text"
              {...regCo("company_address")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-black" htmlFor="co_password">
              Contraseña <span className="text-red-500">*</span>
            </label>
            <input
              required
              className="rounded-md border px-3 py-2"
              id="co_password"
              type="password"
              {...regCo("password", {required: true})}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-black" htmlFor="co_confirmPassword">
              Confirmar contraseña <span className="text-red-500">*</span>
            </label>
            <input
              required
              className={`rounded-md border px-3 py-2 ${!coPwdMatch ? "border-red-500" : ""}`}
              id="co_confirmPassword"
              type="password"
              {...regCo("confirmPassword", {required: true})}
            />
            {!coPwdMatch && <p className="text-sm text-red-500">Las contraseñas no coinciden</p>}
          </div>

          <button
            className="bg-blue mt-2 cursor-pointer rounded-lg py-2 font-semibold text-white"
            type="submit"
          >
            Registrar Empresa
          </button>
        </form>
      )}

      {/* ── FORM PACIENTE ── */}
      {tab === "paciente" && (
        <form
          className="mt-4 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            void onSubmitPatient(e);
          }}
        >
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-black" htmlFor="pat_first_name">
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              required
              className="rounded-md border px-3 py-2"
              id="pat_first_name"
              type="text"
              {...regPat("first_name", {required: true})}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-black" htmlFor="pat_last_name">
              Apellido
            </label>
            <input
              className="rounded-md border px-3 py-2"
              id="pat_last_name"
              type="text"
              {...regPat("last_name")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-black" htmlFor="pat_dni">
              DNI <span className="text-red-500">*</span>
            </label>
            <input
              required
              className="rounded-md border px-3 py-2"
              id="pat_dni"
              type="text"
              {...regPat("dni", {required: true})}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-black" htmlFor="pat_date_of_birth">
              Fecha de nacimiento <span className="text-red-500">*</span>
            </label>
            <input
              required
              className="rounded-md border px-3 py-2"
              id="pat_date_of_birth"
              type="date"
              {...regPat("date_of_birth", {required: true})}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-black" htmlFor="pat_email">
              Correo electrónico <span className="text-red-500">*</span>
            </label>
            <input
              required
              className="rounded-md border px-3 py-2"
              id="pat_email"
              type="email"
              {...regPat("email", {required: true})}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-black" htmlFor="pat_phone">
              Teléfono <span className="text-red-500">*</span>
            </label>
            <input
              required
              className="rounded-md border px-3 py-2"
              id="pat_phone"
              type="tel"
              {...regPat("phone", {required: true})}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-black" htmlFor="pat_insurance">
              Obra social
            </label>
            <input
              className="rounded-md border px-3 py-2"
              id="pat_insurance"
              type="text"
              {...regPat("insurance")}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-black" htmlFor="pat_password">
              Contraseña <span className="text-red-500">*</span>
            </label>
            <input
              required
              className="rounded-md border px-3 py-2"
              id="pat_password"
              type="password"
              {...regPat("password", {required: true})}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-black" htmlFor="pat_confirmPassword">
              Confirmar contraseña <span className="text-red-500">*</span>
            </label>
            <input
              required
              className={`rounded-md border px-3 py-2 ${!patPwdMatch ? "border-red-500" : ""}`}
              id="pat_confirmPassword"
              type="password"
              {...regPat("confirmPassword", {required: true})}
            />
            {!patPwdMatch && <p className="text-sm text-red-500">Las contraseñas no coinciden</p>}
          </div>

          <button
            className="bg-blue mt-2 cursor-pointer rounded-lg py-2 font-semibold text-white"
            type="submit"
          >
            Registrar Paciente
          </button>
        </form>
      )}
    </Panel>
  );
}
