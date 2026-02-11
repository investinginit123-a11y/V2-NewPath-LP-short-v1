// app/page.tsx

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

          /* HARDENED lane colors (no pink / no mint wash) */
          --lane-red: var(--accent);
          --lane-red-fallback: #DC2626;            /* strong red */
          --lane-red-deep: #B91C1C;                /* deeper red for borders */
          --lane-red-ink: rgba(140, 0, 0, 0.92);   /* darker red ink */

          --lane-teal: #19d3c5;
          --lane-teal-deep: #0EA5A4;               /* deeper teal for borders/text */
          --lane-teal-ink: rgba(8, 90, 86, 0.92);

          /* very subtle tints ONLY (avoid pastel panels) */
          --lane-red-tint: rgba(220,38,38,0.06);
          --lane-teal-tint: rgba(25,211,197,0.06);

          --lane-red-glow: rgba(220,38,38,0.18);
          --lane-teal-glow: rgba(25,211,197,0.18);
        }

        strong { font-weight: 900; color: var(--np-ink); }

        /* HERO STAGE */
        .heroStage {
          position: relative;
          overflow: hidden;
          padding-bottom: 18px;
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
            radial-gradient(720px 360px at 22% 36%, var(--lane-red-glow), transparent 68%),
            radial-gradient(820px 420px at 70% 38%, var(--lane-teal-glow), transparent 70%);
          filter: blur(18px);
          opacity: 0.85;
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
        .heroInner { position: relative; z-index: 2; }

        .h1 { 
          letter-spacing: -0.03em;
          color: rgba(0,0,0,0.92);
          font-weight: 950;
        }

        /* BIGGER + BOLDER story line (this is the hook) */
        .sub { 
          line-height: 1.38;
          color: rgba(15,23,42,0.90);
          font-size: 18px;
          font-weight: 850;
          max-width: 820px;
        }

        .heroCard {
          border: 1px solid var(--np-border);
          border-radius: var(--np-radius);
          background: rgba(255,255,255,0.92);
          box-shadow: var(--np-shadow);
          backdrop-filter: blur(8px);
        }
        .heroCardInner{
          padding: 20px 18px;
          display:grid;
          gap: 12px;
        }

        /* REMOVE confusing filler block by hiding legacy pill rows if they exist */
        .pills { display: none !important; }
        .heroRow { display: none !important; }
        .trustStrip { display: none !important; }

        /* Logo size */
        .npLogo{
          width: min(220px, 72vw);
          height: auto;
          display:block;
          object-fit: contain;
        }
        @media (min-width: 900px){
          .npLogo{ width: 210px; }
        }

        /* ===========================
           DOORS = DECISION STAGE
           =========================== */

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

        .decisionStage{
          position: relative;
          border-radius: calc(var(--np-radius) + 8px);
          padding: 16px;
          background:
            radial-gradient(900px 420px at 18% 40%, rgba(220,38,38,0.08), transparent 58%),
            radial-gradient(920px 420px at 82% 40%, rgba(25,211,197,0.08), transparent 58%),
            linear-gradient(180deg, rgba(0,0,0,0.015), rgba(0,0,0,0.00));
          border: 1px solid rgba(0,0,0,0.06);
          box-shadow: 0 18px 48px rgba(0,0,0,0.06);
        }

        /* BIG, CENTERED DOOR CHOICES (internal jumps only) */
        .decisionBar{
          display:grid;
          gap: 14px;
          margin-top: 12px;
          margin-bottom: 14px;
        }

        .doorChoice{
          display:block;
          text-decoration:none;
          width: 100%;
          border-radius: 22px;
          border: 2px solid rgba(0,0,0,0.14);
          background: rgba(255,255,255,0.98);
          box-shadow: 0 22px 62px rgba(0,0,0,0.10);
          padding: 18px 14px;
          transition: transform .15s ease, box-shadow .15s ease, filter .15s ease;
        }
        .doorChoice:active{ transform: translateY(1px) scale(0.99); }

        .doorChoice.red{
          border-color: rgba(185,28,28,0.32);
          box-shadow: 0 26px 74px rgba(185,28,28,0.12);
        }
        .doorChoice.teal{
          border-color: rgba(14,165,164,0.34);
          box-shadow: 0 26px 74px rgba(14,165,164,0.12);
        }

        .doorChoiceInner{
          display:grid;
          gap: 8px;
          text-align: center;
          align-items:center;
          justify-items:center;
        }

        .doorChoiceTop{
          display:flex;
          align-items:center;
          justify-content:center;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* 2x SIZE Door chips (CTA-grade) */
        .doorChip{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 16px 22px;
          border-radius: var(--np-pill);
          font-weight: 950;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-size: 14px;
          border: 2px solid rgba(0,0,0,0.18);
          background: rgba(255,255,255,0.96);
          box-shadow: 0 16px 34px rgba(0,0,0,0.10);
        }
        .doorChip.red{
          border-color: rgba(185,28,28,0.36);
          background: rgba(255,255,255,0.98);
          color: rgba(15,23,42,0.90);
        }
        .doorChip.teal{
          border-color: rgba(14,165,164,0.38);
          background: rgba(255,255,255,0.98);
          color: rgba(15,23,42,0.90);
        }

        /* BIG CENTER HEADLINE FOR EACH CHOICE */
        .doorChoiceTitle{
          font-weight: 950;
          letter-spacing: -0.02em;
          color: rgba(0,0,0,0.94);
          font-size: clamp(20px, 4.6vw, 26px);
          line-height: 1.10;
        }
        .doorChoiceTitle .redWord{ 
          color: var(--lane-red);
          text-shadow: 0 10px 26px rgba(185,28,28,0.18);
        }
        .doorChoiceTitle .tealWord{ 
          color: var(--lane-teal-deep);
          text-shadow: 0 10px 26px rgba(14,165,164,0.16);
        }

        .doorChoiceSub{
          font-size: 14px;
          font-weight: 900;
          color: rgba(15,23,42,0.76);
          line-height: 1.25;
          max-width: 62ch;
        }

        .doorChoiceHint{
          font-size: 12px;
          font-weight: 950;
          letter-spacing: 0.10em;
          text-transform: uppercase;
          opacity: 0.60;
          margin-top: 2px;
        }

        /* Stack doors */
        .doorStack{
          display:grid;
          gap: 18px;
          margin-top: 8px;
        }

        .doorCard{
          position: relative;
          border: 1px solid rgba(0,0,0,0.12);
          border-radius: var(--np-radius);
          background: rgba(255,255,255,0.96);
          box-shadow: var(--np-shadow-soft);
          overflow:hidden;
          transform: translateZ(0);
          max-width: 100%;
        }

        /* left spine */
        .doorCard::before{
          content:"";
          position:absolute;
          left:0;
          top:0;
          bottom:0;
          width: 8px;
          background: rgba(0,0,0,0.06);
          opacity: 0.95;
        }
        .doorCard.red::before{ background: linear-gradient(180deg, rgba(185,28,28,0.86), rgba(185,28,28,0.20)); }
        .doorCard.teal::before{ background: linear-gradient(180deg, rgba(14,165,164,0.86), rgba(14,165,164,0.20)); }

        .doorRail{
          height: 12px;
          width: 100%;
          background: linear-gradient(90deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00));
        }
        .doorRail.red{
          background: linear-gradient(90deg, rgba(185,28,28,0.28), rgba(185,28,28,0.07), transparent);
        }
        .doorRail.teal{
          background: linear-gradient(90deg, rgba(14,165,164,0.28), rgba(14,165,164,0.09), transparent);
        }

        .doorInner{
          padding: 22px 20px 20px 20px;
          display:grid;
          gap: 12px;
        }

        /* bigger in-card kicker */
        .doorKicker{
          display:flex;
          align-items:center;
          justify-content:center;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 2px;
          margin-bottom: 2px;
        }

        .doorPill{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 12px 18px;
          border-radius: var(--np-pill);
          border: 1px solid rgba(0,0,0,0.14);
          background: rgba(0,0,0,0.03);
          font-weight: 950;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 12px;
          color: rgba(15,23,42,0.78);
          white-space: nowrap;
        }

        .laneTag{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 12px 16px;
          border-radius: var(--np-pill);
          font-size: 13px;
          font-weight: 950;
          color: rgba(15,23,42,0.90);
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.96);
          white-space: nowrap;
          box-shadow: 0 12px 26px rgba(0,0,0,0.06);
        }
        .laneTag.red{
          border-color: rgba(185,28,28,0.22);
          background: var(--lane-red-tint);
        }
        .laneTag.teal{
          border-color: rgba(14,165,164,0.24);
          background: var(--lane-teal-tint);
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
          background: rgba(255,255,255,0.90);
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
          background: linear-gradient(180deg, rgba(185,28,28,0.24), rgba(185,28,28,0.06));
          border: 1px solid rgba(185,28,28,0.22);
        }
        .iconRoad::after{
          content:"";
          position:absolute;
          left: 22px;
          top: 14px;
          bottom: 14px;
          width: 2px;
          border-radius: 2px;
          background: rgba(185,28,28,0.55);
          opacity: 0.8;
        }

        .iconCipher::before{
          content:"";
          position:absolute;
          inset: 10px;
          border-radius: 999px;
          border: 2px solid rgba(14,165,164,0.48);
          box-shadow: 0 0 18px rgba(14,165,164,0.26);
        }
        .iconCipher::after{
          content:"";
          position:absolute;
          inset: 18px;
          border-radius: 999px;
          border: 1px solid rgba(14,165,164,0.26);
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
        .miniMark.red{ background: rgba(185,28,28,0.40); }
        .miniMark.teal{ background: rgba(14,165,164,0.38); }

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
          box-shadow: 0 14px 34px rgba(0,0,0,0.10);
          transition: transform .15s ease, box-shadow .15s ease, filter .15s ease;
          white-space: nowrap;
          max-width: 100%;
          flex: 0 0 auto;
        }
        .ctaPill:active{ transform: translateY(1px) scale(0.99); }

        .ctaPill.red{
          /* if var(--accent) is set correctly, it will use brand red; otherwise still reads strong */
          background: var(--lane-red, var(--lane-red-fallback));
          color: #fff;
          border-color: rgba(0,0,0,0.08);
          box-shadow: 0 18px 44px rgba(185,28,28,0.22);
        }
        .ctaPill.teal{
          background: rgba(11,11,15,0.94);
          color: #fff;
          border-color: rgba(14,165,164,0.30);
          box-shadow: 0 18px 46px rgba(0,0,0,0.14), 0 0 0 1px rgba(14,165,164,0.12) inset;
        }

        /* Mobile: stack CTA under visual */
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
        }

        /* Cipher section (unchanged) */
        .cipherCard{
          border: 1px solid rgba(0,0,0,0.10);
          border-radius: var(--np-radius);
          background: rgba(255,255,255,0.94);
          box-shadow: var(--np-shadow-soft);
          overflow:hidden;
          position: relative;
          max-width: 100%;
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
                      Create a New Path <span style={{ color: "var(--lane-red, var(--lane-red-fallback))" }}>forward</span>.
                    </h1>

                    <p className="sub">
                      Two doors. One clear next step—powered by the <strong>BALANCE Cipher</strong> and guided by the{" "}
                      <strong>Co-Pilot</strong>.
                    </p>

                    <div className="muted" style={{ fontSize: 14, fontWeight: 900, color: "rgba(15,23,42,0.80)" }}>
                      <strong>Get started today:</strong> choose Door 1.{" "}
                      <strong>Discover the AI-driven Cipher tomorrow:</strong> choose Door 2.
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
        desc="Door 1 is for getting started today. Door 2 is for opening the door tomorrow—and discovering the AI-driven Cipher."
      >
        <div className="decisionStage" aria-label="Decision stage">
          {/* BIG, CENTERED, BOLD internal jumps */}
          <div className="decisionBar" aria-label="Choose a door">
            <a className="doorChoice red" href="#door-1" aria-label="Door 1: Get started today">
              <div className="doorChoiceInner">
                <div className="doorChoiceTop">
                  <span className="doorChip red">DOOR 1</span>
                  <div className="doorChoiceTitle">
                    <span className="redWord">Get started</span> today.
                  </div>
                </div>
                <div className="doorChoiceSub">
                  Start the process and get routed the right way.
                </div>
                <div className="doorChoiceHint">Tap to jump ↓</div>
              </div>
            </a>

            <a className="doorChoice teal" href="#door-2" aria-label="Door 2: Discover the AI-driven Cipher tomorrow">
              <div className="doorChoiceInner">
                <div className="doorChoiceTop">
                  <span className="doorChip teal">DOOR 2</span>
                  <div className="doorChoiceTitle">
                    Discover the <span className="tealWord">AI-driven</span> Cipher tomorrow.
                  </div>
                </div>
                <div className="doorChoiceSub">
                  See the pattern, then take one clear next move.
                </div>
                <div className="doorChoiceHint">Tap to jump ↓</div>
              </div>
            </a>
          </div>

          <div className="doorStack">
            {/* DOOR 1 — TODAY (CTA #1) */}
            <div className="doorCard red" id="door-1" aria-label="Door 1: Today">
              <div className="doorRail red" aria-hidden="true" />
              <div className="doorInner">
                <div className="doorKicker">
                  <span className="doorPill">DOOR 1</span>
                  <span className="laneTag red">Get started today</span>
                </div>

                <h3 className="doorTitle">Today: Get started the right way</h3>

                <p className="doorBody">
                  If you’re ready to move now, the application is your cleanest first step. We route you into a calm,
                  lender-aligned path—without overwhelm.
                </p>

                <div className="doorVisual">
                  <div className="visualLeft">
                    <span className="visualIcon iconRoad" aria-hidden="true" />
                    <div className="visualText">
                      <div className="visualTitle">One move. Start clean.</div>
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
            <div className="doorCard teal" id="door-2" aria-label="Door 2: Tomorrow">
              <div className="doorRail teal" aria-hidden="true" />
              <div className="doorInner">
                <div className="doorKicker">
                  <span className="doorPill">DOOR 2</span>
                  <span className="laneTag teal">Discover tomorrow</span>
                </div>

                <h3 className="doorTitle">Tomorrow: Discover the AI-driven BALANCE Cipher</h3>

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
        </div>
      </Section>

      {/* Cipher section (unchanged; no extra outbound CTA) */}
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
              Open your new door—<span style={{ color: "var(--lane-red, var(--lane-red-fallback))" }}>with the Cipher</span>.
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
