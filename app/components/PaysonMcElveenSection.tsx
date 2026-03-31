import Link from "next/link";
import Image from "next/image";

const WITH_PACE_URL = "https://www.withpace.cc/";
const PODCAST_ARTWORK_URL =
  "https://images.squarespace-cdn.com/content/v1/61bc01edd74e362290d840af/75b992a0-20d3-4094-95ff-7b77a5bf03cd/Copy+of+Podcast+Artwork.jpg?format=1000w";
const RED_BULL_PROFILE_URL =
  "https://www.redbull.com/us-en/athlete/payson-mcelveen";
const SPOTIFY_URL = "https://open.spotify.com/show/2DJhVL3faEez1BvoaqVGRc";
const INSTAGRAM_URL = "https://www.instagram.com/paysonmcelveen/";

function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function PaysonMcElveenSection() {
  return (
    <section
      id="payson"
      className="grid gap-8 md:grid-cols-2 md:gap-12 md:items-center"
      aria-labelledby="payson-heading"
    >
      <div className="relative aspect-square max-w-md rounded-xl overflow-hidden bg-[var(--background-secondary)] border border-white/10">
        <Image
          src={PODCAST_ARTWORK_URL}
          alt="With Pace podcast artwork - Payson McElveen"
          width={1000}
          height={1000}
          className="object-cover w-full h-full"
          unoptimized
        />
      </div>
      <div className="space-y-6">
        <h2
          id="payson-heading"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          Meet Payson McElveen
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Mountain bike cross-country marathon rider, five-time collegiate title
          winner, and US national champion. A Red Bull athlete who grew up in
          Austin, Texas, and now hosts the With Pace podcast — featuring
          conversations with inspiring athletes, entrepreneurs, and adventurers.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href={WITH_PACE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition-colors"
          >
            With Pace
            <span aria-hidden>↗</span>
          </Link>
          <Link
            href={RED_BULL_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition-colors"
          >
            <Image
              src="/images/RedBullLogo2.png"
              alt=""
              width={24}
              height={24}
              className="h-6 w-6 object-contain"
            />
            Red Bull Profile
          </Link>
          <Link
            href={SPOTIFY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition-colors"
          >
            <SpotifyIcon className="h-6 w-6 text-[#1DB954]" />
            With Pace Podcast
          </Link>
          <Link
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700/80 border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition-colors"
          >
            <InstagramIcon className="h-6 w-6" />
            Instagram
          </Link>
        </div>
      </div>
    </section>
  );
}
