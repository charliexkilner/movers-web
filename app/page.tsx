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
        <div className="bg-slide" style={{ backgroundImage: "url('bg-1.jpg')" }} />
        <div className="bg-slide" style={{ backgroundImage: "url('bg-2.jpg')" }} />
        <div className="bg-slide" style={{ backgroundImage: "url('bg-3.jpg')" }} />
        <div className="bg-slide" style={{ backgroundImage: "url('bg-4.jpg')" }} />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55 pointer-events-none z-[1]" />

        {/* ── Nav ── */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-8 md:px-12"
          style={{ paddingTop: "28px", paddingBottom: "20px" }}>

          {/* Left spacer */}
          <div className="w-20" />

          {/* Logo centred — mix-blend screen removes the white background box */}
          <div className="absolute left-1/2 -translate-x-1/2 py-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo.png"
              alt="Movers"
              className="h-[48px] md:h-[56px]"
              style={{
                width: "auto",
                display: "block",
                filter: "invert(1)",
                mixBlendMode: "screen",
                paddingTop: "16px",
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
            className="text-white"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 6.5vw, 7.5rem)",
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
              marginBottom: "clamp(3rem, 5vw, 5.5rem)",
            }}
          >
            Daytime Cafe,
            <br />
            Late night dancing.
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
        <div className="absolute bottom-0 left-0 right-0 z-10 hidden md:grid grid-cols-3 items-end px-4 md:px-32" style={{ paddingBottom: "24px" }}>
   
          <div className="flex flex-col gap-[10px]">
            {[
              { label: "Instagram", href: "#" },
              { label: "RA",        href: "#" },
              { label: "Newsletter",href: "#" },
            ].map(({ label, href }) => (
              <a key={label} href={href}
                className="text-white/70 hover:text-white transition-colors w-fit"
                style={{ fontFamily: "var(--font-mono)", fontSize: "14px", letterSpacing: "0.06em", paddingLeft: "40px"}}
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
            <p className="text-white/80" style={{ fontFamily: "var(--font-mono)", fontSize: "14px", lineHeight: "2.2", paddingRight: "40px" }}>15 Hockley</p>
            <p className="text-white/80" style={{ fontFamily: "var(--font-mono)", fontSize: "14px", lineHeight: "2.2", paddingRight: "40px" }}>Nottingham, NG1 1FH</p>
          </div>
        </div>

        {/* ── Bottom strip — mobile ── */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex md:hidden flex-col items-center px-8" style={{ paddingBottom: "24px" }}>
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
        <div className="px-8 md:px-20 pt-24 md:pt-36 pb-14 md:pb-20" style={{paddingTop: "40px", paddingBottom: "40px", paddingLeft: "40px"}}>
          <p className="uppercase tracking-[0.28em] text-[16px] mb-4 text-zinc-400"
            style={{ fontFamily: "var(--font-mono)", paddingRight: "72px"}}>
            Cafe &amp; Bar
          </p>
          <h2 className="font-bold uppercase leading-none"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "clamp(2rem, 5vw, 5rem)",
              letterSpacing: "-0.02em",
              paddingRight: "40px",
            }}>
            Menu
          </h2>
        </div>

        {/* ── Row 1: CAFE — text left, photo right ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch border-t border-zinc-100">

          <div className="px-8 md:px-20 py-16 md:py-24 flex flex-col justify-center" style={{paddingLeft: "40px", paddingTop: "40px", paddingBottom: "40px"}}>
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
              Movers late night Cafe is a <strong>speciality coffee-shop & listening cafe</strong> in Hockley serving speciality coffee & sweet treats 
              expertly crafted down the road by Cartwheel Coffee Roastery. We bring together great coffee, 
              quality sweet treats, and a welcoming space for the local creative community to <strong>co-work,
                meet, relax</strong> and even <strong>play board games</strong>. <br /><br />Catch daily cafe DJs soundtracking your day with chilled cafe selections —{" "}
                <a href="https://www.swingdash.live" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>watch livestreamed sets here</a>.
            </p>
          </div>

          <div className="max-h-[320px] md:max-h-[480px] w-full relative">
            <img
              src="/menu-cafe.jpg"
              alt="Coffee and cafe drinks at Movers"
              className="object-cover w-full h-full shadow-sm"
              style={{ objectPosition: "center" }}
              loading="lazy"
            />
          </div>
    
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

          <div className="px-8 md:px-20 py-16 md:py-24 md:pb-40 flex flex-col justify-center" style={{paddingLeft: "40px", paddingTop: "40px", paddingBottom: "40px"}}>
            <h3 className="font-bold uppercase mb-6"
              style={{
                fontFamily: "var(--font-primary)",
                fontSize: "clamp(1.6rem, 3vw, 3rem)",
                letterSpacing: "-0.02em",
              }}>
              Bar
            </h3>
            <p className="text-[16px] leading-relaxed text-zinc-600 max-w-sm"
              style={{ fontFamily: "var(--font-primary)" }}>
              Movers is a late night bar in Hockley, Nottingham serving <strong>ice cold German lagers</strong>, <strong>Guinness on draught</strong>, specialist wine carafes, spritz and cocktails. Whether you are joining us for after work drinks, a casual pint or a night out in Nottingham, our bar offers a relaxed space with great drinks and amazing music. <br></br><br></br><strong>Enjoy happy hour with <strong>£5 pints</strong> and <strong>£6.50 double spritz</strong>, or ask our team for specials!</strong>
            </p>
          </div>
        </div>

        {/* Bottom spacer so the overlapping photo has room */}
        <div className="hidden md:block" style={{ height: "120px" }} />
      </section>

      {/* ══════════════════════════════════════════════
          EVENTS
      ══════════════════════════════════════════════ */}
 
      <section id="events" className="bg-[#0a0a0a] text-white py-24 md:py-40 overflow-hidden" style={{paddingLeft: "40px", paddingRight: "40px", paddingTop: "40px", paddingBottom: "40px"}}>
        <div className="px-8 md:px-20 mb-16 md:mb-20">
          <p className="uppercase tracking-[0.25em] text-[16px] mb-4 text-zinc-500"
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
            <div className="flex flex-col gap-10 items-start">
              <p className="text-[16px] leading-relaxed text-zinc-300 max-w-md"
                style={{ fontFamily: "var(--font-primary)"}}>
                Movers is a home for DJs, selectors and music lovers in Nottingham. Our late night bar & events bring together local talent, headline artists and promoter-led parties across <strong>dance music, electronic,
                disco, soul, RNB, funk and everything in between</strong>. With <strong>vinyl DJs</strong>, carefully curated lineups, live streams and a focus on creating a <strong>safe and inclusive dancefloor</strong>, <strong>Movers is a space where everyone can discover new music and share the experience together</strong>.
              </p>
              <a
                href="https://ra.co/clubs/262186"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white text-white uppercase hover:bg-white hover:text-black transition-colors"
                style={{
                  fontFamily: "var(--font-primary)",
                  fontSize: "12px",
                  letterSpacing: "0.24em",
                  padding: "14px 40px",
                  display: "inline-block",
                }}
              >
                EVENT TICKETS & MORE INFO
              </a>
            </div>
         
       
     
          </div>
          <div className="flex flex-col gap-4">
            <PhotoSlot label="photo: crowd — add /public/events-crowd-1.jpg" className="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CO-WORKING
      ══════════════════════════════════════════════ */}
      <section id="coworking" className="bg-white text-black py-24 md:py-40" style={{paddingLeft: "40px", paddingTop: "40px", paddingBottom: "40px"}}>
        <div className="px-8 md:px-20 mb-16 md:mb-20">
          <p className="uppercase tracking-[0.25em] text-[16px] mb-4 text-zinc-400"
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
              style={{ fontFamily: "var(--font-primary)", paddingBottom: "40px" }}>
         
              Enjoy our dedicated atrium workspace with peaceful surroundings, natural daylight, reliable free WiFi and speciality coffee from our barista team. With power sockets at every seat, including USB-A, USB-C and UK plugs, Movers is the perfect cafe to work, study, meet or spend the day getting things done.
            </p>
            <ul className="mb-10 flex flex-col gap-2 md:gap-3">
              {[
                "Free wifi",
                "Plugs at every seat — USB-A, USB-C & UK sockets",
                "£8 unlimited speciality batch brew from our barista team",
                "Vintage clothing & streetwear shop"
              ].map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-3 text-[15px] md:text-[16px] text-zinc-800 dark:text-zinc-100 font-normal tracking-tight"
                  style={{
                    fontFamily: "var(--font-primary)",
                    background: "rgba(246,246,248,0.75)",
                    borderRadius: "10px",
                    padding: "10px 18px",
                    boxShadow: "0 1px 6px 0 rgba(12,12,18,0.04)",
                    color: "black",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0 bg-zinc-900 dark:bg-white border-2 border-zinc-300 mr-3"
                    style={{
                      display: "inline-block",
                      marginRight: "14px"
                    }}
                  />
                  <span className="relative top-[1px]">{perk}</span>
                </li>
              ))}
            </ul>
      
          </div>
          <div className="flex flex-col gap-4">
            <PhotoSlot label="photo: atrium — add /public/cowork-atrium.jpg" className="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOOTER — 1001-inspired
      ══════════════════════════════════════════════ */}
      <footer className="bg-[#0a0a0a] text-white" style={{paddingLeft: "40px", paddingTop: "40px", paddingBottom: "40px"}}>

        {/* ── Top info row ── */}
        <div className="px-8 md:px-20 pt-20 md:pt-32 pb-16 md:pb-24
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
                alignSelf: "flex-start",
                filter: "invert(1)",
                mixBlendMode: "screen",
              }}
            />
            <p className="text-zinc-400 text-[14px] leading-relaxed max-w-[220px]"
              style={{ fontFamily: "var(--font-primary)", paddingBottom: "40px" }}>
              Nottingham&apos;s Listening Cafe,<br />
              late night bar &amp; community<br />
              third space.
            </p>
          </div>

          {/* Right: hours + location */}
          <div className="md:pl-16 grid grid-cols-1 md:grid-cols-2 gap-10" style={{paddingLeft: "40px"}}>

            {/* Opening hours */}
            <div>
              <p className="uppercase tracking-[0.22em] text-[16px] mb-5 text-zinc-500"
                style={{ fontFamily: "var(--font-mono)" }}>
                Opening Hours
              </p>
              {HOURS.map(({ days, time }) => (
                <p key={days} className="text-zinc-300"
                  style={{ fontFamily: "var(--font-mono)", fontSize: "13px", lineHeight: "2.1" }}>
                  {days}<br />
                  <span className="text-white">{time}</span>
                </p>
              ))}
            </div>

            {/* Location */}
            <div>
              <p className="uppercase tracking-[0.22em] text-[16px] mb-5 text-zinc-500"
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
        <div className="px-8 md:px-20 py-12 md:py-16 border-t border-white/[0.07]
          flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12">

          {/* Newsletter box — same style as hero anchor boxes */}
          <a
            href="#"
            className="border border-white text-white uppercase hover:bg-white hover:text-black transition-colors"
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "12px",
              letterSpacing: "0.24em",
              padding: "14px 40px",
              display: "inline-block",
            }}
          >
            Mailing List Sign Up
          </a>

          {/* Social */}
          <div className="flex gap-8">
            {[
              { label: "Instagram", href: "https://www.instagram.com/movers.venue" },
              { label: "RA",        href: "https://ra.co/clubs/262186" },
            ].map(({ label, href }) => (
              <a key={label} href={href}
                className="text-white hover:text-white transition-colors uppercase"
                style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.14em" }}>
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Copyright ── */}
        <div className="px-8 md:px-20 py-8 border-t border-white/[0.07]">
          <p className="text-white text-[16px]"
            style={{ fontFamily: "var(--font-mono)", paddingTop: "40px" }}>
            © 2026 Movers.
          </p>
        </div>

      </footer>
    </>
  );
}
