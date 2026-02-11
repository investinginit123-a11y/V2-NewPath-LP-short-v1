// app/page.tsx
import Section from "../components/Section";

const DOOR_1_HREF =
  "https://capture-of-application.vercel.app/apply?utm_source=newpath-landing&utm_medium=door&utm_campaign=two-door";

const DOOR_2_HREF = "https://app.balancecipher.com/";

function IconRoad(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M10.5 3.5H13.5L16.5 20.5H13.9L12.75 14.5H11.25L10.1 20.5H7.5L10.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.9"
      />
      <path
        d="M12 7.25V9.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M12 11.25V12.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M4 20.5H20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

function IconCipher(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={props.className}
    >
      <path
        d="M12 21.25C17.109 21.25 21.25 17.109 21.25 12C21.25 6.891 17.109 2.75 12 2.75C6.891 2.75 2.75 6.891 2.75 12C2.75 17.109 6.891 21.25 12 21.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        opacity="0.9"
      />
      <path
        d="M12 6.25V12L15.75 14.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      <path
        d="M6.25 12H17.75"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-semibold text-black/80 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function PillLink(props: {
  href: string;
  tone: "red" | "teal";
  children: React.ReactNode;
  ariaLabel: string;
}) {
  const tone =
    props.tone === "red"
      ? {
          ring: "ring-red-500/20",
          bg: "bg-red-600",
          hover: "hover:bg-red-700",
          shadow: "shadow-[0_12px_30px_-14px_rgba(220,38,38,0.65)]",
        }
      : {
          ring: "ring-teal-500/20",
          bg: "bg-teal-600",
          hover: "hover:bg-teal-700",
          shadow: "shadow-[0_12px_30px_-14px_rgba(13,148,136,0.65)]",
        };

  return (
    <a
      href={props.href}
      aria-label={props.ariaLabel}
      className={[
        "group inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white",
        "ring-1 transition-all duration-200",
        "active:translate-y-[1px]",
        tone.bg,
        tone.hover,
        tone.ring,
        tone.shadow,
      ].join(" ")}
    >
      <span className="relative">
        {props.children}
        <span className="pointer-events-none absolute -inset-3 rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      </span>
      <span className="translate-x-0 transition-transform duration-200 group-hover:translate-x-0.5">
        →
      </span>
    </a>
  );
}

function DoorCard(props: {
  tone: "red" | "teal";
  laneLabel: string;
  title: string;
  subtitle: string;
  bullets: string[];
  ctaText: string;
  href: string;
  icon: React.ReactNode;
}) {
  const tone =
    props.tone === "red"
      ? {
          laneBg: "from-red-600 to-red-500",
          laneGlow: "bg-red-600/25",
          border: "border-red-500/20",
          hoverBorder: "hover:border-red-600/35",
          iconWrapBg: "bg-red-600/10",
          iconText: "text-red-700",
          cornerGlow:
            "bg-[radial-gradient(closest-side,rgba(220,38,38,0.28),transparent_65%)]",
        }
      : {
          laneBg: "from-teal-600 to-teal-500",
          laneGlow: "bg-teal-600/25",
          border: "border-teal-500/20",
          hoverBorder: "hover:border-teal-600/35",
          iconWrapBg: "bg-teal-600/10",
          iconText: "text-teal-700",
          cornerGlow:
            "bg-[radial-gradient(closest-side,rgba(13,148,136,0.26),transparent_65%)]",
        };

  return (
    <div
      className={[
        "group relative overflow-hidden rounded-3xl border bg-white/75 shadow-[0_18px_55px_-38px_rgba(0,0,0,0.45)] backdrop-blur",
        "transition-all duration-200",
        "hover:-translate-y-0.5 hover:shadow-[0_26px_75px_-45px_rgba(0,0,0,0.55)]",
        tone.border,
        tone.hoverBorder,
      ].join(" ")}
    >
      {/* Corner glow */}
      <div
        className={[
          "pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-60 blur-2xl",
          tone.cornerGlow,
        ].join(" ")}
      />
      {/* Lane header */}
      <div className="relative">
        <div className={["h-12 w-full bg-gradient-to-r", tone.laneBg].join(" ")} />
        <div className="absolute inset-0 flex items-center px-5">
          <div className="flex w-full items-center justify-between">
            <span className="text-xs font-semibold tracking-wide text-white/90">
              {props.laneLabel}
            </span>
            <span className="text-xs font-semibold tracking-wide text-white/75">
              Two-door choice • No friction
            </span>
          </div>
        </div>
        {/* Lane glow under rail */}
        <div
          className={[
            "pointer-events-none absolute left-0 top-10 h-10 w-full blur-xl",
            tone.laneGlow,
          ].join(" ")}
        />
      </div>

      {/* Content */}
      <div className="relative grid gap-6 p-6 sm:p-8">
        <div className="grid gap-5 md:grid-cols-[140px_1fr] md:items-start">
          <div
            className={[
              "flex h-28 w-full items-center justify-center rounded-2xl border border-black/5",
              tone.iconWrapBg,
            ].join(" ")}
          >
            <div className={["h-14 w-14", tone.iconText].join(" ")}>
              {props.icon}
            </div>
          </div>

          <div className="grid gap-3">
            <div className="grid gap-2">
              <h2 className="text-2xl font-extrabold tracking-tight text-black sm:text-3xl">
                {props.title}
              </h2>
              <p className="text-base font-medium leading-relaxed text-black/75 sm:text-lg">
                {props.subtitle}
              </p>
            </div>

            <ul className="grid gap-2">
              {props.bullets.slice(0, 3).map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 text-sm text-black/75 sm:text-[15px]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-black/35" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA (ONLY BUTTON IN THIS DOOR) */}
        <div className="pt-1">
          <PillLink
            href={props.href}
            tone={props.tone}
            ariaLabel={props.ctaText}
          >
            {props.ctaText}
          </PillLink>
          <p className="mt-3 text-xs font-medium text-black/55">
            No extra steps. You choose a door — you move.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative overflow-hidden">
      {/* Background stage (global) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-white" />
        {/* Decision-stage depth */}
        <div className="absolute -top-48 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />
        {/* Red lane glow */}
        <div className="absolute -top-40 left-[-140px] h-[520px] w-[520px] rounded-full bg-red-500/15 blur-3xl" />
        {/* Teal lane glow */}
        <div className="absolute top-32 right-[-160px] h-[520px] w-[520px] rounded-full bg-teal-500/14 blur-3xl" />
        {/* Subtle grid texture */}
        <div className="absolute inset-0 opacity-[0.045] [background-image:linear-gradient(to_right,black_1px,transparent_1px),linear-gradient(to_bottom,black_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      {/* HERO (Decision Moment) */}
      <Section title="Decision Moment">
        <div className="relative mx-auto max-w-5xl px-4 pt-12 sm:px-6 sm:pt-16">
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-7 shadow-[0_20px_70px_-50px_rgba(0,0,0,0.6)] backdrop-blur sm:p-10">
            {/* Inner glow accents */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-red-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-teal-500/10 blur-3xl" />

            <div className="relative grid gap-6">
              <div className="grid gap-3">
                <p className="text-xs font-bold tracking-widest text-black/55">
                  NEW PATH AUTO FINANCE
                </p>
                <h1 className="text-3xl font-extrabold tracking-tight text-black sm:text-5xl">
                  Two choices. One clean next step.
                </h1>
                <p className="max-w-2xl text-base font-medium leading-relaxed text-black/75 sm:text-lg">
                  Pick the door that matches what you need{" "}
                  <span className="font-semibold text-black">right now</span>.
                  Door 1 moves you forward fast. Door 2 gives you clarity — the
                  Cipher that helps you decode what’s really going on and what to
                  do next.
                </p>
              </div>

              {/* Trust strip (badges only — NO BUTTONS) */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <Badge>Soft pull friendly</Badge>
                <Badge>Fast decision flow</Badge>
                <Badge>No extra steps</Badge>
                <Badge>Mobile-first</Badge>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* DOORS (Stacked) */}
      <Section title="Choose Your Door">
        <div className="relative mx-auto max-w-5xl px-4 pb-8 sm:px-6">
          <div className="grid gap-7 sm:gap-9">
            <DoorCard
              tone="red"
              laneLabel="DOOR 1 — ACTION LANE"
              title="Start your application"
              subtitle="Go straight to the application. If you’re ready to move, this is the fastest path."
              bullets={[
                "No friction — just start.",
                "Designed for speed and clarity on mobile.",
                "You’ll know what the next step is immediately.",
              ]}
              ctaText="Start my application"
              href={DOOR_1_HREF}
              icon={<IconRoad className="h-full w-full" />}
            />

            <DoorCard
              tone="teal"
              laneLabel="DOOR 2 — CLARITY LANE"
              title="Open the Cipher"
              subtitle="If you want to understand what’s happening (and why), the Cipher turns confusion into one clear next move."
              bullets={[
                "Decode the pattern behind credit + money decisions.",
                "Get a simple, doable step — not a lecture.",
                "Clarity that sticks (and compounds).",
              ]}
              ctaText="Open the Cipher"
              href={DOOR_2_HREF}
              icon={<IconCipher className="h-full w-full" />}
            />
          </div>
        </div>
      </Section>

      {/* CIPHER SECTION (Integrated — NO CTA) */}
      <Section title="Cipher Stage">
        <div className="relative mx-auto max-w-5xl px-4 pb-16 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white/70 shadow-[0_22px_70px_-55px_rgba(0,0,0,0.65)] backdrop-blur">
            {/* Teal stage glow */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-500/14 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 bottom-[-140px] h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />

            <div className="grid gap-0 md:grid-cols-[1fr_1.2fr]">
              {/* Emblem stage (premium card stage) */}
              <div className="relative border-b border-black/10 p-7 sm:p-10 md:border-b-0 md:border-r">
                <div className="grid gap-3">
                  <p className="text-xs font-bold tracking-widest text-black/55">
                    THE CIPHER STAGE
                  </p>
                  <h3 className="text-2xl font-extrabold tracking-tight text-black sm:text-3xl">
                    Clarity that feels cinematic — not clinical.
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-black/70 sm:text-base">
                    This is where the Cipher emblem lives — not pasted in, but
                    staged. (Drop your real emblem component/image here when
                    ready.)
                  </p>
                </div>

                {/* Placeholder emblem */}
                <div className="mt-6 grid place-items-center">
                  <div className="relative h-40 w-40 rounded-[32px] border border-teal-500/25 bg-white/55 shadow-[0_18px_55px_-45px_rgba(13,148,136,0.7)]">
                    <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(13,148,136,0.22),transparent_60%)]" />
                    <div className="pointer-events-none absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_70%_80%,rgba(13,148,136,0.16),transparent_62%)]" />
                    <div className="absolute inset-0 grid place-items-center">
                      <div className="h-16 w-16 text-teal-700">
                        <IconCipher className="h-full w-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scan bullets */}
              <div className="p-7 sm:p-10">
                <div className="grid gap-5">
                  <div className="grid gap-2">
                    <h4 className="text-xl font-extrabold tracking-tight text-black sm:text-2xl">
                      What you get when the Cipher is doing its job
                    </h4>
                    <p className="text-sm font-medium leading-relaxed text-black/70 sm:text-base">
                      Three quick “scan” outcomes — clear, practical, and built
                      for real life.
                    </p>
                  </div>

                  <ul className="grid gap-3">
                    {[
                      {
                        title: "See what’s real",
                        body: "Separate facts from fear — so you stop guessing and start moving.",
                      },
                      {
                        title: "Find the pattern",
                        body: "Identify the loop that keeps repeating (and what breaks it).",
                      },
                      {
                        title: "One next step",
                        body: "No overwhelm. Just one move you can actually execute today.",
                      },
                    ].map((x) => (
                      <li
                        key={x.title}
                        className="rounded-2xl border border-black/10 bg-white/60 p-4 shadow-sm"
                      >
                        <p className="text-sm font-extrabold text-black">
                          {x.title}
                        </p>
                        <p className="mt-1 text-sm font-medium leading-relaxed text-black/70">
                          {x.body}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* NO CTA HERE (Canon) */}
                  <div className="rounded-2xl border border-teal-500/15 bg-teal-500/5 p-4">
                    <p className="text-sm font-semibold text-black">
                      Reminder:
                      <span className="font-medium text-black/70">
                        {" "}
                        the Cipher CTA lives inside Door 2 above — no extra
                        buttons down here.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tiny footer note (no links, no buttons) */}
          <p className="mt-6 text-center text-xs font-medium text-black/45">
            Choose a door above. Everything else supports that decision.
          </p>
        </div>
      </Section>
    </main>
  );
}
