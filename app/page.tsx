// app/page.tsx

import Section from "../components/Section";

export default function Page() {
  return (
    <main>
      <style>{`
        html, body { background: #ffffff !important; }

        /* ======================================================
           PREMIUM UPGRADE LAYER (NO DRIFT)
           - Keep global layout classes (hero/container/card/etc.)
           - Replace "cheap cards" with modern glass + depth
           - Improve typography + hierarchy
           - Maintain Two-Door + 2 CTA total
        ====================================================== */

        :root{
          --ink: rgba(15,23,42,0.92);
          --muted: rgba(15,23,42,0.72);
          --muted2: rgba(15,23,42,0.60);

          --line: rgba(0,0,0,0.10);
          --line2: rgba(0,0,0,0.14);

          --r-xl: 28px;
          --r-lg: 22px;
          --pill: 999px;

          --shadow-xl: 0 28px 80px rgba(0,0,0,0.12);
          --shadow-lg: 0 20px 56px rgba(0,0,0,0.10);
          --shadow-md: 0 14px 34px rgba(0,0,0,0.08);

          --glass: rgba(255,255,255,0.72);
          --glass2: rgba(255,255,255,0.84);
        }

        /* Strong tags: premium emphasis without shouting */
        strong { font-weight: 900; color: var(--ink); }

        /* HERO typography */
        .h1{
          letter-spacing: -0.03em !important;
          line-height: 1.02 !important;
        }
        .sub{
          line-height: 1.55 !important;
          color: rgba(15,23,42,0.78) !important;
          font-weight: 650 !important;
          font-size: 16px !important;
          max-width: 760px;
        }

        /* HERO card becomes premium */
        .hero .card{
          border-radius: var(--r-xl) !important;
          border: 1px solid var(--line) !important;
          background:
            radial-gradient(1200px 600px at 18% 8%, rgba(255,255,255,0.95), rgba(255,255,255,0.70)),
            radial-gradient(900px 420px at 85% 15%, rgba(0,0,0,0.02), rgba(255,255,255,0.0)),
            #fff !important;
          box-shadow: var(--shadow-xl) !important;
          position: relative;
          overflow: hidden;
        }
        .hero .card::before{
          content:"";
          position:absolute;
          inset:-2px;
          background:
            radial-gradient(520px 260px at 18% 18%, rgba(255,255,255,0.85), rgba(255,255,255,0.0)),
            radial-gradient(520px 260px at 78% 18%, rgba(0,0,0,0.03), rgba(255,255,255,0.0));
          pointer-events:none;
        }
        .cardInner{ padding-top: 26px !important; padding-bottom: 26px !important; }

        /* HERO: pills + cipher pill row */
        .heroPillsRow{
          display:flex;
          flex-wrap:wrap;
          align-items:center;
          gap:10px;
          margin-top:12px;
        }

        /* existing pills get slightly more premium */
        .pill{
          border-radius: var(--pill) !important;
          border: 1px solid rgba(0,0,0,0.10) !important;
          background: rgba(255,255,255,0.78) !important;
          box-shadow: 0 10px 22px rgba(0,0,0,0.05) !important;
          font-weight: 800 !important;
        }

        /* Cipher pill (premium glass) */
        .cipherPill{
          display:inline-flex;
          align-items:center;
          gap:12px;
          padding: 10px 14px;
          border-radius: var(--pill);
          border: 1px solid rgba(0,0,0,0.12);
          background: var(--glass2);
          box-shadow: 0 14px 34px rgba(0,0,0,0.08);
          white-space:nowrap;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .cipherPillText{
          font-weight: 950;
          font-size: 12px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          opacity: 0.82;
          color: rgba(15,23,42,0.78);
        }
        .cipherPillAccent{
          width: 10px;
          height: 38px;
          border-radius: var(--pill);
          background: var(--accent);
          opacity: 0.18;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.04) inset;
          flex: 0 0 auto;
        }
        .cipherPillEmblem{
          height: 38px;
          width:auto;
          display:block;
          object-fit:contain;
          background:transparent !important;
          border:none !important;
          border-radius:0 !important;
          padding:0 !important;
          margin:0 !important;
          filter: drop-shadow(0 10px 18px rgba(0,0,0,0.12));
        }

        /* ONLY TWO CTAs — site wide */
        .ctaRow{
          display:flex;
          flex-wrap:wrap;
          gap:12px;
          align-items:center;
          margin-top: 14px;
        }
        .btnPrimaryTight{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          height: 52px;
          padding: 0 22px;
          border-radius: var(--pill);
          background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.0)) , var(--accent);
          color:#fff;
          font-weight: 950;
          letter-spacing: 0.01em;
          text-decoration:none;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 16px 40px rgba(0,0,0,0.14);
          transition: transform 160ms ease, box-shadow 160ms ease, filter 160ms ease;
          white-space:nowrap;
        }
        .btnPrimaryTight:hover{
          transform: translateY(-1px);
          box-shadow: 0 20px 54px rgba(0,0,0,0.18);
          filter: saturate(1.05);
        }
        .btnGhostTight{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          height: 52px;
          padding: 0 18px;
          border-radius: var(--pill);
          background: rgba(255,255,255,0.82);
          color: var(--ink);
          font-weight: 950;
          text-decoration:none;
          border: 1px solid rgba(0,0,0,0.14);
          box-shadow: 0 14px 34px rgba(0,0,0,0.10);
          transition: transform 160ms ease, box-shadow 160ms ease;
          white-space:nowrap;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .btnGhostTight:hover{
          transform: translateY(-1px);
          box-shadow: 0 18px 46px rgba(0,0,0,0.14);
        }

        /* DOORS section title hierarchy */
        #doors .sectionTitle{
          font-size: clamp(36px, 5.6vw, 58px) !important;
          line-height: 1.02 !important;
          letter-spacing: -0.03em !important;
        }
        #doors .sectionDesc{
          font-size: 16px !important;
          max-width: 860px !important;
          line-height: 1.6 !important;
          color: rgba(15,23,42,0.72) !important;
          font-weight: 650 !important;
        }

        /* Door grid */
        .doorGrid{
          display:grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 8px;
        }
        @media (max-width: 920px){
          .doorGrid{ grid-template-columns: 1fr; }
        }

        /* Door cards — modern, cinematic, not “90s” */
        .doorCard{
          border-radius: var(--r-xl);
          border: 1px solid rgba(0,0,0,0.10);
          box-shadow: var(--shadow-lg);
          overflow:hidden;
          position:relative;
          background: #fff;
          transition: transform 180ms ease, box-shadow 180ms ease;
          min-height: 320px;
        }
        .doorCard:hover{
          transform: translateY(-2px);
          box-shadow: 0 26px 72px rgba(0,0,0,0.14);
        }
        .doorInner{
          padding: 22px 22px 20px;
          display:grid;
          gap: 12px;
          position:relative;
          z-index: 2;
        }

        /* Door header row: badge + accent spine */
        .doorTop{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 12px;
        }
        .doorBadge{
          display:inline-flex;
          align-items:center;
          gap: 10px;
          padding: 9px 12px;
          border-radius: var(--pill);
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(255,255,255,0.78);
          box-shadow: 0 12px 28px rgba(0,0,0,0.08);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          white-space: nowrap;
        }
        .doorBadgeLabel{
          font-weight: 950;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-size: 11px;
          color: rgba(15,23,42,0.78);
        }
        .doorBadgeDot{
          width: 10px;
          height: 28px;
          border-radius: var(--pill);
          background: var(--accent);
          opacity: 0.20;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.04) inset;
        }

        .doorMeta{
          font-size: 12px;
          color: rgba(15,23,42,0.62);
          font-weight: 700;
          white-space: nowrap;
        }

        .doorTitle{
          margin: 0;
          font-size: 22px;
          line-height: 1.12;
          letter-spacing: -0.02em;
          font-weight: 980;
          color: var(--ink);
        }
        .doorBody{
          margin: 0;
          font-size: 15.5px;
          line-height: 1.62;
          color: rgba(15,23,42,0.76);
          font-weight: 650;
          max-width: 560px;
        }

        /* Bullet style: premium, not “menu list” */
        .miniList{
          margin: 2px 0 0;
          padding: 0;
          list-style: none;
          display:grid;
          gap: 9px;
        }
        .miniItem{
          display:grid;
          grid-template-columns: 16px 1fr;
          gap: 10px;
          align-items:start;
          font-size: 14.5px;
          line-height: 1.55;
          color: rgba(15,23,42,0.72);
          font-weight: 650;
        }
        .miniMark{
          width: 10px;
          height: 10px;
          border-radius: var(--pill);
          margin-top: 7px;
          background: var(--accent);
          opacity: 0.22;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.04) inset;
        }

        /* Door “glass panel” at bottom for extra polish */
        .doorPanel{
          margin-top: 8px;
          border-radius: var(--r-lg);
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(255,255,255,0.72);
          box-shadow: var(--shadow-md);
          padding: 14px 14px;
          color: rgba(15,23,42,0.72);
          font-size: 13.5px;
          line-height: 1.55;
          font-weight: 650;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
        .doorPanelTitle{
          margin: 0 0 6px;
          font-weight: 950;
          letter-spacing: -0.01em;
          color: rgba(15,23,42,0.90);
          font-size: 14px;
        }
        .doorPanelBody{
          margin: 0;
        }

        /* Door 1 background (warm / approval energy) */
        .doorCard.door1::before{
          content:"";
          position:absolute;
          inset:0;
          background:
            radial-gradient(900px 520px at 12% 12%, rgba(0,0,0,0.03), rgba(255,255,255,0.0)),
            radial-gradient(760px 460px at 80% 12%, rgba(255,255,255,0.95), rgba(255,255,255,0.0)),
            linear-gradient(180deg, rgba(255,255,255,0.70), rgba(255,255,255,1.0));
          pointer-events:none;
        }
        .doorCard.door1::after{
          content:"";
          position:absolute;
          inset:-2px;
          background:
            radial-gradient(520px 220px at 16% 18%, rgba(255,255,255,0.90), rgba(255,255,255,0.0)),
            radial-gradient(520px 220px at 78% 18%, rgba(0,0,0,0.04), rgba(255,255,255,0.0));
          pointer-events:none;
          opacity: 0.95;
        }

        /* Door 2 background (Cipher energy) */
        .doorCard.door2::before{
          content:"";
          position:absolute;
          inset:0;
          background:
            radial-gradient(900px 520px at 18% 0%, rgba(0,0,0,0.04), rgba(255,255,255,0.0)),
            radial-gradient(680px 420px at 92% 10%, rgba(0,0,0,0.03), rgba(255,255,255,0.0)),
            radial-gradient(520px 420px at 78% 28%, rgba(0,0,0,0.02), rgba(255,255,255,0.0)),
            linear-gradient(180deg, rgba(255,255,255,0.70), rgba(255,255,255,1.0));
          pointer-events:none;
        }
        /* faint emblem watermark feel without needing another asset */
        .doorCard.door2::after{
          content:"";
          position:absolute;
          right: -140px;
          top: -120px;
          width: 360px;
          height: 360px;
          border-radius: 999px;
          background:
            radial-gradient(circle at 40% 40%, rgba(0,0,0,0.04), rgba(255,255,255,0.0) 60%),
            radial-gradient(circle at 60% 60%, rgba(0,0,0,0.02), rgba(255,255,255,0.0) 70%);
          opacity: 0.9;
          pointer-events:none;
          filter: blur(0.2px);
        }

        /* “Only 2 CTAs” reminder line */
        .ruleLine{
          margin-top: 10px;
          font-size: 12px;
          color: rgba(15,23,42,0.58);
          font-weight: 700;
        }

        /* Cipher section: keep, but no extra CTA buttons here */
        #cipher .cipherWrap{
          border-radius: var(--r-xl);
          border: 1px solid rgba(0,0,0,0.10);
          background: #fff;
          box-shadow: var(--shadow-lg);
          padding: 22px 20px;
          display:grid;
          gap: 12px;
        }
        #cipher .cipherTitle{
          margin: 0;
          font-size: clamp(28px, 4.2vw, 40px);
          line-height: 1.1;
          letter-spacing: -0.03em;
          font-weight: 980;
          color: var(--ink);
        }
        #cipher .cipherCopy{
          margin: 0;
          max-width: 820px;
          line-height: 1.65;
          color: rgba(15,23,42,0.76);
          font-weight: 650;
          font-size: 15.5px;
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

                  <a
                    className="btnGhostTight"
                    href="https://app.balancecipher.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open the Cipher →
                  </a>
                </div>

                <div className="ruleLine">
                  Door 1 is <strong>today</strong>. Door 2 is <strong>tomorrow</strong>. Two choices. Move with clarity.
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
          <div className="doorCard door1" id="door-1">
            <div className="doorInner">
              <div className="doorTop">
                <span className="doorBadge" aria-label="Door 1">
                  <span className="doorBadgeLabel">Door 1</span>
                  <span className="doorBadgeDot" aria-hidden="true" />
                </span>
                <span className="doorMeta">Today • Approval Path</span>
              </div>

              <h3 className="doorTitle">Today: Get approved the right way</h3>

              <p className="doorBody">
                If you’re ready to move now, the application is your cleanest first step. We route you into a calm,
                lender-aligned path—without overwhelm.
              </p>

              <ul className="miniList" aria-label="Door 1 points">
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span><strong>One move:</strong> start the application.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span><strong>Today’s rules:</strong> we focus on what lenders care about now.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span><strong>Clean path:</strong> simple, clear, and direct.</span>
                </li>
              </ul>

              <div className="doorPanel">
                <p className="doorPanelTitle">What this door is</p>
                <p className="doorPanelBody">
                  The “today” move. Direct. Action-first. No extra decisions.
                </p>
              </div>
            </div>
          </div>

          {/* DOOR 2 — TOMORROW */}
          <div className="doorCard door2" id="door-2">
            <div className="doorInner">
              <div className="doorTop">
                <span className="doorBadge" aria-label="Door 2">
                  <span className="doorBadgeLabel">Door 2</span>
                  <span className="doorBadgeDot" aria-hidden="true" />
                </span>
                <span className="doorMeta">Tomorrow • The Map</span>
              </div>

              <h3 className="doorTitle">Tomorrow: The BALANCE Cipher (what it is—and what it isn’t)</h3>

              <p className="doorBody">
                The Cipher isn’t a checklist. It’s a map. It shows why outcomes repeat—and the Co-Pilot translates that
                map into <strong>one clear next step</strong>.
              </p>

              <ul className="miniList" aria-label="Door 2 points">
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span><strong>See the pattern</strong> behind your results.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span><strong>Learn the next move</strong> that actually changes your outcome.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span><strong>Auto → Home:</strong> build stability and real readiness over time.</span>
                </li>
              </ul>

              <div className="doorPanel">
                <p className="doorPanelTitle">What it isn’t</p>
                <p className="doorPanelBody">
                  Not shame. Not lectures. Not “do 20 things.” Just clarity—then one move at a time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ruleLine" style={{ marginTop: 14 }}>
          If you only do one thing: Door 1 is your “today” move. Door 2 is your “map” when you want to build strength.
        </div>
      </Section>

      {/* KEEP CIPHER SECTION (NO EXTRA CTA BUTTONS HERE — CTAs ARE HERO ONLY) */}
      <Section id="cipher" title="The BALANCE Cipher" desc="It’s not a checklist. It’s a map.">
        <div className="cipherWrap">
          <img
            src="/brand/balance-cipher-emblem.png"
            alt="BALANCE Cipher emblem"
            style={{
              width: "min(420px, 92vw)",
              height: "auto",
              display: "block",
              margin: "6px auto 0",
              filter: "drop-shadow(0 18px 34px rgba(0,0,0,0.18))",
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

          <div className="ruleLine">
            Quiet power. <strong>Clear direction.</strong> One move at a time.
          </div>
        </div>
      </Section>
    </main>
  );
}
