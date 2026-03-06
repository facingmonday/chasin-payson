import Link from "next/link";
import Image from "next/image";
import { KIKITS_REGISTER_URL } from "../constants";

export function WhatIsSection() {
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
          A pro-led shakeout ride. A Red Bull–fueled test. Bring the bike
          you&apos;re racing. Line up behind Payson McElveen. Ride a playful
          4.5-mile loop mixing pavement, gravel, and singletrack.
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
