import { JSX } from "react";

export default function ExampleCard({ index }: { index: number }): JSX.Element {
  const colors = [
    "from-[#fef3c7] to-[#fff7ed]",
    "from-[#ede9fe] to-[#eef2ff]",
    "from-[#e6fffa] to-[#ecfeff]",
  ];
  const bg = colors[index % colors.length];
  return (
    <article
      tabIndex={0}
      role="button"
      aria-label="Example bedtime story card"
      className={`w-56 rounded-3xl p-6 shadow-md bg-gradient-to-b ${bg} cursor-pointer select-none transform transition hover:scale-[1.04] hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed]`}
    >
      <div className="h-44 rounded-2xl mb-4 flex items-center justify-center bg-white/90 select-none">
        <div className="text-5xl">
          {index % 3 === 0 ? "🦄" : index % 3 === 1 ? "🚀" : "🐻"}
        </div>
      </div>
      <h4 className="font-semibold text-lg mb-1">The Moon Unicorn</h4>
      <p className="text-xs text-slate-600">
        A short bedtime tale about courage and friendship.
      </p>
    </article>
  );
}
