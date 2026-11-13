import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => null);
  if (!body || !Array.isArray(body.needs) || body.needs.length === 0 || !body.name || !body.email || !body.phone) return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  const webhook = process.env.QUOTE_WEBHOOK_URL;
  if (webhook) {
    const response = await fetch(webhook, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(body) });
    if (!response.ok) return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }
  return NextResponse.json({ ok: true, connected: Boolean(webhook) }, { status: 202 });
}
