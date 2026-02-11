// app/new-path-forward/page.tsx

import React from "react";

export default function Page() {
  return (
    <main>
      <style>{`
        html, body { background: #ffffff !important; }

        :root {
          --np-border: rgba(0,0,0,0.10);
          --np-shadow: 0 18px 44px rgba(0,0,0,0.08);
          --np-shadow-soft: 0 12px 28px rgba(0,0,0,0.06);
          --np-radius: 22px;
          --np-pill: 999px;
          --np-text: rgba(0,0,0,0.88);
          --np-muted: rgba(0,0,0,0.64);
        }

        /* CANON BAR */
        .bar {
          position: sticky;
          top: 0;
          z-index: 999;
          background: #0b0b0f;
          color: #fff;
          border-bottom: 3px solid var(--accent);
        }
        .barInner {
          max-width: 1080px;
          margin: 0 auto;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
        }
        .barTitle {
          font-weight: 900;
          letter-spacing: 0.02em;
          font-size: 13px;
          opacity: 0.96;
          white-space: nowrap;
        }
        .barTag {
          font-size: 12px;
          opacity: 0.78;
          white-space: nowrap;
        }

        /* Shell */
        .shell {
          max-width: 1080px;
          margin: 0 auto;
          padding: 18px;
          display: grid;
          gap: 14px;
        }

        /* Cards */
        .card {
          border: 1px solid var(--np-border);
          border-radius: var(--np-radius);
          background: #ffffff;
          box-shadow: var(--np-shadow);
        }
        .cardSoft {
          border: 1px solid var(--np-border);
          border-radius: var(--np-radius);
          background: #ffffff;
          box-shadow: var(--np-shadow-soft);
        }
        .inner {
          padding: 26px 22px 22px;
          display: grid;
          gap: 12px;
        }

        /* Text */
        .headline {
          margin: 0;
          font-size: clamp(26px, 4.2vw, 42px);
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: rgba(0,0,0,0.92);
          font-weight: 950;
        }
        .subtext {
          margin: 0;
          font-size: 16px;
          line-height: 1.45;
          color: var(--np-text);
          max-width: 900px;
          font-weight: 650;
          opacity: 0.92;
        }
        .microLine {
          margin: 2px 0 0;
          font-size: 12px;
          color: rgba(0,0,0,0.58);
          font-weight: 650;
        }

        /* Chips */
        .chipRow {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 4px;
        }
        .chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 12px;
          border-radius: var(--np-pill);
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(0,0,0,0.02);
          font-weight: 900;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          font-size: 11px;
          color: rgba(0,0,0,0.70);
          white-space: nowrap;
        }

        /* Quick scan block */
        .scanGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        @media (max-width: 980px) {
          .scanGrid { grid-template-columns: 1fr; }
        }

        .scanItem {
          border: 1px solid var(--np-border);
          border-radius: var(--np-radius);
          background: #ffffff;
          box-shadow: var(--np-shadow-soft);
        }
        .scanInner {
          padding: 18px 18px;
          display: grid;
          gap: 10px;
        }
        .scanLabelRow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .scanLabel {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 8px 12px;
          border-radius: var(--np-pill);
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(0,0,0,0.02);
          font-weight: 900;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-size: 11px;
          color: rgba(0,0,0,0.72);
          white-space: nowrap;
        }
        .scanDot {
          width: 10px;
          height: 28px;
          border-radius: var(--np-pill);
          background: var(--accent);
          opacity: 0.16;
          flex: 0 0 auto;
        }
        .scanTitle {
          margin: 0;
          font-size: 18px;
          line-height: 1.2;
          letter-spacing: -0.01em;
          font-weight: 950;
          color: rgba(0,0,0,0.90);
        }
        .scanBody {
          margin: 0;
          font-size: 14px;
          line-height: 1.55;
          color: var(--np-muted);
          font-weight: 650;
        }
        .emph {
          color: rgba(0,0,0,0.88);
          font-weight: 950;
        }

        /* CTA row */
        .ctaRow {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px;
        }
        .primaryBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          padding: 0 22px;
          border-radius: var(--np-pill);
          background: var(--accent);
          color: #ffffff;
          font-weight: 950;
          letter-spacing: 0.01em;
          text-decoration: none;
          box-shadow: 0 10px 20px rgba(0,0,0,0.08);
          border: 1px solid rgba(0,0,0,0.06);
          white-space: nowrap;
        }
        .secondaryBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 50px;
          padding: 0 20px;
          border-radius: var(--np-pill);
          background: #ffffff;
          color: rgba(0,0,0,0.86);
          font-weight: 950;
          letter-spacing: 0.01em;
          text-decoration: none;
          border: 1px solid rgba(0,0,0,0.14);
          box-shadow: 0 10px 20px rgba(0,0,0,0.04);
          white-space: nowrap;
        }

        .helperLine {
          margin: 0;
          font-size: 12px;
          color: rgba(0,0,0,0.58);
          font-weight: 650;
        }

        /* Details (quiet, optional) */
        details {
          border: 1px solid rgba(0,0,0,0.10);
          border-radius: var(--np-radius);
          padding: 14px 16px;
          background: rgba(0,0,0,0.02);
        }
        summary {
          cursor: pointer;
          font-weight: 950;
          color: rgba(0,0,0,0.86);
          letter-spacing: -0.01em;
        }
        .detailsBody {
          margin-top: 10px;
          font-size: 14px;
          line-height: 1.6;
          color: rgba(0,0,0,0.66);
          font-weight: 650;
        }
      `}</style>

      {/* CANON BAR */}
      <div className="bar">
        <div className="barInner">
          <div className="barTitle">NEW PATH — PAST → PRESENT → FUTURE</div>
          <div className="barTag">One clear step. No pressure.</div>
        </div>
      </div>

      <div className="shell">
        {/* HERO */}
        <div className="card">
          <div className="inner">
            <h1 className="headline">
              What worked yesterday isn’t working today. Let’s find your new path forward.
            </h1>

            <p className="subtext">
              We turn confusion into one clear next step. The BALANCE Cipher shows the pattern — the Co-Pilot translates it into action.
            </p>

            <div className="chipRow" aria-label="Trust chips">
              <span className="chip">No shame</span>
              <span className="chip">No pressure</span>
              <span className="chip">One clear step</span>
            </div>

            {/* PRIMARY + SECONDARY (2 choices max) */}
            <div className="ctaRow" style={{ marginTop: 6 }}>
              <a
                className="primaryBtn"
                href="https://capture-of-application.vercel.app/apply?utm_source=newpath-landing&utm_medium=bridge&utm_campaign=new-path-forward"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start my application →
              </a>

              <a className="secondaryBtn" href="https://app.balancecipher.info/" target="_blank" rel="noopener noreferrer">
                Get my next step →
              </a>
            </div>

            <p className="helperLine">
              If you’re ready to move, start the application. If you’re unsure, get your next step first.
            </p>
          </div>
        </div>

        {/* QUICK SCAN (replaces the long arc stack) */}
        <div className="scanGrid">
          <div className="scanItem">
            <div className="scanInner">
              <div className="scanLabelRow">
                <span className="scanLabel">Yesterday</span>
                <span className="scanDot" aria-hidden="true" />
              </div>
              <h2 className="scanTitle">The result keeps repeating.</h2>
              <p className="scanBody">
                That’s not a character issue. It’s usually a mismatch between what people were taught and what lenders measure today.
              </p>
            </div>
          </div>

          <div className="scanItem">
            <div className="scanInner">
              <div className="scanLabelRow">
                <span className="scanLabel">Today</span>
                <span className="scanDot" aria-hidden="true" />
              </div>
              <h2 className="scanTitle">A guide on your side.</h2>
              <p className="scanBody">
                The Cipher shows the pattern. The Co-Pilot turns it into <span className="emph">one move you can make next</span>.
              </p>
            </div>
          </div>

          <div className="scanItem">
            <div className="scanInner">
              <div className="scanLabelRow">
                <span className="scanLabel">Tomorrow</span>
                <span className="scanDot" aria-hidden="true" />
              </div>
              <h2 className="scanTitle">Options create freedom.</h2>
              <p className="scanBody">
                Clarity creates options. Options create freedom — auto now, home later.
              </p>
            </div>
          </div>
        </div>

        {/* QUIET EXPANDER (keeps depth without clutter) */}
        <div className="cardSoft">
          <div className="inner" style={{ paddingTop: 18, paddingBottom: 18 }}>
            <details>
              <summary>Why this works (optional)</summary>
              <div className="detailsBody">
                You were never broken. You just never had the right map—until now. The BALANCE Cipher is that map.
                The Co-Pilot reads the Cipher with you and translates it into a simple next step you can actually execute.
              </div>
            </details>
          </div>
        </div>

        {/* BOTTOM CTA (reinforce only; still 2 choices) */}
        <div className="card">
          <div className="inner" style={{ paddingTop: 18, paddingBottom: 18 }}>
            <div className="ctaRow">
              <a
                className="primaryBtn"
                href="https://capture-of-application.vercel.app/apply?utm_source=newpath-landing&utm_medium=bridge&utm_campaign=new-path-forward"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start my application →
              </a>

              <a className="secondaryBtn" href="https://app.balancecipher.info/" target="_blank" rel="noopener noreferrer">
                Get my next step →
              </a>
            </div>
            <p className="helperLine">One page. Two choices. One clear next step.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
