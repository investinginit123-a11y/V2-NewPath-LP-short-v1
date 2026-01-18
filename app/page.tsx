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
                  Break free from what didn’t work before, get clear on what matters today, and take one clean next
                  step forward—guided by the BALANCE Cipher and the Co-Pilot.
                </p>

                <div className="pills">
                  <div className="pill">No pressure</div>
                  <div className="pill">No long forms</div>
                  <div className="pill">Real next step</div>
                </div>

                <div className="buttonRow">
                  <a className="btn btnPrimary" href="#get-started">
                    Start here
                  </a>
                  <a className="btn" href="#path-ctas">
                   Choose your path
                  </a>
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

      {/* PATH CTAs — ARCHITECTURE PILLARS (4 MAX) */}
      <Section
        id="path-ctas"
        title="Choose your path"
        desc="Four simple doors. One clear next step—powered by the BALANCE Cipher and guided by the Co-Pilot."
      >
        <div style={{ display: "grid", gap: 12 }}>
          {/* CTA 1 */}
          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>
                Buy the car the right way
              </h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                Leave the old pattern behind, learn what matters today, and take one clean next step forward—so you can
                buy with confidence moving forward.
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
                Focus on what matters today—income, payment, and approval positioning. The Cipher shows what’s real; the
                Co-Pilot translates it into one clear move.
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
                Understand what’s happening today
              </h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                The BALANCE Cipher helps you see why outcomes repeat. The Co-Pilot turns that into simple, actionable
                clarity—without overwhelm.
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
                Build a path forward
              </h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                If “buy today” isn’t the right move, you’ll get the exact next step to become ready—then execute with
                clarity.
              </p>
              <a className="btn btnPrimary" href="#get-started">
                Click here →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* KEEP EXISTING SECTIONS FOR NOW (PILLARS FIRST) */}
      <Section id="how-it-works" title="How it works" desc="Three simple steps. No extra noise.">
        <div className="split">
          <div className="item">
            <h3 className="itemTitle">1) You send the basics</h3>
            <p className="itemBody">Name, contact info, and what you’re trying to do. That’s it.</p>
          </div>
          <div className="item">
            <h3 className="itemTitle">2) We sort the situation</h3>
            <p className="itemBody">
              We route your lead to the right lane: auto, refinance, rebuild, or next-step planning.
            </p>
          </div>
          <div className="item">
            <h3 className="itemTitle">3) You get one clear next step</h3>
            <p className="itemBody">Not a lecture. Not a checklist of 30 things. One clean move to take next.</p>
          </div>
          <div className="item">
            <h3 className="itemTitle">What this is not</h3>
            <p className="itemBody">
              This is not “magic credit repair.” It’s clarity, planning, and execution—one step at a time.
            </p>
          </div>
        </div>
      </Section>

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
