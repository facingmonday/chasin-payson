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

export function HowItWorksSection() {
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
