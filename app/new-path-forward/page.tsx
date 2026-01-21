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
          --np-text: rgba(0,0,0,0.86);
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

        /* Page shell */
        .shell {
          max-width: 1080px;
          margin: 0 auto;
          padding: 18px;
          display: grid;
          gap: 14px;
        }

        /* Header card */
        .heroCard {
          border: 1px solid var(--np-border);
          border-radius: var(--np-radius);
          background: #ffffff;
          box-shadow: var(--np-shadow);
        }
        .heroInner {
          padding: 26px 22px;
          display: grid;
          gap: 12px;
        }

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
          max-width: 860px;
          font-weight: 600;
          opacity: 0.9;
        }

        /* Arc grid */
        .arcGrid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }
        @media (max-width: 980px) {
          .arcGrid { grid-template-columns: 1fr; }
        }

        .arcCard {
          border: 1px solid var(--np-border);
          border-radius: var(--np-radius);
          background: #ffffff;
          box-shadow: var(--np-shadow-soft);
        }
        .arcInner {
          padding: 18px 18px;
          display: grid;
          gap: 10px;
        }

        .arcLabelRow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }
        .arcLabel {
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
        .arcDot {
          width: 10px;
          height: 28px;
          border-radius: var(--np-pill);
          background: var(--accent);
          opacity: 0.16;
          flex: 0 0 auto;
        }

        .arcTitle {
          margin: 0;
          font-size: 18px;
          line-height: 1.2;
          letter-spacing: -0.01em;
          font-weight: 950;
          color: rgba(0,0,0,0.90);
        }
        .arcBody {
          margin: 0;
          font-size: 15px;
          line-height: 1.5;
          color: var(--np-muted);
          font-weight: 600;
        }
        .arcEmphasis {
          color: rgba(0,0,0,0.86);
          font-weight: 900;
        }

        /* Bottom CTA */
        .bottomCard {
          border: 1px solid var(--np-border);
          border-radius: var(--np-radius);
          background: #ffffff;
          box-shadow: var(--np-shadow);
        }
        .bottomInner {
          padding: 18px 18px;
          display: grid;
          gap: 12px;
        }

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
          height: 48px;
          padding: 0 20px;
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

        .helperLine {
          margin: 0;
          font-size: 12px;
          color: rgba(0,0,0,0.58);
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
        {/* LOCKED HEADLINE + SUBTEXT */}
        <div className="heroCard">
          <div className="heroInner">
            <h1 className="headline">
              What worked yesterday isn’t working today. Let’s find your new path forward.
            </h1>
            <p className="subtext">
              We turn yesterday’s confusion into today’s clear step. The BALANCE formula shows you the way.
            </p>
          </div>
        </div>

        {/* 3-PART ARC (ONLY) */}
        <div className="arcGrid">
          {/* PAST */}
          <div className="arcCard">
            <div className="arcInner">
              <div className="arcLabelRow">
                <span className="arcLabel">Yesterday</span>
                <span className="arcDot" aria-hidden="true" />
              </div>
              <h2 className="arcTitle">The outcome keeps repeating.</h2>
              <p className="arcBody">
                You’ve tried things that <span className="arcEmphasis">should’ve worked</span>… but the result
                keeps showing up again. That doesn’t mean you did something wrong—it means the game changed.
              </p>
            </div>
          </div>

          {/* PRESENT */}
          <div className="arcCard">
            <div className="arcInner">
              <div className="arcLabelRow">
                <span className="arcLabel">Today</span>
                <span className="arcDot" aria-hidden="true" />
              </div>
              <h2 className="arcTitle">Leverage, not control.</h2>
              <p className="arcBody">
                <span className="arcEmphasis">You’re not losing control. You’re gaining leverage.</span> AI helps
                you cut through confusion, while the Co-Pilot translates complexity into one simple step—so you stay
                in the driver’s seat.
              </p>
            </div>
          </div>

          {/* FUTURE */}
          <div className="arcCard">
            <div className="arcInner">
              <div className="arcLabelRow">
                <span className="arcLabel">Tomorrow</span>
                <span className="arcDot" aria-hidden="true" />
              </div>
              <h2 className="arcTitle">Better options become possible.</h2>
              <p className="arcBody">
                When you can see the pattern, you can change the pattern. Small next steps create clarity, clarity
                improves approvals, and better approvals unlock better options—auto now, home later.
              </p>
            </div>
          </div>
        </div>

        {/* PRIMARY CTA (PASS-THROUGH) */}
        <div className="bottomCard">
          <div className="bottomInner">
            <div className="ctaRow">
              <a className="primaryBtn" href="/buy-your-vehicle">
                Continue →
              </a>
            </div>
            <p className="helperLine">
              One page. One direction. One clear next step.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

