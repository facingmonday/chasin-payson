import Link from "next/link";
import Image from "next/image";
import { HeroCountdown } from "./HeroCountdown";

/** CTAs: Header/Hero/Course (Register Now, View Course Map); What Is/Registration/Final (Register Free / Register on Kikits → Kikits); Rule of Three (Visit ruleofthree.bike). Primary = accent-red; secondary = outline. Accessibility: <header>, <main>, <section> with aria-labelledby; <nav> aria-label; FAQ uses <details>/<summary>; section ids for anchor links. */
const KIKITS_REGISTER_URL =
  "https://kikits.com/organizations/69a72fb647d530fa9c13f83f/events/69a88fd9191cc3d23d1c0a5a";
const RULE_OF_THREE_URL = "https://ruleofthree.bike";
const COURSE_MAP_URL = "#course";
const HIGHLIGHT_REEL_URL =
  "https://next-wave-agentic.nyc3.cdn.digitaloceanspaces.com/ChasinPaytonMedia/2024ChasinPayson.mp4";
const HERO_VIDEO_URL =
  "https://next-wave-agentic.nyc3.cdn.digitaloceanspaces.com/ChasinPaytonMedia/ChasinPaysonHero.mp4";
const EVENT_DATE_LABEL = "Thu, May 14 2026 • 5:00 PM";
const EVENT_VENUE = "Airship @ The Pumphouse, Bentonville, Arkansas";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-sans">
      <Header />
      <HeroSection />
      <main className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8 space-y-16 sm:space-y-20">
        <WhatIsSection />
        <WhoCanRideSection />
        <CourseSection />
        <RuleOfThreeSection />
        <SponsorsSection />
        <RegistrationDetailsSection />
        <FaqSection />
      </main>
      <HighlightReelSection />
      <div className="mx-auto max-w-5xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8 space-y-16 sm:space-y-20">
        <FinalCtaSection />
      </div>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header
      className="border-b border-white/10 bg-[var(--background)]"
      aria-label="Site header"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-3.5 sm:px-6 sm:py-4 lg:px-8">
        <div className="space-y-0.5">
          <span className="text-lg font-bold tracking-tight text-white sm:text-xl">
            Chasin Payson
          </span>
          <p className="text-xs text-zinc-400">
            Official Rule of Three Shakeout Ride
          </p>
        </div>
        <nav
          className="flex items-center gap-3"
          aria-label="Primary navigation"
        >
          <Link
            href={COURSE_MAP_URL}
            className="hidden md:block text-sm font-medium text-zinc-300 underline-offset-4 hover:text-white hover:underline"
          >
            View Course Map
          </Link>
          <Link
            href={KIKITS_REGISTER_URL}
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent-red)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:opacity-90"
          >
            Register Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section
      className="relative min-h-[70vh] w-full overflow-hidden bg-[var(--background-secondary)]"
      aria-labelledby="hero-heading"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HERO_VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#00162b]/50 via-[#001c39]/55 to-[#00162b]" />
      <div className="relative flex flex-col justify-end min-h-[70vh] p-6 pb-3 sm:p-8 sm:pb-4 md:p-10 md:pb-5">
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
              The Official Rule of Three Shakeout Ride
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

