"use client";

import { useEffect, useRef, useState } from "react";
import { WhatIsSection } from "./WhatIsSection";
import { HowItWorksSection } from "./HowItWorksSection";
import { WhoCanRideSection } from "./WhoCanRideSection";
import { CourseSection } from "./CourseSection";
import { RuleOfThreeWeekSection } from "./RuleOfThreeWeekSection";
import { PaysonMcElveenSection } from "./PaysonMcElveenSection";
import { SponsorsSection } from "./SponsorsSection";
import { RegistrationDetailsSection } from "./RegistrationDetailsSection";
import { FaqSection } from "./FaqSection";
import { AfterPartySection } from "./AfterPartySection";
import { HighlightReelSection } from "./HighlightReelSection";
import { FinalCtaSection } from "./FinalCtaSection";

// Path waypoints: (progress 0..1, x as percent of viewport 0..100)
const PATH_WAYPOINTS: [number, number][] = [
  [0, 8],
  [0.05, 5],
  [0.1, 8],
  [0.15, 15],
  [0.2, 25],
  [0.25, 60],
  [0.3, 85],
  [0.35, 83],
  [0.4, 90],
  [0.45, 80],
  [0.5, 60],
  [0.55, 40],
  [0.6, 30],
  [0.65, 20],
  [0.7, 10],
  [0.75, 15],
  [0.8, 10],
  [0.9, 30],
  [0.95, 40],
  [1, 50],
];

function getPathX(progress: number, startX?: number): number {
  const firstX = startX ?? PATH_WAYPOINTS[0][1];
  const p = Math.max(0, Math.min(1, progress));
  if (p <= PATH_WAYPOINTS[0][0]) return firstX;
  if (p >= PATH_WAYPOINTS[PATH_WAYPOINTS.length - 1][0])
    return PATH_WAYPOINTS[PATH_WAYPOINTS.length - 1][1];
  for (let i = 0; i < PATH_WAYPOINTS.length - 1; i++) {
    const [p0, x0] = PATH_WAYPOINTS[i];
    const [p1, x1] = PATH_WAYPOINTS[i + 1];
    const segStartX = i === 0 ? firstX : x0;
    if (p >= p0 && p <= p1) {
      const t = (p - p0) / (p1 - p0);
      return segStartX + t * (x1 - segStartX);
    }
  }
  return firstX;
}

// Smoothstep for rounded corners along the path (ease in/out per segment)
function smoothstep(t: number): number {
  return t * t * (3 - 2 * t);
}

