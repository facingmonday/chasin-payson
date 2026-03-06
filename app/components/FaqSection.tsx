const FAQ_ITEMS = [
  {
    question: "Is this a race?",
    answer:
      "No. It's a progressive shakeout ride. But it gets competitive quickly.",
  },
  {
    question: "Can I register onsite?",
    answer: "Yes, until 3PM if capacity allows.",
  },
  {
    question: "What bike should I bring?",
    answer: "Bring the bike you plan to ride.",
  },
  {
    question: "Is this part of Red Bull Rampage?",
    answer: "No. This is a community athlete activation event.",
  },
  {
    question: "What happens after the ride?",
    answer: "Podium + celebration at The Hub.",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      className="rounded-2xl border border-white/10 bg-[var(--background-secondary)] p-6 sm:p-8"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="mb-6 text-2xl font-bold tracking-tight text-white sm:text-3xl"
      >
        FAQ
      </h2>
      <div className="space-y-2">
        {FAQ_ITEMS.map((item, i) => (
          <details
            key={i}
            className="group rounded-lg border border-white/10 bg-[var(--background)]"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 text-left font-medium text-white [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                className="shrink-0 text-zinc-400 transition group-open:rotate-180"
                aria-hidden
              >
                ▼
              </span>
            </summary>
            <p className="border-t border-white/10 px-4 py-3 text-zinc-400">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
