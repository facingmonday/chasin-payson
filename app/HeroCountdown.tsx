"use client";

import { useEffect, useState } from "react";

// May 14, 2026 5:00 PM Central (Bentonville, AR) — ISO with offset so countdown is correct in all timezones
const EVENT_DATE = new Date("2026-05-14T17:00:00-05:00");

export function HeroCountdown() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const diff = EVENT_DATE.getTime() - now.getTime();
      setDaysLeft(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))));
    };
    update();
    const id = setInterval(update, 60_000);
    return () => clearInterval(id);
  }, []);

  if (daysLeft === null)
    return <span className="text-3xl sm:text-4xl font-bold text-white">—</span>;
  return (
    <span
      className="text-3xl sm:text-4xl font-bold text-white"
      aria-live="polite"
    >
      {daysLeft} {daysLeft === 1 ? "Day" : "Days"} left
    </span>
  );
}
