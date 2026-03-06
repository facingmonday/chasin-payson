const items = [
  "Community welcome",
  "Riders from near and far",
  "Out-of-town visitors",
  "All bike types welcome",
];

export function WhoCanRideSection() {
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
