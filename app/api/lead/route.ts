import { NextResponse } from "next/server";

type LeadPayload = {
  fullName: string;
  phone?: string;
  email?: string;
  goal?: string;
  notes?: string;
  sourcePage?: string;
  sourceCta?: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    content?: string;
    term?: string;
  };
};

export async function POST(req: Request) {
  const endpoint = process.env.CRM_LEAD_ENDPOINT;

  if (!endpoint) {
    return NextResponse.json(
      { ok: false, message: "Server is missing CRM_LEAD_ENDPOINT." },
      { status: 500 }
    );
  }

  let body: LeadPayload | null = null;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON." }, { status: 400 });
  }

  if (!body?.fullName || (!body.phone && !body.email)) {
    return NextResponse.json(
      { ok: false, message: "Missing required fields." },
      { status: 400 }
    );
  }

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const bearer = process.env.CRM_AUTH_BEARER;
  if (bearer) headers.Authorization = `Bearer ${bearer}`;

  try {
    const crmRes = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({ ...body, receivedAtISO: new Date().toISOString() })
    });

    if (!crmRes.ok) {
      const text = await crmRes.text().catch(() => "");
      return NextResponse.json(
        { ok: false, message: "CRM rejected the lead.", details: text.slice(0, 500) },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true, message: "Lead received." });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Unable to reach CRM endpoint." },
      { status: 502 }
    );
  }
}

