"use client";

import Image from "next/image";

/* ─── Data ─────────────────────────────────────────── */

const HOURS = [
  { days: "Tue – Wed", time: "11:00 – 21:00" },
  { days: "Thu – Sat", time: "11:00 – 00:00" },
];

/* ─── Helpers ───────────────────────────────────────── */

/** Grey placeholder shown until a real photo is dropped in */
function PhotoSlot({ label, aspect = "aspect-[4/3]" }: { label: string; aspect?: string }) {
  return (
    <div
      className={`w-full ${aspect} bg-zinc-100 flex items-center justify-center text-zinc-400 text-sm border border-zinc-200`}
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
        className="relative w-full overflow-hidden"
        style={{ height: "100svh", minHeight: "500px", backgroundColor: "#0a0a0a" }}
      >
        {/* Background image slideshow
            Drop photos into /public/ and update the src values below:
            bg-atrium.jpg | bg-coffee.jpg | bg-pints.jpg | bg-cake.jpg    */}
        <div
          className="bg-slide"
          style={{ backgroundImage: "url('/bg-atrium.jpg')" }}
        />
        <div
          className="bg-slide"
          style={{ backgroundImage: "url('/bg-coffee.jpg')" }}
        />
        <div
          className="bg-slide"
          style={{ backgroundImage: "url('/bg-pints.jpg')" }}
        />
        <div
          className="bg-slide"
          style={{ backgroundImage: "url('/bg-cake.jpg')" }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none z-[1]" />

        {/* ── Nav ── */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-10 py-5">
          <button
            aria-label="Open menu"
            className="flex items-center gap-2.5 text-white uppercase tracking-[0.22em] text-[12px] hover:opacity-70 transition-opacity"
            style={{ fontFamily: "var(--font-primary)" }}
          >
            <svg width="20" height="13" viewBox="0 0 20 13" fill="none" aria-hidden="true">
              <line y1="0.75"  x2="20" y2="0.75"  stroke="white" strokeWidth="1.5" />
              <line y1="6.25"  x2="20" y2="6.25"  stroke="white" strokeWidth="1.5" />
              <line y1="11.75" x2="20" y2="11.75" stroke="white" strokeWidth="1.5" />
            </svg>
            Menu
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/logo.png"
              alt="Movers"
              width={160}
              height={52}
              priority
              className="invert"
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* Spacer to keep logo centred */}
          <div className="w-[80px]" />
        </nav>

        {/* ── Hero content ── */}
        <div
          className="relative z-10 flex flex-col items-center justify-center text-center px-4"
          style={{ height: "100%" }}
        >
          <h1
            className="text-white font-bold uppercase leading-[0.88] mb-8 md:mb-10"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "clamp(2.4rem, 7.5vw, 8.5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Daytime Cafe,
            <br />
            Late Night Dancing
          </h1>

          {/* Anchor boxes */}
          <div className="flex flex-row gap-3 md:gap-4 mb-10">
            {(["Events", "Drinks", "Co-Working"] as const).map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/[^a-z]/g, "")}`}
                className="border border-white/80 text-white uppercase hover:bg-white hover:text-black transition-colors"
                style={{
                  fontFamily: "var(--font-primary)",
                  fontSize: "clamp(9px, 1.1vw, 12px)",
                  letterSpacing: "0.18em",
                  padding: "clamp(10px, 1.2vw, 14px) clamp(16px, 2.8vw, 38px)",
                }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Bottom strip ── */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-6 md:px-10 pb-6 md:pb-8">
          {/* Empty left column on mobile, address on desktop */}
          <div
            className="hidden md:block text-white text-right leading-[1.75] order-3"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
          >
            <p>15 Hockley</p>
            <p>Nottingham, NG1 1FH</p>
          </div>

          {/* Opening times — centred */}
          <div className="flex-1 flex flex-col items-center pb-1">
            {HOURS.map(({ days, time }) => (
              <p
                key={days}
                className="text-white leading-[1.8]"
                style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
              >
                {days}: {time}
              </p>
            ))}
          </div>

          {/* Address — right on desktop */}
          <div
            className="hidden md:block text-white text-right leading-[1.75]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
          >
            <p>15 Hockley</p>
            <p>Nottingham, NG1 1FH</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          MENU / DRINKS
      ══════════════════════════════════════════════ */}
      <section id="drinks" className="bg-white text-black py-20 md:py-32 overflow-hidden">
        <div className="px-8 md:px-16 mb-12 md:mb-16">
          <p
            className="uppercase tracking-[0.25em] text-[11px] mb-3 text-zinc-400"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Cafe &amp; Bar
          </p>
          <h2
            className="font-bold uppercase leading-none"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "clamp(2rem, 5vw, 5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Menu
          </h2>
        </div>

        {/* Two-column layout — text + 2 photos */}
        <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="md:pt-4">
            <p
              className="text-[16px] leading-relaxed text-zinc-700 max-w-md"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Speciality coffee, ice cold pints, spritz and wine! Enjoy sweet treats
              from our local bakery.
            </p>
          </div>

          {/* Photos stacked, second one offset */}
          <div className="flex flex-col gap-4">
            <PhotoSlot label="photo: coffee — add /public/menu-coffee.jpg" aspect="aspect-[4/3]" />
            <div className="md:ml-8">
              <PhotoSlot label="photo: drinks — add /public/menu-drinks.jpg" aspect="aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          EVENTS
      ══════════════════════════════════════════════ */}
      <section id="events" className="bg-[#0a0a0a] text-white py-20 md:py-32 overflow-hidden">
        <div className="px-8 md:px-16 mb-12 md:mb-16">
          <p
            className="uppercase tracking-[0.25em] text-[11px] mb-3 text-zinc-400"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Late Night Dancing
          </p>
          <h2
            className="font-bold uppercase leading-none"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "clamp(2rem, 5vw, 5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Events
          </h2>
        </div>

        <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="md:pt-4">
            <p
              className="text-[16px] leading-relaxed text-zinc-300 max-w-md"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Safe space late night dancing, LGBTQIA+ drinks, community of DJs and
              promoter-led events. Livestreamed Eclectic Selector events — not just
              dance music!
            </p>
          </div>

          {/* Two crowd photos side by side, second one offset down */}
          <div className="flex flex-col gap-4">
            <PhotoSlot label="photo: crowd — add /public/events-crowd-1.jpg" aspect="aspect-[4/3]" />
            <div className="md:ml-8">
              <PhotoSlot label="photo: crowd — add /public/events-crowd-2.jpg" aspect="aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CO-WORKING
      ══════════════════════════════════════════════ */}
      <section id="coworking" className="bg-white text-black py-20 md:py-32">
        <div className="px-8 md:px-16 mb-12 md:mb-16">
          <p
            className="uppercase tracking-[0.25em] text-[11px] mb-3 text-zinc-400"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Third Space
          </p>
          <h2
            className="font-bold uppercase leading-none"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "clamp(2rem, 5vw, 5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Co-Working
          </h2>
        </div>

        <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          <div className="md:pt-4">
            <p
              className="text-[16px] leading-relaxed text-zinc-700 mb-8 max-w-md"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              We&apos;re not just a space for music — enjoy the peace and quiet of our
              dedicated focused atrium working space, lashings of natural daylight with
              speciality coffee.
            </p>

            <ul className="space-y-3 mb-10">
              {[
                "Free wifi",
                "Plugs with all power options (USB-A + USB-C)",
                "£8 unlimited speciality batch brew coffee from our barista team",
              ].map((perk) => (
                <li
                  key={perk}
                  className="flex items-start gap-3 text-[14px] text-zinc-700 leading-snug"
                  style={{ fontFamily: "var(--font-primary)" }}
                >
                  <span className="mt-[6px] w-1 h-1 rounded-full bg-black inline-block flex-shrink-0" />
                  {perk}
                </li>
              ))}
            </ul>
          </div>

          {/* Two photos stacked */}
          <div className="flex flex-col gap-4">
            <PhotoSlot label="photo: atrium — add /public/cowork-atrium.jpg" aspect="aspect-[4/3]" />
            <div className="md:ml-8">
              <PhotoSlot label="photo: laptop + coffee — add /public/cowork-laptop.jpg" aspect="aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════ */}
      <footer className="bg-[#0a0a0a] text-white py-14 px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <Image
              src="/logo.png"
              alt="Movers"
              width={120}
              height={40}
              className="invert mb-6"
              style={{ objectFit: "contain" }}
            />
            <p
              className="text-zinc-400 text-[13px] leading-relaxed"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              Nottingham&apos;s Listening Cafe,<br />
              late night bar &amp; community third space.
            </p>
          </div>

          <div>
            <p
              className="uppercase tracking-[0.18em] text-[11px] mb-4 text-zinc-400"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Opening Hours
            </p>
            {HOURS.map(({ days, time }) => (
              <p
                key={days}
                className="text-[12px] leading-[1.9] text-zinc-300"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {days}: {time}
              </p>
            ))}
          </div>

          <div>
            <p
              className="uppercase tracking-[0.18em] text-[11px] mb-4 text-zinc-400"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Find Us
            </p>
            <p
              className="text-[13px] text-zinc-300 leading-relaxed"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              15 Hockley<br />
              Nottingham, NG1 1FH
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p
            className="text-zinc-600 text-[11px]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © 2026 Movers
          </p>
          <div className="flex gap-6">
            {["Instagram", "Resident Advisor", "Newsletter"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-zinc-500 text-[11px] uppercase tracking-[0.14em] hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-primary)" }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
