// app/page.tsx

import Section from "../components/Section";

export default function Page() {
  return (
    <main>
      <style>{`
        html, body { background: #ffffff !important; }

        :root{
          --ink: rgba(15,23,42,0.92);
          --muted: rgba(15,23,42,0.72);
          --soft: rgba(15,23,42,0.55);
          --border: rgba(0,0,0,0.10);
          --shadow: 0 22px 70px rgba(0,0,0,0.10);
          --shadowSoft: 0 16px 46px rgba(0,0,0,0.08);
          --r: 24px;
          --pill: 999px;
        }

        /* Global readability */
        .h1 { letter-spacing: -0.03em; }
        .sub { line-height: 1.5; }
        strong { font-weight: 900; color: var(--ink); }

        /* Subtle premium page atmosphere */
        .pageGlow {
          position: fixed;
          inset: -40vh -20vw auto -20vw;
          height: 65vh;
          background:
            radial-gradient(closest-side, rgba(220, 38, 38, 0.10), rgba(220, 38, 38, 0.00) 65%),
            radial-gradient(closest-side, rgba(20, 184, 166, 0.10), rgba(20, 184, 166, 0.00) 65%);
          filter: blur(14px);
          pointer-events: none;
          z-index: 0;
        }

        /* HERO row: pills + cipher pill */
        .heroPillsRow {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          margin-top: 12px;
        }

        /* Cipher pill */
        .cipherPill {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          border-radius: var(--pill);
          border: 1px solid rgba(0,0,0,0.12);
          background: #ffffff;
          box-shadow: 0 14px 34px rgba(0,0,0,0.08);
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
          border-radius: var(--pill);
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

        /* Doors section typography (bigger / easier to read) */
        #doors .sectionTitle {
          font-size: clamp(36px, 5.2vw, 58px);
          line-height: 1.02;
          letter-spacing: -0.03em;
        }
        #doors .sectionDesc {
          font-size: 17px;
          max-width: 820px;
          line-height: 1.6;
          color: var(--muted);
        }

        /* STACKED doors (not side-by-side) */
        .doorStack {
          display: grid;
          gap: 18px;
        }

        .doorCard {
          position: relative;
          border: 1px solid var(--border);
          border-radius: var(--r);
          background: #ffffff;
          box-shadow: var(--shadowSoft);
          overflow: hidden;
        }

        /* Door “energy” strip */
        .doorCard::before{
          content:"";
          position:absolute;
          inset: 0;
          background:
            radial-gradient(800px 240px at 12% 0%, rgba(220,38,38,0.10), rgba(220,38,38,0.00) 70%),
            radial-gradient(900px 300px at 92% 0%, rgba(20,184,166,0.10), rgba(20,184,166,0.00) 70%),
            linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00));
          pointer-events:none;
        }

        .doorInner {
          position: relative;
          padding: 24px 22px;
          display: grid;
          gap: 12px;
        }
        @media (min-width: 980px){
          .doorInner{
            padding: 28px 28px;
          }
        }

        .doorTopRow{
          display:flex;
          align-items:center;
          justify-content:space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        .doorBadgeRow{
          display:inline-flex;
          align-items:center;
          gap: 10px;
        }

        .doorBadge {
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 7px 12px;
          border-radius: var(--pill);
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.92);
          font-weight: 950;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-size: 11px;
          color: rgba(0,0,0,0.74);
          white-space: nowrap;
          box-shadow: 0 10px 22px rgba(0,0,0,0.06);
        }

        .doorMeta {
          font-size: 12px;
          font-weight: 850;
          color: rgba(15,23,42,0.56);
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        .doorTitle {
          margin: 0;
          font-size: clamp(20px, 2.2vw, 26px);
          line-height: 1.15;
          letter-spacing: -0.02em;
          font-weight: 1000;
          color: var(--ink);
        }

        .doorBody {
          margin: 0;
          font-size: 16px;
          line-height: 1.65;
          color: rgba(15,23,42,0.74);
          max-width: 920px;
          font-weight: 650;
        }

        /* Bullets: tighter, modern */
        .miniList {
          margin: 2px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 10px;
        }
        .miniItem {
          display: grid;
          grid-template-columns: 18px 1fr;
          gap: 10px;
          align-items: start;
          font-size: 15px;
          line-height: 1.55;
          color: rgba(15,23,42,0.70);
          font-weight: 650;
        }
        .miniMark {
          width: 10px;
          height: 10px;
          border-radius: var(--pill);
          margin-top: 7px;
          background: var(--accent);
          opacity: 0.28;
          box-shadow: 0 0 0 6px rgba(220,38,38,0.06);
        }

        /* Door footer: CTA pill button (ONLY CTA per door) */
        .doorFooter {
          display:flex;
          align-items:center;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 6px;
        }

        .ctaPill {
          display:inline-flex;
          align-items:center;
          justify-content:center;
          height: 54px;
          padding: 0 22px;
          border-radius: var(--pill);
          text-decoration:none;
          font-weight: 1000;
          letter-spacing: 0.01em;
          white-space: nowrap;
          border: 1px solid rgba(0,0,0,0.08);
          box-shadow: 0 18px 40px rgba(0,0,0,0.10);
          transform: translateY(0);
          transition: transform 160ms ease, box-shadow 160ms ease, filter 160ms ease;
        }
        .ctaPill:active { transform: translateY(1px); }

        .ctaPrimary {
          background: var(--accent);
          color: #ffffff;
        }
        .ctaPrimary:hover {
          box-shadow: 0 22px 54px rgba(0,0,0,0.14);
          filter: saturate(1.05);
          transform: translateY(-1px);
        }

        .ctaCipher {
          background: #0b0b0f;
          color: #ffffff;
          border-color: rgba(255,255,255,0.12);
          box-shadow: 0 18px 46px rgba(0,0,0,0.18);
        }
        .ctaCipher:hover{
          box-shadow: 0 24px 62px rgba(0,0,0,0.22);
          transform: translateY(-1px);
        }

        /* Small CTA icon */
        .ctaIcon {
          width: 18px;
          height: 18px;
          border-radius: 6px;
          display:inline-grid;
          place-items:center;
          margin-right: 10px;
          background: rgba(255,255,255,0.16);
          border: 1px solid rgba(255,255,255,0.14);
        }
        .ctaIconLight{
          background: rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.10);
        }

        /* Door “What this is / isn’t” box */
        .doorNote {
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(255,255,255,0.86);
          border-radius: 18px;
          padding: 14px 14px;
          display: grid;
          gap: 6px;
          margin-top: 2px;
        }
        .doorNoteTitle{
          margin:0;
          font-weight: 1000;
          font-size: 13px;
          color: rgba(15,23,42,0.78);
          letter-spacing: -0.01em;
        }
        .doorNoteBody{
          margin:0;
          font-size: 14px;
          color: rgba(15,23,42,0.70);
          line-height: 1.55;
          font-weight: 650;
        }

        /* Cipher section (keep visual power) */
        #cipher .cipherWrap{
          border: 1px solid rgba(0,0,0,0.10);
          border-radius: 26px;
          background: #ffffff;
          box-shadow: var(--shadowSoft);
          overflow: hidden;
          position: relative;
        }
        #cipher .cipherWrap::before{
          content:"";
          position:absolute;
          inset:0;
          background:
            radial-gradient(900px 300px at 50% 0%, rgba(20,184,166,0.12), rgba(20,184,166,0.00) 70%),
            radial-gradient(900px 320px at 10% 40%, rgba(220,38,38,0.06), rgba(220,38,38,0.00) 72%);
          pointer-events:none;
        }
        #cipher .cipherInner{
          position: relative;
          padding: 18px 18px 22px;
          display:grid;
          gap: 12px;
          align-items:center;
        }
        @media (min-width: 980px){
          #cipher .cipherInner{ padding: 22px 22px 26px; }
        }

        #cipher .cipherTitle{
          margin: 0;
          font-size: clamp(26px, 4vw, 40px);
          line-height: 1.1;
          letter-spacing: -0.03em;
          font-weight: 1000;
          color: var(--ink);
        }
        #cipher .cipherCopy{
          margin: 0;
          max-width: 860px;
          line-height: 1.65;
          color: rgba(15,23,42,0.76);
          font-weight: 650;
          font-size: 16px;
        }
      `}</style>

      <div className="pageGlow" aria-hidden="true" />

      <header className="hero" style={{ position: "relative", zIndex: 1 }}>
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

                <p className="sub" style={{ fontSize: 16, color: "rgba(15,23,42,0.78)", fontWeight: 650 }}>
                  <strong>Two doors.</strong> One clear next step—powered by the <strong>BALANCE Cipher</strong> and guided
                  by the <strong>Co-Pilot</strong>.
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
                    <img className="cipherPillEmblem" src="/brand/balance-cipher-emblem.png" alt="BALANCE Cipher emblem" />
                  </span>
                </div>

                {/* No hero buttons (keeps 2-CTA rule). Visual cue instead. */}
                <div className="muted" style={{ fontSize: 12, marginTop: 12 }}>
                  Door 1 is <strong>today</strong>. Door 2 is <strong>tomorrow</strong>. Scroll down and pick one.
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
        <div className="doorStack">
          {/* DOOR 1 — TODAY (CTA #1) */}
          <div className="doorCard" id="door-1">
            <div className="doorInner">
              <div className="doorTopRow">
                <div className="doorBadgeRow">
                  <span className="doorBadge">DOOR 1</span>
                  <span className="doorMeta">Today • Approval Path</span>
                </div>
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
                  <span><strong>Clean path:</strong> simple, clear, direct.</span>
                </li>
              </ul>

              <div className="doorNote">
                <p className="doorNoteTitle">What this door is</p>
                <p className="doorNoteBody">The “today” move. Direct. Action-first. No extra decisions.</p>
              </div>

              <div className="doorFooter">
                <a
                  className="ctaPill ctaPrimary"
                  href="https://capture-of-application.vercel.app/apply?utm_source=newpath-landing&utm_medium=door&utm_campaign=two-door"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Start my application"
                >
                  <span className="ctaIcon ctaIconLight" aria-hidden="true">→</span>
                  Start my application
                </a>
              </div>
            </div>
          </div>

          {/* DOOR 2 — TOMORROW (CTA #2) */}
          <div className="doorCard" id="door-2">
            <div className="doorInner">
              <div className="doorTopRow">
                <div className="doorBadgeRow">
                  <span className="doorBadge">DOOR 2</span>
                  <span className="doorMeta">Tomorrow • The Map</span>
                </div>
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

              <div className="doorNote">
                <p className="doorNoteTitle">What it isn’t</p>
                <p className="doorNoteBody">Not shame. Not lectures. Not “do 20 things.” Just clarity—then one move at a time.</p>
              </div>

              <div className="doorFooter">
                <a
                  className="ctaPill ctaCipher"
                  href="https://app.balancecipher.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open the BALANCE Cipher"
                >
                  <span className="ctaIcon" aria-hidden="true">◎</span>
                  Open the Cipher
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="muted" style={{ fontSize: 12, marginTop: 14 }}>
          If you only do one thing: Door 1 is your “today” move. Door 2 is your “map” when you want to build strength.
        </div>
      </Section>

      {/* Cipher visual section stays (no extra CTA button here) */}
      <Section id="cipher" title="The BALANCE Cipher" desc="It’s not a checklist. It’s a map.">
        <div className="cipherWrap">
          <div className="cipherInner">
            <img
              src="/brand/balance-cipher-emblem.png"
              alt="BALANCE Cipher emblem"
              style={{ width: "min(460px, 92vw)", height: "auto", display: "block", margin: "6px auto 0" }}
            />

            <h3 className="cipherTitle">
              Open your new door—<span style={{ color: "var(--accent)" }}>with the Cipher</span>.
            </h3>

            <p className="cipherCopy">
              Most people don’t need more information. They need to <strong>see what’s real</strong>—then take{" "}
              <strong>one clean next step</strong>. The Cipher reveals the pattern, and the Co-Pilot translates it into
              something <strong>simple</strong> and <strong>doable</strong>.
            </p>

            <div className="muted" style={{ fontSize: 12 }}>
              Quiet power. <strong>Clear direction.</strong> One move at a time.
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
