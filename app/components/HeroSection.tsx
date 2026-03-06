import Link from "next/link";
import Image from "next/image";
import { HeroCountdown } from "./HeroCountdown";
import Header from "./Header";
import {
  KIKITS_REGISTER_URL,
  COURSE_MAP_URL,
  HERO_VIDEO_URL,
  EVENT_DATE_LABEL,
  EVENT_VENUE,
} from "../constants";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] w-full overflow-hidden bg-[var(--background-secondary)]"
      aria-labelledby="hero-heading"
    >
      <Header />
      <video
        className="absolute inset-0 z-0 h-full w-full object-top object-cover"
        src={
          "https://next-wave-agentic.nyc3.cdn.digitaloceanspaces.com/ChasinPaytonMedia/ChasinPaysonHero2.mp4"
        }
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#00162b]/50 via-[#001c39]/55 to-[#00162b]" />
      <div className="relative z-10 flex flex-col justify-end min-h-[70vh] p-6 pb-3 sm:p-8 sm:pb-4 md:p-10 md:pb-5">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h1
              id="hero-heading"
              className="text-3xl font-bold tracking-tight text-red-500 sm:text-4xl md:text-5xl"
            >
              Chasin Payson
            </h1>
            <h2
              id="hero-heading"
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
            >
              Pro-Led Shakeout Ride
            </h2>
            <p className="text-lg text-zinc-300">
              A pro-led shakeout. A Red Bull–fueled test. Line up. Hold on.
              Cross the arch.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={COURSE_MAP_URL}
                className="inline-flex items-center justify-center rounded-full border-2 border-zinc-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
              >
                View Course Map
              </Link>
              <Link
                href={KIKITS_REGISTER_URL}
                className="inline-flex items-center justify-center rounded-full border-2 border-zinc-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
              >
                Register Now
              </Link>
            </div>
          </div>
          <div
            className="hidden md:block w-full md:w-auto md:min-w-[280px] rounded-xl bg-[#0c1222]/95 border border-white/10 p-5 sm:p-6 flex flex-col gap-4 shrink-0"
            aria-label="Event details and registration"
          >
            <div className="relative w-full h-full">
              <Image
                src={"/images/PaysonStanding.jpg"}
                alt="Payson Standing"
                width={100}
                height={100}
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40">
                <HeroCountdown />
              </div>
            </div>
            <div className="py-2">
              <p className="font-semibold text-white text-base sm:text-lg">
                Chasin Payson
              </p>
              <p className="text-sm text-zinc-400 mt-0.5">{EVENT_DATE_LABEL}</p>
              <p className="text-sm text-zinc-400">{EVENT_VENUE}</p>
            </div>
            <Link
              href={KIKITS_REGISTER_URL}
              className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-[var(--accent-red)] py-3 text-sm font-semibold text-white transition-colors hover:opacity-90"
            >
              Register Now
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
