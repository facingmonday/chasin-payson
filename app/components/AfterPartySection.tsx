import Image from "next/image";

export function AfterPartySection() {
  return (
    <section
      id="after-party"
      className="rounded-2xl border border-white/10 bg-[var(--background-secondary)] p-6 sm:p-8"
      aria-labelledby="after-party-heading"
    >
      <div className="flex flex-col gap-6 md:flex-row md:gap-8 md:items-center">
        <div className="relative w-full aspect-[4/3] max-w-sm overflow-hidden rounded-xl flex-shrink-0">
          <Image
            src="/images/TheHubLounge.webp"
            alt="The Hub Bike Lounge"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 384px"
          />
        </div>
        <div className="min-w-0">
          <h2
            id="after-party-heading"
            className="mb-4 text-2xl font-bold tracking-tight text-white sm:text-3xl"
          >
            After Party at The Hub
          </h2>
          <p className="text-zinc-300 leading-relaxed">
            After you cross under the Red Bull arch, join the podium celebration
            at The Hub Bike Lounge at 7PM. Wrap up the shakeout with the
            community and get ready for Rule of Three.
          </p>
        </div>
      </div>
    </section>
  );
}
