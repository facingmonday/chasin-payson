import Link from "next/link";
import { RULE_OF_THREE_URL } from "../constants";

export function RuleOfThreeWeekSection() {
  return (
    <section
      id="rule-of-three-week"
      className="rounded-2xl border border-white/10 bg-[var(--background-secondary)] p-6 sm:p-8"
      aria-labelledby="rule-of-three-week-heading"
    >
      <h2
        id="rule-of-three-week-heading"
        className="mb-6 text-2xl font-bold tracking-tight text-white sm:text-3xl"
      >
        Rule of Three
      </h2>
      <p className="mb-4 text-zinc-300 leading-relaxed">
        Chasin Payson is the shakeout ride before Rule of Three week — your
        chance to line up and get ready for the main event.
      </p>
      <p className="mb-4 text-zinc-300 leading-relaxed">
        Rule of Three: tarmac, gravel, and singletrack. Community-driven,
        affordable entry, no sponsor cash, a hard course, and a rockin’
        finish-line party.
      </p>
      <p className="mb-6 text-zinc-300 leading-relaxed">
        If you&apos;re coming for Rule of Three, this is your official shakeout.
      </p>
      <Link
        href={RULE_OF_THREE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full border-2 border-zinc-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
      >
        Visit ruleofthree.bike
      </Link>
    </section>
  );
}
