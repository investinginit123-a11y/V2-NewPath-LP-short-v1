// app/buy-your-vehicle/page.tsx

import Section from "../../components/Section";

export default function BuyYourVehicleV2Page() {
  const BUILD_STAMP = "BUY-VEHICLE-V2-ROUTE-LIVE";

  return (
    <main>
      <style>{`
        /* Big Cipher conversion moment sizing (bottom section only) */
        #cipher .cipherBigWrap{
          display: grid;
          gap: 14px;
          align-items: center;
          margin-bottom: 12px;
        }
        #cipher .cipherBigEmblem{
          width: min(420px, 92vw);
          height: auto;
          display: block;
          object-fit: contain;
          margin: 0 auto;
        }
        #cipher .cipherBigTitle{
          font-size: clamp(28px, 4.2vw, 44px);
          line-height: 1.08;
          letter-spacing: -0.02em;
          margin: 0;
          font-weight: 950;
          text-align: center;
        }
        #cipher .cipherBigSub{
          margin: 0;
          max-width: 820px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          opacity: 0.86;
        }
        @media (min-width: 920px){
          #cipher .cipherBigWrap{
            grid-template-columns: 420px 1fr;
            align-items: center;
            gap: 18px;
          }
          #cipher .cipherBigTitle,
          #cipher .cipherBigSub{
            text-align: left;
            margin-left: 0;
            margin-right: 0;
          }
          #cipher .cipherBigEmblem{
            margin: 0;
          }
        }
      `}</style>

      {/* BAR (CANON: DO NOT REMOVE) */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 999,
          background: "#0b0b0f",
          color: "#ffffff",
          padding: "10px 14px",
          fontWeight: 900,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          textAlign: "center",
          borderBottom: "3px solid var(--accent)",
        }}
      >
        {BUILD_STAMP}
      </div>

      <header className="hero">
        <div className="container">
          <div className="nav">
            <div className="brand" style={{ gap: 12 }}>
              <img
                src="/brand/newpath-auto-finance.png"
                alt="New Path Auto Finance"
                style={{
                  width: 180,
                  height: 180,
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
            <div className="badge">How to buy the right way • V2</div>
          </div>

          <div className="gridHero" style={{ gridTemplateColumns: "1fr" }}>
            <div className="card">
              <div className="cardInner">
                <h1 className="h1" style={{ marginBottom: 10 }}>
                  How to buy your next vehicle{" "}
                  <span style={{ color: "var(--accent)" }}>the right way</span>.
                </h1>

                <p className="sub" style={{ maxWidth: 860 }}>
                  Four moves—written for real life. If you’re not “there yet” with your score, income, or history,
                  you’re not alone. That’s exactly where the BALANCE Cipher + Co-Pilot helps: it turns this into one
                  clear next step.
                </p>

                <div className="pills">
                  <div className="pill">No noise</div>
                  <div className="pill">No 30-step checklist</div>
                  <div className="pill">One clean move</div>
                </div>

                <div className="buttonRow" style={{ marginTop: 14, alignItems: "center", flexWrap: "wrap" }}>
                  <a className="btn btnPrimary" href="#steps">
                    Start the 4 steps →
                  </a>

                  {/* CTA with inline cipher pill INSIDE the button (aligned, not floating) */}
                  <a
                    className="btn"
                    href="#cipher"
                    style={{ display: "inline-flex", alignItems: "center", gap: 10 }}
                  >
                    <span>Where the Cipher fits →</span>

                    <span
                      aria-label="AI guided by the BALANCE Cipher"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "6px 10px",
                        borderRadius: 999,
                        border: "1px solid rgba(0,0,0,0.12)",
                        background: "#ffffff",
                        boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <span
                        style={{
                          fontWeight: 900,
                          fontSize: 11,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          opacity: 0.82,
                        }}
                      >
                        AI guided by
                      </span>

                      <span
                        aria-hidden="true"
                        style={{
                          width: 8,
                          height: 28,
                          borderRadius: 999,
                          background: "var(--accent)",
                          opacity: 0.14,
                          flex: "0 0 auto",
                        }}
                      />

                      <img
                        src="/brand/balance-cipher-emblem.png"
                        alt="BALANCE Cipher emblem"
                        style={{
                          height: 28,
                          width: "auto",
                          display: "block",
                          objectFit: "contain",
                          background: "transparent",
                        }}
                      />
                    </span>
                  </a>
                </div>

                <div className="muted" style={{ fontSize: 12, marginTop: 10 }}>
                  General education only. The point is clarity before you shop, negotiate, or sign.
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Section id="steps" title="The 4 moves" desc="Same flow as the best guides—just cleaner.">
        <div className="card">
          <div className="cardInner">
            <div style={{ display: "grid", gap: 10 }}>
              <a className="btn" href="#step-1">1) Check your credit →</a>
              <a className="btn" href="#step-2">2) Know what you can afford →</a>
              <a className="btn" href="#step-3">3) Get positioned before you shop →</a>
              <a className="btn" href="#step-4">4) Apply the right way →</a>
            </div>

            <div className="muted" style={{ fontSize: 12, marginTop: 10 }}>
              If you only do one thing today: do Step 1 and Step 2. That alone prevents most bad deals.
            </div>
          </div>
        </div>
      </Section>

      <Section id="step-1" title="1) Check your credit" desc="Know where you stand before you shop.">
        <div className="card">
          <div className="cardInner">
            <div className="split">
              <div className="item">
                <h3 className="itemTitle">What this means</h3>
                <p className="itemBody">
                  Lenders look at your credit history and your income to decide whether to finance you—and to price your
                  interest rate.
                </p>
              </div>
              <div className="item">
                <h3 className="itemTitle">What this does not mean</h3>
                <p className="itemBody">
                  It does not mean you’re “stuck.” It means you need a clear plan and the right next move.
                </p>
              </div>
            </div>

            <div className="item" style={{ marginTop: 12 }}>
              <h3 className="itemTitle">If this feels like a lot</h3>
              <p className="itemBody">
                If your score isn’t where you want it yet, the BALANCE Cipher helps you see why outcomes repeat—then
                the Co-Pilot turns it into one clean step you can execute next.
              </p>
            </div>

            <div className="buttonRow" style={{ marginTop: 12 }}>
              <a className="btn" href="#steps">← Back to index</a>
              <a className="btn btnPrimary" href="#step-2">Next: affordability →</a>
            </div>
          </div>
        </div>
      </Section>

      <Section id="step-2" title="2) Know what you can afford" desc="Think bigger than just the monthly payment.">
        <div className="card">
          <div className="cardInner">
            <div className="split">
              <div className="item">
                <h3 className="itemTitle">What this means</h3>
                <p className="itemBody">
                  Budget for the full cost of ownership: payment, insurance, taxes/fees, gas, and maintenance—plus a
                  realistic monthly comfort zone.
                </p>
              </div>
              <div className="item">
                <h3 className="itemTitle">What this does not mean</h3>
                <p className="itemBody">
                  It does not mean “stretch to the max.” The goal is stability—not a payment that traps you.
                </p>
              </div>
            </div>

            <div className="item" style={{ marginTop: 12 }}>
              <h3 className="itemTitle">If this feels like a lot</h3>
              <p className="itemBody">
                The Cipher simplifies it into one decision: adjust the target vehicle, adjust the down payment, or
                adjust the timing—based on what’s real today.
              </p>
            </div>

            <div className="buttonRow" style={{ marginTop: 12 }}>
              <a className="btn" href="#step-1">← Back</a>
              <a className="btn btnPrimary" href="#step-3">Next: get positioned →</a>
            </div>
          </div>
        </div>
      </Section>

      <Section id="step-3" title="3) Get positioned before you shop" desc="Don’t negotiate blind.">
        <div className="card">
          <div className="cardInner">
            <div className="split">
              <div className="item">
                <h3 className="itemTitle">What this means</h3>
                <p className="itemBody">
                  Pre-qualification can help you estimate likely rates and terms before you commit—so you know your lane
                  and you shop smarter.
                </p>
              </div>
              <div className="item">
                <h3 className="itemTitle">What this does not mean</h3>
                <p className="itemBody">
                  It does not mean you’re locked into a loan. It’s a visibility move—so you don’t shop in the dark.
                </p>
              </div>
            </div>

            <div className="item" style={{ marginTop: 12 }}>
              <h3 className="itemTitle">If this feels like a lot</h3>
              <p className="itemBody">
                Concerned about timing, inquiries, or “doing it wrong”? The Co-Pilot uses the Cipher to choose the
                cleanest route for your situation.
              </p>
            </div>

            <div className="buttonRow" style={{ marginTop: 12 }}>
              <a className="btn" href="#step-2">← Back</a>
              <a className="btn btnPrimary" href="#step-4">Next: apply →</a>
            </div>
          </div>
        </div>
      </Section>

      <Section id="step-4" title="4) Apply the right way" desc="Clarity first. Then you sign.">
        <div className="card">
          <div className="cardInner">
            <div className="split">
              <div className="item">
                <h3 className="itemTitle">What this means</h3>
                <p className="itemBody">
                  Applying can trigger a credit inquiry. The goal is to apply with clean timing, clean numbers, and a
                  clear understanding of total cost.
                </p>
              </div>
              <div className="item">
                <h3 className="itemTitle">What you may need</h3>
                <p className="itemBody">
                  Basic ID info, employment/income, address history, and details about the vehicle and down payment.
                </p>
              </div>
            </div>

            <div className="item" style={{ marginTop: 12 }}>
              <h3 className="itemTitle">Terms to know (simple)</h3>
              <p className="itemBody">
                APR (rate), down payment, loan term (months), and total cost (what you pay overall). Don’t sign until
                those are clear.
              </p>
            </div>

            <div className="item" style={{ marginTop: 12 }}>
              <h3 className="itemTitle">After you buy</h3>
              <p className="itemBody">
                Set payments on autopay if possible. One missed payment can do more damage than people realize.
              </p>
            </div>

            <div className="buttonRow" style={{ marginTop: 12 }}>
              <a className="btn" href="#step-3">← Back</a>
              <a className="btn btnPrimary" href="#cipher">Finish: where the Cipher fits →</a>
            </div>
          </div>
        </div>
      </Section>

      <Section id="cipher" title="This is where BALANCE Cipher helps" desc="Because doing all of this alone can be a lot.">
        <div className="card">
          <div className="cardInner">
            {/* BIG CIPHER MOMENT (conversion focus) */}
            <div className="cipherBigWrap">
              <img
                className="cipherBigEmblem"
                src="/brand/balance-cipher-emblem.png"
                alt="BALANCE Cipher emblem"
              />

              <div style={{ display: "grid", gap: 8 }}>
                <h2 className="cipherBigTitle">
                  This is where the <span style={{ color: "var(--accent)" }}>BALANCE Cipher</span> becomes the solution.
                </h2>
                <p className="cipherBigSub">
                  You don’t need more steps. You need one clear next move—based on what’s real today, translated by the Co-Pilot.
                </p>
              </div>
            </div>

            <div className="split">
              <div className="item">
                <h3 className="itemTitle">What most people feel</h3>
                <p className="itemBody">
                  These steps are simple on paper. But if your credit, income, or history isn’t aligned, it becomes
                  confusing fast—and bad decisions happen under pressure.
                </p>
              </div>
              <div className="item">
                <h3 className="itemTitle">What the Cipher + Co-Pilot does</h3>
                <p className="itemBody">
                  It helps you see what’s real, identify the blocker, and choose one clean move next—so you buy with
                  clarity instead of guessing.
                </p>
              </div>
            </div>

            <div className="buttonRow" style={{ marginTop: 12 }}>
              <a
                className="btn btnPrimary"
                href="https://balancecipher-v2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open my door →
              </a>
              <a className="btn" href="/">Back to NewPath home →</a>
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
