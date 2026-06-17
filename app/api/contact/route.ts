/**
 * app/api/contact/route.ts
 *
 * Route Handler para o formulário de contato.
 *
 * Encaminha os dados preenchidos via webhook para o n8n — todo o
 * processamento (envio de email/mensagem ao cliente, CRM, etc.) acontece
 * do lado do workflow n8n, não aqui.
 */

import { NextRequest } from "next/server";

const WEBHOOK_URL = "https://webhookn8n.evainteligencia.com.br/webhook/contato-site-raphael";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, empresa, interesse, mensagem } = body as {
      nome: string;
      email: string;
      empresa?: string;
      interesse: string;
      mensagem: string;
    };

    if (!nome || !email || !interesse || !mensagem) {
      return Response.json(
        { error: "Campos obrigatórios faltando." },
        { status: 400 }
      );
    }

    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome,
        email,
        empresa: empresa ?? "",
        interesse,
        mensagem,
        origem: "raphaellanfredi.com.br",
        data: new Date().toISOString(),
      }),
    });

    if (!webhookResponse.ok) {
      console.error("[contact] Webhook error:", webhookResponse.status, await webhookResponse.text());
      return Response.json(
        { error: "Falha no envio. Tente novamente." },
        { status: 502 }
      );
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return Response.json(
      { error: "Erro interno do servidor." },
      { status: 500 }
    );
  }
}
