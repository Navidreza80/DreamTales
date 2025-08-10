import { JSX } from "react";
import IllustrationSVG from "./IllustrationSVG";

export default function AppMockup(): JSX.Element {
  return (
    <div className="max-w-md">
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-3 items-center">
            <div className="w-12 h-12 bg-gradient-to-r from-[#fde68a] to-[#fbcfe8] rounded-xl flex items-center justify-center text-2xl select-none">
              🌙
            </div>
            <div>
              <div className="text-sm font-semibold select-text">
                My First DreamTale
              </div>
              <div className="text-xs text-slate-500 select-text">
                A short story for Lina
              </div>
            </div>
          </div>
          <div className="text-sm text-slate-400 select-text">2 min</div>
        </div>

        <div className="h-72 rounded-3xl overflow-hidden bg-gradient-to-b from-[#fef3c7] to-[#fff7ed] flex items-center justify-center">
          <IllustrationSVG />
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-slate-700 select-text">
            PDF • Narration • Print
          </div>
          <div className="flex gap-3">
            <button className="text-sm px-4 py-2 rounded-md border border-slate-300 hover:border-[#7c3aed] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c3aed]">
              Preview
            </button>
            <button className="text-sm px-6 py-2 rounded-full bg-[#7c3aed] text-white font-semibold shadow-md hover:brightness-110 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4c1d95]">
              Get Story
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
