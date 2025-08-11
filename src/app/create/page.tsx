// app/create/page.tsx
"use client";

import { useState } from "react";
import { Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreatePage() {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [story, setStory] = useState("");

  const examplePrompts = [
    "A sleepy cat who learns to fly",
    "An astronaut meeting a friendly alien on Mars",
    "A magical library where books talk to you",
  ];

  async function handleGenerate() {
    if (!prompt.trim()) return;
    setLoading(true);
    setStory("");

    try {
      const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://dreamtales.netlify.app",
          "X-Title": "DreamTales",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "openai/gpt-oss-20b:free",
          messages: [
            {
              role: "user",
              content: `You are a magical children's storyteller. Write a short, fun, colorful story based on this idea: "${prompt}"`,
            },
          ],
        }),
      });

      const data = await res.json();
      const generated =
        data.choices?.[0]?.message?.content || "No story found.";
      setStory(generated);
    } catch (err) {
      console.error(err);
      setStory("Error generating story.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 mb-6 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </Link>

        <h1 className="text-4xl font-extrabold text-center mb-6 text-purple-700 drop-shadow-sm">
          Create Your DreamTale ✨
        </h1>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 space-y-4 border border-white/50">
          <textarea
            className="w-full h-28 border border-pink-200 rounded-xl p-4 text-slate-700 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/90"
            placeholder="Describe your story idea..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-white py-3 rounded-xl font-semibold shadow-md hover:scale-[1.02] active:scale-[0.98] transition disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading && <Loader2 className="w-5 h-5 animate-spin" />}
            {loading ? "Creating..." : "Generate Story"}
          </button>
        </div>

        {/* Example prompts */}
        <div className="mt-8">
          <p className="text-purple-600 font-medium mb-3">
            Try one of these ideas:
          </p>
          <div className="flex flex-wrap gap-2">
            {examplePrompts.map((ex, i) => (
              <button
                key={i}
                onClick={() => setPrompt(ex)}
                className="px-3 py-1.5 bg-white/80 border border-purple-200 rounded-full text-purple-700 hover:bg-purple-100 transition text-sm shadow-sm"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>

        {/* Generated story */}
        {story && (
          <div className="mt-10 bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 p-6 rounded-2xl shadow-inner border border-white/60">
            <h2 className="text-lg font-bold mb-2 text-purple-700">
              Your Story:
            </h2>
            <p className="text-slate-700 whitespace-pre-line">{story}</p>
          </div>
        )}
      </div>
    </div>
  );
}
