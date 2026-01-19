// app/capture-of-application/page.tsx
"use client";

import React, { useEffect, useMemo, useState } from "react";
import Section from "../../components/Section";

type Step = 1 | 2 | 3 | 4;

function safeParseSearch(search: string) {
  try {
    return new URLSearchParams(search || "");
  } catch {
    return new URLSearchParams();
  }
}

function cleanPhone(v: string) {
  return (v || "").replace(/[^\d]/g, "").slice(0, 15);
}

function isEmail(v: string) {
  const s = (v || "").trim();
  return /^\S+@\S+\.\S+$/.test(s);
}

export default function CaptureOfApplicationPage() {
  const [step, setStep] = useState<Step>(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitOk, setSubmitOk] = useState(false);

  // Basic applicant info
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  // Vehicle / intent
  const [vehicleInterest, setVehicleInterest] = useState("");
  const [budgetMonthly, setBudgetMonthly] = useState("");
  const [downPayment, setDownPayment] = useState("");

  // Credit snapshot (lightweight)
  const [creditBand, setCreditBand] = useState("");
  const [hasReposession, setHasReposession] = useState<"" | "yes" | "no">("");
  const [hasBankruptcy, setHasBankruptcy] = useState<"" | "yes" | "no">("");

  // Meta
  const [sourcePage] = useState("capture-of-application");
  const [sourceCta] = useState("landing-link");
  const [utm, setUtm] = useState<Record<string, string>>({});

  useEffect(() => {
    const sp = safeParseSearch(window.location.search);
    const utmObj: Record<string, string> = {};
    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach((k) => {
      const v = sp.get(k);
      if (v) utmObj[k] = v;
    });
    setUtm(utmObj);
  }, []);

  const canNextStep1 = useMemo(() => {
    if (!firstName.trim()) return false;
    if (!lastName.trim()) return false;
    if (cleanPhone(phone).length < 10) return false;
    if (!isEmail(email)) return false;
    return true;
  }, [firstName, lastName, phone, email]);

  const canNextStep2 = useMemo(() => {
    // Keep it “no pressure”: they can continue even if blanks, but vehicleInterest helps.
    return true;
  }, []);

  const canSubmit = useMemo(() => {
    // Credit step can be light; require at minimum Step 1
    return canNextStep1;
  }, [canNextStep1]);

  async function postLead(payload: Record<string, any>) {
    // 1) Try JSON (typical Next route handlers)
    try {
      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (r.ok) return true;
    } catch {
      // fall through
    }

    // 2) Fallback: form-encoded (some backends prefer this)
    try {
      const fd = new URLSearchParams();
      Object.entries(payload).forEach(([k, v]) => {
        if (v === undefined || v === null) return;
        fd.set(k, typeof v === "string" ? v : JSON.stringify(v));
      });

      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: fd.toString(),
      });
      if (r.ok) return true;
    } catch {
      // ignore
    }

    return false;
  }

  async function handleSubmit() {
    if (!canSubmit || submitting) return;

    setSubmitting(true);
    setSubmitError(null);

    const payload = {
      // Common lead fields (best-effort)
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      name: `${firstName.trim()} ${lastName.trim()}`.trim(),
      phone: cleanPhone(phone),
      email: email.trim(),

      // Application-specific fields (kept simple)
      vehicleInterest: vehicleInterest.trim(),
      budgetMonthly: budgetMonthly.trim(),
      downPayment: downPayment.trim(),

      creditBand: creditBand.trim(),
      hasReposession,
      hasBankruptcy,

      // Attribution
      sourcePage,
      sourceCta,
      utm,

      // Optional: helpful label for your CRM filtering
      leadType: "credit-application-capture",
    };

    const ok = await postLead(payload);

    if (ok) {
      setSubmitOk(true);
      setStep(4);
    } else {
      setSubmitError("Submission did not go through. Please try again, or use the basic form on the landing page.");
    }

    setSubmitting(false);
  }

  return (
    <main>
      <style>{`
        html, body { background: #ffffff !important; }

        .topPad { padding-top: 18px; }
        .flowWrap { display: grid; gap: 12px; }

        .stepRow {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
          margin-top: 6px;
        }
        .stepDot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: rgba(0,0,0,0.14);
        }
        .stepDot.active {
          background: var(--accent);
          box-shadow: 0 0 0 6px rgba(0,0,0,0.04);
        }

        .fieldGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 920px) {
          .fieldGrid { grid-template-columns: 1fr; }
        }

        .field label {
          display: block;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          opacity: 0.72;
          margin-bottom: 6px;
        }
        .field input, .field select {
          width: 100%;
          height: 44px;
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,0.12);
          padding: 0 12px;
          outline: none;
          background: #fff;
        }

        .helper {
          font-size: 12px;
          opacity: 0.72;
          margin-top: 8px;
          line-height: 1.35;
        }

        .btnRow {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          align-items: center;
          margin-top: 10px;
        }
        .btnLite {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 14px;
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,0.12);
          background: #fff;
          font-weight: 900;
          text-decoration: none;
        }
        .btnPrimaryLike {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 14px;
          border-radius: 14px;
          background: var(--accent);
          color: #fff;
          font-weight: 900;
          border: none;
          cursor: pointer;
          text-decoration: none;
        }
        .btnPrimaryLike[disabled] {
          opacity: 0.55;
          cursor: not-allowed;
        }

        .errorBox {
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(0,0,0,0.03);
          padding: 12px;
          font-size: 13px;
        }
      `}</style>

      <div className="container topPad">
        <div className="nav">
          <div className="brand" style={{ gap: 12 }}>
            <img
              src="/brand/newpath-auto-finance.png"
              alt="New Path Auto Finance"
              style={{ width: 160, height: 160, objectFit: "contain", display: "block" }}
            />
          </div>

          <div className="badge">Capture of Application</div>
        </div>
      </div>

      <Section
        id="capture"
        title="Let’s capture the basics."
        desc="No pressure. This is a short start so we can route your next step clearly."
      >
        <div className="flowWrap">
          <div className="card">
            <div className="cardInner">
              <div className="stepRow" aria-label="Progress">
                <span className={`stepDot ${step === 1 ? "active" : ""}`} />
                <span className={`stepDot ${step === 2 ? "active" : ""}`} />
                <span className={`stepDot ${step === 3 ? "active" : ""}`} />
              </div>

              {step === 1 && (
                <>
                  <h3 className="itemTitle" style={{ marginTop: 10 }}>
                    Step 1 — Contact
                  </h3>

                  <div className="fieldGrid" style={{ marginTop: 10 }}>
                    <div className="field">
                      <label>First name</label>
                      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div className="field">
                      <label>Last name</label>
                      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="field">
                      <label>Phone</label>
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        inputMode="tel"
                        placeholder="(xxx) xxx-xxxx"
                      />
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        inputMode="email"
                        placeholder="you@email.com"
                      />
                    </div>
                  </div>

                  <div className="helper">
                    You only need to share the basics. We use this to follow up with one clear next step.
                  </div>

                  <div className="btnRow">
                    <button
                      className="btnPrimaryLike"
                      disabled={!canNextStep1}
                      onClick={() => setStep(2)}
                    >
                      Continue →
                    </button>
                    <a className="btnLite" href="/">
                      Back to landing
                    </a>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h3 className="itemTitle" style={{ marginTop: 10 }}>
                    Step 2 — What are you trying to do?
                  </h3>

                  <div className="fieldGrid" style={{ marginTop: 10 }}>
                    <div className="field">
                      <label>Vehicle interest</label>
                      <input
                        value={vehicleInterest}
                        onChange={(e) => setVehicleInterest(e.target.value)}
                        placeholder="Example: SUV, truck, sedan"
                      />
                    </div>

                    <div className="field">
                      <label>Monthly budget (optional)</label>
                      <input
                        value={budgetMonthly}
                        onChange={(e) => setBudgetMonthly(e.target.value)}
                        placeholder="Example: 350"
                        inputMode="numeric"
                      />
                    </div>

                    <div className="field">
                      <label>Down payment (optional)</label>
                      <input
                        value={downPayment}
                        onChange={(e) => setDownPayment(e.target.value)}
                        placeholder="Example: 1000"
                        inputMode="numeric"
                      />
                    </div>

                    <div className="field">
                      <label>Timeline (optional)</label>
                      <select defaultValue="" onChange={() => {}}>
                        <option value="">Select</option>
                        <option value="now">Ready now</option>
                        <option value="soon">Soon (2–4 weeks)</option>
                        <option value="later">Later (1–3 months)</option>
                      </select>
                    </div>
                  </div>

                  <div className="helper">
                    Optional is fine. This step helps us route the cleanest next move for you.
                  </div>

                  <div className="btnRow">
                    <button className="btnLite" onClick={() => setStep(1)}>
                      ← Back
                    </button>
                    <button className="btnPrimaryLike" disabled={!canNextStep2} onClick={() => setStep(3)}>
                      Continue →
                    </button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h3 className="itemTitle" style={{ marginTop: 10 }}>
                    Step 3 — Quick credit snapshot
                  </h3>

                  <div className="fieldGrid" style={{ marginTop: 10 }}>
                    <div className="field">
                      <label>Credit range (best guess)</label>
                      <select value={creditBand} onChange={(e) => setCreditBand(e.target.value)}>
                        <option value="">Select</option>
                        <option value="550-">Under 550</option>
                        <option value="550-599">550–599</option>
                        <option value="600-649">600–649</option>
                        <option value="650-699">650–699</option>
                        <option value="700+">700+</option>
                        <option value="unknown">Not sure</option>
                      </select>
                    </div>

                    <div className="field">
                      <label>Repossession in last 5 years?</label>
                      <select value={hasReposession} onChange={(e) => setHasReposession(e.target.value as any)}>
                        <option value="">Select</option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>

                    <div className="field">
                      <label>Bankruptcy in last 7 years?</label>
                      <select value={hasBankruptcy} onChange={(e) => setHasBankruptcy(e.target.value as any)}>
                        <option value="">Select</option>
                        <option value="no">No</option>
                        <option value="yes">Yes</option>
                      </select>
                    </div>

                    <div className="field">
                      <label>We keep this simple</label>
                      <input value="One step at a time." readOnly />
                    </div>
                  </div>

                  {submitError && (
                    <div className="errorBox" style={{ marginTop: 12 }}>
                      <strong>Issue:</strong> {submitError}
                    </div>
                  )}

                  <div className="btnRow">
                    <button className="btnLite" onClick={() => setStep(2)} disabled={submitting}>
                      ← Back
                    </button>
                    <button className="btnPrimaryLike" onClick={handleSubmit} disabled={!canSubmit || submitting}>
                      {submitting ? "Submitting..." : "Submit application →"}
                    </button>
                  </div>

                  <div className="helper">
                    By submitting, you are asking us to contact you about your next step. No pressure and no spam.
                  </div>
                </>
              )}

              {step === 4 && (
                <>
                  <h3 className="itemTitle" style={{ marginTop: 10 }}>
                    You’re in.
                  </h3>
                  <p className="itemBody">
                    We captured the basics. Next, we’ll follow up with one clear next step.
                  </p>

                  <div className="btnRow" style={{ marginTop: 12 }}>
                    <a className="btnPrimaryLike" href="/">
                      Back to landing →
                    </a>
                    <a className="btnLite" href="/buy-your-vehicle">
                      Buy your vehicle path →
                    </a>
                  </div>

                  <div className="helper">
                    If you want to add anything later, you can—this is just the start.
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="muted" style={{ fontSize: 12 }}>
            Powered by a calm system: the BALANCE Cipher reveals the pattern; the Co-Pilot translates it into one clear move.
          </div>
        </div>
      </Section>
    </main>
  );
}
