// app/buy-your-vehicle/page.tsx

import Section from "../../components/Section";

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
                  width: 220,
                  height: 220,
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>

            <div className="badge">Buy the right way.</div>
          </div>

          <div className="gridHero" style={{ gridTemplateColumns: "1fr" }}>
            <div className="card">
              <div className="cardInner">
                <h1 className="h1" style={{ marginBottom: 10 }}>
                  How to buy your next vehicle{" "}
                  <span style={{ color: "var(--accent)" }}>(the right way)</span>
                </h1>

                <p className="sub" style={{ maxWidth: 820 }}>
                  Short version. No noise. Four moves that put you in a stronger position before you shop, negotiate,
                  or sign anything.
                </p>

                <div className="pills">
                  <div className="pill">Simple steps</div>
                  <div className="pill">Avoid common mistakes</div>
                  <div className="pill">One clear next move</div>
                </div>

                <div className="buttonRow" style={{ marginTop: 14 }}>
                  <a className="btn btnPrimary" href="/#pillars">
                    Back to doors →
                  </a>
                  <a className="btn" href="#cipher">
                    Where BALANCE Cipher fits →
                  </a>
                </div>

                <div className="muted" style={{ fontSize: 12, marginTop: 10 }}>
                  Note: This is general education—not financial advice. We’ll help you choose the right next step for
                  your situation.
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* STEP 1 */}
      <Section
        id="step-1"
        title="1) Check your credit"
        desc="Know where you stand before you shop."
      >
        <div className="card">
          <div className="cardInner">
            <div className="split">
              <div className="item">
                <h3 className="itemTitle">What this means</h3>
                <p className="itemBody">
                  Lenders look at your credit history and income to decide whether to finance you—and at what interest
                  rate.
                </p>
              </div>

              <div className="item">
                <h3 className="itemTitle">What this does not mean</h3>
                <p className="itemBody">
                  It does not mean you’re “stuck.” It means you need the right plan and the right next move.
                </p>
              </div>
            </div>

            <div className="item" style={{ marginTop: 12 }}>
              <h3 className="itemTitle">If this feels like a lot</h3>
              <p className="itemBody">
                If your score isn’t where you want it yet, the BALANCE Cipher helps you see the pattern and pick one
                clean move that improves your position.
              </p>
            </div>

            <div className="buttonRow" style={{ marginTop: 12 }}>
              <a className="btn btnPrimary" href="/#get-started">
                Open my door →
              </a>
              <a className="btn" href="#step-2">
                Next step →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* STEP 2 */}
      <Section
        id="step-2"
        title="2) Determine what you can afford"
        desc="Think bigger than the monthly payment."
      >
        <div className="card">
          <div className="cardInner">
            <div className="split">
              <div className="item">
                <h3 className="itemTitle">What this means</h3>
                <p className="itemBody">
                  Budget for the full cost: payment, insurance, taxes/fees, gas, maintenance—and your real monthly
                  comfort zone.
                </p>
              </div>

              <div className="item">
                <h3 className="itemTitle">What this does not mean</h3>
                <p className="itemBody">
                  It does not mean “stretch to the max.” The goal is stability, not a payment that traps you.
                </p>
              </div>
            </div>

            <div className="item" style={{ marginTop: 12 }}>
              <h3 className="itemTitle">If this feels like a lot</h3>
              <p className="itemBody">
                The Cipher helps simplify the math into one move: adjust the target, adjust the down payment, or adjust
                the timing—based on what’s real today.
              </p>
            </div>

            <div className="buttonRow" style={{ marginTop: 12 }}>
              <a className="btn" href="#step-1">
                ← Back
              </a>
              <a className="btn btnPrimary" href="#step-3">
                Next step →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* STEP 3 */}
      <Section
        id="step-3"
        title="3) Get positioned before you shop"
        desc="Pre-qualify or get a clear view of your lane before you commit."
      >
        <div className="card">
          <div className="cardInner">
            <div className="split">
              <div className="item">
                <h3 className="itemTitle">What this means</h3>
                <p className="itemBody">
                  Pre-qualification can help you estimate likely terms and avoid guessing. It can also strengthen your
                  negotiating position.
                </p>
              </div>

              <div className="item">
                <h3 className="itemTitle">What this does not mean</h3>
                <p className="itemBody">
                  It does not mean you’re locked in. It’s a visibility step—so you don’t shop blind.
                </p>
              </div>
            </div>

            <div className="item" style={{ marginTop: 12 }}>
              <h3 className="itemTitle">If this feels like a lot</h3>
              <p className="itemBody">
                If you’re worried about inquiries, timing, or “doing it wrong,” the Co-Pilot uses the Cipher to pick the
                cleanest route for your situation.
              </p>
            </div>

            <div className="buttonRow" style={{ marginTop: 12 }}>
              <a className="btn" href="#step-2">
                ← Back
              </a>
              <a className="btn btnPrimary" href="#step-4">
                Next step →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* STEP 4 */}
      <Section
        id="step-4"
        title="4) Apply for financing (the right way)"
        desc="Understand what’s being evaluated and what you’ll need."
      >
        <div className="card">
          <div className="cardInner">
            <div className="split">
              <div className="item">
                <h3 className="itemTitle">What this means</h3>
                <p className="itemBody">
                  Applying can trigger a credit inquiry. The goal is to apply with clarity—right timing, right terms,
                  right total cost.
                </p>
              </div>

              <div className="item">
                <h3 className="itemTitle">What you may need</h3>
                <p className="itemBody">
                  Basic ID info, employment/income, current address history, and details about the vehicle/down payment.
                </p>
              </div>
            </div>

            <div className="item" style={{ marginTop: 12 }}>
              <h3 className="itemTitle">Quick terms to know</h3>
              <p className="itemBody">
                APR (rate), down payment, loan term (months), and total cost (what you pay overall). Don’t sign until
                these are clear.
              </p>
            </div>

            <div className="item" style={{ marginTop: 12 }}>
              <h3 className="itemTitle">One last reality check</h3>
              <p className="itemBody">
                Set payments on autopay if possible. One missed payment can do more damage than people realize.
              </p>
            </div>

            <div className="buttonRow" style={{ marginTop: 12 }}>
              <a className="btn" href="#step-3">
                ← Back
              </a>
              <a className="btn btnPrimary" href="/#get-started">
                Open my door →
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* BALANCE CIPHER CLOSE (always present) */}
      <Section
        id="cipher"
        title="Where the BALANCE Cipher fits"
        desc="Because doing all of this alone can be a lot."
      >
        <div className="card">
          <div className="cardInner">
            <div className="split">
              <div className="item">
                <h3 className="itemTitle">The problem</h3>
                <p className="itemBody">
                  These steps are simple on paper—but if your score, income, or history isn’t where it needs to be yet,
                  it can feel complicated fast.
                </p>
              </div>

              <div className="item">
                <h3 className="itemTitle">What the Cipher does</h3>
                <p className="itemBody">
                  It helps you see what’s real, identify the blocker, and choose one clean next move—guided by the
                  Co-Pilot.
                </p>
              </div>
            </div>

            <div className="buttonRow" style={{ marginTop: 12 }}>
              <a className="btn btnPrimary" href="/#pillars">
                Choose a door →
              </a>
              <a className="btn" href="/#get-started">
                Open my door →
              </a>
            </div>

            <div className="muted" style={{ fontSize: 12, marginTop: 10 }}>
              Quiet power. Clear direction. One move at a time.
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}

