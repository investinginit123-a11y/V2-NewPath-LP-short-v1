// app/page.tsx

import Section from "../components/Section";

export default function Page() {
  return (
    <main>
      <style>{`
        html, body { background: #ffffff !important; }

        /* Global readability polish */
        .h1 { letter-spacing: -0.02em; }
        .sub { line-height: 1.45; }
        strong { font-weight: 850; color: rgba(15,23,42,0.92); }

        /* HERO: keep pills + cipher pill on the same wrapped row */
        .heroPillsRow {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
        }

        /* Cipher pill */
        .cipherPill {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.12);
          background: #ffffff;
          box-shadow: 0 12px 28px rgba(0,0,0,0.06);
          white-space: nowrap;
        }
        .cipherPillText {
          font-weight: 900;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.82;
        }
        .cipherPillAccent {
          width: 10px;
          height: 38px;
          border-radius: 999px;
          background: var(--accent);
          opacity: 0.14;
          flex: 0 0 auto;
        }
        .cipherPillEmblem {
          height: 38px;
          width: auto;
          display: block;
          object-fit: contain;
          background: transparent !important;
          border: none !important;
          border-radius: 0 !important;
          padding: 0 !important;
          margin: 0 !important;
        }

        /* TWO DOORS */
        #doors .sectionTitle {
          font-size: clamp(34px, 5vw, 52px);
          line-height: 1.05;
          letter-spacing: -0.02em;
        }
        #doors .sectionDesc {
          font-size: 16px;
          max-width: 780px;
          line-height: 1.55;
        }

        .doorGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        @media (max-width: 920px) {
          .doorGrid { grid-template-columns: 1fr; }
        }

        .doorCard {
          border: 1px solid rgba(0,0,0,0.10);
          border-radius: 22px;
          background: #ffffff;
          box-shadow: 0 18px 44px rgba(0,0,0,0.08);
          overflow: hidden;
        }
        .doorInner {
          padding: 22px 20px;
          display: grid;
          gap: 10px;
        }
        .doorKickerRow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .doorKicker {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 7px 11px;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(0,0,0,0.02);
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 11px;
          color: rgba(0,0,0,0.70);
          white-space: nowrap;
        }
        .doorDot {
          width: 10px;
          height: 28px;
          border-radius: 999px;
          background: var(--accent);
          opacity: 0.16;
        }
        .doorTitle {
          margin: 0;
          font-size: 20px;
          line-height: 1.15;
          letter-spacing: -0.01em;
          font-weight: 950;
          color: rgba(15,23,42,0.92);
        }
        .doorBody {
          margin: 0;
          font-size: 15px;
          line-height: 1.55;
          color: rgba(15,23,42,0.78);
        }

        /* Minimal bullets — no “menu” feel */
        .miniList {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 8px;
        }
        .miniItem {
          display: grid;
          grid-template-columns: 16px 1fr;
          gap: 10px;
          align-items: start;
          font-size: 14px;
          line-height: 1.5;
          color: rgba(15,23,42,0.70);
          font-weight: 650;
        }
        .miniMark {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          margin-top: 6px;
          background: var(--accent);
          opacity: 0.20;
        }

        /* CTA row — ONLY TWO CTAs on whole page */
        .ctaRow {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
          margin-top: 4px;
        }
        .btnPrimaryTight {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          padding: 0 22px;
          border-radius: 999px;
          background: var(--accent);
          color: #fff;
          font-weight: 950;
          letter-spacing: 0.01em;
          text-decoration: none;
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.06);
          white-space: nowrap;
        }
        .btnGhostTight {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          padding: 0 18px;
          border-radius: 999px;
          background: #ffffff;
          color: rgba(15,23,42,0.92);
          font-weight: 900;
          text-decoration: none;
          border: 1px solid rgba(0,0,0,0.14);
          box-shadow: 0 10px 20px rgba(0,0,0,0.06);
          white-space: nowrap;
        }

        /* “Simple / clear” strip */
        .strip {
          border: 1px solid rgba(0,0,0,0.10);
          border-radius: 22px;
          background: rgba(0,0,0,0.02);
          padding: 16px 16px;
          display: grid;
          gap: 8px;
        }
        .stripTitle {
          margin: 0;
          font-weight: 950;
          letter-spacing: -0.01em;
          font-size: 16px;
          color: rgba(15,23,42,0.92);
        }
        .stripBody {
          margin: 0;
          font-size: 14px;
          line-height: 1.55;
          color: rgba(15,23,42,0.75);
        }
      `}</style>

      <header className="hero">
        <div className="container">
          <div className="nav">
            <div className="brand" style={{ gap: 12 }}>
              <img
                src="/brand/newpath-auto-finance.png"
                alt="New Path Auto Finance"
                style={{ width: 288, height: 288, objectFit: "contain", display: "block" }}
              />
            </div>
            <div className="badge">Simple. Clear. Actionable.</div>
          </div>

          <div className="gridHero">
            <div className="card">
              <div className="cardInner">
                <h1 className="h1">
                  Create a New Path <span style={{ color: "var(--accent)" }}>forward</span>.
                </h1>

                <p className="sub">
                  Two doors. One clear next step—powered by the <strong>BALANCE Cipher</strong> and guided by the{" "}
                  <strong>Co-Pilot</strong>.
                </p>

                <div className="heroPillsRow">
                  <div className="pills">
                    <div className="pill">No pressure</div>
                    <div className="pill">No confusion</div>
                    <div className="pill">Real next step</div>
                  </div>

                  <span className="cipherPill" aria-label="AI guided by the BALANCE Cipher">
                    <span className="cipherPillText">AI guided by</span>
                    <span className="cipherPillAccent" aria-hidden="true" />
                    <img
                      className="cipherPillEmblem"
                      src="/brand/balance-cipher-emblem.png"
                      alt="BALANCE Cipher emblem"
                    />
                  </span>
                </div>

                {/* ONLY TWO CTAs — SITE WIDE */}
                <div className="ctaRow">
                  <a
                    className="btnPrimaryTight"
                    href="https://capture-of-application.vercel.app/apply?utm_source=newpath-landing&utm_medium=hero&utm_campaign=two-door"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start my application →
                  </a>

                  {/* Door 2 destination */}
                  <a
                    className="btnGhostTight"
                    href="https://app.balancecipher.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open the Cipher →
                  </a>
                </div>

                <div className="muted" style={{ fontSize: 12, marginTop: 10 }}>
                  Door 1 is <strong>today</strong>. Door 2 is <strong>tomorrow</strong>. Choose once—move with clarity.
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Section
        id="doors"
        title="Choose your door"
        desc="Door 1 is for getting approved today. Door 2 is for understanding the pattern and building your next move."
      >
        <div className="doorGrid">
          {/* DOOR 1 — TODAY */}
          <div className="doorCard" id="door-1">
            <div className="doorInner">
              <div className="doorKickerRow">
                <span className="doorKicker">Door 1</span>
                <span className="doorDot" aria-hidden="true" />
              </div>

              <h3 className="doorTitle">Today: Get approved the right way</h3>

              <p className="doorBody">
                If you’re ready to move now, start the application. We route you into a clean approval path—without
                overwhelm.
              </p>

              <ul className="miniList" aria-label="Door 1 points">
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span>Start the application in one step.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span>We focus on what lenders care about today.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span>Simple path. Clear next move.</span>
                </li>
              </ul>

              <div className="muted" style={{ fontSize: 12 }}>
                This is the direct “today” door. No extra choices.
              </div>
            </div>
          </div>

          {/* DOOR 2 — TOMORROW */}
          <div className="doorCard" id="door-2">
            <div className="doorInner">
              <div className="doorKickerRow">
                <span className="doorKicker">Door 2</span>
                <span className="doorDot" aria-hidden="true" />
              </div>

              <h3 className="doorTitle">Tomorrow: The BALANCE Cipher (what it is—and what it isn’t)</h3>

              <p className="doorBody">
                The Cipher isn’t a checklist. It’s a map. It shows why outcomes repeat—and the Co-Pilot translates that
                map into <strong>one clear next step</strong>.
              </p>

              <ul className="miniList" aria-label="Door 2 points">
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span>Understand the pattern behind your results.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span>Learn the next move that actually changes your outcome.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span>Auto becomes the on-ramp to long-term stability—and home readiness.</span>
                </li>
              </ul>

              <div className="strip">
                <p className="stripTitle">What it isn’t</p>
                <p className="stripBody">
                  Not shame. Not lectures. Not “do 20 things.” Just clarity—then one move at a time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ONE clean reminder (no extra CTA buttons here) */}
        <div className="muted" style={{ fontSize: 12, marginTop: 12 }}>
          If you only do one thing: Door 1 is your “today” move. Door 2 is your “map” when you want to build strength.
        </div>
      </Section>

      {/* KEEP THE CIPHER SECTION — but no extra buttons */}
      <Section id="cipher" title="The BALANCE Cipher" desc="It’s not a checklist. It’s a map.">
        <div style={{ display: "grid", gap: 12, alignItems: "center" }}>
          <img
            src="/brand/balance-cipher-emblem.png"
            alt="BALANCE Cipher emblem"
            style={{ width: "min(420px, 92vw)", height: "auto", display: "block", margin: "6px auto 0" }}
          />

          <h3 style={{ margin: 0, fontSize: "clamp(26px, 4vw, 36px)", lineHeight: 1.12, letterSpacing: "-0.02em" }}>
            Open your new door—<span style={{ color: "var(--accent)" }}>with the Cipher</span>.
          </h3>

          <p style={{ margin: 0, maxWidth: 760, lineHeight: 1.6, color: "rgba(15,23,42,0.78)" }}>
            Most people don’t need more information. They need to <strong>see what’s real</strong>—then take{" "}
            <strong>one clean next step</strong>. The Cipher reveals the pattern, and the Co-Pilot translates it into
            something <strong>simple</strong> and <strong>doable</strong>.
          </p>

          {/* Door 2 destination (UPDATED) */}
          <div style={{ display: "flex", justifyContent: "flex-start", marginTop: 8 }}>
            <a
              className="btnPrimaryTight"
              href="https://app.balancecipher.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the Cipher →
            </a>
          </div>

          <div className="muted" style={{ fontSize: 12 }}>
            Quiet power. <strong>Clear direction.</strong> One move at a time.
          </div>
        </div>
      </Section>
    </main>
  );
}
