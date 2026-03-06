import Link from "next/link";
import { RULE_OF_THREE_URL } from "../constants";

export function Footer() {
  return (
    <footer
      className="mt-20 border-t border-white/10 bg-[var(--background)]"
      aria-label="Site footer"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-4 py-8 sm:px-6 lg:px-8">
        <nav
          className="flex flex-wrap gap-6 text-sm text-zinc-500"
          aria-label="Footer links"
        >
          <Link href="#privacy" className="hover:text-zinc-300">
            Privacy
          </Link>
          <Link href="#terms" className="hover:text-zinc-300">
            Terms
          </Link>
          <Link href="#contact" className="hover:text-zinc-300">
            Contact
          </Link>
        </nav>
        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500">
          <Link
            href={RULE_OF_THREE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300"
          >
            Rule of Three
          </Link>
          <a
            href="https://redbull.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-300"
          >
            Red Bull
          </a>
          <span>Powered by Kikits</span>
        </div>
      </div>
    </footer>
  );
}
