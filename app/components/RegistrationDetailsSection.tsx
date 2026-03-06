import Link from "next/link";
import { KIKITS_REGISTER_URL } from "../constants";

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

export function RegistrationDetailsSection() {
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
