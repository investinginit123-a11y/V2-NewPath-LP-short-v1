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

        /* Header */
        .heroCard {
          border: 1px solid var(--np-border);
          border-radius: var(--np-radius);
          background: #ffffff;
          box-shadow: var(--np-shadow);
        }
        .heroInner {
          padding: 26px 22px 22px;
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
          gap: 12px;
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
          line-height: 1.55;
          color: var(--np-muted);
          font-weight: 650;
        }
        .arcEmphasis {
          color: rgba(0,0,0,0.88);
          font-weight: 950;
        }

        /* Clean bullets (still minimal) */
        .miniList {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 8px;
        }
        .miniItem {
          display: grid;
          grid-template-columns: 16px 1fr;
          gap: 10px;
          align-items: start;
          font-size: 14px;
          line-height: 1.5;
          color: rgba(0,0,0,0.64);
          font-weight: 650;
        }
        .miniMark {
          width: 10px;
          height: 10px;
          border-radius: var(--np-pill);
          margin-top: 6px;
          background: var(--accent);
          opacity: 0.20;
        }

        /* Extra narrative blocks inside a card (kept premium + readable) */
        .paraStack {
          display: grid;
          gap: 10px;
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
            <p className="microLine">
              No shame. No pressure. Just a clean path from “stuck” to “next step.”
            </p>
          </div>
        </div>

        {/* 3-PART ARC (ONLY) */}
        <div className="arcGrid">
          {/* PAST — unchanged */}
          <div className="arcCard">
            <div className="arcInner">
              <div className="arcLabelRow">
                <span className="arcLabel">Yesterday</span>
                <span className="arcDot" aria-hidden="true" />
              </div>
              <h2 className="arcTitle">You did what you were told—yet the result repeats.</h2>
              <p className="arcBody">
                You’ve tried things that <span className="arcEmphasis">should’ve worked</span>… but the outcome keeps
                circling back. That’s not a character issue. It’s usually a mismatch between what lenders look at now
                and what people were taught to do then.
              </p>

              <ul className="miniList" aria-label="Yesterday signals">
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span>It feels random—like the rules keep changing.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span>You do more… but get the same outcome.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span>You’re not broken—you just didn’t have the right map.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* PRESENT — expanded per your exact narrative */}
          <div className="arcCard">
            <div className="arcInner">
              <div className="arcLabelRow">
                <span className="arcLabel">Today</span>
                <span className="arcDot" aria-hidden="true" />
              </div>

              <h2 className="arcTitle">A guide that stands on your side.</h2>

              <div className="paraStack">
                <p className="arcBody">
                  The Co-Pilot is the best financial friend you could ever have—calm, loyal, and built to work for you.
                  Not a boss. Not a banker. Not a judge. <span className="arcEmphasis">A guide that stands on your side.</span>
                </p>

                <p className="arcBody">
                  The BALANCE Cipher shows the pattern. The Co-Pilot turns that map into one move you can make next.
                  <span className="arcEmphasis"> You’re not losing control—you’re gaining leverage.</span> AI isn’t here
                  to decide for you. It’s here to remove the fog, translate the Cipher, and hand you a clear next step.
                </p>
              </div>

              <ul className="miniList" aria-label="Today signals">
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span>You stay in the driver’s seat. The Co-Pilot supports your choices.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span>We simplify what matters—without burying you in information.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span>One step at a time is how you change the pattern.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* FUTURE — expanded per your narrative */}
          <div className="arcCard">
            <div className="arcInner">
              <div className="arcLabelRow">
                <span className="arcLabel">Tomorrow</span>
                <span className="arcDot" aria-hidden="true" />
              </div>

              <h2 className="arcTitle">Options create freedom.</h2>

              <div className="paraStack">
                <p className="arcBody">
                  Tomorrow, the Co-Pilot doesn’t just give information—it learns how you operate under pressure, spots
                  the pattern behind your decisions, and helps you build rules that protect your future self.
                </p>

                <p className="arcBody">
                  <span className="arcEmphasis">Clarity creates options. Options create freedom.</span> And freedom is
                  the key to happiness—because when you have options, you’re no longer trapped.
                </p>

                <p className="arcBody">
                  When you can see the pattern, you can change the pattern. Small next steps build clarity. Clarity
                  improves approvals. Better approvals unlock better options—auto now, home later.
                </p>
              </div>

              <ul className="miniList" aria-label="Tomorrow signals">
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span>Less guesswork. More confident decisions.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span>Better terms become realistic when the structure is right.</span>
                </li>
                <li className="miniItem">
                  <span className="miniMark" aria-hidden="true" />
                  <span>Auto becomes the on-ramp to long-term stability—and real home readiness.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* PRIMARY CTA (PASS-THROUGH) — NOW TO APPLICATION */}
        <div className="bottomCard">
          <div className="bottomInner">
            <div className="ctaRow">
              <a
                className="primaryBtn"
                href="https://capture-of-application.vercel.app/apply?utm_source=newpath-landing&utm_medium=bridge&utm_campaign=new-path-forward"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start my application →
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
