import Link from "next/link";
import { KIKITS_REGISTER_URL } from "../constants";

export function FinalCtaSection() {
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
