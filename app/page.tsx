// app/page.tsx

import Section from "../components/Section";

export default function Page() {
  return (
    <main>
      <style>{`
        html, body { background: #ffffff !important; }

        :root{
          --np-ink: rgba(15,23,42,0.92);
          --np-muted: rgba(15,23,42,0.74);
          --np-border: rgba(0,0,0,0.10);
          --np-shadow: 0 22px 60px rgba(0,0,0,0.10);
          --np-shadow-soft: 0 16px 42px rgba(0,0,0,0.08);
          --np-radius: 26px;
          --np-pill: 999px;

          /* Accent lanes */
          --lane-red: var(--accent); /* uses your existing accent (New Path red) */
          --lane-teal: #19d3c5;       /* Cipher teal glow lane */
          --lane-teal-soft: rgba(25,211,197,0.22);
          --lane-red-soft: rgba(220,38,38,0.18);
        }

        strong { font-weight: 900; color: var(--np-ink); }

        /* HERO STAGE (decision moment) */
        .heroStage {
          position: relative;
          overflow: hidden;
          padding-bottom: 22px;
          background:
            radial-gradient(900px 420px at 18% 22%, rgba(0,0,0,0.04), transparent 70%),
            radial-gradient(800px 460px at 70% 25%, rgba(0,0,0,0.03), transparent 70%),
            linear-gradient(180deg, rgba(0,0,0,0.02), transparent 52%);
        }
        .heroStage::before{
          content:"";
          position:absolute;
          inset:-2px;
          background:
            radial-gradient(720px 360px at 22% 36%, var(--lane-red-soft), transparent 68%),
            radial-gradient(820px 420px at 70% 38%, var(--lane-teal-soft), transparent 70%);
          filter: blur(18px);
          opacity: 0.95;
          pointer-events:none;
        }
        .heroStage::after{
          content:"";
          position:absolute;
          inset:0;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.86), rgba(255,255,255,0.80)),
            radial-gradient(1200px 520px at 50% 0%, rgba(0,0,0,0.04), transparent 70%);
          pointer-events:none;
        }

        .heroInner {
          position: relative;
          z-index: 2;
        }

        /* Bring back contrast + energy */
        .h1 { 
          letter-spacing: -0.03em;
          color: rgba(0,0,0,0.92);
          font-weight: 950;
        }
        .sub { 
          line-height: 1.45;
          color: rgba(15,23,42,0.82);
          font-size: 16px;
          max-width: 760px;
        }

        /* HERO CARD */
        .heroCard {
          border: 1px solid var(--np-border);
          border-radius: var(--np-radius);
          background: rgba(255,255,255,0.92);
          box-shadow: var(--np-shadow);
          backdrop-filter: blur(8px);
        }
        .heroCardInner{
          padding: 22px 20px;
          display:grid;
          gap: 12px;
        }

        /* Trust strip */
        .trustStrip{
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-top: 10px;
        }
        .trustBadge{
          display:inline-flex;
          align-items:center;
          gap:10px;
          padding: 10px 12px;
          border-radius: var(--np-pill);
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(255,255,255,0.92);
          box-shadow: 0 12px 26px rgba(0,0,0,0.06);
          font-weight: 850;
          font-size: 12px;
          color: rgba(15,23,42,0.78);
          white-space: nowrap;
        }
        .trustDot{
          width: 8px;
          height: 8px;
          border-radius: var(--np-pill);
          background: rgba(0,0,0,0.24);
          opacity: 0.6;
        }

        /* Cipher pill (kept, but upgraded) */
        .cipherPill {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: var(--np-pill);
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.92);
          box-shadow: 0 12px 28px rgba(0,0,0,0.06);
          white-space: nowrap;
        }
        .cipherPillText {
          font-weight: 950;
          font-size: 12px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.82;
        }
        .cipherPillAccent {
          width: 10px;
          height: 38px;
          border-radius: var(--np-pill);
          background: var(--lane-teal);
          opacity: 0.18;
          flex: 0 0 auto;
          box-shadow: 0 0 24px rgba(25,211,197,0.24);
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

        .heroRow {
          display:flex;
          flex-wrap:wrap;
          align-items:center;
          gap: 10px;
          margin-top: 6px;
        }

        /* TWO DOORS */
        #doors .sectionTitle{
          font-size: clamp(34px, 5vw, 54px);
          line-height: 1.04;
          letter-spacing: -0.03em;
        }
        #doors .sectionDesc{
          font-size: 16px;
          max-width: 820px;
          line-height: 1.55;
        }

        /* Stack doors vertically (premium + clear) */
        .doorStack{
          display:grid;
          gap: 18px;
        }

        .doorCard{
          position: relative;
          border: 1px solid rgba(0,0,0,0.10);
          border-radius: var(--np-radius);
          background: rgba(255,255,255,0.94);
          box-shadow: var(--np-shadow-soft);
          overflow:hidden;
          transform: translateZ(0);
        }

        /* Visual “door top rail” */
        .doorRail{
          height: 10px;
          width: 100%;
          background: linear-gradient(90deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00));
        }
        .doorRail.red{
          background: linear-gradient(90deg, rgba(220,38,38,0.22), rgba(220,38,38,0.04), transparent);
        }
        .doorRail.teal{
          background: linear-gradient(90deg, rgba(25,211,197,0.22), rgba(25,211,197,0.06), transparent);
        }

        .doorInner{
          padding: 22px 20px 20px;
          display:grid;
          gap: 12px;
        }

        .doorHeader{
          display:flex;
          flex-wrap:wrap;
          align-items:center;
          justify-content: space-between;
          gap: 12px;
        }

        .doorKicker{
          display:inline-flex;
          align-items:center;
          gap: 10px;
        }

        .doorPill{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 8px 12px;
          border-radius: var(--np-pill);
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(0,0,0,0.02);
          font-weight: 950;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 11px;
          color: rgba(15,23,42,0.72);
          white-space: nowrap;
        }

        .laneTag{
          font-size: 12px;
          font-weight: 900;
          color: rgba(15,23,42,0.62);
          white-space: nowrap;
        }

        .doorTitle{
          margin: 0;
          font-size: 22px;
          line-height: 1.16;
          letter-spacing: -0.02em;
          font-weight: 950;
          color: var(--np-ink);
        }
        .doorBody{
          margin: 0;
          font-size: 16px;
          line-height: 1.60;
          color: rgba(15,23,42,0.78);
          max-width: 900px;
        }

        /* Door “visual block” */
        .doorVisual{
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(0,0,0,0.02);
          border-radius: 18px;
          padding: 14px 14px;
          display:flex;
          align-items:center;
          justify-content: space-between;
          gap: 14px;
        }
        .visualLeft{
          display:flex;
          align-items:center;
          gap: 12px;
          min-width: 0;
        }
        .visualIcon{
          width: 44px;
          height: 44px;
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(255,255,255,0.88);
          box-shadow: 0 10px 24px rgba(0,0,0,0.06);
          position: relative;
          flex: 0 0 auto;
        }

        /* Simple icon shapes (no extra deps) */
        .iconRoad::before{
          content:"";
          position:absolute;
          left: 12px;
          right: 12px;
          top: 9px;
          bottom: 9px;
          border-radius: 10px;
          background: linear-gradient(180deg, rgba(220,38,38,0.22), rgba(220,38,38,0.06));
          border: 1px solid rgba(220,38,38,0.18);
        }
        .iconRoad::after{
          content:"";
          position:absolute;
          left: 21px;
          top: 14px;
          bottom: 14px;
          width: 2px;
          border-radius: 2px;
          background: rgba(220,38,38,0.40);
          opacity: 0.7;
        }

        .iconCipher::before{
          content:"";
          position:absolute;
          inset: 10px;
          border-radius: 999px;
          border: 2px solid rgba(25,211,197,0.38);
          box-shadow: 0 0 18px rgba(25,211,197,0.28);
        }
        .iconCipher::after{
          content:"";
          position:absolute;
          inset: 18px;
          border-radius: 999px;
          border: 1px solid rgba(25,211,197,0.22);
        }

        .visualText{
          display:grid;
          gap: 2px;
          min-width: 0;
        }
        .visualTitle{
          font-weight: 950;
          color: rgba(15,23,42,0.90);
          letter-spacing: -0.01em;
          font-size: 14px;
        }
        .visualSub{
          font-size: 13px;
          color: rgba(15,23,42,0.66);
          line-height: 1.35;
        }

        /* Bullets */
        .miniList{
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 10px;
        }
        .miniItem{
          display: grid;
          grid-template-columns: 16px 1fr;
          gap: 10px;
          align-items: start;
          font-size: 15px;
          line-height: 1.55;
          color: rgba(15,23,42,0.74);
          font-weight: 650;
        }
        .miniMark{
          width: 10px;
          height: 10px;
          border-radius: var(--np-pill);
          margin-top: 7px;
          background: rgba(0,0,0,0.22);
          opacity: 0.7;
        }
        .miniMark.red{ background: rgba(220,38,38,0.34); }
        .miniMark.teal{ background: rgba(25,211,197,0.34); }

        /* CTA pills INSIDE doors (ONLY 2 CTAs total on whole page) */
        .doorCtaRow{
          display:flex;
          flex-wrap:wrap;
          gap: 12px;
          align-items:center;
          margin-top: 4px;
        }
        .ctaPill{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          height: 52px;
          padding: 0 22px;
          border-radius: var(--np-pill);
          text-decoration:none;
          font-weight: 950;
          letter-spacing: 0.01em;
          border: 1px solid rgba(0,0,0,0.10);
          box-shadow: 0 14px 34px rgba(0,0,0,0.10);
          transition: transform .15s ease, box-shadow .15s ease, filter .15s ease;
          white-space: nowrap;
        }
        .ctaPill:active{ transform: translateY(1px) scale(0.99); }

        .ctaPill.red{
          background: var(--lane-red);
          color: #fff;
          border-color: rgba(0,0,0,0.06);
        }
        .ctaPill.red:hover{ filter: brightness(1.02); box-shadow: 0 18px 42px rgba(0,0,0,0.14); }

        .ctaPill.teal{
          background: rgba(11,11,15,0.94);
          color: #fff;
          border-color: rgba(25,211,197,0.30);
          box-shadow: 0 18px 46px rgba(0,0,0,0.14), 0 0 0 1px rgba(25,211,197,0.10) inset;
        }
        .ctaPill.teal:hover{
          box-shadow: 0 22px 54px rgba(0,0,0,0.16), 0 0 22px rgba(25,211,197,0.20);
          transform: translateY(-1px);
        }

        /* Integrated Cipher section */
        .cipherCard{
          border: 1px solid rgba(0,0,0,0.10);
          border-radius: var(--np-radius);
          background: rgba(255,255,255,0.94);
          box-shadow: var(--np-shadow-soft);
          overflow:hidden;
          position: relative;
        }
        .cipherGlow{
          position:absolute;
          inset:-40px;
          background: radial-gradient(520px 240px at 50% 22%, rgba(25,211,197,0.18), transparent 70%);
          filter: blur(10px);
          pointer-events:none;
        }
        .cipherInner{
          position:relative;
          padding: 22px 20px;
          display:grid;
          gap: 12px;
          align-items:center;
        }
        .cipherTitle{
          margin:0;
          font-size: clamp(26px, 4vw, 38px);
          line-height: 1.10;
          letter-spacing: -0.03em;
          color: rgba(0,0,0,0.92);
          font-weight: 950;
        }
        .cipherCopy{
          margin:0;
          max-width: 820px;
          line-height: 1.65;
          color: rgba(15,23,42,0.78);
          font-size: 16px;
        }
        .cipherBullets{
          margin: 0;
          padding: 0;
          list-style: none;
          display:grid;
          gap: 10px;
          max-width: 860px;
        }
        .cipherBullets li{
          display:grid;
          grid-template-columns: 16px 1fr;
          gap: 10px;
          align-items:start;
          font-size: 15px;
          line-height: 1.6;
          color: rgba(15,23,42,0.74);
          font-weight: 650;
        }
        .cipherBullets .bDot{
          width: 10px;
          height: 10px;
          border-radius: var(--np-pill);
          margin-top: 7px;
          background: rgba(25,211,197,0.34);
        }

        /* Keep your existing hero/nav layout classes from your CSS system.
           We only enhance, not replace, so Section + existing styles keep working. */
      `}</style>

      <header className="heroStage">
        <div className="heroInner">
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
                <div className="card heroCard">
                  <div className="cardInner heroCardInner">
                    <h1 className="h1">
                      Create a New Path <span style={{ color: "var(--accent)" }}>forward</span>.
                    </h1>

                    <p className="sub">
                      Two doors. One clear next step—powered by the <strong>BALANCE Cipher</strong> and guided by the{" "}
                      <strong>Co-Pilot</strong>.
                    </p>

                    <div className="heroRow">
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

                    {/* Trust strip (non-click) */}
                    <div className="trustStrip" aria-label="Trust badges">
                      <span className="trustBadge"><span className="trustDot" />No pressure</span>
                      <span className="trustBadge"><span className="trustDot" />Simple steps</span>
                      <span className="trustBadge"><span className="trustDot" />Real next move</span>
                      <span className="trustBadge"><span className="trustDot" />Clear direction</span>
                    </div>

                    <div className="muted" style={{ fontSize: 13, marginTop: 2, color: "rgba(15,23,42,0.70)" }}>
                      Door 1 is <strong>today</strong>. Door 2 is <strong>tomorrow</strong>. Scroll to choose.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </header>

      <Section
        id="doors"
        title="Choose your door"
        desc="Door 1 is for getting approved today. Door 2 is for understanding the pattern and building your next move."
      >
        <div className="doorStack">
          {/* DOOR 1 — TODAY (CTA #1) */}
          <div className="doorCard" id="door-1" aria-label="Door 1: Today">
            <div className="doorRail red" aria-hidden="true" />
            <div className="doorInner">
              <div className="doorHeader">
                <div className="doorKicker">
                  <span className="doorPill">Door 1</span>
                  <span className="laneTag">Today • Approval Path</span>
                </div>
              </div>

              <h3 className="doorTitle">Today: Get approved the right way</h3>

              <p className="doorBody">
                If you’re ready to move now, the application is your cleanest first step. We route you into a calm,
                lender-aligned path—without overwhelm.
              </p>

              <div className="doorVisual">
                <div className="visualLeft">
                  <span className="visualIcon iconRoad" aria-hidden="true" />
                  <div className="visualText">
                    <div className="visualTitle">Action-first. One move.</div>
                    <div className="visualSub">Start the application → get routed.</div>
                  </div>
                </div>

                {/* CTA #1 */}
                <a
                  className="ctaPill red"
                  href="https://capture-of-application.vercel.app/apply?utm_source=newpath-landing&utm_medium=door&utm_campaign=two-door"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start my application →
                </a>
              </div>

              <ul className="miniList" aria-label="Door 1 points">
                <li className="miniItem">
                  <span className="miniMark red" aria-hidden="true" />
                  <span><strong>One move:</strong> start the application.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark red" aria-hidden="true" />
                  <span><strong>Today’s rules:</strong> focus on what lenders care about now.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark red" aria-hidden="true" />
                  <span><strong>Clean path:</strong> simple, clear, and direct.</span>
                </li>
              </ul>

              <div className="muted" style={{ fontSize: 13, color: "rgba(15,23,42,0.66)" }}>
                This is the direct “today” door. No extra decisions.
              </div>
            </div>
          </div>

          {/* DOOR 2 — TOMORROW (CTA #2) */}
          <div className="doorCard" id="door-2" aria-label="Door 2: Tomorrow">
            <div className="doorRail teal" aria-hidden="true" />
            <div className="doorInner">
              <div className="doorHeader">
                <div className="doorKicker">
                  <span className="doorPill">Door 2</span>
                  <span className="laneTag">Tomorrow • The Map</span>
                </div>
              </div>

              <h3 className="doorTitle">Tomorrow: The BALANCE Cipher (what it is—and what it isn’t)</h3>

              <p className="doorBody">
                The Cipher isn’t a checklist. It’s a map. It shows why outcomes repeat—and the Co-Pilot translates that
                map into <strong>one clear next step</strong>.
              </p>

              <div className="doorVisual">
                <div className="visualLeft">
                  <span className="visualIcon iconCipher" aria-hidden="true" />
                  <div className="visualText">
                    <div className="visualTitle">Cinematic clarity. Real leverage.</div>
                    <div className="visualSub">See the pattern → choose your next step.</div>
                  </div>
                </div>

                {/* CTA #2 */}
                <a
                  className="ctaPill teal"
                  href="https://app.balancecipher.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open the Cipher →
                </a>
              </div>

              <ul className="miniList" aria-label="Door 2 points">
                <li className="miniItem">
                  <span className="miniMark teal" aria-hidden="true" />
                  <span><strong>See the pattern</strong> behind your results.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark teal" aria-hidden="true" />
                  <span><strong>Learn the next move</strong> that changes your outcome.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark teal" aria-hidden="true" />
                  <span><strong>Auto → Home:</strong> build stability and real readiness over time.</span>
                </li>
              </ul>

              <div
                style={{
                  border: "1px solid rgba(0,0,0,0.10)",
                  borderRadius: 18,
                  background: "rgba(0,0,0,0.02)",
                  padding: "14px 14px",
                }}
              >
                <div style={{ fontWeight: 950, color: "rgba(15,23,42,0.90)", marginBottom: 6 }}>What it isn’t</div>
                <div style={{ color: "rgba(15,23,42,0.74)", lineHeight: 1.55, fontSize: 14 }}>
                  Not shame. Not lectures. Not “do 20 things.” Just clarity—then one move at a time.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="muted" style={{ fontSize: 13, marginTop: 14, color: "rgba(15,23,42,0.66)" }}>
          If you only do one thing: Door 1 is your “today” move. Door 2 is your “map” when you want to build strength.
        </div>
      </Section>

      {/* Cipher section integrated (NO extra CTA here — we already used CTA #2) */}
      <Section id="cipher" title="The BALANCE Cipher" desc="It’s not a checklist. It’s a map.">
        <div className="cipherCard">
          <div className="cipherGlow" aria-hidden="true" />
          <div className="cipherInner">
            <img
              src="/brand/balance-cipher-emblem.png"
              alt="BALANCE Cipher emblem"
              style={{
                width: "min(460px, 92vw)",
                height: "auto",
                display: "block",
                margin: "6px auto 0",
                filter: "drop-shadow(0 20px 44px rgba(0,0,0,0.18))",
              }}
            />

            <h3 className="cipherTitle">
              Open your new door—<span style={{ color: "var(--accent)" }}>with the Cipher</span>.
            </h3>

            <p className="cipherCopy">
              Most people don’t need more information. They need to <strong>see what’s real</strong>—then take{" "}
              <strong>one clean next step</strong>. The Cipher reveals the pattern, and the Co-Pilot translates it into
              something <strong>simple</strong> and <strong>doable</strong>.
            </p>

            <ul className="cipherBullets" aria-label="Cipher outcomes">
              <li><span className="bDot" aria-hidden="true" /><span><strong>Clarity first:</strong> know where you are and what matters.</span></li>
              <li><span className="bDot" aria-hidden="true" /><span><strong>One next step:</strong> remove fog and take the right move.</span></li>
              <li><span className="bDot" aria-hidden="true" /><span><strong>Options → freedom:</strong> better structure unlocks better terms over time.</span></li>
            </ul>

            <div className="muted" style={{ fontSize: 13, color: "rgba(15,23,42,0.66)" }}>
              Quiet power. <strong>Clear direction.</strong> One move at a time.
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
