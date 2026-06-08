"use client";

import Image from "next/image";

/* ─── Data ─────────────────────────────────────────────── */

const HOURS = [
  "Monday: 09:00 – 21:00",
  "Tuesday – Wednesday: 09:00 – 23:30",
  "Friday – Saturday: 09:00 – 00:00",
  "Sunday: 09:00 – 21:00",
];

/* ─── Page ──────────────────────────────────────────────── */

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════════
          HERO — Cafe by Day / HiFi by Night
      ══════════════════════════════════════════════════ */}
      <section
        id="hero"
        className="relative h-screen w-full overflow-hidden"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        {/* swap src for /hero-bg.jpg when you have venue photography */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        {/* Nav */}
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

          {/* Logo — centred */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/logo.png"
              alt="Movers"
              width={160}
              height={52}
              priority
              className="invert" /* white on dark hero */
              style={{ objectFit: "contain" }}
            />
          </div>

          <a
            href="#reservations"
            className="text-white border border-white text-[12px] italic px-5 py-1.5 hover:bg-white hover:text-black transition-colors"
            style={{ fontFamily: "var(--font-primary)", borderRadius: "50%", letterSpacing: "0.03em" }}
          >
            Reservations
          </a>
        </nav>

        {/* Centre content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1
            className="text-white font-bold uppercase leading-[0.9] mb-10"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "clamp(2.8rem, 9vw, 10rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Cafe By Day,
            <br />
            HiFi By Night
          </h1>

          {/* Three anchor boxes */}
          <div className="flex flex-row gap-3 md:gap-4 mb-10">
            {(["Menu", "Events", "Co-Working"] as const).map((label) => (
              <a
                key={label}
                href={`#${label.toLowerCase().replace(/[^a-z]/g, "")}`}
                className="border border-white/80 text-white uppercase hover:bg-white hover:text-black transition-colors"
                style={{
                  fontFamily: "var(--font-primary)",
                  fontSize: "clamp(9px, 1.1vw, 12px)",
                  letterSpacing: "0.18em",
                  padding: "clamp(10px, 1.2vw, 14px) clamp(18px, 3vw, 40px)",
                }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#reservations"
            className="bg-white text-black italic text-[13px] px-10 py-3 border border-white hover:bg-transparent hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-primary)", borderRadius: "50%" }}
          >
            Make A Reservation
          </a>
        </div>

        {/* Bottom strip */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-end justify-between px-6 md:px-10 pb-7">
          <div
            className="hidden md:block text-white leading-[1.75]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
          >
            {HOURS.map((l) => <p key={l}>{l}</p>)}
          </div>

          <a
            href="#menu"
            className="absolute left-1/2 -translate-x-1/2 bottom-7 flex flex-col items-center gap-1.5 text-white hover:opacity-60 transition-opacity"
            style={{ fontFamily: "var(--font-primary)", fontSize: "11px", letterSpacing: "0.22em" }}
          >
            <span className="uppercase">Explore</span>
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" aria-hidden="true">
              <path d="M5 0V16M5 16L1 11M5 16L9 11" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </a>

          <div
            className="hidden md:block text-white text-right leading-[1.75]"
            style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}
          >
            <p>91 Brick Lane</p>
            <p>London, E1 6QL</p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MENU — Cafe by Day
      ══════════════════════════════════════════════════ */}
      <section id="menu" className="bg-white text-black py-24 md:py-36 overflow-hidden">
        {/* Section label */}
        <div className="px-8 md:px-16 mb-16 md:mb-20">
          <p
            className="uppercase tracking-[0.25em] text-[11px] mb-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Cafe By Day
          </p>
          <h2
            className="font-bold uppercase leading-none"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "clamp(2.2rem, 5vw, 5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            What We Serve
          </h2>
        </div>

        {/* Brunch row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start px-8 md:px-16 mb-20 md:mb-28">
          <div className="md:pt-10">
            <h3
              className="font-bold uppercase mb-4"
              style={{ fontFamily: "var(--font-primary)", fontSize: "clamp(1.6rem, 3vw, 2.5rem)", letterSpacing: "-0.01em" }}
            >
              Brunch
            </h3>
            <p className="text-[15px] leading-relaxed max-w-sm text-zinc-700" style={{ fontFamily: "var(--font-primary)" }}>
              We&apos;ve crafted a brunch menu inspired by a tapestry of global cuisines,
              channelling the vibrant spirit of Brick Lane while staying rooted to our
              laid-back café environment.
            </p>
          </div>
          {/* Offset photo placeholder */}
          <div className="relative mt-8 md:mt-0 md:-translate-y-4">
            <div
              className="w-full aspect-[4/3] bg-zinc-200 flex items-center justify-center text-zinc-400 text-sm"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {/* replace with: <Image src="/menu-brunch.jpg" fill alt="Brunch" className="object-cover" /> */}
              photo: brunch
            </div>
          </div>
        </div>

        {/* Coffee & Pastries row — reversed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start px-8 md:px-16 mb-20 md:mb-28">
          {/* Photo first on desktop */}
          <div className="relative order-2 md:order-1 md:translate-y-6">
            <div
              className="w-full aspect-[4/3] bg-zinc-100 flex items-center justify-center text-zinc-400 text-sm"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {/* replace with: <Image src="/menu-coffee.jpg" fill alt="Coffee" className="object-cover" /> */}
              photo: coffee & pastries
            </div>
          </div>
          <div className="order-1 md:order-2 md:pl-16 md:pt-8">
            <h3
              className="font-bold uppercase mb-4"
              style={{ fontFamily: "var(--font-primary)", fontSize: "clamp(1.6rem, 3vw, 2.5rem)", letterSpacing: "-0.01em" }}
            >
              Coffee &amp; Pastries
            </h3>
            <p className="text-[15px] leading-relaxed max-w-sm text-zinc-700" style={{ fontFamily: "var(--font-primary)" }}>
              We rotate our coffee from locally sourced roasters and carry an amazing
              range of teas and alternative hot drinks. We work with local artisan
              bakeries for cakes, pastries, and snacks.
            </p>
          </div>
        </div>

        {/* Natural Wine row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-start px-8 md:px-16">
          <div className="md:pt-10">
            <h3
              className="font-bold uppercase mb-4"
              style={{ fontFamily: "var(--font-primary)", fontSize: "clamp(1.6rem, 3vw, 2.5rem)", letterSpacing: "-0.01em" }}
            >
              Natural Wine &amp; Bar
            </h3>
            <p className="text-[15px] leading-relaxed max-w-sm text-zinc-700" style={{ fontFamily: "var(--font-primary)" }}>
              As the sun goes down, we pivot. A hand-picked selection of natural wines,
              craft beers, and cocktails to soundtrack your evening — paired with the
              finest from our record collection.
            </p>
            <a
              href="#reservations"
              className="inline-block mt-8 border border-black text-black uppercase text-[11px] tracking-[0.18em] px-8 py-3 hover:bg-black hover:text-white transition-colors"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              View Full Menu
            </a>
          </div>
          <div className="relative mt-8 md:mt-0 md:-translate-y-4">
            <div
              className="w-full aspect-[4/3] bg-zinc-200 flex items-center justify-center text-zinc-400 text-sm"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              photo: wine & bar
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          EVENTS — HiFi by Night
      ══════════════════════════════════════════════════ */}
      <section
        id="events"
        className="bg-[#0a0a0a] text-white py-24 md:py-36 overflow-hidden"
      >
        <div className="px-8 md:px-16 mb-16 md:mb-20">
          <p
            className="uppercase tracking-[0.25em] text-[11px] mb-3 text-zinc-400"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            HiFi By Night
          </p>
          <h2
            className="font-bold uppercase leading-none"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "clamp(2.2rem, 5vw, 5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Upcoming Events
          </h2>
        </div>

        {/* Event listing grid */}
        <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {[
            { date: "FRI 13 JUN", name: "Late Night Listening", desc: "A deep dive into audiophile hi-fi, curated records, and low lights." },
            { date: "SAT 14 JUN", name: "Resident Showcase", desc: "Our resident DJs take over from open to close — all genres welcome." },
            { date: "FRI 20 JUN", name: "Record Fair", desc: "Local collectors and dealers fill the floor. Bring your crates." },
            { date: "SAT 21 JUN", name: "Live Jazz Session", desc: "Spontaneous, intimate, unrepeatable. Starts late." },
            { date: "FRI 27 JUN", name: "Movers After Dark", desc: "The night we clear the tables, dim the lights, and let the music lead." },
            { date: "SAT 28 JUN", name: "New Arrivals Night", desc: "First plays of freshly pressed wax. Be the first to hear." },
          ].map((event) => (
            <div key={event.date} className="bg-[#0a0a0a] p-8 hover:bg-white/5 transition-colors group cursor-pointer">
              <p
                className="text-zinc-400 text-[11px] uppercase tracking-[0.2em] mb-3"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {event.date}
              </p>
              <h3
                className="font-bold uppercase mb-3 group-hover:text-zinc-100"
                style={{ fontFamily: "var(--font-primary)", fontSize: "1.1rem", letterSpacing: "-0.01em" }}
              >
                {event.name}
              </h3>
              <p className="text-zinc-400 text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-primary)" }}>
                {event.desc}
              </p>
              <p
                className="mt-6 text-[11px] uppercase tracking-[0.18em] text-white/40 group-hover:text-white/80 transition-colors"
                style={{ fontFamily: "var(--font-primary)" }}
              >
                Book →
              </p>
            </div>
          ))}
        </div>

        <div className="px-8 md:px-16 mt-12">
          <a
            href="#reservations"
            className="inline-block border border-white text-white uppercase text-[11px] tracking-[0.18em] px-8 py-3 hover:bg-white hover:text-black transition-colors"
            style={{ fontFamily: "var(--font-primary)" }}
          >
            All Events
          </a>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CO-WORKING
      ══════════════════════════════════════════════════ */}
      <section id="coworking" className="bg-white text-black py-24 md:py-36">
        <div className="px-8 md:px-16">
          <p
            className="uppercase tracking-[0.25em] text-[11px] mb-3"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            During the Day
          </p>
          <h2
            className="font-bold uppercase leading-none mb-16"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "clamp(2.2rem, 5vw, 5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Co-Working
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            <div>
              <p className="text-[15px] leading-relaxed text-zinc-700 mb-8" style={{ fontFamily: "var(--font-primary)" }}>
                Movers is a great place to come and work. Fast Wi-Fi, great coffee, and
                a soundtrack that keeps the day moving. No hustle-culture vibes — just
                a calm, creative space in the heart of Brick Lane.
              </p>
              <p className="text-[15px] leading-relaxed text-zinc-700 mb-10" style={{ fontFamily: "var(--font-primary)" }}>
                We ask that co-workers buy one drink per two hours. Tables are
                first-come, first-served. Private hire and dedicated desk bookings
                available — get in touch.
              </p>

              {/* Perks */}
              <ul className="space-y-3">
                {["Fast, reliable Wi-Fi", "Specialty coffee all day", "Natural light & plants", "Background vinyl, always"].map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-3 text-[13px] uppercase tracking-[0.12em]"
                    style={{ fontFamily: "var(--font-primary)" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-black inline-block flex-shrink-0" />
                    {perk}
                  </li>
                ))}
              </ul>

              <a
                href="#reservations"
                className="inline-block mt-10 border border-black text-black uppercase text-[11px] tracking-[0.18em] px-8 py-3 hover:bg-black hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-primary)" }}
              >
                Book A Desk
              </a>
            </div>

            {/* Photo placeholder */}
            <div
              className="w-full aspect-[3/4] bg-zinc-100 flex items-center justify-center text-zinc-400 text-sm"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              photo: co-working space
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FOOTER
      ══════════════════════════════════════════════════ */}
      <footer id="reservations" className="bg-[#0a0a0a] text-white py-16 px-8 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <Image
              src="/logo.png"
              alt="Movers"
              width={120}
              height={40}
              className="invert mb-6"
              style={{ objectFit: "contain" }}
            />
            <p className="text-zinc-400 text-[13px] leading-relaxed" style={{ fontFamily: "var(--font-primary)" }}>
              Cafe by day, HiFi by night.<br />91 Brick Lane, London, E1 6QL
            </p>
          </div>
          <div>
            <p
              className="uppercase tracking-[0.18em] text-[11px] mb-4 text-zinc-400"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Opening Hours
            </p>
            {HOURS.map((l) => (
              <p key={l} className="text-[12px] leading-[1.9] text-zinc-300" style={{ fontFamily: "var(--font-mono)" }}>
                {l}
              </p>
            ))}
          </div>
          <div>
            <p
              className="uppercase tracking-[0.18em] text-[11px] mb-4 text-zinc-400"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Reservations
            </p>
            <a
              href="mailto:hello@movers.london"
              className="block text-[13px] text-zinc-300 hover:text-white transition-colors mb-2"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              hello@movers.london
            </a>
            <a
              href="#"
              className="inline-block mt-4 border border-white text-white uppercase text-[11px] tracking-[0.18em] px-6 py-2.5 hover:bg-white hover:text-black transition-colors"
              style={{ fontFamily: "var(--font-primary)", borderRadius: "50%" }}
            >
              Book Now
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-zinc-600 text-[11px]" style={{ fontFamily: "var(--font-mono)" }}>
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