function WhatIsSection() {
  return (
    <section
      id="what-is"
      className="grid gap-8 md:grid-cols-2 md:gap-12"
      aria-labelledby="what-is-heading"
    >
      <div>
        <h2
          id="what-is-heading"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          What is Chasin Payson?
        </h2>
        <Image
          src={"/images/ChasinPayson.png"}
          alt="Chasin Payson"
          width={1000}
          height={1000}
        />
      </div>
      <div className="space-y-6">
        <p className="text-zinc-300 leading-relaxed">
          A pro-led shakeout ride. A Red Bull–fueled test. A community kickoff
          to Rule of Three Week. Chasin Payson is the official shakeout ride of
          Rule of Three. Bring the bike you&apos;re racing. Line up behind
          Payson McElveen. Ride a playful 4.5-mile loop mixing pavement, gravel,
          and singletrack.
        </p>
        <div className="space-y-2 font-medium text-zinc-200">
          <p>The first lap? Controlled.</p>
          <p>The next lap? Faster.</p>
          <p>Then faster.</p>
          <p>Then hang on.</p>
        </div>
        <p className="text-zinc-300 leading-relaxed">
          If you can cross under the Red Bull finish arch with Payson,
          you&apos;ve earned your place. Podium celebration follows at The Hub.
          This is a free community event — but registration is required.
        </p>
        <Link
          href={KIKITS_REGISTER_URL}
          className="inline-flex items-center justify-center rounded-full bg-[var(--accent-red)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:opacity-90"
        >
          Register Free
        </Link>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      title: "Register Online",
      body: "All participants must register through Kikits before the event. Waiver signature required. Registration closes at 3PM day-of or when capacity is reached (250 riders).",
    },
    {
      title: "Pick Up Your Number Plate",
      body: "At Airship before the ride: Show your QR code. Waiver verified. Receive your official number plate. Red Bull drink ticket activated. No number plate = no ride.",
    },
    {
      title: "Line Up & Hold On",
      body: "5:00 PM sharp start. 1.5 hour progressive pace ride. Finish under the Red Bull arch. Optional podium celebration at The Hub at 7PM.",
    },
  ];
  return (
    <section
      id="how-it-works"
      className="space-y-8"
      aria-labelledby="how-it-works-heading"
    >
      <h2
        id="how-it-works-heading"
        className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
      >
        How It Works
      </h2>
      <div className="grid gap-8 sm:grid-cols-3">
        {steps.map((step, i) => (
          <div
            key={i}
            className="relative flex flex-col gap-3 rounded-xl border border-white/10 bg-[var(--background-secondary)] p-6"
          >
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--accent-red)] text-lg font-bold text-white"
              aria-hidden
            >
              {i + 1}
            </span>
            <h3 className="text-lg font-semibold text-white">{step.title}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">{step.body}</p>
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-[#F4BE2A]/40 bg-[#F4BE2A]/10 px-4 py-3 text-sm text-[#F4BE2A]">
        <strong>Note:</strong> Registration closes at 3PM day-of. Capacity
        limited to 250 riders.
      </div>
    </section>
  );
}

function WhoCanRideSection() {
  const items = [
    "Community welcome",
    "Rule of Three riders",
    "Out-of-town visitors",
    "All bike types welcome",
  ];
  return (
    <section
      id="who-can-ride"
      className="rounded-2xl border border-white/10 bg-[var(--background-secondary)] p-6 sm:p-8"
      aria-labelledby="who-can-ride-heading"
    >
      <h2
        id="who-can-ride-heading"
        className="mb-6 text-2xl font-bold tracking-tight text-white sm:text-3xl"
      >
        Who Can Ride?
      </h2>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3 text-zinc-300">
            <span
              className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400"
              aria-hidden
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-zinc-400">
        Riders under 16 must register with a parent, guardian, or coach.
        Capacity limited to 250 participants.
      </p>
    </section>
  );
}

function CourseSection() {
  return (
    <section
      id="course"
      className="w-full overflow-hidden rounded-xl border border-white/10 bg-[var(--background-secondary)]"
      aria-labelledby="course-heading"
    >
      <div
        className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-6"
        aria-label="Course details"
      >
        <h2
          id="course-heading"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          The Course
        </h2>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-1 text-zinc-300 text-sm sm:text-base">
          <li>
            <span className="font-semibold text-zinc-200">4.5 mile</span> loop
          </li>
          <li>
            <span className="font-semibold text-zinc-200">368 ft</span>{" "}
            elevation gain
          </li>
          <li>
            <span className="font-semibold text-zinc-200">10.2%</span> max grade
          </li>
          <li>
            <span className="font-semibold text-zinc-200">~1.5 hour</span> ride
          </li>
        </ul>
      </div>
      <video
        className="w-full min-h-[280px] object-cover"
        src="/videos/Map.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <div className="flex justify-center px-4 py-4">
        <Link
          href={"https://ridewithgps.com/routes/54023105"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-zinc-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
        >
          More Details on RideWithGPS
        </Link>
      </div>
    </section>
  );
}

function RuleOfThreeSection() {
  return (
    <section
      id="rule-of-three"
      className="rounded-2xl border border-white/10 bg-[var(--background-secondary)] p-6 text-center sm:p-8"
      aria-labelledby="rule-of-three-heading"
    >
      <h2
        id="rule-of-three-heading"
        className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl"
      >
        Rule of Three Week
      </h2>
      <p className="mx-auto max-w-xl text-zinc-400 leading-relaxed">
        Chasin Payson is part of Rule of Three Week, a full week of cycling
        events, community rides, and celebrations across Bentonville. If
        you&apos;re coming for Rule of Three, this is your official shakeout.
      </p>
      <Link
        href={RULE_OF_THREE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--accent-red)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:opacity-90"
      >
        Visit ruleofthree.bike
      </Link>
    </section>
  );
}

function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="space-y-8"
      aria-labelledby="sponsors-heading"
    >
      <h2
        id="sponsors-heading"
        className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
      >
        Sponsors &amp; Community Partners
      </h2>
      <div className="space-y-8">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500">
            Presented By
          </p>
          <div className="flex flex-wrap items-center gap-8">
            <Image
              src={"/images/RedBullLogo.png"}
              alt="Red Bull"
              width={175}
              height={175}
              className="text-lg font-bold text-white"
            />
            <Image
              src={"/images/AlliedLogo.png"}
              alt="Allied Cycle Works"
              width={100}
              height={100}
              className="text-lg font-bold text-white"
            />
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500">
            Supported By
          </p>
          <div className="flex flex-wrap gap-6 text-zinc-400">
            <span>Rule of Three</span>
            <span>Airship Coffee</span>
            <span>The Hub Bike Lounge</span>
            <span>Local Bentonville cycling community</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function RegistrationDetailsSection() {
  const bullets = [
    "Free Registration",
    "250 Rider Cap",
    "Must sign digital waiver",
    "Must check in by 3PM day-of",
  ];
  const includes = [
    "Official number plate",
    "Red Bull drink",
    "Access to podium celebration",
  ];
  return (
    <section
      id="registration"
      className="rounded-2xl border-2 border-[var(--accent-red)]/40 bg-[var(--background-secondary)] p-6 sm:p-8"
      aria-labelledby="registration-heading"
    >
      <h2
        id="registration-heading"
        className="mb-6 text-2xl font-bold tracking-tight text-white sm:text-3xl"
      >
        Registration Details
      </h2>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <div>
          <ul className="space-y-2 text-zinc-300">
            {bullets.map((b, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-[var(--accent-red)]" aria-hidden>
                  •
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start shrink-0 text-left">
          <p className="mb-2 text-sm font-medium text-zinc-400">Includes:</p>
          <ul className="list-inside list-disc space-y-1 text-zinc-400 mb-6">
            {includes.map((inc, i) => (
              <li key={i}>{inc}</li>
            ))}
          </ul>
          <Link
            href={KIKITS_REGISTER_URL}
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent-red)] px-6 py-3 text-base font-semibold text-white transition-colors hover:opacity-90"
          >
            Register Now on Kikits
          </Link>
          <p className="mt-4 text-xs text-zinc-500">
            QR code required for number plate pickup.
          </p>
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    question: "Is this a race?",
    answer:
      "No. It's a progressive shakeout ride. But it gets competitive quickly.",
  },
  {
    question: "Can I register onsite?",
    answer: "Yes, until 3PM if capacity allows.",
  },
  {
    question: "What bike should I bring?",
    answer: "Bring the bike you're riding for Rule of Three.",
  },
  {
    question: "Is this part of Red Bull Rampage?",
    answer: "No. This is a community athlete activation event.",
  },
  {
    question: "What happens after the ride?",
    answer: "Podium + celebration at The Hub.",
  },
];

function FaqSection() {
  return (
    <section
      id="faq"
      className="rounded-2xl border border-white/10 bg-[var(--background-secondary)] p-6 sm:p-8"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="mb-6 text-2xl font-bold tracking-tight text-white sm:text-3xl"
      >
        FAQ
      </h2>
      <div className="space-y-2">
        {FAQ_ITEMS.map((item, i) => (
          <details
            key={i}
            className="group rounded-lg border border-white/10 bg-[var(--background)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 text-left font-medium text-white [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                className="shrink-0 text-zinc-400 transition group-open:rotate-180"
                aria-hidden
              >
                ▼
              </span>
            </summary>
            <p className="border-t border-white/10 px-4 py-3 text-zinc-400">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

function HighlightReelSection() {
  return (
    <section
      className="relative min-h-[70vh] w-full overflow-hidden bg-[var(--background-secondary)] py-36"
      aria-labelledby="hero-heading"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={HIGHLIGHT_REEL_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#001c39]/30 to-[#00162b]" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-transparent via-[#00162b]/30 to-[#00162b]"
        aria-hidden
      />
      <div className="relative flex flex-col justify-end min-h-[70vh] p-6 pb-3 sm:p-8 sm:pb-4 md:p-10 md:pb-5">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between md:gap-8">
          <div className="flex flex-col gap-4 max-w-2xl">
            <h1
              id="hero-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Chasin Payson 2024 Highlight Reel
            </h1>
            <p className="text-lg text-zinc-300">
              See What You&apos;re Getting Into.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={"https://www.youtube.com/watch?v=ERx_LMOuuaE"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border-2 border-zinc-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
              >
                Watch the 2024 Highlight Reel
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section
      id="final-cta"
      className="rounded-2xl border border-white/10 bg-[var(--background-secondary)] p-8 text-center sm:p-12"
      aria-labelledby="final-cta-heading"
    >
      <h2
        id="final-cta-heading"
        className="text-2xl font-bold tracking-tight text-white sm:text-4xl"
      >
        Do You Have What It Takes?
      </h2>
      <p className="mt-4 text-lg text-zinc-400">
        Line up. Hold on. Cross the arch.
      </p>
      <Link
        href={KIKITS_REGISTER_URL}
        className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--accent-red)] px-8 py-4 text-lg font-semibold text-white transition-colors hover:opacity-90"
      >
        Register Free on Kikits
      </Link>
    </section>
  );
}

function Footer() {
  return (
    <footer
      className="mt-20 border-t border-white/10 bg-[var(--background)]"
      aria-label="Site footer"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap gap-6 text-sm text-zinc-500"
          aria-label="Footer links"
        >
          <Link href="#privacy" className="hover:text-zinc-300">
            Privacy
          </Link>
          <Link href="#terms" className="hover:text-zinc-300">
            Terms
          </Link>
          <Link href="#contact" className="hover:text-zinc-300">
            Contact
          </Link>
        </nav>
        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
          <Link
            href={RULE_OF_THREE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300"
          >
            Rule of Three
          </Link>
          <a
            href="https://redbull.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300"
          >
            Red Bull
          </a>
          <span>Powered by Kikits</span>
        </div>
      </div>
    </footer>
  );
}
