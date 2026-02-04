"use client";
import { Trophy, Code2, Target, Zap, LayoutGrid, Terminal, ExternalLink } from "lucide-react";

export default function CPPage() {
  const platforms = [
    {
      name: "Codeforces",
      handle: "obaidul_haque",
      rating: "1400+",
      rank: "Specialist (Projected)",
      color: "from-blue-500 to-blue-600",
      link: "https://codeforces.com"
    },
    {
      name: "LeetCode",
      handle: "obaidul_haque",
      solved: "300+",
      rank: "Top 10%",
      color: "from-orange-400 to-orange-500",
      link: "https://leetcode.com"
    },
    {
      name: "CodeChef",
      handle: "obaidul_saiki",
      rating: "3 Star",
      rank: "Global Rank...",
      color: "from-amber-600 to-amber-700",
      link: "https://codechef.com"
    }
  ];

  const highlights = [
    "Solved 1000+ problems across various online judges.",
    "Participant in ICPC Regionals (Mock/National level).",
    "Consistently in Top 5% for Weekly LeetCode contests.",
    "Strong grasp of Graph Theory and Dynamic Programming."
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 hero-gradient">
      <div className="max-w-6xl mx-auto px-6 space-y-20">

        {/* HEADER */}
        <div className="text-center space-y-4">
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm flex items-center justify-center">
            <Trophy size={18} className="mr-2" /> Competitive Excellence
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-zinc-900 leading-tight">
            Competitive <span className="text-blue-600">Programming</span>
          </h1>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Sharpening my problem-solving skills and algorithmic thinking through high-pressure contests and complex data structures.
          </p>
        </div>

        {/* STATS OVERVIEW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((p, i) => (
            <a
              key={i}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="glass-card p-8 rounded-[2.5rem] border border-zinc-100 shadow-xl group-hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className={`absolute top-0 right-0 w-2 h-full bg-gradient-to-b ${p.color}`}></div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-zinc-900">{p.name}</h3>
                    <Code2 className="text-zinc-300 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">Handle</p>
                    <p className="text-lg font-semibold text-zinc-800">{p.handle}</p>
                  </div>
                  <div className="flex gap-4 pt-2">
                    <div className="bg-zinc-50 px-4 py-2 rounded-xl border border-zinc-100">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase">Rating/Solved</p>
                      <p className="text-blue-600 font-bold">{p.rating || p.solved}</p>
                    </div>
                    <div className="bg-zinc-50 px-4 py-2 rounded-xl border border-zinc-100">
                      <p className="text-[10px] font-bold text-zinc-400 uppercase">Rank</p>
                      <p className="text-zinc-900 font-bold">{p.rank}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* HIGHLIGHTS & SKILLS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-7 space-y-8">
            <h3 className="text-2xl font-bold text-zinc-900 flex items-center">
              <Zap className="mr-3 text-blue-600" size={24} /> Key Highlights
            </h3>
            <div className="space-y-4">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-4 bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm">
                  <div className="mt-1 bg-blue-50 p-2 rounded-lg text-blue-600">
                    <Target size={20} />
                  </div>
                  <p className="text-zinc-700 text-lg font-medium leading-relaxed">{h}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-2xl font-bold text-zinc-900 flex items-center">
              <Terminal className="mr-3 text-blue-600" size={24} /> Algorithm Toolkit
            </h3>
            <div className="glass-card p-8 rounded-[2rem] border border-zinc-100 space-y-6 shadow-lg">
              <div className="flex flex-wrap gap-2">
                {["Dijkstra", "Dynamic Programming", "Segment Tree", "Binary Search", "DFS/BFS", "Number Theory", "Recursion", "Two Pointers"].map((tag, i) => (
                  <span key={i} className="bg-zinc-900 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-md hover:bg-blue-600 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div className="flex items-center text-zinc-500 font-medium">
                  <LayoutGrid size={18} className="mr-2" /> Categories
                </div>
                <span className="text-zinc-800 font-bold">15+ Advanced Topics</span>
              </div>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="text-center pt-10">
          <p className="text-zinc-500 mb-6 font-medium italic">"Algorithm is the soul of backend engineering."</p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 text-blue-600 font-bold text-lg hover:underline underline-offset-8 decoration-2"
          >
            <span>Interested in algorithmic collaboration?</span>
            <ExternalLink size={20} />
          </a>
        </div>

      </div>
    </main>
  );
}
