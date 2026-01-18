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
            {/* HERO ONLY — remove the immediate form ask */}
            <div className="card">
              <div className="cardInner">
                <h1 className="h1">
                  New Path Financial — <span style={{ color: "var(--accent)" }}>Open your new door</span>.
                </h1>

                <p className="sub">
                  NewPath exists to help get you approved—by using the BALANCE Cipher and the Co-Pilot to turn your
                  situation into one clear next step.
                </p>

                <div className="pills">
                  <div className="pill">No pressure</div>
                  <div className="pill">No long forms</div>
                  <div className="pill">Real next step</div>
                </div>

                <div className="muted" style={{ fontSize: 12, marginTop: 10 }}>
                  Choose one door below. When you’re ready, you can share the basics at the bottom.
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 4 CTA PILLARS — ARCHITECTURE ONLY */}
      <Section
        id="pillars"
        title="Choose your door"
        desc="Four clean paths. One clear next step—powered by the BALANCE Cipher and guided by the Co-Pilot."
      >
        {/* Make the Section title for this block read like a hero line */}
        <div style={{ marginTop: -8 }}>
          <style>{`
            #pillars .sectionTitle {
              font-size: clamp(34px, 5vw, 52px);
              line-height: 1.05;
              letter-spacing: -0.02em;
            }
            #pillars .sectionDesc {
              font-size: 16px;
              max-width: 720px;
            }
          `}</style>
        </div>

        <div style={{ display: "grid", gap: 12 }}>
          {/* CTA 1 */}
          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>
                Buy your next vehicle the right way
              </h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                Break free from what didn’t work before, learn what matters today, and move forward with clarity.
              </p>
              <a className="btn btnPrimary" href="#get-started">
                Click here →
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
                Click here →
              </a>
            </div>
          </div>

          {/* CTA 3 */}
          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>
                Understand what happened—and what’s happening today
              </h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                The BALANCE Cipher helps you see why outcomes repeat; the Co-Pilot turns it into one clear next step.
              </p>
              <a className="btn btnPrimary" href="#get-started">
                Click here →
              </a>
            </div>
          </div>

          {/* CTA 4 */}
          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>
                Let us help you with your path forward—by the BALANCE Cipher
              </h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                If buying today isn’t right, we map the next move to become ready—then execute with clarity.
              </p>
              <a className="btn btnPrimary" href="#get-started">
                Click here →
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section title="FAQ" desc="Quick answers. Clear expectations.">
        <FAQ />
      </Section>

      {/* FORM ONLY AT THE BOTTOM */}
      <Section id="get-started" title="Ready to take the next step?" desc="Share the basics and we’ll route it correctly.">
        <div className="card">
          <div className="cardInner">
            <LeadForm sourcePage="newpath-landing" sourceCta="bottom-cta" />
          </div>
        </div>
      </Section>
    </main>
  );
}
