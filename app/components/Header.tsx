import Link from "next/link";
import { KIKITS_REGISTER_URL } from "../constants";

export function Header() {
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
            Pro-Led Shakeout Ride
          </p>
        </div>
        <nav
          className="flex items-center gap-3"
          aria-label="Primary navigation"
        >
          <a
            href="#course"
            className="hidden md:block text-sm font-medium text-zinc-300 underline-offset-4 hover:text-white hover:underline"
          >
            View Course Map
          </a>
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