function getPathXSmooth(progress: number, startX?: number): number {
  const firstX = startX ?? PATH_WAYPOINTS[0][1];
  const p = Math.max(0, Math.min(1, progress));
  if (p <= PATH_WAYPOINTS[0][0]) return firstX;
  if (p >= PATH_WAYPOINTS[PATH_WAYPOINTS.length - 1][0])
    return PATH_WAYPOINTS[PATH_WAYPOINTS.length - 1][1];
  for (let i = 0; i < PATH_WAYPOINTS.length - 1; i++) {
    const [p0, x0] = PATH_WAYPOINTS[i];
    const [p1, x1] = PATH_WAYPOINTS[i + 1];
    const segStartX = i === 0 ? firstX : x0;
    if (p >= p0 && p <= p1) {
      const t = (p - p0) / (p1 - p0);
      const tSmooth = smoothstep(t);
      return segStartX + tSmooth * (x1 - segStartX);
    }
  }
  return firstX;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function RaceTrackWrapper() {
  const startBlockRef = useRef<HTMLDivElement>(null);
  const finishLineRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const [progress, setProgress] = useState(0);
  const [rawProgress, setRawProgress] = useState(-1);
  const [trailTop, setTrailTop] = useState(0);
  const [trailHeight, setTrailHeight] = useState(0);
  const [startXPercent, setStartXPercent] = useState(8);
  const capturedStartXRef = useRef(false);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    function update() {
      const startEl = startBlockRef.current;
      const finishEl = finishLineRef.current;
      if (!startEl || !finishEl) return;

      const scrollY = window.scrollY;
      const vh = window.innerHeight / 2;
      const startRect = startEl.getBoundingClientRect();
      const finishRect = finishEl.getBoundingClientRect();

      const startCenterY = startRect.top + startRect.height / 2;
      const scrollStart = scrollY + (startCenterY - vh);
      const finishEndOffset = 80; // end animation just past the finish line
      const scrollEnd = scrollY + (finishRect.bottom - vh) + finishEndOffset;
      const range = scrollEnd - scrollStart;
      const raw = range > 0 ? (scrollY - scrollStart) / range : 0;
      const prog = clamp(raw, 0, 1);

      if (raw >= 0) {
        if (!capturedStartXRef.current) {
          const centerX = startRect.left + startRect.width / 2;
          const pct = (centerX / window.innerWidth) * 100;
          setStartXPercent(pct);
          capturedStartXRef.current = true;
        }
      } else {
        capturedStartXRef.current = false;
      }

      setRawProgress(raw);
      setProgress(prog);

      const startTop = startRect.top + scrollY;
      const trailH = Math.max(0, range);
      setTrailHeight(trailH);
      setTrailTop(startTop - scrollY);
    }

    function onScrollOrResize() {
      if (rafRef.current != null) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        update();
      });
    }

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const pathXPercent = getPathX(progress, startXPercent);
  const showFixedDot = rawProgress >= 0;

  return (
    <>
      {/* Trail: fixed so it stays in document position; drawn up to progress */}
      {/* {rawProgress >= 0 && progress > 0 && trailHeight > 0 && (
        <div
          className="pointer-events-none fixed left-0 right-0 z-15"
          style={{
            top: trailTop,
            height: trailHeight,
          }}
          aria-hidden
        >
          <svg
            className="h-full w-full"
            viewBox={`0 0 100 ${trailHeight}`}
            preserveAspectRatio="none"
          >
            <path
              ref={pathRef}
              d={(() => {
                const trailDotY =
                  (typeof window !== "undefined" ? window.innerHeight : 0) / 2 -
                  trailTop;
                type Pt = { x: number; y: number };
                const points: Pt[] = [];
                const steps = Math.max(10, Math.ceil(80 * progress));
                for (let i = 0; i <= steps; i++) {
                  const t = (i / steps) * progress;
                  const x = getPathXSmooth(t, startXPercent);
                  const y = progress > 0 ? (trailDotY * t) / progress : 0;
                  points.push({ x, y });
                }
                if (progress > 0 && points.length > 0) {
                  points.push({
                    x: pathXPercent,
                    y: trailDotY,
                  });
                }
                if (points.length < 2) return `M 0 0`;
                if (points.length === 2) {
                  return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
                }
                // Catmull-Rom to cubic Bezier: smooth curve through all points, no hard edges
                let d = `M ${points[0].x} ${points[0].y}`;
                for (let i = 0; i < points.length - 1; i++) {
                  const p0 = points[Math.max(0, i - 1)];
                  const p1 = points[i];
                  const p2 = points[i + 1];
                  const p3 = points[Math.min(points.length - 1, i + 2)];
                  const c1x = p1.x + (p2.x - p0.x) / 6;
                  const c1y = p1.y + (p2.y - p0.y) / 6;
                  const c2x = p2.x - (p3.x - p1.x) / 6;
                  const c2y = p2.y - (p3.y - p1.y) / 6;
                  d += ` C ${c1x} ${c1y} ${c2x} ${c2y} ${p2.x} ${p2.y}`;
                }
                return d;
              })()}
              fill="none"
              stroke="rgba(239, 68, 68, 0.5)"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )} */}

      {/* Fixed red dot: vertically centered, horizontal from path
      {showFixedDot && (
        <div
          className="fixed left-0 top-[50%] z-15 h-5 w-5 -translate-y-1/2 -translate-x-1/2 rounded-full bg-red-500"
          style={{ left: `${pathXPercent}%` }}
          aria-hidden
        />
      )}

      {showFixedDot && (
        <div
          className="fixed left-0 top-[45%] z-15 h-5 w-5 -translate-y-1/2 -translate-x-1/2 rounded-full bg-blue-400"
          style={{ left: `${pathXPercent - 2.5}%` }}
          aria-hidden
        />
      )} */}

      <main className="mx-auto max-w-5xl px-4 pt-20 space-y-20 relative z-20">
        {/* <div className="relative"> */}
        {/* Pregame graphic: blue dots + starting line always visible; red dot is same as animated dot (hidden here when fixed dot is shown) */}
        {/* <div
            ref={startBlockRef}
            className="absolute right-full mr-6 top-0 flex flex-col items-center w-[200px]"
            aria-hidden
          >
            <div className="flex flex-col items-center mb-3">
              <div className="flex justify-center gap-1 mb-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-4 w-4 rounded-full bg-blue-400 flex-shrink-0"
                  />
                ))}
              </div>
              <div className="flex justify-center gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-4 w-4 rounded-full bg-blue-400 flex-shrink-0"
                  />
                ))}
              </div>
            </div>
            <div className="w-full h-[4px] bg-white/90" />
            <div
              className="mt-3 flex justify-center"
              style={{ visibility: showFixedDot ? "hidden" : "visible" }}
            >
              <span className="h-5 w-5 rounded-full bg-red-500 inline-block" />
            </div>
          </div>
          <div className="relative z-20">
            <WhatIsSection />
          </div> 
        </div>*/}

        <div>
          <HowItWorksSection />
        </div>
        <div>
          <WhoCanRideSection />
        </div>
        <div>
          <CourseSection />
        </div>
        <div>
          <RuleOfThreeWeekSection />
        </div>
        <div>
          <PaysonMcElveenSection />
        </div>
        <div>
          <SponsorsSection />
        </div>
        <div>
          <RegistrationDetailsSection />
        </div>
        <div>
          <FaqSection />
        </div>
        <div>
          <AfterPartySection />
        </div>
      </main>

      <div className="relative z-10">
        <HighlightReelSection />
      </div>

      {/* Finish line: checker pattern */}
      {/* <div
        ref={finishLineRef}
        className="flex flex-col items-center w-full mb-8"
      >
        <div className="w-full">
          <div className="flex h-6 w-full">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-full ${i % 2 === 0 ? "bg-white" : "bg-black"}`}
              />
            ))}
          </div>

          <div className="h-[2px] w-full bg-black" />
        </div>
        <div className="w-full">
          <div className="flex h-6 w-full">
            {Array.from({ length: 24 }).map((_, i) => (
              <div
                key={i}
                className={`flex-1 h-full ${i % 2 === 0 ? "bg-black" : "bg-white"}`}
              />
            ))}
          </div>
          <div className="h-[2px] w-full bg-black" />
        </div>
      </div> */}

      <div className="mx-auto max-w-5xl px-4 pt-20">
        <FinalCtaSection />
      </div>
    </>
  );
}
