"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const EVENT_PHOTOS = Array.from({ length: 50 }, (_, index) => ({
  src: `/images/event-photos/image${index}.jpeg`,
  alt: `Chasin Payson event photo ${index + 1}`,
}));

export function EventGallerySection() {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const selectedPhoto = EVENT_PHOTOS[selectedPhotoIndex];
  const scrollerPhotos = [...EVENT_PHOTOS, ...EVENT_PHOTOS];

  useEffect(() => {
    if (!isGalleryOpen) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsGalleryOpen(false);
      }

      if (event.key === "ArrowRight") {
        setSelectedPhotoIndex((current) => (current + 1) % EVENT_PHOTOS.length);
      }

      if (event.key === "ArrowLeft") {
        setSelectedPhotoIndex(
          (current) => (current - 1 + EVENT_PHOTOS.length) % EVENT_PHOTOS.length
        );
      }
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isGalleryOpen]);

  return (
    <section
      id="event-gallery"
      className="relative max-w-full overflow-hidden rounded-3xl border border-white/10 bg-[var(--background-secondary)] p-4 shadow-2xl shadow-black/20 sm:p-6 lg:p-8"
      aria-labelledby="event-gallery-heading"
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[var(--accent-red)]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-[var(--accent-yellow)]/10 blur-3xl" />

      <div className="relative grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-center">
        <div className="min-w-0 space-y-4">
          <button
            type="button"
            onClick={() => setIsGalleryOpen(true)}
            className="group relative block h-[320px] max-h-[58vh] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#050914] text-left shadow-xl sm:h-[420px] lg:h-[460px]"
            aria-label="Open event photo gallery"
          >
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-contain"
              priority={selectedPhotoIndex === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent-yellow)]">
                  Field Notes
                </p>
                <p className="mt-1 text-xl font-bold text-white sm:text-2xl">
                  Dirt, draft, repeat.
                </p>
              </div>
              <span className="hidden rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur sm:inline-flex">
                Open Gallery
              </span>
            </div>
          </button>

          <div className="relative max-w-full overflow-hidden rounded-2xl border border-white/10 bg-black/25 py-3">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--background-secondary)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--background-secondary)] to-transparent" />
            <div className="event-gallery-track flex w-max gap-3 px-3">
              {scrollerPhotos.map((photo, index) => {
                const photoIndex = index % EVENT_PHOTOS.length;
                const isSelected = photoIndex === selectedPhotoIndex;

                return (
                  <button
                    key={`${photo.src}-${index}`}
                    type="button"
                    onClick={() => setSelectedPhotoIndex(photoIndex)}
                    className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border bg-black transition sm:h-20 sm:w-32 ${
                      isSelected
                        ? "border-[var(--accent-yellow)] opacity-100"
                        : "border-white/10 opacity-70 hover:border-white/40 hover:opacity-100"
                    }`}
                    aria-label={`Make event photo ${photoIndex + 1} the featured photo`}
                  >
                    <Image
                      src={photo.src}
                      alt=""
                      fill
                      sizes="128px"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="min-w-0 space-y-5">
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-[var(--accent-red)]">
            Red Bull Energy
          </p>
          <h2
            id="event-gallery-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Proof the chase got rowdy.
          </h2>
          <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
            From number plates to full-send smiles, the ride had the right kind
            of chaos: fast wheels, loud cheers, and that Red Bull edge all the
            way to the arch.
          </p>
          <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center">
            <div>
              <p className="text-2xl font-black text-white">50</p>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Frames
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">1</p>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Chase
              </p>
            </div>
            <div>
              <p className="text-2xl font-black text-white">Full</p>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Send
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsGalleryOpen(true)}
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent-red)] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90"
          >
            View Gallery
            <span aria-hidden className="ml-2">
              →
            </span>
          </button>
        </div>
      </div>

      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-50 bg-[#00162b]/95 p-3 backdrop-blur sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-gallery-modal-heading"
        >
          <div className="mx-auto grid h-full max-h-dvh max-w-6xl grid-rows-[auto_minmax(0,1fr)_auto] gap-3">
            <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#00162b]/90 p-3 backdrop-blur">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--accent-yellow)]">
                  Event Gallery
                </p>
                <h3
                  id="event-gallery-modal-heading"
                  className="text-xl font-bold text-white sm:text-2xl"
                >
                  Chasin Payson in motion
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsGalleryOpen(false)}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="relative min-h-0 overflow-hidden rounded-2xl border border-white/10 bg-black">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-contain"
              />
              <button
                type="button"
                onClick={() =>
                  setSelectedPhotoIndex(
                    (current) =>
                      (current - 1 + EVENT_PHOTOS.length) % EVENT_PHOTOS.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-3 text-2xl font-bold text-white transition hover:bg-black/80"
                aria-label="Show previous event photo"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() =>
                  setSelectedPhotoIndex(
                    (current) => (current + 1) % EVENT_PHOTOS.length
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-4 py-3 text-2xl font-bold text-white transition hover:bg-black/80"
                aria-label="Show next event photo"
              >
                ›
              </button>
            </div>

            <div className="flex gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-black/30 p-2">
              {EVENT_PHOTOS.map((photo, index) => (
                <button
                  key={photo.src}
                  type="button"
                  onClick={() => setSelectedPhotoIndex(index)}
                  className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border bg-black transition sm:h-20 sm:w-32 ${
                    index === selectedPhotoIndex
                      ? "border-[var(--accent-yellow)]"
                      : "border-white/10 hover:border-white/40"
                  }`}
                  aria-label={`Show event photo ${index + 1}`}
                >
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
