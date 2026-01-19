// app/page.tsx

import Section from "../components/Section";
import LeadForm from "../components/LeadForm";

export default function Page() {
  return (
    <main>
      <style>{`
        html, body { background: #ffffff !important; }

        #pillars .sectionTitle {
          font-size: clamp(34px, 5vw, 52px);
          line-height: 1.05;
          letter-spacing: -0.02em;
        }
        #pillars .sectionDesc {
          font-size: 16px;
          max-width: 720px;
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

        /* HERO: keep pills + cipher pill on the same wrapped row */
        .heroPillsRow {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
        }

        /* “Understand” card: CTA + cipher pill on ONE line */
        .ctaRowInline {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
          margin-top: 10px;
        }

        /* Benefits grid (V1-style, clean) */
        .benefitsLead { max-width: 820px; }
        .benefitsGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        @media (max-width: 920px) {
          .benefitsGrid { grid-template-columns: 1fr; }
        }

        /* Bottom Door CTA */
        #get-started .doorWrap { display: grid; gap: 14px; }
        #get-started details.doorDetails { border-radius: 22px; }
        #get-started details.doorDetails > summary {
          list-style: none;
          cursor: pointer;
          user-select: none;
          border-radius: 22px;
          padding: 26px 24px; /* slightly larger */
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
        #get-started .doorTitle { font-size: 20px; line-height: 1.15; letter-spacing: -0.01em; }
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
                  NewPath exists to help get you approved—using the BALANCE Cipher and the Co-Pilot to turn your
                  situation into one clear next step.
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
                  Choose one door below. When you’re ready, open your new door at the bottom.
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Section
        id="pillars"
        title="Choose your door"
        desc="Four clean paths. One clear next step—powered by the BALANCE Cipher and guided by the Co-Pilot."
      >
        <div style={{ display: "grid", gap: 12 }}>
          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>Buy your next vehicle the right way</h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                Break free from what didn’t work before, learn what matters today, and move forward with clarity.
              </p>
              <a className="btn btnPrimary" href="/buy-your-vehicle">Click here →</a>
            </div>
          </div>

          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>Get approved the right way</h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                We position you for approval by aligning your next move with the Cipher—translated by the Co-Pilot.
              </p>
              <a className="btn btnPrimary" href="/capture-of-application">Start application →</a>
            </div>
          </div>

          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>
                Understand what happened—and what’s happening today
              </h3>
              <p className="itemBody" style={{ marginBottom: 10 }}>
                The BALANCE Cipher helps you see why outcomes repeat; the Co-Pilot turns it into one clear next step.
              </p>

              <div className="ctaRowInline">
                <a className="btn btnPrimary" href="/buy-your-vehicle">Click here →</a>

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

          <div className="card">
            <div className="cardInner">
              <h3 className="itemTitle" style={{ marginTop: 0 }}>
                Let us help you with your path forward—by the BALANCE Cipher
              </h3>
              <p className="itemBody" style={{ marginBottom: 12 }}>
                If buying today isn’t right, we map the next move to become ready—then execute with clarity.
              </p>
              <a className="btn btnPrimary" href="#cipher">Click here →</a>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="simple-clear"
        title="Simple. Clear. Built for action—when you’re guided by an AI-driven system."
        desc="These doors create a simple, clear, built-for-action path—powered by the BALANCE Cipher and guided by the Co-Pilot."
      >
        <div className="benefitsLead" style={{ marginBottom: 12 }}>
          <div className="muted" style={{ fontSize: 12 }}>
            NewPath is the starting line. The Cipher is the follow-through map—so your next move stays simple, calm, and doable.
          </div>
        </div>

        <div className="benefitsGrid">
          <div className="item">
            <h3 className="itemTitle">Clarity first</h3>
            <p className="itemBody">You’ll know where you are and what your next step is—fast.</p>
          </div>

          <div className="item">
            <h3 className="itemTitle">One clean start</h3>
            <p className="itemBody">You choose a door. We route your next move. No overwhelm.</p>
          </div>

          <div className="item">
            <h3 className="itemTitle">North Star vision</h3>
            <p className="itemBody">Car → Score → Home. Auto is the on-ramp to long-term stability.</p>
          </div>

          <div className="item">
            <h3 className="itemTitle">Big picture</h3>
            <p className="itemBody">The Cipher helps you see the pattern—so your next move actually sticks.</p>
          </div>
        </div>
      </Section>

      <Section
        id="get-started"
        title="Ready to open your new door?"
        desc="No pressure. If you choose to step through, share the basics and we’ll route your next step."
      >
        <div className="doorWrap">
          <details className="doorDetails">
            <summary>
              <span className="doorBadge" aria-hidden="true">
                <span className="doorIcon" />
              </span>
              <span className="doorText">
                <span className="doorTitle">Open your new door</span>
                <span className="doorSub">Share only the basics. We’ll follow up with the next step.</span>
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

      <Section id="cipher" title="The BALANCE Cipher" desc="It’s not a checklist. It’s a map.">
        <div className="cipherHero">
          <img className="cipherEmblemBig" src="/brand/balance-cipher-emblem.png" alt="BALANCE Cipher emblem" />

          <h3 className="cipherTitle">
            Open your new door—<span style={{ color: "var(--accent)" }}>with the Cipher</span>.
          </h3>

          <p className="cipherCopy">
            Most people don’t need more information. They need to see what’s real—then take one clean next step.
            The Cipher helps reveal the pattern, and the Co-Pilot translates it into something simple and doable.
          </p>

          <div className="buttonRow" style={{ marginTop: 6 }}>
            <a className="btn btnPrimary" href="/capture-of-application">Start my application →</a>
            <a className="btn" href="#pillars">Choose a door →</a>
          </div>

          <div className="muted" style={{ fontSize: 12 }}>
            Quiet power. Clear direction. One move at a time.
          </div>
        </div>
      </Section>
    </main>
  );
}
