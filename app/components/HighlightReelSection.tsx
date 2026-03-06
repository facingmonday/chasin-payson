import Link from "next/link";
import { HIGHLIGHT_REEL_URL } from "../constants";

export function HighlightReelSection() {
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
