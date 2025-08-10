"use client";

import Link from "next/link";
import AppMockup from "./AppMockUp";
import Badge from "./Badge";
import ExampleCard from "./ExampleCard";
import Logo from "./Logo";

type Feature = {
  title: string;
  description: string;
  emoji?: string;
};

const FEATURES: Feature[] = [
  {
    title: "Imagine",
    description: "Type one sentence and spark an idea.",
    emoji: "💡",
  },
  {
    title: "Create",
    description: "AI crafts a unique illustrated storybook.",
    emoji: "✨",
  },
  {
    title: "Read & Share",
    description: "Download, print, or send to family.",
    emoji: "📚",
  },
];

export function DreamTalesLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f6fbff] to-[#fff8fb] text-slate-900 selection:bg-[#7c3aed] selection:text-white">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed] rounded"
        >
          <Logo />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a
            href="#how"
            className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed] rounded px-1"
          >
            How it works
          </a>
          <a
            href="#examples"
            className="hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed] rounded px-1"
          >
            Examples
          </a>
          <Link
            href="/create"
            className="rounded-full bg-gradient-to-r from-[#6ee7b7] to-[#60a5fa] px-5 py-2 text-sm font-semibold shadow-md hover:brightness-110 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22c55e]"
          >
            Create a Story
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <div className="max-w-6xl mx-auto px-6 py-16 lg:pt-10 grid lg:grid-cols-2 gap-12 items-center">
        <section>
          <div className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 max-w-lg">
            Turn tiny ideas into
            <span className="bg-clip-text text-transparent bg-gradient-to-r mx-3 from-[#7c3aed] to-[#06b6d4]">
              magical
            </span>
            stories
          </div>

          <p className="text-lg text-slate-700 mb-8 max-w-md">
            Type a sentence, pick a style, and watch DreamTales create a
            one-of-a-kind illustrated story your child will love.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link
              href="/create"
              className="inline-flex items-center gap-2 rounded-full bg-[#7c3aed] px-6 py-3 text-white font-semibold shadow-lg hover:brightness-110 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4c1d95]"
            >
              Create a Story
            </Link>
            <a
              href="#examples"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-medium bg-white shadow-sm hover:bg-slate-100 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed]"
            >
              See examples
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Badge>Safe for kids</Badge>
            <Badge>Offline PDF</Badge>
            <Badge>Custom voices</Badge>
          </div>
        </section>

        <section className="relative flex justify-end">
          <AppMockup />
        </section>
      </div>

      {/* HOW IT WORKS */}
      <section id="how" className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">How DreamTales works</h2>
          <p className="text-slate-600 mt-3 text-lg">
            Three simple steps to create bedtime magic.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {FEATURES.map((f) => (
            <article
              key={f.title}
              className="bg-white p-8 rounded-3xl shadow-md cursor-pointer select-none"
              tabIndex={0}
              role="button"
              aria-label={`${f.title}: ${f.description}`}
            >
              <div className="text-4xl mb-5">{f.emoji}</div>
              <h3 className="font-semibold text-xl mb-3">{f.title}</h3>
              <p className="text-slate-600 text-base">{f.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* EXAMPLES */}
      <section id="examples" className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Example Stories</h2>
          <a
            href="/examples"
            className="text-sm text-slate-600 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed]"
          >
            View all
          </a>
        </div>

        <div className="relative group">
          {/* Slider container - scrollbar hidden */}
          <div className="overflow-x-auto hide-scrollbar py-6">
            <div className="flex gap-6 w-max px-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <ExampleCard key={i} index={i} />
              ))}
            </div>
          </div>

          {/* Left Button with enhanced animations */}
          <button
            className="absolute cursor-pointer left-5 top-1/2 -translate-y-1/2 bg-white/90 text-[#7c3aed] p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 
              hover:scale-110 hover:bg-white/100 hover:shadow-xl
              active:scale-95 active:bg-[#7c3aed]/10 active:shadow-md"
            onClick={() => {
              const container = document.querySelector(".overflow-x-auto");
              container?.scrollBy({ left: -300, behavior: "smooth" });
            }}
            aria-label="Scroll left"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform duration-200 hover:scale-125 active:scale-90"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Right Button with enhanced animations */}
          <button
            className="absolute cursor-pointer right-5 top-1/2 -translate-y-1/2 bg-white/90 text-[#7c3aed] p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 
              hover:scale-110 hover:bg-white/100 hover:shadow-xl
              active:scale-95 active:bg-[#7c3aed]/10 active:shadow-md"
            onClick={() => {
              const container = document.querySelector(".overflow-x-auto");
              container?.scrollBy({ left: 300, behavior: "smooth" });
            }}
            aria-label="Scroll right"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="transition-transform duration-200 hover:scale-125 active:scale-90"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Gradient fade effects */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
        </div>
      </section>

      {/* CTA */}
      <section className="mt-12 bg-gradient-to-r from-[#fff1f2] to-[#eef2ff] py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to create your child’s first DreamTale?
          </h3>
          <p className="text-slate-700 mb-8 text-lg">
            Free to try — delightful for kids, trusted by parents.
          </p>
          <Link
            href="/create"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] px-8 py-4 text-white text-lg font-semibold shadow-lg hover:brightness-110 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4c1d95]"
          >
            Make a Story
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 text-sm text-slate-600 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <div>© {new Date().getFullYear()} DreamTales — made with ❤️</div>
        <div className="flex gap-6">
          <a
            href="/privacy"
            className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed]"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed]"
          >
            Terms
          </a>
        </div>
      </footer>
    </div>
  );
}
