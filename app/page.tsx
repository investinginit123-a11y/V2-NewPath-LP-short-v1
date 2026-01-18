// app/page.tsx

import Section from "../components/Section";
import LeadForm from "../components/LeadForm";
import FAQ from "../components/FAQ";

export default function Page() {
  return (
    <main>
      <header className="hero">
        <div className="container">
          <div className="nav">
            <div className="brand" style={{ gap: 12 }}>
              <img
                src="/brand/newpath-auto-finance.png"
                alt="New Path Auto Finance"
                style={{
                  width: 288, // ~3 inches @ 96dpi
                  height: 288,
                  objectFit: "contain",
                  display: "block"
                }}
              />
            </div>
            <div className="badge">Simple. Clear. Actionable.</div>
          </div>

          <div className="gridHero">
            <div className="card">
              <div className="cardInner">
                <h1 className="h1">
                  New Path — <span style={{ color: "var(--accent)" }}>open a new door</span>.
                </h1>

                <p className="sub">
                  Leave the old pattern behind, get clear on what matters today, and take one clean next step forward—
                  guided by the Co-Pilot and the BALANCE Cipher.
                </p>

                <div className="pills">
                  <div className="pill">No pressure</div>
                  <div className="pill">No long forms</div>
                  <div className="pill">Real next step</div>
                </div>

                {/* No extra buttons here on purpose.
                    Your four pillars below are the CTAs. */}
                <div className="muted" style={{ fontSize: 12, marginTop: 10 }}>
                  Choose one door below. Each one routes you to the same short form.
                </div>
              </div>
            </div>

            <div className="card" id="get-started">
              <div className="cardInner">
                <h2 className="sectionTitle" style={{ marginTop: 0 }}>
                  Tell us where you’re at
                </h2>
                <p className="sectionDesc">We only ask for what we need. You’ll get a follow-up with the next step.</p>
                <LeadForm sourcePage="newpath-landing" sourceCta="hero-form" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 4 CTA PILLARS — ARCHITECTURE ONLY (NO EXTRA BUTTONS ANYWHERE ELSE) */}
      <Section
        id="pillars"
        title="Choose your door"
        desc="Four clean paths. One clear next step—powered by the BALANCE Cipher and guided by the Co-Pilot."
      >
        <div style={{ display: "grid", gap: 12 }}>
          {/* CTA 1 */}
          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>
                Buy the car the right way
              </h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                Break free from what didn’t work before, learn what matters today, and move forward with clarity.
              </p>
              <a className="btn btnPrimary" href="#get-started">
                Buy the right way →
              </a>
            </div>
          </div>

          {/* CTA 2 */}
          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>
                Get approved the right way
              </h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                We position you for approval by aligning your next move with the Cipher—translated by the Co-Pilot.
              </p>
              <a className="btn btnPrimary" href="#get-started">
                Get approved →
              </a>
            </div>
          </div>

          {/* CTA 3 */}
          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>
                Understand what’s happening today
              </h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                The BALANCE Cipher shows what’s really going on; the Co-Pilot turns it into one clear next step.
              </p>
              <a className="btn btnPrimary" href="#get-started">
                Show me clarity →
              </a>
            </div>
          </div>

          {/* CTA 4 */}
          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>
                Build a path forward
              </h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                If buying today isn’t right, we map the next move to become ready—then execute with clarity.
              </p>
              <a className="btn btnPrimary" href="#get-started">
                Build my path →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* KEEP THE REST AS-IS FOR NOW (NO EXTRA CTA BUTTONS ADDED) */}
      <Section title="FAQ" desc="Quick answers. Clear expectations.">
        <FAQ />
      </Section>

      <Section title="Ready to take the next step?" desc="Drop your info and we’ll route it correctly.">
        <div className="card">
          <div className="cardInner">
            <LeadForm sourcePage="newpath-landing" sourceCta="bottom-cta" />
          </div>
        </div>
      </Section>
    </main>
  );
}
