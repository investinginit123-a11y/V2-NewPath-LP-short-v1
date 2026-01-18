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
                  height: 56,              // BIGGER LOGO (desktop)
                  width: "auto",
                  display: "block",
                  maxWidth: "100%",
                  objectFit: "contain"
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
