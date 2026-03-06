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
          <div className="flex flex-wrap items-center gap-8">
            <Image
              src={"/images/RedBullLogo.png"}
              alt="Red Bull"
              width={200}
              height={200}
              className="text-lg font-bold text-white"
            />
            <Image
              src={"/images/AlliedLogo.png"}
              alt="Allied Cycle Works"
              width={125}
              height={125}
              className="text-lg font-bold text-white"
            />
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500">
            Supported By
          </p>
          <div className="flex flex-wrap gap-6 text-zinc-400">
            <Image
              src={"/images/RuleOf3.png"}
              alt="Rule of Three"
              width={110}
              height={100}
              className="text-lg font-bold text-white"
            />
            <Image
              src={"/images/AirshipLogo.png"}
              alt="Airship Coffee"
              width={300}
              height={100}
              className="h-auto w-40 max-w-full sm:w-52 md:w-64 lg:w-[300px]"
            />
            <Image
              src={"/images/TheHub.png"}
              alt="The Hub Bike Lounge"
              width={200}
              height={100}
              className="h-auto w-32 max-w-full sm:w-40 md:w-48 lg:w-[200px]"
            />
            <span className="text-lg font-bold text-white text-wrap">
              THE <br /> LOCAL <br /> BENTONVILLE <br /> CYCLING COMMUNITY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
