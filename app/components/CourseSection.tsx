import Link from "next/link";

export function CourseSection() {
  return (
    <section
      id="course"
      className="w-full overflow-hidden rounded-xl border border-white/10 bg-[var(--background-secondary)]"
      aria-labelledby="course-heading"
    >
      <div
        className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 px-4 py-5 sm:px-6 sm:py-6 md:px-8 md:py-6"
        aria-label="Course details"
      >
        <h2
          id="course-heading"
          className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
        >
          The Course
        </h2>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-1 text-zinc-300 text-sm sm:text-base">
          <li>
            <span className="font-semibold text-zinc-200">4.5 mile</span> loop
          </li>
          <li>
            <span className="font-semibold text-zinc-200">368 ft</span>{" "}
            elevation gain
          </li>
          <li>
            <span className="font-semibold text-zinc-200">10.2%</span> max grade
          </li>
          <li>
            <span className="font-semibold text-zinc-200">~1.5 hour</span> ride
          </li>
        </ul>
      </div>
      <video
        className="w-full min-h-[280px] object-cover"
        src="/videos/Map.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
      />
      <div className="flex justify-center px-4 py-4">
        <Link
          href={"https://ridewithgps.com/routes/54023105"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-zinc-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:border-white hover:bg-white/5"
        >
          More Details on RideWithGPS
        </Link>
      </div>
    </section>
  );
}
