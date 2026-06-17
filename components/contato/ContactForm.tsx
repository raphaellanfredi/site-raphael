"use client";

/**
 * components/contato/ContactForm.tsx
 *
 * Formulário de contato com envio automático via API route.
 * O POST vai para /api/contact → webhook n8n (processamento e envio
 * de email/mensagem ao cliente acontece do lado do n8n).
 *
 * Estados:
 *  idle     → formulário visível
 *  sending  → botão desabilitado com spinner
 *  sent     → mensagem de sucesso
 *  error    → mensagem de erro com opção de tentar novamente
 */

import { useState, type FormEvent } from "react";

const INTERESSES = [
  "Palestra / Treinamento",
  "Consultoria em IA",
  "Conhecer a EVA",
  "Parceria",
  "Outro",
];

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      nome: data.get("nome") as string,
      email: data.get("email") as string,
      empresa: (data.get("empresa") as string) || undefined,
      interesse: data.get("interesse") as string,
      mensagem: data.get("mensagem") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error || `HTTP ${res.status}`);
      }

      setStatus("sent");
    } catch (err) {
      console.error("[ContactForm]", err);
      setErrorMsg(
        err instanceof Error ? err.message : "Erro desconhecido. Tente novamente."
      );
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-lg border border-brand-gold/30 bg-brand-gold/10 p-8 text-center">
        <p className="font-display text-2xl text-brand-dark">
          Mensagem enviada! ✓
        </p>
        <p className="mt-2 text-text-muted">
          Recebemos seu contato e respondemos o mais rápido possível.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="sm:col-span-1">
        <label className="label block mb-2" htmlFor="nome">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          disabled={status === "sending"}
          placeholder="Seu nome"
          className="w-full rounded-md border border-brand-gold/30 bg-brand-white px-4 py-3 text-text-primary outline-none focus:border-brand-gold transition-colors disabled:opacity-50"
        />
      </div>

      <div className="sm:col-span-1">
        <label className="label block mb-2" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          disabled={status === "sending"}
          placeholder="Seu melhor email"
          className="w-full rounded-md border border-brand-gold/30 bg-brand-white px-4 py-3 text-text-primary outline-none focus:border-brand-gold transition-colors disabled:opacity-50"
        />
      </div>

      <div className="sm:col-span-1">
        <label className="label block mb-2" htmlFor="empresa">
          Empresa (opcional)
        </label>
        <input
          id="empresa"
          name="empresa"
          type="text"
          disabled={status === "sending"}
          placeholder="Empresa ou negócio"
          className="w-full rounded-md border border-brand-gold/30 bg-brand-white px-4 py-3 text-text-primary outline-none focus:border-brand-gold transition-colors disabled:opacity-50"
        />
      </div>

      <div className="sm:col-span-1">
        <label className="label block mb-2" htmlFor="interesse">
          Interesse
        </label>
        <select
          id="interesse"
          name="interesse"
          defaultValue={INTERESSES[0]}
          disabled={status === "sending"}
          className="w-full rounded-md border border-brand-gold/30 bg-brand-white px-4 py-3 text-text-primary outline-none focus:border-brand-gold transition-colors disabled:opacity-50"
        >
          {INTERESSES.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label className="label block mb-2" htmlFor="mensagem">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          disabled={status === "sending"}
          placeholder="Me conte o que você está construindo e como posso ajudar."
          className="w-full rounded-md border border-brand-gold/30 bg-brand-white px-4 py-3 text-text-primary outline-none focus:border-brand-gold transition-colors resize-none disabled:opacity-50"
        />
      </div>

      {status === "error" && (
        <div className="sm:col-span-2 rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
          {errorMsg || "Não foi possível enviar. Tente novamente ou use o WhatsApp."}
        </div>
      )}

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-8 py-3.5 text-sm font-bold text-brand-dark hover:bg-brand-gold/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "sending" ? (
            <>
              <svg
                className="h-4 w-4 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Enviando…
            </>
          ) : (
            "Enviar mensagem"
          )}
        </button>
      </div>
    </form>
  );
}
