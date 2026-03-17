import Image from "next/image";

export function SponsorsSection() {
  return (
    <section
      id="sponsors"
      className="space-y-8"
      aria-labelledby="sponsors-heading"
    >
      <h2
        id="sponsors-heading"
        className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
      >
        Sponsors &amp; Community Partners
      </h2>
      <div className="space-y-8">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500">
            Presented By
          </p>
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8 md:gap-10">
            <Image
              src={"/images/RedBullLogo2.png"}
              alt="Red Bull"
              width={200}
              height={200}
              className="h-24 w-auto max-w-[200px] object-contain sm:h-28 sm:max-w-[220px] md:h-32 md:max-w-[260px]"
            />
            <Image
              src={"/images/AlliedLogoWhite.png"}
              alt="Allied Cycle Works"
              width={125}
              height={125}
              className="h-20 w-auto max-w-[160px] object-contain sm:h-24 sm:max-w-[180px] md:h-28 md:max-w-[200px]"
            />
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500">
            Supported By
          </p>
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 md:gap-8 text-zinc-400">
            <Image
              src={"/images/RuleOf3.png"}
              alt="Rule of Three"
              width={110}
              height={100}
              className="h-16 w-auto max-w-[140px] object-contain sm:h-20 sm:max-w-[160px] md:h-20 md:max-w-[180px]"
            />
            <Image
              src={"/images/AirshipLogo.png"}
              alt="Airship Coffee"
              width={300}
              height={100}
              className="h-12 w-auto max-w-[180px] object-contain sm:h-14 sm:max-w-[220px] md:h-16 md:max-w-[260px] lg:h-[4.5rem] lg:max-w-[300px]"
            />
            <Image
              src={"/images/TheHub.png"}
              alt="The Hub Bike Lounge"
              width={200}
              height={100}
              className="h-16 w-auto max-w-[160px] object-contain sm:h-20 sm:max-w-[180px] md:h-20 md:max-w-[220px] lg:max-w-[240px]"
            />
            <Image
              src={"/images/VisitBentonville.png"}
              alt="Visit Bentonville"
              width={200}
              height={100}
              className="h-16 w-auto max-w-[160px] object-contain sm:h-20 sm:max-w-[180px] md:h-20 md:max-w-[220px] lg:max-w-[280px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
