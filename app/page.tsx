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
            <div className="brand">
              <img
                src="/brand/newpath-auto-finance.png"
                alt="NewPath Auto Finance"
                style={{
                  width: "3in",
                  height: "3in",
                  display: "block",
                  objectFit: "contain",
                  maxWidth: "100%"
                }}
              />
            </div>
            <div className="badge">Simple. Clear. Actionable.</div>
          </div>

          <div className="gridHero">
            <div className="card">
              <div className="cardInner">
                <h1 className="h1">
                  Start your next step{" "}
                  <span style={{ color: "var(--accent)" }}>with clarity</span>.
                </h1>
                <p className="sub">
                  If you are tired of guessing, you are in the right place. We’ll take your situation,
                  keep it simple, and point you to one clean next step.
                </p>

                <div className="pills">
                  <div className="pill">No pressure</div>
                  <div className="pill">No long forms</div>
                  <div className="pill">Real next step</div>
                </div>

                <div className="buttonRow">
                  <a className="btn btnPrimary" href="#get-started">
                    Get started
                  </a>
                  <a className="btn" href="#how-it-works">
                    How it works
                  </a>
                </div>
              </div>
            </div>

            <div className="card" id="get-started">
              <div className="cardInner">
                <h2 className="sectionTitle" style={{ marginTop: 0 }}>
                  Tell us where you’re at
                </h2>
                <p className="sectionDesc">
                  We only ask for what we need. You’ll get a follow-up with the next step.
                </p>
                <LeadForm sourcePage="newpath-landing" sourceCta="hero-form" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* OPTION A: SHORT “HOW TO BUY A CAR” BLOCK — RIGHT UNDER HERO */}
      <Section
        id="how-to-buy-a-car"
        title="How to buy a car (the right way)"
        desc="Short version. No noise. Three moves that push you toward approval."
      >
        <div className="card">
          <div className="cardInner">
            <div style={{ display: "grid", gap: 10 }}>
              <div className="item" style={{ margin: 0 }}>
                <h3 className="itemTitle" style={{ margin: 0 }}>
                  1) Know your numbers
                </h3>
                <p className="itemBody" style={{ margin: "6px 0 0" }}>
                  Budget, down payment, and what you can actually carry monthly.
                </p>
              </div>

              <div className="item" style={{ margin: 0 }}>
                <h3 className="itemTitle" style={{ margin: 0 }}>
                  2) Get positioned for approval
                </h3>
                <p className="itemBody" style={{ margin: "6px 0 0" }}>
                  We identify the approval blockers and route your next move.
                </p>
              </div>

              <div className="item" style={{ margin: 0 }}>
                <h3 className="itemTitle" style={{ margin: 0 }}>
                  3) Make one clean move next
                </h3>
                <p className="itemBody" style={{ margin: "6px 0 0" }}>
                  Not a 30-step checklist. One step you can execute today.
                </p>
              </div>

              <div className="buttonRow" style={{ marginTop: 4 }}>
                <a className="btn btnPrimary" href="#get-started">
                  Start my application →
                </a>
                {/* Placeholder until BALANCE Cipher app URL is wired */}
                <a className="btn" href="#get-started" aria-label="Open BALANCE Cipher (placeholder)">
                  Open BALANCE Cipher →
                </a>
              </div>

              <div className="muted">
                Fast path: start here. We’ll route you to the next step based on what you share.
              </div>
            </div>
          </div>
        </div>
      </Section>

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
            <p className="itemBody">
              Not a lecture. Not a checklist of 30 things. One clean move to take next.
            </p>
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
