"use client";


/* ─── Data ─────────────────────────────────────────── */

const HOURS = [
  { days: "Tue – Wed", time: "11:00 – 21:00" },
  { days: "Thu – Sat", time: "11:00 – 00:00" },
];

/* ─── Helpers ───────────────────────────────────────── */

function PhotoSlot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`bg-zinc-100 flex items-center justify-center text-zinc-400 text-sm border border-zinc-200 ${className}`}
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {label}
    </div>
  );
}

/* ─── Page ──────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative w-full"
        style={{ height: "100svh", minHeight: "560px", backgroundColor: "#0a0a0a", overflow: "hidden" }}
      >
        {/* Background slideshow — add photos to /public/ */}
        <div className="bg-slide" style={{ backgroundImage: "url('/bg-atrium.jpg')" }} />
        <div className="bg-slide" style={{ backgroundImage: "url('/bg-coffee.jpg')" }} />
        <div className="bg-slide" style={{ backgroundImage: "url('/bg-pints.jpg')" }} />
        <div className="bg-slide" style={{ backgroundImage: "url('/bg-cake.jpg')" }} />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55 pointer-events-none z-[1]" />

        {/* ── Nav ── */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 md:px-12"
          style={{ paddingTop: "28px", paddingBottom: "20px" }}>

          {/* Hamburger — mobile only */}
          <button
            aria-label="Open menu"
            className="md:hidden flex items-center gap-2.5 text-white uppercase tracking-[0.22em] text-[12px] hover:opacity-70 transition-opacity"
            style={{ fontFamily: "var(--font-primary)" }}
          >
            <svg width="20" height="13" viewBox="0 0 20 13" fill="none" aria-hidden="true">
              <line y1="0.75"  x2="20" y2="0.75"  stroke="white" strokeWidth="1.5" />
              <line y1="6.25"  x2="20" y2="6.25"  stroke="white" strokeWidth="1.5" />
              <line y1="11.75" x2="20" y2="11.75" stroke="white" strokeWidth="1.5" />
            </svg>
            Menu
          </button>

          {/* Desktop left spacer */}
          <div className="hidden md:block w-20" />

          {/* Logo centred — mix-blend screen removes the white background box */}
          <div className="absolute left-1/2 -translate-x-1/2 py-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Movers"
              style={{
                height: "58px",
                width: "auto",
                display: "block",
                filter: "invert(1)",
                mixBlendMode: "screen",
              }}
            />
          </div>

          {/* Right spacer */}
          <div className="w-20" />
        </nav>

        {/* ── Hero content ── */}
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12"
          style={{ height: "100%", paddingTop: "100px", paddingBottom: "140px" }}
        >
          <h1
            className="text-white font-bold uppercase"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "clamp(2.2rem, 6.5vw, 7.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
              marginBottom: "clamp(3rem, 5vw, 5.5rem)",
            }}
          >
            Daytime Cafe,
            <br />
            Late Night Dancing
          </h1>

          <div className="flex flex-row gap-4 md:gap-5">
            {(["Events", "Drinks", "Co-Working"] as const).map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/[^a-z]/g, "")}`}
                className="border border-white/70 text-white uppercase hover:bg-white hover:text-black transition-colors"
                style={{
                  fontFamily: "var(--font-primary)",
                  fontSize: "13px",
                  letterSpacing: "0.2em",
                  padding: "15px 36px",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Bottom strip — desktop ── */}
        <div className="absolute bottom-0 left-0 right-0 z-10 hidden md:grid grid-cols-3 items-end px-12 pb-14">
          <div className="flex flex-col gap-[10px]">
            {[
              { label: "Instagram", href: "#" },
              { label: "RA",        href: "#" },
              { label: "Newsletter",href: "#" },
            ].map(({ label, href }) => (
              <a key={label} href={href}
                className="text-white/70 hover:text-white transition-colors w-fit"
                style={{ fontFamily: "var(--font-mono)", fontSize: "14px", letterSpacing: "0.06em" }}
              >
                {label}
              </a>
            ))}
          </div>
          <div className="flex flex-col items-center text-center">
            {HOURS.map(({ days, time }) => (
              <p key={days} className="text-white/80"
                style={{ fontFamily: "var(--font-mono)", fontSize: "14px", lineHeight: "2.2" }}>
                {days}: {time}
              </p>
            ))}
          </div>
          <div className="flex flex-col items-end text-right">
            <p className="text-white/80" style={{ fontFamily: "var(--font-mono)", fontSize: "14px", lineHeight: "2.2" }}>15 Hockley</p>
            <p className="text-white/80" style={{ fontFamily: "var(--font-mono)", fontSize: "14px", lineHeight: "2.2" }}>Nottingham, NG1 1FH</p>
          </div>
        </div>

        {/* ── Bottom strip — mobile ── */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex md:hidden flex-col items-center pb-12 px-6">
          {HOURS.map(({ days, time }) => (
            <p key={days} className="text-white/80"
              style={{ fontFamily: "var(--font-mono)", fontSize: "14px", lineHeight: "2.1" }}>
              {days}: {time}
            </p>
          ))}
          <p className="text-white/60 mt-2" style={{ fontFamily: "var(--font-mono)", fontSize: "13px" }}>
            15 Hockley, Nottingham NG1 1FH
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MENU — Cafe + Drinks (1001-style alternating)
      ══════════════════════════════════════════════ */}
      <section id="drinks" className="bg-white text-black">

        {/* Section label */}
        <div className="px-8 md:px-20 pt-24 md:pt-36 pb-14 md:pb-20">
          <p className="uppercase tracking-[0.28em] text-[10px] mb-4 text-zinc-400"
            style={{ fontFamily: "var(--font-mono)" }}>
            Cafe &amp; Bar
          </p>
          <h2 className="font-bold uppercase leading-none"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "clamp(2rem, 5vw, 5rem)",
              letterSpacing: "-0.02em",
            }}>
            Menu
          </h2>
        </div>

        {/* ── Row 1: CAFE — text left, photo right ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch border-t border-zinc-100">

          <div className="px-8 md:px-20 py-16 md:py-24 flex flex-col justify-center">
            <h3 className="font-bold uppercase mb-6"
              style={{
                fontFamily: "var(--font-primary)",
                fontSize: "clamp(1.6rem, 3vw, 3rem)",
                letterSpacing: "-0.02em",
              }}>
              Cafe
            </h3>
            <p className="text-[16px] leading-relaxed text-zinc-600 max-w-sm"
              style={{ fontFamily: "var(--font-primary)" }}>
              Speciality coffee from local Nottingham roasters, matcha, chai and seasonal
              drinks. We work with brilliant local bakeries for cakes, pastries and
              sweet treats every day.
            </p>
          </div>

          <PhotoSlot
            label="photo: coffee / cafe — add /public/menu-cafe.jpg"
            className="min-h-[320px] md:min-h-[480px]"
          />
        </div>

        {/* ── Row 2: DRINKS — photo left, text right ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch border-t border-zinc-100">

          {/* Photos — stacked with second one offset like 1001 */}
          <div className="relative flex flex-col">
            <PhotoSlot
              label="photo: pints — add /public/menu-pints.jpg"
              className="min-h-[320px] flex-1"
            />
            {/* Second photo overlaps, offset right */}
            <div className="hidden md:block md:absolute md:bottom-0 md:right-0 md:w-[58%] md:translate-y-[30%] md:z-10 shadow-xl">
              <PhotoSlot
                label="photo: cocktail — add /public/menu-cocktail.jpg"
                className="aspect-[4/3]"
              />
            </div>
            {/* Mobile: just stacked */}
            <PhotoSlot
              label="photo: cocktail — add /public/menu-cocktail.jpg"
              className="md:hidden min-h-[280px]"
            />
          </div>

          <div className="px-8 md:px-20 py-16 md:py-24 md:pb-40 flex flex-col justify-center">
            <h3 className="font-bold uppercase mb-6"
              style={{
                fontFamily: "var(--font-primary)",
                fontSize: "clamp(1.6rem, 3vw, 3rem)",
                letterSpacing: "-0.02em",
              }}>
              Drinks
            </h3>
            <p className="text-[16px] leading-relaxed text-zinc-600 max-w-sm"
              style={{ fontFamily: "var(--font-primary)" }}>
              Ice cold pints of German lager, Guinness on draught and rotating craft
              ales. Spritz, natural wine and cocktails. Ask our team what&apos;s pouring.
            </p>
          </div>
        </div>

        {/* Bottom spacer so the overlapping photo has room */}
        <div className="hidden md:block" style={{ height: "120px" }} />
      </section>

      {/* ══════════════════════════════════════════════
          EVENTS
      ══════════════════════════════════════════════ */}
      <section id="events" className="bg-[#0a0a0a] text-white py-24 md:py-40 overflow-hidden">
        <div className="px-8 md:px-20 mb-16 md:mb-20">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-4 text-zinc-500"
            style={{ fontFamily: "var(--font-mono)" }}>
            Late Night Dancing
          </p>
          <h2 className="font-bold uppercase leading-none"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "clamp(2rem, 5vw, 5rem)",
              letterSpacing: "-0.02em",
            }}>
            Events
          </h2>
        </div>

        <div className="px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="md:pt-4">
            <p className="text-[16px] leading-relaxed text-zinc-300 max-w-md"
              style={{ fontFamily: "var(--font-primary)" }}>
              Safe space late night dancing, LGBTQIA+ friendly, community of DJs and
              promoter-led events. Livestreamed Eclectic Selector events — not just
              dance music!
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <PhotoSlot label="photo: crowd — add /public/events-crowd-1.jpg" className="aspect-[4/3]" />
            <div className="md:ml-8">
              <PhotoSlot label="photo: crowd — add /public/events-crowd-2.jpg" className="aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CO-WORKING
      ══════════════════════════════════════════════ */}
      <section id="coworking" className="bg-white text-black py-24 md:py-40">
        <div className="px-8 md:px-20 mb-16 md:mb-20">
          <p className="uppercase tracking-[0.25em] text-[10px] mb-4 text-zinc-400"
            style={{ fontFamily: "var(--font-mono)" }}>
            Third Space
          </p>
          <h2 className="font-bold uppercase leading-none"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "clamp(2rem, 5vw, 5rem)",
              letterSpacing: "-0.02em",
            }}>
            Co-Working
          </h2>
        </div>

        <div className="px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="md:pt-4">
            <p className="text-[16px] leading-relaxed text-zinc-700 mb-8 max-w-md"
              style={{ fontFamily: "var(--font-primary)" }}>
              Not just a space for music — enjoy the peace and quiet of our dedicated
              atrium working space, lashings of natural daylight and speciality coffee.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Free wifi",
                "Plugs at every seat — USB-A, USB-C & UK sockets",
                "£8 unlimited speciality batch brew from our barista team",
              ].map((perk) => (
                <li key={perk}
                  className="flex items-start gap-4 text-[14px] text-zinc-700 leading-snug"
                  style={{ fontFamily: "var(--font-primary)" }}>
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-black inline-block flex-shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <PhotoSlot label="photo: atrium — add /public/cowork-atrium.jpg" className="aspect-[4/3]" />
            <div className="md:ml-8">
              <PhotoSlot label="photo: laptop + coffee — add /public/cowork-laptop.jpg" className="aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER — 1001-inspired
      ══════════════════════════════════════════════ */}
      <footer className="bg-[#0a0a0a] text-white">

        {/* ── Top info row ── */}
        <div className="px-8 md:px-20 pt-16 md:pt-24 pb-14 md:pb-16
          grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0">

          {/* Left: logo + tagline */}
          <div className="flex flex-col gap-6
            md:pr-16 md:border-r md:border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Movers"
              style={{
                height: "40px",
                width: "auto",
                display: "block",
                filter: "invert(1)",
                mixBlendMode: "screen",
              }}
            />
            <p className="text-zinc-400 text-[14px] leading-relaxed max-w-[220px]"
              style={{ fontFamily: "var(--font-primary)" }}>
              Nottingham&apos;s Listening Cafe,<br />
              late night bar &amp; community<br />
              third space.
            </p>
          </div>

          {/* Right: hours + location */}
          <div className="md:pl-16 grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* Opening hours */}
            <div>
              <p className="uppercase tracking-[0.22em] text-[10px] mb-5 text-zinc-500"
                style={{ fontFamily: "var(--font-mono)" }}>
                Opening Hours
              </p>
              {HOURS.map(({ days, time }) => (
                <p key={days} className="text-zinc-300"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "2.1" }}>
                  {days}<br />
                  <span className="text-zinc-500">{time}</span>
                </p>
              ))}
            </div>

            {/* Location */}
            <div>
              <p className="uppercase tracking-[0.22em] text-[10px] mb-5 text-zinc-500"
                style={{ fontFamily: "var(--font-mono)" }}>
                Location
              </p>
              <p className="text-zinc-300 text-[14px] leading-relaxed"
                style={{ fontFamily: "var(--font-primary)" }}>
                15 Hockley<br />
                Nottingham<br />
                NG1 1FH
              </p>
            </div>
          </div>
        </div>

        {/* ── Newsletter + social ── */}
        <div className="px-8 md:px-20 py-10 md:py-12 border-t border-white/[0.07]
          flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">

          {/* Newsletter box — same style as hero anchor boxes */}
          <a
            href="#"
            className="border border-white/50 text-white uppercase hover:bg-white hover:text-black transition-colors"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "12px",
              letterSpacing: "0.24em",
              padding: "14px 30px",
              display: "inline-block",
            }}
          >
            Mailing List Sign Up
          </a>

          {/* Social */}
          <div className="flex gap-8">
            {[
              { label: "Instagram", href: "#" },
              { label: "RA",        href: "#" },
            ].map(({ label, href }) => (
              <a key={label} href={href}
                className="text-zinc-500 hover:text-white transition-colors uppercase"
                style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em" }}>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Copyright ── */}
        <div className="px-8 md:px-20 py-8 border-t border-white/[0.07]">
          <p className="text-zinc-700 text-[11px]"
            style={{ fontFamily: "var(--font-mono)" }}>
            © 2026 Movers
          </p>
        </div>

      </footer>
    </>
  );
}
