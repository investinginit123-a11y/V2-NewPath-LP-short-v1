// app/page.tsx
// DOOR EMPHASIS + NEW COLOR SCHEME PASS
// - Pink eliminated (no red tints / no soft red wash)
// - Blue eliminated (Door 2 becomes premium charcoal + brass)
// - Doors become BIG, boxed, bold, clickable (life-changing CTA moment)
// - Door 2 detail card is moved closer to Cipher section for better flow
// - Still only 2 outbound CTAs total (Apply + Open Cipher)

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

          /* ✅ DOOR COLORS (NO PINK, NO BLUE, NO GREEN) */
          --door1-red: #D10F2F;         /* vibrant red */
          --door1-red-deep: #8E0B20;

          --door2-charcoal: #0B0B0F;    /* premium near-black */
          --door2-charcoal-2: #131320;

          --brass: #B08D57;             /* brass/gold accent */
          --brass-soft: rgba(176,141,87,0.22);

          --white: #ffffff;
          --card: rgba(255,255,255,0.98);

          --ink-strong: rgba(0,0,0,0.92);
          --ink: rgba(15,23,42,0.92);
        }

        strong { font-weight: 900; color: var(--np-ink); }

        /* HERO STAGE — reduce any color wash; keep clean */
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
            radial-gradient(720px 360px at 22% 36%, rgba(209,15,47,0.08), transparent 68%),
            radial-gradient(820px 420px at 70% 38%, rgba(176,141,87,0.08), transparent 70%);
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

        /* Make the story line bigger + bolder */
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

        /* Hide old filler UI blocks */
        .pills { display: none !important; }
        .heroRow { display: none !important; }
        .trustStrip { display: none !important; }

        .npLogo{
          width: min(220px, 72vw);
          height: auto;
          display:block;
          object-fit: contain;
        }

        /* COMMAND STRIP — strong but clean */
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
        .commandLine .red{ color: var(--door1-red); }
        .commandLine .brass{ color: var(--brass); }
        .commandLine .arrow{ opacity: 0.75; }

        /* DOORS */
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
          border-radius: calc(var(--np-radius) + 10px);
          padding: 12px 0 6px;
          background: transparent;
        }

        .decisionBar{
          display:grid;
          gap: 14px;
          margin-top: 12px;
          margin-bottom: 16px;
        }

        /* ✅ BIG, BOXED, CLICKABLE DOORS */
        .doorChoice{
          display:block;
          text-decoration:none;
          width: 100%;
          border-radius: 26px;
          background: #fff;
          padding: 18px 16px;
          position: relative;
          box-shadow: 0 26px 70px rgba(0,0,0,0.14);
          transition: transform .15s ease, box-shadow .15s ease, filter .15s ease;
          overflow: hidden;
        }
        .doorChoice:active{ transform: translateY(1px) scale(0.99); }
        .doorChoice:hover{ box-shadow: 0 32px 86px rgba(0,0,0,0.18); }

        /* Door frame (thick border) */
        .doorChoice.red{
          border: 4px solid rgba(209,15,47,0.78);
        }
        .doorChoice.red::before{
          content:"";
          position:absolute;
          inset:0;
          background:
            linear-gradient(90deg, rgba(209,15,47,0.10), transparent 35%),
            radial-gradient(520px 220px at 16% 50%, rgba(209,15,47,0.10), transparent 70%);
          pointer-events:none;
        }

        .doorChoice.black{
          border: 4px solid rgba(11,11,15,0.78);
          background: #ffffff;
        }
        .doorChoice.black::before{
          content:"";
          position:absolute;
          inset:0;
          background:
            linear-gradient(90deg, rgba(11,11,15,0.08), transparent 34%),
            radial-gradient(520px 220px at 16% 50%, rgba(176,141,87,0.12), transparent 72%);
          pointer-events:none;
        }

        /* Spine */
        .doorSpine{
          position:absolute;
          left:0;
          top:0;
          bottom:0;
          width: 14px;
          background: rgba(0,0,0,0.06);
        }
        .doorChoice.red .doorSpine{
          background: linear-gradient(180deg, var(--door1-red), rgba(209,15,47,0.20));
        }
        .doorChoice.black .doorSpine{
          background: linear-gradient(180deg, var(--door2-charcoal), rgba(11,11,15,0.18));
        }

        .doorChoiceInner{
          position: relative;
          z-index: 2;
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
          gap: 14px;
          flex-wrap: wrap;
        }

        /* ✅ BIG BADGE (DOOR 1 / DOOR 2) */
        .doorBadge{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          height: 54px;
          padding: 0 22px;
          border-radius: 18px;
          font-weight: 1000;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          font-size: 14px;
          border: 3px solid rgba(0,0,0,0.18);
          background: #fff;
          box-shadow: 0 18px 40px rgba(0,0,0,0.12);
        }
        .doorBadge::before{
          content:"";
          width: 12px;
          height: 12px;
          border-radius: 999px;
          margin-right: 10px;
          background: rgba(0,0,0,0.22);
        }

        /* Door 1 badge = filled red */
        .doorBadge.red{
          background: var(--door1-red);
          color: #fff;
          border-color: rgba(0,0,0,0.10);
        }
        .doorBadge.red::before{ background: #fff; opacity: 0.92; }

        /* Door 2 badge = filled charcoal with brass dot */
        .doorBadge.black{
          background: var(--door2-charcoal);
          color: #fff;
          border-color: rgba(0,0,0,0.10);
        }
        .doorBadge.black::before{ background: var(--brass); opacity: 0.95; }

        .doorChoiceTitle{
          font-weight: 1000;
          letter-spacing: -0.03em;
          color: rgba(0,0,0,0.94);
          font-size: clamp(22px, 5vw, 30px);
          line-height: 1.06;
        }

        .doorChoiceTitle .redWord{
          color: var(--door1-red);
          text-shadow: 0 10px 26px rgba(209,15,47,0.20);
        }

        /* Brass emphasis for Door 2 phrase */
        .brassEmph{
          color: var(--brass);
          font-weight: 1000;
          text-decoration: underline;
          text-decoration-color: rgba(176,141,87,0.85);
          text-decoration-thickness: 3px;
          text-underline-offset: 6px;
        }

        .doorChoiceSub{
          font-size: 14px;
          font-weight: 950;
          color: rgba(15,23,42,0.80);
          line-height: 1.25;
          max-width: 62ch;
        }

        .doorChoiceHint{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap: 10px;
          font-size: 12px;
          font-weight: 1000;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.70;
          margin-top: 2px;
          padding: 10px 14px;
          border-radius: 999px;
          border: 2px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.92);
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

        /* left spine */
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
        .doorCard.red::before{
          background: linear-gradient(180deg, var(--door1-red), rgba(209,15,47,0.18));
        }
        .doorCard.black::before{
          background: linear-gradient(180deg, var(--door2-charcoal), rgba(11,11,15,0.18));
        }

        .doorRail{
          height: 12px;
          width: 100%;
          background: linear-gradient(90deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00));
        }
        .doorRail.red{
          background: linear-gradient(90deg, rgba(209,15,47,0.34), rgba(209,15,47,0.08), transparent);
        }
        .doorRail.black{
          background: linear-gradient(90deg, rgba(11,11,15,0.34), rgba(176,141,87,0.10), transparent);
        }

        .doorInner{
          padding: 22px 20px 20px 20px;
          display:grid;
          gap: 12px;
        }

        /* Replace weak pills with stronger tags */
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
          border-radius: 18px;
          border: 2px solid rgba(0,0,0,0.14);
          background: rgba(0,0,0,0.03);
          font-weight: 1000;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 12px;
          color: rgba(15,23,42,0.84);
          white-space: nowrap;
        }

        .laneTag{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 12px 16px;
          border-radius: 18px;
          font-size: 13px;
          font-weight: 1000;
          color: rgba(15,23,42,0.92);
          border: 2px solid rgba(0,0,0,0.12);
          background: #fff;
          white-space: nowrap;
          box-shadow: 0 12px 26px rgba(0,0,0,0.06);
        }
        .laneTag.red{
          border-color: rgba(209,15,47,0.28);
          background: rgba(255,255,255,1);
        }
        .laneTag.black{
          border-color: rgba(11,11,15,0.24);
          background: rgba(255,255,255,1);
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
          border: 2px solid rgba(0,0,0,0.10);
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
          border: 2px solid rgba(0,0,0,0.10);
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
          background: linear-gradient(180deg, rgba(209,15,47,0.20), rgba(209,15,47,0.06));
          border: 2px solid rgba(209,15,47,0.22);
        }
        .iconRoad::after{
          content:"";
          position:absolute;
          left: 22px;
          top: 14px;
          bottom: 14px;
          width: 2px;
          border-radius: 2px;
          background: rgba(209,15,47,0.68);
          opacity: 0.95;
        }

        .iconCipher::before{
          content:"";
          position:absolute;
          inset: 10px;
          border-radius: 999px;
          border: 2px solid rgba(176,141,87,0.62);
          box-shadow: 0 0 16px rgba(176,141,87,0.18);
        }
        .iconCipher::after{
          content:"";
          position:absolute;
          inset: 18px;
          border-radius: 999px;
          border: 1px solid rgba(11,11,15,0.24);
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
        .miniMark.red{ background: rgba(209,15,47,0.55); }
        .miniMark.brass{ background: rgba(176,141,87,0.55); }

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

        .ctaPill.red{
          background: var(--door1-red);
          color: #fff;
          border-color: rgba(0,0,0,0.10);
          box-shadow: 0 18px 44px rgba(209,15,47,0.28);
        }
        .ctaPill.black{
          background: var(--door2-charcoal);
          color: #fff;
          border-color: rgba(176,141,87,0.30);
          box-shadow: 0 18px 46px rgba(0,0,0,0.18), 0 0 0 1px rgba(176,141,87,0.18) inset;
        }
        .ctaPill.black:hover{
          filter: brightness(1.02);
          box-shadow: 0 22px 56px rgba(0,0,0,0.22), 0 0 18px rgba(176,141,87,0.18);
          transform: translateY(-1px);
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
        }

        /* Cipher section — align to brass glow (no teal/blue/green) */
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
          background: radial-gradient(520px 240px at 50% 22%, rgba(176,141,87,0.12), transparent 70%);
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
          background: rgba(176,141,87,0.55);
        }
      `}</style>

      <header className="heroStage">
        <div className="heroInner">
          <header className="hero">
            <div className="container">
              <div className="nav">
                <div className="brand" style={{ gap: 12 }}>
                  <img src="/brand/newpath-auto-finance.png" alt="New Path Auto Finance" className="npLogo" />
                </div>
              </div>

              <div className="gridHero">
                <div className="card heroCard">
                  <div className="cardInner heroCardInner">
                    <h1 className="h1">
                      Create a New Path <span style={{ color: "var(--door1-red)" }}>forward</span>.
                    </h1>

                    <p className="sub">
                      Two doors. One clear next step—powered by the <strong>BALANCE Cipher</strong> and guided by the{" "}
                      <strong>Co-Pilot</strong>.
                    </p>

                    <div className="commandStrip" aria-label="Door instructions">
                      <div className="commandLine">
                        <span className="red">Get started today</span> <span className="arrow">→</span> choose Door 1.
                      </div>
                      <div className="commandLine">
                        <span className="brass">Discover the AI-driven Cipher tomorrow</span>{" "}
                        <span className="arrow">→</span> choose Door 2.
                      </div>
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
          <div className="decisionBar" aria-label="Choose a door">
            <a className="doorChoice red" href="#door-1" aria-label="Door 1: Get started today">
              <span className="doorSpine" aria-hidden="true" />
              <div className="doorChoiceInner">
                <div className="doorChoiceTop">
                  <span className="doorBadge red">DOOR 1</span>
                  <div className="doorChoiceTitle">
                    <span className="redWord">Get started</span> today.
                  </div>
                </div>
                <div className="doorChoiceSub">Start the process and get routed the right way.</div>
                <div className="doorChoiceHint">Tap to jump ↓</div>
              </div>
            </a>

            <a className="doorChoice black" href="#door-2" aria-label="Door 2: Discover the AI-driven Cipher tomorrow">
              <span className="doorSpine" aria-hidden="true" />
              <div className="doorChoiceInner">
                <div className="doorChoiceTop">
                  <span className="doorBadge black">DOOR 2</span>
                  <div className="doorChoiceTitle">
                    Discover the <span className="brassEmph">AI-driven</span> Cipher tomorrow.
                  </div>
                </div>
                <div className="doorChoiceSub">See the pattern, then take one clear next move.</div>
                <div className="doorChoiceHint">Tap to jump ↓</div>
              </div>
            </a>
          </div>

          {/* ✅ FLOW CHANGE: Door 1 detail card now, Door 2 detail card later (closer to Cipher). */}
          <div className="doorStack">
            {/* DOOR 1 DETAIL */}
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
          </div>

          <div className="muted" style={{ fontSize: 13, marginTop: 14, color: "rgba(15,23,42,0.66)" }}>
            If you only do one thing: Door 1 is your “today” move. Door 2 is your “map” when you want to build strength.
          </div>
        </div>
      </Section>

      {/* Cipher section + Door 2 detail placed just above it for a natural transition */}
      <Section id="cipher" title="The BALANCE Cipher" desc="It’s not a checklist. It’s a map.">
        {/* DOOR 2 DETAIL (moved down here, near Cipher) */}
        <div style={{ marginBottom: 18 }}>
          <div className="doorCard black" id="door-2" aria-label="Door 2: Tomorrow">
            <div className="doorRail black" aria-hidden="true" />
            <div className="doorInner">
              <div className="doorKicker">
                <span className="doorPill">DOOR 2</span>
                <span className="laneTag black">Discover tomorrow</span>
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
                <a className="ctaPill black" href="https://app.balancecipher.com/" target="_blank" rel="noopener noreferrer">
                  Open the Cipher →
                </a>
              </div>

              <ul className="miniList" aria-label="Door 2 points">
                <li className="miniItem">
                  <span className="miniMark brass" aria-hidden="true" />
                  <span><strong>See the pattern</strong> behind your results.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark brass" aria-hidden="true" />
                  <span><strong>Learn the next move</strong> that changes your outcome.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark brass" aria-hidden="true" />
                  <span><strong>Auto → Home:</strong> build stability and real readiness over time.</span>
                </li>
              </ul>

              <div
                style={{
                  border: "2px solid rgba(0,0,0,0.10)",
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
              Open your new door—<span style={{ color: "var(--door1-red)" }}>with the Cipher</span>.
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
