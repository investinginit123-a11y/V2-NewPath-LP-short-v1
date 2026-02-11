// app/page.tsx

import Section from "../components/Section";
import LeadForm from "../components/LeadForm";

export default function Page() {
  return (
    <main>
      <style>{`
        html, body { background: #ffffff !important; }

        /* Global readability polish */
        .h1 { letter-spacing: -0.02em; }
        .sub { line-height: 1.45; }

        /* Strong tags: premium emphasis without “shouty” */
        strong {
          font-weight: 850;
          color: rgba(15,23,42,0.92);
        }

        /* Sections */
        #pillars .sectionTitle {
          font-size: clamp(34px, 5vw, 52px);
          line-height: 1.05;
          letter-spacing: -0.02em;
        }
        #pillars .sectionDesc {
          font-size: 16px;
          max-width: 720px;
          line-height: 1.55;
        }

        /* Cards */
        .cardInner { padding-top: 22px; padding-bottom: 22px; }

        /* Card typography */
        .itemTitle {
          font-size: 18px;
          line-height: 1.2;
          letter-spacing: -0.01em;
          font-weight: 900;
          margin-bottom: 8px;
        }
        .itemBody {
          font-size: 15px;
          line-height: 1.55;
          color: rgba(15,23,42,0.78);
        }
        .itemBody strong { color: rgba(15,23,42,0.92); }

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

        /* HERO: keep pills + cipher pill on the same wrapped row */
        .heroPillsRow {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          margin-top: 10px;
        }

        /* Door grid (2 only) */
        .doorGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        @media (max-width: 920px) {
          .doorGrid { grid-template-columns: 1fr; }
        }
        .doorCard {
          border: 1px solid rgba(0,0,0,0.10);
          background: #fff;
          border-radius: 22px;
          box-shadow: 0 18px 44px rgba(0,0,0,0.08);
        }
        .doorInner {
          padding: 22px 20px;
          display: grid;
          gap: 10px;
        }
        .doorKicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .doorTag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          border-radius: 999px;
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(0,0,0,0.02);
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 11px;
          color: rgba(0,0,0,0.72);
          white-space: nowrap;
        }
        .doorDot {
          width: 10px;
          height: 28px;
          border-radius: 999px;
          background: var(--accent);
          opacity: 0.16;
          flex: 0 0 auto;
        }
        .doorTitle {
          margin: 0;
          font-size: 20px;
          line-height: 1.15;
          letter-spacing: -0.01em;
          font-weight: 950;
        }
        .doorBody {
          margin: 0;
          font-size: 14px;
          line-height: 1.55;
          color: rgba(15,23,42,0.78);
        }

        /* CTA rows (consistent, clean) */
        .ctaRowInline {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-top: 12px;
        }
        .primaryCta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 46px;
          padding: 0 18px;
          border-radius: 14px;
          background: var(--accent);
          color: #fff;
          font-weight: 900;
          white-space: nowrap;
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
          text-decoration: none;
        }
        .secondaryCta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 46px;
          padding: 0 18px;
          border-radius: 14px;
          background: #fff;
          color: rgba(15,23,42,0.86);
          font-weight: 900;
          white-space: nowrap;
          box-shadow: 0 10px 20px rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.12);
          text-decoration: none;
        }

        /* Benefits grid (3 cards so it looks clean) */
        .benefitsLead { max-width: 820px; }
        .benefitsGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        @media (max-width: 920px) {
          .benefitsGrid { grid-template-columns: 1fr; }
        }
        .benefitsGrid .itemTitle {
          font-size: 16px;
          font-weight: 900;
          letter-spacing: -0.01em;
        }
        .benefitsGrid .itemBody {
          font-size: 14px;
          line-height: 1.55;
        }

        /* Bottom Door CTA (kept) */
        #get-started .doorWrap { display: grid; gap: 14px; }
        #get-started details.doorDetails { border-radius: 22px; }
        #get-started details.doorDetails > summary {
          list-style: none;
          cursor: pointer;
          user-select: none;
          border-radius: 22px;
          padding: 26px 24px;
          border: 1px solid rgba(0,0,0,0.10);
          background: #ffffff;
          box-shadow: 0 18px 44px rgba(0,0,0,0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          font-weight: 800;
          position: relative;
          overflow: hidden;
        }
        #get-started details.doorDetails > summary::-webkit-details-marker { display: none; }
        #get-started details.doorDetails > summary::before {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(0,0,0,0.00), rgba(0,0,0,0.03), rgba(0,0,0,0.00));
          transform: translateX(-40%);
          opacity: 0.9;
          pointer-events: none;
        }
        #get-started .doorBadge {
          width: 72px;
          height: 72px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          background: rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.08);
          flex: 0 0 auto;
        }
        #get-started .doorIcon {
          width: 30px;
          height: 40px;
          border: 2px solid rgba(0,0,0,0.60);
          border-radius: 7px;
          position: relative;
        }
        #get-started .doorIcon::before {
          content: "";
          position: absolute;
          left: 7px;
          top: 7px;
          right: 7px;
          bottom: 7px;
          border-radius: 5px;
          border: 1px solid rgba(0,0,0,0.18);
        }
        #get-started .doorIcon::after {
          content: "";
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: rgba(0,0,0,0.60);
          position: absolute;
          right: 6px;
          top: 50%;
          transform: translateY(-50%);
        }
        #get-started .doorText { display: grid; gap: 4px; flex: 1 1 auto; min-width: 0; }
        #get-started .doorTitle2 { font-size: 20px; line-height: 1.15; letter-spacing: -0.01em; }
        #get-started .doorSub { font-size: 13px; opacity: 0.72; font-weight: 500; line-height: 1.35; }
        #get-started .doorAction {
          padding: 14px 18px;
          border-radius: 14px;
          background: var(--accent);
          color: #fff;
          font-weight: 900;
          white-space: nowrap;
          flex: 0 0 auto;
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
        }
        #get-started details.doorDetails[open] > summary {
          box-shadow: 0 22px 54px rgba(0,0,0,0.10);
          border-color: rgba(0,0,0,0.14);
        }
        #get-started .doorBody { margin-top: 14px; }

        /* Bottom Cipher feature (big emblem) */
        #cipher .cipherHero {
          display: grid;
          gap: 12px;
          align-items: center;
        }
        #cipher .cipherEmblemBig {
          width: min(420px, 92vw);
          height: auto;
          display: block;
          object-fit: contain;
          margin: 4px auto 0;
        }
        #cipher .cipherTitle {
          font-size: clamp(26px, 4vw, 36px);
          line-height: 1.12;
          letter-spacing: -0.02em;
          margin: 0;
        }
        #cipher .cipherCopy {
          margin: 0;
          max-width: 720px;
          line-height: 1.6;
          color: rgba(15,23,42,0.78);
        }
        #cipher .cipherCopy strong { color: rgba(15,23,42,0.92); }
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
                  NewPath exists to help get you approved—using the <strong>BALANCE Cipher</strong> and the{" "}
                  <strong>Co-Pilot</strong> to turn your situation into <strong>one clear next step</strong>.
                </p>

                <div className="heroPillsRow">
                  <div className="pills">
                    <div className="pill">No pressure</div>
                    <div className="pill">No long forms</div>
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

                <div className="muted" style={{ fontSize: 12, marginTop: 10 }}>
                  Two clean paths. No guessing. Choose what fits—then we’ll route your next step.
                </div>

                <div className="ctaRowInline" style={{ marginTop: 12 }}>
                  <a
                    className="primaryCta"
                    href="https://capture-of-application.vercel.app/apply?utm_source=newpath-landing&utm_medium=hero&utm_campaign=newpath-home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start my application →
                  </a>

                  <a className="secondaryCta" href="#get-started">
                    Get routed →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* TWO DOORS ONLY */}
      <Section
        id="pillars"
        title="Choose your door"
        desc="Two clean paths. One clear next step—powered by the BALANCE Cipher and guided by the Co-Pilot."
      >
        <div className="doorGrid">
          {/* Door 1: Primary */}
          <div className="doorCard">
            <div className="doorInner">
              <div className="doorKicker">
                <span className="doorTag">Primary</span>
                <span className="doorDot" aria-hidden="true" />
              </div>
              <h3 className="doorTitle">Get approved the right way</h3>
              <p className="doorBody">
                Share the basics. We’ll follow up with your <strong>next step</strong>. If you’re ready to move now,
                start the application.
              </p>
              <div className="ctaRowInline">
                <a
                  className="primaryCta"
                  href="https://capture-of-application.vercel.app/apply?utm_source=newpath-landing&utm_medium=door&utm_campaign=get-approved"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start application →
                </a>
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
            </div>
          </div>

          {/* Door 2: Secondary */}
          <div className="doorCard">
            <div className="doorInner">
              <div className="doorKicker">
                <span className="doorTag">Learn</span>
                <span className="doorDot" aria-hidden="true" />
              </div>
              <h3 className="doorTitle">Buy your next vehicle the right way</h3>
              <p className="doorBody">
                <strong>Break free</strong> from what didn’t work before, <strong>learn what matters today</strong>,
                and <strong>move forward with clarity</strong>.
              </p>
              <div className="ctaRowInline">
                <a className="secondaryCta" href="/buy-your-vehicle">
                  Buy the right way →
                </a>
                <a className="secondaryCta" href="/buy-your-vehicle-v2">
                  Quick guide →
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CLEAN BENEFITS (3 ONLY so grid is stable) */}
      <Section
        id="simple-clear"
        title="Simple. Clear. Built for action—when you’re guided by an AI-driven system."
        desc="A simple path—powered by the BALANCE Cipher and guided by the Co-Pilot."
      >
        <div className="benefitsLead" style={{ marginBottom: 12 }}>
          <div className="muted" style={{ fontSize: 13, lineHeight: 1.5 }}>
            NewPath is the <strong>starting line</strong>. The Cipher is the <strong>follow-through map</strong>—so your
            next move stays <strong>simple</strong>, <strong>calm</strong>, and <strong>doable</strong>.
          </div>
        </div>

        <div className="benefitsGrid">
          <div className="item">
            <h3 className="itemTitle">Clarity first</h3>
            <p className="itemBody">
              <strong>You’ll know where you are</strong> and what your next step is—fast.
            </p>
          </div>

          <div className="item">
            <h3 className="itemTitle">One clean start</h3>
            <p className="itemBody">
              <strong>Two doors only.</strong> No overwhelm. No guessing.
            </p>
          </div>

          <div className="item">
            <h3 className="itemTitle">North Star vision</h3>
            <p className="itemBody">
              <strong>Car → Score → Home.</strong> Auto is the on-ramp to long-term stability.
            </p>
          </div>
        </div>
      </Section>

      {/* KEEP THE CONVERSION DOOR */}
      <Section
        id="get-started"
        title="Ready to open your new door?"
        desc="No pressure. Share the basics and we’ll route your next step."
      >
        <div className="doorWrap">
          <details className="doorDetails">
            <summary>
              <span className="doorBadge" aria-hidden="true">
                <span className="doorIcon" />
              </span>
              <span className="doorText">
                <span className="doorTitle2">Open your new door</span>
                <span className="doorSub">
                  Share only the basics. We’ll follow up with the <strong>next step</strong>.
                </span>
              </span>
              <span className="doorAction">Open →</span>
            </summary>

            <div className="doorBody">
              <div className="card">
                <div className="cardInner">
                  <LeadForm sourcePage="newpath-landing" sourceCta="bottom-door" />
                </div>
              </div>
            </div>
          </details>
        </div>
      </Section>

      {/* CIPHER SECTION (remove loop CTA; keep decisive) */}
      <Section id="cipher" title="The BALANCE Cipher" desc="It’s not a checklist. It’s a map.">
        <div className="cipherHero">
          <img className="cipherEmblemBig" src="/brand/balance-cipher-emblem.png" alt="BALANCE Cipher emblem" />

          <h3 className="cipherTitle">
            Open your new door—<span style={{ color: "var(--accent)" }}>with the Cipher</span>.
          </h3>

          <p className="cipherCopy">
            Most people don’t need more information. They need to <strong>see what’s real</strong>—then take{" "}
            <strong>one clean next step</strong>. The Cipher helps reveal the pattern, and the <strong>Co-Pilot</strong>{" "}
            translates it into something <strong>simple</strong> and <strong>doable</strong>.
          </p>

          <div className="buttonRow" style={{ marginTop: 6 }}>
            <a
              className="btn btnPrimary"
              href="https://capture-of-application.vercel.app/apply?utm_source=newpath-landing&utm_medium=cta&utm_campaign=bottom-cipher"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start my application →
            </a>
            <a className="btn" href="https://app.balancecipher.info/" target="_blank" rel="noopener noreferrer">
              Get my next step →
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
