"use client";

import { useEffect, useState } from "react";

// Event day: May 14, 2026. Countdown is calendar days until that date in the user's local timezone.
const EVENT_YEAR = 2026;
const EVENT_MONTH = 4; // May (0-indexed)
const EVENT_DAY = 14;

export function HeroCountdown() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
      const eventDay = new Date(EVENT_YEAR, EVENT_MONTH, EVENT_DAY);
      // Count calendar days (DST-safe: advance one local day at a time)
      let count = 0;
      const d = new Date(today);
      while (d < eventDay) {
        d.setDate(d.getDate() + 1);
        count++;
      }
      setDaysLeft(Math.max(0, count));
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
