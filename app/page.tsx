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

        :root {
          --np-ink: rgba(15,23,42,0.92);
          --np-muted: rgba(15,23,42,0.74);
          --np-border: rgba(0,0,0,0.10);
          --np-shadow: 0 22px 60px rgba(0,0,0,0.10);
          --np-shadow-soft: 0 16px 42px rgba(0,0,0,0.08);
          --np-radius: 26px;
          --np-pill: 999px;

          /* Accent lanes */
          --lane-red: #dc2626;        /* New Path red - action/confidence */
          --lane-teal: #19d3c5;       /* Cipher teal glow/clarity */
          --lane-teal-soft: rgba(25,211,197,0.22);
          --lane-red-soft: rgba(220,38,38,0.18);
        }

        strong { font-weight: 900; color: var(--np-ink); }

        /* HERO STAGE (decision moment) */
        .heroStage {
          position: relative;
          overflow: hidden;
          padding: 60px 20px 40px;
          background:
            linear-gradient(180deg, #f8fafc 0%, #ffffff 100%),
            radial-gradient(900px 420px at 18% 22%, rgba(220,38,38,0.06), transparent 70%),
            radial-gradient(800px 460px at 70% 25%, rgba(25,211,197,0.05), transparent 70%);
        }
        .heroStage::before {
          content: "";
          position: absolute;
          inset: -2px;
          background:
            radial-gradient(720px 360px at 22% 36%, var(--lane-red-soft), transparent 68%),
            radial-gradient(820px 420px at 70% 38%, var(--lane-teal-soft), transparent 70%);
          filter: blur(18px);
          opacity: 0.9;
          pointer-events: none;
        }

        .heroInner {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
        }

        .h1 {
          font-size: clamp(40px, 6vw, 64px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: rgba(0,0,0,0.92);
          font-weight: 950;
          margin: 0 0 16px;
        }

        .sub {
          font-size: 18px;
          line-height: 1.5;
          color: rgba(15,23,42,0.82);
          max-width: 760px;
          margin: 0 auto 24px;
        }

        /* Trust strip */
        .trustStrip {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin: 24px 0 40px;
        }
        .trustBadge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          border-radius: var(--np-pill);
          border: 1px solid rgba(0,0,0,0.08);
          background: rgba(255,255,255,0.92);
          box-shadow: 0 8px 24px rgba(0,0,0,0.05);
          font-size: 13px;
          font-weight: 800;
          color: rgba(15,23,42,0.78);
          white-space: nowrap;
        }
        .trustDot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(0,0,0,0.3);
        }

        /* DOOR STACK */
        .doorStack {
          display: grid;
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .doorCard {
          position: relative;
          border: 1px solid rgba(0,0,0,0.10);
          border-radius: var(--np-radius);
          background: rgba(255,255,255,0.94);
          box-shadow: var(--np-shadow-soft);
          overflow: hidden;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }
        .doorCard:hover {
          transform: translateY(-8px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.12);
        }

        .doorRail {
          height: 12px;
          width: 100%;
        }
        .doorRail.red { background: linear-gradient(90deg, var(--lane-red) 0%, transparent 100%); }
        .doorRail.teal { background: linear-gradient(90deg, var(--lane-teal) 0%, transparent 100%); }

        .doorInner {
          padding: 32px 28px;
          display: grid;
          gap: 20px;
        }

        .doorKicker {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .doorPill {
          padding: 8px 16px;
          border-radius: var(--np-pill);
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(0,0,0,0.04);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(15,23,42,0.78);
        }

        .laneTag {
          font-size: 14px;
          font-weight: 800;
          color: rgba(15,23,42,0.68);
        }

        .doorTitle {
          font-size: 28px;
          line-height: 1.14;
          font-weight: 950;
          color: var(--np-ink);
          margin: 0;
        }

        .doorBody {
          font-size: 16px;
          line-height: 1.6;
          color: rgba(15,23,42,0.78);
          margin: 0;
        }

        .doorVisual {
          border: 1px solid rgba(0,0,0,0.10);
          border-radius: 18px;
          padding: 16px;
          background: rgba(0,0,0,0.02);
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .visualIcon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(255,255,255,0.92);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
          position: relative;
          flex-shrink: 0;
        }

        .visualIcon.red::before { background: var(--lane-red); opacity: 0.15; }
        .visualIcon.teal::before { background: var(--lane-teal); opacity: 0.15; }

        .visualText {
          flex: 1;
          min-width: 0;
        }

        .visualTitle {
          font-weight: 950;
          font-size: 16px;
          color: var(--np-ink);
        }

        .visualSub {
          font-size: 14px;
          color: rgba(15,23,42,0.68);
          line-height: 1.4;
        }

        .ctaPill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 56px;
          padding: 0 32px;
          border-radius: var(--np-pill);
          font-weight: 900;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.18s ease;
          white-space: nowrap;
        }

        .ctaPill.red {
          background: var(--lane-red);
          color: white;
          box-shadow: 0 12px 32px rgba(220,38,38,0.18);
        }
        .ctaPill.red:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(220,38,38,0.24);
        }

        .ctaPill.teal {
          background: rgba(25,211,197,0.92);
          color: white;
          box-shadow: 0 12px 32px rgba(25,211,197,0.18);
        }
        .ctaPill.teal:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(25,211,197,0.24);
        }

        /* Cipher section */
        .cipherCard {
          border: 1px solid rgba(0,0,0,0.10);
          border-radius: var(--np-radius);
          background: rgba(255,255,255,0.94);
          box-shadow: var(--np-shadow-soft);
          position: relative;
          overflow: hidden;
        }

        .cipherGlow {
          position: absolute;
          inset: -60px;
          background: radial-gradient(600px 280px at 50% 30%, rgba(25,211,197,0.22), transparent 70%);
          filter: blur(20px);
          pointer-events: none;
        }

        .cipherInner {
          position: relative;
          padding: 40px 28px;
          text-align: center;
        }

        .cipherTitle {
          font-size: clamp(32px, 5vw, 48px);
          line-height: 1.1;
          font-weight: 950;
          color: var(--np-ink);
          margin: 0 0 16px;
        }

        .cipherCopy {
          font-size: 17px;
          line-height: 1.6;
          color: rgba(15,23,42,0.78);
          max-width: 760px;
          margin: 0 auto 24px;
        }

        .cipherBullets {
          display: grid;
          gap: 16px;
          max-width: 680px;
          margin: 0 auto;
        }

        .cipherBullets li {
          font-size: 16px;
          line-height: 1.55;
          color: rgba(15,23,42,0.82);
          font-weight: 650;
          text-align: left;
        }

        /* Mobile fixes */
        @media (max-width: 768px) {
          .doorStack { gap: 32px; }
          .doorInner { padding: 28px 20px; }
          .doorVisual { flex-direction: column; text-align: center; }
          .ctaPill { width: 100%; }
        }
      `}</style>

      <header className="heroStage">
        <div className="heroInner">
          <div className="hero">
            <div className="brand">
              <img
                src="/brand/newpath-auto-finance.png"
                alt="New Path Auto Finance"
                style={{ width: 240, height: auto }}
              />
            </div>

            <h1 className="h1">
              Create a <span style={{ color: "var(--lane-red)" }}>New Path</span> forward.
            </h1>

            <p className="sub">
              Two doors. One clear next step—powered by the <strong>BALANCE Cipher</strong> and guided by the Co-Pilot.
            </p>

            <div className="trustStrip">
              <span className="trustBadge"><span className="trustDot" />No pressure</span>
              <span className="trustBadge"><span className="trustDot" />No confusion</span>
              <span className="trustBadge"><span className="trustDot" />Real next step</span>
              <span className="trustBadge"><span className="trustDot" />Clear direction</span>
            </div>

            <div className="muted" style={{ marginTop: 16, fontSize: 15, color: "rgba(15,23,42,0.70)" }}>
              Door 1 is <strong>today</strong>. Door 2 is <strong>tomorrow</strong>. Scroll to choose.
            </div>
          </div>
        </div>
      </header>

      <Section
        id="doors"
        title="Choose your door"
        desc="Door 1 is for getting approved today. Door 2 is for understanding the pattern and building your next move."
      >
        <div className="doorStack">
          {/* DOOR 1 — TODAY */}
          <div className="doorCard" id="door-1">
            <div className="doorRail red" />
            <div className="doorInner">
              <div className="doorKicker">
                <span className="doorPill">Door 1</span>
                <span className="laneTag">Today • Approval Path</span>
              </div>

              <h3 className="doorTitle">Today: Get approved the right way</h3>

              <p className="doorBody">
                Ready to move now? The application is your cleanest first step. We route you into a calm, lender-aligned path—without overwhelm.
              </p>

              <div className="doorVisual">
                <div className="visualLeft">
                  <span className="visualIcon iconRoad" />
                  <div className="visualText">
                    <div className="visualTitle">Action-first. One move.</div>
                    <div className="visualSub">Start the application → get routed.</div>
                  </div>
                </div>

                <a
                  className="ctaPill red"
                  href="https://capture-of-application.vercel.app/apply?utm_source=newpath-landing&utm_medium=door&utm_campaign=two-door"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start my application →
                </a>
              </div>

              <ul className="miniList">
                <li><span className="miniMark red" />One move: start the application.</li>
                <li><span className="miniMark red" />Today’s rules: focus on what lenders care about now.</li>
                <li><span className="miniMark red" />Clean path: simple, clear, and direct.</li>
              </ul>

              <div className="muted" style={{ fontSize: 14, color: "rgba(15,23,42,0.66)" }}>
                This is the direct “today” door. No extra decisions.
              </div>
            </div>
          </div>

          {/* DOOR 2 — TOMORROW */}
          <div className="doorCard" id="door-2">
            <div className="doorRail teal" />
            <div className="doorInner">
              <div className="doorKicker">
                <span className="doorPill">Door 2</span>
                <span className="laneTag">Tomorrow • The Map</span>
              </div>

              <h3 className="doorTitle">Tomorrow: The BALANCE Cipher</h3>

              <p className="doorBody">
                The Cipher isn’t a checklist. It’s a map. It shows why outcomes repeat—and the Co-Pilot translates that map into one clear next step.
              </p>

              <div className="doorVisual">
                <div className="visualLeft">
                  <span className="visualIcon iconCipher" />
                  <div className="visualText">
                    <div className="visualTitle">Cinematic clarity. Real leverage.</div>
                    <div className="visualSub">See the pattern → choose your next move.</div>
                  </div>
                </div>

                <a
                  className="ctaPill teal"
                  href="https://app.balancecipher.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open the Cipher →
                </a>
              </div>

              <ul className="miniList">
                <li><span className="miniMark teal" />See the pattern behind your results.</li>
                <li><span className="miniMark teal" />Learn the next move that changes your outcome.</li>
                <li><span className="miniMark teal" />Auto → Home: build stability and real readiness over time.</li>
              </ul>

              <div style={{
                border: "1px solid rgba(0,0,0,0.10)",
                borderRadius: 18,
                background: "rgba(0,0,0,0.02)",
                padding: "16px",
                marginTop: 12
              }}>
                <div style={{ fontWeight: 950, color: "rgba(15,23,42,0.90)", marginBottom: 8 }}>What it isn’t</div>
                <div style={{ color: "rgba(15,23,42,0.74)", fontSize: 14, lineHeight: 1.5 }}>
                  Not shame. Not lectures. Not “do 20 things.” Just clarity—then one move at a time.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="muted" style={{ fontSize: 14, marginTop: 24, color: "rgba(15,23,42,0.66)", textAlign: "center" }}>
          If you only do one thing: Door 1 is your “today” move. Door 2 is your “map” when you want to build strength.
        </div>
      </Section>

      {/* Cipher section - integrated */}
      <Section id="cipher" title="The BALANCE Cipher" desc="It’s not a checklist. It’s a map.">
        <div className="cipherCard">
          <div className="cipherGlow" />
          <div className="cipherInner">
            <img
              src="/brand/balance-cipher-emblem.png"
              alt="BALANCE Cipher emblem"
              style={{
                width: "min(480px, 90vw)",
                margin: "0 auto 24px",
                filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.20))",
              }}
            />

            <h3 className="cipherTitle">
              Open your new door—<span style={{ color: "var(--lane-teal)" }}>with the Cipher</span>.
            </h3>

            <p className="cipherCopy">
              Most people don’t need more information. They need to <strong>see what’s real</strong>—then take{" "}
              <strong>one clean next step</strong>. The Cipher reveals the pattern, and the Co-Pilot translates it into
              something <strong>simple</strong> and <strong>doable</strong>.
            </p>

            <ul className="cipherBullets">
              <li><span className="bDot" />Clarity first: know where you are and what matters.</li>
              <li><span className="bDot" />One next step: remove fog and take the right move.</li>
              <li><span className="bDot" />Options → freedom: better structure unlocks better terms over time.</li>
            </ul>

            <div className="muted" style={{ fontSize: 14, color: "rgba(15,23,42,0.66)" }}>
              Quiet power. <strong>Clear direction.</strong> One move at a time.
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
