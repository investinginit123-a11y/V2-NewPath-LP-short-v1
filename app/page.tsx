// app/page.tsx
// PASS: MOBILE FIX 4.0 — DOOR 2 CTA RING VISIBILITY FIX (NO DRIFT)
// ✅ This pass:
// - Door 1 (red) stays the same
// - Door 2 (ink) CTA ring becomes Cipher-teal so it’s visible and premium
// - Door 2 ring pulse + glow are intensified (still not tacky)

import Section from "../components/Section";
import React from "react";

function MiniAccordion({
  title,
  subtitle,
  items,
  className,
}: {
  title: string;
  subtitle?: string;
  items: Array<{
    label: string;
    summary: string;
    means: string;
    notMeans: string;
    oneMove: string;
  }>;
  className?: string;
}) {
  return (
    <div className={`miniGuide ${className ?? ""}`.trim()} aria-label="Mini guide">
      <div className="miniGuideHead">
        <div className="miniGuideTitleRow">
          <div className="miniGuideTitle">{title}</div>
          <div className="miniGuideHint">Tap to expand</div>
        </div>
        {subtitle ? <div className="miniGuideSub">{subtitle}</div> : null}
      </div>

      <div className="miniGuideList" role="list">
        {items.map((it, idx) => (
          <details key={idx} className="miniItemDetails">
            <summary className="miniSummary">
              <div className="miniSummaryLeft">
                <span className="miniStepNum">{idx + 1}</span>
                <div className="miniSummaryText">
                  <div className="miniLabel">{it.label}</div>
                  <div className="miniSummaryLine">{it.summary}</div>
                </div>
              </div>
              <span className="miniCaret" aria-hidden="true">
                +
              </span>
            </summary>

            <div className="miniExpand">
              <div className="miniGrid">
                <div className="miniBox">
                  <div className="miniBoxTitle">What this means</div>
                  <div className="miniBoxBody">{it.means}</div>
                </div>
                <div className="miniBox">
                  <div className="miniBoxTitle">What this does not mean</div>
                  <div className="miniBoxBody">{it.notMeans}</div>
                </div>
              </div>

              <div className="miniOneMove">
                <div className="miniOneMoveTitle">One move</div>
                <div className="miniOneMoveBody">{it.oneMove}</div>
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

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

          /* ✅ DECISION COLORS (LOCKED) */
          --fire: #E10600;           /* FIRE ENGINE RED */
          --fire-deep: #B80000;      /* depth */
          --ink: #0B0B0F;            /* premium near-black */

          --white: #ffffff;
          --ink-strong: rgba(0,0,0,0.92);

          /* Cipher glow lane */
          --cipher-glow: rgba(25,211,197,0.26);
          --cipher-glow-strong: rgba(25,211,197,0.42);

          /* ✅ NEW: cipher ring color for Door 2 CTA */
          --cipher-ring: rgba(25,211,197,0.38);
          --cipher-ring-strong: rgba(25,211,197,0.62);
        }

        strong { font-weight: 900; color: var(--np-ink); }

        @keyframes aliveFloat {
          0%, 100% { transform: translateY(0px); }
          50%      { transform: translateY(-2px); }
        }

        @keyframes ctaHeart {
          0%   { transform: translateY(0px) scale(1); }
          10%  { transform: translateY(-1px) scale(1.03); }
          18%  { transform: translateY(0px) scale(0.995); }
          28%  { transform: translateY(-2px) scale(1.048); }
          40%  { transform: translateY(0px) scale(1); }
          100% { transform: translateY(0px) scale(1); }
        }

        @keyframes ctaGlowFire {
          0%, 100% { box-shadow: 0 18px 44px rgba(225,6,0,0.20); filter: brightness(1); }
          28%      { box-shadow: 0 32px 98px rgba(225,6,0,0.40); filter: brightness(1.07); }
        }

        /* ✅ Updated: Door 2 glow uses cipher-teal instead of pure black */
        @keyframes ctaGlowInk {
          0%, 100% { box-shadow: 0 18px 46px rgba(0,0,0,0.18); filter: brightness(1); }
          28%      { box-shadow: 0 34px 120px rgba(25,211,197,0.20); filter: brightness(1.06); }
        }

        @keyframes ctaSheen {
          0%, 100% { opacity: 0.12; transform: translateX(-12%) translateY(-10%) scale(1); }
          28%      { opacity: 0.38; transform: translateX(0%) translateY(-12%) scale(1.08); }
        }

        @keyframes ctaRingFire {
          0%   { opacity: 0.00; transform: scale(0.92); }
          8%   { opacity: 0.36; transform: scale(1.00); }
          28%  { opacity: 0.58; transform: scale(1.12); }
          52%  { opacity: 0.10; transform: scale(1.22); }
          100% { opacity: 0.00; transform: scale(1.26); }
        }

        /* ✅ Updated: Door 2 ring now TEAL + stronger at peak */
        @keyframes ctaRingInk {
          0%   { opacity: 0.00; transform: scale(0.92); }
          8%   { opacity: 0.32; transform: scale(1.00); }
          28%  { opacity: 0.72; transform: scale(1.13); }
          52%  { opacity: 0.14; transform: scale(1.24); }
          100% { opacity: 0.00; transform: scale(1.28); }
        }

        @media (prefers-reduced-motion: reduce){
          *, *::before, *::after{
            animation: none !important;
            transition: none !important;
            scroll-behavior: auto !important;
          }
        }

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
            radial-gradient(760px 360px at 18% 30%, rgba(225,6,0,0.05), transparent 72%),
            radial-gradient(820px 420px at 74% 34%, rgba(0,0,0,0.06), transparent 70%);
          filter: blur(18px);
          opacity: 0.45;
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

        .subStack{
          display: grid;
          gap: 10px;
          margin: 0;
          max-width: 900px;
        }
        .subStep{
          line-height: 1.18;
          color: rgba(15,23,42,0.94);
          font-size: 20px;
          font-weight: 950;
          letter-spacing: -0.01em;
        }
        .subStep.small{
          font-size: 18px;
          font-weight: 900;
          color: rgba(15,23,42,0.90);
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
          gap: 14px;
        }

        .npLogo{
          width: min(220px, 72vw);
          height: auto;
          display:block;
          object-fit: contain;
        }

        #doors .sectionTitle{
          font-size: clamp(34px, 5vw, 54px);
          line-height: 1.04;
          letter-spacing: -0.03em;
        }

        .decisionStage{
          position: relative;
          border-radius: calc(var(--np-radius) + 10px);
          padding: 6px 0 6px;
          background: transparent;
        }

        .doorSelect{
          display:grid;
          gap: 12px;
          margin: 0 0 10px;
        }

        .doorSelectBtn{
          width: 100%;
          text-decoration:none;
          border-radius: 22px;
          background: rgba(255,255,255,0.98);
          border: 3px solid rgba(0,0,0,0.14);
          box-shadow: 0 20px 60px rgba(0,0,0,0.12);
          padding: 16px 16px;
          display:flex;
          align-items:center;
          justify-content: space-between;
          gap: 14px;
          transition: transform .15s ease, box-shadow .15s ease, filter .15s ease;
          will-change: transform, box-shadow;
          animation: aliveFloat 6.4s ease-in-out infinite;
        }
        .doorSelectBtn:active{ transform: translateY(1px) scale(0.99); }
        .doorSelectBtn:hover{ box-shadow: 0 28px 84px rgba(0,0,0,0.16); }

        .doorSelectLeft{
          display:flex;
          align-items:center;
          gap: 12px;
          min-width: 0;
        }

        .doorTag{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          height: 46px;
          padding: 0 16px;
          border-radius: 16px;
          font-weight: 1000;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 12px;
          color: #fff;
          border: 2px solid rgba(0,0,0,0.10);
          flex: 0 0 auto;
        }
        .doorTag.fire{ background: var(--fire); }
        .doorTag.ink{ background: var(--ink); }

        .doorSelectText{
          display:grid;
          gap: 2px;
          min-width: 0;
        }
        .doorSelectTitle{
          font-size: 18px;
          font-weight: 1000;
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: rgba(0,0,0,0.92);
        }
        .doorSelectTitle .fire{ color: var(--fire); }
        .doorSelectTitle .ink{ color: var(--ink); }

        .doorSelectSub{
          font-size: 13px;
          font-weight: 850;
          color: rgba(15,23,42,0.70);
          line-height: 1.25;
        }

        .doorSelectChevron{
          width: 44px;
          height: 44px;
          border-radius: 16px;
          border: 2px solid rgba(0,0,0,0.12);
          background: rgba(255,255,255,0.98);
          display:flex;
          align-items:center;
          justify-content:center;
          flex: 0 0 auto;
          font-size: 18px;
          font-weight: 1000;
          color: rgba(15,23,42,0.70);
        }

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
        .doorCard.fire::before{
          background: linear-gradient(180deg, var(--fire), rgba(225,6,0,0.10));
        }
        .doorCard.ink::before{
          background: linear-gradient(180deg, var(--ink), rgba(11,11,15,0.16));
        }

        .doorRail{
          height: 10px;
          width: 100%;
          background: linear-gradient(90deg, rgba(0,0,0,0.02), rgba(0,0,0,0.00));
        }
        .doorRail.fire{
          background: linear-gradient(90deg, rgba(225,6,0,0.22), rgba(225,6,0,0.06), transparent);
          opacity: 0.95;
        }
        .doorRail.ink{
          background: linear-gradient(90deg, rgba(11,11,15,0.22), rgba(11,11,15,0.06), transparent);
          opacity: 0.92;
        }

        .doorInner{
          padding: 22px 20px 20px 20px;
          display:grid;
          gap: 12px;
        }

        .doorKicker{
          display:flex;
          align-items:center;
          gap: 10px;
          flex-wrap: wrap;
          justify-content:flex-start;
          margin-top: 2px;
          margin-bottom: 2px;
        }
        .doorPill{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 10px 14px;
          border-radius: 16px;
          border: 1px solid rgba(0,0,0,0.12);
          background: rgba(0,0,0,0.02);
          font-weight: 950;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-size: 11px;
          color: rgba(15,23,42,0.76);
          white-space: nowrap;
        }
        .laneTag{
          display:inline-flex;
          align-items:center;
          justify-content:center;
          padding: 10px 14px;
          border-radius: 16px;
          font-size: 12px;
          font-weight: 900;
          color: rgba(15,23,42,0.82);
          border: 1px solid rgba(0,0,0,0.12);
          background: #fff;
          white-space: nowrap;
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
          background: linear-gradient(180deg, rgba(225,6,0,0.16), rgba(225,6,0,0.05));
          border: 1px solid rgba(225,6,0,0.18);
        }
        .iconRoad::after{
          content:"";
          position:absolute;
          left: 22px;
          top: 14px;
          bottom: 14px;
          width: 2px;
          border-radius: 2px;
          background: rgba(225,6,0,0.78);
          opacity: 0.95;
        }

        .iconCipher::before{
          content:"";
          position:absolute;
          inset: 10px;
          border-radius: 999px;
          border: 2px solid rgba(0,0,0,0.26);
          box-shadow: 0 0 14px rgba(0,0,0,0.10);
        }
        .iconCipher::after{
          content:"";
          position:absolute;
          inset: 18px;
          border-radius: 999px;
          border: 1px solid rgba(225,6,0,0.14);
        }

        .doorCard.ink .doorVisual{
          background: linear-gradient(90deg, rgba(25,211,197,0.16), rgba(255,255,255,0.96) 55%);
          border-color: rgba(0,0,0,0.10);
        }
        .doorCard.ink .visualIcon{
          box-shadow: 0 14px 30px rgba(25,211,197,0.16);
          border-color: rgba(25,211,197,0.18);
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
        .miniMark.fire{ background: rgba(225,6,0,0.62); }
        .miniMark.ink{ background: rgba(11,11,15,0.56); }

        /* ✅ CTA BUTTONS — HEARTBEAT + SHEEN + RING PULSE */
        .ctaPill{
          position: relative;
          overflow: visible;
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
          will-change: transform, box-shadow, filter;
          transform: translateZ(0);
          isolation: isolate;
        }
        .ctaPill:active{ transform: translateY(1px) scale(0.99); }

        .ctaPill::before{
          content:"";
          position:absolute;
          inset:-40%;
          background: radial-gradient(closest-side at 30% 30%, rgba(255,255,255,0.38), transparent 62%);
          pointer-events:none;
          opacity: 0.14;
          transform: translateX(-12%) translateY(-10%) scale(1);
          animation: ctaSheen 2.6s ease-in-out infinite;
          mix-blend-mode: screen;
          z-index: 1;
        }

        .ctaPill::after{
          content:"";
          position:absolute;
          left: -14px;
          right: -14px;
          top: -12px;
          bottom: -12px;
          border-radius: calc(var(--np-pill) + 18px);
          pointer-events:none;
          z-index: 0;
          opacity: 0;
          transform: scale(0.92);
        }

        .ctaPill.fire{
          background: var(--fire);
          color: #fff;
          border-color: rgba(0,0,0,0.10);
          box-shadow: 0 18px 44px rgba(225,6,0,0.20);
          animation: ctaHeart 2.6s ease-in-out infinite, ctaGlowFire 2.6s ease-in-out infinite;
        }
        .ctaPill.fire::after{
          border: 2px solid rgba(225,6,0,0.18);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.10) inset,
            0 18px 70px rgba(225,6,0,0.22);
          background: radial-gradient(closest-side at 50% 50%, rgba(225,6,0,0.12), transparent 66%);
          animation: ctaRingFire 2.6s ease-in-out infinite;
        }

        /* ✅ Door 2 CTA: ink button, teal aura ring */
        .ctaPill.ink{
          background: var(--ink);
          color: #fff;
          border-color: rgba(0,0,0,0.10);
          box-shadow: 0 18px 46px rgba(0,0,0,0.18);
          animation: ctaHeart 2.8s ease-in-out infinite, ctaGlowInk 2.8s ease-in-out infinite;
        }
        .ctaPill.ink::after{
          border: 2px solid rgba(25,211,197,0.26);
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.06) inset,
            0 22px 88px rgba(25,211,197,0.22);
          background: radial-gradient(closest-side at 50% 50%, var(--cipher-ring), transparent 64%);
          animation: ctaRingInk 2.8s ease-in-out infinite;
        }

        .ctaPill:hover{
          filter: brightness(1.04);
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
            min-height: 56px;
            padding: 15px 18px;
            line-height: 1.2;
            font-size: 14px;
          }
          .ctaPill::after{
            left: -16px;
            right: -16px;
            top: -14px;
            bottom: -14px;
          }
          .visualTitle, .visualSub{
            white-space: normal;
            overflow: visible;
            text-overflow: clip;
          }
          .doorSelectBtn{
            padding: 16px 14px;
          }
          .doorSelectTitle{ font-size: 17px; }
        }

        /* Cipher section — clean */
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
          inset:-50px;
          background:
            radial-gradient(520px 240px at 50% 22%, rgba(25,211,197,0.16), transparent 72%),
            radial-gradient(560px 260px at 50% 60%, rgba(225,6,0,0.06), transparent 74%);
          filter: blur(14px);
          pointer-events:none;
          opacity: 0.85;
          animation: glowPulse 5.6s ease-in-out infinite;
        }

        .cipherEmblem{
          display:block;
          margin: 6px auto 0;
          filter: drop-shadow(0 22px 48px rgba(0,0,0,0.22));
          transform-origin: 50% 50%;
          will-change: transform, filter;
          animation: cipherBreathDesktop 7.8s ease-in-out infinite;
        }

        @keyframes glowPulse{
          0%, 100% { transform: scale(1); opacity: 0.78; }
          50%      { transform: scale(1.05); opacity: 0.98; }
        }

        @keyframes cipherBreathDesktop{
          0%, 100% { transform: translateY(0px) scale(1); filter: drop-shadow(0 22px 48px rgba(0,0,0,0.22)); }
          50%      { transform: translateY(-2px) scale(1.015); filter: drop-shadow(0 26px 58px rgba(25,211,197,0.20)); }
        }

        @media (max-width: 820px){
          .cipherGlow{
            animation-duration: 3.8s;
          }
          .cipherEmblem{
            animation: cipherBreathMobile 3.2s ease-in-out infinite;
          }
          @keyframes cipherBreathMobile{
            0%, 100% { transform: translateY(0px) scale(1); filter: drop-shadow(0 22px 48px rgba(0,0,0,0.22)); }
            50%      { transform: translateY(-4px) scale(1.045); filter: drop-shadow(0 30px 72px rgba(25,211,197,0.34)); }
          }
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
          background: rgba(225,6,0,0.48);
        }

        .miniGuide{
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(0,0,0,0.015);
          border-radius: 18px;
          padding: 14px 14px;
          display: grid;
          gap: 12px;
        }
        .miniGuide.cipher{
          background: linear-gradient(180deg, rgba(25,211,197,0.10), rgba(0,0,0,0.012));
          border-color: rgba(25,211,197,0.16);
        }
        .miniGuideHead{
          display: grid;
          gap: 6px;
        }
        .miniGuideTitleRow{
          display:flex;
          align-items:baseline;
          justify-content: space-between;
          gap: 10px;
        }
        .miniGuideTitle{
          font-weight: 950;
          letter-spacing: -0.01em;
          color: rgba(0,0,0,0.92);
          font-size: 16px;
        }
        .miniGuideHint{
          font-size: 12px;
          font-weight: 900;
          color: rgba(15,23,42,0.60);
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(255,255,255,0.80);
          padding: 6px 10px;
          border-radius: 999px;
          white-space: nowrap;
        }
        .miniGuideSub{
          color: rgba(15,23,42,0.70);
          font-size: 13px;
          line-height: 1.4;
          font-weight: 700;
        }

        .miniGuideList{
          display: grid;
          gap: 10px;
        }

        .miniItemDetails{
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(255,255,255,0.92);
          border-radius: 16px;
          overflow: hidden;
        }

        .miniSummary{
          list-style: none;
          cursor: pointer;
          display:flex;
          align-items:center;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 12px;
          user-select: none;
        }
        .miniSummary::-webkit-details-marker { display:none; }

        .miniSummaryLeft{
          display:flex;
          align-items:flex-start;
          gap: 10px;
          min-width: 0;
        }
        .miniStepNum{
          width: 28px;
          height: 28px;
          border-radius: 10px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight: 950;
          color: #fff;
          background: var(--fire);
          flex: 0 0 auto;
          font-size: 13px;
        }
        .miniGuide.cipher .miniStepNum{
          background: var(--ink);
        }

        .miniSummaryText{
          display:grid;
          gap: 2px;
          min-width: 0;
        }
        .miniLabel{
          font-weight: 950;
          color: rgba(0,0,0,0.92);
          letter-spacing: -0.01em;
          font-size: 14px;
          line-height: 1.2;
        }
        .miniSummaryLine{
          font-size: 13px;
          font-weight: 750;
          color: rgba(15,23,42,0.70);
          line-height: 1.3;
        }
        .miniCaret{
          width: 34px;
          height: 34px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.10);
          background: rgba(255,255,255,0.92);
          display:flex;
          align-items:center;
          justify-content:center;
          font-weight: 950;
          color: rgba(15,23,42,0.70);
          flex: 0 0 auto;
        }

        .miniItemDetails[open] .miniCaret{ content:"–"; }
        .miniItemDetails[open] .miniCaret::before{ content:"–"; }
        .miniItemDetails:not([open]) .miniCaret::before{ content:"+"; }
        .miniCaret{ font-size: 18px; }

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
                      Create a New Path <span style={{ color: "var(--fire)" }}>forward</span>.
                    </h1>

                    <div className="subStack" aria-label="Hero steps">
                      <div className="subStep">Two doors.</div>
                      <div className="subStep">One clear next step.</div>
                      <div className="subStep small">
                        Powered by the <strong>BALANCE Cipher</strong>.
                      </div>
                      <div className="subStep small">
                        Guided by the <strong>Co-Pilot</strong>.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </header>

      <Section id="doors" title="Choose your door" desc="">
        <div className="decisionStage" aria-label="Decision stage">
          <div className="doorSelect" aria-label="Door selector">
            <a
              className="doorSelectBtn"
              href="#door-1"
              aria-label="Door 1: Start your New Path today"
            >
              <div className="doorSelectLeft">
                <span className="doorTag fire">DOOR 1</span>
                <div className="doorSelectText">
                  <div className="doorSelectTitle">
                    <span className="fire">Start your New Path</span> today.
                  </div>
                  <div className="doorSelectSub">Start the process and get routed the right way.</div>
                </div>
              </div>
              <span className="doorSelectChevron" aria-hidden="true">
                ↓
              </span>
            </a>
          </div>

          <div className="doorStack">
            <div className="doorCard fire" id="door-1" aria-label="Door 1: Today">
              <div className="doorRail fire" aria-hidden="true" />
              <div className="doorInner">
                <div className="doorKicker">
                  <span className="doorPill">DOOR 1</span>
                  <span className="laneTag">Get started today</span>
                </div>

                <h3 className="doorTitle">Today: Get started the right way</h3>

                <p className="doorBody">
                  If you’re ready to move now, the application is your cleanest first step. We route you into a calm,
                  lender-aligned path—without overwhelm.
                </p>

                <MiniAccordion
                  title="Learn the 4 moves (no noise)"
                  items={[
                    {
                      label: "Check your credit",
                      summary: "Know what lenders see before you shop.",
                      means:
                        "Your score + history help lenders decide rate, terms, and approvals. You want clarity before you pick a vehicle.",
                      notMeans:
                        "It does not mean you’re stuck. It means you’re getting the map before you move.",
                      oneMove:
                        "Pull your report (or know your current score range) before you shop or negotiate.",
                    },
                    {
                      label: "Know what you can afford",
                      summary: "Think bigger than just the monthly payment.",
                      means:
                        "Budget for total ownership: payment, insurance, taxes/fees, gas, maintenance—plus a realistic comfort zone.",
                      notMeans:
                        "It does not mean ‘stretch to the max.’ The goal is stability—not a payment that traps you.",
                      oneMove:
                        "Choose a payment range you can hold every month, even when life happens.",
                    },
                    {
                      label: "Get positioned before you shop",
                      summary: "Don’t negotiate blind.",
                      means:
                        "Pre-qualification gives visibility into likely terms so you shop inside the right lane and avoid bad deals.",
                      notMeans:
                        "It does not mean you’re locked into a loan. It’s a visibility move—so you don’t shop in the dark.",
                      oneMove:
                        "Get a clean pre-qual plan before you start test-driving or negotiating.",
                    },
                    {
                      label: "Apply the right way",
                      summary: "Clarity first. Then you sign.",
                      means:
                        "Applying can trigger a credit inquiry. The goal is clean timing, clean numbers, and clear total cost.",
                      notMeans:
                        "It does not mean ‘apply everywhere.’ Scatter-shot applications can hurt positioning.",
                      oneMove:
                        "Apply once, with the right info ready, and confirm APR + term + total cost before you sign.",
                    },
                  ]}
                />

                <div className="doorVisual">
                  <div className="visualLeft">
                    <span className="visualIcon iconRoad" aria-hidden="true" />
                    <div className="visualText">
                      <div className="visualTitle">One move. Start clean.</div>
                      <div className="visualSub">Start the application → get routed.</div>
                    </div>
                  </div>

                  <a
                    className="ctaPill fire"
                    href="https://capture-of-application.vercel.app/apply?utm_source=newpath-landing&utm_medium=door&utm_campaign=two-door"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Start my approval path →
                  </a>
                </div>

                <ul className="miniList" aria-label="Door 1 points">
                  <li className="miniItem">
                    <span className="miniMark fire" aria-hidden="true" />
                    <span>
                      <strong>One move:</strong> start the application.
                    </span>
                  </li>
                  <li className="miniItem">
                    <span className="miniMark fire" aria-hidden="true" />
                    <span>
                      <strong>Today’s rules:</strong> focus on what lenders care about now.
                    </span>
                  </li>
                  <li className="miniItem">
                    <span className="miniMark fire" aria-hidden="true" />
                    <span>
                      <strong>Clean path:</strong> simple, clear, and direct.
                    </span>
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

      <Section id="cipher" title="The BALANCE Cipher" desc="For your tomorrow.">
        <div className="doorSelect" aria-label="Door 2 selector" style={{ marginBottom: 14 }}>
          <a
            className="doorSelectBtn"
            href="#door-2"
            aria-label="Door 2: By completing Door 1 today, you unlocked Door 2."
          >
            <div className="doorSelectLeft">
              <span className="doorTag ink">DOOR 2</span>
              <div className="doorSelectText">
                <div className="doorSelectTitle">
                  <span className="ink">By completing Door 1 today,</span> you unlocked Door 2.
                </div>
                <div className="doorSelectSub">Door 2 is for tomorrow — see a preview.</div>
              </div>
            </div>
            <span className="doorSelectChevron" aria-hidden="true">
              ↓
            </span>
          </a>
        </div>

        <div style={{ marginBottom: 18 }}>
          <div className="doorCard ink" id="door-2" aria-label="Door 2: Cipher door">
            <div className="doorRail ink" aria-hidden="true" />
            <div className="doorInner">
              <div className="doorKicker">
                <span className="doorPill">DOOR 2</span>
                <span className="laneTag">Discover the map</span>
              </div>

              <h3 className="doorTitle">Discover the AI-driven BALANCE Cipher</h3>

              <p className="doorBody">
                The Cipher isn’t a checklist. It’s a map. It shows why outcomes repeat—and the Co-Pilot translates that
                map into <strong>one clear next step</strong>.
              </p>

              <div className="doorVisual">
                <div className="visualLeft">
                  <span className="visualIcon iconCipher" aria-hidden="true" />
                  <div className="visualText">
                    <div className="visualTitle">Discover the pattern.</div>
                    <div className="visualSub">See it clearly → then choose one next move.</div>
                  </div>
                </div>

                <a className="ctaPill ink" href="https://app.balancecipher.com/" target="_blank" rel="noopener noreferrer">
                  Open the Cipher →
                </a>
              </div>

              <div
                style={{
                  border: "1px solid rgba(0,0,0,0.10)",
                  borderRadius: 18,
                  background: "rgba(0,0,0,0.02)",
                  padding: "14px 14px",
                }}
              >
                <div style={{ fontWeight: 950, color: "rgba(15,23,42,0.90)", marginBottom: 6 }}>Examples (tap to expand)</div>
                <div style={{ color: "rgba(15,23,42,0.74)", lineHeight: 1.55, fontSize: 14, marginBottom: 12 }}>
                  The Cipher shows the pattern. The Co-Pilot translates it. You take one clean next move.
                </div>

                <MiniAccordion
                  className="cipher"
                  title="Examples"
                  subtitle={undefined}
                  items={[
                    {
                      label: "Seeing the pattern",
                      summary: "“Why does this keep happening?” gets answered.",
                      means:
                        "You stop guessing and finally see what’s driving the repeat loop: credit signals, timing, structure, and decisions that compound.",
                      notMeans:
                        "It does not mean you relive the past. It means you see it clearly so you don’t repeat it again.",
                      oneMove:
                        "Pick one area (credit, payments, savings, or decisions) and let the Cipher show the repeat pattern in plain language.",
                    },
                    {
                      label: "Getting the next move",
                      summary: "One correct action beats ten random actions.",
                      means:
                        "The Co-Pilot turns the map into a single step you can actually do—without overwhelm or a 20-step plan.",
                      notMeans:
                        "It does not mean perfection. It means direction: one move you can execute today.",
                      oneMove:
                        "Do the next right move first—then the next. You earn momentum by stacking clean steps.",
                    },
                    {
                      label: "Auto → Home readiness",
                      summary: "Stability now so bigger doors open later.",
                      means:
                        "Auto is the on-ramp: structure, consistency, and credit signals that eventually translate into home readiness and better terms.",
                      notMeans:
                        "It does not mean rushing into homeownership. It means building the foundation the right way.",
                      oneMove:
                        "Use auto decisions to strengthen your profile: clean payment lane + clean timing + clean structure.",
                    },
                  ]}
                />
              </div>

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

        <div className="cipherCard">
          <div className="cipherGlow" aria-hidden="true" />
          <div className="cipherInner">
            <img
              src="/brand/balance-cipher-emblem.png"
              alt="BALANCE Cipher emblem"
              className="cipherEmblem"
              style={{
                width: "min(460px, 92vw)",
                height: "auto",
              }}
            />

            <h3 className="cipherTitle">
              Open your new door—<span style={{ color: "var(--fire)" }}>with the Cipher</span>.
            </h3>

            <p className="cipherCopy">
              Most people don’t need more information. They need to <strong>see what’s real</strong>—then take{" "}
              <strong>one clean next step</strong>. The Cipher reveals the pattern, and the Co-Pilot translates it into
              something <strong>simple</strong> and <strong>doable</strong>.
            </p>

            <ul className="cipherBullets" aria-label="Cipher outcomes">
              <li>
                <span className="bDot" aria-hidden="true" />
                <span>
                  <strong>Clarity first:</strong> know where you are and what matters.
                </span>
              </li>
              <li>
                <span className="bDot" aria-hidden="true" />
                <span>
                  <strong>One next step:</strong> remove fog and take the right move.
                </span>
              </li>
              <li>
                <span className="bDot" aria-hidden="true" />
                <span>
                  <strong>Options → freedom:</strong> better structure unlocks better terms over time.
                </span>
              </li>
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
