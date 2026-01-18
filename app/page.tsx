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
                  <a className="btn" href="#how-to-buy-a-car">
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

          {/* TEMP: Make it impossible to miss */}
          <div style={{ paddingTop: 14 }}>
            <a className="btn" href="#how-to-buy-a-car">
              Jump to: How to buy a car ↓
            </a>
          </div>
        </div>
      </header>

      {/* NEW: HOW TO BUY A CAR SECTION (THIS IS YOUR “INJECTION ZONE”) */}
      <Section
        id="how-to-buy-a-car"
        title="How to buy a car (the right way)"
        desc="No guessing. No noise. These are the steps that move you toward approval—one clean move at a time."
      >
        {/* TEMP MARKER: remove after verification */}
        <div
          className="card"
          style={{
            border: "2px solid var(--accent)",
            marginBottom: 12
          }}
        >
          <div className="cardInner" style={{ padding: 12 }}>
            <div style={{ fontWeight: 800 }}>
              ✅ YOU ARE HERE: “HOW TO BUY A CAR” SECTION IS RENDERING
            </div>
            <div className="muted">
              If you can see this box, deployment is correct. We will remove this marker next.
            </div>
          </div>
        </div>

        <div className="split">
          <div className="item">
            <h3 className="itemTitle">1) Know your numbers first</h3>
            <p className="itemBody">
              Before you shop, get clear on budget, down payment, and the monthly payment you can actually carry.
            </p>
          </div>

          <div className="item">
            <h3 className="itemTitle">2) Get positioned for approval</h3>
            <p className="itemBody">
              Lenders look for patterns. Income, stability, and a few key signals determine whether you get “yes” or “no.”
            </p>
          </div>

          <div className="item">
            <h3 className="itemTitle">3) Shop the right car the right way</h3>
            <p className="itemBody">
              Vehicle choice affects approval. Price, mileage, and structure matter more than most people realize.
            </p>
          </div>

          <div className="item">
            <h3 className="itemTitle">4) Make the move that protects you</h3>
            <p className="itemBody">
              Terms and structure decide your future. You want a deal you can live with—without getting trapped.
            </p>
          </div>
        </div>

        <div className="buttonRow" style={{ marginTop: 14 }}>
          <a className="btn btnPrimary" href="#get-started">
            Help me with my next step
          </a>
          <a className="btn" href="#faq">
            Questions first
          </a>
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

      <Section id="faq" title="FAQ" desc="Quick answers. Clear expectations.">
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
