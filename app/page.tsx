// app/page.tsx
// PASS: 60-SECOND APPROVAL PROMISE (Option A)
// - Door 1 becomes "60-Second Approval" identity (repeated 4x)
// - Adds "Non-invasive" + "No obligation" language
// - Keeps ONLY 2 outbound CTAs total (application + cipher)

import Section from "../components/Section";

export default function Page() {
  return (
    <main style={{ width: "100%", overflowX: "hidden" }}>
      <style>{`
        html, body { background: #ffffff !important; }
        *, *::before, *::after { box-sizing: border-box; }
        img { max-width: 100%; height: auto; }
        main { width: 100%; overflow-x: hidden; }

        :root{
          --np-ink: rgba(15,23,42,0.92);
          --np-muted: rgba(15,23,42,0.74);
          --np-border: rgba(0,0,0,0.10);

          --np-shadow: 0 22px 60px rgba(0,0,0,0.10);
          --np-shadow-soft: 0 16px 42px rgba(0,0,0,0.08);

          --np-radius: 26px;
          --np-pill: 999px;

          /* ✅ DECISION COLORS (LOCKED) — fire-engine red lane + ink */
          --magenta: #D00000;         /* fire engine red (no pink) */
          --magenta-deep: #A40000;    /* depth */
          --ink: #0B0B0F;             /* premium near-black */

          --white: #ffffff;
          --ink-strong: rgba(0,0,0,0.92);
        }

        strong { font-weight: 900; color: var(--np-ink); }

        /* HERO STAGE — clean, minimal */
        .heroStage {
          position: relative;
          overflow: hidden;
          padding-bottom: 14px;
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
            radial-gradient(760px 360px at 18% 30%, rgba(208,0,0,0.08), transparent 70%),
            radial-gradient(820px 420px at 74% 34%, rgba(0,0,0,0.06), transparent 70%);
          filter: blur(18px);
          opacity: 0.55;
          pointer-events:none;
        }
        .heroStage::after{
          content:"";
          position:absolute;
          inset:0;
          background:
            linear-gradient(90deg, rgba(255,255,255,0.90), rgba(255,255,255,0.84)),
            radial-gradient(1200px 520px at 50% 0%, rgba(0,0,0,0.04), transparent 70%);
          pointer-events:none;
        }
        .heroInner { position: relative; z-index: 2; }

        .h1 { 
          letter-spacing: -0.03em;
          color: var(--ink-strong);
          font-weight: 950;
        }

        .sub { 
          line-height: 1.24;
          color: rgba(15,23,42,0.94);
          font-size: 20px;
          font-weight: 950;
          max-width: 900px;
        }

        .heroCard {
          border: 1px solid rgba(0,0,0,0.10);
          border-radius: var(--np-radius);
          background: rgba(255,255,255,0.98);
          box-shadow: var(--np-shadow);
          backdrop-filter: blur(8px);
        }
        .heroCardInner{
          padding: 20px 18px;
          display:grid;
          gap: 12px;
        }

        /* Remove any old filler UI blocks */
        .pills { display: none !important; }
        .heroRow { display: none !important; }
        .trustStrip { display: none !important; }

        .npLogo{
          width: min(220px, 72vw);
          height: auto;
          display:block;
          object-fit: contain;
        }

        /* HERO COMMAND STRIP — short + clean */
        .commandStrip{
          border-radius: 18px;
          border: 2px solid rgba(0,0,0,0.14);
          background: rgba(255,255,255,0.98);
          box-shadow: 0 14px 34px rgba(0,0,0,0.08);
          padding: 14px 14px;
          display:grid;
          gap: 8px;
        }
        .commandLine{
          font-size: 15px;
          font-weight: 950;
          color: rgba(15,23,42,0.92);
          line-height: 1.25;
        }
        .commandLine .magenta{ color: var(--magenta); }
        .commandLine .ink{ color: var(--ink); }

        /* DOORS */
        #doors .sectionTitle{
          font-size: clamp(34px, 5vw, 54px);
          line-height: 1.04;
          letter-spacing: -0.03em;
        }

        .decisionStage{
          position: relative;
          border-radius: calc(var(--np-radius) + 10px);
          padding: 6px 0 6px;
          background: transparent;
        }

        /* ✅ SIMPLE DOOR SELECTORS (ONLY) */
        .doorSelect{
          display:grid;
          gap: 12px;
          margin: 0 0 10px;
        }

        .doorSelectBtn{
          width: 100%;
          text-decoration:none;
          border-radius: 22px;
          background: rgba(255,255,255,0.98);
          border: 3px solid rgba(0,0,0,0.14);
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          padding: 16px 16px;
          display:flex;
          align-items:center;
          justify-content: space-between;
          gap: 14px;
          transition: transform .15s ease, box-shadow .15s ease, filter .15s ease;
        }
        .doorSelectBtn:active{ transform: translateY(1px) scale(0.99); }
        .doorSelectBtn:hover{ box-shadow: 0 28px 84px rgba(0,0,0,0.16); }

        .doorSelectLeft{
          display:flex;
          align-items:center;
          gap: 12px;
          min-width: 0;
        }

        .doorTag{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          height: 46px;
          padding: 0 16px;
          border-radius: 16px;
          font-weight: 1000;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 12px;
          color: #fff;
          border: 2px solid rgba(0,0,0,0.10);
          flex: 0 0 auto;
        }
        .doorTag.magenta{ background: var(--magenta); }
        .doorTag.ink{ background: var(--ink); }

        .doorSelectText{
          display:grid;
          gap: 2px;
          min-width: 0;
        }
        .doorSelectTitle{
          font-size: 18px;
          font-weight: 1000;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: rgba(0,0,0,0.92);
        }
        .doorSelectTitle .magenta{ color: var(--magenta); }
        .doorSelectTitle .ink{ color: var(--ink); }

        .doorSelectSub{
          font-size: 13px;
          font-weight: 850;
          color: rgba(15,23,42,0.70);
          line-height: 1.25;
        }

        .doorSelectChevron{
          width: 44px;
          height: 44px;
          border-radius: 16px;
          border: 2px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.98);
          display:flex;
          align-items:center;
          justify-content:center;
          flex: 0 0 auto;
          font-size: 18px;
          font-weight: 1000;
          color: rgba(15,23,42,0.70);
        }

        /* DETAIL CARDS */
        .doorStack{
          display:grid;
          gap: 18px;
          margin-top: 10px;
        }

        .doorCard{
          position: relative;
          border: 1px solid rgba(0,0,0,0.12);
          border-radius: var(--np-radius);
          background: rgba(255,255,255,0.98);
          box-shadow: var(--np-shadow-soft);
          overflow:hidden;
          transform: translateZ(0);
          max-width: 100%;
        }

        .doorCard::before{
          content:"";
          position:absolute;
          left:0;
          top:0;
          bottom:0;
          width: 10px;
          background: rgba(0,0,0,0.06);
          opacity: 0.95;
        }
        .doorCard.magenta::before{
          background: linear-gradient(180deg, var(--magenta), rgba(208,0,0,0.12));
        }
        .doorCard.ink::before{
          background: linear-gradient(180deg, var(--ink), rgba(11,11,15,0.16));
        }

        .doorRail{
          height: 10px;
          width: 100%;
          background: linear-gradient(90deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00));
        }
        .doorRail.magenta{
          background: linear-gradient(90deg, rgba(208,0,0,0.24), rgba(208,0,0,0.06), transparent);
        }
        .doorRail.ink{
          background: linear-gradient(90deg, rgba(11,11,15,0.22), rgba(11,11,15,0.06), transparent);
        }

        .doorInner{
          padding: 22px 20px 20px 20px;
          display:grid;
          gap: 12px;
        }

        .doorKicker{
          display:flex;
          align-items:center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content:flex-start;
          margin-top: 2px;
          margin-bottom: 2px;
        }
        .doorPill{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 10px 14px;
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(0,0,0,0.02);
          font-weight: 950;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-size: 11px;
          color: rgba(15,23,42,0.76);
          white-space: nowrap;
        }
        .laneTag{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 10px 14px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 900;
          color: rgba(15,23,42,0.82);
          border: 1px solid rgba(0,0,0,0.12);
          background: #fff;
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

        /* Small trust chips (non-invasive / 60 seconds / no obligation) */
        .trustChips{
          display:flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }
        .chip{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          height: 34px;
          padding: 0 12px;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(0,0,0,0.02);
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          color: rgba(15,23,42,0.78);
        }
        .chip.red{
          border-color: rgba(208,0,0,0.18);
          background: rgba(208,0,0,0.05);
          color: rgba(208,0,0,0.92);
        }

        .doorVisual{
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(0,0,0,0.02);
          border-radius: 18px;
          padding: 14px 14px;
          display:flex;
          align-items:center;
          justify-content: space-between;
          gap: 14px;
          max-width: 100%;
          min-width: 0;
        }
        .visualLeft{
          display:flex;
          align-items:center;
          gap: 12px;
          min-width: 0;
          flex: 1 1 auto;
          max-width: 100%;
        }
        .visualIcon{
          width: 46px;
          height: 46px;
          border-radius: 14px;
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(255,255,255,0.96);
          box-shadow: 0 10px 24px rgba(0,0,0,0.06);
          position: relative;
          flex: 0 0 auto;
        }

        .iconRoad::before{
          content:"";
          position:absolute;
          left: 12px;
          right: 12px;
          top: 9px;
          bottom: 9px;
          border-radius: 10px;
          background: linear-gradient(180deg, rgba(208,0,0,0.18), rgba(208,0,0,0.06));
          border: 1px solid rgba(208,0,0,0.18);
        }
        .iconRoad::after{
          content:"";
          position:absolute;
          left: 22px;
          top: 14px;
          bottom: 14px;
          width: 2px;
          border-radius: 2px;
          background: rgba(208,0,0,0.75);
          opacity: 0.95;
        }

        .iconCipher::before{
          content:"";
          position:absolute;
          inset: 10px;
          border-radius: 999px;
          border: 2px solid rgba(0,0,0,0.26);
          box-shadow: 0 0 14px rgba(0,0,0,0.10);
        }
        .iconCipher::after{
          content:"";
          position:absolute;
          inset: 18px;
          border-radius: 999px;
          border: 1px solid rgba(208,0,0,0.18);
        }

        .visualText{
          display:grid;
          gap: 2px;
          min-width: 0;
          max-width: 100%;
        }
        .visualTitle{
          font-weight: 950;
          color: rgba(15,23,42,0.90);
          letter-spacing: -0.01em;
          font-size: 14px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .visualSub{
          font-size: 13px;
          color: rgba(15,23,42,0.66);
          line-height: 1.35;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

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
        .miniMark.magenta{ background: rgba(208,0,0,0.70); }
        .miniMark.ink{ background: rgba(11,11,15,0.56); }

        /* Outbound CTAs (still only 2 total) */
        .ctaPill{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          height: 54px;
          padding: 0 22px;
          border-radius: var(--np-pill);
          text-decoration:none;
          font-weight: 950;
          letter-spacing: 0.01em;
          border: 1px solid rgba(0,0,0,0.10);
          transition: transform .15s ease, box-shadow .15s ease, filter .15s ease;
          white-space: nowrap;
          max-width: 100%;
          flex: 0 0 auto;
        }
        .ctaPill:active{ transform: translateY(1px) scale(0.99); }

        .ctaPill.magenta{
          background: var(--magenta);
          color: #fff;
          border-color: rgba(0,0,0,0.10);
          box-shadow: 0 18px 44px rgba(208,0,0,0.22);
        }
        .ctaPill.ink{
          background: var(--ink);
          color: #fff;
          border-color: rgba(0,0,0,0.10);
          box-shadow: 0 18px 46px rgba(0,0,0,0.18);
        }

        .ctaMicro{
          margin-top: 8px;
          font-size: 12px;
          font-weight: 850;
          color: rgba(15,23,42,0.66);
        }

        @media (max-width: 820px){
          .doorVisual{
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-start;
          }
          .visualLeft{ width: 100%; }
          .ctaPill{
            width: 100%;
            max-width: 100%;
            white-space: normal;
            height: auto;
            min-height: 54px;
            padding: 14px 18px;
            line-height: 1.2;
            font-size: 14px;
          }
          .visualTitle, .visualSub{
            white-space: normal;
            overflow: visible;
            text-overflow: clip;
          }
          .doorSelectBtn{
            padding: 16px 14px;
          }
          .doorSelectTitle{ font-size: 17px; }
        }

        /* Cipher section — clean */
        .cipherCard{
          border: 1px solid rgba(0,0,0,0.10);
          border-radius: var(--np-radius);
          background: rgba(255,255,255,0.96);
          box-shadow: var(--np-shadow-soft);
          overflow:hidden;
          position: relative;
          max-width: 100%;
        }
        .cipherGlow{
          position:absolute;
          inset:-40px;
          background: radial-gradient(520px 240px at 50% 22%, rgba(208,0,0,0.10), transparent 70%);
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
          background: rgba(208,0,0,0.55);
        }
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
                    className="npLogo"
                  />
                </div>
              </div>

              <div className="gridHero">
                <div className="card heroCard">
                  <div className="cardInner heroCardInner">
                    <h1 className="h1">
                      Create a New Path <span style={{ color: "var(--magenta)" }}>forward</span>.
                    </h1>

                    <p className="sub">
                      Two doors. One clear next step—powered by the <strong>BALANCE Cipher</strong> and guided by the{" "}
                      <strong>Co-Pilot</strong>.
                    </p>

                    <div className="commandStrip" aria-label="Door instructions">
                      <div className="commandLine">
                        <span className="magenta">Start your New Path today</span> → choose Door 1.
                      </div>
                      <div className="commandLine">
                        <span className="ink">Unlock the Cipher tomorrow</span> → choose Door 2.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </header>

      <Section id="doors" title="Choose your door" desc="">
        <div className="decisionStage" aria-label="Decision stage">
          {/* ✅ ONLY TWO CHOICES (clean + mobile-first) */}
          <div className="doorSelect" aria-label="Door selector">
            <a className="doorSelectBtn" href="#door-1" aria-label="Door 1: 60-Second Approval">
              <div className="doorSelectLeft">
                <span className="doorTag magenta">DOOR 1</span>
                <div className="doorSelectText">
                  <div className="doorSelectTitle">
                    Start your New Path today — <span className="magenta">60-Second Approval</span>
                  </div>
                  <div className="doorSelectSub">Non-invasive. No obligation. Takes 60 seconds.</div>
                </div>
              </div>
              <span className="doorSelectChevron" aria-hidden="true">↓</span>
            </a>

            <a className="doorSelectBtn" href="#door-2" aria-label="Door 2: Unlock the Cipher tomorrow">
              <div className="doorSelectLeft">
                <span className="doorTag ink">DOOR 2</span>
                <div className="doorSelectText">
                  <div className="doorSelectTitle">
                    Unlock the <span className="ink">Cipher</span> tomorrow.
                  </div>
                  <div className="doorSelectSub">See the pattern, then take one clear next move.</div>
                </div>
              </div>
              <span className="doorSelectChevron" aria-hidden="true">↓</span>
            </a>
          </div>

          {/* Door 1 detail card */}
          <div className="doorStack">
            <div className="doorCard magenta" id="door-1" aria-label="Door 1: 60-Second Approval">
              <div className="doorRail magenta" aria-hidden="true" />
              <div className="doorInner">
                <div className="doorKicker">
                  <span className="doorPill">DOOR 1</span>
                  <span className="laneTag">60-Second Approval</span>
                </div>

                <h3 className="doorTitle">Today: Get your 60-Second Approval</h3>

                <p className="doorBody">
                  If you’re ready to move now, start a <strong>non-invasive</strong> approval check in{" "}
                  <strong>60 seconds</strong>—then we route you the right way (calm, lender-aligned, no overwhelm).
                </p>

                <div className="trustChips" aria-label="Trust chips">
                  <span className="chip red">Non-invasive</span>
                  <span className="chip red">60 seconds</span>
                  <span className="chip">No obligation</span>
                </div>

                <div className="doorVisual">
                  <div className="visualLeft">
                    <span className="visualIcon iconRoad" aria-hidden="true" />
                    <div className="visualText">
                      <div className="visualTitle">60 seconds. Start clean.</div>
                      <div className="visualSub">Start the approval check → get routed.</div>
                    </div>
                  </div>

                  {/* CTA #1 */}
                  <a
                    className="ctaPill magenta"
                    href="https://capture-of-application.vercel.app/apply?utm_source=newpath-landing&utm_medium=door&utm_campaign=two-door"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start my 60-Second Approval →
                  </a>
                </div>

                <div className="ctaMicro">
                  Non-invasive. <strong>60 seconds.</strong> No obligation.
                </div>

                <ul className="miniList" aria-label="Door 1 points">
                  <li className="miniItem">
                    <span className="miniMark magenta" aria-hidden="true" />
                    <span><strong>One move:</strong> start the 60-second approval check.</span>
                  </li>
                  <li className="miniItem">
                    <span className="miniMark magenta" aria-hidden="true" />
                    <span><strong>Today’s rules:</strong> focus on what lenders care about right now.</span>
                  </li>
                  <li className="miniItem">
                    <span className="miniMark magenta" aria-hidden="true" />
                    <span><strong>Clean path:</strong> simple, clear, and direct.</span>
                  </li>
                </ul>

                <div className="muted" style={{ fontSize: 13, color: "rgba(15,23,42,0.66)" }}>
                  Door 1 is the “today” move. Quick clarity first.
                </div>
              </div>
            </div>
          </div>

          <div className="muted" style={{ fontSize: 13, marginTop: 14, color: "rgba(15,23,42,0.66)" }}>
            If you only do one thing: Door 1 is your “today” move. Door 2 is your “map” when you want to build strength.
          </div>
        </div>
      </Section>

      <Section id="cipher" title="The BALANCE Cipher" desc="It’s not a checklist. It’s a map.">
        {/* Door 2 detail placed near Cipher for clean flow */}
        <div style={{ marginBottom: 18 }}>
          <div className="doorCard ink" id="door-2" aria-label="Door 2: Cipher">
            <div className="doorRail ink" aria-hidden="true" />
            <div className="doorInner">
              <div className="doorKicker">
                <span className="doorPill">DOOR 2</span>
                <span className="laneTag">Unlock tomorrow</span>
              </div>

              <h3 className="doorTitle">Tomorrow: Unlock the AI-driven BALANCE Cipher</h3>

              <p className="doorBody">
                The Cipher isn’t a checklist. It’s a map. It shows why outcomes repeat—and the Co-Pilot translates that
                map into <strong>one clear next step</strong>.
              </p>

              <div className="doorVisual">
                <div className="visualLeft">
                  <span className="visualIcon iconCipher" aria-hidden="true" />
                  <div className="visualText">
                    <div className="visualTitle">Discover the pattern.</div>
                    <div className="visualSub">See it → then choose your next move.</div>
                  </div>
                </div>

                {/* CTA #2 */}
                <a
                  className="ctaPill ink"
                  href="https://app.balancecipher.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open the Cipher →
                </a>
              </div>

              <ul className="miniList" aria-label="Door 2 points">
                <li className="miniItem">
                  <span className="miniMark ink" aria-hidden="true" />
                  <span><strong>See the pattern</strong> behind your results.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark ink" aria-hidden="true" />
                  <span><strong>Learn the next move</strong> that changes your outcome.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark ink" aria-hidden="true" />
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

        {/* Cipher content */}
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
              Open your new door—<span style={{ color: "var(--magenta)" }}>with the Cipher</span>.
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
